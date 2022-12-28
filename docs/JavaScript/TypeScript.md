<a name="LUCCs"></a>
## 开始
创建一个文件夹后新创建一个文件 hello.ts<br />将ts文件编译为tsc
```shell
tsc hello.ts
```
ts和js文件保存后自动进行热更新
```shell
tsc --watch
```
初始化ts文件 生成tsconfig.json文件
```shell
tsc --init
```

<a name="oKS9B"></a>
### 基元类型
```typescript
let str:string = 'hello typescript'
let num:number = 100
let bool:boolean = true
```
布尔  字符串  数字
```json
"target": "es2016"  // 编译后js的版本
"strict": true   // 开启严格模式

"rootDir": "./src",
"outDir": "./dist", 
// 创建src文件夹 创建ts文件 tsc --watch后会自动在目录中生成dist
文件夹dist文件夹下是编译后的js文件
```
<a name="qW9ep"></a>
### 数组
```typescript
let arr:number[] = [1,2,3]
let arr2:Array<number> = [1,2,3]
```
<a name="VMgOd"></a>
### any
不希望某个特定值导致类型检查错误
```typescript
let obj:any = {
    x:  0
}

obj.foo()
obj()
obj.bar = 100
obj = 'hello'
const n : number = obj
```
加上any 就不会报错 因为不会检测obj的类型
<a name="ZYVnh"></a>
###  函数
```typescript
function greet(name:string){
    console.log('hello' + name.toUpperCase() + '!!')
}

greet('kerwin') 

// 有返回值无需类型注释
function getFavoriteNumber():number{
    return 88
}

// 上下文无需类型注释
const names = ['lei','xiao','tian']
names.forEach((s) => {
    console.log(s.toUpperCase());
})
```
<a name="Bts0J"></a>
### 对象类型
```typescript
function consCoord(pt:{x:number, y:number}){
    console.log('X轴为' + pt.x);
    console.log('y轴为' + pt.y);
}

consCoord({x:4,y:6})

function printName(obj:{first:string, last?:string}){
    console.log(obj.last?.toUpperCase());
}

printName({
    first:'weiss'
})

printName({
    first:'weiss',
    last:'Wang'
})
```
<a name="LWYfp"></a>
###   联合类型
```typescript
function printId(id:number|string){
    console.log(id.toUpperCase());
    
}

printId(12)
printId('12')
```
会报错 类型number 上不存在属性 toupperCase <br />使用判断来解决
```typescript
function printId(id:number|string|boolean){
    // console.log(id.toUpperCase());
    if(typeof id === 'string'){
        console.log(id.toUpperCase());
    } else {
        console.log(id);
    }
}

printId(12)
printId('12')
printId(false)
```
<a name="vcUQS"></a>
###  type  类型别名 
```typescript
type Point = {
 x: number,
 y: number 
}
function printCoord(pt: Point){

}
printCoord({
    x: 100,
    y: 200
})
```
<a name="yA50n"></a>
### 接口
使用 interface 关键字来声明接口   
```typescript
interface Typelog {
    x: number,
    y: string,
    handle(): void
}

let person1 : Typelog = {
    x: 100,
    y: 'kerwin',
    handle(){
        console.log(111)
    }
}

let person2 : Typelog = {
    x: 200,
    y: 'wiess',
    handle(){
        console.log(222)
    }
}
```
**interface 和 type的区别在于**<br />**1.接口只能为对象指定类型**<br />**2.类型别名不仅可以为对象指定类型 实际可以为任意类型指定别名**
<a name="rYC44"></a>
### 接口继承
使用关键字 extends
```typescript
interface Person1 {
    name: string,
    age: number,
    isBoy: boolean,
}

interface Person2 extends Person1 {
    brithday: Date
}

let people: Person2 = {
    name: 'lijint',
    age: 18,
    isBoy: true,
    brithday: new Date()
}
console.log(people);

/* {
  name: 'lijint',
  age: 18,
  isBoy: true,
  brithday: 2022-8-22T05:38:46.654Z
}
*/
```
<a name="knJu9"></a>
### 元组（Tuple）
元组是另外一种类型的数组 它确切地知道包含多少个元素 以及特定元素索引对应的类型
```typescript
let array:[number, string] = [112,'1122']
```
<a name="LBJOS"></a>
### 类型断言
```typescript
const myCavans = document.getElementById('main_cavans') as HTMLCanvasElement

const myCavans2 = <HTMLCanvasElement>document.getElementById('main_cavans')
```
<a name="p1vN5"></a>
### 字面量类型
```typescript
let str1 = 'hello ts'
const str2 = 'hello ts'

//  变量str1的类型为 string
//  变量str2的类型为 'hello ts'
```
 let是一个变量 所以可以是任意字符串 <br />const是一个常量 它的值不能变化 所以他的类型是 hello ts <br />字面量类型一般配合联合类型一起使用 表示一组明确的可选值列表
