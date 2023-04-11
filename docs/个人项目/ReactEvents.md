<a name="eBKno"></a>
### Events 一款基于 React+Ts 的后台管理系统 项目全使用hook语法
<a name="erdGc"></a>
#### 拥有权限管理功能 对不同用户设置不同权限 如超级管理员 战区管理员 战区编辑等拥有不同的权限
<a name="FhEM3"></a>
### 技术栈：
-- React18<br />-- TypeScript<br />-- Antd组件库<br />-- Redux<br />-- React-Redux (connect)<br />-- React-Router-Dom V6版本(useRoutes)<br />-- Echarts<br />-- Sass<br />-- axios
<a name="zHqrc"></a>

### 项目结构：
```
react-news
├─ src
│  ├─ api
│  │  ├─ apiType          定义接口api的Ts类型
│  │  ├─ login.ts         每个组件单独的接口api统一管理
      ......
│  ├─ App.tsx             app根组件
│  ├─ assets              静态资源
│  ├─ component           公共的子组件
│  │  ├─ news-manage  
│  │  └─ sandBox          项目的头部和侧边栏的子组件
│  ├─ index.css
│  ├─ main.tsx            app项目入口文件
│  ├─ reast.css           reast项目样式重置表
│  ├─ reducer             各功能的reducer分开管理以及acitons的管理
│  ├─ router              路由文件使用useRoutes路由表
│  │  ├─ Redirect.tsx     手写重定向
│  │  └─ route.tsx        路由表 路由懒加载 路由权限控制
│  ├─ store               redux-stroe
│  ├─ types               各类ts的类型的公共管理
│  ├─ utils               工具
│  │  ├─ deepcopy.ts      手写深拷贝
│  │  └─ request.ts       封装axios基地址以及请求&响应拦截器
│  ├─ view
│  │  ├─ login                 登录页面
│  │  ├─ NotFound              404页面
│  │  └─ sandBox               项目主文件根路由
│  │     ├─ audit-manage       各种功能组件  不再一一阐述
│  │     ├─ home
         .....
│  │     └─ userManage
│  │        ├─ components
│  │        │  └─ userForm.tsx  封装Modal弹窗服用
│  │        └─ userList.tsx 

```

## 以下为项目展示
![image.png](/reactevents/reactevents1.png)
![image.png](/reactevents/reactevents2.png)
![image.png](/reactevents/reactevents3.png)
![image.png](/reactevents/reactevents4.png)
![image.png](/reactevents/reactevents5.png)
![image.png](/reactevents/reactevents6.png)
![image.png](/reactevents/reactevents7.png)
![image.png](/reactevents/reactevents8.png)
#### 封装了路由以及路由权限 项目中使用了route v6 - useRoutes路由表作为驱动
```tsx
// 仅部分
import { useRoutes } from "react-router"
import React, { useEffect, useState, lazy, Suspense } from 'react'
import Redirect from './Redirect'
import axios from "axios"
import { connect } from "react-redux"
const NotFound = lazy(()=> import('../view/NotFound'));
const Login = lazy(()=> import('../view/login'));
const Sandbox = lazy(()=> import('../view/sandBox/index'))
const Home = lazy(()=> import('../view/sandBox/home/index'));
const RightList = lazy(()=> import('../view/sandBox/rightManage/rightList'));
const RoleList = lazy(()=> import('../view/sandBox/rightManage/roleList'));
const UserList = lazy(()=> import('../view/sandBox/userManage/userList'));
const NewsAdd = lazy(()=> import('../view/sandBox/news-manage/newsAdd'));
const NewsCategory = lazy(()=> import('../view/sandBox/news-manage/newsCategory'));
const NewsDraft = lazy(()=> import('../view/sandBox/news-manage/newsDraft'));
const AuditList = lazy(()=> import('../view/sandBox/audit-manage/auditList'));
const Audit = lazy(()=> import('../view/sandBox/audit-manage/audit'));
const Unpublished = lazy(()=> import('../view/sandBox/publish-manage/unpublished'));
const Sunset = lazy(()=> import('../view/sandBox/publish-manage/sunset'));
const Published = lazy(()=> import('../view/sandBox/publish-manage/published'));

//  `````````
```
<a name="Iw3R2"></a>
#### 封装axios 将接口API统一进行管理 
```tsx
import axios from "axios";

