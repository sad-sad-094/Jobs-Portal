# @job-portal/frontend

Single Page Application for the Jobs Portal built with React, TypeScript, Vite and Tailwind CSS.

## Tech Stack

- **Framework:** React 18 + TypeScript
- **Build Tool:** Vite
- **Styling:** Tailwind CSS v4
- **Routing:** TanStack Router
- **Server State:** TanStack Query
- **Client State:** Zustand

## Prerequisites

- Node.js >= 18
- pnpm
- Backend server running on port 8080

## Setup

### 1. Environment Variables

Copy the `.env.example` file and fill in your own values:

```bash
cp .env.example .env
```

The `.env.example` file contains the required variables:

```env
VITE_API_URL=
```

### 2. Install Dependencies

From the monorepo root:

```bash
pnpm install
```

### 3. Start Development Server

```bash
pnpm --filter @job-portal/frontend dev
```

The app runs at `http://localhost:5173`.

To run both backend and frontend simultaneously from the monorepo root:

```bash
pnpm dev
```

## Available Scripts

| Script | Description |
|--------|-------------|
| `pnpm dev` | Start Vite development server |
| `pnpm build` | Type-check and build for production |
| `pnpm preview` | Preview production build locally |
| `pnpm lint` | Run TypeScript type checking |

## Pages

| Path | Page | Description |
|------|------|-------------|
| `/` | HomePage | Landing page with CTA navigation |
| `/jobs` | JobsPage | Job listings with search and filters |
| `/jobs/:id` | JobDetailPage | Job detail with application form |
| `/applications` | ApplicationsPage | User application history |

## Project Structure

```
src/
├── components/
│   ├── ui/                    # Generic reusable components
│   │   ├── Badge.tsx
│   │   ├── Button.tsx
│   │   ├── Card.tsx
│   │   ├── Input.tsx
│   │   └── Spinner.tsx
│   └── layout/                # Structural components
│       ├── Header.tsx
│       ├── Footer.tsx
│       └── Layout.tsx
├── features/
│   ├── jobs/
│   │   ├── components/        # Job-specific components
│   │   │   ├── JobCard.tsx
│   │   │   ├── JobList.tsx
│   │   │   ├── JobDetail.tsx
│   │   │   └── JobFilters.tsx
│   │   └── hooks/             # TanStack Query hooks
│   │       ├── useJobs.ts
│   │       └── useJobDetail.ts
│   └── applications/
│       ├── components/        # Application-specific components
│       │   ├── ApplicationForm.tsx
│       │   └── ApplicationList.tsx
│       └── hooks/             # TanStack Query hooks
│           ├── useApply.ts
│           └── useApplications.ts
├── pages/                     # Page components
├── routes/                    # TanStack Router configuration
│   └── index.tsx
├── services/                  # API client and service functions
│   ├── api.ts
│   ├── job.service.ts
│   ├── role.service.ts
│   └── application.service.ts
├── store/                     # Zustand stores
│   └── useUserStore.ts
├── types/                     # Shared frontend types
│   └── api.types.ts
├── main.tsx                   # App entry point
└── index.css                  # Global styles and CSS variables
```

## Architecture

```
Pages
  └── Feature Components    (domain-specific, know about Job, Application, etc.)
        └── UI Components   (generic, reusable across features)
```

### Data Flow

```
Component → Hook (TanStack Query) → Service (fetch) → Backend API
```

- **Services** make HTTP calls to the backend using `fetch`
- **Hooks** wrap services with TanStack Query for caching, loading and error states
- **Components** consume hooks and render UI

### State Management

- **Server state** (jobs, applications) is managed by TanStack Query with automatic caching and refetching
- **Client state** (user identity, UI filters) is managed by Zustand stores

## Design System

The app uses a dark mode design with CSS custom properties defined in `index.css` via Tailwind v4 `@theme`. Key tokens include colors for primary, surface, border, text and status states, plus border radius scales.
