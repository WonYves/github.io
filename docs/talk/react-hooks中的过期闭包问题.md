## 1、闭包的基本概念

一个函数和对其周围状态（lexical environment，词法环境）的引用捆绑在一起（或者说函数被引用包围），这样的组合就是闭包（closure）。也就是说，闭包让你可以在一个内层函数中访问到其外层函数的作用域。在 JavaScript 中，每当创建一个函数，闭包就会在函数创建的同时被创建出来

```jsx
  function add(num) {
    let value = 0
    return () => {
      value += num
      console.log(value)
    }
  }
  const fun = add(10)
  
  // 后续调用不传
  fun() // 10
  fun() // 20
```

## 2、什么是过期闭包

在JS中，函数运行的上下文是由定义的位置决定的。当函数的闭包包住了旧的变量值时，就出现了过期闭包问题。

```jsx
 function createIncrement(i) {
    let value = 0
    function increment() {
      value += i
      console.log(value)
      const message = `我是下面的函数引用的 ${value}`
      /**
       * 因为每次logValue执行，都会产生一个闭包，会包住当时的value。
       * 闭包相当于记住函数的上下文
       * 
      */
      return function logValue() { // setState相当于logValue函数
        console.log(message)
      }
    }
    return increment
  }
  const inc = createIncrement(10)
  const log = inc() // 10，将当前的value值固定
  inc() // 20
  inc() // 30

  log() // "打印的还是老值，引用的是过期的变量"
```

## 3、react hook中的过时的闭包

### useEffect中过期闭包的表现

```jsx
import React, { useState, useEffect, useContext } from 'react';

export default function hook() {

  const [count, setCount] = useState(0)
  /**
   * 每次点击都会调用，没切都是原来的值
   */
  useEffect(() => {
    // 是一个过时的闭包
    setInterval(() => {
      console.log(count)
    }, 2000)
  }, [])

  return (
    <div>
      {count}
      <button onClick={() => setCount(count + 1)}> 加1 </button>
    </div>
  )
}
```

### useEffect解决方案

让useEffect()知道定时器的方法里面中的闭包依赖于count

```jsx
import React, { useState, useEffect, useContext } from 'react';

export default function hook() {

  const [count, setCount] = useState(0)
  /**
   * 每次点击都会调用，没切都是原来的值
   */
  useEffect(() => {
    // 是一个过时的闭包
    const ter = setInterval(() => {
      console.log(count)
    }, 2000)
    
    // 每次调用前先清空定时器，或者说重新创建
    return () => {
      clearInterval(ter)
    }
    
    // 这行是重点，count变化后重新渲染useEffect
  }, [count])

  return (
    <div>
      {count}
      <button onClick={() => setCount(count + 1)}> 加1 </button>
    </div>
  )
}
```

### useState过期闭包的表现

点击 +1 然后立即点击 +2，count 只更新到 1。这是因为 delay() 是一个过时的闭包

```jsx
import React, { useState, useEffect, useContext } from 'react';

export default function hook() {

  const [count, setCount] = useState(0);

  /**
   *
   * delay() 是一个过时的闭包，它使用在初始渲染期间捕获的过时的 count 变量
   */
  function add() {
    setTimeout(function delay() {
      setCount(count + 1);
    }, 1000);
  }

  const add2 = () => {
    setCount(count + 2)
  }

  return (
    <div>
      {count}
      <button onClick={() => add()}>+1  </button>
      <button onClick={() => add2()}>+2</button>
    </div>
  )
}
```

### useState解决方案

```jsx
import React, { useState, useEffect, useContext } from 'react';

export default function hook() {

  const [count, setCount] = useState(0);

  /**
   *
   * delay() 是一个过时的闭包，它使用在初始渲染期间捕获的过时的 count 变量
   */
  function add() {
    setTimeout(function delay() {
      setCount((a) => a + 1);
    }, 1000);
  }

  const add2 = () => {
    setCount(count + 2)
  }

  return (
    <div>
      {count}
      <button onClick={() => add()}>+1  </button>
      <button onClick={() => add2()}>+2</button>
    </div>
  )
}
```
