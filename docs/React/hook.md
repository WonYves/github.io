# hooks介绍
## 1、概念

Hook 这个单词的意思是"钩子"。 **React Hooks 的意思是，组件尽量写成纯函数，如果需要外部功能和副作用，就用钩子把外部代码"钩"进来。** React Hooks 就是那些钩子。 你需要什么功能，就使用什么钩子。React 默认提供了一些常用钩子，你也可以封装自己的钩子。所有的钩子都是为函数引入外部功能，所以 React 约定，钩子一律使用use前缀命名，便于识别。你要使用 xxx 功能，钩子就命名为 useXxx。注意hook是v16.8.0后，才新增的特性

## 2、为什么会出现hooks



### class component 学习成本高

我们在class component中要学习生命周期，React15、React16.3、React16.4到React17生命周期有了很多变化。生命周期在class组件中非常重要。但是太多的太多的生命周期难记，有些也不知道具体的场景麻烦。还有就是this指向的问题比如我们要写大量的bind函数来改变this的指向，当然也可以通过装饰器等其他方法改变，但是本质上来说还是要跟this打交道

```jsx
import React from "react";

export default class LearnClassComponent extends React.Component {
  componentWillMount() {
    /**
     * 发生在 render 函数之前，还没有挂载 Dom
     * 已被废弃
     */
  }

  static getDerivedStateFromProps(nextProps, state) {
    /**
     * 在调用 render方法之前调用，在初始化和后续更新都会被调用
     * 接收两个参数第一个参数为即将更新的 新的props
     * 第二个参数为老的state ,
     * 可以比较props 和 state来加一些限制条件，防止无用的state更新
     * 返回一个对象来更新 state, 如果返回 null 则不更新任何内容
     *
     * 注意：
     * getDerivedStateFromProps 是一个静态函数，
     *  不能使用this, 也就是只能作一些无副作用的操作
     *
     */
    return state;
  }

  componentDidMount() {
    /**
     * 在组件挂载后 (插入DOM树后) 立即调用，
      只会调用一次，在初始化后
     * 常用于
     * 发送网络请求等，并且可以在 此钩子函数里直接调用 setState()
     */
  }

  /**
   *
   * @param {*} nextProps 即将更新的 props 值
   * @param {*} nextState 即将跟新后的 state 值
   * @returns 返回true则更新false则不更新视图
   */
  shouldComponentUpdate(nextProps, nextState) {
    /**
     * 在组件更新之前调用，可以控制组件是否进行更新
     * 一般常用于优化性能
     * 注意：
     * 1、不建议在 shouldComponentUpdate()
     * 中进行深层比较或使用JSON.stringify()。这样非常影响效率，且会损害性能
     * 2、不要 shouldComponentUpdate 中调用 setState()，
     * 否则会导致无限循环调用更新、渲染，直至浏览器内存崩溃
     * 3、可以使用内置 PureComponent 组件替代
     *
     */
    return true;
  }

  /**
   *
   * @param {*} prevProps
   * @param {*} prevState
   * @return
   */
  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log(prevProps, prevState);
    /**
     *
     * 因为render和componentDidUpdate之间可能有延迟，所以用他来补足
     * 它可以使组件在 DOM 真正更新之前捕获一些信息（例如滚动位置），
     * 此生命周期返回的任何值都会作为参数传递给 componentDidUpdate()。
     * 如不需要传递任何值，那么请返回 null
     *
     */
    return null;
  }

  /**
   *
   * @param {*} prevProps 上一次的或者说老的props
   * @param {*} prevState 上一次的或者说老的state
   * @param {*} snapshot 这是getSnapshotBeforeUpdate这个生命周期返回的
   */
  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log("我是，componentDidUpdate", prevProps, prevState, snapshot);
    /**
     * 每次触发render后都会被调用
     * 注意：
     * 不要在这里使用this.setState()等改变视图的操作，会造成死循环
     */
  }

  componentWillUnmount() {
    /**
     * 在组件即将被卸载或销毁时进行调用
     * 可以用于取消网络请求、移除监听事件、清理 DOM 元素、清理定时器等操作
     */
  }

  /**
   * 方法是class组件中唯一必须实现的方法，用于渲染dom, render()方法必须返回reactDOM
   * @returns
   */
  render() {
    return (
      <div>
        <div>你好，react</div>
      </div>
    );
  }
}
```



