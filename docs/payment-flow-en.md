# Payment Flow in the App

This project uses Stripe with Next.js to model a production-style payment flow, backed by an in-memory dummy store instead of a real database.

## High-level idea

The frontend does not perform sensitive business logic such as finalizing an order or granting access to a course.  
Its job is only to:

1. Collect user input.
2. Ask the backend to create a `PaymentIntent`.
3. Pass the returned `clientSecret` to Stripe.
4. Wait for the payment result.

The backend is responsible for:

1. Resolving the real course price from an internal source.
2. Creating the `PaymentIntent`.
3. Creating a pending dummy order.
4. Receiving Stripe webhooks after payment success.
5. Marking the order as `PAID`.
6. Producing dummy invoice and enrollment identifiers.

## What happens when the user clicks pay

1. The user opens the `gift course` page.
2. They enter recipient details and a gift message.
3. They click `Complete payment`.
4. The frontend sends the `courseId` and recipient data to `/api/create-payment-intent`.
5. The backend looks up the course price from `lib/dummy-commerce.ts` instead of trusting the client.
6. Stripe creates a `PaymentIntent`.
7. A pending order is stored in memory with status `PENDING`.
8. The frontend calls `stripe.confirmCardPayment(...)`.
9. Stripe processes the card.
10. If payment succeeds, Stripe sends a webhook to `/webhook`.
11. The webhook marks the order as `PAID` and generates dummy invoice/enrollment data.
12. The UI shows a success message to the user.

## What happened before?

Before this update, the flow was much simpler:

- The frontend sent `amount` directly from the browser.
- The backend created the `PaymentIntent` from the client-provided value.
- After `stripe.confirmCardPayment(...)`, the UI only showed a success state.
- There was no webhook doing any final server-side work.
- There was no real order, invoice, or enrollment record.

## Why this is better than trusting the UI

- The browser can be modified.
- Real payment success should be confirmed by Stripe via webhook.
- Finalizing the order inside the webhook keeps the source of truth on the server side.

## What dummy backend means here

Instead of Prisma or a real database, the app stores payment state in memory via:

- `lib/dummy-commerce.ts`

That is fine for demos and training, but not for production because the data disappears when the server restarts.

## Key files

- `/app/api/create-payment-intent/route.ts`
- `/app/webhook/route.ts`
- `/components/gift-course/hooks/use-submit-gift.tsx`
- `/lib/dummy-commerce.ts`

## Short version

The real flow is:

`Frontend -> create-payment-intent -> Stripe -> confirmCardPayment -> Stripe webhook -> backend finalization`
