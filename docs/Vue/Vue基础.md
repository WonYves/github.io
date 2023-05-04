## 一、监视
###### 1、在new Vue里面这样写

```html
watch：{key1:function(value){
this.key2=value}
}
```

###### 2、在new Vue外面就用vm实例来调用watch（）方法向里面传参

## 二、计算属性
###### 1、computed：{newKey(){return this.key1+this.key2;}}其中newKey是回调函数满足1你自己定义的2你没有调用3但最终它执行了。对于此时的这个回调函数是在初始化显示或者相关的data属性数据发生改变时执行。
###### 2、通过getter和setter实现对属性数据的显示和监视computed: {newKey: { get(){return this.属性名},set(value){this.属性名=value} } }
###### 3、涉及计算属性就存在缓存问题，多次读取只执行一次getter计算！！！
###### 4、value.split(' ')可以用于把一个字符串分割为两个数组。例如"sd ad"就分成"sd"和"ad"两个数组。
## 三、强制绑定style和class
###### 1、class绑定语法是 :class='xxx';其中xxx可以是字符串、对象、数组。

###### 2、强制绑定style

## 四、条件渲染(用来实现标签的显示和隐藏的)
###### 1、条件渲染指令：v-if、v-else、v-show

###### 2、v-if和v-show的区别
v-if是把标签给删掉，而v-show是让标签隐藏起来还在源码中还有标签的样式style="display:none;",如果需要频繁切换v-show比较好
## 五、列表渲染
###### 1、v-for遍历数组

数组更新检测：vue中包含一组观察数组的变异方法，所以他们也将会触发视图更新。
例如：变异方法：push(),pop(),shift(), unshift(),splice(),sort(),reverse()等方法 都是vue进行包装(1、调用原生的2、更新界面)过的方法
①vue本身只是监视了persons的改变，没有监视数组内部数据的改变，需要用规定的函数来实现，并不是简单的变量赋值。
②vue重写了数组中的一系列改变数组内部数据的方法（先调用原生，再更新界面）--->数组内部改变，界面自动变化。
###### 2、v-for遍历对象

## 六、列表的过滤和排序
###### 1、过滤是掌握filter()方法的使用，例如：persons.filter(flag=>flag.name.indexOf(searchName)!==-1)
###### 2、排序是掌握sort()方法的使用，例如：fPersons.sort(function(p1,p2)规定：如果返回负数p1在前，返回正数p2在前

## 七、事件处理
###### 1、绑定监听
①$event的理解

###### 2、事件修饰符
①停止事件冒泡 @click.stop="test6"
②阻止事件的默认行为 @click.prevent="test7"

###### 3、按键修饰符
@keyup.enter和@keyup.13一样
系统中每一个按键都有一个keycode值

## 八、表单数据的自动收集（表单输入绑定）
###### 1、input type="text"和type="password"类型
###### 2、input type="radio"类型（单选框，只能选一个）（字符串型）
###### 3、input type="checkbox"类型（多选框，可以一次选多个）（数组型）
###### 4、select_option类型
###### 5、textarea类型
## 九、VUE实例生命周期
![image.png](https://cdn.nlark.com/yuque/0/2023/png/32841606/1682926009380-6fa40074-4924-4491-ba3b-996172780527.png#averageHue=%23fefdfb&clientId=u9bc58bfe-6690-4&from=paste&id=u3b419a45&originHeight=3039&originWidth=1200&originalType=url&ratio=1.25&rotation=0&showTitle=false&size=255207&status=done&style=none&taskId=udd69835b-fdb7-4a38-92fe-120f3415805&title=)
###### 1、有三个阶段：①初始化显示②更新显示③死亡（每个阶段都有回调函数）
用的最多的是mounted(){}，beforeDestroy(){}，destroy(){}

###### 2、vue对象的生命周期
①初始化显示
*beforeCreate() *created() *beforeMount() *mounted()
②更新状态:this.xxx = value
*beforeUpdate() *updated()
③销毁vue实例：vm.$destroy()
*beforeDestroy() *destroyed()
###### 3、常用的生命周期方法
mounted()：发送ajax请求，启动定时器等异步任务
beforeDestroy()：做收尾工作，如：清除定时器
## 十、过渡与动画
![image.png](https://cdn.nlark.com/yuque/0/2023/png/32841606/1682926009312-e5e5889e-6504-494c-8ed6-9ccb69e3393b.png#averageHue=%23fbeeed&clientId=u9bc58bfe-6690-4&from=paste&id=u0fa7e596&originHeight=600&originWidth=1200&originalType=url&ratio=1.25&rotation=0&showTitle=false&size=50536&status=done&style=none&taskId=ufd4605c7-ebec-46db-be12-5a8c161b3bf&title=)
###### 1、css中可能涉及的class名：.v-enter-active .v-enter .v-enter-to .v-leave-active .v-leave .v-leave-to
1)在目标元素外包裹<transition name="xxx">
2)定义class样式①指定过渡样式：transition②指定隐藏后的样式：opacity/其他