### class component 逻辑代码分散

我们在学习代码的第一天，就应该知道高内聚、低耦合这六字箴言。设计组件也是一样的，我们应当考虑代码的高可复用性。然而在class组件中，我们实现一个功能，就不得不把相同业务的一些逻辑分散到各个生命周期中，就显得逻辑分散，比如我们设置一个定时器，就要考虑在合适的生命周期里面初始化定时器，以及销毁定时器等显的逻辑很分散

### react hooks 逻辑复用更加便捷

Class组件逻辑复用一般使用的都是**HOC**和**Render Props**。但这两者虽然都可以实现逻辑复用，但是并没有让组件和代码变得好用和优美起来，这二者都会存在的一个问题是，逻辑的复用会导致嵌套层级过深，形成嵌套地狱。使用class组件，表单组件、国际化、Redux等混在一块形成一长串的高阶组件的形式，就很恶心

## 3、hooks初探

以下代码完成一个简单的点击+1的功能

```jsx
// 引入对应的要使用的hooks
import React, { useState } from 'react';

// 导出一个函数
export default function MobileFooter() {
  // 使用引入的hooks定义一个状态，并暴露出初始状态，和修改状态的方法
  const [num, setNum] = useState(1)
  return (
    <div>
      {/* 每次点击+1 */}
      <button onClick={() => setNum(num + 1)}>+1</button>
      {/* 展示num的值 */}
      <div>{num}</div>
    </div>
  );
}
```

# useState
## 1、概念

返回一个 state，以及更新 state 的函数。
在初始渲染期间，返回的状态 (state) 与传入的第一个参数 (initialState) 值相同。
setState 函数用于更新 state。它接收一个新的 state 值并将组件的依次重新渲染加入队列。
可以简单理解为，如果要改变数据联动视图就要使用useState
注意：如果你的更新函数返回值与当前 state 完全相同，则随后的重渲染会被完全跳过。

## 2、基本写法

```jsx
import React, { useState } from 'react';
export default function hook() {

  // 这两个参数我们可以自定义名字，用的是数组结构的方法
  const [num, setNum] = useState(1)

  return (
    <div>
      <button onClick={() => setNum(num + 1)}>+1</button>
      <div>你好，react hook{num}</div>
    </div>
  );
}
```

## 3、进阶写法

如果你的初始值比较比较复杂，则可以直接传入一个函数进行计算，该函数只会在初始化的时候被调用一次，后续在使用setState更新的时候，不会在改变值，也就是说useState是惰性的

```jsx
import React, { useState } from 'react';
export default function hook() {
  const initNum = (i) => {
    return i + 1
  }

  // 这两个参数我们可以自定义名字，用的是数组结构的方法
  const [num, setNum] = useState(() => {
    console.log("只会在初始化的时候触发了")
    const initialState = initNum(1);
    return initialState;
  })

  const add = () => {
    // 改变数据不会再触发initNum
    setNum(num + 1)
  }


  return (
    <div>
      <button onClick={() => add()}>+1</button>
      <div>你好，react hook{num}</div>
    </div>
  );
}
```
# useEffect

## 1、概念

useEffect 可以让你在函数组件中执行副作用操作,接收两个参数，第一个参数是要执行的函数 callback，第二个参数是可选的依赖项数组 dependencies。其中依赖项是可选的，如果不指定，那么 callback 就会在每次函数组件执行完后都执行；如果指定了，那么只有依赖项中的值发生变化的时候，它才会执行。 简单来说就是当我们的依赖项发生发生变化的时候，可以**异步的**执行里面的回调。
**注意：**
useEffect是在render之后执行

