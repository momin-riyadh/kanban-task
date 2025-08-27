# Kanban Task App — Development Guidelines

This document captures project-specific knowledge for advanced contributors. It focuses on configuration, build/run workflows, testing conventions (with a verified example), and practical tips tied to the current stack.

## 1) Build and Configuration

### Client (Vite + React + Tailwind v4)
- Tooling:
  - Vite 7, React 19, React Router 7, Tailwind CSS 4 (via `@tailwindcss/vite`), Bootstrap Icons.
  - ESLint 9 with React Hooks and React Refresh plugin; see `client/eslint.config.js`.
- Scripts (run from `client/`):
  - `npm run dev` — Vite dev server.
  - `npm run build` — Production build to `client/dist`.
  - `npm run preview` — Serves the built `dist` locally.
  - `npm run lint` — ESLint over JS/JSX (configured to ignore `dist`).
- Tailwind v4 specifics:
  - Tailwind is integrated via the Vite plugin in `client/vite.config.js` (`@tailwindcss/vite`). No classic `tailwind.config.js` is present/required for baseline usage. Global styles are in `client/src/index.css`.
  - Utility classes are used extensively (e.g., in `Dashboard.jsx`). If you introduce new semantic layers or themes, prefer co-locating component styles or leveraging Tailwind CSS variables in CSS layers.
- Icons:
  - `bootstrap-icons` is imported once in `App.jsx` (`import 'bootstrap-icons/font/bootstrap-icons.css'`). If SSR or code-splitting is introduced later, consider moving this to the app layout or a global CSS entry.
- Routing:
  - `react-router-dom@7` is in use; `App.jsx` currently routes `/` to the Dashboard. If deep linking is added, ensure the hosting environment returns `index.html` for unknown routes (standard SPA fallback). For Vite preview, this is already handled; for production hosting, configure rewrite rules.

### Server (Node + Express + sqlite3)
- Location: `server/`. Dependencies include `express`, `sqlite3`, `cors`, `dotenv`, `jsonwebtoken`, `bcryptjs`. Scripts:
  - `npm start` => `node server.js`
  - `npm run dev` => `nodemon server.js`
  - `npm test` => `node test-db.js` (file not currently present)
- Current state: The server appears scaffolded; `server.js` is referenced but not included in the repo snapshot. Before wiring the client to a backend, define `server/server.js` and (optionally) `.env` for configuration (port, DB path, JWT secret, CORS origin).
- sqlite3 hints:
  - For development, an in-memory DB (`:memory:`) is adequate for quick iterations. For persistence, use a file-backed DB (e.g., `db.sqlite`) and ensure file-path portability on Windows.
  - Wrap DB access in a small module for testability (see testing section below).

## 2) Testing

There is no unit test framework configured by default. Two pragmatic options:

1) Lightweight, ad-hoc Node tests (fastest to bootstrap)
- Use a simple Node script to assert project invariants or to sanity-check modules. This repo was verified with the following example that checks the Vite plugin configuration. You can copy this into a temporary file (do not commit), run it, then delete it:

```js
// temp-test.js (example)
const fs = require('fs');
const path = require('path');
function assert(c, m){ if(!c) throw new Error('Assertion failed: '+m); }
const viteConfigPath = path.join(__dirname, 'client', 'vite.config.js');
assert(fs.existsSync(viteConfigPath), 'client/vite.config.js should exist');
const content = fs.readFileSync(viteConfigPath, 'utf8');
assert(/@tailwindcss\/(vite|vite\s*)/i.test(content) || /tailwindcss\(\)/.test(content), 'Tailwind Vite plugin should be configured');
assert(/@vitejs\/plugin-react/.test(content) || /react\(\)/.test(content), 'React plugin should be configured');
console.log('OK: Vite config has Tailwind and React plugins.');
```

Run from the project root:
- `node temp-test.js`

Expected output:
- `OK: Vite config has Tailwind and React plugins.`

After confirming, delete `temp-test.js` to keep the repo clean.

2) Framework setup (when you need real unit/integration tests)
- Client (Vitest + Testing Library):
  - `npm i -D vitest @testing-library/react @testing-library/user-event @testing-library/jest-dom jsdom`
  - Add a `vitest.config.ts` (or JS) with `test.environment = 'jsdom'`.
  - Add script to `client/package.json`: `"test": "vitest"`.
  - Example test file: `client/src/components/pages/Dashboard.test.jsx`.
- Server (Jest):
  - `npm i -D jest supertest` (plus `ts-jest`/`@types/jest` if using TS later)
  - Add `"test": "jest"` to `server/package.json`, bootstrap `jest.config.js`.
  - Factor Express app into `app.js`, keep `server.js` as the HTTP entry; test `app` via Supertest.

Notes on running tests in this repo as-is:
- Since no framework is installed, prefer option (1) for quick checks or add a framework as described if you plan to maintain a test suite.
- The `server/package.json` has `npm test` pointing to `test-db.js`. If you want that path, create `server/test-db.js` to validate sqlite3 connectivity (e.g., create an in-memory DB, run a simple query, and exit).

## 3) Development Tips and Conventions

- Code Style & Linting:
  - Use the existing ESLint setup (`client/eslint.config.js`). Hooks and refresh rules are enforced; unused vars are restricted with allowance for UPPER_SNAKE_CASE constants.
  - Run `npm run lint` in `client/` before committing UI changes.
- UI Architecture:
  - Current state is a static UI prototype. `Dashboard.jsx` demonstrates accessibility-friendly clickable cards with keyboard handling and modal toggling. As you add state management, keep focus management in modals and Esc-to-close behavior intact.
  - Prefer lifting board/task state into a dedicated store (Context, Zustand, Redux, etc.) only once persistence or cross-page workflows begin.
- Routing:
  - The app currently routes only `/`. If you introduce nested routes (e.g., `/boards/:id`), ensure layout composition is via `PageLayout` and guard against missing IDs.
- Assets & Theming:
  - Tailwind classes are used throughout; colors often use hex codes and utilities directly. Consider extracting a theme scale (CSS variables) to align with the design system once the app grows.
- Build Targets and SPA Hosting:
  - For Netlify/Vercel/NGINX, set up SPA rewrites so unknown routes serve `index.html`.
- Environment Variables:
  - Client: Vite exposes variables that start with `VITE_`. Add to `.env` and access via `import.meta.env.VITE_*`.
  - Server: Use `.env` with `dotenv` and avoid checking it in. Typical vars: `PORT`, `DATABASE_PATH`, `JWT_SECRET`, `CORS_ORIGIN`.
- Windows Paths:
  - The project is currently located under `C:\wamp64\www\momin\kanban-task`. Use backslashes in local scripts and docs when referencing paths.

## 4) Verified Example — What we ran

To ensure the testing process described above works, we created `temp-test.js` at the repo root, ran it (`node temp-test.js`), observed the success output, and then removed the file. You can follow the same pattern for quick, repository-local verification without adding permanent devDependencies.

## 5) Next Steps (Recommended)
- Solidify a server entry (`server.js`) and lightweight DB module (`db.js`).
- Introduce a minimal test framework (Vitest for client, Jest/Supertest for server) once the first slice of dynamic behavior lands.
- Add a GitHub Actions workflow that runs `client` lint and tests once a test framework is introduced.
