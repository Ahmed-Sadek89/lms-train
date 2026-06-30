import { NextResponse } from "next/server";
import { getStripe } from "@/lib/stripe";
import { createPendingGiftOrder, getDummyCourse } from "@/lib/dummy-commerce";

export const runtime = "nodejs";

interface CreatePaymentIntentBody {
  courseId?: unknown;
  email?: unknown;
  name?: unknown;
  giftMessage?: unknown;
  isSaveCardInfo?: unknown;
}

export async function POST(req: Request) {
  try {
    const body = (await req.json()) as CreatePaymentIntentBody;

    const { courseId, email, name, giftMessage, isSaveCardInfo } = body;

    if (typeof courseId !== "string" || courseId.trim().length === 0) {
      return NextResponse.json(
        {
          success: false,
          message: "Course id is required.",
        },
        {
          status: 400,
        }
      );
    }

    const course = getDummyCourse(courseId.trim());

    if (!course) {
      return NextResponse.json(
        {
          success: false,
          message: "Course was not found.",
        },
        {
          status: 404,
        }
      );
    }

    const customerEmail = typeof email === "string" ? email.trim() : "";
    const customerName = typeof name === "string" ? name.trim() : "";
    const normalizedGiftMessage =
      typeof giftMessage === "string" ? giftMessage.trim() : "";
    const stripe = getStripe();
    let customerId: string | undefined;

    if (customerEmail) {
      const customers = await stripe.customers.list({
        email: customerEmail,
        limit: 1,
      });

      if (customers.data.length > 0) {
        customerId = customers.data[0].id;
      } else {
        const customer = await stripe.customers.create({
          email: customerEmail,
          name: customerName || undefined,
        });

        customerId = customer.id;
      }
    }

    const paymentIntent = await stripe.paymentIntents.create({
      amount: course.amount,
      currency: course.currency,
      customer: customerId,
      automatic_payment_methods: {
        enabled: true,
      },
      ...(Boolean(isSaveCardInfo) && {
        setup_future_usage: "off_session",
      }),
      receipt_email: customerEmail || undefined,
      metadata: {
        courseId: course.id,
        courseTitle: course.title,
        recipientName: customerName,
        recipientEmail: customerEmail,
        giftMessage: normalizedGiftMessage,
      },
    });

    createPendingGiftOrder({
      course,
      recipientName: customerName,
      recipientEmail: customerEmail,
      giftMessage: normalizedGiftMessage,
      stripePaymentIntentId: paymentIntent.id,
    });

    return NextResponse.json({
      success: true,
      clientSecret: paymentIntent.client_secret,
      paymentIntentId: paymentIntent.id,
      amount: course.amount,
      currency: course.currency,
    });
  } catch (error) {
    return NextResponse.json(
      {
        success: false,
        message:
          error instanceof Error ? error.message : "Internal Server Error",
      },
      {
        status: 500,
      }
    );
  }
}
