### 手写call
```javascript
function obj (age, name, ...args) {
      this.name= name
      this.age = age
      this.habby = function(...args){
        console.log(this.name, this.age, ...args)
      }
    }

    const A = new obj(18, 'way')

    let obj2 = {
      name:'kerwin',
      age: 32
    }

    Function.prototype.WayCall = function(obj, ...args){

      obj = obj? obj : globalThis

      obj.fn = this
      let result = obj.fn(...args)
      delete obj.fn
      return result
    }
  
    A.habby()
    A.habby.WayCall(obj2,1,2,3,4)
```
### 手写apply
```javascript
 function obj (age, name, ...args) {
      this.name= name
      this.age = age
      this.habby = function(...args){
        console.log(this.name, this.age, ...args)
      }
    }

    const A = new obj(18, 'way')

    let obj2 = {
      name:'kerwin',
      age: 32
    }

    Function.prototype.WapApply = function(obj, args){

      // apply 第二个参数应当为数组 不是数组就返回
      if(!(args instanceof Array)) return

      // obj是否为空 或者 未定义  否则就指向 window或宿主环境
      obj = obj? obj : globalThis
      obj.fn = this
      let result = obj.fn(...args)
      delete obj.fn
      return result
    }
```
### 手写bind
```javascript
function obj (age, name, ...args) {
      this.name= name
      this.age = age
      this.habby = function(...args){
        console.log(this.name, this.age, ...args)
      }
    }

    const A = new obj(18, 'way')

    let obj2 = {
      name:'kerwin',
      age: 32
    }

    Function.prototype.WayBind = function(obj, ...args){
      obj = obj? obj : globalThis
      obj.fn = this
      // delete obj.fn

      // 区别返回的是一个新函数 需要手动执行
      return (...params) => obj.fn(...args, ...params)
    }

    A.habby.bind(obj2,1,2,3,4)()
    A.habby.WayBind(obj2,1,2,3,4)()
```