## 十一、过滤器
###### 1、定义过滤器

###### 2、使用过滤器
在标签内写

## 十二、内置指令与自定义指令
###### 1、常见内置指令
1】v:text更新元素的textContent
2】v-html更新元素的innerHTML
3】v-if如果为true当前标签才会输出到页面
4】v-else如果为false当前标签才会输出到页面
5】v-show通过控制display样式来控制显示/隐藏
6】v-for遍历数组/对象（实现列表显示）
7】v-on绑定事件监听，一般简写为@
8】v-bind:xxx强制绑定解析表达式，可以省略v-bind只用：
9】v-model双向数据绑定
10】ref指定唯一标识，vue对象通过$els属性访问这个元素对象
11】v-cloak防止闪现，与css配合[v-cloak]{display:none}用属性选择器
###### 2、自定义指令
1】注册全局指令
Vue.directive('my-directive',function(el,binding){
el.innerHTML=binding.value.toupperCase()
})
2】注册局部指令(在一个new vue()内部写)
directive:{
'my-directive': function(el,binding){
el.innerHTML=binding.value.toupperCase() } }
3】使用指令
v-my-directive='xxx'

## 十三、插件(js库)
##### 1】首先创建一个vue-myPlugin.js文件

##### 2】如果要使用插件js库，必须要注意声明使用插件Vue.use(MyPlugin)
##### 3】还需要注意：实例的方法统一用$符来与函数对象的方法相区别（$符命名是vue内部的函数）

```html
vm.$watch('key1',function(value){
this.key2=value
})
```

```html
<style type="text/css">
			.aClass{color: yellow;}
			.bClass{color: blue;}
			.cClass{font-size: 40px;}</style>
<div id="demo">
			<h2>1.class绑定::class='xxx'</h2>
			<p class="cClass" :class="a">xxx是字符串</p>
			<p :class="{aClass:isA,bClass:isB}">xxx是对象</p>
			<p :class="['aClass','cClass']">xxx是数组</p>
			<button @click="update">更新</button>
			</div>
<script type="text/javascript" src="js/vue.js"></script>
<script type="text/javascript">
new Vue({
			el:'#demo',
			data:{
				a:'aClass',
				isA: true,
				isB: false,
				},
			methods:{
				update(){
					this.a='bClass';
					this.isA=false;
					this.isB=true;
						}
					}
		})</script>
```

```html
<div id="demo">
<h2>2.style绑定</h2>
<p :style="{color:activeColor,fontSize:fontSize + 'px'}">style绑定</p>
<button @click="update">更新</button>
</div>
<script type="text/javascript" src="js/vue.js"></script>
<script type="text/javascript">
    new Vue({
				el:'#demo',
				data:{
					activeColor:'yellow',
					fontSize:50
				},
				methods:{
					update(){
						this.activeColor='blue';
						this.fontSize=30
					}
				}
			})
 </script>
```

```html
<!--条件渲染：是否显示显示或者隐藏标签-->
		<div id="demo">
			<p v-if="ok">成功了</p>
			<p v-else>失败了</p>
			<p v-show="ok">表白成功了</p>
			<p v-show="!ok">表白失败了</p>
			<button @click="ok=!ok">切换</button>
			</div>
			<script type="text/javascript" src="js/vue.js"></script>
			<script type="text/javascript">
				new Vue({
					el:'#demo',
					data:{
						ok:false
					}
				})
			</script>
```

