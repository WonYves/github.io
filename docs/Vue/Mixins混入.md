# mixins混入
### 局部组件mixins：
混入 (mixin) 提供了一种非常灵活的方式，来分发 Vue 组件中的可复用功能。一个混入对象可以包含任意组件选项。当局部组件使用混入对象时，所有混入对象的选项将被“混合”进入该组件本身的选项。

```
// 定义一个混入对象
var myMixin = {
  created: function () {
    this.hello()
  },
  methods: {
    hello: function () {
      console.log('hello from mixin!')
    }
  }
}

// 定义一个使用混入对象的组件
var Component = Vue.extend({
  mixins: [myMixin]
})

var component = new Component() // => "hello from mixin!"
```

### mixins的选项合并：
当组件和混入对象含有同名选项时，这些选项将以恰当的方式进行“合并”。

- data对象在内部会进行递归合并，并在发生**冲突时以组件数据优先**。
- 同名钩子函数将合并为一个数组，因此**都将被调用**。另外，**混入对象的钩子将在组件自身钩子之前调用**。
- 值为对象的选项，例如 methods、components 和 directives，将被合并为同一个对象。两个对象键名冲突时，**取组件对象的键值对**。
### 全局混入mixin：
混入也可以进行全局注册。使用时**格外小心**！一旦使用全局混入，它将影响**每一个**之后创建的 Vue 实例。使用恰当时，这可以用来为自定义选项注入处理逻辑。

```
// 为自定义的选项 'myOption' 注入一个处理器。
Vue.mixin({
  created: function () {
    var myOption = this.$options.myOption
    if (myOption) {
      console.log(myOption)
    }
  }
})

new Vue({
  myOption: 'hello!'
})
// => "hello!"
```

### 总结：

- 组件有mixins选项，是数组类型，里面可以接收mixin对象，mixins:[mixinObject]
- 全局Vue对象可以调用mixin()方法，里面接收mixin对象，Vue.mixin(mixinObject)
- mixin对象与组件选项会进行合并，如果有冲突，组件优先级高于mixin
### 使用mixin做一个UI库：
随便写一个复用的ui组件：

```vue
//随便写一个复用的ui组件。
<template>
  <button :class="['my-btn',btnStyle]">
    <slot></slot>
  </button>
</template>
<script>
export default {
  props: {
    btnStyle: String,
  },
};
</script>
<style scoped>
.my-btn {
  height: 34px;
  padding: 0 15px;
  border: none;
  outline: none;
  background-color: #000;
  color: #fff;
}
.my-btn.btn-primary {
  background-color: blue;
  color: #fff;
}
.my-btn.btn-danger {
  background-color: red;
  color: #fff;
}
.my-btn.btn-success {
  background-color: greenyellow;
  color: #fff;
}
</style>
```

src下创建mixin文件夹下创建index.js文件夹（用于导出需要复用的组件）

```
import MyUI from './MyUI.vue'
export default {
    components: {
        MyUI
    }
}
```

此时我们就可以在需要使用复用UI组件的地方，使用mixins进行使用UI组件：

```vue
<template>
	<MyUI btnStyle="btn-primary">Button</MyUI>
</template>
<script>
import MyUI from "@/libs/MyUI";
export default {
  name: "Home",
  mixins: [MyUI]
};
</script>
```

如果我们需要全局地使用该复用UI组件，就可以直接在main.js入口文件中使用Vue.mixin(mixinObject)，就行全局绑定：

```
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import MyUI from './libs/MyUI'
Vue.mixin(MyUI)//直接全局使用MyUI，在其他组件中使用时，不需要注册和导入，直接大胆使用
Vue.config.productionTip = false
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
```

