# Redux
提供可预测的状态管理

redux 与 react 没有任何的关系，在 react 中需要使用 redux，则需要安装绑定库：react-redux。

redux 采用集中式存储管理应用的所有组件的状态，并以相应的规则保证状态以一种可预测的方式发生变化。

Redux 在以下情况下更有用：

- 在应用的大量地方，都存在大量的状态
- 应用状态会随着时间的推移而频繁更新
- 更新该状态的逻辑可能很复杂
- 中型和大型代码量的应用，很多人协同开发

## 概念

- store - 仓库，集中式管理存储应用中各组件共享状态的地方
- state - 各组件需要共享的“状态”
- action - 是一个普通对象，通常用于描述发生了什么事情。一般在 action 对象中有两个属性：{ type, payload }，type 表明动作类型，payload 表示有效载荷
- action creator：action 创建函数，主要用于生成 action 对象，让你不必每次都手动编写 action 对象
- reducer：是一个**纯函数**，主要用于同步更新状态数据，这个函数会传递 state 和 action 作为参数，返回新的 state 对象

> Reducer 必需符合以下规则：
>  
> - 仅使用 `state` 和 `action` 参数计算新的状态值
> - 禁止直接修改 `state`。必须通过复制现有的 `state` 并对复制的值进行更改的方式来做 _不可变更新（immutable updates）_。
> - 禁止任何异步逻辑、依赖随机值或导致其他“副作用”的代码


> reducer 函数内部的逻辑通常遵循以下步骤：
>  
> - 检查 reducer 是否关心这个 action
> - 如果是，则复制 state，使用新值更新 state 副本，然后返回新 state
> - 否则，返回原来的 state 不变


- dispatch：reducer() 不能直接调用。dispatch(action) 用于触发 action 调用，在内部实现对 reducer() 的调用。**更新 state 的唯一方法是调用 **`**store.dispatch()**`** 并传入一个 action 对象**。

## 三大原则

### 单一数据源

**整个应用的 state 被储存在一棵 object tree 中，并且这个 object tree 只存在于唯一一个 store 中。**

### State 是只读的

**唯一改变 state 的方法就是触发 action，action 是一个用于描述已发生事件的普通对象。**

### 使用纯函数来执行修改

**为了描述 action 如何改变 state tree ，你需要编写 reducers。**

## 使用

### 安装

```bash
$ npm i redux react-redux
# 或
$ yarn add redux react-redux
```

### 创建 reducer

```javascript
// ./reducers/counter.js
import { DECREMENT, INCREMENT } from "../actions/constants"

/**
 * state 初始值
 */
const initialState = {
  count: 32, // 计数数量的状态数据
}

/**
 * reducer 纯函数，用于实现状态的同步更新，返回更新后的新状态数据
 * @param {*} state 更新前的状态数据 
 * @param {*} action 描述发生了什么，有 type 与 payload 属性
 * @returns 
 */
const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case INCREMENT: // 加数量
      const copy = { ...state } // 复制 state 值，实际应该进行深克隆
      copy.count += payload.num // 对复制后的副本进行更新
      return copy // 返回更新后的新状态数据
    default:
      return state
  }
}

export default reducer
```

reducer() 是一个纯函数，传递 state 与 action 作为参数，返回新的 state。在函数体内部不能直接更新参数 state，而应该对参数 state 进行深克隆，然后更新克隆后的副本。

```javascript
// ./reducers/index.js
import { combineReducers } from 'redux'
import counter from './counter'

// 将多个独立的 reducer 最终合并为一个根 reducer
export default combineReducers({
  counter
})
```

将各独立的 reducer 合并为一个根 reducer

## Action 处理

现在我们已经确定了 state 对象的结构，就可以开始开发 reducer。reducer 就是一个纯函数，接收旧的 state 和 action，返回新的 state。

### 定义 action creator

```javascript
// ./actions/counter.js
// ......
/**
 * action creator，action创建函数，主要用于生成 action 对象
 * @returns 
 */
export const incrementActionCreator = () => ({
  type: INCREMENT,
  payload: {
    num: 5
  },
})
```

action creator 主要用于创建 action，以便实现 action 复用时少写代码

### 创建 Store

**Store** 就是把它们联系到一起的对象。Store 有以下职责：

- 维持应用的 state；
- 提供 `[getState()](https://www.redux.org.cn/docs/api/Store.html#getState)` 方法获取 state；
- 提供 `[dispatch(action)](https://www.redux.org.cn/docs/api/Store.html#dispatch)` 方法更新 state；
- 通过 `[subscribe(listener)](https://www.redux.org.cn/docs/api/Store.html#subscribe)` 注册监听器;
- 通过 `[subscribe(listener)](https://www.redux.org.cn/docs/api/Store.html#subscribe)` 返回的函数注销监听器。

```javascript
// ./store/index.js
import { createStore } from 'redux'
import rootReducer from '../reducers'

// 创建 Store 对象
export default createStore(rootReducer)
```

调用 createStore() 并传递根 reducer 作为参数，创建 Store 仓库对象

### 利用绑定库的 Provider 保存 store

```javascript
// ./src/index.js
// ......
import { Provider } from 'react-redux'
import store from './store'
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)
```

通常在 src/index.js 中引入绑定库的 Provider 与 redux 创建的 store，利用 Provider 组件包裹应用中的组件，在 Provider 中使用 store 属性保存 redux 的 Store，这样，在 Provider 组件的后代组件中，就可以去连接并使用 redux 的 store 了。

