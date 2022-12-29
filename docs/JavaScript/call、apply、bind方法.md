### 通过call实现bind
```javascript
Function.prototype.newBind = function (...arr) {
    let that = this
    return function () {
        that.call(...arr)
    }
}

obj = {
    a: 1
}

function say(a, b, c) {
    console.log(this)
    console.log(a, b, c)
}
say.newBind(obj, 1, 2, 3)()
//{ a: 1 }
//1 2 3
```
### 手写call
```javascript
//通过对象调用方法来修改this指向
Function.prototype.call2 = function (context){
  const ctx = context || window
  ctx.func = this //调用call2时，this是调用call2的方法（call2是在函数对象上）
  //测试用例中这个this打印出来是：[function a]
  const args = Array.from(arguments).slice(1)//保存参数
  //通过在ctx中新建一个 函数对象等于调用时的对象 来调用执行来修改this指向
  const res = arguments.length > 1 ? ctx.func(...args) : ctx.func()
  delete ctx.func//避免造成全局污染
  return res
}

//测试用例：
obj={c:2}
function a(x,y){console.log(this,x,y)}
a.call(obj,1,2)//{c:2} 1 2
a.call2(obj,1,2)//{c:2,func:[function a]} 1 2
```
### 手写apply
```javascript
Function.prototype.apply2 = function (context){
  const ctx = context || window
  ctx.func = this
  //测试用例中这个this打印出来是：[function a]
  //通过在ctx中新建一个 函数对象等于调用时的对象 来调用执行来修改this指向
  const res = arguments[1] ? ctx.func(...arguments[1]) : ctx.func()
  delete ctx.func//避免造成全局污染
  return res
}

//测试用例：
obj={c:2}
function a(x,y){console.log(this,x,y)}
a.call(obj,[1,2])//{c:2} 1 2
a.call2(obj,[1,2])//{c:2,func:[function a]} 1 2
```
### 手写bind
```javascript
Function.prototype.bind2 = function (context) {
  //对context进行深拷贝，防止bind执行后返回函数未执行期间，context被修改
  const ctx = JSON.parse(JSON.stringify(context)) || window
  ctx.func = this
  const args = Array.from(arguments).slice(1)
  return function () {
    //注意bind方法需要合并两次函数执行的参数
    const Allargs = args.concat(Array.from(arguments))
    return Allargs.length > 0 ? ctx.func(...Allargs) : ctx.func()
  }
}

//测试
obj = { c: 2 }
function a(x,y,z) { console.log(this, x, y, z) }
a.bind(obj,1,2)(3)//{c:2} 1 2 3
a.bind2(obj,1,2)(3)//{c:2,func:[function a]} 1 2 3
```
