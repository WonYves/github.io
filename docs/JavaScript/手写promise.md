遵循promise+ 规范
先来个最简单的 .then的实现  
```javascript
// resolve 成功回调  reject失败回调
let request = new WayPromise((resolve, reject) => {
  // 异步执行rosolve
    setTimeout(() => {
      resolve('11')
    }, 1000)
  })

// res接收到的成功结果 err接收到的失败结果
  request.then(res => {
    console.log('success1',res)
  },err => {
    console.log('error1',err);
  })
// 执行两次 确保任务不丢失
  request.then(res => {
    console.log('success2',res)
  },err => {
    console.log('error2',err);
  })

```
在异步情况下的.then 
```javascript
// WayPromise构造函数 (executor) 接收器
function WayPromise(executor) {

  
  this.status = 'pending' // 状态
  this.result = undefined // 接收的结果
  this.callback = [] // .then中收集的回调函数
  let _this = this //调用promise时this指向为外部window

  function resolve(res) {
    // 确保pending改变后 无法再次改变的特性 直接返回
    if (_this.status !== 'pending')
      return

    // 设置成功状态和结果
    _this.status = 'fulfilled'
    _this.result = res

    // 调用在.then中收集好的数组回调
    _this.callback.forEach(item => {
      item.success && item.success(_this.result)
    })
  }
  function reject(err) {
     // 确保pending改变后 无法再次改变的特性 直接返回
    if (_this.status !== 'pending')
      return

    // 设置失败状态和结果
    _this.status = 'rejected'
    _this.result = err

    // 调用在.then中收集好的数组回调
    _this.callback.forEach(item => {
      item.error && item.error(_this.result)
    }) 
  }

  // 接收两个参数 (成功回调,失败回调)
  executor(resolve, reject)
}

// 在构造函数的原型上添加.then方法  接收两个参数 一个res 一个err
WayPromise.prototype.then = function (success, error) {
  // 成功的时候 确保参数为真 再执行 将成功的结果作为参数传递给外部行参
  if (this.status === 'fulfilled') {
    success && success(this.result)
  }
  // 失败的时候 确保参数为真 再执行 将失败的结果作为参数传递给外部行参
  if (this.status === 'rejected') {
    error && error(this.result)
  }
  /* 异步情况下函数执行到这里的时候肯定为pending因为resolve还没执行但是.then
  已经执行了 所以需要将成功和失败回调作为对象存储在数组中 resolve触发之后 再到
  resovle中再去调用 res 或者 err
  */
  if (this.status === 'pending') {
    this.callback.push({
      success,
      error
    })
  }
}

```
### .then 链式调用  .catch 实现 
```javascript
function WayPromise(executor) {

  this.status = 'pending'
  this.result = undefined
  this.callback = []
  let _this = this

  function resolve(res) {
    if (_this.status !== 'pending')
      return
    _this.status = 'fulfilled'
    _this.result = res

    _this.callback.forEach((item) => {
      item.successCallback && item.successCallback(_this.result)
    })
  }

  function reject(err) {
    if (_this.status !== 'pending')
      return
    _this.status = 'rejected'
    _this.result = err

    _this.callback.forEach((item) => {
      item.failCallback && item.failCallback(_this.result)
    })
  }
  executor(resolve, reject)
}

WayPromise.prototype.then = function (successCallback, failCallback) {

  if(!successCallback){
    successCallback = value => value
  }

  if(!failCallback){
    failCallback = error => error
  }

  return new WayPromise((resolve, reject) => {
    if (this.status === 'fulfilled') {
      let result = successCallback && successCallback(this.result)
      if (result instanceof WayPromise) {
        result.then(res => {
          resolve(res)
        }, err => {
          reject(err)
        })
      } else {
        resolve(result)
      }
    }
    if (this.status === 'rejected') {
      let result = failCallback && failCallback(this.result)
      if (result instanceof WayPromise) {
        result.then(res => {
          resolve(res)
        }, err => {
          reject(err)
        })
      } else {
        reject(result)
      }
    }
    if (this.status === 'pending') {
      this.callback.push({
        successCallback: () => {
          let result = successCallback(this.result)
          if (result instanceof WayPromise) {
            result.then(res => {
              resolve(res)
            }, err => {
              reject(err)
            })
          } else {
            resolve(result)
          }
        },
        failCallback: () => {
          let result = failCallback(this.result)
          if (result instanceof WayPromise) {
            result.then(res => {
              resolve(res)
            }, err => {
              reject(err)
            })
          } else {
            reject(result)
          }
        }
      })
    }
  })
}

WayPromise.prototype.catch = function(failCallback){
  this.then(undefined, failCallback)
}
```
可以发现上面有很多重复代码  将他们封装起来复用 显得不那么臃肿
```javascript
function WayPromise(executor) {

  this.status = 'pending'
  this.result = undefined
  this.callback = []
  let _this = this

  function resolve(res) {
    if (_this.status !== 'pending')
      return
    _this.status = 'fulfilled'
    _this.result = res

    _this.callback.forEach((item) => {
      item.successCallback && item.successCallback(_this.result)
    })
  }

  function reject(err) {
    if (_this.status !== 'pending')
      return
    _this.status = 'rejected'
    _this.result = err

    _this.callback.forEach((item) => {
      item.failCallback && item.failCallback(_this.result)
    })
  }
  executor(resolve, reject)
}

WayPromise.prototype.then = function (successCallback, failCallback) {
  if (!successCallback) {
    successCallback = value => value
  }
  if (!failCallback) {
    failCallback = error => error
  }
  return new WayPromise((resolve, reject) => {
    if (this.status === 'fulfilled') {
      handleCallback(successCallback(this.result), resolve, reject, resolve)
    }
    if (this.status === 'rejected') {
      handleCallback(failCallback(this.result), resolve, reject, reject)
    }
    if (this.status === 'pending') {
      this.callback.push({
        successCallback: () => {
          handleCallback(successCallback(this.result), resolve, reject, resolve)
        },
        failCallback: () => {
          handleCallback(failCallback(this.result), resolve, reject, reject)
        }
      })
    }
  })
}

WayPromise.prototype.catch = function (failCallback) {
  this.then(undefined, failCallback)
}

function handleCallback(result, resolve, reject, elseExec) {
  if (result instanceof WayPromise) {
    result.then(res => {
      resolve(res)
    }, err => {
      reject(err)
    })
  } else {
    elseExec(result)
  }
}
```
