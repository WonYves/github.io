## 一、函数式组件
#### 什么是函数式组件？
我们可以把函数式组件想像成组件里的一个函数，入参是渲染上下文(render context)，返回值是渲染好的HTML
对于函数式组件，可以这样定义：

- Stateless(无状态)：组件自身是没有状态的
- Instanceless(无实例)：组件自身没有实例，也就是没有this，没有什么周期。

创建一个函数式组件：

```
export default {
    name: 'functional-button',
    functional: true,
    render(createElement, context) {
        return createElement('button', 'click me')
    }
}
```

具体使用场景：

```vue
//优化前
<template>
	<div class='cell'>
  	<div v-if="value" class='on'></div>
  	<section v-else class='off'></section>
  </div>
</template>
<script>
export default {
  props:['value']
}
</script>

//优化后(没有生命周期、是纯函数，直接返回渲染好的模板)
<template functional>
	<div class='cell'>
  	<div v-if="props.value" class='on'></div>
  	<section v-else class='off'></section>
  </div>
</template>
<script>
export default {
  props:['value']
}
</script>
```

## 二、按需拆分组件
将组件中的重任务提取成一个子组件拆分出来，提高性能。
原理：每个组件都有一个watcher，频繁渲染的重任务，可以拆分成一个子组件，避免让整个父组件都重新渲染，从而提高性能。（vue是每个组件内进行diff）
具体场景：

```vue
//优化前
<template>
	<div class='cell'>
  	<div>{{ heavy() }}</div>
  </div>
</template>
<script>
export default {
  methods:{
    heavy(){/* HEAVY TASK */}
  }
}
</script>

//优化后(进行子组件拆分)不会让父组件重新渲染
<template>
	<div class='cell'>
    <ChildComponent />
  </div>
</template>
<script>
export default {
  components:{
    ChildComponent:{
      methods:{
        heavy(){/* HEAVY TASK */}
      },
      render(h){
        return h('div',this.heavy())
      }
    }
  }
}
</script>
```

## 三、使用局部变量
在循环变量的时候对一些不会变的变量，使用局部变量进行暂存，不用重复的计算获取不变的变量。
## 四、活用v-show少用v-if

- v-show不会改变dom树，也就是说不会导致重排。
- v-if会改变dom树，会导致重排。

```vue
//优化前
<template functional>
	<div class='cell'>
  	<div v-if="props.value" class="on"></div>
    <div v-else class="off"></div>
  </div>
</template>

//优化后(使用v-show)
<template functional>
	<div class='cell'>
  	<div v-show="props.value" class="on"></div>
    <div v-show="!props.value" class="off"></div>
  </div>
</template>
```

## 五、使用Keep-alive

```vue
//优化前
<template>
	<div id="app">
  	<router-view />
  </div>
</template>

//优化后(组件缓存)
<template>
	<div id="app">
    <keep-alive>
      <router-view />
    </keep-alive>
  </div>
</template>
```

#### 总结
**keepalive是一个抽象组件，缓存vnode，缓存的组件没有mounted中的diff步骤，为此提供activated 和 deactivated 钩子函数, 使用props max 可以控制缓存组件个数**
#### 什么是keep-alive？

- keep-alive字面意思：保存活跃；
- 在开发中有些组件没有必要多次初始化，我们就需要对组件进行持久化，是**组件的状态保持不变**，下一次展示的时候就**不会去重新初始化组件**。
- 也就是说，kee-alive 是 Vue 内置的一个组件，可以**使被包含的组件保留状态，或避免重新渲染** 。也就是所谓的**组件缓存**

```vue
//基本用法：被keep-alive包含的组件会被缓存
<keep-alive>
    <component />
</keep-alive>
```

被keep-alive包含的组件不会被再次初始化，也就意味着**不会重走生命周期函数** 但是有时候是希望我们缓存的组件可以能够再次进行渲染，这时Vue为我们解决了这个问题。
#### keep-alive组件生命周期：
被包含在 keep-alive 中创建的组件，会多出两个生命周期的钩子: activated 与deactivated：

- activated 当 keep-alive 包含的组件再次渲染的时候触发
- deactivated 当 keep-alive 包含的组件销毁的时候触发

keep-alive是一个抽象的组件，缓存的组件不会被mounted,为此提供activated和deactivated钩子函数
在2.1.0 版本后keep-alive新加入了两个属性: include(包含的组件缓存生效) 与 exclude(排除的组件不缓存，优先级大于include) 。
#### keep-alive标签的属性：
keep-alive可以接收3个属性做为参数进行匹配对应的组件进行缓存:

- include包含的组件(可以为字符串，数组，以及正则表达式,只有匹配的组件名会被缓存)
- exclude排除的组件(以为字符串，数组，以及正则表达式,任何匹配的组件名都不会被缓存)
- max缓存组件的最大值(类型为字符或者数字,可以控制缓存组件的个数)

注：当使用正则表达式或者数组时，一定要使用v-bind
#### 配合vue-router使用：

```vue
<keep-alive>
    <router-view>
        <!-- 所有路径匹配到的视图组件都会被缓存！ -->
    </router-view>
</keep-alive>
```

**如果只想要router-view里面的某个组件被缓存，怎么办？**

- 使用 include/exclude
- 使用 meta 属性

1.使用 include (exclude例子类似)

```vue
//只有路径匹配到的 name 为 a 组件会被缓存
<keep-alive include="a">
    <router-view></router-view>
</keep-alive>
```

2.使用 meta 属性

```vue
// routes 配置
export default [
  {
    path: '/',
    name: 'home',
    component: Home,
    meta: {
      keepAlive: true // 需要被缓存
    }
  }, {
    path: '/profile',
    name: 'profile',
    component: Profile,
    meta: {
      keepAlive: false // 不需要被缓存
    }
  }
]

<keep-alive>
    <router-view v-if="$route.meta.keepAlive">
        <!-- 这里是会被缓存的视图组件，比如 Home！ -->
    </router-view>
</keep-alive>

<router-view v-if="!$route.meta.keepAlive">
    <!-- 这里是不会被缓存的视图组件，比如 Profile！ -->
</router-view>
```

## 六、活用预加载并延迟装载defer
也就是先去隐形地加载数据，再去挂载到真实dom上。
具体场景：mixin中使用defer
（设计requestAnimationFrame）

```vue
<template>
  <div>
    <h2>I'm an heavy page</h2>

    <template v-if="defer(2)">
      <Heavy v-for="n in 10" :key="n"/>
    </template>

    <Heavy v-if="defer(3)" class="super-heavy" :n="9999999"/>
  </div>
</template>
<script>
import Defer from '@/mixins/Defer'
export default {
  mixins: [
    Defer()
  ]
}
</script>
```


```
//混合mixin
export default function (count = 10) {
  return {
    data () {
      return {
        displayPriority: 0
      }
    },
    mounted () {
      this.runDisplayPriority()
    },
    methods: {
      runDisplayPriority () {
        const step = () => {
          requestAnimationFrame(() => {
            this.displayPriority++
            if (this.displayPriority < count) {
              step()
            }
          })
        }
        step()
      },
      defer (priority) {
        return this.displayPriority >= priority
      }
    }
  }
}
```

## 七、分批处理
巧用requestAnimationFrame

```
//优化前
fetchItems({ commit },{ items }){
	commit('clearItems')
	commit('addItems',items)
}

//优化后
fetchItems({ commit },{ items }){
	commit('clearItems')
  const queue=new JobQueue()
  splitArray(items,splitCount).forEach(chunk=>{
    return queue.addJob(done=>{
      //commit array chunk on several frames
      requestAnimationFrame(()=>{
        commit('addItems',chunk)
        done()
      })
    })
  })
  //start and wait for all the jobs to finish
  await queue.start()
}
```

## 八、重任务避免直接操作双向绑定的值
避免直接使用Array.map对双向绑定的数组值进行迭代操作，影响性能。

```
//优化前
const data = items.map(item=>({
  id:uid++,
  data:item,
  vote:0
}))

//优化后
const data = items.map(item=>optimizeItem(item))
function optimizeItem(item){
  const itemData={
    id:uid++,
    vote:0
  }
  Object.defineProperty(itemData,'data',{
    configurable:false,//自己定义的属性，去覆盖vue的双向绑定
    value:item
  })
  return itemData
}
```

## 九、仅渲染可视化部分
懒加载

```vue
//优化前
<div class="item no-v">
  <FetchItemViewFunctional 
   v-for="item of items"
   :key="item.id"
   :item="item"
   @vote="voteItem(item)"/>
</div>

//优化后
<recycle-scroller 
 class="items" 
 :items="items"
 :item-size="24">
	<template v-slot="{item}">
		 <FetchItemViewFunctional 
      :item="item"
      @vote="voteItem(item)"/>
	</template>
</recycle-scroller>
```

