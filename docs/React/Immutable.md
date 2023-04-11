```jsx

  // 引用复制 (浅拷贝，浅复制)
  let obj = {
    name : 'kerwin'
  }
  let obj2 = obj
  obj2.name = 'xiaoming'
  console.log(obj, obj2);

  // 比浅拷贝多一层的拷贝 (缺点 只能复制一层) 
  let myobj = {
    name : 'kerwin',
    arr: [1,2,3]
  }
  let myobj2 = {...myobj}
  myobj2.name = 'xiaoming'
  myobj2.arr.splice(1,1)
  console.log(myobj, myobj2);

  // JSON 深拷贝  (没办法序列化函数，会自动忽略undefined和symbol，无法处理循环引用，但是间接高效)
  // JSON-parse (字符串转换为对象结构)
  // JSON-stringify (将对象序列化转换为JSON格式字符串)
  let jsonobj = {
    name : 'kerwin',
    arr: [1,2,3]
  }
  let jsonobj2 = JSON.parse(JSON.stringify(jsonobj))
  jsonobj2.name = 'xiaoming'
  jsonobj2.arr.splice(1,1)
  console.log(jsonobj, jsonobj2)

   // deepcopy
  // 递归深拷贝 一层一层复制 (缺点 性能不好占用内存)
  let copyobj = {
    name: 'kerwin',
    color: ['yellow', 'pink', 'green'],
    age: 20,
    friend: {
      name: 'rayhomie'
    }
  }

  const deepcopy = (obj = {}) => {
    // 1.判断obj的类型 是否为对象 或者 obj的值是否为空
    if (typeof obj !== 'object' || obj == null) {
      return obj  // 2.满足以上条件就返回原来的obj
    }
    
 		//3.创建一个变量 
 		//4.判断obj的类型是否为数组 
    let result =  Array.isArray(obj) ? [...obj] : {...obj}
 		//5.是数组的话给result赋值为一个数组
 		//6.是不是数组的话给result赋值为一个对象
  

    // 7.循环遍历obj会沿着obj的原型链寻找所有的键值。
    for (let key in obj) {
      if (obj.hasOwnProperty(key)) { 
        // 9.对象原型上的数据不应该进行拷贝 所以使用hanOwnProperty把(key)传进去
        // 通过这样的方法就可以持续拷贝对象身上的属性
        result[key] = deepcopy(obj[key]) 
        // 8.将obj的键值循环赋值给新的变量result  再套一层深拷贝递归
        console.log(result);
      }
    }

    return result

  }

  let newCopyobj = deepcopy(copyobj)
  newCopyobj.name = 'xiaoming'
  newCopyobj.friend.name = 'wiess'
  console.log(newCopyobj, copyobj)
```

### 每次修改一个immutable对象都会创建一个新的不可变对象 在新对象上操作并不会影响到原对象的数据
它的实现原理是 使用旧数据的同时创建新的数据 要保证旧数据不变的情况下同时可用且不变
关键字
```jsx
import { fromJs } from 'immutable'

const obj =fromJs({
  name: 'kerwin'
  city: ['beijin', 'dalian', 'shanghai']
})
setIn(['name'], 'kerwin')
undateIn(['city'], (list) => {
  list.splice(index,1)
})
```
