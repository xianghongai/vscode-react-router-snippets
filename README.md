# React Router 8 Snippets for VS Code

React Router 8 代码片段扩展

<p>
  <a href="https://marketplace.visualstudio.com/items?itemName=nicholashsiang.vscode-react-router-snippets">
    <img src="https://vsmarketplacebadges.dev/version/nicholashsiang.vscode-react-router-snippets.svg?style=flat-square&label=VS%20Code%20Marketplace&logo=visual-studio-code" alt="Visual Studio Marketplace Version">
  </a>
  <a href="https://marketplace.visualstudio.com/items?itemName=nicholashsiang.vscode-react-router-snippets">
    <img src="https://vsmarketplacebadges.dev/downloads-short/nicholashsiang.vscode-react-router-snippets.svg?style=flat-square&label=Downloads" alt="Downloads">
  </a>
  <a href="https://marketplace.visualstudio.com/items?itemName=nicholashsiang.vscode-react-router-snippets">
    <img src="https://vsmarketplacebadges.dev/rating-short/nicholashsiang.vscode-react-router-snippets.svg?style=flat-square&label=Rating" alt="Rating">
  </a>
  <a href="https://github.com/xianghongai/vscode-react-router-snippets/blob/main/LICENSE">
    <img src="https://img.shields.io/github/license/xianghongai/vscode-react-router-snippets?style=flat-square" alt="License">
  </a>
</p>

Snippets for React Router 8 — Framework mode, Data mode, Declarative mode, and the patterns in between.

React Router 8 代码片段：覆盖 Framework / Data / Declarative 三种模式与常见开发场景。

---

## 版本对应 Versions

| 扩展版本 | React Router | 分支   |
| -------- | ------------ | ------ |
| `8.x`    | 8.x          | `main` |
| `7.x`    | 7.x          | `v7`   |

v8 移除了 `react-router-dom` 包，本扩展所有片段统一从 `react-router` 导入；`RouterProvider` 与 `HydratedRouter` 来自 `react-router/dom`。

React Router 8 要求 `node@22.22+`、`react@19.2.7+`，Framework 模式还需 `vite@7+`。

---

## Prefix design

Prefixes follow three deliberate patterns:

1. **The API name is the prefix** — `useLoaderData`, `NavLink`, `loader`, `meta`. Unlike a language-level construct such as try/catch, a router API name _is_ the code you are about to write, so there is nothing to translate: type what you mean and it triggers. This is the discovery path — you never need to learn a mapping first.
2. **Hard abbreviation for high-frequency APIs only** — components take `r` + initials (`rl` = Link, `rnl` = NavLink, `rf` = Form), hooks drop `use` and take initials (`un` = useNavigate, `uld` = useLoaderData, `unav` = useNavigation). Both forms coexist on the same snippet, so the short code is an optimization you grow into rather than a prerequisite. Only frequently-typed APIs get one — abbreviating all of them would trade one memorization burden for another.
3. **Families share a stem, variants extend it** — `navigate` / `navigateReplace` / `navigateBack` / `navigateRelative`; `Link` / `LinkPrefetch` / `LinkState`. Type the stem to get the whole family in the completion list and pick from it, instead of recalling which suffix you need. Scenario snippets that have no API name of their own live under `r` + a scenario name (`rAuthGuard`, `rPagination`), since `r` is the entry point to everything router-related. Import statements are split out under `im` + abbreviation (`imuld`), so completing an import never competes with completing a call.

The goal is that a prefix "just works" without recall: either it is the API name you already intended to type, or it is a short code for something you type every day, or it is the family stem that shows you the options.

前缀遵循三种刻意区分的模式：

