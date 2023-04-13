vue3 composition API 和react的hook非常接近
```vue
<template>
  <div class="aa11">
    <!-- component :is 来控制动态渲染 -->
    <component :is="count % 2 === 0 ? A : B"></component>
  </div>

  <!-- 在js中 ref定义的值可以直接拿到差值语法中使用 
    个人觉得和react的语法非常相似 -->
  <div>{{ count }}</div>
  <button @click="handleAdd">+</button>
</template>


<script lang="ts" setup>
import { ref } from 'vue';

// 组件无需注册 引入后可直接在页面中使用
  
import A from '../../components/A.vue'
import B from '../../components/B.vue'

// 定义变量使用ref 不用data 这样也无需使用this
const count = ref<number>(0)

// 在函数中可以直接访问外部作用域组件实例中的值 和react的hook一样
const handleAdd = () => {
  count.value++
}
</script>


<style lang="less">
.aa11{
 width: 500px;
 text-align: center;
}
</style>
```
