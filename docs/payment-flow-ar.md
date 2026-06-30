# تدفق الدفع في التطبيق

هذا المشروع يستخدم **Stripe** مع **Next.js** لتنفيذ عملية الدفع بطريقة قريبة من بيئة **Production**، ولكن باستخدام قاعدة بيانات **Dummy** داخلية بدلًا من قاعدة بيانات حقيقية.

## الفكرة العامة

الـ **Frontend** لا ينفذ أي منطق حساس، مثل إنشاء الطلب النهائي أو تأكيد شراء الكورس بنفسه، وإنما يقتصر دوره على:

- جمع بيانات المستخدم.
- إرسال طلب إلى الـ **Backend** لإنشاء **PaymentIntent**.
- تمرير **clientSecret** إلى **Stripe**.
- انتظار نتيجة عملية الدفع.

أما الـ **Backend** فهو المسؤول عن:

- تحديد سعر الكورس من المصدر الداخلي.
- إنشاء **PaymentIntent**.
- تسجيل طلب مؤقت بحالة **PENDING**.
- استقبال **Webhook** من **Stripe** بعد نجاح عملية الدفع.
- تغيير حالة الطلب إلى **PAID**.
- إنشاء بيانات تجريبية (**Dummy**) مثل **invoiceId** و **enrollmentId**.

---



## ماذا يحدث عند الضغط على زر الدفع؟

1. يفتح المستخدم صفحة **Gift Course**.
2. يملأ الاسم والبريد الإلكتروني ورسالة الهدية.
3. يضغط على **Complete Payment**.
4. يرسل الـ **Frontend** كلًا من **courseId** وبيانات المستلم إلى:
  ```text

   /api/create-payment-intent

  ```
5. يقرأ الـ **Backend** سعر الكورس من:
  ```text

   lib/dummy-commerce.ts

  ```
   بدلًا من الاعتماد على السعر القادم من المتصفح.
6. يقوم **Stripe** بإنشاء **PaymentIntent**.
7. يتم حفظ طلب مؤقت داخل الذاكرة بحالة **PENDING**.
8. يستدعي الـ **Frontend**:
  ```ts

   stripe.confirmCardPayment(...)

  ```
9. يعالج **Stripe** بيانات البطاقة.
10. عند نجاح عملية الدفع، يرسل **Stripe** طلب **Webhook** إلى:
  ```text

    /webhook

  ```
11. يقوم الـ **Webhook** بتغيير حالة الطلب إلى **PAID**، ثم ينشئ بيانات تجريبية مثل الفاتورة (**Invoice**) والتسجيل (**Enrollment**).
12. تعرض الواجهة رسالة نجاح للمستخدم.

---


## ماذا كان يحدث قبل ذلك؟

قبل هذا التعديل كان الفلو أبسط بكثير:

- كان الـ **Frontend** يرسل `amount` مباشرة من المتصفح.
- كان الـ **Backend** ينشئ **PaymentIntent** اعتمادًا على القيمة القادمة من الواجهة.
- بعد `stripe.confirmCardPayment(...)` كانت الواجهة تعرض نجاح الدفع فقط.
- لم يكن هناك **Webhook** ينفذ أي خطوة نهائية على السيرفر.
- لم يكن هناك تسجيل فعلي للطلب أو **Invoice** أو **Enrollment**.

---



## لماذا تعتبر هذه الطريقة أفضل من الاعتماد على الواجهة فقط؟

- لأن بيانات المتصفح يمكن تعديلها أو التلاعب بها.
- لأن نجاح عملية الدفع يجب أن يتم التأكد منه من خلال **Stripe** نفسه عبر **Webhook**.
- لأن إنهاء الطلب داخل الـ **Webhook** يمنع الاعتماد على رسالة النجاح القادمة من الواجهة فقط، والتي يمكن تزويرها.

---



## ما هو الـ Dummy Backend في هذا المشروع؟

بدلًا من استخدام **Prisma** أو قاعدة بيانات حقيقية، يعتمد المشروع على مخزن بيانات داخل الذاكرة موجود في الملف:

```text

lib/dummy-commerce.ts

```

وهذا مناسب للتجربة والتعليم، لكنه **غير مناسب للإنتاج (Production)** لأن جميع البيانات ستفقد بمجرد إعادة تشغيل الخادم.

---



## الملفات المهمة

```text

/app/api/create-payment-intent/route.ts

/app/webhook/route.ts

/components/gift-course/hooks/use-submit-gift.tsx

/lib/dummy-commerce.ts

```

---



## ملخص سريع

```text

Frontend

      │

      ▼

create-payment-intent

      │

      ▼

Stripe (PaymentIntent)

      │

      ▼

confirmCardPayment

      │

      ▼

Stripe Webhook

      │

      ▼

Backend Finalization

      │

      ▼

Order → PAID + Invoice + Enrollment

```

**التدفق النهائي:**

```text

Frontend

    ↓

create-payment-intent

    ↓

Stripe

    ↓

confirmCardPayment

    ↓

Stripe Webhook

    ↓

Backend Finalization

```