```html
<!DOCTYPE html>
<html>
	<head>
		<meta charset="UTF-8">
		<title></title>
	</head>
	<body>
		<div id="demo">
			<h2>测试：v-for 遍历数组</h2>
			<ul >
				<li v-for="(p,index) in persons" :key="index">
				{{index}}---{{p.name}}---{{p.age}}
				<button @click="deleteP(index)">删除</button>
				<button @click="updateP(index,{name:'mov',age:20})">更新</button>
				</li>
			</ul>
			<h2>测试：v-for 遍历对象</h2>
			
		</div>
		<script type="text/javascript" src="js/vue.js"></script>
		<script type="text/javascript">
			new Vue({
				el:'#demo',
				data:{
					persons:[
					{name:'tom',age:14},
					{name:'cat',age:19},
					{name:'gim',age:16},
					]
				},
				methods:{
					deleteP(index){
						this.persons.splice(index,1);
						
					},
					updateP(index,newP){
						this.persons.splice(index,1,newP);
						//区别下面两个
						//this.persons[index] =newP;
						//只会改变vue中的值，并不会改变显示界面的值，并没有改变persons本身
						//this.persons=[];
						//vue本身只是监视了persons的改变，没有监视数组内部数据的改变，需要用规定的函数来实现，并不是简单的变量赋值
						//vue重写了数组中的一系列改变数组内部数据的方法（先调用原生，再更新界面）
						//数组更新检测相关
						
					}
				}
			})
		</script>
	</body>
</html>
```

```html
<div id="demo">
	</ul>
			<h2>测试：v-for 遍历对象</h2>
			<ul>
				<li v-for="(value,key) in persons[0]" :key="key">
                    <!--value可以存在一样的值，而key不能存在一样的值，会被覆盖掉-->
					{{key}}---{{value}}
				</li>
	</ul>
</div>	
<script type="text/javascript" src="js/vue.js"></script>
		<script type="text/javascript">
			new Vue({
				el:'#demo',
				data:{
					persons:[
					{name:'tom',age:14},
					{name:'cat',age:19},
					{name:'gim',age:16},
					]
				}
			})
		</script>
```

```html
<div id="demo">
			<h2>测试：v-for 遍历数组</h2>
			<ul >
				<input type="text" v-model="searchName" />
				<li v-for="(p,index) in filterPersons" :key="index">
				{{index}}---{{p.name}}---{{p.age}}
				</li>
			</ul>
			<button @click="setOrderType(1)">年龄升序</button>
			<button @click="setOrderType(2)">年龄降序</button>
			<button @click="setOrderType(0)">原本顺序</button>
		</div>
		<script type="text/javascript" src="js/vue.js"></script>
		<script type="text/javascript">
		new Vue({
			el:'#demo',
			data:{
				searchName:'',
				orderType:0,//0代表原本顺序，1代表升序，2代表降序
				persons:[
					{name:'tom',age:14},
					{name:'cot',age:19},
					{name:'gom',age:16},
					]
			},
			computed:{
				filterPersons(){
					//取出相关数据
					const {searchName,persons,orderType}=this
					//最终需要显示的数组
					let fPersons
					//对persons进行过滤
				fPersons=persons.filter(flag=>flag.name.indexOf(searchName)!==-1)
					//排序
					if(orderType!==0){//0代表原本顺序，1代表升序，2代表降序
						fPersons.sort(function(p1,p2){//规定：如果返回负数p1在前，返回正数p2在前
							if(orderType===2){
								return p2.age-p1.age
							}
							else{
								return p1.age-p2.age
							}
						})
					}
					return fPersons
				}
			},
			methods:{
				setOrderType(orderType){
					return this.orderType=orderType
				}
			}
		})
		</script>
```

