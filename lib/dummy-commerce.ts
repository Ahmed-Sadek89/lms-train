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

const dummyCourses: DummyCourse[] = [
  {
    id: "course-slug",
    title: "Graphic Design Masterclass - Learn GREAT Design",
    instructor: "Courtney Henry",
    amount: 75000,
    currency: "egp",
  },
];

const store = globalThis as typeof globalThis & {
  __dummyGiftOrders?: Map<string, DummyGiftOrder>;
};

const giftOrders = store.__dummyGiftOrders ?? new Map<string, DummyGiftOrder>();
store.__dummyGiftOrders = giftOrders;

export function getDummyCourse(courseId: string) {
  return dummyCourses.find((course) => course.id === courseId);
}

export function formatDummyMoney(amount: number, currency: DummyCourse["currency"]) {
  return new Intl.NumberFormat("en-EG", {
    style: "currency",
    currency: currency.toUpperCase(),
  }).format(amount / 100);
}

export function createPendingGiftOrder(input: {
  course: DummyCourse;
  recipientName: string;
  recipientEmail: string;
  giftMessage: string;
  stripePaymentIntentId: string;
}) {
  const order: DummyGiftOrder = {
    id: `gift_${input.stripePaymentIntentId}`,
    courseId: input.course.id,
    courseTitle: input.course.title,
    recipientName: input.recipientName,
    recipientEmail: input.recipientEmail,
    giftMessage: input.giftMessage,
    stripePaymentIntentId: input.stripePaymentIntentId,
    amount: input.course.amount,
    currency: input.course.currency,
    status: "PENDING",
    createdAt: new Date().toISOString(),
  };

  giftOrders.set(input.stripePaymentIntentId, order);

  return order;
}

export function markGiftOrderPaid(stripePaymentIntentId: string) {
  const existing = giftOrders.get(stripePaymentIntentId);

  if (!existing) {
    return null;
  }

  if (existing.status === "PAID") {
    return existing;
  }

  const paidOrder: DummyGiftOrder = {
    ...existing,
    status: "PAID",
    paidAt: new Date().toISOString(),
    invoiceId: `inv_${stripePaymentIntentId}`,
    enrollmentId: `enr_${existing.courseId}_${existing.recipientEmail}`,
  };

  giftOrders.set(stripePaymentIntentId, paidOrder);

  return paidOrder;
}

export function markGiftOrderFailed(stripePaymentIntentId: string) {
  const existing = giftOrders.get(stripePaymentIntentId);

  if (!existing) {
    return null;
  }

  const failedOrder: DummyGiftOrder = {
    ...existing,
    status: "FAILED",
    failedAt: new Date().toISOString(),
  };

  giftOrders.set(stripePaymentIntentId, failedOrder);

  return failedOrder;
}

export function getGiftOrderByPaymentIntent(stripePaymentIntentId: string) {
  return giftOrders.get(stripePaymentIntentId) ?? null;
}