1. **API 名本身就是前缀**：`useLoaderData`、`NavLink`、`loader`、`meta`。与 try/catch 这类语言构造不同，路由 API 的名字**就是**最终要写下的代码，中间没有翻译环节：想写什么就打什么。这是发现路径，无需先记住一套映射关系。
2. **只给高频 API 配硬缩写**：组件用 `r` + 首字母（`rl` = Link、`rnl` = NavLink、`rf` = Form），Hook 去掉 `use` 后取首字母（`un` = useNavigate、`uld` = useLoaderData、`unav` = useNavigation）。两种形式挂在同一条片段上，所以短码是"用熟之后的提速手段"，而不是上手门槛。只有天天要打的 API 才有，全都配缩写等于把一种记忆负担换成另一种。
3. **同族共用词干，变体在其后扩展**：`navigate` / `navigateReplace` / `navigateBack` / `navigateRelative`；`Link` / `LinkPrefetch` / `LinkState`。打出词干就能在补全列表里看到整族备选并从中挑，不必去回忆该用哪个后缀。没有对应 API 名的场景片段挂在 `r` + 场景名下（`rAuthGuard`、`rPagination`），因为 `r` 是所有路由相关内容的入口。import 语句单独放在 `im` + 缩写下（`imuld`），这样补全 import 时不会和补全调用语句互相干扰。

目标是让"打出前缀就能触发"这件事不依赖回忆：要么它本就是待输入的 API 名，要么是高频操作的短码，要么是能摊开全部备选项的词干

---

## 从哪一层开始 Picking a Mode

三种模式**层层递进**，上层是下层的超集：

```
Declarative  只做路由匹配
    ↓  + 数据流（loader / action / pending 状态）
Data         路由表移出 React，渲染前就能取数据
    ↓  + 约定式路由与构建集成（typegen / 代码分割 / SSR）
Framework    开箱即用的全栈方案
```

三种都支持客户端 / SSR / 静态生成，**区别只在于希望自行掌控多少**：

| 适用场景                                                 | 模式            |
| -------------------------------------------------------- | --------------- |
| 想要开箱即用的全栈方案，或正从 Next.js / Remix 迁过来    | **Framework**   |
| 想要数据加载和表单提交，但打包、数据层、服务端要自己掌控 | **Data**        |
| 只需要页面跳转，数据用自己的方案                         | **Declarative** |

拿不准就从 Declarative 开始，往上升级时，已写的 `Link`、`useNavigate` 这些完全不用改。