### 组件中连接 store

```javascript
// ./App.jsx
// ......
import { connect } from 'react-redux'

/**
 * 将 store 中 state 的数据映射到组件的属性中
 * mapStateToProps 是一个函数，会传递 store 中的 state 作为参数。
 * 返回一个普通对象，该对象会被合并到组件的 props 中
 * @param {*} state 
 * @returns 
 */
const mapStateToProps = state => ({
  count: state.counter.count
})

/**
 * 将更新状态数据的动作映射到组件的属性中
 * mapDispatchToProps 是一个函数，会传递 dispatch 作为参数。
 * 返回一个对象，返回对象中的各字段应该是函数（方法），返回
 * 对象中的各字段也会被合并到组件的 props 中。
 */
const mapDispatchToProps = dispatch => ({
  plus: () => dispatch(incrementActionCreator()),
  minus: () => dispatch(decrementActionCreator()),
})

/* 调用 connect() 函数，在 React 组件中，连接 redux 的 store */
const hoc = connect(mapStateToProps, mapDispatchToProps)

export default hoc(App)
```

绑定库中的 connect() 方法主要用于在组件中连接 redux 的 store，传递 mapStateToProps 和 mapDispatchToProps 作为参数：两个参数都是函数的结构，函数中返回的对象会被合并到包裹的组件 props 属性中。

connect() 返回值是一个函数包裹器（HOC），调用该包裹器函数并传递组件参数，可以实现将  mapStateToProps 和 mapDispatchToProps 返回值的对象各属性合并注入到组件的操作。

# 理解redux（自己）

- store：推送数据的仓库
- reducer：帮助 store 处理数据的方法（初始化、修改、删除）
- actions：数据更新的指令
- react 组件（UI）：订阅 store 中的数据

connect(mapStateToProps, mapDispatchToProps, mergeProps, _ref2) {

## redux 三大原则：

- 单一数据源：整个应用的 state 存放在唯一的一个 store 中。`store.getState()`
- state 是只读的，唯一改变 state 的方法就是触发 action，action 是一个用于描述已发生事件的普通对象。

```css
store.dispatch({
  type: 'COMPLETE_TODO',
  index: 1
})
```

- 使用纯函数来执行修改（reducer：接收先前的 state 和 action，并返回新的 state）

纯函数：1、相同的输入总是会返回相同的输出，2、不会产生任何副作用、3、不依赖于外部状态

## react-redux

`React-Redux` 将所有组 件分成两大类：`UI` 组件和容器组件。`UI` 组件负责 `UI` 的呈现，容器组件负责管理数据和逻辑。

- `UI` 组件：只负责 UI 的呈现，不带有任何业务逻辑；没有状态（即不使用 `this.state` 这个变量）；所有数据都由参数 `this.props` 提供；不使用任何 `Redux` 的 `API`
- 容器组件：负责管理数据和业务逻辑，不负责 `UI` 的呈现；带有内部状态；使用 `Redux` 的 `API`。

`React-Redux` 规定，所有的 `UI` 组件都由用户提供，容器组件则是由 `React-Redux` 自动生成。也就是说，用户负责视觉层，状态管理则是全部交给它。

`React-Redux` 规定，所有的 `UI` 组件都由用户提供，容器组件则是由 `React-Redux` 自动生成。也就是说，用户负责视觉层，状态管理则是全部交给它。

### **connect()**

```jsx
import { connect } from 'react-redux'
const VisibleTodoList = connect(mapStateToProps, mapDispatchToProps)(TodoList)
```

上面 `VisibleTodoList` 便是 `UI` 组件 `TodoList` 通过 `connect` 方法自动生成的容器组件。

`connect` 方法接受两个参数：`mapStateToProps` 和 `mapDispatchToProps`。它们定义了 `UI` 组件的业务逻辑。前者负责输入逻辑，即将 `state` 映射到 `UI` 组件的参数 `props`，后者负责输出逻辑，即将用户对 `UI` 组件的操作映射成 `Action`。

**mapStateToProps()**

`mapStateToProps` 是一个函数，它接受 `state` 作为参数，返回一个对象。

```javascript
const mapStateToProps = state => {
    console.log(state)
    return {
        count: state.counter.count
    }
}
```

`mapStateToProps` 建立一个从（外部的）`state` 对象到（`UI` 组件的）`props` 对象的映射关系。执行后应该返回一个对象，里面的每一个键值对就是一个映射。

**mapDispatchToProps()**

`mapDispatchToProps` 用来建立 `UI` 组件的参数到 `store.dispatch` 方法的映射。它定义了哪些用户的操作应该当作 `Action`，传给 `Store`。它可以是一个函数，也可以是一个对象。

- 是函数则会得到 `dispatch` 和 `ownProps`（容器组件的 `props` 对象）两个参数。

```tsx
const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onClick: () => {
      dispatch({
        type: 'SET_VISIBILITY_FILTER',
        filter: ownProps.filter,
      })
    }
  }
}
```

### Provider 组件

`connect` 方法生成容器组件以后，需要让容器组件拿到 `state` 对象，才能生成 `UI` 组件的参数。
`React-Redux` 提供 `Provider` 组件，使整个 `app` 访问到 `Redux store` 中的数据 即`state`。

```javascript
// 入口文件
import React from 'react'
import ReactDOM from 'react-dom'
import store from './store'
import { Provider } from 'react-redux'
import App from './App'
// 利用provider保存store
ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>
   ,
    document.querySelector('#root')
)
```