```jsx
import React, { useState, useEffect } from 'react';
export default function hook() {

  const [num, setNum] = useState(1)

  /**
   * 第一个参数是回调函数
   * 第二个参数是依赖项
   * 每次num变化时都会变化
   * 
   * 注意初始化的时候，也会调用一次
   */
  useEffect(() => {
    console.log("每次num，改变我才会触发")
    
    return () => {
      /**
       * 这是卸载的回调可以执行某些操作
       * 如果不想执行，则可以什么都不写
       */
      console.log("卸载当前监听")
    }
  }, [num])

  useEffect(() => {
    console.log("每次render页面我就会触发")
    return () => {
      console.log("卸载当前监听")
    }
  })

  return (
    <div>
      <button onClick={() => setNum(num + 1)}>+1</button>
      <div>你好，react hook{num}</div>
    </div>
  );
}
```
# Immutable Data 不可变数据
## 1、概念

Immutable 意为「不可变的」。在编程领域，Immutable Data 是指一种一旦创建就不能更改的数据结构。它的理念是：在赋值时，产生一个与原对象完全一样的新对象，指向不同的内存地址，互不影响

## 2、作用

### 避免副作用

当我们需要对一个对象进行修改时，直接在原对象上进行变更很方便，也很节省内存。但是在 js 中，对象都是引用类型，在按引用传递数据的场景中，会存在多个变量指向同一个内存地址的情况，这样会引发不可控的副作用

```jsx
const a = { x: 1 };
const b = a;
b.x = 6;

a.x // 6
```

在一个复杂应用中，如果有多个代码块同时更改这个引用，就会产生竞态。你需要关心这个对象会在哪个地方被修改，你对它的修改会不会影响其他代码的运行。使用 Immutable Data 就不会产生这个问题——因为每当状态更新时，都会产生一个新的对象

```jsx
let a = { x: 1, y: 2 }; // 初始状态

a = { ...a, x: 6 }; // 创建了一个新的对象，更新了 a

// do something
```

### 状态可追溯

由于每次修改都会创建一个新对象，且对象不变，那么变更的记录就能够被保存下来，应用的状态变得可控、可追溯。Redux Dev Tool 和 Git 这两个能够实现「时间旅行」的工具就是秉承了 Immutable 的哲学

## 3、为什么 React 需要 Immutable Data

**简单来说为了让 React 精准地重渲染 UI**。我们知道，在 React 中，UI 是 state 的投影，state 的变更会引发 UI 的重新渲染。React 使用 Virtual DOM 来解决 UI 更新的问题——它会将新旧两棵 Virtual DOM 树进行比较，如果两者存在差异，则它会将这些差异来更新在真实的 DOM 上。
调用setState时，React 会以 shallowMerge（浅层合并） 的方式将我们传入的对象与旧的 state 进行合并。shallowMerge 只会合并新旧 state 对象中第一层的内容，如果 state 中对象的引用未变，那么 React 认为这个对象前后没有发生变化。所以如果我们以 mutable 的方式更改了 state 中的某个对象, React 会认为该对象并没有更新，那么相对应的 UI 就不会被重渲染。而以 Immutable 的方式更新 state 就不会出现这个问题

```jsx
import React, { useState } from "react";


export default function App() {
  const [list, setList] = useState([1, 2, 3]);

  const addMutable = () => {
    list.push("新数据");
    setList(list);
  };

  const addImmutable = () => {
    setList([...list, "新数据"]);
  };

  return (
    <div className="App">
      <button onClick={addMutable}>已可变的方式添加</button>
      <button onClick={addImmutable}>已不可变的方式添加</button>
      {list.map((item, index) => (<li key={index}>{item}</li>))}
    </div>
  );
}
```