<a name="IzjF1"></a>
### 枚举类型
使用关键字 enum 关键字定义枚举<br />字面量+联合类型组合功能   定义一组命名常量 
```typescript
 enum Direction {
    Up, 
    Down, 
    Left, 
    Right
}

function changeDirection(direction: Direction){
    console.log(direction);
}

changeDirection(Direction.Up) // 直接通过 . 访问枚举中的成员
```
枚举成员是有值的 默认为 从0开始自增的数字 称为 数字枚举<br />当然也可以给枚举成员初始化值
```typescript
enum Direction {
    Up = 10, 
    Down, 
    Left, 
    Right
}
```
初始化后 后面的枚举值会在此基础上自增长 Down就是11 Left为12<br />**字符串枚举**
```typescript
enum Direction {
    Up = 'Up', 
    Down = 'Down', 
    Left = 'Left', 
    Right = 'Right'
}
```
字符串枚举没有自增长行为 所以字符串枚举每个成员必须有初始值
<a name="MCPYt"></a>
### typeof 类型操作符
```typescript
let p = {x:1, y:2}

function formatpoint(point: typeof p){}

formatpoint({x:10, y:20})

let num: typeof p.x
```
使用 typeof操作符来获取变量p的类型 <br />typeof出现在类型注解的位置  所处的环境就在类型上下文<br />typeof只能查询变量或者属性的类型 无法查询其他形式的类型 比如函数参数
<a name="KKcdd"></a>
### keyof 类型操作符
可以拿到对象中所有的键  
```typescript
// type Point = {
//   x:number, y: number
// }

// type P = keyof Point

// const p1:p = 'x'
// const p2:p = 'y' 

type Arrayish = {
	[n: number] : unknown
}

type A = keyof Arrayish
const a:A = 0 

type Mapish = {
  [k: string]: boolean
}
type M = keyof Mapish
const m1:M = 's'
const m2:M = 100
// const m3:M = true   //报错
```
<a name="S2vMf"></a>
## TypeScript高级类型
ts高级类型有很多 重点学习以下高级类型
```typescript
1.calss类
2.类型兼容性
3.交叉类型
4.泛型和keyof
5.索引签名类型 和 索引查询类型
6.映射类型
```
<a name="q1yrr"></a>
###  class类
```typescript
class Person {
    age!: number 
    gender = '男'

}

const peo = new Person()

peo.age
peo.gender
// peo变量的类型 为Person
```
<a name="TChlA"></a>
#### 构造函数
构造函数是实现实例属性的初始化的 不能有返回值类型
```typescript
class Persons {
    age: number
    gender: string

    constructor(age: number, gender: string){
        this.age = age 
        this.gender = gender
    }
}

const peo1 = new Persons(20, 'kerwin')

console.log(peo1.age, peo1.gender);

```
<a name="dYbCg"></a>
#### class实例方法
```typescript
class Piont{
    x=1
    y=2

    scale(n:number):void{
        this.x *=n
        this.y *=n
    }
}

const num1 = new Piont()
num1.scale(3)
console.log(num1.x, num1.y);

```
方法的类型注解与函数用法相同
<a name="L2fXz"></a>
#### class继承
类继承的两种方式 extends （继承父类） implements （实现接口）<br />js中只有extends  而implements是ts提供的 
```typescript
class Animal {
    move(){
        console.log('走两步');     
    }
}


class Dog extends Animal{
    bark(){
        console.log('汪');
    }
}


const d = new Dog()
d.move()
d.bark()
```
implements
```typescript
interface Onesing{
  sing():void
}

class TwoPerson implements Onesing{
  sing(){
    console.log('实现接口');
  }
}
```
TwoPerson实现接口Onesing意味着 Twoperon类中必须提供Onesing 接口中指定的所有方法和属性
<a name="P6aeU"></a>
#### 可见修饰符
public  ： 公开的 都可访问  默认值<br />protected  ：  受保护的 只能在子类访问 无法在实例对象访问<br />private ： 私有的 只能在当前类调用
```typescript
class Animal {
    private __run__(){
        console.log('走两步');     
    }
    protected move(){
        console.log('走两步');     
    }
}


class Dog extends Animal{
    bark(){
        console.log('汪');
    }
  this.__run__() // 找不到
  this.move()
}


const d = new Dog()
d.move() // 找不到
d.bark()
```
<a name="ysWjX"></a>
#### readonly只读修饰符
```typescript
class Person {
  readonly age: number = 18
  constructor(age: number){
    this.age = age
  }
}
```
字面意思 只能修饰属性不能修饰方法 只读的 用来防止构造函数之外对属性进行赋值
<a name="Oqwz5"></a>
### 交叉类型
 (&) 关键字连接  功能类似于接口继承(extends) 用于组合多个类型为一个类型 常用于对象类型
