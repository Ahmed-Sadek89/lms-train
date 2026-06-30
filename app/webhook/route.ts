import { NextResponse } from "next/server";
import Stripe from "stripe";
import { markGiftOrderFailed, markGiftOrderPaid } from "@/lib/dummy-commerce";
import { getStripe } from "@/lib/stripe";

export const runtime = "nodejs";

export async function POST(request: Request) {
  const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET;

  if (!webhookSecret) {
    return NextResponse.json(
      {
        success: false,
        message: "Missing STRIPE_WEBHOOK_SECRET environment variable.",
      },
      {
        status: 500,
      }
    );
  }

  const body = await request.text();
  const signature = request.headers.get("stripe-signature");

  if (!signature) {
    return NextResponse.json(
      {
        success: false,
        message: "Missing stripe-signature header.",
      },
      {
        status: 400,
      }
    );
  }

  let event: Stripe.Event;

  try {
    event = getStripe().webhooks.constructEvent(body, signature, webhookSecret);
  } catch (error) {
    return NextResponse.json(
      {
        success: false,
        message:
          error instanceof Error ? error.message : "Invalid Stripe webhook.",
      },
      {
        status: 400,
      }
    );
  }

  if (event.type === "payment_intent.succeeded") {
    const paymentIntent = event.data.object;
    const order = markGiftOrderPaid(paymentIntent.id);

    if (order) {
      console.info("Dummy gift finalized", {
        orderId: order.id,
        invoiceId: order.invoiceId,
        enrollmentId: order.enrollmentId,
        recipientEmail: order.recipientEmail,
      });
    }
  }

  if (event.type === "payment_intent.payment_failed") {
    const paymentIntent = event.data.object;
    markGiftOrderFailed(paymentIntent.id);
  }

  return NextResponse.json({
    received: true,
  });
}
