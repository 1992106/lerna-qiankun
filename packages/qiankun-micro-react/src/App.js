import {
  BrowserRouter,
  Switch,
  Route,
  Link
} from 'react-router-dom'
import logo from './logo.svg'
import './App.css'
import Home from './views/Home'
import About from './views/About'

// 设置 history 模式路由的 base,和主应用的 activeRule 是一样
const BASE_NAME = window.__POWERED_BY_QIANKUN__ ? '/react/micro-app/' : '/'

function App() {
  return (
    <BrowserRouter basename={BASE_NAME}>
      <img src={logo} className="App-logo" alt="logo" />
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
      </ul>
      <Switch>
        {/*Route 类似vue-router的 router-view */}
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/about">
          <About />
        </Route>
      </Switch>
    </BrowserRouter>
  )
}

export default App
