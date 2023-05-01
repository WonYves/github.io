## 一、使用vue-cli创建模板项目
###### [#](https://rayhomie.gitee.io/rayhomieblog/VUE/vueComponent/#_1%E3%80%91vue-cli%E6%98%AFvue%E5%AE%98%E6%96%B9%E6%8F%90%E4%BE%9B%E7%9A%84%E8%84%9A%E6%89%8B%E6%9E%B6%E5%B7%A5%E5%85%B7%EF%BC%88%E4%B8%80%E4%B8%AA%E5%BA%93%EF%BC%89)1】vue-cli是vue官方提供的脚手架工具（一个库）
http://www.github.com/vuejs/vue-cli
###### [#](https://rayhomie.gitee.io/rayhomieblog/VUE/vueComponent/#_2%E3%80%91%E5%88%9B%E5%BB%BAvue%E9%A1%B9%E7%9B%AE)2】创建vue项目
npm install -g vue-cli(注：只需要安装一次脚手架)
vue init webpack vuedemo（注：webpack是模板，提供了6个可选模板项目）
（会提示几个问题，第一个问题name必须小写，暂时不需要安装vue-router，两个单元测试的包也不需要）
cd vuedemo
npm install
npm run dev
访问：http://localhost:8080/
## [#](https://rayhomie.gitee.io/rayhomieblog/VUE/vueComponent/#%E4%BA%8C%E3%80%81%E5%9F%BA%E4%BA%8E%E8%84%9A%E6%89%8B%E6%9E%B6%E7%BC%96%E5%86%99%E9%A1%B9%E7%9B%AE)二、基于脚手架编写项目
###### [#](https://rayhomie.gitee.io/rayhomieblog/VUE/vueComponent/#_1%E3%80%91%E7%BB%84%E4%BB%B6%E4%B9%8B-vue%E6%A0%BC%E5%BC%8F%E6%96%87%E4%BB%B6)1】组件之.vue格式文件

```vue
//文件名格式为App.vue
<template></template>//写html
<script></script>//写js
<style></style>//写css
```

###### [#](https://rayhomie.gitee.io/rayhomieblog/VUE/vueComponent/#_2%E3%80%91%E5%9F%BA%E6%9C%AC%E6%AD%A5%E9%AA%A4)2】基本步骤
①在src文件夹新建一个根组件，名为：App.vue

```vue
<!--根组件-->
<template>
<div>
  <img class="logo" src="./assets/logo.png" alt="logo">
  <!--3.使用组件标签-->
  <HelloWorld></HelloWorld>

</div>
</template>

<script>
  //1.引入组件
  import HelloWorld from "./components/HelloWorld";
export  default {
  //2.映射组件标签
  comments:{
    HelloWorld
  }

}
</script>

<style>
.logo{
  width: 200px;
  height: 200px;
}
</style>
```

②在src文件夹下新建components文件夹，然后再该文件夹下新建一个子组件，名为：HelloWorld.vue

```vue
<!--子组件-->
<template>
    <div>
      <p class="msg">{{msg}}</p>
    </div>
</template>

<script>
    export default {//配置对象（与Vue一致）
      data(){//data必须是一个函数，否则在用相同的组件时，组件之间会公用一个数据集
          //用函数的话，用一次组件时就会生成一个实例，然后data()返回的数据，占用的内存地址是不一样的
        return {msg:'helloworld'}

      }

    }
</script>

<style>
.msg{
  color: red;
  font-size: 30px;
}
</style>
```

③在src文件夹中还需要新建一个main.js文件

```
/*
    入口JS：创建Vue实例
    */

import Vue from 'vue'
import App from "./App"
new Vue({
  el:'#app',  //是根据index.html里面的div的id值
  components:{
    App
  },
  template:'<App/>'  //模板：vue生命周期中有定义
    
})
```

