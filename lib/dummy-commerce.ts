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
  __dummyTransactions?: Map<string, DummyTransaction>;
};

const giftOrders = store.__dummyGiftOrders ?? new Map<string, DummyGiftOrder>();
const transactions =
  store.__dummyTransactions ?? new Map<string, DummyTransaction>();

store.__dummyGiftOrders = giftOrders;
store.__dummyTransactions = transactions;

export function getDummyCourse(courseId: string) {
  return dummyCourses.find((course) => course.id === courseId);
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

export function createPendingGiftOrder(input: {
  course: DummyCourse;
  recipientName: string;
  recipientEmail: string;
  giftMessage: string;
  stripePaymentIntentId: string;
}) {
  const now = new Date().toISOString();

  const order: DummyGiftOrder = {
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
  };

  const transaction: DummyTransaction = {
    ...order,
    type: "payment_intent",
    updatedAt: now,
  };

  giftOrders.set(order.id, order);
  transactions.set(transaction.id, transaction);

  return order;
}

export function markGiftOrderPaid(stripePaymentIntentId: string) {
  const existing = giftOrders.get(stripePaymentIntentId);

  if (!existing) {
    return null;
  }

  const now = new Date().toISOString();

  const paidOrder: DummyGiftOrder = {
    ...existing,
    status: "PAID",
    paidAt: now,
    invoiceId: `inv_${stripePaymentIntentId}`,
    enrollmentId: `enr_${existing.courseId}_${existing.recipientEmail}`,
  };

  const paidTransaction: DummyTransaction = {
    ...transactions.get(stripePaymentIntentId)!,
    ...paidOrder,
    updatedAt: now,
  };

  giftOrders.set(stripePaymentIntentId, paidOrder);
  transactions.set(stripePaymentIntentId, paidTransaction);

  return paidOrder;
}

export function markGiftOrderFailed(stripePaymentIntentId: string) {
  const existing = giftOrders.get(stripePaymentIntentId);

  if (!existing) {
    return null;
  }

  const now = new Date().toISOString();

  const failedOrder: DummyGiftOrder = {
    ...existing,
    status: "FAILED",
    failedAt: now,
  };

  const failedTransaction: DummyTransaction = {
    ...transactions.get(stripePaymentIntentId)!,
    ...failedOrder,
    updatedAt: now,
  };

  giftOrders.set(stripePaymentIntentId, failedOrder);
  transactions.set(stripePaymentIntentId, failedTransaction);

  return failedOrder;
}

export function getGiftOrderByPaymentIntent(stripePaymentIntentId: string) {
  return giftOrders.get(stripePaymentIntentId) ?? null;
}
