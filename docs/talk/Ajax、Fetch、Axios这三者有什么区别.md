**这些名词的共同点：都用于发送网络请求。**

## 1.AJAX
它的全称是：Asynchronous JavaScript And XML，翻译过来就是“异步的 Javascript 和 XML”。
很多小伙伴可能会误以为 Ajax 是发请求的一种方式，或者把 XMLHttpRequest 与 Ajax 划等号，其实这是错误和片面的。
正解：
```javascript
Ajax 是一个技术统称，是一个概念模型，它囊括了很多技术，并不特指某一技术，
它很重要的特性之一就是让页面实现局部刷新。
```
特点：
```javascript
局部刷新页面，无需重载整个页面。
```
简单来说，Ajax 是一种思想，XMLHttpRequest 只是实现 Ajax 的一种方式。其中 XMLHttpRequest 模块就是实现 Ajax 的一种很好的方式，这也是很多面试官喜欢让面试者手撕的代码之一。

利用XMLHttpRequest 模块实现 AJAX
```javascript
<body>
  <script>
    function ajax(url) {										// 1.定义AJAX函数 参数为url地址
      const xhr = new XMLHttpRequest();     // 2.先创建一个新的XMLHttpRequest对象
      xhr.open("get", url, false);          // 3.通过对象.open方法定义请求方式请求地址同步异步
// 异步请求为true，同步请求为false；默认为true
      xhr.onreadystatechange = function () {// 4.异步回调函数 onreadystatechange
// 指定状态改变时所触发的事件处理器的属性
        if (xhr.readyState === 4) {   			// 5.获取请求状态的属性readyState
// 0  未初始化 1 正在加载 2 已加载 3  交互中 4  完成
          if (xhr.status === 200) {         // 6.返回服务器的HTTP状态吗的属性status
// 100继续发送请求 200请求已经成功 202请求被接受 400错误的请求 404文件未找到 500内部服务器错误
            console.info("响应结果", xhr.response) // 7.打印响应结果
          }
        }
      }
      xhr.send(null);                      // 8.向服务器发送请求的方法
    }
    ajax('https://smallpig.site/api/category/getCategory')  //9.调用ajax并传递url地址
  </script>
</body>
```
这里利用 XMLHttpRequest 模块实现了一个最简单的 get 网络请求。

![image.png](/3.png "接收响应结果")

我们使用这种方式实现网络请求时，如果请求内部又包含请求，以此循环，就会出现回调地狱，这也是一个诟病，后来才催生了更加优雅的请求方式。  
## 2.Fetch
Fetch 是在 ES6 出现的，它使用了 ES6 提出的 promise 对象。它是 XMLHttpRequest 的替代品。
很多人会把它与 Ajax 作比较，其实这是不对的，我们通常所说的 Ajax 是指使用 XMLHttpRequest 实现的 Ajax，所以真正应该和 XMLHttpRequest 作比较。
正解：
```javascript
Fetch 是一个 API，它是真实存在的，它是基于 promise 的。
```

 特点：
```javascript
使用 promise，不使用回调函数。
采用模块化设计，比如 rep、res 等对象分散开来，比较友好。
通过数据流对象处理数据，可以提高网站性能。
```
所以这里就和 Ajax 又很大不同了，一个是思想，一个是真实存在的 API，不过它们都是用来给网络请求服务的，我们一起来看看利用 Fetch 实现网络请求。
```javascript
<body>
  <script>
    function ajaxFetch(url) {       // 1.定义函数方法
      fetch(url)									  // 2.调用fetch并接收url参数
        .then(res => res.json())    // 3.将接收到的数据转为json格式
        .then(data => {             // 4.接收到JSON格式的正规数据 
        console.log(data)				    // 5.打印接收到的结果
      })
    }
    ajaxFetch('https://smallpig.site/api/category/getCategory')
  </script>
</body>
```
![image.png](/4.png "接收响应结果")
上段代码利用 Fetch 发送了一个最简单的 get 请求，其中最重要的特点之一就是采用了.then 链式调用的方式处理结果，这样不仅利于代码的可读，而且也解决了回调地狱的问题。

## 3.AXIOS
Axios 是随着 Vue 的兴起而被广泛使用的，目前来说，绝大多数的 Vue 项目中的网络请求都是利用 Axios 发起的。当然它并不是一个思想，或者一个原生 API，它是一个封装库。
正解：
```javascript
Axios 是一个基于 promise 封装的网络请求库，它是基于 XHR 进行二次封装。
```
特点：
```javascript
从浏览器中创建 XMLHttpRequests
从 node.js 创建 http 请求
支持 Promise API
拦截请求和响应
转换请求数据和响应数据
取消请求
自动转换 JSON 数据
客户端支持防御 XSRF
```
所以说，Axios 可以说是 XHR 的一个子集，而 XHR 又是 Ajax 的一个子集。既然说它是一个库，那么我们在使用的时候就需要引入它。
```javascript
// 发送 POST 请求
axios({
    method: 'post',     // 定义方法
    url: '/user/12345', // url地址
    data: {							// 传递的参数
        firstName: 'Fred',
        lastName: 'Flintstone'
    }
})
```
用一张图来作总结：
![image.png](/5.png)

三者做个对比

| Ajax | 一种技术统称，主要利用XHR实现网络请求 |
| --- | --- |
| Fetch | 具体API，基于promise，实现网络请求 |
| Axios | 一个封装库，基于XHR封装，较为推荐使用 |