> 详见官方 [Picking a Mode](https://reactrouter.com/start/modes)

---

## 逐层上手 Getting Started

输入 prefix 按 `Tab` 展开，`Tab` 继续跳到下一个占位符。下面按模式逐层加码，每层只展示**这一层新增的东西**。

### 第 1 层 · Declarative — 只做路由

路由写在 JSX 里，数据自己取（`useEffect`、TanStack Query 等）。

```tsx
// rbr + rs + rt — 声明路由表
<BrowserRouter>
  <Routes>
    <Route path="/" element={<Layout />}>
      <Route index element={<Home />} />
      <Route path="products/:id" element={<Product />} />
    </Route>
  </Routes>
</BrowserRouter>

// ro — 父路由里渲染子路由
<Outlet />
```

跳转与取参，**这一套在三种模式里完全相同**：

```tsx
// rl / rnl — 链接跳转，优先用它而不是 useNavigate
<Link to="/products">商品</Link>
<NavLink to="/products" className={({ isActive }) => (isActive ? 'active' : '')}>商品</NavLink>

// un + navigate — 代码里跳转
const navigate = useNavigate()
navigate('/products')                      // navigate
navigate('/products', { replace: true })   // navigateReplace，登录后用它

// up / usp — 路径参数、查询参数
const { id } = useParams()
const [searchParams, setSearchParams] = useSearchParams()
```

### 第 2 层 · Data — 加上数据流

把路由表移到 React 渲染之外，React Router 就能在组件渲染**之前**取好数据，于是有了 loader、action 和 pending 状态。

```tsx
// cbr + rp — 路由表移出 JSX
const router = createBrowserRouter([
  {
    path: '/products/:id',
    Component: Product,
    loader: productLoader,
    action: productAction,
    ErrorBoundary: ErrorPage,
  },
])

<RouterProvider router={router} />
```

```tsx
// uld — 组件直接拿到数据，不用 useEffect + loading state
const { product } = useLoaderData()

// rf — 提交到 action，无 JS 也能工作；提交完成后 loader 自动重新加载
<Form method="post">
  <input name="name" />
  <button type="submit">保存</button>
</Form>

// unav — 加载/提交中状态，用来禁用按钮或显示进度条
const navigation = useNavigation()
const isSubmitting = navigation.state === 'submitting'

// uf — 不触发导航的提交（点赞、内联编辑）
const fetcher = useFetcher()
```

错误处理也在这一层出现：

```tsx
// rNotFoundLoader — loader 里抛 404，而不是返回 null
throw new Response('Not Found', { status: 404 });

// ure + irer — 在 errorElement 里读取并判定
const error = useRouteError();
if (isRouteErrorResponse(error)) {
  /* error.status / error.data */
}
```

### 第 3 层 · Framework — 加上约定与构建

路由表变成独立文件，每个路由模块用**约定式导出**，类型自动生成，代码分割和 SSR 由构建接管。上一层的 `useLoaderData`、`Form`、`useNavigation` 依然可用。

```ts
// routesConfig — app/routes.ts，路由清单独立成文件
export default [index('routes/home.tsx'), route('products/:id', 'routes/product.tsx')] satisfies RouteConfig;
```

```tsx
// loader + rComponent — 约定式导出，类型由 ./+types 自动生成
export async function loader({ params }: Route.LoaderArgs) {
  return { product: await getProduct(params.id) };
}

export default function Product({ loaderData }: Route.ComponentProps) {
  return <h1>{loaderData.product.name}</h1>; // 类型精确，无需 useLoaderData
}

// action / meta / ErrorBoundary — 同一个文件里的其他约定导出
export async function action({ request }: Route.ActionArgs) {}
export function meta({ loaderData }: Route.MetaArgs) {}
export function ErrorBoundary({ error }: Route.ErrorBoundaryProps) {}
```

```tsx
// rRoot — app/root.tsx 的文档骨架
<html>
  <head>
    <Meta />
    <Links />
  </head>
  <body>
    {children}
    <ScrollRestoration />
    <Scripts />
  </body>
</html>
```

### 跨层 · 常见场景

不属于某一层，Data 和 Framework 模式都能用：

```tsx
// rAuthGuard — 在 loader 里拦截，未登录不渲染也不取数据
export async function loader({ url, request }: Route.LoaderArgs) {
  const user = await getUser(request);
  if (!user) throw redirect(`/login?redirectTo=${url.pathname}${url.search}`);
  return { user };
}
```

其余见下方 `patterns/`：表单校验、乐观更新、面包屑、分页等。

---

## 片段索引 Snippet Index

源码目录与模式一一对应，一进来就知道哪些是公共的、哪些是某层专属的：

```
src/
  1.shared/       三种模式都能用
  2.declarative/  Declarative 引入的
  3.data/         Data 在上一层之上引入的
  4.framework/    Framework 在上一层之上引入的
  5.patterns/     串起多个 API 的场景片段
```

### `1.shared/` — 三种模式通用

| Prefix                                                     | 说明                         |
| ---------------------------------------------------------- | ---------------------------- |
| `Link` `rl` / `NavLink` `rnl`                              | 跳转链接 / 带激活态的链接    |
| `LinkPrefetch` `LinkViewTransition`                        | 预取、视图过渡               |
| `Outlet` `ro` / `Navigate` `rn`                            | 子路由出口 / 声明式跳转      |
| `useNavigate` `un` / `useLocation` `ul`                    | 取得跳转函数 / 当前位置      |
| `navigate` `navigateReplace` `navigateBack`                | 跳转、替换历史、返回         |
| `navigateState` `navigateRelative` `navigatePreventScroll` | 带状态、相对路径、保持滚动   |
| `useParams` `up` / `useSearchParams` `usp`                 | 路径参数 / 查询参数          |
| `useMatch` `um` / `useMatches` `ums`                       | 路径匹配 / 全部匹配路由      |
| `useBlocker` `ub` `blockerConfirm`                         | 拦截导航（未保存提醒）       |
| `href` `generatePath` `matchPath`                          | 类型安全路径、路径拼接与匹配 |

### `2.declarative/` — Declarative 引入

| Prefix                                                            | 说明               |
| ----------------------------------------------------------------- | ------------------ |
| `BrowserRouter` `rbr` / `HashRouter` `rhr` / `MemoryRouter` `rmr` | 三种 Router        |
| `Routes` `rs` / `Route` `rt`                                      | JSX 路由表         |
| `RouteIndex` `Route404`                                           | 索引路由、兜底路由 |
| `useRoutes` `ur`                                                  | 对象形式的路由表   |

### `3.data/` — Data 引入（Framework 同样使用）

| Prefix                                                | 说明                      |
| ----------------------------------------------------- | ------------------------- |
| `createBrowserRouter` `cbr` / `RouterProvider` `rp`   | Data 模式的 Router 与挂载 |
| `rDataEntry`                                          | 完整启动代码              |
| `useLoaderData` `uld` / `useActionData` `uad`         | 读取 loader / action 数据 |
| `Form` `rf` / `useSubmit` `us`                        | 提交到 action 的表单      |
| `useFetcher` `uf` `fetcherForm`                       | 不触发导航的提交与加载    |
| `useNavigation` `unav` `navigationBusy`               | 导航中状态                |
| `Await` `ra` / `rDefer`                               | 流式渲染慢数据            |
| `data` `rdata` / `redirect` `rd` / `replace`          | 返回数据、重定向          |
| `useRouteError` `ure` / `isRouteErrorResponse` `irer` | 错误读取与判定            |
| `RouteLazy`                                           | 路由级代码分割            |

### `4.framework/` — Framework 引入

| Prefix                                                    | 说明                                    |
| --------------------------------------------------------- | --------------------------------------- |
| `rRoot`                                                   | 完整的 `root.tsx`                       |
| `rComponent`                                              | 路由默认导出，带 `Route.ComponentProps` |
| `loader` / `action`                                       | 服务端数据加载与提交                    |
| `clientLoader` / `clientAction`                           | 浏览器端对应物                          |
| `meta` / `links` / `headers`                              | 文档元信息与响应头                      |
| `ErrorBoundary` `reb` / `HydrateFallback` `rhf`           | 错误与水合回退                          |
| `middleware` / `shouldRevalidate` / `handle`              | 中间件、重验证控制、路由附加数据        |
| `routesConfig` `route` `index` `layout` `prefix`          | `routes.ts` 路由清单                    |
| `Meta` `rm` / `Links` `rlk` / `Scripts` `rsc`             | `root.tsx` 中的文档组件                 |
| `createCookie` `createCookieSessionStorage` `sessionRead` | Cookie 与 Session                       |
| `createContext` `contextGet` `contextSet`                 | 中间件上下文                            |
| `rConfig` `rEntryClient` `rEntryServer`                   | 构建配置与自定义入口                    |

### `5.patterns/` — 高频场景

| Prefix                                                     | 说明                         |
| ---------------------------------------------------------- | ---------------------------- |
| `rAuthGuard` `rRequireUser` `rLoginAction` `rLogoutAction` | 认证守卫与登录登出           |
| `rFormValidation` `rOptimistic` `rFormReset`               | 表单校验、乐观更新           |
| `rGlobalLoading` `rSubmitPending` `rDelayedSpinner`        | 各粒度的加载状态             |
| `rErrorBoundaryFull` `rNotFoundLoader`                     | 错误边界与 404               |
| `rBreadcrumbs` `rSearchParams` `rPagination` `rTabs`       | 面包屑、搜索、分页、Tab 路由 |

---

## 使用建议 Notes

**只做路由，不做数据获取。** 片段覆盖的是路由导航、参数、以及 React Router 自带的 loader/action 数据流。服务端状态管理（缓存、失效、轮询）可继续用 TanStack Query 等库，两者职责不重叠。

**Framework 模式优先用 props 而非 Hook。** 路由组件从 `Route.ComponentProps` 拿到的 `loaderData` 是精确类型化的，比 `useLoaderData<typeof loader>()` 更可靠。片段两种都提供。

**推荐配置**（让片段在补全列表中优先显示）：

```json
"editor.snippetSuggestions": "top"
```

---

## 相关链接 Links

- [React Router 官方文档](https://reactrouter.com/)
- [v7 → v8 升级指南](https://reactrouter.com/upgrading/v7)
- [问题反馈 Issues](https://github.com/xianghongai/vscode-react-router-snippets/issues)
- [更新日志 Changelog](./CHANGELOG.md)

## License

[MIT](./LICENSE)