```html
<div id="demo">
			<h2>1.绑定监听</h2>
			<button @click="test1">test1</button>
			<button @click="test2('asdsad')">test2</button>
			<button @click="test3">test3</button>
			<button @click="test4(123,$event)">test4</button>
</div>
<script type="text/javascript" src="js/vue.js"></script>
		<script type="text/javascript">
			new Vue({
				el:'#demo',
				methods:{
					test1(){
						alert('test1')
					},
					test2(msg){
						alert(msg)
					},
					test3(event){
						alert(event.target.innerHTML)
					},
					test4(num,b){
						alert(num+'---'+b.target.innerHTML)
					}
				}
			})
		</script>
```

```html
<div id="demo">
	<h2>2.事件修饰符</h2>
	<div style="width: 200px;height: 200px;background-color: red;" @click="test5">
	<div style="width: 100px;height: 100px;background-color: blue;" @click.stop="test6"></div>																	<!--停止冒泡 --></div>			
	<a href="http://www.baidu.com" @click.prevent="test7">去百度</a>
                                            <!--阻止事件的默认行为-->
</div>
<script type="text/javascript" src="js/vue.js"></script>
		<script type="text/javascript">
			new Vue({
				el:'#demo',
				methods:{
					test5(){
						alert('out')
					},
					test6(){
						alert('inner')
					},
					test7(){
						alert('点击了')
					}
				}
			})
		</script>
```

```html
<div id="demo">
			<h2>3.按键修饰符</h2>
			<input type="text" @keyup="test8" />
			<input type="text" @keyup.enter="test9" />
			<input type="text" @keyup.13="test9" />
</div>
<script type="text/javascript" src="js/vue.js"></script>
		<script type="text/javascript">
			new Vue({
				el:'#demo',
				methods:{
					test8(event){
						if(event.keyCode===13){
						alert(event.target.value+' '+event.keyCode)}
					},
					test9(event){
						alert(event.target.value+' '+event.keyCode)
					}
				}
			})
		</script>
```

```html
<div id="demo">
			<form action="/xxx" @submit.prevent="handleSubmit"><!--用.prevent来阻止默认行为-->
                <span>用户名：</span>
                <input type="text" v-model="username"/><br><!--用v-model来绑定vue里面的data初始化值-->
                <span>密码：</span>
                <input type="password" v-model="pwd"/><br>
                <input type="submit" value="注册" />
			</form>
		</div>
<script type="text/javascript" src="js/vue.js"></script>
<script type="text/javascript">
			new Vue({
				el:'#demo',
				data:{
					username:'',
					pwd:''
				},
				methods:{
					handleSubmit(){
						console.log(this.username,this.pwd)
					}
				}
			})
		</script>
```

```html
<div id="demo">
			<form action="/xxx" @submit.prevent="handleSubmit">//用.prevent来阻止默认行为
                <span>性别：</span>
				<input type="radio" id="female" value="女" v-model="sex"/>
       <!--通过v-model给两个input_radio设置相同的变量，然后分别再用value设置不同的值，再通过vue调用-->
				<label for="female">女</label>
				<input type="radio" id="male" value="男" v-model="sex"/>
				<label for="male">男</label><br>
                <input type="submit" value="注册" />
			</form>
		</div>
<script type="text/javascript" src="js/vue.js"></script>
<script type="text/javascript">
			new Vue({
				el:'#demo',
				data:{
					sex:'女'
				},
				methods:{
					handleSubmit(){
						console.log(this.sex)
					}
				}
			})
		</script>
```

```html
<div id="demo">
			<form action="/xxx" @submit.prevent="handleSubmit">//用.prevent来阻止默认行为
                <span>爱好：</span>
<!--给三个input_checkbox设置相同的v-model，用value注入不同的值区分，然后用数组来表示他们-->
				<input type="checkbox" id="basket" value="basket" v-model="likes" />
				<label for="basket">篮球</label>
				<input type="checkbox" id="foot" value="foot" v-model="likes" />
				<label for="foot">足球</label>
				<input type="checkbox" id="pingpang" value="pingpang" v-model="likes" />
				<label for="pingpang">乒乓</label>

                <input type="submit" value="注册" />
			</form>
		</div>
<script type="text/javascript" src="js/vue.js"></script>
<script type="text/javascript">
			new Vue({
				el:'#demo',
				data:{
					likes:['foot','basket','pingpang']
				},
				methods:{
					handleSubmit(){
						console.log(this.likes)
					}
				}
			})
		</script>
```

