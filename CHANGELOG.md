# Changelog

All notable changes to the **React Router Snippets** extension are documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/). Each entry lists only the headline change per release — see git history/tags for full detail.

## [7.1.0] - 2026-08-25

Targets React Router 7.18.2. Grew from 102 to 235 snippets.

- Added Framework mode, previously absent entirely: route module exports (`loader`, `clientLoader`, `action`, `clientAction`, `meta`, `links`, `headers`, `ErrorBoundary`, `HydrateFallback`, `shouldRevalidate`, `middleware`, `handle`, `Layout`), `routes.ts` config helpers, `root.tsx` / `entry.*` skeletons, and the `Route.*` typegen types
- Added the 32 missing exports — `data`, `href`, `replace`, `redirectDocument`, `createRoutesStub`, `matchRoutes`, `createContext`, `useBlocker`, `useViewTransitionState`, `Meta`/`Links`/`Scripts`, the cookie and session helpers, and more
- Added a `patterns/` set for common tasks: auth guards, pending UI, optimistic updates, form validation, error boundaries, breadcrumbs, search and pagination
- `RouterProvider` now imports from `react-router/dom`, the build intended for browser apps
- Every snippet carries a description; reorganized `src/` from 51 single-API files into 24 topic files
- Fixed three colliding prefixes (`Router`, `imrr`, `rr`)
- Added the missing `pnpm-workspace.yaml`, without which `pnpm install --frozen-lockfile` failed and blocked CI

## [7.0.0]

- Initial release: components, hooks, routers and utils for React Router 7
