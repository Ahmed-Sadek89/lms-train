import { NextResponse } from "next/server";
import { getStripe } from "@/lib/stripe";

export const runtime = "nodejs";

interface CreatePaymentIntentBody {
  amount?: unknown;
  email?: unknown;
  name?: unknown;
  giftMessage?: unknown;
  isSaveCardInfo?: unknown;
  price?: unknown;
}

export async function POST(req: Request) {
  try {
    const body = (await req.json()) as CreatePaymentIntentBody;

    const { amount, email, name, giftMessage, isSaveCardInfo, price } = body;

    if (typeof amount !== "number" || !Number.isInteger(amount) || amount <= 0) {
      return NextResponse.json(
        {
          success: false,
          message: "Amount must be a positive integer in the smallest currency unit.",
        },
        {
          status: 400,
        }
      );
    }

    const customerEmail = typeof email === "string" ? email.trim() : "";
    const customerName = typeof name === "string" ? name.trim() : "";
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
      amount,
      currency: "egp",
      customer: customerId,
      automatic_payment_methods: {
        enabled: true,
      },
      ...(Boolean(isSaveCardInfo) && {
        setup_future_usage: "off_session",
      }),
      receipt_email: customerEmail || undefined,
      metadata: {
        recipientName: customerName,
        recipientEmail: customerEmail,
        giftMessage: typeof giftMessage === "string" ? giftMessage : "",
        price: typeof price === "number" ? String(price) : "",
      },
    });

    return NextResponse.json({
      success: true,
      clientSecret: paymentIntent.client_secret,
      paymentIntentId: paymentIntent.id,
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
