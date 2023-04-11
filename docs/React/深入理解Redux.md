## redux工作流
![image.png](/react/4.png)
## redux原理
#### store.dispatch  触发
#### store.subscrbe 订阅
#### store.getState 获取
## 手写简易版redux
#### store - 暂不支持异步
```javascript
import { legacy_createStore } from "redux";
import reducer from '../reducer/index'


const store = WyCreateStore(reducer)

function WyCreateStore(reducer){


  let list = []  // 收集回调函数
  let state = reducer(undefined, {})  //给state赋值初始值 reduce初始返回值是老的数据和空的action对象

  // 订阅
  function subscribe(callback){   //subscribe(()=>{}) 接收的参数是一个回调函数
    list.push(callback)           //收集回调函数 
  }

  // 触发
  function dispatch(action){      //dispatch(()=>{}) 接收的参数是一个毁掉函数
    state = reducer(state, action)  // 给reducer传入老的数据以及action之后经过reducer处理 再赋新的值给state 

    for(let i in list)   {  // 遍历list中的每一项回调函数
      list[i] && list[i]()  //触发传入进来的回调函数
    }
  }

  //获取
  function getState(){
    return state   // 返回最新的state
  }

  // 返回值是上面定义的三个函数 
  return {  
    subscribe,
    dispatch,
    getState
  }
}

export default store
```
#### reducer
```javascript
const reducer = (prevState = {
  show: true 
}, action) => {
  let newState = {...prevState}
  switch(action.type){
    case  'kerwind' :
     newState.show = false
     return newState
    case  'winkerd' :
     newState.show = true
     return newState
    default :
    return prevState
  }

}

export default reducer
```
## redux三大原则
1.store以单一的对象存储在store对象中
2.store是只读的
3.使用纯函数reducer执行state更新
#### 纯函数：
1.对外界没有副作用 
2.同样的输入得到同样的输出

## redux中间件
### redux-thunk
在rudex里面 action仅仅只是携带了普通的js对象 aciton creator返回的是这个action类型的对象 然后通过store.dispatch进行分发 同步的情况下都很完美 但是reducer无法处理异步
那么就需要aciton和reducer中间架起一座桥梁来处理异步 就是 apply**middleware(reduxThunk)**
**内部源码的原理是**
中间件这个桥梁接收到的参数action  如果不是和function则和过去一样直接执行next方法（下一步处理） 相当于中间件没有做任何事 如果action是function 则先执行aciton aciton的处理结束之后 再在aciton的内部调用dispatch 即可解决异步问题
```javascript
import axios from "axios"


// redux-thunk风格
const getCinemaListAciton = () => {
  
  return (dispatch) => {
    axios({
      url: 'https://m.maizuo.com/gateway?cityId=310100&pageNum=1&pageSize=10&type=1&k=8076729',
      headers: {
        'X-Client-Info': '{"a":"3000","ch":"1002","v":"5.2.1","e":"16717855001049208970805249","bc":"310100"}',
        'X-Host': 'mall.film-ticket.film.list'
      }
    }).then(res => {
        dispatch({
          type:'cinemaList',
          payload: res.data.data.films
        })
      })
  }
} 

export default getCinemaListAciton
```

### redux-promise
```javascript
import axios from "axios"
// redux-promise
const getCinemaListAciton = () => {

  return axios({
          url: 'https://m.maizuo.com/gateway?cityId=310100&pageNum=1&pageSize=10&type=1&k=8076729',
          headers: {
            'X-Client-Info': '{"a":"3000","ch":"1002","v":"5.2.1","e":"16717855001049208970805249","bc":"310100"}',
            'X-Host': 'mall.film-ticket.film.list'
          }
        }).then(res => {
            return ({
              type:'cinemaList',
              payload: res.data.data.films
            })
          })
}

export default getCinemaListAciton
```
store中
```javascript
import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import reduxThunk from 'redux-thunk'
import reduxPromise from 'redux-promise'

// applyMiddleware redux中间件配合 redux-thunk 或者 redux-Promise完成异步
const store = legacy_createStore(reducer, applyMiddleware(reduxPromise, reduxThunk))

```

Redux开发者工具
```javascript
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const store = legacy_createStore(reducer, composeEnhancers(applyMiddleware(reduxPromise, reduxThunk)))
```


# react-redux
```javascript
import { Provider } from 'react-redux';
import store from './7.redux/store';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Provider store={store}>
        <App />
    </Provider>
);
```
根组件 使用解构出的 Provider标签包裹 并且传入属性store={store}
```jsx
import React, { Fragment, useEffect, useState } from 'react';
import { connect } from 'react-redux';
const Home = (props) => {

  useEffect(()=>{
    console.log(props);
  }, [props])

  return <></>

}


// connect(第1个参数将来给孩子传的属性使用回调传递， 第2个参数将来给孩子传的回调函数使用对象传递)
  exprot defult connect((state) => {
  return {
    a:1,
    b:2,
    state:state  // 此时的state为store中的值
  }
})(Home)
```
connect 往APP身上传递属性 
第一个参数是用于获取数据相当于解放store.getState 使用的是回调函数的传递方式必须有返回值 返回值是什么整体组件的props身上就会得到什么属性 接收的行参是公共状态值state
第二个参数是解放store.dispatch 使用的是对象来传递函数的方式 通过内外传递参数	

# React-redux 原理
connect 是高阶组件 HOC
Provider组件 可以跨级让容器拿到state 使用了context
## 高阶组件构建和应用
HOC不仅仅是一个方法 应该说是一个组件工厂 获取低阶组件形成高阶组件
1.代码复用 代码模块化
2.增删改props
3.渲染劫持

# Redux持久化
下载包
```shell
cnpm i redux-persist
```
```javascript

import {persistStore, persistReducer} from 'redux-persist' //持久化1
import storage from 'redux-persist/lib/storage' //持久化2
// 持久化3
const persistConfig = {
  key: 'wiess',  //键值对 键名称
  storage,  //存储在locastorage中
  whitelist: ['CityReducer']  //持久化白名单
}

const MyPersistReducer = persistReducer(persistConfig, reducer) //持久化4  变为持久化的reducer
const store = legacy_createStore(MyPersistReducer, composeEnhancers(applyMiddleware(reduxPromise, reduxThunk))) //持久化5
const persistor = persistStore(store) //持久化6
export {store, persistor} //持久化7
```
```jsx
import { store, persistor } from './7.react-redux/store'; // 持久化8
import { PersistGate } from 'redux-persist/integration/react'   // 持久化9

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>   // 持久化10
      <App />
    </PersistGate>
  </Provider>
);
```
