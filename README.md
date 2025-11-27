# GEOAlt Marketing Site

This repository contains the Next.js 15 marketing experience for GEOAlt.

## Requirements
- Node.js 18+
- npm 9+

## Setup
```bash
npm install
```

Create a `.env.local` file with the environment variables your deployment requires (for example `NEXT_PUBLIC_APP_URL` and `NEXTAUTH_URL`).

## Scripts
| Command | Purpose |
| --- | --- |
| `npm run dev` | Start the local dev server |
| `npm run build` | Create a production build |
| `npm run start` | Serve the production build |
| `npm run lint` | Run ESLint over the repo |
| `npm run e2e` | Execute Playwright smoke tests |

> Run `npx playwright install --with-deps` once to install the browser engines used by the E2E suite.

## Testing
The Playwright smoke suite (`tests/e2e/smoke.spec.ts`) boots the Next.js dev server automatically and validates the main customer journey (home page rendering and navigation to the demo form). This keeps shipping confidence high without maintaining a unit-test stack we no longer use.