```html
<div id="demo">
			<form action="/xxx" @submit.prevent="handleSubmit">//用.prevent来阻止默认行为
              <span>城市：</span>
				<select v-model="cityId">
					<option value="">未选择</option>
<!--用v-for来遍历数组，然后再把每一个遍历的值看成一个变量来点出对象内部id或者name的值（city.id或者city.name）-->
					<option :value="city.id" v-for="(city,index) in allCitys" :key="index">{{city.name}}</option>
<!--v-for的格式：v-for="(value,index) in 数组名" :key="index" -->
<!--value是提交给后台的值,value也可以对同个v-model的不同赋值（比如一个数组是v-model那么value就是数组内部的数），v-model是需要先在vue的data里面初始化值-->
				</select>

                <input type="submit" value="注册" />
			</form>
		</div>
<script type="text/javascript" src="js/vue.js"></script>
<script type="text/javascript">
			new Vue({
				el:'#demo',
				data:{
                    allCitys:[{id:1,name:'BJ'},{id:2,name:'SH'},{id:3,name:'GD'}],
                    cityId:''
				},
				methods:{
					handleSubmit(){
						console.log(this.cityId)
					}
				}
			})
		</script>
```

```html
<div id="demo">
			<form action="/xxx" @submit.prevent="handleSubmit"><!--用.prevent来阻止默认行为-->
                <span>介绍：</span>
                <textarea rows="10" v-model="desc"></textarea>


                <input type="submit" value="注册" />
			</form>
</div>
<script type="text/javascript" src="js/vue.js"></script>
<script type="text/javascript">
			new Vue({
				el:'#demo',
				data:{
                    desc:''
				},
				methods:{
					handleSubmit(){
						console.log(this.desc)
					}
				}
			})
		</script>
```

```html
<div id="test">
			<button @click="destroyVM">destroy vm</button>
			<p v-show="isShow">雷浩是人才</p>
		</div>
		<script type="text/javascript"src="js/vue.js"></script>
		<script type="text/javascript">
			new Vue({
				el:'#test',
				data:{
					isShow:true
				},
				mounted(){
					//初始化显示之后立即调用（1次）
					this.intervalId= setInterval(()=>{
						console.log('......')
						 this.isShow= !this.isShow
					},1000)
				},
				beforeDestroy(){//死亡之前调用（1次）
					//清理定时器
					clearInterval(this.intervalId)
				},
				methods:{
					destroyVM(){
						//干掉VM
						this.$destroy()
					}
				}
			})
		</script>
```

```html
<head>
		<meta charset="UTF-8">
		<title></title>
		<style type="text/css">
			/*显示过程/隐藏过程的过渡效果*/
			.xxx-enter-active, .xxx-leave-active{
				transition: opacity 1s;
			}
			/*显示前/隐藏后的样式*/
			.xxx-enter, .xxx-leave-to{
				opacity:0;
			}
			/*显示的过渡效果*/
			.yyy-enter-active{
				transition: all 1s;
			}
			/*隐藏的过渡效果*/
			.yyy-leave-active{
				transition: all 3s;
			}
			/*显示前/隐藏后的样式和位置*/
			.yyy-enter, .yyy-leave-to{
				opacity:0;
				transform: translateX(20px);
			}
			.zzz-enter-active{
				animation: zzz-in .5s;
			}
			.zzz-leave-active{
				animation: zzz-in .5s reverse;/*反向*/
			}
			@keyframes zzz-in{
				0%{
					transform: scale(0);
				}
				50%{
					transform: scale(1.5);
				}
				100%{
					transform: scale(1);
				}
			}
		</style>
	</head>
	<body>
		<div id="demo1">
			<button @click="isShow=!isShow">toggle</button>
			<transition name="xxx">
			<!--相当于给内部的标签加一个临时类名，例如：class="xxx-enter-active"-->
			<p v-show="isShow">hello</p></transition>
		</div>
		<div id="demo2">
			<button @click="isShow=!isShow">toggle</button>
			<transition name="yyy">
			<!--相当于给内部的标签加一个临时类名，例如：class="xxx-enter-active"-->
			<p v-show="isShow">hello</p></transition>
		</div>
			<div id="demo3"><!--动画-->
			<button @click="isShow=!isShow">toggle</button>

			<transition name="zzz">
			<p v-show="isShow" style="display: inline-block;">hello lh</p></transition>
		</div>
		<script type="text/javascript" src="js/vue.js"></script>
		<script type="text/javascript">
			new Vue({
				el:'#demo1',
				data:{
					isShow:true
				}
			})
			new Vue({
				el:'#demo2',
				data:{
					isShow:true
				}
			})
			new Vue({
				el:'#demo3',
				data:{
					isShow:true
				}
			})
		</script>
	</body>
```

