# Project Structure

This project is a Next.js 16 App Router application for an LMS storefront and course experience. It uses route folders under `app`, feature folders under `components`, shared primitives under `components/ui`, and supporting utilities in `lib`, `utils`, `hooks`, and `types`.

## Top-Level Layout

```text
lms-train/
├── app/                 # Next.js App Router routes, layouts, API routes, and global CSS
├── components/          # Feature components, layout components, and reusable UI primitives
├── docs/                # Project documentation
├── hooks/               # Shared React hooks
├── lib/                 # Shared library helpers and service clients
├── public/              # Static assets served from the site root
├── scripts/             # Local automation and validation scripts
├── types/               # Shared TypeScript types
├── utils/               # General-purpose project utilities
├── AGENTS.md            # Agent/project instructions
├── components.json      # shadcn/ui configuration
├── eslint.config.mjs    # ESLint configuration
├── next.config.ts       # Next.js configuration
├── package.json         # Scripts and dependencies
├── pnpm-lock.yaml       # pnpm dependency lockfile
├── postcss.config.mjs   # PostCSS/Tailwind processing configuration
└── tsconfig.json        # TypeScript configuration
```

## App Routes

The `app` directory follows Next.js App Router conventions:

- `app/layout.tsx` is the root layout for the whole application.
- `app/globals.css` contains global styles and Tailwind CSS setup.
- `app/not-found.tsx` defines the global not-found UI.
- `app/(public)` is a route group. The `(public)` segment organizes public pages without adding `public` to the URL.
- `app/api/**/route.ts` files define API endpoints.

Current route map:

```text
app/
├── (public)/
│   ├── layout.tsx                         # Public-facing layout
│   ├── page.tsx                           # /
│   ├── category/page.tsx                  # /category
│   └── courses/
│       ├── page.tsx                       # /courses
│       └── [slug]/
│           ├── page.tsx                   # /courses/:slug
│           ├── gift/page.tsx              # /courses/:slug/gift
│           └── watch/[series]/page.tsx    # /courses/:slug/watch/:series
├── api/
│   ├── create-payment-intent/route.ts     # Stripe payment intent endpoint
│   └── stripe/webhook/route.ts            # Stripe webhook endpoint
├── test/page.tsx                          # /test
├── globals.css
├── layout.tsx
└── not-found.tsx
```

## Components

The `components` directory is organized by feature area and shared UI scope.

```text
components/
├── homepage/          # Home page composition and sections
├── category/          # Category page composition and sections
├── course-details/    # Course details page composition, content, and helpers
├── gift-course/       # Gift course flow, form layout, hooks, and schema helpers
├── layout/            # Shared page chrome such as headers and footers
└── ui/                # Reusable design-system components and primitives
```

Feature folders commonly use this pattern:

- `index.tsx` exports the main component for the feature or section.
- `components/` contains smaller pieces used only by that feature.
- `utils/` contains local constants, display data, schemas, or helper functions.
- `hooks/` contains feature-specific React hooks.

The `components/ui` folder contains reusable components that can be shared across features, including buttons, inputs, cards, accordions, tabs, pagination, comments, ratings, and course selection wrappers. Add broadly reusable presentation components here; keep page-specific UI inside the matching feature folder.

## Supporting Code

```text
lib/
├── stripe.ts              # Stripe client/setup helper
├── dummy-commerce.ts      # Commerce fixture/helper data
└── utils.ts               # Shared utility helpers

hooks/
└── use-sanitize-from-XSS.ts

types/
├── courses.ts             # Course-related TypeScript types
└── payment.ts             # Payment-related TypeScript types

utils/
├── build-query-href.ts    # Query string/link helper
└── formate-payment-info.ts
```

Use `lib` for shared integrations and low-level helpers, `utils` for generic application helpers, `hooks` for shared React hooks, and `types` for cross-feature TypeScript contracts.

## Static Assets

Static assets live in `public` and are served from the site root.

```text
public/
├── icon/      # SVG icons used by the UI
├── images/    # Course, instructor, hero, and marketing images
├── logo.svg
├── logo-2.svg
└── *.svg      # Default Next/Vercel starter assets
```

Reference assets with root-relative paths such as `/images/hero-bg.jpg` or `/icon/visa.svg`.

## Documentation

Project documentation lives in `docs`.

```text
docs/
├── payment-flow-ar.md
├── payment-flow-en.md
└── project-structure.md
```

Add new process, architecture, or feature-flow documentation here when it helps future contributors understand decisions or workflows.

## Tooling And Configuration

- `package.json` defines the main commands: `dev`, `build`, `start`, `lint`, and `prepare`.
- `pnpm-lock.yaml` and `pnpm-workspace.yaml` indicate pnpm is the package manager.
- `.husky/` contains Git hook wiring.
- `scripts/check-before-commit.mjs` runs local checks before commits.
- `components.json` configures shadcn/ui component generation.
- `.env.example` documents required environment variables. Local secrets belong in `.env.local`, which should not be committed.

## Where To Put New Code

- New route: add a `page.tsx`, `layout.tsx`, or `route.ts` under `app`.
- Public page route: place it under `app/(public)` when it belongs to the public site.
- Feature-specific UI: add it under the relevant folder in `components`.
- Reusable UI primitive: add it under `components/ui`.
- Shared integration or client: add it under `lib`.
- Shared type: add it under `types`.
- Shared hook: add it under `hooks`.
- Project documentation: add it under `docs`.
