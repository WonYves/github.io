## 一、认识路由
##### 1】什么是路由？
**路由（routing）**就是通过互联的网络把信息从源地址传输到目的地址的活动。--- 维基百科
路由器提供了两种机制：路由和转送。

- 路由是决定数据包从**来源**到**目的地**的路径
- 转送将**输入端**的数据转移到合适的**输出端**

路由中有个非常重要的概念叫路由表，路由表本质上就是一个映射表，决定了数据包的指向。
##### 2】后端渲染和后端路由
###### ①后端渲染
jsp/php jsp：java server page ->html+css+java->java代码的作用就是从数据库中读取数据，并且将它动态的放在页面中。
**这种后端渲染也就是通过jsp动态网页里面写java代码获取数据库中的数据，然后直接在服务器中渲染成网页。然而客服端中请求到的网页中就只有html+css（也就是只能得到一个结果）。**
基本过程：
1.客户端输入访问地址向服务器发出请求
2.服务器收到客户端发送的url请求，然后通过正则对该url进行匹配，并且交给后端的controller进行处理，将jsp动态页面在服务器中渲染出来，再将结果返回给前端客户端
3.客户端收到服务器渲染的静态网页
###### ②后端路由
**后端服务器处理url和jsp页面之间的映射关系**（用web.xml配置路由）
![image.png](https://cdn.nlark.com/yuque/0/2023/png/32841606/1682926155463-ca7d931e-bc2e-4345-aad2-48955ed6398d.png#averageHue=%23f5f5f4&clientId=u8d8a8c60-650d-4&from=paste&id=u9b29e9a1&originHeight=676&originWidth=1437&originalType=url&ratio=1.25&rotation=0&showTitle=false&size=330733&status=done&style=none&taskId=uc26566a7-dc33-4768-9ec5-b57590247c7&title=)
##### 3】前端路由阶段
###### ①前后端分离阶段

- 随着Ajax的出现，有了前后端分离的开发模式。
- 后端只提供API来返回数据，前端通过Ajax获取数据，并且可以通过JavaScript将数据渲染到页面中。
- 这样做的最大优点就是前后端责任的清晰，后端专注于数据上，前端专注于交互和可视化上。
- 并且当移动端（IOS/Android）出现后，后端不需要进行任何处理，依然使用之前的一套API即可
- 目前很多网站依然采用这种模式开发。

![image.png](https://cdn.nlark.com/yuque/0/2023/png/32841606/1682926155480-fbe354a1-1f52-446a-8e99-c65bd1c07c20.png#averageHue=%23f4f4f4&clientId=u8d8a8c60-650d-4&from=paste&id=ub1de19fc&originHeight=681&originWidth=1433&originalType=url&ratio=1.25&rotation=0&showTitle=false&size=347376&status=done&style=none&taskId=u1cfe46eb-aa7e-4bda-973f-b94e98c046e&title=)
###### ②SPA(single page web application)单页面富应用阶段

- 其实SPA最重要的特点就是在前后端分离的基础上加了一层前端路由。
- 也就是前端来维护一套路由规则。

在前端路由的基础上，静态资源服务器中就不像前后端分离阶段的一个url对应一个html+css+js页面，取而代之的是index.html+css+js都只有一个。
![image.png](https://cdn.nlark.com/yuque/0/2023/png/32841606/1682926155348-55473b94-8c93-4a70-964b-aafe2996f5de.png#averageHue=%23f4f3f3&clientId=u8d8a8c60-650d-4&from=paste&id=ue7ebee29&originHeight=673&originWidth=1446&originalType=url&ratio=1.25&rotation=0&showTitle=false&size=253033&status=done&style=none&taskId=u0dd52c3d-372f-4316-b397-1ac1475e2cc&title=)
##### 4】前端渲染和前端路由
![image.png](https://cdn.nlark.com/yuque/0/2023/png/32841606/1682926155181-69ce6110-1806-4ffd-a952-e06d91cd424b.png#averageHue=%23f0e5e3&clientId=u8d8a8c60-650d-4&from=paste&id=u424f1937&originHeight=399&originWidth=921&originalType=url&ratio=1.25&rotation=0&showTitle=false&size=264645&status=done&style=none&taskId=u9dc07e2b-0013-4a52-b21a-1839e475598&title=)
###### ①前端渲染
**浏览器中显示网页中的大部分内容，都是由前端写的js代码在浏览器中执行，最终渲染出来的网页。**
基本过程：
1.客户端输入访问地址向服务器发出请求
2.（服务器分为静态资源服务器和提供API接口的服务器）静态资源服务器（在静态资源服务器中一个url对应一个html+css+js页面）会给客户端返回html+css+js代码，其中html+css浏览器可以直接渲染，js代码由浏览器执行，这里的js代码中会有一些向服务器API接口的请求
3.提供API接口的服务器再将对应的API接口的数据返回到客户端浏览器上，然后通过浏览器来执行js代码将数据渲染到页面上
###### ②前端路由
vue-router：管理url ->页面的映射关系
前端路由的核心：改变URL，但是页面不进行整体的刷新
##### 5】不向服务器请求的情况下修改url：location的hash模式和html5的history模式
###### ①Location 对象
Location 对象包含有关当前 URL 的信息；Location 对象是 Window 对象的一个部分，可通过 window.location 属性来访问。
location.hash='foo' 设置或返回从井号 (#) 开始的 URL（锚）。（并不会请求服务器）
**当hash只有一个#时，location.hash返回空字符串；当hash不止一个#时，location.hash返回#以及#后面的部分。当一个window的 hash （URL 中 # 以及#后面的部分，可通过location.hash返回）改变时就会触发 hashchange 事件。**
**效果就是从localhost:8080/#/变成了localhost:8080/#/foo**
location.href='xxx' 设置或返回完整的 URL。（会请求服务器）
###### ②History 对象
History 对象包含用户（在浏览器窗口中）访问过的 URL；History 对象是 window 对象的一部分，可通过 window.history 属性对其进行访问。
history.pushState({data},'title','aaa')加入url到浏览器历史列表（类似入栈）
此时修改的url是在#的前面部分，#后面的部分是hash来控制，对比上面location.hash，效果如下：
**效果就是从localhost:8080/#/变成了localhost:8080/aaa#/**
history.back()从当前url返回到历史列表中的上一个的url（类似出栈），相当于history.go(-1)
history.replaceState({data},'title',?url)用新的url替换当前url
history.forward()等价于history.go(1)有历史列表的情况下前进一个记录
## 二、vue-router基本使用
##### 1】认识vue-router
①vue-router是vue.js官方的路由插件，它和vue.js是深度集成的，适合用于构建单页面应用。
②vue-router是基于路由和组件的。路由用于设定访问路径，将路径和组件映射起来。在vue-router的单页面应用中，页面的路径的改变就是组件的切换。
##### 2】安装和使用vue-router
###### ①安装vue-router

```bash
npm install vue-router --save
```

###### ②在模块化工程中使用它（因为是一个插件，所以可以通过Vue.use()来安装路由功能）

- 第一步：导入**路由对象**，并且调用**Vue.use(VueRouter)**（使用插件的时候都需要使用Vue.use(xxx)因为内部会执行xxx.install方法来安装插件）
- 第二步：创建**路由实例**，并且传入**路由映射**配置
- 第三步：**在Vue实例中挂载创建的路由实例**（挂载的router对象传入到Vue.prototype中，然后又因为每个.vue文件中的组件都是继承自Vue.prototype【Vue类的原型】）

在src中有一个router文件夹下创建index.js文件

```
//配置路由相关的信息
import VueRouter from "vue-router";
//从安装的vue-router中导入VueRouter对象到index.js
import Vue from "vue";
//导入Vue对象，因为后面要用Vue安装插件

//1，通过Vue.use(插件),安装插件
Vue.use(VueRouter)

//2.创建VueRouter对象
const router=new VueRouter({
  //配置路由和组件之间的映射关系
  routes:[

  ]
})

//3.将router对象挂载传入到Vue实例中,所以需要导出router对象
export default router
```

然后将index.js文件中的router对象挂载到Vue实例中

```
import Vue from 'vue'
import App from './App'
import router from "./router";

Vue.config.productionTip = false

new Vue({
  el: '#app',
  router:router,
  render: h => h(App)
})
```

###### ③使用vue-router的步骤
```
- 第一步：创建路由组件
- 第二步：配置路由映射（组件和路径映射关系，可以用mode来选择history模式，其默认为hash模式
- 第三步：使用路由（通过<router-link>和<router-view>）
- <router-link>就是可以点击的超链接，通过to="/xxx"来设置点击之后修改网页地址后的内容，有点像a标签。（该标签是一个vue-router中已经内置的组件,它会被渲染成一个<a>标签）
- <router-view>就是将切换了网页路径之后，将要渲染的组件在什么位置显示。（该标签会根据当前的路径,动态渲染出不同的组件）

在router文件夹下的index.js中配置路由映射关系（默认的模式是hash模式，可以再实例中传入mode的选项）

```
//2.创建VueRouter对象，这里类似于创建Vue实例的操作
const router=new VueRouter({
    mode:'history',
  //配置路由和组件之间的映射关系
  routes:[
    {
      path:'' ,
      redirect:'/home'
      //重定向
    },
    {
      path:'/home',
      component:Home
    },
    {
      path:'/about',
      component:About
    }
  ]
})
```

在根组件中使用router-link和router-view标签进行使用路由

```vue
<div id="app">
  <router-link to="/home">首页</router-link>
  <!--router-link就是可以点击的超链接，通过to="/xxx"来设置点击之后修改网页地址后的内容，有点像a标签-->
  <!--此时的效果就是点击首页，页面由之前的"http://localhost:8080/#/"变成"http://localhost:8080/#/home"-->
  <router-link to="/about">关于</router-link>
  <router-view></router-view>
  <!--router-view就是将切换了网页路径之后，将要渲染的组件在什么位置显示-->
  <!--没有router-view改变了地址但是不会渲染出组件--> 
  <!-- 路由匹配到的组件将显示在这里 -->
</div>
```

##### 3】补充router-link标签的属性
###### ①to="/xxx"
点击之后需要到的路径
###### ②tag="button"
默认是a标签，tag可以指定router-link的内容之后渲染成什么样式，比如上面的代码会被渲染成一个button标签而不是默认的a标签。
###### ③replace（注：此属性不需要赋值）
replace不会留下history记录，所以指定replace的情况下，后退键返回到上一个页面中。
###### ④active-class="active"（也可以通过在VueRouter实例中加入一个选项linkActiveClass:'active'来统一设置）
当router-link标签对应的路由匹配成功时，就会自动给当前元素设置一个**router-link-active**的class，可以在router-link标签中使用active-class属性来修改默认的名称。

- 在进行高亮显示的导航菜单或者底部tabbar时，使用到该类。
- 但是通常不会修改类的属性，会直接使用默认的**router-link-active**即可
##### 4】通过代码使用$router插件中的全局变量来跳转路由
如果不想使用router-link标签的话可以用代码来实现路由：要展示相应组件内容还是要用router-view标签来实现。
$router的方法和h5中的history模式差不多：有push(),back(),go(),replace()等方法。
$router就是我们new VueRouter()对象，$route是指当前路由对象

```vue
<template>
  <div id="app">
    <router-view></router-view>
    <button @click="homeClick">首页</button>
    <button @click="aboutClick">关于</button>
  </div>
</template>

<script>
export default {
  name: 'App',
  methods:{
    homeClick(){
      this.$router.push('/home')
    },
    aboutClick(){
      this.$router.replace('/about')
    }
  }
}
</script>

<style>
.active{
  background-color: #1b6d85;
}
</style>
```

##### 5】vue-router动态路由的使用
在某些情况下，一个页面的path路径可能是不确定的，比如我们进入用户界面时，希望是如下的路径：

- /user/aaaa或/user/bbbb
- 除了有前面的/user之外，后面还更上了用户的ID
- 这种path和Component的匹配关系，我们称之为动态路由（也是路由传递数据的一种方式）。
###### ①在index.js中配置路由并导入组件

```
{
      path:'/user/:aaa',//注意这里要用冒号表示需要动态显示的变量名(这里的变量名可以不和下面router-link中的一样)
      component:User
    }
```

###### ②在router-link标签中的to属性进行修改（使用数据绑定和字符拼接）

```html
<router-link :to="'/user/'+userId" tag="button">用户</router-link>
<script>
data(){
    return{
      userId:'lisi'
    }
  }
</script>
```

###### ③如果需要在用户子组件中使用父组件中的数据，需要使用$route.params（特别注意这里能看作父传子或者父访问子，因为这里并没有在父组件中用子组件标签，只是路由跳转的关系）
**$router可以理解为整个路由（用来路由跳转），$route可以理解为当前的一个路由（用来访问数据）**

```vue
<template>
  <div>
    <h2>我是用户界面</h2>
    <p>我是用户的相关信息，嘿嘿嘿</p>
    <p>{{userId}}</p>
    <p>{{$route.params.aaa}}</p><!--也可以直接这样来表示-->
  </div>
</template>
<script>
    export default {
        name: "User",
        computed:{
          userId(){
            return this.$route.params.aaa//注意这里的aaa必须和路由配置①中的冒号后面的变量名相同
          }
        }
    }
</script>
```

##### 6】vue-router打包文件解析：路由的懒加载(用到时，再加载)（异步组件）

- 当打包构建应用时，JavaScript包会变得非常大，影响页面加载。
- 如果我们能**把不同路由对应的组件分割成不同的代码块**，然后当路由被访问的时候才加载对应组件，这样就更加高效了。

通过npm run build来打包的dist文件夹下除了有static中的文件外，还被分成了css文件夹和js文件夹。
js文件夹下又打包了三个js文件进行三层划分：
###### ①app.js
当前应用程序开发的所有代码（业务代码）
###### ②manifest.js
为了打包的代码做底层支持（模块化相关的）
###### ③ vendor.js
供应商第三方的代码：比如vue、vue-router、axios、bs之类的

```
//方式一:结合Vue的异步组件和Webpack的代码分析（不推荐）
const Home = resolve => {require.ensure(['../components/Home.vue'],()=>{resolve(require('../components/Home.vue'))})};
//方式二:AMD写法
const About = resolve => require(['../components/About.vue'],resolve);
//方式三:在ES6中，我们可以有更加简单的写法来组织Vue异步组件和Webpack的代码分割（推荐写法）
const Home = () => import('../components/Home.vue');
```

修改懒加载如下：

```
//配置路由相关的信息
import VueRouter from "vue-router";
//从安装的vue-router中导入VueRouter对象到index.js
import Vue from "vue";
//导入Vue对象，因为后面要用Vue安装插件
//import Home from "../components/Home.vue";
//import About from "../components/About.vue";
//import User from "../components/User";
//懒加载
const Home=()=>import('../components/Home')
const About=()=>import('../components/About')
const User=()=>import('../components/User')
//1，通过Vue.use(插件),安装插件
Vue.use(VueRouter)
//2.创建VueRouter对象
const router=new VueRouter({
  mode:'history',
  //配置路由和组件之间的映射关系(属性名必须是routes)
  routes:[
    {
      path:'' ,
      redirect:'/home'
      //重定向
    },
    {
      path:'/home',
      component:Home
    },
    {
      path:'/about',
      component:About
    },
    {
      path:'/user/:aaa',
      component:User
    }
  ]
})
//3.将router对象挂载传入到Vue实例中,所以需要导出router对象
export default router
```
## 三、vue-router嵌套路由

- 比如在home页面中，我们希望通过/home/news和/home/message访问一些内容。
- 一个路径映射一个组件，访问这两个路径也会分别渲染两个组件。
- 实现嵌套路由有两个步骤：创建对应的子组件，并且在路由映射中的父组件路由中配置对应的子路由children在父组件内部使用router-view标签和router-link标签

路径 组件
/home------------------> Home
/home/news----------> News
/home/message-----> Message
/about------------------> About
###### ①创建相应子组件
这是新创建的HomeNews组件和HomeMessage组件

```vue
<template>
<div>
  <ul>
    <li>新闻1</li>
    <li>新闻2</li>
    <li>新闻3</li>
    <li>新闻4</li>
  </ul>
</div>
</template>
<script>
    export default {
        name: "HomeNews"
    }
</script>
<style scoped>
</style>
```


```vue
<template>
<div>
  <ul>
    <li>消息1</li>
    <li>消息2</li>
    <li>消息3</li>
    <li>消息4</li>
  </ul>
</div>
</template>
<script>
    export default {
        name: "HomeMessage"
    }
</script>
<style scoped>
</style>
```

###### ②将相应子组件懒加载到路由配置文件中，然后在父组件home路由配置中用children属性配置
**（要非常注意children中的path属性值的前面不需要加/，否则会报错）**也可以在children属性中用redirect设置默认路径。
这是在index.js路由配置文件中的修改：

```
//配置路由相关的信息
import VueRouter from "vue-router";
//从安装的vue-router中导入VueRouter对象到index.js
import Vue from "vue";
//导入Vue对象，因为后面要用Vue安装插件
//import Home from "../components/Home.vue";
//import About from "../components/About.vue";
//import User from "../components/User";
//懒加载
const Home=()=>import('../components/Home')
const About=()=>import('../components/About')
const User=()=>import('../components/User')
const HomeNews=()=>import('../components/HomeNews')
const HomeMessage=()=>import('../components/HomeMessage')
//1，通过Vue.use(插件),安装插件
Vue.use(VueRouter)

//2.创建VueRouter对象
const router=new VueRouter({
  mode:'history',
  //配置路由和组件之间的映射关系(属性名必须是routes)
  routes:[
    {
      path:'' ,
      redirect:'/home'
      //重定向
    },
    {
      path:'/home',
      component:Home,
      children:[
        {
          path:'',
          redirect:'news'
        },
        {
          path:'news',//不需要加/
          component:HomeNews
        },
        {
         path: 'message',
         component:HomeMessage
        }
      ]
    },
    {
      path:'/about',
      component:About
    },
    {
      path:'/user/:aaa',
      component:User
    }
  ]
})
//3.将router对象挂载传入到Vue实例中,所以需要导出router对象
export default router
```

###### ③在父组件中使用router-link和router-view标签进行渲染
这是在Home组件中的修改：

```vue
<template>
  <div>
    <h2>我是首页</h2>
    <p>我是首页内容，哈哈哈</p>
    <router-link to="/home/news" tag="button">新闻</router-link>
    <router-link to="/home/message" tag="button">消息</router-link>
    <router-view></router-view>
  </div>
</template>
<script>
    export default {
        name: "Home"
    }
</script>
<style scoped>
</style>
```

## 四、vue-router参数传递
##### 1】传递参数的两种方式：params和query
URL:
**协议://主机:端口/路径?查询#片段**
**scheme://host:port/path?query#fragment**
###### ①params的类型：(修改路径的方式)

- 配置动态路由格式：/router/:id
- 传递的方式：router-link标签中的to绑定对应的动态值，在子组件中使用$route.params.id获取值
- 传递后形成的路径：/router/132，/router/abc
###### ②query的类型：（添加查询的方式）

- 配置路由的方式：/router，也就是普通配置
- 传递的方式：对象中使用query的key作为传递方式，在router-link标签中的to属性绑定一个对象里面有path和query等参数，query（查询）本来就是一个对象类型，向里面传入查询条件，最后在子组件中使用$route.query获取之前插入的查询条件。达到通信的目的
- 传递后形成的路径：/router?id=123，/router?id=abc

第一步：新建组件Profile.vue文件

```vue
<template>
    <div>
        <h2>我是profile组件</h2>
        <p>{{$route.query}}</p><!--通信获取查询条件-->
        <p>{{$route.query.name}}</p>
        <p>{{$route.query.id}}</p>
    </div>
</template>
<script>
    export default {
        name:'Profile'
    }
</script>
<style scoped>
</style>
```

第二步：在路由配置index.js中修改：

```
const Profile = () => import('../components/Profile.vue')//懒加载
...
{
      path:'/profile',//默认的方式
      component:Profile
    }
```

第三步：在父组件中router-link和router-view渲染出来：

```html
<router-link 
:to="{path:'/profile',query:{name:'123',id:'abc'}}" 
tag="button" 
replace 
active-class="active">档案</router-link>
<router-view></router-view>
<!--path-->
```

第四步：到第一步中的子组件中通过$route.query把查询条件取出来使用。
##### 2】通过代码使用$router来跳转路由和传数据
**$router就是我们new VueRouter()对象，$route是指当前路由对象**

```vue
<button @click="userClick">用户</button>
<button @click="profileClick">档案</button>
methods:{
    userClick(){
      this.$router.replace('/user/'+this.userId)
    },
    profileClick(){
      this.$router.replace({
        path:'/profile',
        query:{name:'aaa',id:'1111'}
      })
    }
  }
```

##### 3】$router和$route的由来
**$router是整个项目的路由，$route是指当前活跃的路由。**

- $router为VueRouter实例，想要导航到不同的URL，则使用$router.push等方法
- $route为当前router跳转对象里面可以获取name、path、query、params、meta等属性

```
import router from '../router'
 export default {
 methods:{
          Click(){
              //所有组件都继承自Vue类的原型
            console.log(this.$router)
            console.log(router)//打印的都是一样内容也就是new的VueRouter()对象
            console.log(this.$route)//当前页面的路由信息
          }
 }
 }
```

vue-router源码就是通过object.defineProperty()来设置$router和$route插件中的全局属性

```
//vue响应式原理：object.defineProperty(get() and set())
const obj = {
	name:'why'
}
object.defineProperty(obj,'age',18)
//第一个参数是目标类，第二个参数是属性名，第三个参数可以是set或者get方法来向第二个参数属性名进行操作
在
```


```
//在vue-router的源码中就只通过这样的方法来为Vue类的原型设置$router和$route全局属性
object.defineProperty(Vue.prototype,'$router',{
    get () { return this._routerRoot._router}
})
object.defineProperty(Vue.prototype,'$route',{
    get () { return this._routerRoot._route}
})
```

## 五、vue-router导航守卫
NavigationGuard类似于生命周期钩子函数
导航守卫中是：beforeEach、beforResolve、afterEach
源码typescript类型如下：

```typescript
export type NavigationGuard < V extends Vue = Vue > = (
  to: Route,
  from: Route,
  next: (to?: RawLocation | false | ((vm: V) => any) | void) => void
) => any
```

##### 1】全局导航守卫
###### ①前置守卫（在跳转之前进行回调）
**添加路由配置中每个页面的元数据(meta描述数据的数据)，通过to对象中的matched[0]数组来解决嵌套路由的问题。**
你可以使用 **router.beforeEach** 注册一个全局前置守卫：

```
const router=new VueRouter({
  mode:'history',
  //配置路由和组件之间的映射关系(属性名必须是routes)
  routes:[
    {
      path:'' ,
      redirect:'/home'
      //重定向
    },
    {
      path:'/home',
      component:Home,
      meta:{
        title:'首页'
      },
      children:[
        {
          path:'',
          redirect:'news'
        },
        {
          path:'news',//不需要加/
          component:HomeNews
        },
        {
         path: 'message',
         component:HomeMessage
        }
      ]
    },
    {
      path:'/about',
      component:About,
      meta:{
        title:'关于'
      }
    },
    {
      path:'/user/:aaa',
      component:User,
      meta:{
        title:'用户'
      }
    },
    {
      path:'/profile',
      component:Profile,
      meta:{
        title:'档案'
      }
    }
  ]
})

router.beforeEach((to, from, next) => {
  // ...
  //从from到to
  document.title=to.matched[0].meta.title
  next()//一定要调用该方法来 resolve 这个钩子
      //下一步起到循环执行的作用
  console.log(to)//可以找到matched[]里面有嵌套路由
})
```

当一个导航触发时，全局前置守卫按照创建顺序调用。守卫是异步解析执行，此时导航在所有守卫 resolve 完之前一直处于 等待中。**确保要调用 next 方法，否则钩子就不会被 resolved。**
每个守卫方法接收三个参数：

- **to: Route**: 即将要进入的目标路由对象
- **from: Route**: 当前导航正要离开的路由
- **next: Function**: 调用该方法后，才能进入下一个钩子
###### ②后置钩子（在跳转之后进行回调）
router.afterEach()

```typescript
afterEach(hook: (to: Route, from: Route) => any): Function//这个钩子函数只需要两个参数to and from
```

**如果是后置钩子，也就是afterEach，不需要主动调用next()函数**

```
router.afterEach((to,from)=>{
  console.log('----');
})//会发现beforeEach先打印，然后afterEach后打印
```

##### 2】路由独享守卫
你可以在路由配置上直接定义 beforeEnter 守卫：

```
const router = new VueRouter({
  routes: [
    {
      path: '/foo',
      component: Foo,
      beforeEnter: (to, from, next) => {
        // ...
       	next();
      }
    }
  ]
})
```

这些守卫与全局前置守卫的方法参数是一样的。
##### 3】组件内的守卫
最后，你可以在路由组件内直接定义以下路由导航守卫：

- beforeRouteEnter
- beforeRouteUpdate (2.2 新增)
- beforeRouteLeave

```
const Foo = {
  template: `...`,
  beforeRouteEnter (to, from, next) {
    // 在渲染该组件的对应路由被 confirm 前调用
    // 不！能！获取组件实例 `this`
    // 因为当守卫执行前，组件实例还没被创建
  },
  beforeRouteUpdate (to, from, next) {
    // 在当前路由改变，但是该组件被复用时调用
    // 举例来说，对于一个带有动态参数的路径 /foo/:id，在 /foo/1 和 /foo/2 之间跳转的时候，
    // 由于会渲染同样的 Foo 组件，因此组件实例会被复用。而这个钩子就会在这个情况下被调用。
    // 可以访问组件实例 `this`
  },
  beforeRouteLeave (to, from, next) {
    // 导航离开该组件的对应路由时调用
    // 可以访问组件实例 `this`
  }
}
```

beforeRouteEnter 守卫 **不能** 访问 this，因为守卫在导航确认前被调用,因此即将登场的新组件还没被创建。
不过，你可以通过传一个回调给 next来访问组件实例。在导航被确认的时候执行回调，并且把组件实例作为回调方法的参数。

```
beforeRouteEnter (to, from, next) {
  next(vm => {
    // 通过 `vm` 访问组件实例
  })
}
```

注意 beforeRouteEnter 是支持给 next 传递回调的唯一守卫。对于 beforeRouteUpdate 和 beforeRouteLeave 来说，this 已经可用了，所以**不支持**传递回调，因为没有必要了。

```
beforeRouteUpdate (to, from, next) {
  // just use `this`
  this.name = to.params.name
  next()
}
```

这个离开守卫通常用来禁止用户在还未保存修改前突然离开。该导航可以通过 next(false) 来取消。

```
beforeRouteLeave (to, from, next) {
  const answer = window.confirm('Do you really want to leave? you have unsaved changes!')
  if (answer) {
    next()
  } else {
    next(false)
  }
}
```

## 六、keep-alive (动态组件)
①**destroyed()钩子函数**与生命周期函数有关。组件中可以使用生命周期函数和keep-alive中的特有钩子函数activated()/deactivated()
②keep-alive -> activated()/deactivated()钩子函数
③首页中使用path属性记录离开时的路径，在beforRouteLeave中记录。
其中activated()处于活跃状态
deactivated()处于非活跃状态，此时已经是离开了页面，取得的this.$route.path是新的页面路径
beforeRouteLeave(to,from,next)导航离开该组件的对应路由时调用，也就是离开组件之前会调用，this.$route.path是离开之前的页面路径

```
//首先需要在根组件中的router-view组件外套用keep-alive组件
//再修改如下
export default {
        name: "Home",
        data(){
          return{
             path:'/home/news',
          }
        },
        activated(){
          this.$router.push(this.path);     
        },
        beforeRouteLeave(to,from,next){
          this.path=this.$route.path;
          next()
        }
    }
```

##### 1】keep-alive
keep-alive是Vue内置的一个组件，可以使被包含的组件保留状态，或避免重新渲染，也就是**keep-alive中的组件不会被频繁的创建和销毁**。

- 它有两个非常重要的属性：
- include - 字符串或正则表达式，只有匹配的组件会被缓存
- exclude - 字符串或正则表达式，任何匹配的组件都不会被缓存

```html
<keep-alive exclude="组件中和name属性的值相匹配"><router-view/></keep-alive>
```

##### 2】router-view
router-view也是一个组件，如果直接被包在keep-alive里面，所有路径匹配到我的视图组件都会被缓存：

```html
<keep-alive>
    <router-view>
        <!--所有路径匹配到的视图组件都会被缓存-->
    </router-view>
</keep-alive>
```

通过created和destroyed生命周期函数来验证。