## 4、优秀的开源库

redux / flux 要求采用返回新对象的形式，来触发数据更新、re-render，一般推荐的做法就是采用对象解构的方式。如果 state 对象巨大（注意：对象巨大），在结构、拷贝 state 的过程中，耗时会较长。

```jsx
return {
  ...state,
  settings: {
    ...state.settings,
    profile：{
      ...state.settings.profile,
      darkmode: true,
    }
  }
}
```

immutable-js、immer，我们着重了解一下immer

### immer（获过奖的创新型玩法）

[https://immerjs.github.io/immer/zh-CN/](https://immerjs.github.io/immer/zh-CN/)
**开源库实现思路：**原始对象先做了一层 Proxy 代理，得到 draftState 传递给 function。function（带副作用） 直接更改 draftState，最后 produce 返回新的对象
**安装**

```jsx
npm install immer
```

**使用**

```jsx
import React, { useState } from "react";
import produce from "immer";


export default function App() {
  const [list, setList] = useState([1, 2, 3]);

  const addMutable = () => {
    list.push("新数据");
    setList(list);
  };

  const addImmutable = () => {
    /**
     * 第一个参数是要代理的数据
     * 第二个参数是一个函数
     */
    const newVal = produce(list, draft => {
      /**
       * draft 相当于 list
       * 在这个方法里面，可以直接修改draft，注意draft也只能在这个方法里面修改
       * 不需要返回值，immer内部已经帮我处理好了
       */
      draft.push('新数据')
    })
    console.log(newVal)
    setList(newVal);
  };

  return (
    <div className="App">
      <button onClick={addMutable}>已可变的方式添加</button>
      <button onClick={addImmutable}>已不可变的方式添加</button>
      {list.map((item, index) => (<li key={index}>{item}</li>))}
    </div>
  );
}
```

# React hooks组件传值 - 父子组件传值
## 1、概念

一句话概括，react hook 父子组件之间通过props进行传值

## 2、父传子

父组件：在子组件标签上定义属性
子组件：函数组件接收一个props是一个对象，父组件传的属性名就是props对象的key，属性的值就是对应的value

```jsx

const Child = (props) => {
  // 父组件穿过来一个name
  return (
    <div>
      <div>{props.name}</div>
    </div>
  )
}


const Parent = () => {
  // 组件标签上传递属性
  return (
    <Child name='张三'></Child>
  )
}
```

## 3、子传父

一句话概括：在props上定义一个方法，调用方法的时候传入参数，达到传值的效果
父组件：在子组件标签上定义一个属性，属性值为一个方法

```jsx
import { useState } from "react";

const Child = (props) => {
  const toParent = () => {
    // 调用props上面的getChildData方法
    props.getChildData && props.getChildData("传给父组件");
  };

  return (
    <div>
      <button onClick={toParent}>往父组件传值</button>
    </div>
  );
};

const Parent = () => {

  // 点击子组件 就会触发这个函数
  const getChild = (msg) => {
    console.log(msg)
  }

  // 组件标签上传递属性,属性的值是一个函数
  return <Child getChildData={getChild}></Child>;
};
```
# React hooks组件传值 - useContext
### 1、概念

接收一个 context 对象（React.createContext 的返回值）并返回该 context 的当前值 。主要用来获取统一注入的上下文，跟之前的context一样，只不过是接收的时候更加方便

```jsx
import React, { useState, useRef, useContext } from 'react';

import MyContext from './context'

export default function hook() {

  const context = useContext(MyContext)

  return (
    <div>
      <div>哈喽--{context}</div>
    </div>
  );
}
```
# 高阶组件React.memo
## 1、概念

**React.memo 为高阶组件。**如果你的组件在相同 props 的情况下渲染相同的结果，那么你可以通过将其包装在 React.memo 中调用，以此通过记忆组件渲染结果的方式来提高组件的性能表现。这意味着在这种情况下，React 将跳过渲染组件的操作并直接复用最近一次渲染的结果。

```jsx
import React, { useState, useEffect, useContext } from 'react';

// 如果num不改变当前组件不会重新渲染
const MyComponent =  React.memo((props) => {
  /* 使用 props 渲染 */
  return (
    <div>{props.num}</div>
  )
})
export default function hook() {

  const [num, setNum] = useState(1)

  return (
    <div>
      <button onClick={() => setNum(num + 1)}>+1</button>
      <MyComponent num={num}></MyComponent>
    </div>
  )
}
```

## 2、特点

React.memo 仅检查 props 变更。如果函数组件被 React.memo 包裹，且其实现中拥有 useState，useReducer 或 useContext 的 Hook，当 state 或 context 发生变化时，它仍会重新渲染。

### 3、可接受第二个参数

默认情况下其只会对复杂对象做浅层对比，如果你想要控制对比过程，那么请将自定义的比较函数通过第二个参数传入来实现,第二个参数是一个函数，返回true不渲染，false渲染

```jsx
import React, { useState, useEffect, useContext } from 'react';


const MyComponent =  React.memo((props) => {
  /* 使用 props 渲染 */
  return (
    <div>{props.num}</div>
  )
  /**
   * prevProps 上次的值
   * nextProps 最新的值
   * 
   * 如果传来的值是偶数的话则不更新组件
   */
}, (prevProps, nextProps) => {
  console.log(nextProps, nextProps.num % 2)
  return nextProps.num % 2 === 0
})

export default function hook() {

  const [num, setNum] = useState(1)

  useEffect(() => {
    /**
     * 当它是一个空数组时，回调只会被触发一次，类似于 componentDidMount
     */
    console.log("componentDidmount")
  }, [])

  return (
    <div>
      <button onClick={() => setNum(num + 1)}>+1</button>
      <MyComponent num={num}></MyComponent>
    </div>
  )
}
```
# useCallback
## 1、概念

接收两个参数，第一个参数是个函数，第二个是依赖项。**返回一个memoized函数**，依赖项不变的情况下，memoizedCallback的**引用不变**。即：useCallback会被缓存，从而达到渲染性能优化的目的。

## 2、使用场景

```jsx
import React, { useState, useCallback } from "react";

// react.memo会做一层浅比较

/**
 * 因为我们每次触发render 都会重新执行一遍当前函数
 * 所以说，我们的方法会重新赋值，react.memo时进行浅比较
 * 重新赋值的方法和之前的方法，引用不一样，所以react.memo
 * 会认为是一个新的对象，所以会重新渲染
 */
const ChildComponent = React.memo((props) => {
  console.log("每次render都会触发吗？", props);
  return (
    <div>
      <div>你好我是子组件</div>
    </div>
  );
});

export default function LearnUseCallBack() {
  const [num, setNum] = useState(1);
  const [count, setCount] = useState(1);

  /**
   * useCallback 第一个参数是一个函数
   * 第二个参数是依赖项
   * 依赖项不变的情况下，函数的引用不变
   * 依赖项传空数组，那么函数会一直不变
   * 如果什么都不穿，那么会失效
   *
   * 引用地址变了后，函数不会调用，他只负责引用地址
   */
  const add = useCallback(() => {
    console.log("你好");
    setNum(num + 1);
  }, [count]);

  return (
    <div>
      <div>缓存函数</div>
      <button onClick={add}>num + 1</button>
      <button onClick={() => setCount(count + 1)}>count + 1</button>
      num ==> {num}
      count ==> {count}
      <ChildComponent add={add}></ChildComponent>
    </div>
  );
}
```

```jsx
import React, { useState, useCallback } from "react";

// react.memo会做一层浅比较

/**
 * 因为我们每次触发render 都会重新执行一遍当前函数
 * 所以说，我们的方法会重新赋值，react.memo时进行浅比较
 * 重新赋值的方法和之前的方法，引用不一样，所以react.memo
 * 会认为是一个新的对象，所以会重新渲染
 */
const ChildComponent = React.memo((props) => {
  console.log("每次render都会触发", props);
  return (
    <div>
      <div>你好我是子组件</div>
    </div>
  );
});

export default function LearnUseCallBack() {
  const [num, setNum] = useState(1);
  const [count, setCount] = useState(1);

  /**
   * useCallback 第一个参数是一个函数
   * 第二个参数是依赖项
   * 依赖项不变的情况下，函数的引用不变
   * 依赖项传空数组，那么函数会一直不变
   * 如果什么都不穿，那么会失效
   *
   * 引用地址变了后，函数不会调用，他只负责引用地址
   */
  const add = useCallback(() => {
    console.log("你好");
    setNum(num + 1);
  }, [count]);

  return (
    <div>
      <div>缓存函数</div>
      <button onClick={add}>num + 1</button>
      <button onClick={() => setCount(count + 1)}>count + 1</button>
      num ==> {num}
      count ==> {count}
      <ChildComponent add={add}></ChildComponent>
    </div>
  );
}
```
# React Hook 模仿生命周期
## 1、模仿componentDidMount

```jsx
import React, { useState, useEffect, useContext } from 'react';

export default function hook() {

  useEffect(() => {
    /**
     * 当它是一个空数组时，回调只会被触发一次，类似于 componentDidMount
     */
    console.log("componentDidmount")
  }, [])

 return (
   <div>
     <div>生命周期</div>
   </div>
 )
}
```

## 2、模仿shouldComponentUpdate

用React.memo就可以模仿shouldComponentUpdate的部分功能

```jsx
import React, { useState, useEffect, useContext } from 'react';


const MyComponent =  React.memo((props) => {
  /* 使用 props 渲染 */
  return (
    <div>{props.num}</div>
  )
  /**
   * prevProps 上次的值
   * nextProps 最新的值
   * 
   * 如果传来的值是偶数的话则不更新组件
   */
}, (prevProps, nextProps) => {
  console.log(nextProps, nextProps.num % 2)
  return nextProps.num % 2 === 0
})

export default function hook() {

  const [num, setNum] = useState(1)

  useEffect(() => {
    /**
     * 当它是一个空数组时，回调只会被触发一次，类似于 componentDidMount
     */
    console.log("componentDidmount")
  }, [])

  return (
    <div>
      <button onClick={() => setNum(num + 1)}>+1</button>
      <MyComponent num={num}></MyComponent>
    </div>
  )
}
```

## 3、模仿componentWillUnmount

```jsx
  useEffect(() => {
   
    return () => {
      console.log('componentWillUnmount')
    }
  }, [])
```

# useMemo
## 1、概念

接收两个参数，第一个参数是个函数，第二个是依赖项。**返回一个memoized值**，只有当它的某个依赖项改变时才重新计算 memoized 值，初始化的时候也会调用一次，这种优化有助于避免在每次渲染时都进行高开销的计算

```jsx
import React, { useState, useMemo } from 'react';

export default function hook() {

  const [count, setCount] = useState(1)
  const [total, setTotal] = useState(1)


  const memoizedValue = useMemo(() => {
    console.log("只有total变了我才会变")
    // 返回的值是total+1
    return total + 1
  }, [total]);


  return (
    <div>
      <button onClick={() => setCount(count + 1)}>count + 1</button>
      <button onClick={() => setTotal(total + 1)}>total + 1</button>
      <div>count is {count}</div>
      <div>total is {total}</div>
      <div>memoizedValue is {memoizedValue}</div>
    </div>
  )
}
```

## 2、useMemo和useCallback的区别

一句话来解释，useMemo是缓存值的，useCallback是缓存函数的