const request = axios.create({
  baseURL: 'http://localhost:2222',
  timeout: 20000
})

// 添加请求拦截器
request.interceptors.request.use(function (config) {
  // 在发送请求之前做些什么
  return config;
}, function (error) {
  // 对请求错误做些什么
  return Promise.reject(error);
});

// 添加响应拦截器
request.interceptors.response.use(function (response) {
  // 对响应数据做点什么
  return response;
}, function (error) {
  // 对响应错误做点什么
  return Promise.reject(error);
});


export default request


// ----------------------------------------------------------

// 仅部分
import request from "../utils/request";

// 获取角色列表
export const getUser = () => {
  return request({
    url: `/roles`
  })
}
// 删除角色
export const deleteUser = (id: number) => {
  return request({
    url: `/roles/${id}`,
    method: 'delete'
  })
}
// 权限控制
export const changeUserPower = (id: number, rights: Irights) => {
  return request({
    url: `/roles/${id}`,
    method: 'patch',
    data: {
      rights
    }
  })
}
```
<a name="TcKmm"></a>
#### 使用react-redux管理公共状态或多层级数据共享
```tsx
import { legacy_createStore, combineReducers, compose, applyMiddleware } from "redux";
import reduxThunk from "redux-thunk";
import userReducer from "../reducer/userReducer";
import collapsedReducer from "../reducer/collapsedReducer";
import { persistStore, persistReducer } from 'redux-persist'  //持久化1
import storage from 'redux-persist/lib/storage' //持久化2


// 持久化3
const persistConfig = {
  key: 'wiess',  //键值对 键名称
  storage,  //存储在locastorage中
  // whitelist: ['userReducer']  //持久化白名单
}

// 多个 reducer合并
const myReducer = combineReducers({
  userReducer,
  collapsedReducer
})

const MyPersistReducer = persistReducer(persistConfig, myReducer) //持久化4  变为持久化的reducer

const composeEnhancers = (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;


const store = legacy_createStore(MyPersistReducer, composeEnhancers(applyMiddleware(reduxThunk)))

const persistor = persistStore(store) //持久化6

export  { store, persistor }
```
<a name="R7QqP"></a>
#### 单独配置各项所需reducer 以及 aciton统一管理
```tsx
//  actions 

// 登录
export const logTo = (payload:any) => {
  return {
    type: 'SignInlogin',
    payload
  }
}

//退出
export const outTo = (payload:any) => {
  return {
    type: 'LogOut',
    payload
  }
}
// 收放侧边栏
export const changeType = () => {
  return {
    type: 'changeType'
  }
}

```
```tsx
import deepcopy from "../utils/deepcopy";
// 手写深拷贝

interface IpverState {
  isCollapsed: boolean | null
}

const collapsedReducer = (pverState: IpverState = {
  isCollapsed: false
}, action: Iaction) => {
  let newState = deepcopy(pverState)
  switch (action.type) {
    case 'changeType':
      newState.isCollapsed = !newState.isCollapsed
      return newState
    default:
      return pverState
  }
}

export default collapsedReducer
```
<a name="y2Y8q"></a>
#### 手写深拷贝
```tsx
// 深拷贝
interface Iresult {
  [key:string] : any
}

const deepcopy = (obj: any) => {
  if (typeof obj !== 'object' || obj === null) {
    return obj
  }
  let result:Iresult
  if (obj instanceof Array) {
    result = []
  } else {
    result = {}
  }
  for(let key in obj){
    result[key] = deepcopy(obj[key])
  }
  return result
}

export default deepcopy
```
<a name="yhbCk"></a>