
## 带你用学会vue的方式 来学习JSX
### React几乎和Vue的用法一样，唯一的学习成本在于语法   前提是需要理解前端框架和组件化概念
### 起步
```javascript
npm install -g create-react-app
```
然后我们用它构建一个项目
```javascript
create-react-app react-demo
```
该删除的全部删除 留下一个index.js文件
```jsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './hooks/hooks';
// import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
     <App/>
);
```
然后！ 就可以开始操作了   再次创建你的新文件 
### 声明式渲染
Vue.js 的核心是一个允许采用简洁的模板语法来声明式地将数据渲染进 DOM 的系统，语法使用v-bind和双大括号：
```javascript
<div id="app">
  <span v-bind:title="message">
  {{ name }}
  </span>
</div>

var vm = new Vue({
  el: '#app',
  data: {
    name: 'Hello Vue!'
    message: '页面加载于 ' + new Date().toLocaleString()
  }
})
```
相同的效果  用React的语法来实现
```jsx
import React, { Component } from 'react'

class App extends Component {
    constructor() {
        super()
        // 将this.state看做你vue中的data
        this.state = {
            name: 'hello',
            title: '页面加载于 ' + new Date().toLocaleString()
        }
    }
    render() {
        return (
            <span title={this.state.title}>{this.state.name}</span> 
        )
    }
}
export default App
```

总结：
```css
1.React的绑定 使用的是单括号
2.React的绑定属性也直接使用 单括号 没有冒号没有引号
3.react的绑定的变量要使用 this.state.变量名 而不是直接this引用变量名
```
### 条件与循环
Vue中的条件判断 使用的是 v-if 和 v-show  遍历使用v-for 
```vue
<div id="app">
  <p v-if="isShow">现在你看到我了</p>
    <ul>
      <li v-for="data in datalist">
      {{ data.text }}
  		</li>
    </ul>
</div>

    var vm = new Vue({
      el: '#app',
      data: {
        isShow: true,
        todos: [
          { text: '学习 js' },
          { text: '学习 vue' },
          { text: '学习 react' }
        ]
      }
    })
```
在React中 它的思维是 如无需要 勿增实体 意思就是 原生JS可以实现的效果 它不会给你提供语法糖了
所以略显得麻烦一些
```jsx
import React, { Component } from 'react'

class App extends Component {
    constructor() {
        super()
        this.state = {
            isShow: true,
            todos: [
                { text: '学习 JavaScript' },
                { text: '学习 Vue' },
                { text: '整个牛项目' }
            ]
        }
    }
    handleChange(){
      this.setState({
        isShow : !this.state.isShow
      })
    }
    render() {
        return (
            <div>
               /* 三目运算符  */
              {this.state.isShow? <span>你看到我了<span/> : <span>又看不见我了<span/>}
             <button onClick={()=> this.handleChange()}>change<button/>   
				/* 使用map()进行dom遍历 */
                <ol>
                    {this.state.todos.map((item) => {
                        return (
                            <li>{item.text}</li>
                        )
                    })}
                </ol>
            </div>
        )
    }
}
export default App
```
总结：
```css
1.react中条件判断基本使用 js条件表达式的特性实现 (三目  if  switch)
1.react中循环一般使用 map方法去遍历return需要循环的dom结构
```
### 处理用户输入
 vue用 v-on 指令添加一个事件监听器，通过它调用在 Vue 实例中定义的方法： vue还提供了 v-model 指令，它能轻松实现表单输入和应用状态之间的双向绑定