```typescript
interface Person1 {name: string}
interface Person2 {age: number}

type PersonDateil = Person1 & Person2

let obj:PersonDateil = {
  name:'sda ', 
  age: 9
}
```
交叉类型和接口继承的区别<br />有同名属性时 处理的方式不同
```typescript
interface A{
  fn(value: number) => string
}
interface B extends A{
  fn(value: string) => string
}
// extends 此时B会报错   

interface A{
  fn(value: number) => string
}
interface B{
  fn(value: string) => string
}
type C = A & B
fn:(value: string|number) => string
// 交叉类型 & 会组合在一起
```
<a name="tCYHf"></a>
### 泛型
泛型时可以保证类型安全前提下 让函数等与多种类型一起工作 从而实现服用 <br />常用语 ： 函数、接口、class 中  
<a name="LwhVB"></a>
#### 创建泛型函数 通过<类型变量> 尖括号 
```typescript
function fn<Type>(value: Type){
  return value
}
```
在声明函数的时候先指定一个随意类型变量的<br />将来在调用函数时再指定真正的变量类型
<a name="LpwLP"></a>
#### 调用泛型函数
```typescript
function fn<Type>(value: Type){
  return value
}

const num = fn<number>(3)
const str = fn<string>('aaa')
const bol = fn<boolean>(true)
```
<a name="q1Jbn"></a>
#### 简约调用泛型函数
```typescript
function fn2<Type>(value: Type){ return value }

let num1 = fn2(10)

// 如果用const的话 那么类型会变为值 
const num2 = fn2('str')
// const num2: "str"
```
<a name="hdjlh"></a>
#### 泛型约束
```typescript
function fn2<Type>(value: Type){
  console.log(value.length)  // 报错length属性不在Type上
  return value 
}
```
此时就需要添加约束来收缩类型
```typescript
// 1.指定更加具体的类型
function fn2<Type[]>(value: Type[]):Type[]{
  console.log(value.length) 
  return value 
}
```
只要是数组就一定会有length属性 这样就可以访问了
```typescript
// 2.添加约束  使用 extends 关键字
interface ILength { length : number }
function id<Type extends ILength>(value: Type ): Type {
  console.log(value.length)
  return value
}

id([1,2,3,4])
```
<a name="QC7w5"></a>
#### 多个泛型变量的情况
```typescript
function getProp<T,K extends keyof T>(obj:T, key:K){
  return obj[key]
}

getProp({name: 'kerwin', age: 22}, 'name')
getProp({name: 'kerwin', age: 22}, 'age')
```
keyof关键字接受一个对象类型 生成其键名称 的联合类型
<a name="nbiFs"></a>
#### 泛型接口
```typescript
interface IdFn<T>{
  id:(value: T) => T
  ids: () => T[]
}

let obj3: IdFn<number> = {
  id(value){
    return value
  },
  ids(){
    return [12,3,45]
  }
} 
```
<a name="IP47b"></a>
#### 泛型类
class可以配合泛型来使用<br />React的class组件的基类Component就是泛型类 不同的组件有不同的props和state
```tsx
interface IState { count: number }
interface IState { maxLength: number }
class InputCount extends React.Component<Iprop, IState>{
  state:Istate = {
    count: 0
  }
  render(){
    return <div>{this.props.maxLength}</div>
  }
}

// React.Component泛型类两个类型变量 分别指定props和state
```
创建泛型类
```typescript
class GenericNumber<NumType>{
  defaultValue: NumType
  add: (x: NumType, y: NumType) => NumType
}

const myNum = new GenericNumber<number>()
myNum.defaultValue = 10
```
<a name="smFW4"></a>
#### 泛型工具类型（Partial） 可选
Partial<>用来构造一个类型 将Type的所有属性设置为可选
```typescript
interface Props {
  id: string,
  children: number
}

type PartialProps = Partial<Props>

let p1: Props = {
  id: '1',
  children: 2
}
// 两个都要加

let p2: PartialProps = {
  
}
// 可以都不加
```
<a name="FUGkD"></a>
#### 泛型工具类型（Readonly） 只读
```typescript
interface Readonly {
  id: string,
  children: number[]
}

type ReadonlyProps = Readonly<Props>

let p3: ReadonlyProps = {
  id:'1',
  children: []
}

p3.id = '2'   //代码会报错 
```
当我们想重新给id赋值的时 就会报错 无法分配到id 因为是只读属性
<a name="h8HiV"></a>
#### 泛型工具类型（Pick）
Pick<Type, Keys>从Type中选择一组属性来构造类型<br />有两个类型变量， 1表示选择谁的属性 2表示选择哪几个属性
```typescript
interface Propsdd {
  id: string
  title: string
  children: number[]
}
type PickProps = Pick<Propsdd, 'id' | 'title'>

let p4:PickProps = {
  id: '222',
  title: 'Pick',
} 

```
构造出来的新类型PickProps 只有id和title两个属性类型
<a name="zS2li"></a>
#### 泛型工具类型（Record）
Record<Keys, Type>构造一个对象类型 属性键为Keys 属性类型为Type
```typescript
type RecordObj = Record<'a' | 'b' | 'c' , string[]>

type Obj = {
   a: string[],
   b: string[],
   c: string[],
}

// 以上两组代码效果相等

let obj4:RecordObj = {
  a: ['a'],
  b: ['b'],
  c: ['c']
} 
```
<a name="nf9AL"></a>
### 映射类型
基于旧类型创建新类型（对象类型） 减少重复代码
```typescript
type PropsKey = 'x' | 'y' | 'z'
type Type1 = {x: number, y: number, z: number}
// y 和 z重复书写了两次
type Type2 = { [Keys in PropsKey]: number }
// 通过这样的方式实现
// Key in PropsKey表示Key可以时PropKeys联合类型中的任意一个 
// 就像 for in  （let key in obj）
```
映射类型只能在类型别名中使用 不能在接口中使用
<a name="fbXCc"></a>
#### 映射 keyof
除了可以根据联合类型创建新类型 还可以根据对象类型创建
```typescript
type Propskeyof = { a:number, b:string, c:boolean }
type Type4 = { [key in keyof Propskeyof]: number }

// 首先执行keyof Props 获取到对象类型Props所有键 即 'a'|'b'|'c'
// 然后 Key in 就表示key可以是Props 中所有键的任意一个

```
<a name="JZ3ap"></a>
#### 索引查询类型
T[P]语法 在TS中叫做 索引查询类型 作用：用来查询属性的类型
```typescript
type Props = {a:number, b:string, c:boolean}
type TypeA = Props['a']
 
// Props['a']表示查询Props属性a对应的类型number
// 所以TypeA的类型为number


//同时查询多个类型
type TypeA = Props['a'|'b'|'c']
type TypeB = Props[keyof Props]
// keyof获取对应的所有键
```
<a name="QUNED"></a>
###  TypeScript的类型声明文件
用来为已存在的JS库提供类型信息<br />例如  index.d.ts 后缀名 为 .d.ts文件就是声明文件
<a name="TMB6g"></a>
#### TS中的两种文件类型

