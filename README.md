<p>
  <h1 align="center">React Router Snippets (v5) (Visual Studio Code)</h1>
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

**Import**

| prefix    | body                                                         | description                      |
|-----------|--------------------------------------------------------------|----------------------------------|
| `imbr` →  | `import { BrowserRouter as Router } from 'react-router-dom'` | **im**port **B**rowser**R**outer |
| `imhr` →  | `import { HashRouter as Router } from 'react-router-dom'`    | **im**port **H**ash**R**outer    |
| `immr` →  | `import { MemoryRouter } from 'react-router-dom'`            | **im**port **M**emory**R**outer  |
| `imwr` →  | `import { NativeRouter } from 'react-router'`                | **im**port **N**ative**R**outer  |
| `iml` →   | `import { Link } from 'react-router-dom'`                    | **im**port **L**ink              |
| `imnl` →  | `import { NavLink } from 'react-router-dom'`                 | **im**port **N**av**L**ink       |
| `imr` →   | `import { Redirect } from 'react-router-dom'`                | **im**port **R**edirect          |
| `imwr` →  | `import { NativeRouter } from 'react-router'`                | **im**port NativeRouter          |
| `imsr` →  | `import { StaticRouter as Router } from 'react-router-dom'`  | **im**port **S**tatic**R**outer  |
| `imsr` →  | `import { Switch, Route } from 'react-router-dom'`           | **im**port **S**witch, **R**oute |
| `imgp` →  | `import { generatePath } from 'react-router'`                | **im**port **g**enerate**P**ath  |
| `immp` →  | `import { matchPath } from 'react-router'`                   | **im**port **m**atch**P**ath     |
| `imwr` →  | `import { withRouter } from 'react-router'`                  | **im**port **w**ith**R**outer    |
| `imuh` →  | `import { useHistory } from 'react-router-dom'`              | **im**port **u**se**H**istory    |
| `imul` →  | `import { useLocation } from 'react-router-dom'`             | **im**port **u**se**L**ocation   |
| `imup` →  | `import { useParams } from 'react-router-dom'`               | **im**port **u**se**P**arams     |
| `imurm` → | `import { useRouteMatch } from 'react-router-dom'`           | **im**port **u**se**R**outeMatch |

`rr`/`Router` →

```jsx
<Router basename='/path'>
  <App />
</Router>
```

`Redirect` → `<Redirect from='/users/:id' to='/users/profile/:id' />`

`Switch` →

```jsx
<Switch>
  <Route exact path='/'>
    <Component />
  </Route>
  <Route path='path'>
    <Component />
  </Route>
</Switch>
```

`rl`/`Link`→

```jsx
<Link
  to={{
    pathname: '/path',
  }}
>
  Text
</Link>
```

`nl`/`NavLink` →

```jsx
<NavLink exact to='/path'>
  Text
</NavLink>
```

`location` →

```javascript
const location = {
  key: 'Key',
  pathname: '/path
  search: '?q=query-string',
  hash: '#fragment',
  state: {}
}
```

`matchPath` →

```jsx
const match = matchPath('/users/1', {
  path: '/users/:id',
  exact: true,
  strict: false,
})
```

`withRouter` → `const FeatureComponentWithRouter = withRouter(FeatureComponent)`

**Hooks**

`uh`/`useHistory` →

```jsx
const history = useHistory()

function handleClick() {
  history.push('path')
}
```

`ul`/`useLocation` →

```jsx
const location = useLocation()
useEffect(() => {
  //
}, [location])
```

`up`/`useParams` →

```jsx
const { slug } = useParams()
```


`urm`/`useRouteMatch` →

```jsx
const match = useRouteMatch()

// build nested routes and links using match.url and `match.path`
<Link to={`${match.url}/me`}>My Profile</Link>
<Route path={`${match.path}/me`}><OwnUserProfile /></Route>
```

## Version

The major corresponds to the official generation.

## License

MIT License
