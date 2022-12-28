<a name="ukyAJ"></a>
# 一、什么是事件循环？
众所周知，JS是单线程语言，同步执行代码，如果遇到执行时间比较长的函数，就会阻塞代码的执行，因此有了**异步**来解决这个问题。<br />而**事件循环就是一个异步机制，也是执行消息队列的机制。**

1. JS主线程执行过程遇到异步任务，就会交给相应的浏览器异步线程去处理
2. 直到异步任务执行出结果，就往任务队列里面添加一个事件（回调函数）
3. 当执行栈中同步任务执行完毕（此时JS引擎空闲），就去查询任务队列，取出一个异步任务到主线程中执行
4. 重复该动作就是事件循环机制
<a name="vw3IT"></a>
# 二、任务队列
**如上图，任务队列存在多个，同一任务队列内，按队列顺序被主线程取走；**<br />**不同任务队列之间，存在着优先级，优先级高的优先获取（如用户I/O）；**
<a name="QVIAC"></a>
## 1、任务队列的类型
任务队列存在两种类型，一种为**microtask queue（微任务）**，另一种为**macrotask queue（宏任务）**。图中所列出的任务队列均为macrotask queue，而ES6 的 promise［ECMAScript标准］产生的任务队列为microtask queue。
<a name="wqYRU"></a>
## 2、宏任务
浏览器为了能够使得JS内部(macro)task与DOM任务能够有序的执行，**会在一个(macro)task执行结束后，在下一个(macro)task 执行开始前，对页面进行重新渲染**，流程如下：
```javascript
(macro)task->渲染->(macro)task->...
```
(macro)task主要包含：script(整体代码)、setTimeout、setInterval、I/O、UI交互事件、postMessage、MessageChannel、setImmediate(Node.js 环境)
<a name="wzrpL"></a>
## 3、微任务
microtask（又称为微任务），**可以理解是在当前 task 执行结束后立即执行的任务**。也就是说，在当前task任务后，下一个task之前，在渲染之前。<br />所以它的响应速度相比setTimeout（setTimeout是task）会更快，因为无需等渲染。也就是说，在某一个macrotask执行完后，就会将在它执行期间产生的所有microtask都执行完毕（在渲染前）。
```javascript
(macro)task->清空微任务(microtask)->渲染->(macro)task->...
```
microtask主要包含：Promise.then、MutaionObserver、process.nextTick(Node.js 环境) 、await后面的语句(相当于Promise.then里面的语句)
<a name="E2nhl"></a>
### 为什么要有微任务？
**为了在一个宏任务执行之后，浏览器渲染之前有执行任务的能力。减少渲染次数**<br />**宏任务遵循先进先出原则，微任务的出现就可以实现后到的任务优先执行**
<a name="Rk5ut"></a>
## 4、二者区别
microtask queue：唯一，整个事件循环当中，仅存在一个；执行为同步，同一个事件循环中的microtask会按队列顺序，串行执行完毕；<br />macrotask queue：不唯一，存在一定的优先级（用户I/O部分优先级更高）；异步执行，同一事件循环中，只执行一个。
<a name="dElVk"></a>
# 三、从线程的角度理解事件循环

1. **GUI渲染线程**对html进行解析
2. 当解析到script标签时，JS引擎读取JS代码，此时为同步环境，形成相应的堆和执行栈；
3. 主线程遇到异步任务，指给对应的异步线程进行处理（WEB API），但是事件队列就被区分为宏任务事件队列task queue，微任务事件队列microtask queue
4. 异步线程处理完毕（Ajax返回、DOM事件处罚、Timer到等），将相应的异步任务推入任务队列；
   1. 为dom元素，添加事件 => 通过**事件触发线程**，生成事件监听器（待确认）=> 监听器监听到了用户触发事件的行为之后，将回调函数，推入task queue中
   2. 解析到setTimeout或者setInterval定时器代码时 => 通过**定时器线程**，开启定时任务 => 定时器时间到达之后，会将回调函数推入task queue中
   3. 遇到ajax请求 => 通过**异步http请求线程**，发送http请求 => 服务端返回响应后，会将成功或者失败的回调函数推入task queue中
   4. 代码中使用了Promise或者async/await来处理异步 => 处理完成后 => 推入microtask queue中
5. 当js执行线程中的代码执行完成之后，**首先检查微任务队列头部是否有值**，如果存在则将其推入到JS执行栈中执行，直到微任务队列头部为空。（执行微任务过程中产生新的微任务同样会在这个阶段执行完，直到微任务队列为空，再执行下一个宏任务）
6. **如果宿主是浏览器，GUI渲染线程可能会重新渲染页面**
7. 然后检查宏任务队列头部是否有值，如果存在则将其推入到JS执行栈中执行，循环3456四个步骤，直到宏任务队列头部为空。
8. 当JS执行线程中的执行栈为空时，事件轮询机制会一直重复4-6这个循环
<a name="xIN3j"></a>
# 这里看一道案例
```javascript
console.log('script start');

async function async1() {
  await async2(); //（1）
  console.log('async1 start');
}

async function async2() {
  console.log('async2 end');
}

async1();

setTimeout(() => {
  console.log('setTimeout');
}, 0);

new Promise(resolve => {
  console.log('Promise1');
  resolve();
  console.log('Promise2');
}).then(console.log('then1')).then(() => {//（2）
  console.log('then2');
}); // 在清空微任务队列过程中如果有新的微任务加入，也要继续清空，再执行宏任务

console.log('script end');


//（3）
new Promise(resolve => {
  console.log('Promise1');
  resolve();
  console.log('Promise2');
}).then(() => {
  return Promise.reject('error')
  // return Promise.resolve('success')
}).then((res) => {
  console.log(res);
  console.log('then2');
}, (err) => {
  console.log(err);
  return 'then3'
}).then((res) => {
  console.log(res);
});

// 这一段就会输出Promise1，Promise2，error，then3
```
（1）这里调用async2 函数没有返回值，相当于返回 一个resolve undefined的 Promise，所以最后会输出下面的async1 start<br />（2）这里的 then1 会同步执行，then因为参数不是函数，就会用 value => value reason => { throw reason }替换 成功回调 和 失败回调，上面Promise是fulfilled状态，且没有resolve东西，value 就是 undefined，第一个then执行完就是返回一个fulfilled状态的Promise{undefined}<br />（3） then执行后返回的 Promise 的状态，会取决于回调函数的返回值，俗话说没有消息就是好消息，只要返回的不是抛出错误或者rejected状态的Promise，那就都是fulfilled状态，假如回调中抛出的是Promise，那么本次的then执行后返回的 Promise 的状态，就会取决于回调中返回的Promsie的状态举个例子：
