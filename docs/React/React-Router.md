# React-Router
SPA

前端路由模式：hash / history

几个包：

- react-router：核心包
- react-router-dom：DOM渲染使用到的包
- react-router-native：原生应用使用到的包
- react-router-config：路由配置相关的包

## 使用

### 安装

```bash
$ npm i react-router-dom@5
```

### 引入路由（HashRouter或BrowserRouter）

```javascript
// ./src/index.js
import { HashRouter as Router } from 'react-router-dom'
// 或
// import { BrowserRouter as Router } from 'react-router-dom'

ReactDOM.render(
  <Router>
    <App />
  </Router>,
  document.getElementById('root')
)
```

- HashRouter 是 Hash 模式路由，URL 中有 `#` 号
- BrowserRouter 是 History 模式的路由，URL 中没有多余的 `#` 号，但这种路由模式要用好，还需要服务器进行相关配置

### 利用 Route 配置路由

```jsx
import { Route } from 'react-router-dom'

function Nav() {
    return (
        <Route path="/category" component={Category} exact />
        <Route path="/home">
          <Home />
          <TabBar />
        </Route>
        <Route path="/mine" render={() => (
          <>
            <Mine />
            <TabBar />
          </>
        )} />
    )
}
```

- Route 组件用于配置路由：path 为路由路径，component 为对应渲染的组件
- 当同一路径下有多个组件需要渲染时，可作为 Route 组件的孩子节点进行渲染，或使用 render 属性
- component 与 render 属性不能共存，如果同时出现，会忽略 render 属性
- exact 表示精确匹配，仅当路径完全精确匹配时才渲染对应组件

### 使用 Link 定义链接

```jsx
import { Link } from 'react-router-dom'

render() {
    return <Link to="/home">首页</Link>
}
```

Link 组件会渲染为 `<a>` 链接标签，实现链接的跳转

### 使用 Redirect 实现重定向

```jsx
import { Redirect } from 'react-router-dom'

render() {
    return <Redirect to="/home" />
}
```

### Switch 组件使用

```jsx
import { Route, Redirect, Switch } from 'react-router-dom'
render() {
    return (
      <Switch>
        <Route path="/category" component={Category} />
        <Route path="/home">
            <Home />
            <TabBar />
        </Route>
        <Route path="/mine" render={() => (
                <>
                <Mine />
                <TabBar />
                </>
            )} />

        <Redirect to="/home" />
      </Switch>
    )
}
```

Switch 组件仅会渲染孩子节点中第一个匹配路由路径的 Route 组件或 Redirect 组件

### 嵌套路由

```jsx
import React, { Component } from 'react'
import { Link, Route } from 'react-router-dom'
import SubCategory from './SubCategory'

export default class Category extends Component {
  render() {
    return (
      <div>
        分类页面-主分类
        <div><Link to="/category/sub?id=11111111">分类1</Link></div>
        <div><Link to="/category/sub/2222222">分类2</Link></div>

        <Route path="/category/sub/:id?" component={SubCategory} />
      </div>
    )
  }
}
```

嵌套路由对应于组件的嵌套，比如在分类组件内部某个区域需要嵌套子分类的布局，则对应路由的定义：`/category/subcategory` 设置，在分类组件中对应区域利用 Route 组件渲染嵌套路由即可。

### withRouter()

```jsx
import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'

class SubCategory extends Component {
  render() {
    console.log('sub:', this.props)
    return (
      <div>
        子分类页面 
      </div>
    )
  }
}

// 如果在组件中需要使用到路由的 history、location、match 对象，但
// 组件属性中这些对象不存在，则可以使用 withRouter() 这个 HOC 来为
// 包裹组件注入（增强）这几个对象的使用
// export default SubCategory
export default withRouter(SubCategory)
```

withRouter 是一个 HOC（高阶组件），可以为包裹组件注入 history、location、match 这几个与路由相关的对象。

## 异步 action 创建函数

可使用 redux-thunk 中间件

当调用异步 API 时，有两个非常关键的时刻：发起请求的时刻，和接收到响应的时刻（也可能是超时）。

1.异步发送网络请求

```javascript
import request from '../utils/request'
// 异步发送网络请求
export const loginAsync = (user) => request({
  url: '',
  method: 'POST',
  data: user,
})
```

2.action.js 创建异步 Action 函数，发送dispatch参数