## [#](https://rayhomie.gitee.io/rayhomieblog/VUE/vueComponent/#%E4%B8%89%E3%80%81%E9%A1%B9%E7%9B%AE%E7%9A%84%E6%89%93%E5%8C%85%E4%B8%8E%E5%8F%91%E5%B8%83)三、项目的打包与发布
###### [#](https://rayhomie.gitee.io/rayhomieblog/VUE/vueComponent/#_1%E3%80%91%E6%89%93%E5%8C%85%EF%BC%9A)1】打包：
npm run build
###### [#](https://rayhomie.gitee.io/rayhomieblog/VUE/vueComponent/#_2%E3%80%91%E5%8F%91%E5%B8%831%EF%BC%9A%E4%BD%BF%E7%94%A8%E9%9D%99%E6%80%81%E6%9C%8D%E5%8A%A1%E5%99%A8%E5%B7%A5%E5%85%B7%E5%8C%85)2】发布1：使用静态服务器工具包
npm install -g serve
serve dist (会生产一个新文件夹dist)
访问：http://localhost:5000
###### [#](https://rayhomie.gitee.io/rayhomieblog/VUE/vueComponent/#_3%E3%80%91%E5%8F%91%E5%B8%832%EF%BC%9A%E4%BD%BF%E7%94%A8%E5%8A%A8%E6%80%81web%E6%9C%8D%E5%8A%A1%E5%99%A8-tomcat)3】发布2：使用动态web服务器(tomcat)
①修改配置：webpack.prod.conf.js
output:{
publicPath:'/xxx/' //打包文件夹名称，要发布的项目名称
}
//如果又要使用静态服务器发布记得需要还原这步，重新打包
②重新打包：
npm run build
③修改dist文件夹为项目名称：xxx
④将xxx拷贝到运行的Tomcat的webapps目录下
⑤访问：http://localhost:8080/xxx
## [#](https://rayhomie.gitee.io/rayhomieblog/VUE/vueComponent/#%E5%9B%9B%E3%80%81eslint%E7%BC%96%E7%A0%81%E8%A7%84%E8%8C%83%E6%A3%80%E6%9F%A5)四、ESLint编码规范检查
1】ESLint是一个代码规范检查工具
2】它定义了很多特定的规则，一旦你的代码违背了某一规则，ESLint会作出非常有用的提示
3】官网：http://eslint.org/
4】基本已替代以前的JSLint
## [#](https://rayhomie.gitee.io/rayhomieblog/VUE/vueComponent/#%E4%BA%94%E3%80%81%E6%B3%A8%E5%86%8C%E7%BB%84%E4%BB%B6%E7%9A%84%E5%9F%BA%E6%9C%AC%E6%AD%A5%E9%AA%A4-vue2-x%E4%BB%A5%E5%89%8D)五、注册组件的基本步骤(Vue2.x以前)
###### [#](https://rayhomie.gitee.io/rayhomieblog/VUE/vueComponent/#%E2%91%A0%E5%88%9B%E5%BB%BA%E7%BB%84%E4%BB%B6%E6%9E%84%E9%80%A0%E5%99%A8%EF%BC%88%E8%B0%83%E7%94%A8vue-extend-%E6%96%B9%E6%B3%95%E5%88%9B%E5%BB%BA%E7%BB%84%E4%BB%B6%E6%9E%84%E9%80%A0%E5%99%A8%EF%BC%89)①创建组件构造器（调用Vue.extend()方法创建组件构造器）
含义：
1.调用Vue.extend()创建的是一个组件构造器
2.通常在创建组件构造器时，传入template代表我们自定义组件的模板
3.该模板就是在使用到组件的地方，要显示的HTML代码
4.也可以在这里面用components:{标签名：构造器名}注册子组件

```html
<script>
//1.创建组件构造器
    const myComponent=Vue.extend({
        template:`
			<div>
				<h2>组件标题</h2>
			</div>`
    });
</script>
```

###### [#](https://rayhomie.gitee.io/rayhomieblog/VUE/vueComponent/#%E2%91%A1%E6%B3%A8%E5%86%8C%E7%BB%84%E4%BB%B6%EF%BC%88%E8%B0%83%E7%94%A8vue-component-%E6%96%B9%E6%B3%95%E6%B3%A8%E5%86%8C%E5%85%A8%E5%B1%80%E7%BB%84%E4%BB%B6%EF%BC%89)②注册组件（调用Vue.component()方法注册全局组件）
含义：
1.调用Vue.component()是将刚才的组件构造器注册为一个组件，并且给它起一个组件的标签名称
2.所以需要传递两个参数：①注册组件的标签名②组件构造器

```html
<script>
//2.注册组件，并且定义组件标签的名称
    Vue.component('my-cpn',myComponent)
</script>
```

