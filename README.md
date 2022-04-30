<p>
  <h1 align="center">React Router Snippets (v6) (Visual Studio Code)</h1>
</p>

<p align="center">
  <a href="https://github.com/xianghongai/vscode-react-router-snippets">
    <img src="https://img.shields.io/github/repo-size/xianghongai/vscode-react-router-snippets?style=plastic&color=4ac51c">
  </a>
  <a href="https://marketplace.visualstudio.com/items?itemName=nicholashsiang.vscode-react-router-snippets">
    <img src="https://vsmarketplacebadge.apphb.com/version-short/nicholashsiang.vscode-react-router-snippets.svg?style=plastic&color=61dafb">
  </a>
  <a href="https://marketplace.visualstudio.com/items?itemName=nicholashsiang.vscode-react-router-snippets">
    <img src="https://vsmarketplacebadge.apphb.com/installs-short/nicholashsiang.vscode-react-router-snippets.svg?style=plastic&color=4ac51c">
  </a>
  <a href="https://marketplace.visualstudio.com/items?itemName=nicholashsiang.vscode-react-router-snippets">
    <img src="https://vsmarketplacebadge.apphb.com/rating-short/nicholashsiang.vscode-react-router-snippets.svg?style=plastic&color=4ac51c">
  </a>
  <a href="https://marketplace.visualstudio.com/items?itemName=nicholashsiang.vscode-react-router-snippets">
    <img src="https://img.shields.io/github/license/xianghongai/vscode-react-router-snippets?maxAge=2592000&style=plastic&color=4ac51c">
  </a>
</p>

## Snippets

### Import

| Prefix                        | Description                                                                  | Body                                                             |
|-------------------------------|------------------------------------------------------------------------------|------------------------------------------------------------------|
| "imbr", "importBrowserRouter" | `import { BrowserRouter as Router } from 'react-router-dom'`                 | **im**port Router <**B**rowser**R**outer>                        |
| "imhr", "importHashRouter"    | `import { HashRouter as Router } from 'react-router-dom'`                    | **im**port Router <**H**ash**R**outer>                           |
| "imsr", "importStaticRouter"  | `import { StaticRouter as Router } from 'react-router-dom/server'`           | **im**port Router <**S**tatic**R**outer>                         |
| "imnr", "importNativeRouter"  | `import { NativeRouter } from 'react-router-dom'`                            | **im**port Router <**N**ative**R**outer>                         |
| "immr", "importMemoryRouter"  | `import { MemoryRouter } from 'react-router-dom'`                            | **im**port Router <**M**emory**R**outer>                         |
| "imhr", "HistoryRouter"       | `import { unstable_HistoryRouter as HistoryRouter } from 'react-router-dom'` | **im**port Router <**H**istory**R**outer>                        |
| "imrl", "importLink"          | `import { Link } from 'react-router-dom'`                                    | **im**port **R**outer <**L**ink>                                 |
| "imrl", "importLink"          | `import { Link } from 'react-router-native'`                                 | **im**port **R**outer <**L**ink> (React Native)                  |
| "imrn"                        | `import { Navigate } from 'react-router-dom'`                                | **im**port **R**outer <**N**avigate>                             |
| "imrnl", "importNavLink"      | `import { NavLink } from 'react-router-dom'`                                 | **im**port **R**outer <**N**av**L**ink>                          |
| "imro"                        | `import { Outlet } from 'react-router-dom'`                                  | **im**port **R**outer <**O**utlet>                               |
| "imrr"                        | `import { Routes, Route } from 'react-router-dom'`                           | **im**port **R**outer <**R**outes>, <Route>                      |
| "imrcsp"                      | `import { createSearchParams } from 'react-router-dom'`                      | **im**port **R**outer **c**reate**S**earch**P**arams             |
| "imrmp"                       | `import { matchPath } from 'react-router'`                                   | **im**port **m**atchPath                                         |
| "imgp"                        | `import { generatePath } from 'react-router'`                                | **im**port **R**outer **g**enerate**P**ath                       |
| "imruh"                       | `import { useHref } from 'react-router-dom'`                                 | **im**port **R**outer **u**seHref                                |
| "imruirc"                     | `import { useInRouterContext } from 'react-router-dom'`                      | **im**port **R**outer **u**se**I**n**R**outer**C**ontext         |
| "imrulch"                     | `import { useLinkClickHandler } from 'react-router-dom'`                     | **im**port **R**outer **u**se**L**ink**C**lick**H**andler        |
| "imrulph"                     | `import { useLinkPressHandler } from 'react-router-native'`                  | **im**port **R**outer **u**se**L**ink**P**ress**H**andler        |
| "imrul"                       | `import { useLocation } from 'react-router-dom'`                             | **im**port **R**outer **u**se**L**ocation                        |
| "imrum"                       | `import { useMatch } from 'react-router-dom'`                                | **im**port **R**outer **u**se**M**atch                           |
| "imrun"                       | `import { useNavigate } from 'react-router-dom'`                             | **im**port **R**outer **u**se**N**avigate                        |
| "imrunt"                      | `import { useNavigationType } from 'react-router-dom'`                       | **im**port **R**outer **u**se**N**avigation**T**ype              |
| "imruo"                       | `import { useOutlet } from 'react-router-dom'`                               | **im**port **R**outer **u**se**O**utlet                          |
| "imruoc"                      | `import { useOutletContext } from 'react-router-dom'`                        | **im**port **R**outer **u**se**O**utlet**C**ontext               |
| "imrup"                       | `import { useParams } from 'react-router-dom'`                               | **im**port **R**outer **u**se**P**arams                          |
| "imrurp"                      | `import { useResolvedPath } from 'react-router-dom'`                         | **im**port **R**outer **u**se**R**esolved**P**ath                |
| "imur"                        | `import { useRoutes } from 'react-router-dom'`                               | **im**port **R**outer **u**se**R**outes                          |
| "imusp"                       | `import { useSearchParams } from 'react-router-dom'`                         | **im**port **R**outer **u**se**S**earch**P**arams                |
| "imusp"                       | `import { useSearchParams } from 'react-router-native'`                      | **im**port **R**outer **u**se**S**earch**P**arams (React Native) |

