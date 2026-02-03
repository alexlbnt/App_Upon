# Copilot Instructions for Upon repo

## Purpose
This repo is a small monorepo with two main apps:
- **mobile/** — Expo React Native (TypeScript) app (entry: `mobile/src/App.tsx`).
- **server/** — NestJS backend used as a simple mocked API (entry: `server/src/main.ts`).

Goal for AI agents: Make small, focused changes that keep both sides working locally (or update mocks coherently when implementing new features).

---

## Quick start & dev workflow ✅
- Mobile (Expo):
  - Install + start: `cd mobile && npm install && npm run start` (`expo start`).
  - Useful scripts: `npm run reset-project` (moves starter code to `app-example` and creates blank `app/`).
  - Lint: `npm run lint` (uses `expo lint`).
- Server (NestJS):
  - Install + dev: `cd server && npm install && npm run start:dev` (watch mode).
  - Build and prod run: `npm run build` then `npm run start:prod`.

Notes:
- There is no root workspace script; run commands inside the `mobile` or `server` folder.
- Server runs on port **3000** and **CORS is enabled** in `server/src/main.ts`.

---

## Where data & mocks live 🧩
- Server uses in-memory/mock data in service classes and files under `server/src/modules/**`:
  - Example: `server/src/modules/products/products.service.ts` (array of products) and `server/src/modules/products/products.controller.ts` exposes `GET /products/by-establishment/:id`.
  - `server/src/mocks/popularProducts.ts` shows a separate mock dataset.
- Mobile also contains client-side mocks for quick UI prototyping:
  - `mobile/src/services/popular.service.ts` (returns mocked popular products and a simulated delay).
- Database config is currently empty (`server/src/database/typeorm.config.ts`) — DB is not required for current work.

---

## API / Integration notes 🔗
- Mobile uses an Axios instance at `mobile/src/services/api.ts` with a hardcoded baseURL: `http://192.168.0.247:3000`.
  - Update this IP to your machine's local IP or use emulator mappings (e.g., `10.0.2.2:3000` for Android emulator).
- When adding endpoints on the server:
  1. Add service methods that return JSON (see `ProductsService.findByEstablishment`).
  2. Add controller routes (plural naming is common: `/products`, `/categories`, `/establishments`).
  3. Add the module to `server/src/app.module.ts` imports if it's new.
- When consuming endpoints on the mobile side, prefer the shared `api` Axios instance and create a small service under `mobile/src/services`.

---

## Project conventions & patterns 📐
- File layout:
  - Mobile: `src/screens/`, `src/components/`, `src/contexts/`, `src/services/`, `src/navigation/`.
  - Server: `src/modules/<feature>/{*.controller.ts,*.service.ts,*.module.ts,*.entity.ts}`.
- State & auth patterns:
  - Global state via React Contexts: `AuthContext`, `CartContext`, `FavoritesContext`.
  - Navigation gating is based on `AuthContext.isAuthenticated` in `RootNavigator.tsx`.
- Controllers return plain JSON (no DTOs/validation yet). Keep responses simple and consistent with existing mocks.
- Use TypeScript types inline (examples found throughout `mobile/src` services and components).

---

## Debugging & testing tips 🔍
- Mobile: use Expo DevTools (logs, device pickers). Hot reloading via Expo.
- Server: `npm run start:dev` prints logs; restart automatically on changes.
- No automated tests configured currently — add tests in separate PRs and update CI if added.

---

## Examples for common AI tasks 💡
- Add "products by establishment" endpoint (server):
  - Look at `server/src/modules/products/products.service.ts` and `products.controller.ts` for patterns.
  - Add logic to service, expose via controller, run `npm run start:dev` and hit `GET http://localhost:3000/products/by-establishment/:id`.
- Hook up mobile to that endpoint:
  - Add new function in `mobile/src/services/` that calls `api.get('/products/by-establishment/' + id)` and map response to local types.
  - Update `EstablishmentScreen` or `EstablishmentsByCategoryScreen` to use the new service.

---

## What NOT to assume 🚫
- The repo is not a production-grade backend — many features are mocked. Do not add DB migrations or heavy infra changes without a follow-up design change.
- Root `package.json` is empty; do not run top-level npm scripts.

---

If anything here is unclear or you'd like a short example PR for a specific change (e.g., add an endpoint and connect it to the mobile screen), tell me which feature and I will produce the PR steps and code. 🔧
