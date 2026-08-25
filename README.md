<p align="center">
  <h1 align="center">React Router 7 Snippets for VS Code</h1>
  <p align="center">React Router 7 代码片段扩展</p>
</p>

<p align="center">
  <a href="https://marketplace.visualstudio.com/items?itemName=nicholashsiang.vscode-react-router-snippets">
    <img src="https://img.shields.io/visual-studio-marketplace/v/nicholashsiang.vscode-react-router-snippets?style=flat-square&label=VS%20Code%20Marketplace&logo=visual-studio-code" alt="Visual Studio Marketplace Version">
  </a>
  <a href="https://marketplace.visualstudio.com/items?itemName=nicholashsiang.vscode-react-router-snippets">
    <img src="https://img.shields.io/visual-studio-marketplace/d/nicholashsiang.vscode-react-router-snippets?style=flat-square&label=Downloads" alt="Downloads">
  </a>
  <a href="https://marketplace.visualstudio.com/items?itemName=nicholashsiang.vscode-react-router-snippets">
    <img src="https://img.shields.io/visual-studio-marketplace/r/nicholashsiang.vscode-react-router-snippets?style=flat-square&label=Rating" alt="Rating">
  </a>
  <a href="https://github.com/xianghongai/vscode-react-router-snippets/blob/main/LICENSE">
    <img src="https://img.shields.io/github/license/xianghongai/vscode-react-router-snippets?style=flat-square" alt="License">
  </a>
</p>

<p align="center">
  <b>Code snippets for React Router v7 - 51 snippets covering components, hooks, routers, and utilities</b><br>
  <b>专为 React Router v7 设计的代码片段 - 包含 51 个组件、Hooks、路由器和工具函数片段</b>
</p>

---

## ✨ 特性 Features

- ✅ **聚焦路由核心** / Focus on routing essentials - 只包含路由导航、参数、数据加载相关 API
- ✅ **完整 v7 支持** / Full v7 support - 包含所有 v7 新增的数据加载和表单处理 API
- ✅ **简洁高效** / Clean & efficient - 移除冗余描述，精简片段格式
- ✅ **统一导入** / Unified imports - 所有导入统一使用 `'react-router'`
- ✅ **助记命名** / Mnemonic naming - `im` + 缩写的直观命名规则
- ✅ **与 TanStack Query 共存** / Works with TanStack Query - 数据 API 互补，各有适用场景

### 🆕 v7 新特性 What's New in v7

- **数据加载** / Data Loading: `useLoaderData`, `useActionData`, `useFetcher`, `useNavigation`
- **表单处理** / Form Handling: `<Form>`, `useSubmit`, `useFormAction`
- **错误处理** / Error Handling: `useRouteError`, `isRouteErrorResponse`
- **新路由器** / New Routers: `RouterProvider`, `createBrowserRouter`
- **导入路径** / Import Path: 从 `'react-router'` 统一导入（不再使用 `'react-router-dom'`）

---

## 📦 安装 Installation

### Via VS Code Marketplace

1. 打开 VS Code / Open VS Code
2. 按 `Ctrl+P` / `Cmd+P` 打开快速打开面板 / Press to open Quick Open
3. 输入 `ext install nicholashsiang.vscode-react-router-snippets`
4. 按回车安装 / Press Enter to install

### Via Command Line

```bash
code --install-extension nicholashsiang.vscode-react-router-snippets
```

---

## 🚀 快速开始 Quick Start

只需输入片段的 **prefix**（前缀），然后按 `Tab` 或 `Enter` 即可插入代码。

Just type a snippet **prefix** and press `Tab` or `Enter` to insert the code.

### 💡 使用提示 Usage Tips

**大部分情况下不需要手动输入 import 语句！**

Most of the time you don't need to manually type import statements!

当你使用组件代码片段（如 `Link`、`Form`）后，VS Code 会自动检测缺失的导入：

1. 组件下方会显示波浪线
2. 按 `Ctrl+.` (Windows/Linux) 或 `Cmd+.` (Mac) 触发快速修复
3. 选择 "Add import from 'react-router'" 即可自动添加导入