```vue
<div id="app">
  <input v-model="message">
    <button @click="reverseMessage">反转消息</button>
      </div>

    var vm = new Vue({
      el: '#app',
      data: {
        message: 'Hello Vue.js!'
      },
      methods: {
        reverseMessage: function () {
          this.message = this.message.split('').reverse().join('')
        }
      }
    })
```
然后我们看一下相应的如何在react中绑定事件和表单元素：
```jsx
import React from 'react';
import { Component } from 'react';

class App extends Component {
  constructor() {
    super()
    this.state = {
      message: 'Hello React.js!'
    }
  }
  handleChange(event) {
    this.setState({
      message: this.state.message.split('').reverse().join('')
    })
  }
  render() {
    return <div>
      <input value={this.state.message} />
      <button onClick={() => this.handleChange()}>change</button>
    </div>
  }
}
export default App
```
知识点总结
```css
1.因为react使用的render函数 react所有特性几乎都是使用js的语法来实现，而不是指令型语法
2.像click等事件，还有标签属性如title，palceholder 都是直接使用大括号
3.react中绑定的变量 不会随js对变量的一系列操作修改而响应
4.任何绑定的变量要达到在页面渲染更新 需要使用react的this.setState({})
5.方法可以直接在Class中定义， 不同于vue的存在methods对象中
```
### 创建实例
创建Vue的实例
```vue
var vm = new Vue({
  el:"#box"
  data(){
    return{}
  }
})
```
React 实例
```jsx
import React, { Component } from 'react'

class App extends Component {
  // 内容
  render () {
  }
}
export default App
```
```less
1.react的一个组件 一个从react中继承Component的Class类为实例  (仅类写法)
2.一个react组件必须通过render ()返回JSX   且   只能返回一个JSX元素
3.vue和react的共同点是最外层必须有一个 单一的根元素标签 
4.vue为<template></template>  react为 <Fragment></Fragment> 或  <></>
```
### 数据与方法
```css
1.vue的数据使用了一个data函数返回一个对象来保存当前vue实例中的变量，vue实例中的自写方法都放置在methods中
2.react的数据都放置在state中，方法可以直接在class中定义
```
```jsx
// 另外 你可以直接在render中定义变量  
// render是一个函数 在函数当中定义变量当然是没问题的
render() {
    let name = "kerwin"
    return <div>
                {name}
          </div>
  }
//   kerwin 
```

### 生命周期
componentWillMount  componentDidMount componentWillUpdate 这样看是不是很难受？别着急
咱们来换个方式 ==> 

| **生命周期** | **Vue** | ** React** |
| --- | --- | --- |
| 实例创建前 | beforeCreate | --- |
| 实例创建后 | created | constructor(） |
| DOM挂载前 | beforeMount | componentWillMount |
| DOM挂载后 | mounted | componentDidMount |
| 数据更新时 | beforUpdate | componentWillUpdate |
| 数据更新后 | updated | componentDidUpdate |
| 实例销毁前 | beforeDestroy | componentWillUnmount |
| 实例销毁后 | destroyed | componentDidUnmount |

当然Class的生命周期不止这些 不过这也够用了  如果明白Vue生命周期 那么看懂React分分钟的事情
### 组件的复用
Vue和React组价复用方式都是一样的 换汤不换药 先引用 然后使用组件名标签
```vue
// Vue
<div id="components-demo">
  <nav-bar></nav-bar>
</div>

import NavBar from './modules/DuttonCounter'
export default {
  components: {
      NavBar
  },
}
```
Vue在引入标签时不能大写只能用 - 符号隔开
```jsx
// React
import NavBar from './modules/DuttonCounter'

function App() {
  return (
    <div className="App">
      <NavBar />
    </div>
  );
}
```
 React中引用标签直接使用export的class类名 组件必须要用大写字母开头

### 通过 Prop 向子组件传递数据
首先回顾一下Vue父传子
```vue
// 父组件
<super-man work="超人"></super-man>

// 子组件接收
<div>{{work}}</div>
export default {
  props: {
      work: {
        required: true,
        type: String
      }
   },
}
```
然后，通过一个例子看一下React的props：
```jsx
import React from 'react';
import { Component } from 'react';
import SuperMan from './superman';
class App extends Component {
  constructor() {
    super()
    this.state = {
      
    }
  }
 
  render() {
    return (
      <div>
        <SuperMan work='超人'></SuperMan>
        <Center text='hi props'></Center>
      </div>
    )
  }
}

class Center extends Component {
  render(){
    return <div>{this.props.text}</div>
  }
}

export default App
```
```jsx
import React, { Component } from 'react'

export default class superman extends Component {
  render() {
    return (
      <div>{this.props.work}</div>
    )
  }
}
```
在react中，接收父组件的传值同样使用关键字props，与vue不同的区别在于：
```css
1.vue的所有传值需要放置在子组件的props的对象中才可以被当前子组件使用，使用方式如同访问data的变量 直接this.变量使用
2.react是使用this.props.变量这种方式就可以直接使用所有父组件传递的变量。
3.react中向子组件传递对象参数，可以使用{{}}双括号直接传递对象
```
```jsx
class Index extends Component {
  render () {
    return (
      <div>
        <SuperMan obj={{name: 'kerwin',position : '前端攻城狮'}} />
      </div>
    )
  }
}



import React, { Component } from 'react'

export default class superman extends Component {
  render() {
    return (
      <div>{this.props.obj.name}--{this.props.obj.position}
      </div>
    )
  }
}

// 也是通过this.props.obj.key 来访问value    输出  kerwin -- 前端攻城狮
``` 


