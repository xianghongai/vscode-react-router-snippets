# Changelog

All notable changes to the **React Router Snippets** extension are documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/). Each entry lists only the headline change per release — see git history/tags for full detail.

## [8.0.4] - 2026-09-03

- Publish extension to Open VSX Registry alongside the VS Code Marketplace
- Update CI workflow to build the VSIX package once and reuse it across both marketplaces

## [8.0.3] - 2026-09-03

- Support React Router 8
- Unify packaging and publishing scripts to `vsce:package` and `vsce:publish`
- Update GitHub Actions CI workflow to use `pnpm run vsce:publish`

## [8.0.2] - 2026-09-02

- Update Description

## [8.0.1] - 2026-09-02

- No snippet changes.
- Snippets now ship as a single `.code-snippets` file, each declaring its own languages; which snippet reaches which language is unchanged
- `engines.vscode` raised to `^1.100.0`

## [8.0.0] - 2026-08-25

Targets React Router 8.3.0.

- `loader` and `action` now receive the normalized `url` (and `pattern`) directly — the auth-guard and pagination patterns no longer construct `new URL(request.url)`
- `meta` and `useMatches()` read `loaderData`; the `data` field was removed in v8
- Middleware is on by default — dropped the future-flag caveats
- `react-router.config.ts` ships no future flags; `splitRouteModules` is now a top-level option
- Snippet set otherwise unchanged: v8 has the same 83 public exports as 7.18.2

## [7.1.0] - 2026-08-25

Targets React Router 7.18.2. Grew from 102 to 235 snippets. (Maintained on the `v7` branch.)

- Added Framework mode, previously absent entirely: route module exports (`loader`, `clientLoader`, `action`, `clientAction`, `meta`, `links`, `headers`, `ErrorBoundary`, `HydrateFallback`, `shouldRevalidate`, `middleware`, `handle`, `Layout`), `routes.ts` config helpers, `root.tsx` / `entry.*` skeletons, and the `Route.*` typegen types
- Added the 32 missing exports — `data`, `href`, `replace`, `redirectDocument`, `createRoutesStub`, `matchRoutes`, `createContext`, `useBlocker`, `useViewTransitionState`, `Meta`/`Links`/`Scripts`, the cookie and session helpers, and more
- Added a `patterns/` set for common tasks: auth guards, pending UI, optimistic updates, form validation, error boundaries, breadcrumbs, search and pagination
- `RouterProvider` now imports from `react-router/dom`, the build intended for browser apps
- Every snippet carries a description; reorganized `src/` from 51 single-API files into 24 topic files
- Fixed three colliding prefixes (`Router`, `imrr`, `rr`)
- Added the missing `pnpm-workspace.yaml`, without which `pnpm install --frozen-lockfile` failed and blocked CI

## [7.0.0]

- Initial release: components, hooks, routers and utils for React Router 7
