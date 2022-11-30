## Vue双向绑定的原理
## 一、在讲vue双向绑定之前我们需要来了解下[MVVM](https://link.zhihu.com/?target=https%3A//so.csdn.net/so/search%3Fq%3DMVVM%26spm%3D1001.2101.3001.7020)模式
MVVM（[Model](https://link.zhihu.com/?target=https%3A//so.csdn.net/so/search%3Fq%3DModel%26spm%3D1001.2101.3001.7020)-View-ViewModel）是对 MVC（Model-View-Control）和 MVP（Model-View-Presenter）的进一步改进。

```js
- View：视图层（UI 用户界面）
- ViewModel：业务逻辑层（一切 js 可视为业务逻辑，也就是前端的日常工作）
- Model：数据层（存储数据及对数据的处理如增删改查） - data
```
MVVM 将数据双向绑定（data-binding）作为核心思想，View 和 Model 之间没有联系，它们通过 ViewModel
这个桥梁进行交互
Model 和 ViewModel 之间的交互是双向的，因此 View 的变化会自动同步到 Model，而 Model的变化也会立即反映到 View 上显示当用户操作 View，ViewModel 感知到变化，然后通知 Model 发生相应改变；反之当 Model 发生改变，ViewModel也能感知到变化，使 View 作出相应更新

![](https://pic2.zhimg.com/80/v2-c528067d58265ea8beb917421ad3e69d_720w.webp)

### **双向绑定的原理：**
“vue数据的双向绑定是通过数据劫持结合发布者-订阅者模式的方式来实现的。其核心就是通过Object.defineProperty()方法设置set和get函数来实现数据的劫持,在数据变化时发布消息给订阅者,触发相应的监听回调。也就是说数据和视图同步,数据发生变化,视图跟着变化,视图变化,数据也随之发生改变
## 双向绑定的核心： Object.defineProperty()
Object.defineProperty(obj, prop, descriptor) 方法会直接在一个对象上定义一个新属性，或者修改一个对象的现有属性，并返回此对象
Object.defineProperty(obj, prop, descriptor)

- obj
   - 要处理的目标对象
- prop
   - 要定义或修改的属性的名称
- descriptor
   - 将被定义或修改的属性描述符

使用方法

```javascript
var obj = {}
obj.name = 'hunger'
obj['age'] = 3
Object.defineProperty(obj, 'intro', {
value : 'hello world'
})
console.log(obj) // {name: 'WonYves', age: 3, intro: 'hello world'}
```