When you use component snippets (like `Link`, `Form`), VS Code will automatically detect missing imports:

1. A wavy line appears under the component
2. Press `Ctrl+.` (Windows/Linux) or `Cmd+.` (Mac) for Quick Fix
3. Select "Add import from 'react-router'" to auto-add the import

> 如果你更喜欢先导入再使用，也可以使用 Import 片段（如 `imrl`、`imrf`）。
>
> If you prefer importing first, you can still use Import snippets (like `imrl`, `imrf`).

### 常见场景示例 Common Use Cases

#### 1. 导入组件 Import Components

```javascript
// 输入 / Type: imrl
import { Link } from 'react-router';

// 输入 / Type: imrf
import { Form } from 'react-router';
```

#### 2. 使用导航组件 Use Navigation Components

```jsx
// 输入 / Type: Link
<Link to="path">Text</Link>

// 输入 / Type: NavLink
<NavLink to="path" className={({ isActive }) => isActive ? 'active' : ''}>
  Text
</NavLink>
```

#### 3. 使用 v7 数据加载 Use v7 Data Loading

```javascript
// 输入 / Type: useLoaderData
const data = useLoaderData();

// 输入 / Type: useFetcher
const fetcher = useFetcher();
// fetcher.Form, fetcher.submit(), fetcher.load()
// fetcher.state, fetcher.data
```

#### 4. 创建路由器 Create Routers

