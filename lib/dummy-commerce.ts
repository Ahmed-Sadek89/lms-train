export interface DummyCourse {
  id: string;
  title: string;
  instructor: string;
  amount: number;
  currency: "egp";
}

export type DummyGiftOrderStatus = "PENDING" | "PAID" | "FAILED";

export interface DummyGiftOrder {
  id: string;
  courseId: string;
  courseTitle: string;
  recipientName: string;
  recipientEmail: string;
  giftMessage: string;
  stripePaymentIntentId: string;
  amount: number;
  currency: DummyCourse["currency"];
  status: DummyGiftOrderStatus;
  createdAt: string;
  paidAt?: string;
  failedAt?: string;
  invoiceId?: string;
  enrollmentId?: string;
}

export interface DummyTransaction {
  id: string;
  type: "payment_intent";
  courseId: string;
  courseTitle: string;
  recipientName: string;
  recipientEmail: string;
  giftMessage: string;
  stripePaymentIntentId: string;
  amount: number;
  currency: DummyCourse["currency"];
  status: DummyGiftOrderStatus;
  createdAt: string;
  updatedAt: string;
  paidAt?: string;
  failedAt?: string;
  invoiceId?: string;
  enrollmentId?: string;
}

const JSON_SERVER_URL = (process.env.JSON_SERVER_URL ?? "http://127.0.0.1:4000").replace(
  /\/$/,
  ""
);

async function requestJsonServer<T>(
  path: string,
  init?: RequestInit
): Promise<T> {
  const response = await fetch(`${JSON_SERVER_URL}${path}`, {
    ...init,
    headers: {
      "Content-Type": "application/json",
      ...(init?.headers ?? {}),
    },
  });

  if (!response.ok) {
    const message = await response.text();
    throw new Error(
      message || `JSON server request failed with status ${response.status}`
    );
  }

  if (response.status === 204) {
    return undefined as T;
  }

  return (await response.json()) as T;
}

export function formatDummyMoney(
  amount: number,
  currency: DummyCourse["currency"]
) {
  return new Intl.NumberFormat("en-EG", {
    style: "currency",
    currency: currency.toUpperCase(),
  }).format(amount / 100);
}

export async function getDummyCourse(courseId: string) {
  return requestJsonServer<DummyCourse | null>(`/courses/${courseId}`).catch(
    () => null
  );
}

export async function createPendingGiftOrder(input: {
  course: DummyCourse;
  recipientName: string;
  recipientEmail: string;
  giftMessage: string;
  stripePaymentIntentId: string;
}) {
  const now = new Date().toISOString();
  const payload: DummyGiftOrder & { updatedAt: string } = {
    id: input.stripePaymentIntentId,
    courseId: input.course.id,
    courseTitle: input.course.title,
    recipientName: input.recipientName,
    recipientEmail: input.recipientEmail,
    giftMessage: input.giftMessage,
    stripePaymentIntentId: input.stripePaymentIntentId,
    amount: input.course.amount,
    currency: input.course.currency,
    status: "PENDING",
    createdAt: now,
    updatedAt: now,
  };

  const [order] = await Promise.all([
    requestJsonServer<DummyGiftOrder>("/giftOrders", {
      method: "POST",
      body: JSON.stringify(payload),
    }),
    requestJsonServer<DummyTransaction>("/transactions", {
      method: "POST",
      body: JSON.stringify({
        ...payload,
        type: "payment_intent",
      }),
    }),
  ]);

  return order;
}

export async function markGiftOrderPaid(stripePaymentIntentId: string) {
  const existing = await getGiftOrderByPaymentIntent(stripePaymentIntentId);

  if (!existing) {
    return null;
  }

  const now = new Date().toISOString();
  const updatedPayload = {
    ...existing,
    status: "PAID" as const,
    paidAt: now,
    updatedAt: now,
    invoiceId: `inv_${stripePaymentIntentId}`,
    enrollmentId: `enr_${existing.courseId}_${existing.recipientEmail}`,
  };

  const [order] = await Promise.all([
    requestJsonServer<DummyGiftOrder>(`/giftOrders/${stripePaymentIntentId}`, {
      method: "PATCH",
      body: JSON.stringify(updatedPayload),
    }),
    requestJsonServer<DummyTransaction>(`/transactions/${stripePaymentIntentId}`, {
      method: "PATCH",
      body: JSON.stringify(updatedPayload),
    }),
  ]);

  return order;
}

export async function markGiftOrderFailed(stripePaymentIntentId: string) {
  const existing = await getGiftOrderByPaymentIntent(stripePaymentIntentId);

  if (!existing) {
    return null;
  }

  const now = new Date().toISOString();
  const updatedPayload = {
    ...existing,
    status: "FAILED" as const,
    failedAt: now,
    updatedAt: now,
  };

  const [order] = await Promise.all([
    requestJsonServer<DummyGiftOrder>(`/giftOrders/${stripePaymentIntentId}`, {
      method: "PATCH",
      body: JSON.stringify(updatedPayload),
    }),
    requestJsonServer<DummyTransaction>(`/transactions/${stripePaymentIntentId}`, {
      method: "PATCH",
      body: JSON.stringify(updatedPayload),
    }),
  ]);

  return order;
}

export async function getGiftOrderByPaymentIntent(stripePaymentIntentId: string) {
  return requestJsonServer<DummyGiftOrder | null>(
    `/giftOrders/${stripePaymentIntentId}`
  ).catch(() => null);
}