### Hooks

`useHref` → `const href = useHref()`

`useInRouterContext` → `const inRouterContext = useInRouterContext()`

`useLinkClickHandler` → `const handleClick = useLinkClickHandler(to, options)`

`useLinkPressHandler` → `const handlePress = useLinkPressHandler(to, options)`

`useLocation` → `const location = useLocation()`

`useMatch` → `const pathMatch = useMatch()`

`useNavigate` → `const navigate = useNavigate()`

`useNavigationType` → `const navigationType = useNavigationType()`

`useOutlet` → `const outlet = useOutlet()`

`useOutletContext` → `const [state, setstate] = useOutletContext()`

`useParams` → `const { param } = useParams()`

`useResolvedPath` → `const resolvedPath = useResolvedPath()`

`useRoutes` →

```jsx
let routes = useRoutes([
  {
    path: '/',
    element: <Dashboard />,
    children: [
      { path: 'messages', element: <DashboardMessages /> },
      { path: 'tasks', element: <DashboardTasks /> },
    ],
  },
  { path: 'team', element: <AboutPage /> },
])

return routes
```

`useSearchParams` →

```jsx
const [searchParams, setSearchParams] = useSearchParams()

function handleSubmit(event) {
  event.preventDefault()
  const params = serializeFormQuery(event.target)
  setSearchParams(params)
}
```

### routing

`rr`/`Router`, **R**eact **R**outer (BrowserRouter, HashRouter)  →

```jsx
<Router basename="/path">
  <App />
</Router>
```

`rr`/`HistoryRouter`, **R**eact History**R**outer  →

```jsx
<HistoryRouter history={history}>
  <App />
</HistoryRouter>
```

`StaticRouter`  →

```jsx
<StaticRouter location="/path">
  <App />
</StaticRouter>
```

`Routes`  →

```jsx
<Routes>
  <Route path="/" element={<Home />} />
  <Route path="Home" element={<FeatureComponent />} />
</Routes>
```

`Route`  →

```jsx
<Route path="path" element={<path />} />
```

`matchPath`  →

```jsx
const match = matchPath('/users/1', {
  path: '/users/:id',
  end: true,
  caseSensitive: false,
})
```

### Navigation


`rl`/`Link`, **R**outer <**L**ink>  →

```jsx
<Link to="path">{Text}</Link>
```

`rnl`/`NavLink`, **R**outer <**N**av**L**ink>  →

```jsx
<NavLink to="/path">
  Text
</NavLink>
```

`Navigate`  →

```jsx
<Navigate to="/path" replace={true} />
```

`Outlet`  →

```jsx
<Outlet />
```

### Chore

`createSearchParams`  →

```jsx
const { searchParams } = createSearchParams()
```

`generatePath`  →

```jsx
const path = generatePath('/user/:id/:entity(posts|comments)', {
  id: 1,
  entity: 'posts'
})
```

`location`   →

```jsx
const location = {
  key: 'Key',
  pathname: '/path
  search: '?q=query-string',
  hash: '#fragment',
  state: {}
}
```

## Version

The major corresponds to the official generation.

React Router 5: [branch: v5](https://github.com/xianghongai/vscode-react-router-snippets/tree/v5) (5.0.*)

## License

MIT License