> **💡 提示：大部分项目使用文件系统路由**
>
> Most projects use file-system routing
>
> 在现代 React Router 应用中，推荐使用基于文件系统的路由方案，无需手动创建路由配置。
>
> In modern React Router apps, file-system based routing is recommended, eliminating the need for manual route configuration.
>
> **文件系统路由方案 File-System Routing Solutions:**
>
> - [vite-plugin-pages](https://github.com/hannoeru/vite-plugin-pages)
> - [generouted](https://github.com/oedotme/generouted) - 自动路由生成 / Automatic route generation
> - [Vite Plugin React Router](https://github.com/remix-run/react-router/tree/dev/packages/react-router-dev) - Vite 集成 / Vite integration
> - [React Router v7 (官方支持)](https://reactrouter.com/start/framework/routing) - Official built-in support
>
> **何时使用手动配置 When to use manual configuration:**
>
> - 旧项目迁移 / Legacy project migration
> - 完全自定义控制 / Full custom control

```javascript
// 输入 / Type: createBrowserRouter
const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    loader: loader,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <Home /> },
      { path: 'about', element: <About /> },
    ],
  },
]);
```

#### 5. 表单提交 Form Submission

```jsx
// 输入 / Type: Form
<Form method="post" action="/path">
  <input name="field" />
  <button type="submit">Submit</button>
</Form>
```

---

## 📚 API 参考 API Reference

共 51 个代码片段，按 4 大类别组织 / 51 snippets organized in 4 categories

### 🧩 Components (10)

基础导航、路由配置和 v7 新增组件 / Navigation, routing, and new v7 components

- **Link** - 基础导航链接 / Basic navigation link

  - Import: `imrl`, `importLink`
  - Usage: `rl`, `Link`

- **NavLink** - 带激活状态的导航 / Navigation with active state

  - Import: `imrnl`, `importNavLink`
  - Usage: `rnl`, `NavLink`

- **Navigate** - 声明式导航 / Declarative navigation

  - Import: `imrn`, `importNavigate`
  - Usage: `Navigate`

- **Outlet** - 嵌套路由出口 / Nested route outlet

  - Import: `imro`, `importOutlet`
  - Usage: `Outlet`

- **Route** - 路由配置 / Route definition

  - Import: `imrr`
  - Usage: `Route`

- **Routes** - 路由容器 / Routes container

  - Import: `imrr`
  - Usage: `Routes`

- **Form** 🆕 - 表单提交（路由集成）/ Form with routing integration

  - Import: `imrf`, `importForm`
  - Usage: `rf`, `Form`

- **Await** 🆕 - 异步数据等待 / Async data resolution

  - Import: `imaw`, `importAwait`
  - Usage: `Await`

- **ScrollRestoration** 🆕 - 滚动位置恢复 / Scroll position restoration

  - Import: `imrsr`, `importScrollRestoration`
  - Usage: `ScrollRestoration`

- **PrefetchPageLinks** 🆕 - 页面预加载 / Page prefetching

  - Import: `imppl`, `importPrefetchPageLinks`
  - Usage: `PrefetchPageLinks`

### 🪝 Hooks (27)

路由导航、数据加载和状态管理 / Routing, data loading, and state management

#### 核心导航 Core Navigation (6)

- **useNavigate** - 编程式导航 / Programmatic navigation

  - Import: `imun`, `importUseNavigate`
  - Usage: `useNavigate`

- **useLocation** - 当前位置信息 / Current location

  - Import: `imul`, `importUseLocation`
  - Usage: `useLocation`

- **useParams** - 路由参数 / URL parameters

  - Import: `imup`, `importUseParams`
  - Usage: `useParams`

- **useSearchParams** - 查询参数 / Query parameters

  - Import: `imusp`, `importUseSearchParams`
  - Usage: `useSearchParams`

- **useHref** - 生成 href / Generate href

  - Import: `imuh`, `importUseHref`
  - Usage: `useHref`

- **useResolvedPath** - 解析路径 / Resolve path

  - Import: `imurp`, `importUseResolvedPath`
  - Usage: `useResolvedPath`

#### v7 数据加载 v7 Data Loading (8)

- **useLoaderData** 🆕 - 路由级数据加载 / Route-level data loading

  - Import: `imuld`
  - Usage: `useLoaderData`

- **useActionData** 🆕 - 表单提交结果 / Form action result

  - Import: `imuad`
  - Usage: `useActionData`

- **useFetcher** 🆕 - 独立数据获取 / Independent data fetching

  - Import: `imuf`
  - Usage: `useFetcher`

- **useNavigation** 🆕 - 导航状态 / Navigation state

  - Import: `imunav`
  - Usage: `useNavigation`

- **useRevalidator** 🆕 - 手动重新验证 / Manual revalidation

  - Import: `imurv`
  - Usage: `useRevalidator`

- **useRouteError** 🆕 - 路由错误处理 / Route error handling

  - Import: `imure`
  - Usage: `useRouteError`

- **useSubmit** 🆕 - 编程式表单提交 / Programmatic form submission

  - Import: `imusb`
  - Usage: `useSubmit`

- **useRouteLoaderData** 🆕 - 父路由数据访问 / Parent route data access

  - Import: `imurld`
  - Usage: `useRouteLoaderData`

#### 路由匹配 Route Matching (4)

- **useMatch** - 路径匹配 / Path matching

  - Import: `imum`, `importUseMatch`
  - Usage: `useMatch`

- **useMatches** 🆕 - 所有匹配的路由 / All matched routes

  - Import: `imums`, `importUseMatches`
  - Usage: `useMatches`

- **useRoutes** - 动态路由配置 / Dynamic route config

  - Import: `imur`, `importUseRoutes`
  - Usage: `useRoutes`

- **useInRouterContext** - 路由上下文检查 / Router context check

  - Import: `imuirc`, `importUseInRouterContext`
  - Usage: `useInRouterContext`

#### Outlet 相关 Outlet Related (2)

- **useOutlet** - 获取出口组件 / Get outlet element

  - Import: `imuo`, `importUseOutlet`
  - Usage: `useOutlet`

- **useOutletContext** - 出口上下文共享 / Outlet context sharing

  - Import: `imuoc`, `importUseOutletContext`
  - Usage: `useOutletContext`

#### 辅助功能 Utilities (7)

- **useNavigationType** - 导航类型 / Navigation type (POP/PUSH/REPLACE)

  - Import: `imunt`, `importUseNavigationType`
  - Usage: `useNavigationType`

- **useLinkClickHandler** - 自定义链接点击 / Custom link click handler

  - Import: `imulch`, `importUseLinkClickHandler`
  - Usage: `useLinkClickHandler`

- **useFetchers** 🆕 - 所有活跃的 fetcher / All active fetchers

  - Import: `imufs`, `importUseFetchers`
  - Usage: `useFetchers`

- **useFormAction** 🆕 - 表单提交地址 / Form action URL

  - Import: `imufa`, `importUseFormAction`
  - Usage: `useFormAction`

- **useAsyncValue** 🆕 - Await 组件的异步值 / Async value from Await

  - Import: `imuav`, `importUseAsyncValue`
  - Usage: `useAsyncValue`

- **useAsyncError** 🆕 - Await 组件的异步错误 / Async error from Await

  - Import: `imuae`, `importUseAsyncError`
  - Usage: `useAsyncError`

- **useBeforeUnload** 🆕 - 页面卸载前确认 / Before unload confirmation

  - Import: `imubu`, `importUseBeforeUnload`
  - Usage: `useBeforeUnload`

### 🌐 Routers (9)

传统路由器和 v7 数据路由器 / Traditional and v7 data routers

#### 传统路由器 Traditional Routers (5)

- **BrowserRouter** - HTML5 History API 路由 / HTML5 History API router

  - Import: `imbr`, `importBrowserRouter`
  - Usage: `rr`, `Router`, `BrowserRouter`

- **HashRouter** - Hash 路由 / Hash-based router

  - Import: `imhr`, `importHashRouter`
  - Usage: `rr`, `Router`, `HashRouter`

- **MemoryRouter** - 内存路由（测试用）/ Memory router (for testing)

  - Import: `immr`, `importMemoryRouter`
  - Usage: `MemoryRouter`

- **StaticRouter** - 静态路由（测试用）/ Static router (for testing)

  - Import: `imsr`, `importStaticRouter`
  - Usage: `StaticRouter`

- **Router** - 基础路由器 / Base router

  - Import: `imr`, `importRouter`
  - Usage: `Router`

#### v7 数据路由器 v7 Data Routers (4)

- **RouterProvider** 🆕 - v7 路由提供者 / v7 router provider

  - Import: `imrp`, `importRouterProvider`
  - Usage: `RouterProvider`

- **createBrowserRouter** 🆕 - 创建浏览器路由（支持 loader/action）/ Create browser router with loader/action

  - Import: `imcbr`, `importCreateBrowserRouter`
  - Usage: `createBrowserRouter`

- **createHashRouter** 🆕 - 创建 Hash 路由（支持 loader/action）/ Create hash router with loader/action

  - Import: `imchr`, `importCreateHashRouter`
  - Usage: `createHashRouter`

- **createMemoryRouter** 🆕 - 创建内存路由（支持 loader/action）/ Create memory router with loader/action

  - Import: `imcmr`, `importCreateMemoryRouter`
  - Usage: `createMemoryRouter`

### 🛠️ Utils (5)

路由工具函数 / Routing utility functions

- **redirect** 🆕 - 重定向（loader/action 中使用）/ Redirect in loader/action

  - Import: `imrd`, `importRedirect`
  - Usage: `redirect`

- **generatePath** - 根据参数生成路径 / Generate path with params

  - Import: `imgp`, `importGeneratePath`
  - Usage: `generatePath`

- **matchPath** - 判断路径是否匹配 / Check if path matches

  - Import: `immp`, `importMatchPath`
  - Usage: `matchPath`

- **createSearchParams** - 创建查询参数 / Create search params

  - Import: `imcsp`, `importCreateSearchParams`
  - Usage: `createSearchParams`

- **isRouteErrorResponse** 🆕 - 错误类型判断 / Check error type

  - Import: `imirer`, `importIsRouteErrorResponse`
  - Usage: `isRouteErrorResponse`

---

## 📖 Prefix 命名规则 Naming Convention

所有片段前缀遵循直观的助记规则 / All snippet prefixes follow intuitive mnemonic rules:

### Import 语句 Import Statements

- **`im`** - Import 的缩写 / Abbreviation for "import"
- **`imr`** - Import Router 相关 / Import Router related
- **`imu`** - Import Use (Hook) / Import hook (use*)
- **`imc`** - Import Create (工具函数) / Import create (utility)

**示例 Examples**:

- `imrl` = **im**port **R**outer **L**ink
- `imun` = **im**port **u**se**N**avigate
- `imuld` = **im**port **u**se**L**oader**D**ata
- `imcbr` = **im**port **c**reate**B**rowser**R**outer

### 使用语句 Usage Statements

直接使用组件或 Hook 名称，或使用简短别名 / Use component/hook name directly or short aliases:

**示例 Examples**:

- `Link` → `<Link to="path">Text</Link>`
- `rl` → 同上（Router Link 的缩写）/ Same as above (short for Router Link)
- `useNavigate` → `const navigate = useNavigate()`
- `Form` → `<Form method="post">...</Form>`

---

## 🎯 设计理念 Design Philosophy

### 聚焦路由核心 Focus on Routing

- ✅ 包含：路由导航、参数、匹配、数据加载
- ✅ Include: Routing, navigation, params, matching, data loading
- ❌ 排除：SSR 专用组件（Scripts、Meta）、会话管理
- ❌ Exclude: SSR-only components (Scripts, Meta), session management

### 与数据获取库共存 Works with Data Libraries

虽然 v7 引入了数据加载 API，但它们与 TanStack Query 等库互补而非替代：

Although v7 introduces data loading APIs, they complement rather than replace libraries like TanStack Query:

- **React Router 数据 API**: 与路由生命周期深度集成，简化表单提交和导航
- **React Router Data APIs**: Deep integration with routing lifecycle, simplified forms
- **TanStack Query**: 通用数据获取、缓存、乐观更新
- **TanStack Query**: General data fetching, caching, optimistic updates

两者可以在同一项目中和谐共存 / Both can coexist harmoniously in the same project.

---

## 🔗 相关链接 Related Links

- [React Router 官方文档](https://reactrouter.com/) / [React Router Official Docs](https://reactrouter.com/)
- [React Router v7 升级指南](https://reactrouter.com/upgrading/v6) / [v7 Upgrade Guide](https://reactrouter.com/upgrading/v6)
- [React Router v7 发布博客](https://remix.run/blog/react-router-v7) / [v7 Release Blog](https://remix.run/blog/react-router-v7)

---

## 📝 版本历史 Version History

- **v7.0.0** (2026) - React Router 7 完整支持 / Full React Router 7 support

  - 51 个代码片段，覆盖所有常用 API / 51 snippets covering all common APIs
  - 统一导入路径为 `'react-router'` / Unified import from `'react-router'`
  - 新增数据加载、表单处理、错误处理 API / New data loading, form, and error handling APIs
  - 精简片段格式，移除冗余描述 / Simplified format, removed redundant descriptions

- **v6.0.0** - React Router 6 支持 / React Router 6 support

  - [v6 分支](https://github.com/xianghongai/vscode-react-router-snippets/tree/v6) / [v6 Branch](https://github.com/xianghongai/vscode-react-router-snippets/tree/v6)

- **v5.0.0** - React Router 5 支持 / React Router 5 support

  - [v5 分支](https://github.com/xianghongai/vscode-react-router-snippets/tree/v5) / [v5 Branch](https://github.com/xianghongai/vscode-react-router-snippets/tree/v5)

---

## 🤝 贡献 Contributing

欢迎贡献！如果你发现问题或有改进建议：

Contributions welcome! If you find issues or have suggestions:

1. [提交 Issue](https://github.com/xianghongai/vscode-react-router-snippets/issues) / [Open an Issue](https://github.com/xianghongai/vscode-react-router-snippets/issues)
2. [提交 Pull Request](https://github.com/xianghongai/vscode-react-router-snippets/pulls) / [Submit a Pull Request](https://github.com/xianghongai/vscode-react-router-snippets/pulls)

---

## 📄 License

MIT License © [Nicholas Hsiang](https://github.com/xianghongai)

---

<p align="center">
  Made with ❤️ for the React Router community<br>
  为 React Router 社区用心打造
</p>