```
Vue.filter(filterName,function(value[arg1,arg2..],format){

return newValue      //进行一些数据处理比如可以使用moment.js库

})
```

```html
<div id="test">
			<h2>显示格式化日期时间</h2>
			<p>{{date}}</p>
			<p>完整版：{{date | dateString}}</p>
			<p>年月日：{{date | dateString('YYYY-MM-DD')}}</p>
			<p>时分秒：{{date | dateString('HH:mm:ss')}}</p>
		</div>
		<script type="text/javascript" src="https://cdn.bootcss.com/moment.js/2.24.0/moment.js"></script>
		<script type="text/javascript" src="js/vue.js"></script>
		<script type="text/javascript">
			//自定义过滤器（Vue是函数对象）
			Vue.filter('dateString',function(value,format){
				return moment(value).format(format||'YYYY-MM-DD HH:mm:ss')
			})
			new Vue({
				el:'#test',
				data:{
					date:new Date()
				}
			})
		</script>
```

```html
<div id="test1">
		<p v-upper-text="msg1"></p>
		<p v-lower-text="msg1"></p>
	</div>
	<div id="test2">
		<p v-upper-text="msg2"></p>
		<p v-lower-text="msg2"></p>
	</div>
	<script type="text/javascript" src="js/vue.js"></script>
	<script type="text/javascript">
		//定义全局指令
		//el：指令属性所在的标签对象
		//binding：包含指令相关信息数据的对象
		Vue.directive('upper-text',function(el,binding){
			console.log(el,binding)
			el.textContent=binding.value.toUpperCase()
		})
		
		new Vue({
			el:'#test1',
			data:{
				msg1:'NBA I Love This Game!'
			},
			directives:{//注册局部指令：只在当前vm管理的范围内有效
				'lower-text':function(el,binding){
					el.textContent=binding.value.toLowerCase()
				}
			}
		})
		new Vue({
			el:'#test2',
			data:{
				msg2:'Just Do It!'
			}
		})
	</script>
```

```javascript
//创个匿名函数 (function(){......})()
(function(){
	//需要向外暴露一个插件对象
	const MyPlugin={}
	//向外暴露
	window.MyPlugin=MyPlugin
	//插件对象必须有一个install()
	MyPlugin.install = function (Vue, options) {
	
  // 1. 添加全局方法或属性
  Vue.myGlobalMethod = function () {
    // 逻辑...
    console.log('vue函数对象的方法myGlobalMethod()')
  }

  // 2. 添加全局资源
  Vue.directive('my-directive', function(el,binding){
  	el.textContent=binding.value.toUpperCase()
  })

  // 4. 添加实例方法（实例的方法统一用$符来与函数对象的方法相区别）
  Vue.prototype.$myMethod=function(){
  	console.log('vue实例对象的方法$myMethod()')
  }
}
})()
```

```html
<div id="test">
			<p v-my-directive="msg"></p>
		</div>
		<script type="text/javascript"src="js/vue.js"></script>
		<!--必须先导入vue.js再导入自己写的插件js库-->
		<script type="text/javascript"src="js/vue-myPlugin.js"></script>
		<script type="text/javascript">
			//声明使用插件
			Vue.use(MyPlugin)//!!!内部会执行MyPlugin.install(Vue)
			
			Vue.myGlobalMethod()
			
			const vm = new Vue({
				el:'#test',
				data:{
					msg:'i love you!'
				}
			})
			vm.$myMethod()
		</script>
```


 