```javascript
/**
 *  定义异步 Action 创建函数，在 action creator 中也可以返回一个函数
 *  该返回的函数会自动被 redux-thunk 中间件调用执行。在 thunk 中间件
 *  调用返回函数执行时，会传递 dispatch 参数
 * */

// 1 函数内传入user作为参数，返回了dispatch函数，函数自动被redux-thunk调用，执行、、loginAsync异步函数，处理响应
import { LOGIN_SUCCEED, LOGIN_DEFEATED } from './constants'
import { loginAsync } from '../api/user'
export const loginAsyncActioncreator = (user) => (dispatch) => {
  loginAsync(user)
    .then((data) => {
      if (data.status === 200) {
        dispatch(loginSuccessActionCreator(data))
      } else {
        dispatch({type: LOGIN_DEFEATED})
      }
    })
}
```

3.rendux-thunk

```shell
$ npm install redux-thunk
$ npm install redux-logger
```

！安装了需要我们自己去使用它（redux-thunk），通过使用指定的 middleware，action 创建函数除了返回 action 对象外还可以返回函数。这时，这个 action 创建函数就成为了 [thunk](https://en.wikipedia.org/wiki/Thunk)。当 action 创建函数返回函数时，这个函数会被 Redux Thunk middleware 执行。这个函数并不需要保持纯净；它还可以带有副作用，包括执行异步 API 请求。

我们是如何在 dispatch 机制中引入 Redux Thunk middleware 的呢？我们使用了 `[applyMiddleware()](https://www.redux.org.cn/docs/api/applyMiddleware.html)`，如下：

3.1先引入

```javascript
import { createStore, applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk'
import { createLogger } from 'redux-logger'
const loggerMiddleware = createLogger()
// 利用applyMiddleware
const store = createStore(
  rootReducer,
  applyMiddleware(
    thunkMiddleware, // 允许我们 dispatch() 函数
    loggerMiddleware // 一个很便捷的 middleware，用来打印 action 日志
  )
)
```

# 编程式导航

```javascript
import { useHistory } from "react-router-dom";
 
function HomeButton() {
  let history = useHistory();
  // use history.push('/some/path') here
};
```

# 自己写一个react-router-config

**react-router和vue-router对比起来，感觉vue-router设计的真的是简单好用啊。**

**但是react可以通过一款react-router-config插件做到和vue-router一样的使用感**

react-router-config的源码

```javascript
// 1.1 引入需要的包
import React from 'react'
// 引入 route 注意，这里安装的是6.2.1的版本的router-dom包
import { Route, Switch } from 'react-router-dom'
// 1.2 rotes匹配的路由作为参数传递
const renderRoutes = (routes) => (
  // console.log(routes) => []
  // 1.3 判断routes数组 为家返回null，存在则变量数组
  routes ? (
    <Switch>
      {routes.map((route, i) => (
        <Route
          key={route.path}
          path={route.path}
          exact={route.exact}
          // 1.4 render属性，回调函数插入子组件，props是匹配路由对象的方法
          render={(props) => {
            // 1.5 Object.assign()复制一个对象，参数1是复制的目标对象
            props = Object.assign({route}, props)
            // 1.6 返回子组件 <route.component /> 并传递参数
            return (
              route.render
                ? route.render
                : <route.component {...props} router={route}/>
            )
          }}
        />
      ))}
    </Switch>
  ) : null
)
export default renderRoutes
```

routes.js源码

```javascript
// 1 引入组件
import Login from '../Views/Login'
import Dashboard from '../Views/Dashboard'
import FrameLayout from '../layout/frame-layout.jsx'

// 1.2 定义routes匹配路由和呈现的组件
const routes = [
  {
    path: '/login',
    exact: true,
    component: Login,
  },
  {
    path: '/',
    component: FrameLayout,
    children: [
      {
        path: '/dashboard',
        component: Dashboard,
      },
    ],
  },
]

export default routes
```

App.js源码

```javascript
import React from 'react'
// 引入 route 注意，这里安装的是6.2.1的版本的router-dom包
import { Switch } from 'react-router-dom'
// 引入routes 和 render-routes路由集中路由配置文件
import routes from './routes'
import  renderRoutes  from './utils/render-routes'

function App() {
  return (
    <Switch>
      {renderRoutes(routes)}
    </Switch>
  )
}
export default App;
```