###### [#](https://rayhomie.gitee.io/rayhomieblog/VUE/vueComponent/#%E2%91%A2%E4%BD%BF%E7%94%A8%E7%BB%84%E4%BB%B6%EF%BC%88%E5%9C%A8vue%E5%AE%9E%E4%BE%8B%E7%9A%84%E4%BD%9C%E7%94%A8%E8%8C%83%E5%9B%B4%E5%86%85%E4%BD%BF%E7%94%A8%E7%BB%84%E4%BB%B6%EF%BC%89)③使用组件（在Vue实例的作用范围内使用组件）
组件必须挂载在某个Vue实例下，否则它不会生效

```html
<div>
    <!--3.使用组件-->
    <my-cpn></my-cpn>
</div>
```

![image.png](https://cdn.nlark.com/yuque/0/2023/png/32841606/1682926067784-3dbb6f74-a5ec-4385-a852-dbec93d992d9.png#averageHue=%23ead3ca&clientId=u7966cded-d40a-4&from=paste&id=ue33a3fba&originHeight=653&originWidth=459&originalType=url&ratio=1.25&rotation=0&showTitle=false&size=151026&status=done&style=none&taskId=u815f273f-d9a7-485d-b9a2-314984b680e&title=)
## [#](https://rayhomie.gitee.io/rayhomieblog/VUE/vueComponent/#%E5%85%AD%E3%80%81vue2-0%E4%BB%A5%E5%90%8E%E6%8E%A8%E8%8D%90%E4%BD%BF%E7%94%A8%E6%B3%A8%E5%86%8C%E7%BB%84%E4%BB%B6%E8%AF%AD%E6%B3%95%E7%B3%96)六、Vue2.0以后推荐使用注册组件语法糖
###### [#](https://rayhomie.gitee.io/rayhomieblog/VUE/vueComponent/#_1%E3%80%91vue%E4%B8%BA%E4%BA%86%E7%AE%80%E5%8C%96%E8%BF%87%E7%A8%8B%EF%BC%8C%E6%8F%90%E4%BE%9B%E4%BA%86%E6%B3%A8%E5%86%8C%E7%9A%84%E8%AF%AD%E6%B3%95%E7%B3%96%EF%BC%8C%E4%B8%BB%E8%A6%81%E6%98%AF%E7%9C%81%E5%8E%BB%E4%BA%86%E8%B0%83%E7%94%A8vue-extend-%E7%9A%84%E6%AD%A5%E9%AA%A4%EF%BC%8C%E8%80%8C%E6%98%AF%E5%8F%AF%E4%BB%A5%E7%9B%B4%E6%8E%A5%E4%BD%BF%E7%94%A8%E4%B8%80%E4%B8%AA%E5%AF%B9%E8%B1%A1%E6%9D%A5%E4%BB%A3%E6%9B%BF%E3%80%82)1】Vue为了简化过程，提供了注册的语法糖，主要是省去了调用Vue.extend()的步骤，而是可以直接使用一个对象来代替。
###### [#](https://rayhomie.gitee.io/rayhomieblog/VUE/vueComponent/#_2%E3%80%91%E4%B8%8D%E5%86%8D%E9%9C%80%E8%A6%81%E5%86%99vue-extend-%E7%BB%84%E4%BB%B6%E6%9E%84%E9%80%A0%E5%99%A8%EF%BC%8Cvue%E4%BC%98%E5%8C%96%E4%BA%86%E3%80%82%E5%8F%AA%E9%9C%80%E8%A6%81%E6%8A%8Avue-component-template-%E6%9D%A5%E4%BD%BF%E7%94%A8%E3%80%82)2】不再需要写Vue.extend()组件构造器，Vue优化了。只需要把Vue.component('',{template:....})来使用。

```html
<script>
    //全局组件注册语法糖
Vue.component('cpn1',{
    template:`
	<div>
		<h2>hhhh</h2>
    </div>`
})
    //局部组件注册语法糖
    new Vue({
        el:'#demo',
        data:{
            message:'你好啊'
        },
        components:{
            	'cpn2':{template:`
					<div>
						<h2>hhhh</h2>
    				</div>`
            			}
        			}
    		})
</script>
```

## [#](https://rayhomie.gitee.io/rayhomieblog/VUE/vueComponent/#%E4%B8%83%E3%80%81%E7%BB%84%E4%BB%B6%E6%A8%A1%E6%9D%BF%E6%8A%BD%E7%A6%BB%E7%9A%84%E5%86%99%E6%B3%95)七、组件模板抽离的写法
###### [#](https://rayhomie.gitee.io/rayhomieblog/VUE/vueComponent/#_1%E3%80%91script%E6%A0%87%E7%AD%BE%EF%BC%8C%E6%B3%A8%E6%84%8F%EF%BC%9A%E7%B1%BB%E5%9E%8B%E5%BF%85%E9%A1%BB%E6%98%AFtext-x-template)1】script标签，注意：类型必须是text/x-template

```html
<script type="text/x-template" id="cpn">
<div>
	<h2>hhhh</h2>
</div>
</script>
```

###### [#](https://rayhomie.gitee.io/rayhomieblog/VUE/vueComponent/#_2%E3%80%91template%E6%A0%87%E7%AD%BE)2】template标签

```html
<template id="cpn">
<div>
	<h2>hhhh</h2>
</div>
</template>
```

## [#](https://rayhomie.gitee.io/rayhomieblog/VUE/vueComponent/#%E5%85%AB%E3%80%81%E7%BB%84%E4%BB%B6%E4%B8%8D%E5%8F%AF%E4%BB%A5%E8%AE%BF%E9%97%AEvue%E5%AE%9E%E4%BE%8B%E6%95%B0%E6%8D%AE)八、组件不可以访问Vue实例数据
![image.png](https://cdn.nlark.com/yuque/0/2023/png/32841606/1682926067661-41103c8d-0188-419a-ba8f-6c3dbeae5321.png#averageHue=%23e2e2e2&clientId=u7966cded-d40a-4&from=paste&id=u54950064&originHeight=380&originWidth=451&originalType=url&ratio=1.25&rotation=0&showTitle=false&size=43584&status=done&style=none&taskId=u2aab3d69-0d23-4772-b861-1b80d24e3fc&title=)
###### [#](https://rayhomie.gitee.io/rayhomieblog/VUE/vueComponent/#_1%E3%80%91%E7%BB%84%E4%BB%B6%E6%98%AF%E4%B8%80%E4%B8%AA%E5%8D%95%E7%8B%AC%E5%8A%9F%E8%83%BD%E6%A8%A1%E5%9D%97%E7%9A%84%E5%B0%81%E8%A3%85%EF%BC%9A)1】组件是一个单独功能模块的封装：
这个模块有属于自己的HTML模板，也应该有属于自己的数据data。
###### [#](https://rayhomie.gitee.io/rayhomieblog/VUE/vueComponent/#_2%E3%80%91%E7%BB%84%E4%BB%B6%E4%B8%8D%E8%83%BD%E7%9B%B4%E6%8E%A5%E8%AE%BF%E9%97%AEvue%E5%AE%9E%E4%BE%8B%E4%B8%AD%E7%9A%84data)2】组件不能直接访问Vue实例中的data
组件可以存放自己的数据，但只能用data(){return{}}
①组件对象也有一个data属性
②只是这个data属性必须是一个函数
③而且这个函数返回一个对象，对象内部保存着数据
## [#](https://rayhomie.gitee.io/rayhomieblog/VUE/vueComponent/#%E4%B9%9D%E3%80%81%E7%88%B6%E5%AD%90%E7%BB%84%E4%BB%B6%E9%80%9A%E4%BF%A1-%E7%88%B6%E4%BC%A0%E5%AD%90props-properties%E5%B1%9E%E6%80%A7)九、父子组件通信---父传子props(properties属性)
###### [#](https://rayhomie.gitee.io/rayhomieblog/VUE/vueComponent/#_1%E3%80%91props%E7%9A%84%E5%80%BC%E6%9C%89%E4%B8%A4%E7%A7%8D%E6%96%B9%E5%BC%8F%EF%BC%9A)1】props的值有两种方式：
①方式一：字符串数组，数组中的字符串就是传递时的名称。
②方式二：对象，对象可以设置传递时的类型，也可以设置默认值等。
###### [#](https://rayhomie.gitee.io/rayhomieblog/VUE/vueComponent/#_2%E3%80%91props%E6%95%B0%E6%8D%AE%E9%AA%8C%E8%AF%81%EF%BC%8C%E6%9C%89%E5%BE%88%E5%A4%9A%E7%A7%8D%E5%86%99%E6%B3%95%EF%BC%88%E4%BA%86%E8%A7%A3%EF%BC%89)2】props数据验证，有很多种写法（了解）

```html
<!DOCTYPE html>
<html>
	<head>
		<meta charset="UTF-8">
		<title></title>
	</head>
	<body>
		<div id="app">
			<cpn :cmovie="movie" :cmessage="message"></cpn>
		</div>
		<template id="cpn"> 
		<div >
			<ul>
				<li v-for="item in cmovie" :key="index">{{item}}</li>
			</ul>
			<p>{{cmovie}}</p>
			<h2>{{cmessage}}</h2>
		</div>
		</template>
		<script type="text/javascript" src="js/vue.js"></script>
		<script type="text/javascript">
			const cpn={
				template:'#cpn',
			//	props:['cmovie','cmessage']
			 props:{
				//1.类型限制
					cmovie:Array,
					cmessage:String
				//2.提供一些默认值，提供一些默认值,限制在标签中必须给变量传值
				/*	cmessage:{
						type:String,
						default:'aaaa',
						required:true
					},
					//当类型是对象或者数组时，默认值必须是一个函数返回一个对象(或数组)
					cmovie:{
						type:Array,
						default(){
							return []
						}
					}
				*/
				}
			}
			const app=new Vue({
				el:'#app',
				data:{
					message:'你好啊',
					movie:['海王 ','海贼王']
				},
				components:{
					'cpn':cpn
				}
			})
		</script>
	</body>
</html>
```

###### [#](https://rayhomie.gitee.io/rayhomieblog/VUE/vueComponent/#_3%E3%80%91%E7%88%B6%E4%BC%A0%E5%AD%90%EF%BC%8Cprops%E4%B8%AD%E7%9A%84%E9%A9%BC%E5%B3%B0%E6%A0%87%E8%AF%86)3】父传子，props中的驼峰标识
①现版本已经支持驼峰
②在template标签中，必须要用div标签包裹其他元素
## [#](https://rayhomie.gitee.io/rayhomieblog/VUE/vueComponent/#%E5%8D%81%E3%80%81%E7%88%B6%E5%AD%90%E7%BB%84%E4%BB%B6%E9%80%9A%E4%BF%A1-%E5%AD%90%E4%BC%A0%E7%88%B6-%E8%87%AA%E5%AE%9A%E4%B9%89%E4%BA%8B%E4%BB%B6)十、父子组件通信---子传父(自定义事件)
###### [#](https://rayhomie.gitee.io/rayhomieblog/VUE/vueComponent/#_1%E3%80%91%E5%BD%93%E5%AD%90%E7%BB%84%E4%BB%B6%E9%9C%80%E8%A6%81%E5%90%91%E7%88%B6%E7%BB%84%E4%BB%B6%E4%BC%A0%E9%80%92%E6%95%B0%E6%8D%AE%E6%97%B6%EF%BC%8C%E5%B0%B1%E9%9C%80%E8%A6%81%E7%94%A8%E5%88%B0%E8%87%AA%E5%AE%9A%E4%B9%89%E4%BA%8B%E4%BB%B6%E4%BA%86%E3%80%82)1】当子组件需要向父组件传递数据时，就需要用到自定义事件了。
###### [#](https://rayhomie.gitee.io/rayhomieblog/VUE/vueComponent/#_2%E3%80%91%E6%88%91%E4%BB%AC%E4%B9%8B%E5%89%8D%E5%AD%A6%E7%9A%84v-on-%E4%B8%8D%E4%BB%85%E4%BB%85%E5%8F%AF%E4%BB%A5%E7%94%A8%E4%BA%8E%E7%9B%91%E5%90%ACdom%E4%BA%8B%E4%BB%B6%EF%BC%8C%E4%B9%9F%E5%8F%AF%E4%BB%A5%E7%94%A8%E4%BA%8E%E7%BB%84%E4%BB%B6%E9%97%B4%E7%9A%84%E8%87%AA%E5%AE%9A%E4%B9%89%E4%BA%8B%E4%BB%B6%E3%80%82)2】我们之前学的v-on:(@)不仅仅可以用于监听DOM事件，也可以用于组件间的自定义事件。
###### [#](https://rayhomie.gitee.io/rayhomieblog/VUE/vueComponent/#_3%E3%80%91%E8%87%AA%E5%AE%9A%E4%B9%89%E4%BA%8B%E4%BB%B6%E7%9A%84%E6%B5%81%E7%A8%8B%EF%BC%9A)3】自定义事件的流程：
①在子组件中，通过$emit(eventName,[args1,arg2..])来触发事件。(触发当前实例上的事件。附加参数都会传给监听器回调。)
②在父组件中，通过v-on来监听子组件事件。
###### [#](https://rayhomie.gitee.io/rayhomieblog/VUE/vueComponent/#_4%E3%80%91%E6%88%91%E4%BB%AC%E6%9D%A5%E7%9C%8B%E4%B8%80%E4%B8%AA%E4%BE%8B%E5%AD%90%EF%BC%9A)4】我们来看一个例子：
①我们之前做过一个两个按钮+1和-1，点击后修改counter。
②我们整个操作的过程还是在子组件中完成，但是之后的展示交给父组件。
③这样，我们就需要将子组件中的counter，传给父组件的某个属性，比如total。

```html
<div id="app">
			<cpn @addclick="add" @incclick="inc"></cpn>
		</div>
		<template id="cpn">
			<div>
				<button @click="addclick">+</button>
				<button @click="incclick">-</button>
			</div>
		</template>
		<script type="text/javascript" src="img/vue.js"></script>
		<script type="text/javascript">
			const cpn={
				template:`#cpn`,
				data(){
					return{
						num:0
					}
				},
				methods:{
					addclick(){
						this.$emit('addclick',this.num++)
					},
					incclick(){
						this.$emit('incclick',this.num--)
					}
				}
			}
			const app=new Vue({
				el:'#app',
				data:{
				
				},
				components:{
					cpn
				},
				methods:{
					add(num){
						console.log(num)
					},
					inc(num){
						console.log(num)
					}
				}
			})
		</script>
```

## [#](https://rayhomie.gitee.io/rayhomieblog/VUE/vueComponent/#%E5%8D%81%E4%B8%80%E3%80%81%E7%88%B6%E8%AE%BF%E9%97%AE%E5%AD%90-children-refs-refs%E5%BE%88%E9%87%8D%E8%A6%81)十一、父访问子-children-refs($refs很重要)
1】有时候我们需要父组件直接访问子组件，子组件直接访问父组件，或者是子组件访问根组件
###### [#](https://rayhomie.gitee.io/rayhomieblog/VUE/vueComponent/#%E2%91%A0%E7%88%B6%E7%BB%84%E4%BB%B6%E8%AE%BF%E9%97%AE%E5%AD%90%E7%BB%84%E4%BB%B6%EF%BC%9A%E4%BD%BF%E7%94%A8-children%E6%88%96-refs)①父组件访问子组件：使用$children或$refs
$children 把所有子组件存在数组中，通过数组下标进行取用不同的子组件(this.$children[x].子组件内容)
$refs 默认是空对象，通过在子组件标签里面加属性ref="xxx"，(this.$refs.xxx.子组件内容)，来取用不同的子组件

```html
<div id="app">
			<cpn></cpn>
			<cpn></cpn>
			<cpn ref="aaa"></cpn>
			<button @click="btnClick">按钮</button>
		</div>
		<template id="cpn">
			<div>我是子组件</div>
		</template>
		<script type="text/javascript" src="js/vue.js"></script>
		<script type="text/javascript">
			const app=new Vue({
				el:'#app',
				data:{
					message:'nihaoa'
				},
				methods:{
					btnClick(){
						//	1.$children
						//	console.log(this.$children)//把每个子组件放在数组里面
						//	for (let c of this.$children){
						//	console.log(c.name)
						//	c.showMessage();
						//	}
						//	console.log(this.$children[2].name)
						
						//	2.$refs	=> 对象类型,默认是空对象，在标签加ref="aaa"
						console.log(this.$refs.aaa.name)
					}
				},
				components:{
					cpn:{
						template:'#cpn',
						data(){
							return{
							name:'我是子组件的name'	
							}
						},
						methods:{
							showMessage(){
								console.log('showMessage')
							}
						}
					}
				}
			})
		</script>
```

###### [#](https://rayhomie.gitee.io/rayhomieblog/VUE/vueComponent/#%E2%91%A1%E5%AD%90%E7%BB%84%E4%BB%B6%E8%AE%BF%E9%97%AE%E7%88%B6%E7%BB%84%E4%BB%B6%E6%88%96%E8%80%85%E6%A0%B9%E7%BB%84%E4%BB%B6%EF%BC%9A%E4%BD%BF%E7%94%A8-parent%E6%88%96-root)②子组件访问父组件或者根组件：使用$parent或$root
$parent 取父组件的方法或者数据(用的很很少) this.$root.xxx
$root 取根组件的方法或者数据(用的很少) this.$parent.xxx

```html
<div id="app">
			<cpn></cpn>
	</div>
		<template id="ccpn">
			<div>
				<h2>我是子组件</h2>
				<button @click="btnClick">按钮</button>
			</div>
		</template>
		<template id="cpn">
			<div>
				<h2>我是cpn组件</h2>
				<ccpn></ccpn>
			</div>
		</template>
		<script type="text/javascript" src="js/vue.js"></script>
		<script type="text/javascript">
			const app=new Vue({
	el:'#app',
	data:{
		message:"你好啊"
			},
	components:{
				cpn:{
					template:'#cpn',
					data(){
						return{
							name:'我是cpn组件的name'
							}
							},
					components:{
								ccpn:{
								template:'#ccpn',
								methods:{
									btnClick(){
									//1.访问父组件$parent(用的很少)
									console.log(this.$parent)
									console.log(this.$parent.name)
									//2.访问根组件$root,直接访问Vue实例
									console.log(this.$root)
									console.log(this.$root.message)
												}
										}
									}
								}
						}
					}
			})
		</script>
```

## [#](https://rayhomie.gitee.io/rayhomieblog/VUE/vueComponent/#%E5%8D%81%E4%BA%8C%E3%80%81%E6%8F%92%E6%A7%BDslot)十二、插槽slot
##### [#](https://rayhomie.gitee.io/rayhomieblog/VUE/vueComponent/#_1%E3%80%91%E7%BB%84%E4%BB%B6%E7%9A%84%E6%8F%92%E6%A7%BD%EF%BC%9A)1】组件的插槽：
①组件的插槽也是为了让我们封装的组件更加具有扩展性。
②让使用着可以决定组件内部的一些内容到底展示什么。
③预备插槽，以备不时之需
##### [#](https://rayhomie.gitee.io/rayhomieblog/VUE/vueComponent/#_2%E3%80%91%E6%8F%92%E6%A7%BD%E7%9A%84%E5%9F%BA%E6%9C%AC%E4%BD%BF%E7%94%A8%EF%BC%9A)2】插槽的基本使用：
###### [#](https://rayhomie.gitee.io/rayhomieblog/VUE/vueComponent/#_1%E3%80%81%E5%9C%A8%E7%BB%84%E4%BB%B6%E9%87%8C%E9%9D%A2%E5%AE%9A%E4%B9%89)1、在组件里面定义

```html
<slot></slot>
```

###### [#](https://rayhomie.gitee.io/rayhomieblog/VUE/vueComponent/#_2%E3%80%81%E6%8F%92%E6%A7%BD%E7%9A%84%E9%BB%98%E8%AE%A4%E5%80%BC)2、插槽的默认值

```html
<slot><button></button></slot>
```

###### [#](https://rayhomie.gitee.io/rayhomieblog/VUE/vueComponent/#_3%E3%80%81%E5%A6%82%E6%9E%9C%E6%9C%89%E5%A4%9A%E4%B8%AA%E5%80%BC%EF%BC%8C%E5%90%8C%E6%97%B6%E6%94%BE%E5%85%A5%E5%88%B0%E7%BB%84%E4%BB%B6%E8%BF%9B%E8%A1%8C%E6%9B%BF%E6%8D%A2%E6%97%B6%EF%BC%8C%E4%B8%80%E8%B5%B7%E4%BD%9C%E4%B8%BA%E6%9B%BF%E6%8D%A2%E5%85%83%E7%B4%A0)3、如果有多个值，同时放入到组件进行替换时，一起作为替换元素

```html
<div id="app">
			<cpn></cpn><!--按钮-->
			<cpn><span>哈哈哈</span></cpn><!--span标签-->
			<cpn><i>呵呵呵</i></cpn><!--i标签-->
			<cpn></cpn><!--按钮-->
			<cpn><!--多种元素一起替换-->
				<h1>嘿嘿嘿</h1>
				<div>嘿嘿嘿</div>
				<p>嘿嘿嘿</p>
			</cpn>
		</div>
		<template id="cpn">
			<div>
				<h2>我是组件</h2>
				<p>我是组件，哈哈哈</p>
				<slot><button>按钮</button></slot>
			</div>
		</template>
		<script type="text/javascript" src="js/vue.js"></script>
		<script type="text/javascript">
			const app=new Vue({
				el:'#app',
				data:{
					message:'你好啊'
				},
				components:{
					cpn:{
						template:'#cpn'
					}
				}
			})
		</script>
```

## [#](https://rayhomie.gitee.io/rayhomieblog/VUE/vueComponent/#%E5%8D%81%E4%B8%89%E3%80%81%E5%85%B7%E5%90%8D%E6%8F%92%E6%A7%BDslot)十三、具名插槽slot
1】当子组件的功能复杂时，子组件的插槽可能并非是一个。
①比如我们封装一个导航栏的子组件，可能就需要三个插槽，分别代表右边、中间、右边。
②那么，外面在给插槽插入内容时，如何区分插入的是哪一个呢？
③这时候，我们就需要给插槽起一个名字
2】如何使用具名插槽呢？
①非常简单，只要给slot元素一个name属性即可
②
3】我们给出了一个案例：

```html
<div id="app">
	<cpn><span>替换hhh</span></cpn>
	<cpn><span slot="center">标题</span></cpn>
	<cpn><button slot="left">返回</button></cpn>
</div>
<template id="cpn">
	<div>
		<slot name="left"><span>左边</span></slot>
		<slot name="center"><span>中间</span></slot>
		<slot name="right"><span>右边</span></slot>
		<slot>hhh</slot>
	</div>
</template>
<script type="text/javascript" src="js/vue.js"></script>
<script type="text/javascript">
		const app=new Vue({
			el:'#app',
			data:{
				message:'你好啊'
			},
			components:{
				cpn:{
					template:'#cpn'
				}
			}
		})
</script>
```

## [#](https://rayhomie.gitee.io/rayhomieblog/VUE/vueComponent/#%E5%8D%81%E5%9B%9B%E3%80%81%E7%BC%96%E8%AF%91%E4%BD%9C%E7%94%A8%E5%9F%9F-%E4%B8%8E-%E4%BD%9C%E7%94%A8%E5%9F%9F%E6%8F%92%E6%A7%BD)十四、编译作用域 与 作用域插槽
###### [#](https://rayhomie.gitee.io/rayhomieblog/VUE/vueComponent/#_1%E3%80%91%E5%AE%98%E6%96%B9%E5%87%86%E5%88%99)1】官方准则:
父组件模板的所有东西都会在父级作用域内编译；子组件模板的所有东西都会在子级作用域内编译。

```html
<div id="app">
			<cpn v-show="isShow"></cpn>
		</div>
		<template id="cpn">
			<div>
				<h2 v-show="isShow">我是子组件</h2>
				<p>我是内容，哈哈哈</p>
			</div>
		</template>
		<script type="text/javascript" src="js/vue.js"></script>
		<script type="text/javascript">
			const app=new Vue({
				el:'#app',
				data:{
					message:'你好啊',
					isShow:true
				},
				components:{
					cpn:{
						template:'#cpn',
						data(){
							return{
								isShow:false
							}
						}
					}
				}
			})
		</script>
```

###### [#](https://rayhomie.gitee.io/rayhomieblog/VUE/vueComponent/#_2%E3%80%91%E4%BD%9C%E7%94%A8%E5%9F%9F%E6%8F%92%E6%A7%BD%EF%BC%88%E6%9C%89%E7%82%B9%E9%9A%BE%EF%BC%89)2】作用域插槽
①父组件替换插槽的标签，但是内容由子组件来提供。
（就是父组件对子组件展示数据的方式不满意，父组件需要从子组件中拿到子组件中的数据，再用插槽作用域拿到数据进行重新展示）

```html
<div id="app">
			<cpn></cpn>
			<cpn>
				<template v-slot="slot">
                    <!--也可以用slot-scope-->
					<!--<span v-for="item in slot.abc">{{item}} - </span>-->
					<span>{{slot.abc.join(' - ')}}</span>
				</template>
			</cpn>
		</div>
		<template id="cpn">
			<div>
				<slot :abc="Planguage">
					<ul>
						<li v-for="item in Planguage">{{item}}</li>
					</ul>
				</slot>
			</div>
		</template>
		<script type="text/javascript" src="js/vue.js"></script>
		<script type="text/javascript">
			const app=new Vue({
				el:'#app',
				data:{
					message:'你好啊',
				},
				components:{
					cpn:{
						template:'#cpn',
						data(){
							return{
								Planguage:['JavaScript','C++','Java','C#','Python']
							}
						},
						created(){
							this.Planguage.join()
						}
					}
				}
			})
		</script>
```