1.    .ts 文件 （代码实行文件）

包含类型信息又包含可执行的代码<br />可以编写js文件 并执行代码

2.    .d.ts 文件 （类型声明文件）

只能包含类型信息的类型声明文件<br />不会生成.js文件 仅仅提供类型信息
<a name="ALzm7"></a>
#### 类型文件的使用说明
使用已有的类型声明文件  <br />1.内置类型声明文件 <br />例如 数组的 forEach方法  通过ctrl+鼠标左键点击可以查看到类型声明文件的内容 vscode中会自动跳转 lib.es5.d.ts 类型声明文件中<br />window document BOM DOM API中都有相应的声明 （lib.dom.d.ts）<br />2.第三方库的类型声明文件<br />库自带类型声明文件 比如 axios<br />在导入的时候 TS会自动加载库自己的类型声明文件 <br />可以通过npm/yarn来下载仓库提供的TS类型声明包 这些包名的格式为@type/*   比如 @type/react 、 @type/lodash
<a name="mFxyd"></a>
#### 为已有的js文件提供类型声明
在导入.js文件时 TS会自动加载与.js同名的 .d.ts文件 以提供类型声明<br />通过 declare 关键字 来为已有的变量提供声明 而不是创建新的变量
```javascript
let count = 10
```
```typescript
declare let count:number
```

<a name="ZLi6J"></a>
### 在React中使用TypeScirpt
<a name="ImEDb"></a>
#### CRA创建React项目 
```shell
npx create-react-app  项目名称 --template typescript
#or
yarn create-react-app  项目名称 --template typescript
#or
npm init react-app my-app
```
src目录中增加了 react-app-env.d.ts React默认类型声明文件
```typescript
/// <reference types="react-scripts" />
```
三斜线指令 指定依赖的其他类型声明文件 types表示依赖的类型声明文件包含的名称 <br />解释： 告诉TS帮我加载 react-scripts 这个包提供的类型声明<br />react-scripts包含了两部分<br />1.react、react-dom、node 的类型<br />2.图片、样式等模块的类型 以允许在代码中导入图片、SVG等文件
<a name="AlLLw"></a>
#### tsconfig.json 常用配置
```json
{
  // 编译选项
  "compilerOptions": {
    // 生成代码的语言版本
    "target": "es5",
    // 指定要包含在编译中的library
    "lib": [
      "dom",
      "dom.iterable",
      "esnext"
    ],
    // 允许ts编译器编译js文件
    "allowJs": true,
    // 跳过声明文件的类型检查
    "skipLibCheck": true,
    // es模块互操作 屏蔽ESModule 和 CommonJS 之间的差异
    "esModuleInterop": true,
    // 允许通过 import x from 'y' 即使模块没有显式指定 default 导出
    "allowSyntheticDefaultImports": true,
    // 开启严格模式
    "strict": true,
    // 对文件名称强制区分大小写
    "forceConsistentCasingInFileNames": true,
    // 为 switch 语句启动错误报告
    "noFallthroughCasesInSwitch": true,
    // 生成代码的模块化标准
    "module": "esnext",
    // 模块解析策略
    "moduleResolution": "node",
    // 允许导入扩展名为 .json的模块
    "resolveJsonModule": true,
    // 是否将没有 import/export 的文件视为旧(全局而非模块化)脚本文件
    "isolatedModules": true,
    // 编译时不生成任何文件 只进行类型检查
    "noEmit": true,
    // 指定将jsx编译成什么形式
    "jsx": "react-jsx"
  },
  // 指定允许 ts 处理的目录
  "include": [
    "src"
  ]
}

```
<a name="FUOKE"></a>
#### React 中的常用类型
函数组件和属性类型和默认值
```tsx
import React from 'react';

interface Props{
  name:string
  age?:number
}
const Hello= ({name, age = 19}:Props) => {
  return (
    <div>我是{name},今年{age}岁</div>
  )
}

const App = () => {
  return(
    <div>
      <Hello name='kerwin'/>
    </div>
  )
}

export default App;

```
事件绑定和事件对象
```tsx
interface Props{
  name:string
  age?:number
}
const Hello= ({name, age = 19}:Props) => {

  let [count, setCount] = useState(0)

  const handleClick = (e:React.MouseEvent<HTMLButtonElement>) => {
    console.log('赞！')
    setCount(count+1)
  }

  const handleChange = (e:React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value);
  }

  return (
    <div>
      我是{name},今年{age}岁
      {count}
      <button onClick={handleClick}>+1</button>
      <input type="text" onChange={handleChange} />
    </div>

  )
}
```
