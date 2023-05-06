
### JavaScript 基础
#### 一. JavaScript基础

##### 1. JavaScript发展历史

```
	(1)借鉴C语言的基本语法
	(2)借鉴Java语言的数据类型和内存管理
	(3)借鉴Scheme语言，将函数提升到"第一等公民"(first class)的地位
	(4)借鉴Self语言，使用基于原型(prototype)的继承机制
```

##### 2. JavaScript的组成

```
1. ECMASCRIPT: 定义了javascript的语法规范,描述了语言的基本语法和数据类型
2. BOM (Browser Object Model): 浏览器对象模型
  - 有一套成熟的可以操作浏览器的 API，通过 BOM 可以操作浏览器。比如： 弹出框、浏览器跳转、获取分辨率等
3. DOM (Document Object Model): 文档对象模型
  - 有一套成熟的可以操作页面元素的 API，通过 DOM 可以操作页面中的元素。比如： 增加个 div，减少个 div，给 div 换个位置等
```

总结： **JS 就是通过固定的语法去操作 浏览器 和 标签结构 来实现网页上的各种效果**

##### 3 . JavaScript能干什么

```
1. 常见的网页效果【表单验证，轮播图。。。】
2. 与H5配合实现游戏【水果忍者： http://www.jq22.com/demo/html5-fruit-ninja/】
3. 实现应用级别的程序【http://naotu.baidu.com】
4. 实现图表统计效果【https://echarts.apache.org/examples/zh/】
5. js可以实现人工智能【面部识别】
6. 后端开发，app开发，桌面端开发......
```

##### 4. JavaScript代码的书写位置

- 和 `css` 一样，我们的 `js` 也可以有多种方式书写在页面上让其生效
- `js` 也有多种方式书写，分为 **行内式**， **内嵌式**，**外链式**

###### 4-1 行内式 JS 代码（不推荐）

- 写在标签上的 js 代码需要依靠事件（行为）来触发

```html
<!-- 写在 a 标签的 href 属性上 -->
<a href="javascript:alert('我是一个弹出层');">点击一下试试</a>

<!-- 写在其他元素上 -->
<div onclick="alert('我是一个弹出层')">点一下试试看</div>

<!--
	注：onclick 是一个事件（点击事件），当点击元素的时候执行后面的 js 代码
-->
```

###### 4-2 内嵌式 JS 代码

- 内嵌式的 js 代码会在页面打开的时候直接触发

```html
<!-- 在 html 页面书写一个 script 标签，标签内部书写 js 代码 -->
<script type="text/javascript">
	alert('我是一个弹出层')
</script>

<!--
	注：script 标签可以放在 head 里面也可以放在 body 里面
-->
```

###### 4-3 外链式 JS 代码（推荐）

- 外链式 js 代码只要引入了 html 页面，就会在页面打开的时候直接触发
- 新建一个 `.js` 后缀的文件，在文件内书写 `js` 代码，把写好的 `js` 文件引入 `html` 页面

```javascript
// 我是 index.js 文件
alert('我是一个弹出层')
```

```html
<!-- 我是一个 html 文件 -->

<!-- 通过 script 标签的 src 属性，把写好的 js 文件引入页面 -->
<script src="index.js"></script>

<!-- 一个页面可以引入多个 js 文件 -->
<script src="index1.js"></script>
<script src="index2.js"></script>
<script src="index3.js"></script>
```

##### 5. JS 中的注释

- 学习一个语言，先学习一个语言的注释，因为注释是给我们自己看的，也是给开发人员看的
- 写好一个注释，有利于我们以后阅读代码

###### 5-1 单行注释

- 一般就是用来描述下面一行代码的作用
- 可以直接写两个 `/` ，也可以按 `ctrl + /`

```javascript
// 我是一个单行注释

// 下面代码表示在浏览器里面出现一个弹出层
alert('我是一个弹出层')
```

###### 5-2 多行注释

- 一般用来写一大段话，或者注释一段代码
- 可以直接写 `/**/` 然后在两个星号中间写注释 
   - 各个编辑器的快捷键不一样，`vscode` 是 `alt + shift + a`

```javascript
/*
	我是一个多行注释
*/

/*
	注释的代码不会执行
	alert('我是一个弹出层')
	alert('我是一个弹出层')
*/
alert('我是一个弹出层')
```

##### 6. 变量（重点）

- 变量指的是在程序中保存数据的一个容器
- 变量是计算机内存中存储数据的标识符，根据变量名称可以获取到内存中存储的数据
- 也就是说，我们向内存中存储了一个数据，然后要给这个数据起一个名字，为了是我们以后再次找到他
- 语法： `var 变量名 = 值`

###### 6-1 定义变量及赋值

```javascript
// 定义一个变量
var num;

// 给一个变量赋值
num = 100;

// 定义一个变量的同时给其赋值
var num2 = 200;
```

- 注意： 
   1. 一个变量名只能存储一个值
   2. 当再次给一个变量赋值的时候，前面一次的值就没有了
   3. 变量名称区分大小写（`JS` 严格区分大小写）

###### 6-2 变量的命名规则和命名规范

-  规则： 必须遵守的，不遵守就是错 
> 1. 一个变量名称可以由 **数字**、**字母**、**英文下划线（_）**、**美元符号（$）** 组成
> 2. 严格区分大小写
> 3. 不能由数字开头
> 4. 不能是 **保留字** 或者 **关键字**
> 5. 不要出现空格

 

-  规范： 建议遵守的（开发者默认），不遵守不会报错 
> 1. 变量名尽量有意义（语义化）
> 2. 遵循驼峰命名规则，由多个单词组成的时候，从第二个单词开始首字母大写
> 3. 不要使用中文

 

###### 6-3 数据类型（重点）

- 是指我们存储在内存中的数据的类型
- 我们通常分为两大类 **基本数据类型** 和 **复杂数据类型**

**基本数据类型**

1. 数值类型（number） 
   - 一切数字都是数值类型（包括二进制，十进制，十六进制等）
   - `NaN`（not a number），一个非数字
2. 字符串类型（string） 
   - 被引号包裹的所有内容（可以是单引号也可以是双引号）
3. 布尔类型（boolean） 
   - 只有两个（`true` 或者 `false`）
4. null类型（null） 
   - 只有一个，就是 `null`，表示空的意思
5. undefined类型（undefined） 
   - 只有一个，就是 `undefined`，表示没有值的意思

**判断数据类型**

- 既然已经把数据分开了类型，那么我们就要知道我们存储的数据是一个什么类型的数据
- 使用 `typeof` 关键字来进行判断

```javascript
// 第一种使用方式
var n1 = 100;
console.log(typeof n1);

// 第二种使用方式
var s1 = 'abcdefg';
console.log(typeof(s1));
```

##### 7. 数据类型转换

- 数据类型之间的转换，比如数字转成字符串，字符串转成布尔，布尔转成数字等

###### 7.1 其他数据类型转成数值

1.  `Number(变量)` 
> 可以把一个变量强制转换成数值类型
>  
> 可以转换小数，会保留小数
>  
> 可以转换布尔值
>  
> 遇到不可转换的都会返回 `NaN`

 

2.  `parseInt(变量)` 
> 从第一位开始检查，是数字就转换，知道一个不是数字的内容
>  
> 开头就不是数字，那么直接返回 `NaN`
>  
> 不认识小数点，只能保留整数

 

3.  `parseFloat(变量)` 
> 从第一位开始检查，是数字就转换，知道一个不是数字的内容
>  
> 开头就不是数字，那么直接返回 `NaN`
>  
> 认识一次小数点

 

4.  除了加法以外的数学运算 
> 运算符两边都是可运算数字才行
>  
> 如果运算符任何一遍不是一个可运算数字，那么就会返回 `NaN`
>  
> 加法不可以用

 

###### 7.2 其他数据类型转成字符串

1.  `变量.toString()` 
> 有一些数据类型不能使用 `toString()` 方法，比如 `undefined` 和 `null`

 

2.  `String(变量)` 
> 所有数据类型都可以

 

3.  使用加法运算 
> 在 JS 里面，`+` 由两个含义
>  
> 字符串拼接： 只要 `+` 任意一边是字符串，就会进行字符串拼接
>  
> 加法运算：只有 `+` 两边都是数字的时候，才会进行数学运算

 

###### 7.3 其他数据类型转成布尔

1.  `Boolean(变量)` 
> 在 js 中，只有 `''`、`0`、`null`、`undefined`、`NaN`，这些是 `false`
>  
> 其余都是 `true`

 

##### 8. 运算符

- 就是在代码里面进行运算的时候使用的符号，不光只是数学运算，我们在 `js` 里面还有很多的运算方式

###### 8-1 数学运算符

1.  `+` 
> 只有符号两边都是数字的时候才会进行加法运算
>  
> 只要符号任意一边是字符串类型，就会进行字符串拼接

 

2.  `-` 
> 会执行减法运算
>  
> 会自动把两边都转换成数字进行运算

 

3.  `*` 
> 会执行乘法运算
>  
> 会自动把两边都转换成数字进行运算

 

4.  `/` 
> 会执行除法运算
>  
> 会自动把两边都转换成数字进行运算

 

5.  `%` 
> 会执行取余运算
>  
> 会自动把两边都转换成数字进行运算

 

###### 8-2 赋值运算符

1.  `=` 
> 就是把 `=` 右边的赋值给等号左边的变量名
>  
> `var num = 100`
>  
> 就是把 100 赋值给 num 变量
>  
> 那么 num 变量的值就是 100

 

2.  `+=` 
>  
> `a += 10` 等价于 `a = a + 10`

```javascript
var a = 10;
a += 10;
console.log(a); //=> 20
```
 

3.  `-=` 
> var a = 10;
>  
>  
> `a -= 10` 等价于 `a = a - 10`

```javascript
a -= 10;
console.log(a); //=> 0
```
 

4.  `*=` 
>  
> `a *= 10` 等价于 `a = a * 10`

```javascript
var a = 10;
a *= 10;
console.log(a); //=> 100
```
 

5.  `/+` 
>  
> `a /= 10` 等价于 `a = a / 10`

```javascript
var a = 10;
a /= 10;
console.log(a); //=> 1
```
 

6.  `%=` 
>  
> `a %= 10` 等价于 `a = a % 10`

```javascript
var a = 10;
a %= 10;
console.log(a); //=> 0
```
 

###### 8-3 比较运算符

1.  `==` 
   -  比较符号两边的值是否相等，不管数据类型 
> `1 == '1'`
>  
> 两个的值是一样的，所以得到 `true`

 

2.  `===` 
   -  比较符号两边的值和数据类型是否都相等 
> `1 === '1'`
>  
> 两个值虽然一样，但是因为数据类型不一样，所以得到 `false`

 

3.  `!=` 
   -  比较符号两边的值是否不等 
> `1 != '1'`
>  
> 因为两边的值是相等的，所以比较他们不等的时候得到 `false`

 

4.  `!==` 
   -  比较符号两边的数据类型和值是否不等 
> `1 !== '1'`
>  
> 因为两边的数据类型确实不一样，所以得到 `true`

 

5.  `>=` 
   -  比较左边的值是否 **大于或等于** 右边的值 
> `1 >= 1`  结果是 `true`
>  
> `1 >= 0`  结果是 `true`
>  
> `1 >= 2`  结果是 `false`

 

6.  `<=` 
   -  比较左边的值是否 **小于或等于** 右边的值 
> `1 <= 2`  结果是 `true`
>  
> `1 <= 1`  结果是 `true`
>  
> `1 <= 0`  结果是 `false`

 

7.  `>` 
   -  比较左边的值是否 **大于** 右边的值 
> `1 > 0`  结果是 `true`
>  
> `1 > 1`  结果是 `false`
>  
> `1 > 2`  结果是 `false`

 

8.  `<` 
   -  比较左边的值是否 **小于** 右边的值 
> `1 < 2`  结果是 `true`
>  
> `1 < 1`  结果是 `false`
>  
> `1 < 0`  结果是 `false`

 

###### 8-4 逻辑运算符

1.  `&&` 
   -  进行 且 的运算 
> 符号左边必须为 `true` 并且右边也是 `true`，才会返回 `true`
>  
> 只要有一边不是 `true`，那么就会返回 `false`
>  
> `true && true`  结果是 `true`
>  
> `true && false`  结果是 `false`
>  
> `false && true`  结果是 `false`
>  
> `false && false`  结果是 `false`

 

2.  `||` 
   -  进行 或 的运算 
> 符号的左边为 `true` 或者右边为 `true`，都会返回 `true`
>  
> 只有两边都是 `false` 的时候才会返回 `false`
>  
> `true || true`  结果是 `true`
>  
> `true || false`  结果是 `true`
>  
> `false || true`  结果是 `true`
>  
> `false || false`  结果是 `false`

 

3.  `!` 
   -  进行 取反 运算 
> 本身是 `true` 的，会变成 `false`
>  
> 本身是 `false` 的，会变成 `true`
>  
> `!true`  结果是 `false`
>  
> `!false`  结果是 `true`

 

###### 8-5 自增自减运算符

1.  `++` 
   -  进行自增运算 
   -  分成两种，**前置++** 和 **后置++** 
   -  前置++，会先把值自动 +1，在返回 
```javascript
var a = 10;
console.log(++a);
// 会返回 11，并且把 a 的值变成 11
```
 

   -  后置++，会先把值返回，在自动+1 
```javascript
var a = 10;
console.log(a++);
// 会返回 10，然后把 a 的值变成 11
```
 

2.  `--` 
   - 进行自减运算
   - 分成两种，**前置--** 和 **后置--**
   - 和 `++` 运算符道理一样

##### 9. 三元运算符

-  三元运算，就是用 **两个符号** 组成一个语句 
-  语法： `条件 ? 条件为 true 的时候执行 : 条件为 false 的时候执行` 
```javascript
var age = 18;
age >= 18 ? alert('已经成年') : alert('没有成年')
```
 

##### 10. 分支结构

- 我们的 `js` 代码都是顺序执行的（从上到下）
- 逻辑分支就是根据我们设定好的条件来决定要不要执行某些代码

###### 10-1 IF 条件分支结构（重点）

**if 语句**

-  通过一个 `if` 语句来决定代码是否执行 
-  语法： `if (条件) { 要执行的代码 }` 
-  通过 `()` 里面的条件是否成立来决定 `{}` 里面的代码是否执行 
```javascript
// 条件为 true 的时候执行 {} 里面的代码
if (true) {
  alert('因为条件是 true，我会执行')
}

// 条件为 false 的时候不执行 {} 里面的代码
if (false) {
	alert('因为条件是 false，我不会执行')    
}
```
 

**if else 语句**

-  通过 `if` 条件来决定，执行哪一个 `{}` 里面的代码 
-  语法： `if (条件) { 条件为 true 的时候执行 } else { 条件为 false 的时候执行 }` 
-  两个 `{}` 内的代码一定有一个会执行 
```javascript
// 条件为 true 的时候，会执行 if 后面的 {} 
if (true) {
  alert('因为条件是 true，我会执行')
} else {
  alert('因为条件是 true，我不会执行')
}

// 条件为 false 的时候，会执行 else 后面的 {}
if (false) {
  alert('因为条件为 false，我不会执行')
} else {
  alert('因为条件为 false，我会执行')
}
```
 

**if else if ... 语句**

-  可以通过 `if` 和 `else if` 来设置多个条件进行判断 
-  语法：`if (条件1) { 条件1为 true 的时候执行 } else if (条件2) { 条件2为 true 的时候执行 }` 
-  会从头开始依次判断条件 
   - 如果第一个条件为 `true` 了，那么就会执行后面的 `{}` 里面的内容
   - 如果第一个条件为 `false`，那么就会判断第二个条件，依次类推
-  多个 `{}` ，只会有一个被执行，一旦有一个条件为 `true` 了，后面的就不在判断了 
```javascript
// 第一个条件为 true，第二个条件为 false，最终会打印 “我是代码段1”
if (true) {
  	alert('我是代码段1')
} else if (false) {
	alert('我是代码段2')           
}

// 第一个条件为 true，第二个条件为 true，最终会打印 “我是代码段1”
// 因为只要前面有一个条件满足了，就不会继续判断了
if (true) {
  	alert('我是代码段1')
} else if (true) {
  	alert('我是代码段2')
}

// 第一个条件为 false，第二个条件为 true，最终会打印 “我是代码段2”
// 只有前一个条件为 false 的时候才会继续向后判断
if (false) {
  	alert('我是代码段1')
} else if (true) {
  	alert('我是代码段2')
}

// 第一个条件为 false，第二个条件为 false，最终什么也不会发生
// 因为当所有条件都为 false 的时候，两个 {} 里面的代码都不会执行
if (false) {
  	alert('我是代码段1')
} else if (false) {
  	alert('我是代码段2')
}
```
 

**if else if … else 语句**

-  和之前的 `if else if ...` 基本一致，只不过是在所有条件都不满足的时候，执行最后 `else` 后面的 `{}` 
```javascript
// 第一个条件为 false，第二个条件为 false，最终会打印 “我是代码段3”
// 只有前面所有的条件都不满足的时候会执行 else 后面的 {} 里面的代码
// 只要前面有一个条件满足了，那么后面的就都不会执行了
if (false) {
  	alert('我是代码段1')
} else if (false) {
  	alert('我是代码段2')
} else {
  	alert('我是代码段3')
}
```
 

###### 10-2 SWITCH 条件分支结构（重点）

-  也是条件判断语句的一种 
-  是对于某一个变量的判断 
-  语法： 
```javascript
switch (要判断的变量) {
  case 情况1:
    情况1要执行的代码
    break
  case 情况2:
    情况2要执行的代码
    break
  case 情况3:
    情况3要执行的代码
    break
  default:
    上述情况都不满足的时候执行的代码
}
```
 

   - 要判断某一个变量 **等于** 某一个值得时候使用
-  例子🌰： 根据变量给出的数字显示是星期几 
```javascript
var week = 1
switch (week) {
  case 1:
    alert('星期一')
    break
  case 2:
    alert('星期二')
    break
  case 3:
    alert('星期三')
    break
  case 4:
    alert('星期四')
    break
  case 5:
    alert('星期五')
    break
  case 6:
    alert('星期六')
    break
  case 7:
    alert('星期日')
    break
  default:
    alert('请输入一个 1 ～ 7 之间的数字')
}
```
 

##### 11. 循环结构（重点）

- 循环结构，就是根据某些给出的条件，重复的执行同一段代码
- 循环必须要有某些固定的内容组成 
   1. 初始化
   2. 条件判断
   3. 要执行的代码
   4. 自身改变

###### 11-1 WHILE 循环

-  `while`，中文叫 当…时，其实就是当条件满足时就执行代码，一旦不满足了就不执行了 
-  语法 `while (条件) { 满足条件就执行 }` 
-  因为满足条件就执行，所以我们写的时候一定要注意，就是设定一个边界值，不然就一直循环下去了 
```javascript
// 1. 初始化条件
var num = 0;
// 2. 条件判断
while (num < 10) {
  // 3. 要执行的代码
  console.log('当前的 num 的值是 ' + num)
  // 4. 自身改变
  num = num + 1
}
```
 

   - 如果没有自身改变，那么就会一直循环不停了

###### 11-2 DO WHILE 循环

-  是一个和 `while` 循环类似的循环 
-  `while` 会先进行条件判断，满足就执行，不满足直接就不执行了 
-  但是 `do while` 循环是，先不管条件，先执行一回，然后在开始进行条件判断 
-  语法： `do { 要执行的代码 } while (条件)` 
```javascript
// 下面这个代码，条件一开始就不满足，但是依旧会执行一次 do 后面 {} 内部的代码
var num = 10
do {
  console.log('我执行了一次')
  num = num + 1
} while (num < 10)
```
 

###### 11-3 FOR 循环

-  和 `while` 和 `do while` 循环都不太一样的一种循环结构 
-  道理是和其他两种一样的，都是循环执行代码的 
-  语法： `for (var i = 0; i < 10; i++) { 要执行的代码 }` 
```javascript
// 把初始化，条件判断，自身改变，写在了一起
for (var i = 1; i <= 10; i++) {
  // 这里写的是要执行的代码
  console.log(i)
}

// 控制台会依次输出 1 ~ 10
```
 

-  这个只是看起来不太舒服，但是用起来比较好用 

###### 11-4 BREAK 终止循环

-  在循环没有进行完毕的时候，因为我设置的条件满足，提前终止循环 
-  比如：我要吃五个包子，吃到三个的时候，不能在吃了，我就停止吃包子这个事情 
-  要终止循环，就可以直接使用 `break` 关键字 
```javascript
for (var i = 1; i <= 5; i++) {
  // 没循环一次，吃一个包子
  console.log('我吃了一个包子')
  // 当 i 的值为 3 的时候，条件为 true，执行 {} 里面的代码终止循环
  // 循环就不会继续向下执行了，也就没有 4 和 5 了
  if (i === 3) {
    break
  }
}
```
 

###### 11-5 CONTINUE 结束本次循环

-  在循环中，把循环的本次跳过去，继续执行后续的循环 
-  比如：吃五个包子，到第三个的时候，第三个掉地下了，不吃了，跳过第三个，继续吃第四个和第五个 
-  跳过本次循环，就可以使用 `continue` 关键字 
```javascript
for (var i = 1; i <= 5; i++) {
  // 当 i 的值为 3 的时候，执行 {} 里面的代码
  // {} 里面有 continue，那么本次循环后面的代码就都不执行了
  // 自动算作 i 为 3 的这一次结束了，去继续执行 i = 4 的那次循环了
  if (i === 3) {
    console.log('这个是第三个包子，掉地下了，我不吃了')
    continue
  }
  console.log('我吃了一个包子')
}
```
 

![](%E7%AC%94%E8%AE%B0.assets/image-20220516112555912.png#crop=0&crop=0&crop=1&crop=1&id=pIRE6&originalType=binary&ratio=1&rotation=0&showTitle=false&status=done&style=none&title=)

##### 12 函数的概念

-  对于 `js` 来说，函数就是把任意一段代码放在一个 **盒子** 里面 
-  在我想要让这段代码执行的时候，直接执行这个 **盒子** 里面的代码就行 
-  先看一段代码 
```javascript
// 这个是我们以前写的一段代码
for (var i = 0; i < 10; i++) {
  console.log(i)
}

// 函数，这个 {} 就是那个 “盒子”
function fn() {
  // 这个函数我们以前写的代码
  for (var i = 0; i < 10; i++) {
    console.log(i)
  }
}
```
 

###### 12-1 函数定义阶段

-  定义阶段就是我们把代码 **放在盒子里面** 
-  我们就要学习怎么 **放进去**，也就是书写一个函数 
-  我们有两种定义方式 **声明式** 和 **赋值式** 

**声明式**

-  使用 `function` 这个关键字来声明一个函数 
-  语法： 
```javascript
function fn() {
  // 一段代码
}
// function: 声明函数的关键字，表示接下来是一个函数了
// fn: 函数的名字，我们自己定义的（遵循变量名的命名规则和命名规范）
// (): 必须写，是用来放参数的位置（一会我们再聊）
// {}: 就是我们用来放一段代码的位置（也就是我们刚才说的 “盒子”）
```
 

**赋值式**

-  其实就是和我们使用 `var` 关键字是一个道理了 
-  首先使用 `var` 定义一个变量，把一个函数当作值直接赋值给这个变量就可以了 
-  语法： 
```javascript
var fn = function () {
  // 一段代码
}
// 不需要在 function 后面书写函数的名字了，因为在前面已经有了
```
 

###### 12-2 函数调用阶段

- 就是让 **盒子里面** 的代码执行一下
- 让函数执行
- 两种定义函数的方式不同，但是调用函数的方式都以一样的

**调用一个函数**

-  函数调用就是直接写 `函数名()` 就可以了 
```javascript
// 声明式函数
function fn() {
  console.log('我是 fn 函数')
}

// 调用函数
fn()

// 赋值式函数
var fn2 = function () {
  console.log('我是 fn2 函数')
}

// 调用函数
fn()
```
 

   - 注意： **定义完一个函数以后，如果没有函数调用，那么写在 {} 里面的代码没有意义，只有调用以后才会执行**

###### 12-3 调用上的区别

-  虽然两种定义方式的调用都是一样的，但是还是有一些区别的 
-  声明式函数： 调用可以在 **定义之前或者定义之后** 
```javascript
// 可以调用
fn()

// 声明式函数
function fn() {
  console.log('我是 fn 函数')
}

// 可以调用
fn()
```
 

-  赋值式函数： 调用只能在 **定义之后** 
```javascript
// 会报错
fn()

// 赋值式函数
var fn = function () {
  console.log('我是 fn 函数')
}

// 可以调用
fn()
```
 

###### 12-4 函数的参数

-  我们在定义函数和调用函数的时候都出现过 `()` 
-  现在我们就来说一下这个 `()` 的作用 
-  就是用来放参数的位置 
-  参数分为两种 **行参** 和 **实参** 
```javascript
// 声明式
function fn(行参写在这里) {
  // 一段代码
}

fn(实参写在这里)

// 赋值式函数
var fn = function (行参写在这里) {
  // 一段代码
}
fn(实参写在这里)
```
 

**行参和实参的作用**

1.  行参 
   -  就是在函数内部可以使用的变量，在函数外部不能使用 
   -  每写一个单词，就相当于在函数内部定义了一个可以使用的变量（遵循变量名的命名规则和命名规范） 
   -  多个单词之间以 `,` 分隔 
```javascript
// 书写一个参数
function fn(num) {
  // 在函数内部就可以使用 num 这个变量
}

var fn1 = function (num) {
	// 在函数内部就可以使用 num 这个变量
}

// 书写两个参数
function fun(num1, num2) {
  // 在函数内部就可以使用 num1 和 num2 这两个变量
}

var fun1 = function (num1, num2) {
  // 在函数内部就可以使用 num1 和 num2 这两个变量
}
```
 

   -  如果只有行参的话，那么在函数内部使用的值个变量是没有值的，也就是 `undefined` 
   -  **行参的值是在函数调用的时候由实参决定的** 
2.  实参 
   -  在函数调用的时候给行参赋值的 
   -  也就是说，在调用的时候是给一个实际的内容的 
```javascript
function fn(num) {
  // 函数内部可以使用 num 
}

// 这个函数的本次调用，书写的实参是 100
// 那么本次调用的时候函数内部的 num 就是 100
fn(100) 

// 这个函数的本次调用，书写的实参是 200
// 那么本次调用的时候函数内部的 num 就是 200
fn(200)
```
 

   -  **函数内部的行参的值，由函数调用的时候传递的实参决定** 
   -  **多个参数的时候，是按照顺序一一对应的** 
```javascript
function fn(num1, num2) {
  // 函数内部可以使用 num1 和 num2
}

// 函数本次调用的时候，书写的参数是 100 和 200
// 那么本次调用的时候，函数内部的 num1 就是 100，num2 就是 200
fn(100, 200)
```
 

**参数个数的关系**

1.  行参比实参少 
   -  因为是按照顺序一一对应的 
   -  行参少就会拿不到实参给的值，所以在函数内部就没有办法用到这个值 
```javascript
function fn(num1, num2) {
  // 函数内部可以使用 num1 和 num2
}

// 本次调用的时候，传递了两个实参，100 200 和 300
// 100 对应了 num1，200 对应了 num2，300 没有对应的变量
// 所以在函数内部就没有办法依靠变量来使用 300 这个值
fn(100, 200, 300)
```
 

2.  行参比实参多 
   -  因为是按照顺序一一对应的 
   -  所以多出来的行参就是没有值的，就是 `undefined` 
```javascript
function fn(num1, num2, num3) {
  // 函数内部可以使用 num1 num2 和 num3
}

// 本次调用的时候，传递了两个实参，100 和 200
// 就分别对应了 num1 和 num2
// 而 num3 没有实参和其对应，那么 num3 的值就是 undefined
fn(100, 200)
```
 

###### 12-5 函数的return

- `return` 返回的意思，其实就是给函数一个 **返回值** 和 **终断函数**

**返回值**

-  函数调用本身也是一个表达式，表达式就应该有一个值出现 
-  现在的函数执行完毕之后，是不会有结果出现的 
```javascript
// 比如 1 + 2 是一个表达式，那么 这个表达式的结果就是 3
console.log(1 + 2) // 3

function fn() {
  // 执行代码
}

// fn() 也是一个表达式，这个表达式就没有结果出现
console.log(fn()) // undefined
```
 

-  `return` 关键字就是可以给函数执行完毕一个结果 
```javascript
function fn() {
  // 执行代码
  return 100
}

// 此时，fn() 这个表达式执行完毕之后就有结果出现了
console.log(fn()) // 100
```
 

   - 我们可以在函数内部使用 `return` 关键把任何内容当作这个函数运行后的结果

**终断函数**

-  当我开始执行函数以后，函数内部的代码就会从上到下的依次执行 
-  必须要等到函数内的代码执行完毕 
-  而 `return` 关键字就是可以在函数中间的位置停掉，让后面的代码不在继续执行 
```javascript
function fn() {
  console.log(1)
  console.log(2)
  console.log(3)
  
  // 写了 return 以后，后面的 4 和 5 就不会继续执行了
  return
  console.log(4)
  console.log(5)
}

// 函数调用
fn()
```
 

###### 12-6 预解析（重点）

- **预解析** 其实就是聊聊 `js` 代码的编译和执行
- `js` 是一个解释型语言，就是在代码执行之前，先对代码进行通读和解释，然后在执行代码
- 也就是说，我们的 `js` 代码在运行的时候，会经历两个环节 **解释代码** 和 **执行代码**

**解释代码**

-  因为是在所有代码执行之前进行解释，所以叫做 **预解析（预解释）** 
-  需要解释的内容有两个 
   - 声明式函数 
      - 在内存中先声明有一个变量名是函数名，并且这个名字代表的内容是一个函数
   - `var` 关键字 
      - 在内存中先声明有一个变量名
-  看下面一段代码 
```javascript
fn()
console.log(num)

function fn() {
  console.log('我是 fn 函数')
}

var num = 100
```
 

-  经过预解析之后可以变形为 
```javascript
function fn() {
  console.log('我是 fn 函数')
}
var num

fn()
console.log(num)
num = 100
```
 

-  赋值式函数会按照 `var` 关键字的规则进行预解析 

###### 12-7 作用域

- 什么是作用域，就是一个变量可以生效的范围
- 变量不是在所有地方都可以使用的，而这个变量的使用范围就是作用域

**全局作用域**

-  全局作用域是最大的作用域 
-  在全局作用域中定义的变量可以在任何地方使用 
-  页面打开的时候，浏览器会自动给我们生成一个全局作用域 `window` 
-  这个作用域会一直存在，直到页面关闭就销毁了 
```javascript
// 下面两个变量都是存在在全局作用域下面的，都是可以在任意地方使用的
var num = 100
var num2 = 200
```
 

**局部作用域**

-  局部作用域就是在全局作用域下面有开辟出来的一个相对小一些的作用域 
-  在局部作用域中定义的变量只能在这个局部作用域内部使用 
-  **在 **`**JS**`** 中只有函数能生成一个局部作用域，别的都不行** 
-  每一个函数，都是一个局部作用域 
```javascript
// 这个 num 是一个全局作用域下的变量 在任何地方都可以使用
var num = 100

function fn() {
  // 下面这个变量就是一个 fn 局部作用域内部的变量
  // 只能在 fn 函数内部使用
  var num2 = 200
}

fn()
```
 

###### 12-8 变量使用规则

- 有了作用域以后，变量就有了使用范围，也就有了使用规则
- 变量使用规则分为两种，**访问规则** 和 **赋值规则**

**访问规则**

-  当我想获取一个变量的值的时候，我们管这个行为叫做 **访问** 
-  获取变量的规则： 
   - 首先，在自己的作用域内部查找，如果有，就直接拿来使用
   - 如果没有，就去上一级作用域查找，如果有，就拿来使用
   - 如果没有，就继续去上一级作用域查找，依次类推
   - 如果一直到全局作用域都没有这个变量，那么就会直接报错（该变量 is not defined）
```javascript
var num = 100

function fn() {
  var num2 = 200
  
  function fun() {
    var num3 = 300
    
    console.log(num3) // 自己作用域内有，拿过来用
    console.log(num2) // 自己作用域内没有，就去上一级，就是 fn 的作用域里面找，发现有，拿过来用
    console.log(num) // 自己这没有，去上一级 fn 那里也没有，再上一级到全局作用域，发现有，直接用
    console.log(a) // 自己没有，一级一级找上去到全局都没有，就会报错
  }
  
  fun()
}

fn()
```

-  变量的访问规则 也叫做 作用域的查找机制 
-  作用域的查找机制只能是向上找，不能向下找 
```javascript
function fn() {
  var num = 100
}
fn()

console.log(num) // 发现自己作用域没有，自己就是全局作用域，没有再上一级了，直接报错
```
 

**赋值规则**

-  当你想给一个变量赋值的时候，那么就先要找到这个变量，在给他赋值 
-  变量赋值规则： 
   - 先在自己作用域内部查找，有就直接赋值
   - 没有就去上一级作用域内部查找，有就直接赋值
   - 还没有再去上一级作用域查找，有就直接赋值
   - 如果一直找到全局作用域都没有，那么就把这个变量定义为全局变量，再给他赋值
```javascript
function fn() {
  num = 100
}
fn()

// fn 调用以后，要给 num 赋值
// 查看自己的作用域内部没有 num 变量
// 就会向上一级查找
// 上一级就是全局作用域，发现依旧没有
// 那么就会把 num 定义为全局的变量，并为其赋值
// 所以 fn() 以后，全局就有了一个变量叫做 num 并且值是 100
console.log(num) // 100
```

##### 13. 对象

-  对象是一个复杂数据类型 
-  其实说是复杂，但是没有很复杂，只不过是存储了一些基本数据类型的一个集合 
```javascript
var obj = {
  num: 100,
  str: 'hello world',
  boo: true
}
```
 

-  这里的 `{}` 和函数中的 `{}` 不一样 
-  函数里面的是写代码的，而对象里面是写一些数据的 
-  **对象就是一个键值对的集合** 
-  `{}` 里面的每一个键都是一个成员 
-  也就是说，我们可以把一些数据放在一个对象里面，那么他们就互不干扰了 
-  其实就是我们准备一个房子，把我们想要的数据放进去，然后把房子的地址给到变量名，当我们需要某一个数据的时候，就可以根据变量名里面存储的地址找到对应的房子，然后去房子里面找到对应的数据 

###### 13-1 创建对象

-  字面量的方式创建一个对象 
```javascript
// 创建一个空对象
var obj = {}

// 像对象中添加成员
obj.name = 'Jack'
obj.age = 18
```
 

-  内置构造函数的方式创建对象 
```javascript
// 创建一个空对象
var obj = new Object()

// 向对象中添加成员
obj.name = 'Rose'
obj.age = 20
```
 

   - `Object` 是 `js` 内置给我们的构造函数，用于创建一个对象使用的

###### 13-2 数据类型之间存储的区别

- 既然我们区分了基本数据类型和复杂数据类型
- 那么他们之间就一定会存在一些区别
- 他们最大的区别就是在存储上的区别
- 我们的存储空间分成两种 **栈** 和 **堆**
- 栈： 主要存储基本数据类型的内容
- 堆： 主要存储复杂数据类型的内容

**基本数据类型在内存中的存储情况**

- `var num = 100`，在内存中的存储情况
- 直接在 **栈空间** 内有存储一个数据

**复杂数据类型在内存中的存储情况**

-  下面这个 对象 的存储 
```javascript
var obj = {
  name: 'Jack',
  age: 18,
  gender: '男'
}
```
 

-  复杂数据类型的存储 
   1. 在堆里面开辟一个存储空间
   2. 把数据存储到存储空间内
   3. 把存储空间的地址赋值给栈里面的变量
-  这就是数据类型之间存储的区别 

**数据类型之间的比较**

-  基本数据类型是 **值** 之间的比较 
```javascript
var num = 1
var str = '1'

console.log(num == str) // true
```
 

-  复杂数据类型是 **地址** 之间的比较 
```javascript
var obj = { name: 'Jack' }
var obj2 = { name: 'Jack' }

console.log(obj == obj2) // false
```
 

   - 因为我们创建了两个对象，那么就会在 堆空间 里面开辟两个存储空间存储数据（两个地址）
   - 虽然存储的内容是一样的，那么也是两个存储空间，两个地址
   - 复杂数据类型之间就是地址的比较，所以 `obj` 和 `obj2` 两个变量的地址不一样
   - 所以我们得到的就是 `false`

##### 14. 数组

-  什么是数组？ 
-  字面理解就是 **数字的组合** 
-  其实不太准确，准确的来说数组是一个 **数据的集合** 
-  也就是我们把一些数据放在一个盒子里面，按照顺序排好 
```javascript
[1, 2, 3, 'hello', true, false]
```
 

-  这个东西就是一个数组，存储着一些数据的集合 

**数据类型分类**

-  `number` / `string` / `boolean` / `undefined` / `null` / `object` / `function`  /  `array` / ... 
-  数组也是数据类型中的一种 
-  我们简单的把所有数据类型分为两个大类 **基本数据类型** 和 **复杂数据类型** 
-  基本数据类型： `number` / `string` / `boolean` / `undefined` / `null` 
-  复杂数据类型： `object` / `function`  /  `array` / ... 

###### 14-1 创建一个数组

- 数组就是一个 `[]`
- 在 `[]` 里面存储着各种各样的数据，按照顺序依次排好

**字面量创建一个数组**

-  直接使用 `[]` 的方式创建一个数组 
```javascript
// 创建一个空数组
var arr1 = []

// 创建一个有内容的数组
var arr2 = [1, 2, 3]
```
 

**内置构造函数创建数组**

-  使用 `js` 的内置构造函数 `Array` 创建一个数组 
```javascript
// 创建一个空数组
var arr1 = new Array()

// 创建一个长度为 10 的数组
var arr2 = new Array(10)

// 创建一个有内容的数组
var arr3 = new Array(1, 2, 3)
```
 

###### 14-2 数组的 length

-  `length`:  长度的意思 
-  `length` 就是表示数组的长度，数组里面有多少个成员，`length` 就是多少 
```javascript
// 创建一个数组
var arr = [1, 2, 3]

console.log(arr.length) // 3
```
 

###### 14-3 数组的索引

-  索引，也叫做下标，是指一个数据在数组里面排在第几个的位置 
-  注意： **在所有的语言里面，索引都是从 0 开始的** 
-  在 `js` 里面也一样，数组的索引从 0 开始 
```javascript
// 创建一个数组
var arr = ['hello', 'world']
```
 

-  上面这个数组中，**第 0 个** 数据就是字符串 `hello`，**第 1 个** 数据就是字符串 `world` 
-  想获取数组中的第几个就使用 `数组[索引]` 来获取 
```javascript
var arr = ['hello', 'world']

console.log(arr[0]) // hello
console.log(arr[1]) // world
```
 

###### 14-4 数组的排序

- 排序，就是把一个乱序的数组，通过我们的处理，让他变成一个有序的数组

**冒泡排序**

![](%E7%AC%94%E8%AE%B0.assets/%E5%86%92%E6%B3%A1.gif#crop=0&crop=0&crop=1&crop=1&id=aBGxw&originalType=binary&ratio=1&rotation=0&showTitle=false&status=done&style=none&title=)

-  先遍历数组，让挨着的两个进行比较，如果前一个比后一个大，那么就把两个换个位置 
-  数组遍历一遍以后，那么最后一个数字就是最大的那个了 
-  然后进行第二遍的遍历，还是按照之前的规则，第二大的数字就会跑到倒数第二的位置 
-  以此类推，最后就会按照顺序把数组排好了 
   1.  我们先来准备一个乱序的数组 
```javascript
var arr = [3, 1, 5, 6, 4, 9, 7, 2, 8]
```
 

      - 接下来我们就会用代码让数组排序
   2.  先不着急循环，先来看数组里面内容换个位置 
```javascript
// 假定我现在要让数组中的第 0 项和第 1 项换个位置
// 需要借助第三个变量
var tmp = arr[0]
arr[0] = arr[1]
arr[1] = tmp
```
 

   3.  第一次遍历数组，把最大的放到最后面去 
```javascript
for (var i = 0; i < arr.length; i++) {
  // 判断，如果数组中的当前一个比后一个大，那么两个交换一下位置
  if (arr[i] > arr[i + 1]) {
    var tmp = arr[i]
    arr[i] = arr[i + 1]
    arr[i + 1] = tmp
  }
}

// 遍历完毕以后，数组就会变成 [3, 1, 5, 6, 4, 7, 2, 8, 9]
```
 

      - 第一次结束以后，数组中的最后一个，就会是最大的那个数字
      - 然后我们把上面的这段代码执行多次。数组有多少项就执行多少次
   4.  按照数组的长度来遍历多少次 
```javascript
for (var j = 0; j < arr.length; j++) {
  for (var i = 0; i < arr.length; i++) {
    // 判断，如果数组中的当前一个比后一个大，那么两个交换一下位置
    if (arr[i] > arr[i + 1]) {
      var tmp = arr[i]
      arr[i] = arr[i + 1]
      arr[i + 1] = tmp
    }
  }
}

// 结束以后，数组就排序好了
```
 

   5.  给一些优化 
      -  想象一个问题，假设数组长度是 9，第八次排完以后 
      -  后面八个数字已经按照顺序排列好了，剩下的那个最小的一定是在最前面 
      -  那么第九次就已经没有意义了，因为最小的已经在最前面了，不会再有任何换位置出现了 
      -  那么我们第九次遍历就不需要了，所以我们可以减少一次 
```javascript
for (var j = 0; j < arr.length - 1; j++) {
  for (var i = 0; i < arr.length; i++) {
    // 判断，如果数组中的当前一个比后一个大，那么两个交换一下位置
    if (arr[i] > arr[i + 1]) {
      var tmp = arr[i]
      arr[i] = arr[i + 1]
      arr[i + 1] = tmp
    }
  }
}
```
 

      -  第二个问题，第一次的时候，已经把最大的数字放在最后面了 
      -  那么第二次的时候，其实倒数第二个和最后一个就不用比了 
      -  因为我们就是要把倒数第二大的放在倒数第二的位置，即使比较了，也不会换位置 
      -  第三次就要倒数第三个数字就不用再和后两个比较了 
      -  以此类推，那么其实每次遍历的时候，就遍历 `当前次数 - 1` 次 
```javascript
for (var j = 0; j < arr.length - 1; j++) {
  for (var i = 0; i < arr.length - 1 - j; i++) {
    // 判断，如果数组中的当前一个比后一个大，那么两个交换一下位置
    if (arr[i] > arr[i + 1]) {
      var tmp = arr[i]
      arr[i] = arr[i + 1]
      arr[i + 1] = tmp
    }
  }
}
```
 

   6.  至此，一个冒泡排序就完成了 

**选择排序**

![](%E7%AC%94%E8%AE%B0.assets/%E9%80%89%E6%8B%A9.gif#crop=0&crop=0&crop=1&crop=1&id=dhOc1&originalType=binary&ratio=1&rotation=0&showTitle=false&status=done&style=none&title=)

-  先假定数组中的第 0 个就是最小的数字的索引 
-  然后遍历数组，只要有一个数字比我小，那么就替换之前记录的索引 
-  知道数组遍历结束后，就能找到最小的那个索引，然后让最小的索引换到第 0 个的位置 
-  再来第二趟遍历，假定第 1 个是最小的数字的索引 
-  在遍历一次数组，找到比我小的那个数字的索引 
-  遍历结束后换个位置 
-  依次类推，也可以把数组排序好 
   1.  准备一个数组 
```javascript
var arr = [3, 1, 5, 6, 4, 9, 7, 2, 8]
```
 

   2.  假定数组中的第 0 个是最小数字的索引 
```javascript
var minIndex = 0
```
 

   3.  遍历数组，判断，只要数字比我小，那么就替换掉原先记录的索引 
```javascript
var minIndex = 0
for (var i = 0; i < arr.length; i++) {
  if (arr[i] < arr[minIndex]) {
    minIndex = i
  }
}

// 遍历结束后找到最小的索引
// 让第 minIndex 个和第 0 个交换
var tmp = arr[minIndex]
arr[minIndex] = arr[0]
arr[0] = tmp
```
 

   4.  按照数组的长度重复执行上面的代码 
```javascript
for (var j = 0; j < arr.length; j++) {
  // 因为第一遍的时候假定第 0 个，第二遍的时候假定第 1 个
  // 所以我们要假定第 j 个就行
  var minIndex = j
  
  // 因为之前已经把最小的放在最前面了，后面的循环就不需要判断前面的了
  // 直接从 j + 1 开始
  for (var i = j + 1; i < arr.length; i++) {
    if (arr[i] < arr[minIndex]) {
      minIndex = i
    }
  }

  // 遍历结束后找到最小的索引
  // 第一堂的时候是和第 0 个交换，第二趟的时候是和第 1 个交换
  // 我们直接和第 j 个交换就行
  var tmp = arr[minIndex]
  arr[minIndex] = arr[j]
  arr[j] = tmp
}
```
 

   5.  一些优化 
      -  和之前一样，倒数第二次排序完毕以后，就已经排好了，最后一次没有必要了 
```javascript
for (var j = 0; j < arr.length - 1; j++) {
  var minIndex = j
  
  for (var i = j + 1; i < arr.length; i++) {
    if (arr[i] < arr[minIndex]) {
      minIndex = i
    }
  }

  var tmp = arr[minIndex]
  arr[minIndex] = arr[j]
  arr[j] = tmp
}
```
 

      -  在交换变量之前，可以判断一下，如果我们遍历后得到的索引和当前的索引一直 
      -  那么就证明当前这个就是目前最小的，那么就没有必要交换 
      -  做一我们要判断，最小作引和当前作引不一样的时候，才交换 
```javascript
for (var j = 0; j < arr.length - 1; j++) {
  var minIndex = j
  
  for (var i = j + 1; i < arr.length; i++) {
    if (arr[i] < arr[minIndex]) {
      minIndex = i
    }
  }

  if (minIndex !== j) {
    var tmp = arr[minIndex]
    arr[minIndex] = arr[j]
    arr[j] = tmp   
  }
}
```
 

   6.  至此，选择排序完成 

###### 14-5 数组的常用方法

-  数组是一个复杂数据类型，我们在操作它的时候就不能再想基本数据类型一样操作了 
-  比如我们想改变一个数组 
```javascript
// 创建一个数组
var arr = [1, 2, 3]

// 我们想把数组变成只有 1 和 2
arr = [1, 2]
```
 

   - 这样肯定是不合理，因为这样不是在改变之前的数组
   - 相当于心弄了一个数组给到 `arr` 这个变量了
   - 相当于把 `arr` 里面存储的地址给换了，也就是把存储空间换掉了，而不是在之前的空间里面修改
   - 所以我们就需要借助一些方法，在不改变存储空间的情况下，把存储空间里面的数据改变了

**数组常用方法之 push**

-  `push` 是用来在数组的末尾追加一个元素 
```javascript
var arr = [1, 2, 3]

// 使用 push 方法追加一个元素在末尾
arr.push(4)

console.log(arr) // [1, 2, 3, 4]
```
 

**数组常用方法之 pop**

-  `pop` 是用来删除数组末尾的一个元素 
```javascript
var arr = [1, 2, 3]

// 使用 pop 方法删除末尾的一个元素
arr.pop()

console.log(arr) // [1, 2]
```
 

**数组常用方法之 unshift**

-  `unshift` 是在数组的最前面添加一个元素 
```javascript
var arr = [1, 2, 3]

// 使用 unshift 方法想数组的最前面添加一个元素
arr.unshift(4)

console.log(arr) // [4, 1, 2, 3]
```
 

**数组常用方法之  shift**

-  `shift` 是删除数组最前面的一个元素 
```javascript
var arr = [1, 2, 3]

// 使用 shift 方法删除数组最前面的一个元素
arr.shift()

console.log(arr) // [2, 3]
```
 

**数组常用方法之 splice**

-  `splice` 是截取数组中的某些内容，按照数组的索引来截取 
-  语法： `splice(从哪一个索引位置开始，截取多少个，替换的新元素)` （第三个参数可以不写） 
```javascript
var arr = [1, 2, 3, 4, 5]

// 使用 splice 方法截取数组
arr.splice(1, 2)

console.log(arr) // [1, 4, 5]
```
 

   - `arr.splice(1, 2)` 表示从索引 1 开始截取 2 个内容
   - 第三个参数没有写，就是没有新内容替换掉截取位置
```javascript
var arr = [1, 2, 3, 4, 5]

// 使用 splice 方法截取数组
arr.splice(1, 2, '我是新内容')

console.log(arr) // [1, '我是新内容', 4, 5]
```

   - `arr.splice(1, 2, '我是新内容')` 表示从索引 1 开始截取 2 个内容
   - 然后用第三个参数把截取完空出来的位置填充

**数组常用方法之 reverse**

-  `reverse` 是用来反转数组使用的 
```javascript
var arr = [1, 2, 3]

// 使用 reverse 方法来反转数组
arr.reverse()

console.log(arr) // [3, 2, 1]
```
 

**数组常用方法之 sort**

-  `sort` 是用来给数组排序的 
```javascript
var arr = [2, 3, 1]

// 使用 sort 方法给数组排序
arr.sort()

console.log(arr) // [1, 2, 3]
```
 

   - 这个只是一个基本的简单用法

**数组常用方法之 concat**

-  `concat` 是把多个数组进行拼接 
-  和之前的方法有一些不一样的地方，就是 `concat` 不会改变原始数组，而是返回一个新的数组 
```javascript
var arr = [1, 2, 3]

// 使用 concat 方法拼接数组
var newArr = arr.concat([4, 5, 6])

console.log(arr) // [1, 2, 3]
console.log(newArr) // [1, 2, 3, 4, 5, 6]
```
 

   - 注意： `**concat**`** 方法不会改变原始数组**

**数组常用方法之 join**

-  `join` 是把数组里面的每一项内容链接起来，变成一个字符串 
-  可以自己定义每一项之间链接的内容 `join(要以什么内容链接)` 
-  不会改变原始数组，而是把链接好的字符串返回 
```javascript
var arr = [1, 2, 3]

// 使用 join 链接数组
var str = arr.join('-')

console.log(arr) // [1, 2, 3]
console.log(str) // 1-2-3
```
 

   - 注意： **join 方法不会改变原始数组，而是返回链接好的字符串**

**数组常用方法之 indexOf**

-  `indexOf` 用来找到数组中某一项的索引 
-  语法： `indexOf(你要找的数组中的项)` 
```javascript
var arr = [1, 2, 3, 4, 5]

// 使用 indexOf 超找数组中的某一项
var index = arr.indexOf(3)

console.log(index) // 2
```
 

   - 我们要找的是数组中值为 3 的那一项
   - 返回的就是值为 3 的那一项在该数组中的索引
-  如果你要找的内容在数组中没有，那么就会返回 -1 
```javascript
var arr = [1, 2, 3, 4, 5]

// 使用 indexOf 超找数组中的某一项
var index = arr.indexOf(10)

console.log(index) // -1
```
 

   - 你要找的值在数组中不存在，那么就会返回 -1

**数组常用方法之 forEach**

-  和 `for` 循环一个作用，就是用来遍历数组的 
-  语法：`arr.forEach(function (item, index, arr) {})` 
```javascript
var arr = [1, 2, 3]

// 使用 forEach 遍历数组
arr.forEach(function (item, index, arr) {
  // item 就是数组中的每一项
  // index 就是数组的索引
  // arr 就是原始数组
  console.log('数组的第 ' + index + ' 项的值是 ' + item + '，原始数组是', arr)
})
```
 

   - `forEach()` 的时候传递的那个函数，会根据数组的长度执行
   - 数组的长度是多少，这个函数就会执行多少回

**数组常用方法之 map**

-  和 `forEach` 类似，只不过可以对数组中的每一项进行操作，返回一个新的数组 
```javascript
var arr = [1, 2, 3]

// 使用 map 遍历数组
var newArr = arr.map(function (item, index, arr) {
  // item 就是数组中的每一项
  // index 就是数组的索引
  // arr 就是原始数组
  return item + 10
})

console.log(newArr) // [11, 12, 13]
```
 

**数组常用方法之 filter**

-  和 `map` 的使用方式类似，按照我们的条件来筛选数组 
-  把原始数组中满足条件的筛选出来，组成一个新的数组返回 
```javascript
var arr = [1, 2, 3]

// 使用 filter 过滤数组
var newArr = arr.filter(function (item, index, arr) {
  // item 就是数组中的每一项
  // index 就是数组的索引
  // arr 就是原始数组
  return item > 1
})

console.log(newArr) // [2, 3]
```
 

   - 我们设置的条件就是 `> 1`
   - 返回的新数组就会是原始数组中所有 `> 1` 的项

##### 15 字符串

###### 15-1 创建字符串

-  我们创建字符串也分为两种方法 **字面量** 和 **构造函数** 
-  字面量： 
```javascript
var str = 'hello'
```
 

-  构造函数创建 
```javascript
var str = new String('hello')
```
 

###### 15-2 字符集

**ASCII 字符集**

- 我们都知道，计算机只能存储 `0101010` 这样的二进制数字
- 那么我们的 `a ~ z` / `A ~ Z` / `$` / `@` /… 之类的内容也有由二进制数字组成的
- 我们可以简单的理解为， `a ~ z` / `A ~ Z` / `$` / `@` /… 之类的内容都有一个自己的编号，然后在计算机存储的时候，是存储的这些编号，我们看的时候，也是通过这些编号在解析成我们要看到的内容给我们看到
- ![](%E7%AC%94%E8%AE%B0.assets/ASCII%E6%8E%A7%E5%88%B6%E5%AD%97%E7%AC%A6.png#crop=0&crop=0&crop=1&crop=1&id=ywebq&originalType=binary&ratio=1&rotation=0&showTitle=false&status=done&style=none&title=)
- ![](%E7%AC%94%E8%AE%B0.assets/ASCII%E6%98%BE%E7%A4%BA%E5%AD%97%E7%AC%A6.png#crop=0&crop=0&crop=1&crop=1&id=dLlvg&originalType=binary&ratio=1&rotation=0&showTitle=false&status=done&style=none&title=)
- 上面的就是 ASCII 对照表，我们只需要知道他是这么存储的就好

**unicode 编码**

- 我们看到了，`ASCII` 只有这 `128` 个字符的编码结构
- 但是因为 `ASCII` 出现的比较早，而且是美国发明的，早先时候这些内容就够用了
- 因为存储一些英文的内容，传递一些英文的文章什么的都够用了
- 那么对于这个世界来说肯定是不够用的
- 因为我们的汉字没有办法存储，包括一些其他国家的语言也没有办法存储
- 所以就出现了 `unicode` 编码，也叫（万国码，统一码）
- `unicode` 对照表就是一个和 `ASCII` 一样的对照表，只不过变得很大很大，因为存储的内容特别的多
- 而且包含了世界上大部分国家的文字，所以我们的文字和字符现在在存储的时候，都是按照 `unicode` 编码转换成数字进行存储
- 我们的 `UTF-8` 就是一种 `8 位的 unicode` 字符集

###### 15-3 字符串的常用方法

- 我们操作字符串，也有一堆的方法来帮助我们操作
- 字符串和数组有一个一样的地方，也是按照索引来排列的

**charAt**

-  `charAt(索引)`  是找到字符串中指定索引位置的内容返回 
```javascript
var str = 'Jack'

// 使用 charAt 找到字符串中的某一个内容
var index = str.charAt(2)

console.log(index) // c
```
 

   - 因为字符串也是按照索引进行排列的，也是同样从 0 开始
   - 所以索引 2 的位置就是 `c`
-  如果没有对应的索引，那么就会返回 空字符串 
```javascript
var str = 'Jack'

// 使用 charAt 找到字符串中的某一个内容
var index = str.charAt(10)

console.log(index) // ''
```
 

   - 这个字符串根本没有索引 10 的位置
   - 所以就会返回一个空字符串 `''`

**charCodeAt**

-  `charCodeAt(索引)` 就是返回对应索引位置的 `unicode` 编码 
```javascript
var str = 'Jack'

// 使用 charAt 找到字符串中的某一个内容
var index = str.charCodeAt(0)

console.log(index) // 74
```
 

   - 因为 `J` 在 `unicode` 对照表里面存储的是 74，所以就会返回 74

**indexOf**

-  `indexOf` 就是按照字符找到对应的索引 
```javascript
var str = 'Jack'

// 使用 indexOf 找到对应的索引
var index = str.indexOf('J')

console.log(index) // 0
```
 

   - 因为字符 `J` 在字符串 `Jack` 中的索引位置是 0
   - 所以会返回 0

**substring**

-  `substring` 是用来截取字符串使用的 
-  语法： `substring(从哪个索引开始，到哪个索引截止)`，包含开始索引，不包含结束索引 
```javascript
var str = 'hello'
//         01234

// 使用 substring 截取字符串
var newStr = str.substring(1, 3)

console.log(newStr) // el
```
 

   - 从索引 1 开始，到索引 3 截止，包含前面的索引不包含后面的索引
   - 所以返回的是 el

**substr**

-  `substr` 也是用来截取字符串的 
-  语法：`substr(从哪个索引开始，截取多少个)` 
```javascript
var str = 'hello'
//         01234

// 使用 substr 截取字符串
var newStr = str.substr(1, 3)

console.log(newStr) // ell
```
 

   - 这个方法和 `substring` 不一样的是，第二个参数是截取多少个
   - 从索引 1 开始，截取 3 个，所以得到的是 `ell`

**toLowerCase 和 toUpperCase**

-  这两个方法分别使用用来给字符串转成 **小写字母** 和 **大写字母** 的 
```javascript
var str = hello

// 使用 toUpperCase 转换成大写
var upper = str.toUpperCase()

console.log(upper) // HELLO

// 使用 toLowerCase 转换成小写
var lower = upper.toLowerCase()

console.log(lower) // hello
```
 

##### 16 Math

- Math 是 js 的一个内置对象，提供了一堆的方法帮助我们操作 **数字**

###### 16-1 random

-  `Math.random()` 这个方法是用来生成一个 `0 ~ 1` 之间的随机数 
-  每次执行生成的数字都不一样，但是一定是 `0 ~ 1` 之间的 
-  **生成的数字包含 0 ，但是不包含 1** 
```javascript
var num = Math.random()
console.log(num) // 得到一个随机数
```
 

###### 16-2 round

-  `Math.round()` 是将一个小数 **四舍五入** 变成一个整数 
```javascript
var num = 10.1
console.log(Math.round(num)) // 10

var num2 = 10.6
console.log(Math.round(num2)) // 11
```
 

###### 16-3 abs

-  `Math.abs()` 是返回一个数字的 **绝对值** 
```javascript
var num = -10
console.log(math.abs(num)) // 10
```
 

###### 16-4 ceil

-  `Math.ceil()` 是将一个小数 **向上取整** 得到的整数 
```javascript
var num = 10.1
console.log(Math.ceil(num)) // 11

var num2 = 10.9
console.log(Math.ceil(num2)) // 11
```
 

###### 16-5 floor

-  `Math.floor()` 是将一个小数 **向下取整** 的到的整数 
```javascript
var num = 10.1
console.log(Math.floor(num)) // 10

var num2 = 10.9
console.log(Math.floor(num2)) // 10
```
 

###### 16-6 max

-  `Math.max()` 得到的是你传入的几个数字之中 **最大** 的那个数字 
```javascript
console.log(Math.max(1, 2, 3, 4, 5)) // 5
```
 

###### 16-7 min

-  `Math.min()` 得到的是你传入的几个数字之中 **最小** 的那个数字 
```javascript
console.log(Math.min(1, 2, 3, 4, 5)) // 1
```
 

###### 16-8 PI

-  `Math.PI` 得到的是 `π` 的值，也就是 `3.1415936...` 
```javascript
console.log(Math.PI) // 3.141592653589793
```
 

   - 因为计算机的计算精度问题，只能得到小数点后 15 位
   - **使用 Math.PI 的时候，是不需要加 () 的**

##### 17 Date

- `js` 提供的内置构造函数，专门用来获取时间的

###### 17-1 new Date()

-  `new Date()` 在不传递参数的情况下是默认返回当前时间 
```javascript
var time = new Date()
console.log(time) // 当前时间 Fri Mar 01 2019 13:11:23 GMT+0800 (中国标准时间)
```
 

-  `new Date()` 在传入参数的时候，可以获取到一个你传递进去的时间 
```javascript
var time = new Date('2019-03-03 13:11:11')
console.log(time) // Sun Mar 03 2019 13:11:11 GMT+0800 (中国标准时间)
```
 

-  `new Date()` 传递的参数有多种情况 
   1.  传递两个数字，第一个表示年，第二个表示月份 
```javascript
var time = new Date(2019, 00) // 月份从 0 开始计数，0 表示 1月，11 表示 12月
console.log(time) // Tue Jan 01 2019 00:00:00 GMT+0800 (中国标准时间)
```
 

   2.  传递三个数字，前两个不变，第三个表示该月份的第几天，从 1 到 31 
```javascript
var time = new Date(2019, 00, 05) 
console.log(time) // Sat Jan 05 2019 00:00:00 GMT+0800 (中国标准时间)
```
 

   3.  传递四个数字，前三个不变，第四个表示当天的几点，从 0 到 23 
```javascript
var time = new Date(2019, 00, 05, 22) 
console.log(time) // Sat Jan 05 2019 22:00:00 GMT+0800 (中国标准时间)
```
 

   4.  传递五个数字，前四个不变，第五个表示的是该小时的多少分钟，从 0 到 59 
```javascript
var time = new Date(2019, 00, 05, 22, 33) 
console.log(time) // Sat Jan 05 2019 22:33:00 GMT+0800 (中国标准时间)
```
 

   5.  传递六个数字，前五个不变，第六个表示该分钟的多少秒，从 0 到 59 
```javascript
var time = new Date(2019, 00, 05, 22, 33, 55) 
console.log(time) // Sat Jan 05 2019 22:33:55 GMT+0800 (中国标准时间)
```
 

   6.  传入字符串的形式 
```javascript
console.log(new Date('2019')) 
// Tue Jan 01 2019 08:00:00 GMT+0800 (中国标准时间)
console.log(new Date('2019-02')) 
// Fri Feb 01 2019 08:00:00 GMT+0800 (中国标准时间)
console.log(new Date('2019-02-03')) 
// Sun Feb 03 2019 08:00:00 GMT+0800 (中国标准时间)
console.log(new Date('2019-02-03 13:')) 
// Sun Feb 03 2019 13:00:00 GMT+0800 (中国标准时间)
console.log(new Date('2019-02-03 13:13:')) 
// Sun Feb 03 2019 13:13:00 GMT+0800 (中国标准时间)
console.log(new Date('2019-02-03 13:13:13')) 
// Sun Feb 03 2019 13:13:13 GMT+0800 (中国标准时间)
```
 

###### 17-2  将日期字符串格式化成指定内容

- 比如我们得到的时间字符串是 `Sun Feb 03 2019 13:13:13 GMT+0800 (中国标准时间)`
- 我指向得到这个日期中是那一年，我们就要靠截取字符串的形式得到
- 但是现在 `js` 为我们提供了一系列的方法来得到里面的指定内容

**getFullYear**

-  `getFullYear()` 方式是得到指定字符串中的哪一年 
```javascript
var time = new Date(2019, 03, 03, 08, 00, 22)
console.log(time.getFullYear()) // 2019
```
 

**getMonth**

-  `getMonth()` 方法是得到指定字符串中的哪一个月份 
```javascript
var time = new Date(2019, 03, 03, 08, 00, 22)
console.log(time.getMonth()) // 3
```
 

   - 这里要有一个注意的地方
   - 月份是从 0 开始数的
   - 0 表示 1月，1 表示 2月，依此类推

**getDate**

-  `getDate()` 方法是得到指定字符串中的哪一天 
```javascript
var time = new Date(2019, 03, 03, 08, 00, 22)
console.log(time.getDate()) // 3
```
 

**getHours**

-  `getHours()` 方法是得到指定字符串中的哪小时 
```javascript
var time = new Date(2019, 03, 03, 08, 00, 22)
console.log(time.getHours()) // 8
```
 

**getMinutes**

-  `getMinutes()` 方法是得到指定字符串中的哪分钟 
```javascript
var time = new Date(2019, 03, 03, 08, 00, 22)
console.log(time.getMinutes()) // 0
```
 

**getSeconds**

-  `getSeconds()` 方法是得到指定字符串中的哪秒钟 
```javascript
var time = new Date(2019, 03, 03, 08, 00, 22)
console.log(time.getSeconds()) // 22
```
 

**getDay**

-  `getDay()` 方法是得到指定字符串当前日期是一周中的第几天（周日是 0，周六是 6） 
```javascript
var time = new Date(2019, 03, 08, 08, 00, 22)
console.log(time.getDay()) // 1
```
 

**getTime**

-  `getTime()` 方法是得到执行时间到 `格林威治时间` 的毫秒数 
```javascript
var time = new Date(2019, 03, 08, 08, 00, 22)
console.log(time.getTime()) // 1554681622000
```
 

**获取时间差**

- 是指获取两个时间点之间相差的时间
- 在 js 中是不能用时间直接做 减法 的
- 我们需要一些特殊的操作
- 在编程的世界里面，有一个特殊的时间，是 `1970年01月01日00时00分00秒`
- 这个时间我们叫做 `格林威治时间`
- 所有的编程世界里面，这个时间都是一样的，而且 `格林威治时间` 的数字是 0
- 从 `格林威治时间` 开始，每经过1毫秒，数字就会 + 1
- 所以我们可以获取到任意一个时间节点到 `格林威治时间` 的毫秒数
- 然后在用两个毫秒数相减，就能得到两个时间点之间相差的毫秒数
- 我们在通过这个毫秒数得到准确的时间

##### 18 定时器

- 在 `js` 里面，有两种定时器，**倒计时定时器** 和 **间隔定时器**

###### 18-1 倒计时定时器

-  倒计时多少时间以后执行函数 
-  语法： `setTimeout(要执行的函数，多长时间以后执行)` 
-  会在你设定的时间以后，执行函数 
```javascript
var timerId = setTimeout(function () {
  console.log('我执行了')
}, 1000)
console.log(timerId) // 1
```
 

   - 时间是按照毫秒进行计算的，1000 毫秒就是 1秒钟
   - 所以会在页面打开 1 秒钟以后执行函数
   - 只执行一次，就不在执行了
   - 返回值是，当前这个定时器是页面中的第几个定时器

###### 18-2 间隔定时器

-  每间隔多少时间就执行一次函数 
-  语法： `setInterval(要执行的函数，间隔多少时间)` 
```javascript
var timerId = setInterval(function () {
  console.log('我执行了')
}, 1000)
```
 

   - 时间和刚才一样，是按照毫秒进行计算的
   - 每间隔 1 秒钟执行一次函数
   - 只要不关闭，会一直执行
   - 返回值是，当前这个定时器是页面中的第几个定时器

###### 18-3 定时器的返回值

-  设置定时器的时候，他的返回值是部分 `setTimeout` 和 `setInterval` 的 
-  只要有一个定时器，那么就是一个数字 
```javascript
var timerId = setTimeout(function () {
  console.log('倒计时定时器')
}, 1000)

var timerId2 = setInterval(function () {
  console.log('间隔定时器')
}, 1000)

console.log(timerId) // 1
console.log(timerId2) // 2
```
 

###### 18-4 关闭定时器

-  我们刚才提到过一个 `timerId`，是表示这个定时器是页面上的第几个定时器 
-  这个 `timerId` 就是用来关闭定时器的数字 
-  我们有两个方法来关闭定时器 `clearTimeout` 和 `clearInterval` 
```javascript
var timerId = setTimeout(function () {
  console.log('倒计时定时器')
}, 1000)
clearTimeout(timerId)
```
 

   - 关闭以后，定时器就不会在执行了
```javascript
var timerId2 = setInterval(function () {
  console.log('间隔定时器')
}, 1000)
coearInterval(timerId2)
```

   - 关闭以后定时器就不会在执行了
-  原则上是 
   - `clearTimeout` 关闭 `setTimeout`
   - `clearInterval` 关闭 `setInterval`
-  但是其实是可以通用的，他们可以混着使用 
```javascript
var timerId = setTimeout(function () {
  console.log('倒计时定时器')
}, 1000)
// 关闭倒计时定时器
clearInterval(timerId)

var timerId2 = setInterval(function () {
  console.log('间隔定时器')
}, 1000)
// 关闭间隔定时器
clearTimeout(timerId2)
```
 

#### 二 BOM

- `BOM（Browser Object Model）`： 浏览器对象模型
- 其实就是操作浏览器的一些能力
- 我们可以操作哪些内容 
   - 获取一些浏览器的相关信息（窗口的大小）
   - 操作浏览器进行页面跳转
   - 获取当前浏览器地址栏的信息
   - 操作浏览器的滚动条
   - 浏览器的信息（浏览器的版本）
   - 让浏览器出现一个弹出框（`alert` / `confirm` / `prompt`）
   - ...
- `BOM` 的核心就是 `window` 对象
- `window` 是浏览器内置的一个对象，里面包含着操作浏览器的方法

##### 1. 获取浏览器窗口的尺寸

-  `innerHeight` 和 `innerWidth` 
-  这两个方法分别是用来获取浏览器窗口的宽度和高度（包含滚动条的） 
```javascript
var windowHeight = window.innerHeight
console.log(windowHeight)

var windowWidth = window.innerWidth
console.log(windowWidth)
```
 

##### 2. 浏览器的弹出层

-  `alert` 是在浏览器弹出一个提示框 
```javascript
window.alert('我是一个提示框')
```

![](%E7%AC%94%E8%AE%B0.assets/alert.png#crop=0&crop=0&crop=1&crop=1&id=RSeLv&originalType=binary&ratio=1&rotation=0&showTitle=false&status=done&style=none&title=) 

   - 这个弹出层知识一个提示内容，只有一个确定按钮
   - 点击确定按钮以后，这个提示框就消失了
-  `confirm` 是在浏览器弹出一个询问框 
```javascript
var boo = window.confirm('我是一个询问框')
console.log(boo)
```

![](%E7%AC%94%E8%AE%B0.assets/confirm.png#crop=0&crop=0&crop=1&crop=1&id=nJJxJ&originalType=binary&ratio=1&rotation=0&showTitle=false&status=done&style=none&title=) 

   - 这个弹出层有一个询问信息和两个按钮
   - 当你点击确定的时候，就会得到 `true`
   - 当你点击取消的时候，就会得到 `false`
-  `prompt` 是在浏览器弹出一个输入框 
```javascript
var str = window.prompt('请输入内容')
console.log(str)
```

![](%E7%AC%94%E8%AE%B0.assets/prompt.png#crop=0&crop=0&crop=1&crop=1&id=FGnEq&originalType=binary&ratio=1&rotation=0&showTitle=false&status=done&style=none&title=) 

   - 这个弹出层有一个输入框和两个按钮
   - 当你点击取消的时候，得到的是 `null`
   - 当你点击确定的时候得到的就是你输入的内容

##### 3. 浏览器的地址信息

- 在 `window` 中有一个对象叫做 `location`
- 就是专门用来存储浏览器的地址栏内的信息的

###### location.href

-  `location.href` 这个属性存储的是浏览器地址栏内 `url` 地址的信息 
```javascript
console.log(window.location.href)
```
 

   - 会把中文变成 `url` 编码的格式
-  `location.href` 这个属性也可以给他赋值 
```javascript
window.location.href = './index.html'
// 这个就会跳转页面到后面你给的那个地址
```
 

###### location.reload

-  `location.reload()` 这个方法会重新加载一遍页面，就相当于刷新是一个道理 
```javascript
window.location.reload()
```
 

   - 注意： **不要写在全局，不然浏览器就会一直处在刷新状态**

##### 4. 浏览器的历史记录

- `window` 中有一个对象叫做 `history`
- 是专门用来存储历史记录信息的

###### history.back

-  `history.back` 是用来会退历史记录的，就是回到前一个页面，就相当于浏览器上的 ⬅️ 按钮 
```javascript
window.history.back()
```
 

   - 前提是你要有上一条记录，不然就是一直在这个页面，也不会回退

###### history.forword

-  `history.forword` 是去到下一个历史记录里面，也就是去到下一个页面，就相当于浏览器上的 ➡️ 按钮 
```javascript
window.history.forward()
```
 

   - 前提是你要之前有过回退操作，不然的话你现在就是最后一个页面，没有下一个

##### 5. 浏览器的 onload 事件

-  这个不在是对象了，而是一个事件 
-  是在页面所有资源加载完毕后执行的 
```javascript
window.onload = function () {
  console.log('页面已经加载完毕')
}
```
 

###### 5-1 在 html 页面中把 js 写在 head 里面

```html
<html>
  <head>
    <meta charset="UTF-8" />
    <script>
    	// 这个代码执行的时候，body 还没有加载
      // 这个时候我们就获取不到 body 中的那个 div

      // 就需要使用 window.onload 事件
      window.onload = function () {
        // 这个函数会在页面加载完毕以后在执行
        // 那么这个时候页面的 DOM 元素都已经加载了，我们就可以获取 div 了
      }
    </script>
  </head>
  <body>
    <div></div>
  </body>
</html>
```

###### 5-2 在 html 页面中把 js 写在 body 最后面

```html
<html>
  <head>
    <meta charset="UTF-8" />
  </head>
  <body>
    <div></div>

    <script>
    	// 这个代码执行的时候，body 已经加载完毕了
      // 在这里就可以获取到 div，写不写 window.onload 就无所谓了

      window.onload = function () {
        // 这个函数会在页面加载完毕以后在执行
        // 那么这个时候页面的 DOM 元素都已经加载了，我们就可以获取 div 了
      }
    </script>
  </body>
</html>
```

##### 6. 浏览器的 onscroll 事件

-  这个 `onscroll` 事件是当浏览器的滚动条滚动的时候触发 
-  或者鼠标滚轮滚动的时候出发 
```javascript
window.onscroll = function () {
  console.log('浏览器滚动了')
}
```
 

   - 注意：**前提是页面的高度要超过浏览器的可是窗口才可以**

##### 7. 浏览器滚动的距离

- 浏览器内的内容即然可以滚动，那么我们就可以获取到浏览器滚动的距离
- 思考一个问题？ 
   - 浏览器真的滚动了吗？
   - 其实我们的浏览器是没有滚动的，是一直在那里
   - 滚动的是什么？是我们的页面
   - 所以说，**其实浏览器没有动，只不过是页面向上走了**
- 所以，这个已经不能单纯的算是浏览器的内容了，而是我们页面的内容
- 所以不是在用 `window` 对象了，而是使用 `document` 对象

###### scrollTop

-  获取的是页面向上滚动的距离 
-  一共有两个获取方式 
   - `document.body.scrollTop`
   - `document.documentElement.scrollTop`
```javascript
window.onscroll = function () {
  console.log(document.body.scrollTop)
  console.log(document.documentElement.scrollTop)
}
```

   - 两个都是获取页面向上滚动的距离
   - 区别： 
      - IE 浏览器 
         - 没有 `DOCTYPE` 声明的时候，用这两个都行
         - 有 `DOCTYPE` 声明的时候，只能用 `document.documentElement.scrollTop`
      - Chrome 和 FireFox 
         - 没有 `DOCTYPE` 声明的时候，用 `document.body.scrollTop`
         - 有 `DOCTYPE` 声明的时候，用 `document.documentElement.scrollTop`
      - Safari 
         - 两个都不用，使用一个单独的方法 `window.pageYOffset`

###### scrollLeft

-  获取页面向左滚动的距离 
-  也是两个方法 
   -  `document.body.scrollLeft` 
   -  `document.documentElementLeft` 
```javascript
window.onscroll = function () {
  console.log(document.body.scrollLeft)
  console.log(document.documentElement.scrollLeft)
}
```
 

   -  两个之间的区别和之前的 `scrollTop` 一样 

##### 8. 本地存储

###### 8-1 localStorage

```javascript
//增
localStorage.setItem("name","kerwin")
//取
localStorage.getItem("name")
//删
localStorage.removeItem("name")
//清空
localStorage.clear()
```

###### 8-2 sessionStorage

```javascript
//增
sessionStorage.setItem("name","kerwin")
//取
sessionStorage.getItem("name")
//删
sessionStorage.removeItem("name")
//清空
sessionStorage.clear()
```

#### 三. DOM

- `DOM（Document Object Model）`： 文档对象模型
- 其实就是操作 `html` 中的标签的一些能力
- 我们可以操作哪些内容 
   - 获取一个元素
   - 移除一个元素
   - 创建一个元素
   - 向页面里面添加一个元素
   - 给元素绑定一些事件
   - 获取元素的属性
   - 给元素添加一些 `css` 样式
   - ...
- `DOM` 的核心对象就是 `docuemnt` 对象
- `document` 对象是浏览器内置的一个对象，里面存储着专门用来操作元素的各种方法
- `DOM`： 页面中的标签，我们通过 `js` 获取到以后，就把这个对象叫做 **DOM 对象**

##### 1. 获取一个元素

- 通过 `js` 代码来获取页面中的标签
- 获取到以后我们就可以操作这些标签了

###### 1-1 getElementById

-  `getElementById` 是通过标签的 `id` 名称来获取标签的 
-  因为在一个页面中 `id` 是唯一的，所以获取到的就是一个元素 
```html
<body>
  <div id="box"></div>
  <script>
  	var box = document.getElementById('box')
  	console.log(box) // <div></div>
  </script>
</body>
```
 

   - 获取到的就是页面中的那个 **id 为 box 的 div 标签**

###### 1-2 getElementsByClassName

-  `getElementsByClassName` 是用过标签的 `class` 名称来获取标签的 
-  因为页面中可能有多个元素的 `class` 名称一样，所以获取到的是一组元素 
-  哪怕你获取的 `class` 只有一个，那也是获取一组元素，**只不过这一组中只有一个 DOM 元素而已** 
```html
<body>
  <div calss="box"></div>
  <script>
  	var box = document.getElementsByClassName('box')
  	console.log(box) // [<div></div>]
    console.log(box[0]) // <div></div>
  </script>
</body>
```
 

   - 获取到的是一组元素，是一个长得和数组一样的数据结构，但是不是数组，是 **伪数组**
   - 这个一组数据也是按照索引排列的，所以我们想要准确的拿到这个 `div`，需要用索引来获取

###### 1-3 getElementsByTagName

-  `getElementsByTagName` 是用过标签的 标签 名称来获取标签的 
-  因为页面中可能有多个元素的 标签 名称一样，所以获取到的是一组元素 
-  哪怕真的只有一个这个标签名，那么也是获取一组元素，只不过这一组中只有一个 DOM 元素而已 
```html
<body>
  <div></div>
  <script>
  	var box = document.getElementsByTagName('div')
  	console.log(box) // [<div></div>]
    console.log(box[0]) // <div></div>
  </script>
</body>
```
 

   - 和 `getElementsByClassName` 一样，获取到的是一个长得很像数组的元素
   - 必须要用索引才能得到准确的 `DOM` 元素

###### 1-4 querySelector

-  `querySelector` 是按照选择器的方式来获取元素 
-  也就是说，按照我们写 `css` 的时候的选择器来获取 
-  这个方法只能获取到一个元素，并且是页面中第一个满足条件的元素 
```javascript
console.log(document.querySelector('div')) // 获取页面中的第一个 div 元素
console.log(docuemnt.querySelector('.box')) // 获取页面中第一个有 box 类名的元素
console.log(document.querySelector('#box')) // 获取页面中第一个 id 名为 box 的元素
```
 

###### 1-5 querySelectorAll

-  `querySelectorAll` 是按照选择器的方式来获取元素 
-  这个方法能获取到所有满足条件的元素，以一个伪数组的形式返回 
```javascript
console.log(document.querySelectorAll('div')) // 获取页面中的所有的 div 元素
console.log(docuemnt.querySelectorAll('.box')) // 获取页面中所有有 box 类名的元素
```
 

   - 获取到的是一组数据，也是需要用索引来获取到准确的每一个 `DOM` 元素

##### 2. 操作属性

- 通过我们各种获取元素的方式获取到页面中的标签以后
- 我们可以直接操作 `DOM` 元素的属性，就能直接把效果展示在页面上

###### 2-1 innerHTML

-  获取元素内部的 `HTML` 结构 
```html
<body>
  <div>
    <p>
      <span>hello</span>
    </p>
  </div>

  <script>
    var div = document.querySelector('div')
    console.log(div.innerHTML)
      /*

          <p>
            <span>hello</span>
          </p>

	  */
  </script>
</body>
```
 

-  设置元素的内容 
```html
<body>
  <div></div>

  <script>
    var div = document.querySelector('div')
   	div.innerHTML = '<p>hello</p>'
  </script>
</body>
```
 

   - 设置完以后，页面中的 `div` 元素里面就会嵌套一个 `p` 元素

###### 2-2 innerText

-  获取元素内部的文本（只能获取到文本内容，获取不到 `html` 标签） 
```html
<body>
  <div>
    <p>
      <span>hello</span>
    </p>
  </div>

  <script>
    var div = document.querySelector('div')
    console.log(div.innerText) // hello
  </script>
</body>
```
 

-  可以设置元素内部的文本 
```html
<body>
  <div></div>

  <script>
    var div = document.querySelector('div')
   	div.innerText = '<p>hello</p>'
  </script>
</body>
```
 

   - 设置完毕以后，会把 `<p>hello</p>` 当作一个文本出现在 `div` 元素里面，而不会把 `p` 解析成标签

###### 2-3 getAttribute

-  获取元素的某个属性（包括自定义属性） 
```html
<body>
  <div a="100" class="box"></div>

  <script>
    var div = document.querySelector('div')
   	console.log(div.getAttribute('a')) // 100
    console.log(div.getAttribute('class')) // box
  </script>
</body>
```
 

###### 2-4 setAttribute

-  给元素设置一个属性（包括自定义属性） 
```html
<body>
  <div></div>

  <script>
    var div = document.querySelector('div')
   	div.setAttribute('a', 100)
    div.setAttribute('class', 'box')
    console.log(div) // <div a="100" class="box"></div>
  </script>
</body>
```
 

###### 2-5 removeAttribute

-  直接移除元素的某个属性 
```html
<body>
  <div a="100" class="box"></div>

  <script>
    var div = document.querySelector('div')
   	div.removeAttribute('class')
    console.log(div) // <div a="100"></div>
  </script>
</body>
```
 

###### 2-6 style

-  专门用来给元素添加 `css` 样式的 
-  添加的都是行内样式 
```html
<body>
  <div></div>

  <script>
    var div = document.querySelector('div')
   	div.style.width = "100px"
    div.style.height = "100px"
    div.style.backgroundColor = "pink"
    console.log(div)
    // <div style="width: 100px; height: 100px; background-color: pink;"></div>
  </script>
</body>
```
 

   - 页面中的 `div` 就会变成一个宽高都是 `100`，背景颜色是粉色

###### 2-7 获取元素的非行间样式

-  我们在操作 `DOM` 的时候，很重要的一点就是要操作元素的 `css` 样式 
-  那么在操作 `css` 样式的时候，我们避免不了就要获取元素的样式 
-  之前我们说过可以用 `元素.style.xxx` 来获取 
-  但是这个方法只能获取到元素 **行间样式**，也就是写在行内的样式 
```html
<style>
  div {
    width: 100px;
  }
</style>
<body>
  <div style="height: 100px;">
    <p>我是一个 p 标签</p>
  </div>

  <script>
    var oDiv = document.querySelector('div')
		console.log(oDiv.style.height) // 100px
    console.log(oDIv.style.width) // ''
  </script>
</body>
```
 

-  不管是外链式还是内嵌式，我们都获取不到该元素的样式 
-  这里我们就要使用方法来获取了 `**getComputedStyle**` 和 `**currentStyle**` 
-  这两个方法的作用是一样的，只不过一个在 **非 IE** 浏览器，一个在 **IE** 浏览器 

**getComputedStyle（非IE使用）**

-  语法：`window.getComputedStyle(元素, null).要获取的属性` 
```html
<style>
  div {
    width: 100px;
  }
</style>
<body>
  <div style="height: 100px;">
    <p>我是一个 p 标签</p>
  </div>

  <script>
    var oDiv = document.querySelector('div')
		console.log(window.getComputedStyle(oDiv).width) // 100px
    console.log(window.getComputedStyle(oDiv).height) // 100px
  </script>
</body>
```
 

   - 这个方法获取行间样式和非行间样式都可以

**currentStyle（IE使用）**

-  语法： `元素.currentStyle.要获取的属性` 
```html
<style>
  div {
    width: 100px;
  }
</style>
<body>
  <div style="height: 100px;">
    <p>我是一个 p 标签</p>
  </div>

  <script>
    var oDiv = document.querySelector('div')
		console.log(oDiv.currentStyle.width) // 100px
    console.log(oDiv.currentStyle.height) // 100px
  </script>
</body>
```
 

###### 2-8 className

-  专门用来操作元素的 **类名的** 
```html
<body>
  <div class="box"></div>

  <script>
    var div = document.querySelector('div')
   	console.log(div.className) // box
  </script>
</body>
```
 

-  也可以设置元素的类名，不过是全覆盖式的操作 
```html
<body>
  <div class="box"></div>

  <script>
    var div = document.querySelector('div')
   	div.className = 'test'
    console.log(div) // <div class="test"></div>
  </script>
</body>
```
 

   - 在设置的时候，不管之前有没有类名，都会全部被设置的值覆盖

##### 3. DOM节点

- `DOM` 的节点我们一般分为常用的三大类 **元素节点** / **文本节点** / **属性节点**
- 什么是分类，比如我们在获取元素的时候，通过各种方法获取到的我们叫做元素节点（标签节点）
- 比如我们标签里面写的文字，那么就是文本节点
- 写在每一个标签上的属性，就是属性节点

###### 3-1 元素节点

- 我们通过 `getElementBy...` 获取到的都是元素节点

###### 3-2 属性节点

- 我们通过 `getAttribute` 获取的就是元素的属性节点

###### 3-3 文本节点

- 我们通过 `innerText` 获取到的就是元素的文本节点

![](%E7%AC%94%E8%AE%B0.assets/image-20220529093256532.png#crop=0&crop=0&crop=1&crop=1&id=BRaFk&originalType=binary&ratio=1&rotation=0&showTitle=false&status=done&style=none&title=)

![](%E7%AC%94%E8%AE%B0.assets/image-20220529093305827.png#crop=0&crop=0&crop=1&crop=1&id=VPHTJ&originalType=binary&ratio=1&rotation=0&showTitle=false&status=done&style=none&title=)

![](%E7%AC%94%E8%AE%B0.assets/image-20220529093325381.png#crop=0&crop=0&crop=1&crop=1&id=eyFYg&originalType=binary&ratio=1&rotation=0&showTitle=false&status=done&style=none&title=)

![](%E7%AC%94%E8%AE%B0.assets/image-20220529093334602.png#crop=0&crop=0&crop=1&crop=1&id=glrn0&originalType=binary&ratio=1&rotation=0&showTitle=false&status=done&style=none&title=)

![](%E7%AC%94%E8%AE%B0.assets/image-20220529093346903.png#crop=0&crop=0&crop=1&crop=1&id=IIfP8&originalType=binary&ratio=1&rotation=0&showTitle=false&status=done&style=none&title=)

![](%E7%AC%94%E8%AE%B0.assets/image-20220529093416413.png#crop=0&crop=0&crop=1&crop=1&id=dfuwn&originalType=binary&ratio=1&rotation=0&showTitle=false&status=done&style=none&title=)

###### 3-4 获取节点

-  `childNodes`：获取某一个节点下 **所有的子一级节点** 
```html
<body>
  <div>
    <p>hello</p>
  </div>
  
  <script>
    // 这个 oDiv 获取的是页面中的 div 元素，就是一个元素节点
  	var oDiv = document.querySelector('div')
    
    console.log(oDiv.childNodes) 
    /*
    	NodeList(3) [text, p, text]
      0: text
      1: p
      2: text
      length: 3
      __proto__: NodeList
    */
  </script>
</body>
```
 

   - 我们会发现，拿到以后是一个伪数组，里面有三个节点
   - 一个 `text`：从 `<div> 一直到 <p>` 中间有一个换行和一堆空格，这个是第一个节点，是一个文本节点
   - 一个 `p`：这个 `p` 标签就是第二个节点，这个是一个元素节点
   - 一个 `text`：从 `</p> 一直到 </div>` 中间有一个换行和一堆空格，这个是第三个节点，是一个文本节点
   - 这个时候就能看到我们有不同的节点类型了
-  `children` ：获取某一节点下所有的子一级 **元素节点** 
```html
<body>
  <div>
    <p>hello</p>
  </div>
  
  <script>
    // 这个 oDiv 获取的是页面中的 div 元素，就是一个元素节点
  	var oDiv = document.querySelector('div')
    
    console.log(oDiv.children) 
    /*
    	HTMLCollection [p]
      0: p
      length: 1
      __proto__: HTMLCollection
    */
  </script>
</body>
```
 

   - 我们发现只有一个节点了，因为 `children` 只要元素节点
   - div 下面又只有一个元素节点，就是 `p`
   - 所以就只有一个，虽然只有一个，但是也是一个 **伪数组**
-  `firstChild`：获取某一节点下子一级的 **第一个节点** 
```html
<body>
  <div>
    <p>hello</p>
  </div>
  
  <script>
    // 这个 oDiv 获取的是页面中的 div 元素，就是一个元素节点
  	var oDiv = document.querySelector('div')
    
    console.log(oDiv.firstChild) // #text 
  </script>
</body>
```
 

   - 这个是只获取一个节点，不再是伪数组了
   - 获取的是第一个
   - 第一个就是 `<div> 一直到 <p>` 的那个换行和空格，是个文本节点
-  `lastChild`：获取某一节点下子一级的 **最后一个节点** 
```html
<body>
  <div>
    <p>hello</p>
  </div>
  
  <script>
    // 这个 oDiv 获取的是页面中的 div 元素，就是一个元素节点
  	var oDiv = document.querySelector('div')
    
    console.log(oDiv.lastChild) // #text 
  </script>
</body>
```
 

   - 只获取一个节点，不再是伪数组
   - 获取的是最后一个
   - 最后一个就是 `</p> 一直到 </div>` 之间的换行和空格，是个文本节点
-  `firstElementChild`：获取某一节点下子一级 **第一个元素节点** 
```html
<body>
  <div>
    <p>hello</p>
  </div>
  
  <script>
    // 这个 oDiv 获取的是页面中的 div 元素，就是一个元素节点
  	var oDiv = document.querySelector('div')
    
    console.log(oDiv.firstElementChild) // <p>hello</p>
  </script>
</body>
```
 

   - 只获取一个节点，不在是伪数组
   - 获取的是第一个 **元素节点**
   - 第一个元素节点就是 `p` 标签，是一个元素节点
-  `lastElementChild`：获取某一节点下子一级 **最后一个元素节点** 
```html
<body>
  <div>
    <p>hello</p>
    <p>world</p>
  </div>
  
  <script>
    // 这个 oDiv 获取的是页面中的 div 元素，就是一个元素节点
  	var oDiv = document.querySelector('div')
    
    console.log(oDiv.lastElementChild) // <p>world</p>
  </script>
</body>
```
 

   - 只获取一个节点，不在是伪数组
   - 获取的是最后一个 **元素节点**
   - 最后一个元素节点是 `<p>world</p>`，是一个元素节点
-  `nextSibling`：获取某一个节点的 **下一个兄弟节点** 
```html
<body>
  <ul>
    <li id="a">hello</li>
    <li id="b">world</li>
    <li id="c">!!!</li>
  </ul>
  
  <script>
    // 这个 oLi 获取的是页面中的 li 元素，就是一个元素节点
  	var oLi = document.querySelector('#b')
    
    console.log(oLi.nextSibling) // #text
  </script>
</body>
```
 

   - 只获取一个节点，不在是伪数组
   - 获取的是 `id="b"` 这个 `li` 的下一个兄弟节点
   - 因为 `id="b"` 的下一个节点，是两个 `li` 标签之间的换行和空格，所以是一个文本节点
-  `previousSibling`：获取某一个节点的 **上一个兄弟节点** 
```html
<body>
  <ul>
    <li id="a">hello</li>
    <li id="b">world</li>
    <li id="c">!!!</li>
  </ul>
  
  <script>
    // 这个 oLi 获取的是页面中的 li 元素，就是一个元素节点
  	var oLi = document.querySelector('#b')
    
    console.log(oLi.previousSibling) // #text
  </script>
</body>
```
 

   - 只获取一个节点，不在是伪数组
   - 获取的是 `id="b"` 这个 `li` 的上一个兄弟节点
   - 因为 `id="b"` 的上一个节点，是两个 `li` 标签之间的换行和空格，所以是一个文本节点
-  `nextElementSibling`：获取某一个节点的 **下一个元素节点** 
```html
<body>
  <ul>
    <li id="a">hello</li>
    <li id="b">world</li>
    <li id="c">!!!</li>
  </ul>
  
  <script>
    // 这个 oLi 获取的是页面中的 li 元素，就是一个元素节点
  	var oLi = document.querySelector('#b')
    
    console.log(oLi.nextElementSibling) // <li id="c">!!!</li>
  </script>
</body>
```
 

   - 只获取一个节点，不在是伪数组
   - 获取的是 `id="b"` 这个 `li` 的下一个兄弟元素节点
   - 因为 `id="b"` 的下一个兄弟元素节点就是 `id="c"` 的 `li`，是一个元素节点
-  `previousElementSibling`：获取某一个节点的 **上一个元素节点** 
```html
<body>
  <ul>
    <li id="a">hello</li>
    <li id="b">world</li>
    <li id="c">!!!</li>
  </ul>
  
  <script>
    // 这个 oLi 获取的是页面中的 li 元素，就是一个元素节点
  	var oLi = document.querySelector('#b')
    
    console.log(oLi.previousElementSibling) // <li id="a">hello</li>
  </script>
</body>
```
 

   - 只获取一个节点，不在是伪数组
   - 获取的是 `id="b"` 这个 `li` 的上一个兄弟元素节点
   - 因为 `id="b"` 的上一个兄弟元素节点就是 `id="a"` 的 `li`，是一个元素节点
-  `parentNode`：获取某一个节点的 **父节点** 
```html
<body>
  <ul>
    <li id="a">hello</li>
    <li id="b">world</li>
    <li id="c">!!!</li>
  </ul>
  
  <script>
    // 这个 oLi 获取的是页面中的 li 元素，就是一个元素节点
  	var oLi = document.querySelector('#b')
    
    console.log(oLi.parentNode) // <ul>...</ul>
  </script>
</body>
```
 

   - 只获取一个节点，不在是伪数组
   - 获取的是当前这个 `li` 的父元素节点
   - 因为这个 `li` 的父亲就是 `ul`，所以获取到的就是 `ul`，是一个元素节点
-  `attributes`：获取某一个 **元素节点** 的所有 **属性节点** 
```html
<body>
  <ul>
    <li id="a" a="100" test="test">hello</li>
  </ul>
  
  <script>
    // 这个 oLi 获取的是页面中的 li 元素，就是一个元素节点
  	var oLi = document.querySelector('#a')
    
    console.log(oLi.attributes) 
    /*
    	NamedNodeMap {0: id, 1: a, 2: test, id: id, a: a, test: test, length: 3}
      0: id
      1: a
      2: test
      length: 3
      a: a
      id: id
      test: test
      __proto__: NamedNodeMap
    
    */
  </script>
</body>
```
 

   - 获取的是一组数据，是该元素的所有属性，也是一个伪数组
   - 这个 `li` 有三个属性，`id` / `a` / `test` 三个，所以就获取到了这三个

##### 4. 节点属性

-  我们已经知道节点会分成很多种，而且我们也能获取到各种不同的节点 
-  接下来我们就来聊一些各种节点之间属性的区别 
-  我们先准备一段代码 
```html
<body>
  <ul test="我是 ul 的一个属性">
    <li>hello</li>
  </ul>

  <script>
    // 先获取 ul
    var oUl = document.querySelector('ul')
    
    // 获取到 ul 下的第一个子元素节点，是一个元素节点
    var eleNode = oUl.firstElementChild
    
    // 获取到 ul 的属性节点组合，因为是个组合，我们要拿到节点的话要用索引
    var attrNode = oUl.attributes[0]

    // 获取到 ul 下的第一个子节点，是一个文本节点
    var textNode = oUl.firstChild
  </script>
</body>
```
 

###### nodeType

-  `nodeType`：获取节点的节点类型，用数字表示 
```javascript
console.log(eleNode.nodeType) // 1
console.log(attrNode.nodeType) // 2
console.log(textNode.nodeType) // 3
```
 

   - `nodeType === 1` 就表示该节点是一个 **元素节点**
   - `nodeType === 2` 就表示该节点是一个 **属性节点**
   - `nodeType === 3` 就表示该节点是一个 **注释节点**

###### nodeName

-  `nodeName`：获取节点的节点名称 
```javascript
console.log(eleNode.nodeName) // LI
console.log(attrNode.nodeName) // test
console.log(textNode.nodeName) // #text
```
 

   - 元素节点的 `nodeName` 就是 **大写标签名**
   - 属性节点的 `nodeName` 就是 **属性名**
   - 文本节点的 `nodeName` 都是 **#text**

###### nodeValue

-  `nodeValue`： 获取节点的值 
```javascript
console.log(eleNode.nodeValue) // null
console.log(attrNode.nodeValue) // 我是 ul 的一个属性
console.log(textNode.nodeValue) // 换行 + 空格
```
 

   - 元素节点没有 `nodeValue`
   - 属性节点的 `nodeValue` 就是 **属性值**
   - 文本节点的 `nodeValue` 就是 **文本内容**

###### 汇总
| - | nodeType | nodeName | nodeValue |
| --- | --- | --- | --- |
| 元素节点 | 1 | 大写标签名 | null |
| 属性节点 | 2 | 属性名 | 属性值 |
| 文本节点 | 3 | #text | 文本内容 |


##### 5. 操作 DOM 节点

- 我们所说的操作无非就是 **增删改查（CRUD）**
- 创建一个节点（因为向页面中增加之前，我们需要先创建一个节点出来）
- 向页面中增加一个节点
- 删除页面中的某一个节点
- 修改页面中的某一个节点
- 获取页面中的某一个节点

###### 创建一个节点

-  `createElement`：用于创建一个元素节点 
```javascript
// 创建一个 div 元素节点
var oDiv = document.createElement('div')

console.log(oDiv) // <div></div>
```
 

   - 创建出来的就是一个可以使用的 div 元素
-  `createTextNode`：用于创建一个文本节点 
```javascript
// 创建一个文本节点
var oText = document.createTextNode('我是一个文本')

console.log(oText) // "我是一个文本"
```
 

###### 向页面中加入一个节点

-  `appendChild`：是向一个元素节点的末尾追加一个节点 
-  语法： `父节点.appendChild(要插入的子节点)` 
```javascript
// 创建一个 div 元素节点
var oDiv = document.createElement('div')
var oText = document.createTextNode('我是一个文本')

// 向 div 中追加一个文本节点
oDiv.appendChild(oText)

console.log(oDiv) // <div>我是一个文本</div>
```
 

-  `insertBefore`：向某一个节点前插入一个节点 
-  语法： `父节点.insertBefore(要插入的节点，插入在哪一个节点的前面)` 
```html
<body>
  <div>
    <p>我是一个 p 标签</p>
  </div>
  
  <script>
  	var oDiv = document.querySelector('div')
    var oP = oDiv.querySelector('p')
    
    // 创建一个元素节点
    var oSpan = document.createElement('span')
    
    // 将这个元素节点添加到 div 下的 p 的前面
    oDiv.insertBefore(oSpan, oP)
    
    console.log(oDiv)
    /*
    	<div>
    		<span></span>
    		<p>我是一个 p 标签</p>
    	</div>
    */
  </script>
</body>
```
 

###### 删除页面中的某一个节点

-  `removeChild`：移除某一节点下的某一个节点 
-  语法：`父节点.removeChild(要移除的字节点)` 
```html
<body>
  <div>
    <p>我是一个 p 标签</p>
  </div>
  
  <script>
  	var oDiv = document.querySelector('div')
    var oP = oDiv.querySelector('p')
    
    // 移除 div 下面的 p 标签
    oDiv.removeChild(oP)
    
    console.log(oDiv) // <div></div>
  </script>
</body>
```
 

###### 修改页面中的某一个节点

-  `replaceChild`：将页面中的某一个节点替换掉 
-  语法： `父节点.replaceChild(新节点，旧节点)` 
```html
<body>
  <div>
    <p>我是一个 p 标签</p>
  </div>
  
  <script>
  	var oDiv = document.querySelector('div')
    var oP = oDiv.querySelector('p')
    
    // 创建一个 span 节点
    var oSpan = document.createElement('span')
    // 向 span 元素中加点文字
    oSpan.innerHTML = '我是新创建的 span 标签'
    
   	// 用创建的 span 标签替换原先 div 下的 p 标签
    oDiv.replaceChild(oSpan, oP)
    
    console.log(oDiv)
    /*
    	<div>
    		<span>我是新创建的 span 标签</span>
    	</div>
    */
  </script>
</body>
```
 

##### 6. 获取元素的偏移量

- 就是元素在页面上相对于参考父级的左边和上边的距离

###### offsetParent

- 获取元素的偏移量参考父级
- 其实就是假设你要给一个元素 **绝对定位** 的时候
- 它是根据谁来进行定位的
- 那么这个元素的偏移量参考父级就是谁

###### offsetLeft 和 offsetTop

- 获取的是元左边的偏移量和上边的偏移量
- `offsetLeft` ： 该元素相对于参考父级的左侧偏移量
- `offsetTop` ： 该元素相对于参考父级的上侧偏移量

##### 7. 获取元素尺寸

- 就是获取元素的 "占地面积"

###### offsetWith 和 offsetHeight

- `offsetWidth` ： 获取的是元素 内容 + padding + border 的宽度
- `offsetHeight` ： 获取的是元素 内容 + padding + border 的高度

###### clientWidth 和 clientHeight

-  `clientWidth` ： 获取的是元素 内容 + padding 的宽度 
-  `clientHeight` ： 获取的是元素 内容 + padding 的高度 

注意:

- 获取到的尺寸是没有单位的数字
- 当元素在页面中不占位置的时候， 获取到的是 0 
   - `display: none;` 元素在页面不占位
   - `visibility: hidden;` 元素在页面占位

##### 8. 获取浏览器窗口尺寸

-  我们之前学过一个 `innerWidth` 和 `innerHeight` 
-  他们获取到的是窗口包含滚动条的尺寸 
-  下面我们学习两个不包含滚动条的尺寸获取方式 
-  `document.documentElement.clientWidth` ： 可视窗口的宽度 
-  `document.documentElement.clientHeight` ： 可视窗口的高度 

##### 9. 事件

-  一个事件由什么东西组成 
   - 触发谁的事件：事件源
   - 触发什么事件：事件类型
   - 触发以后做什么：事件处理函数
```javascript
var oDiv = document.querySelector('div')

oDiv.onclick = function () {}
// 谁来触发事件 => oDiv => 这个事件的事件源就是 oDiv
// 触发什么事件 => onclick => 这个事件类型就是 click
// 触发之后做什么 => function () {} => 这个事件的处理函数
```

   - 我们想要在点击 div 以后做什么事情，就把我们要做的事情写在事件处理函数里面
```javascript
var oDiv = document.querySelector('div')

oDiv.onclick = function () {
  console.log('你点击了 div')
}
```

   - 当我们点击 `div` 的时候，就会执行事件处理函数内部的代码
   - 每点击一次，就会执行一次事件处理函数

##### 10 事件的绑定方式

-  我们现在给一个注册事件都是使用 `onxxx` 的方式 
-  但是这个方式不是很好，只能给一个元素注册一个事件 
-  一旦写了第二个事件，那么第一个就被覆盖了 
```javascript
oDiv.onclick = function () {
  console.log('我是第一个事件')
}

oDiv.onclick = function () {
  console.log('我是第二个事件')
}
```
 

   - 当你点击的时候，只会执行第二个，第一个就没有了
-  我们还有一种事件监听的方式去给元素绑定事件 
-  使用 `addEventListener` 的方式添加 
   - 这个方法不兼容，在 IE 里面要使用 `attachEvent`
-  `addEventListener` :  非 IE 7 8 下使用 
-  语法： `元素.addEventListener('事件类型'， 事件处理函数， 冒泡还是捕获)` 
```javascript
oDiv.addEventListener('click', function () {
  console.log('我是第一个事件')
}, false)

oDiv.addEventListener('click', function () {
  console.log('我是第二个事件')
}, false)
```
 

   - 当你点击 div 的时候，两个函数都会执行，并且会按照你注册的顺序执行
   - 先打印 `我是第一个事件` 再打印 `我是第二个事件`
   - 注意： **事件类型的时候不要写 on，点击事件就是 click，不是 onclick**
-  `attachEvent` ：IE 7 8 下使用 
-  语法： `元素.attachEvent('事件类型'， 事件处理函数)` 
```javascript
oDiv.attachEvent('onclick', function () {
  console.log('我是第一个事件')
})

oDiv.attachEvent('onclick', function () {
  console.log('我是第二个事件')
})
```
 

   - 当你点击 div 的时候，两个函数都会执行，并且会按照你注册的顺序倒叙执行
   - 先打印 `我是第二个事件` 再打印 `我是第一个事件`
   - 注意： **事件类型的时候要写 on，点击事件就行 onclick**

**两个方式的区别**

- 注册事件的时候事件类型参数的书写 
   - `addEventListener` ： 不用写 on
   - `attachEvent` ： 要写 on
- 参数个数 
   - `addEventListener` ： 一般是三个常用参数
   - `attachEvent` ： 两个参数
- 执行顺序 
   - `addEventListener` ： 顺序注册，顺序执行
   - `attachEvent` ： 顺序注册，倒叙执行
- 适用浏览器 
   - `addEventListener` ： 非 IE 7 8 的浏览器
   - `attachEvent` ： IE 7 8 浏览器

##### 11. 常见的事件

- 我们在写页面的时候经常用到的一些事件
- 大致分为几类，**浏览器事件** / **鼠标事件** / **键盘事件** / **表单事件** / **触摸事件**
- 不需要都记住，但是大概要知道

###### 浏览器事件

- `load` ： 页面全部资源加载完毕
- `scroll` ： 浏览器滚动的时候触发
- ...

###### 鼠标事件

- `click` ：点击事件
- `dblclick` ：双击事件
- `contextmenu` ： 右键单击事件
- `mousedown` ：鼠标左键按下事件
- `mouseup` ：鼠标左键抬起事件
- `mousemove` ：鼠标移动
- `mouseover` ：鼠标移入事件
- `mouseout` ：鼠标移出事件
- `mouseenter` ：鼠标移入事件
- `mouseleave` ：鼠标移出事件
- ...

###### 键盘事件

- `keyup` ： 键盘抬起事件
- `keydown` ： 键盘按下事件
- `keypress` ： 键盘按下再抬起事件
- ...

###### 表单事件

- `change` : 表单内容改变事件
- `input` : 表单内容输入事件
- `submit` : 表单提交事件
- ...

###### 触摸事件

- `touchstart` ： 触摸开始事件
- `touchend` ： 触摸结束事件
- `touchmove` ： 触摸移动事件
- ...

##### 12. 事件对象

-  什么是事件对象？ 
-  就是当你触发了一个事件以后，对该事件的一些描述信息 
-  例如： 
   - 你触发一个点击事件的时候，你点在哪个位置了，坐标是多少
   - 你触发一个键盘事件的时候，你按的是哪个按钮
   - ...
-  每一个事件都会有一个对应的对象来描述这些信息，我们就把这个对象叫做 **事件对象** 
-  浏览器给了我们一个 **黑盒子**，叫做 `window.event`，就是对事件信息的所有描述 
   - 比如点击事件
   - 你点在了 `0，0` 位置，那么你得到的这个事件对象里面对应的就会有这个点位的属性
   - 你点在了 `10, 10` 位置，那么你得到的这个事件对象里面对应的就会有这个点位的属性
   - ...
```javascript
oDiv.onclick = function () {
  console.log(window.event.X轴坐标点信息)
  console.log(window.event.Y轴坐标点信息)
}
```

-  这个玩意很好用，但是一般来说，好用的东西就会有 **兼容性问题** 
-  在 `IE低版本` 里面这个东西好用，但是在 `高版本IE` 和 `Chrome` 里面不好使了 
-  我们就得用另一种方式来获取 **事件对象** 
-  在每一个事件处理函数的行参位置，默认第一个就是 **事件对象** 
```javascript
oDiv.onclick = function (e) {
  // e 就是和 IE 的 window.event 一样的东西
  console.log(e.X轴坐标点信息)
  console.log(e.Y轴坐标点信息)
}
```
 

-  综上所述，我们以后在每一个事件里面，想获取事件对象的时候，都用兼容写法 
```javascript
oDiv.onclick = function (e) {
  e = e || window.event
  console.log(e.X轴坐标点信息)
  console.log(e.Y轴坐标点信息)
}
```
 

###### 点击事件的光标坐标点获取

![](%E7%AC%94%E8%AE%B0.assets/image-20220530215226855.png#crop=0&crop=0&crop=1&crop=1&id=LSkre&originalType=binary&ratio=1&rotation=0&showTitle=false&status=done&style=none&title=)

![](%E7%AC%94%E8%AE%B0.assets/image-20220530220140448.png#crop=0&crop=0&crop=1&crop=1&id=bYBZ8&originalType=binary&ratio=1&rotation=0&showTitle=false&status=done&style=none&title=)

![](%E7%AC%94%E8%AE%B0.assets/image-20220530220229523.png#crop=0&crop=0&crop=1&crop=1&id=f8c5m&originalType=binary&ratio=1&rotation=0&showTitle=false&status=done&style=none&title=)

##### 13. 事件的传播

![](%E7%AC%94%E8%AE%B0.assets/image-20220601095555972.png#crop=0&crop=0&crop=1&crop=1&id=Fe6Dn&originalType=binary&ratio=1&rotation=0&showTitle=false&status=done&style=none&title=)

- **当元素触发一个事件的时候，其父元素也会触发相同的事件，父元素的父元素也会触发相同的事件**
- 就像上面的图片一样
- 点击在红色盒子上的时候，会触发红色盒子的点击事件
- 也是点击在了粉色的盒子上，也会触发粉色盒子的点击事件
- 也是点击在了 body 上，也会触发 body 的点击事件
- 也是点击在了 html 上，也会触发 html 的点击事件
- 也是点击在了 document 上，也会触发 document 的点击事件
- 也是点击在了 window 上，也会触发 window 的点击事件
- 也就是说，页面上任何一个元素触发事件，都会一层一层最终导致 window 的相同事件触发，前提是各层级元素得有注册相同的事件，不然不会触发
- 在事件传播的过程中，有一些注意的点： 
   1. 只会传播同类事件
   2. 只会从点击元素开始按照 html 的结构逐层向上元素的事件会被触发
   3. 内部元素不管有没有该事件，只要上层元素有该事件，那么上层元素的事件就会被触发
- 到现在，我们已经了解了事件的传播，我们再来思考一个问题 
   - 事件确实会从自己开始，到 window 的所有相同事件都会触发
   - 是因为我们点在自己身上，也确实逐层的点在了直至 window 的每一个元素身上
   - 但是到底是先点在自己身上，还是先点在了 window 身上呢
   - 先点在自己身上，就是先执行自己的事件处理函数，逐层向上最后执行 window 的事件处理函数
   - 反之，则是先执行 window 的事件处理函数，逐层向下最后执行自己身上的事件处理函数

###### 冒泡、捕获、目标

- 我们刚才聊过了，每一个事件，都是有可能从自己到 window ，有可能要执行多个同类型事件
- 那么这个执行的顺序就有一些说法了

**目标**

- 你是点击在哪个元素身上了，那么这个事件的 **目标** 就是什么

**冒泡**

- 就是从事件 **目标** 的事件处理函数开始，依次向外，直到 window 的事件处理函数触发
- 也就是从下向上的执行事件处理函数

**捕获**

- 就是从 window 的事件处理函数开始，依次向内，只要事件 **目标** 的事件处理函数执行
- 也就是从上向下的执行事件处理函数

**冒泡和捕获的区别**

- 就是在事件的传播中，多个同类型事件处理函数的执行顺序不同

##### 14. 事件委托

- 就是把我要做的事情委托给别人来做
- 因为我们的冒泡机制，点击子元素的时候，也会同步触发父元素的相同事件
- 所以我们就可以把子元素的事件委托给父元素来做

###### 事件触发

-  点击子元素的时候，不管子元素有没有点击事件，只要父元素有点击事件，那么就可以触发父元素的点击事件 
```html
<body>
  <ul>
    <li>1</li>
    <li>2</li>
    <li>3</li>
  </ul>
  <script>
  	var oUl = docuemnt.querySelector('ul')
    
    oUl.addEventListener('click', function (e) {
      console.log('我是 ul 的点击事件，我被触发了')
    })
  </script>
</body>
```
 

   - 像上面一段代码，当你点击 ul 的时候肯定会触发
   - 但是当你点击 li 的时候，其实也会触发

###### target

-  target 这个属性是事件对象里面的属性，表示你点击的目标 
-  当你触发点击事件的时候，你点击在哪个元素上，target 就是哪个元素 
-  这个 target 也不兼容，在 IE 下要使用 srcElement 
```html
<body>
  <ul>
    <li>1</li>
    <li>2</li>
    <li>3</li>
  </ul>
  <script>
  	var oUl = docuemnt.querySelector('ul')
    
    oUl.addEventListener('click', function (e) {
      e = e || window.event
      var target = e.target || e.srcElement
      console.log(target)
    })
  </script>
</body>
```
 

   - 上面的代码，当你点击 ul 的时候，target 就是 ul
   - 当你点击在 li 上面的时候，target 就是 li

###### 委托

-  这个时候，当我们点击 li 的时候，也可以触发 ul 的点事件 
-  并且在事件内不，我们也可以拿到你点击的到底是 ul 还是 li 
-  这个时候，我们就可以把 li 的事件委托给 ul 来做 
```html
<body>
  <ul>
    <li>1</li>
    <li>2</li>
    <li>3</li>
  </ul>
  <script>
  	var oUl = docuemnt.querySelector('ul')
    
    oUl.addEventListener('click', function (e) {
      e = e || window.event
      var target = e.target || e.srcElement
     
      // 判断你点击的是 li
      if (target.nodeName.toUpperCase === 'LI') {
      	// 确定点击的是 li
        // 因为当你点击在 ul 上面的时候，nodeName 应该是 'UL'
        // 去做点击 li 的时候该做的事情了
        console.log('我是 li，我被点击了')
      }
    })
  </script>
</body>
```
 

   - 上面的代码，我们就可以把 li 要做的事情委托给 ul 来做

##### 15. 默认行为

- 默认行为，就是不用我们注册，它自己就存在的事情 
   - 比如我们点击鼠标右键的时候，会自动弹出一个菜单
   - 比如我们点击 a 标签的时候，我们不需要注册点击事件，他自己就会跳转页面
   - ...
- 这些不需要我们注册就能实现的事情，我们叫做 **默认事件**

###### 阻止默认行为

-  有的时候，我们不希望浏览器执行默认事件 
   - 比如我给 a 标签绑定了一个点击事件，我点击你的时候希望你能告诉我你的地址是什么
   - 而不是直接跳转链接
   - 那么我们就要把 a 标签原先的默认事件阻止，不让他执行默认事件
-  我们有两个方法来阻止默认事件 
   - `e.preventDefault()` : 非 IE 使用
   - `e.returnValue = false` ：IE 使用
-  我们阻止默认事件的时候也要写一个兼容的写法 
```html
<a href="https://www.baidu.com">点击我试试</a>
<script>
	var oA = document.querySelector('a')
  
  a.addEventListener('click', function (e) {
    e = e || window.event
    
    console.log(this.href)
    
    e.preventDefault ? e.preventDefault() : e.returnValue = false
  })
</script>
```
 

   - 这样写完以后，你点击 a 标签的时候，就不会跳转链接了
   - 而是会在控制台打印出 a 标签的 href 属性的值

##### 16. this 关键字

-  每一个函数内部都有一个关键字是 `this` 
-  可以让我们直接使用的 
-  重点： **函数内部的 this 只和函数的调用方式有关系，和函数的定义方式没有关系** 
-  函数内部的 this 指向谁，取决于函数的调用方式 
   -  全局定义的函数直接调用，`this => window` 
```javascript
function fn() {
  console.log(this)
}
fn()
// 此时 this 指向 window
```
 

   -  对象内部的方法调用，`this => 调用者` 
```javascript
var obj = {
  fn: function () {
    console.log(this)
  }
}
obj.fn()
// 此时 this 指向 obj
```
 

   -  定时器的处理函数，`this => window` 
```javascript
setTimeout(function () {
  console.log(this)
}, 0)
// 此时定时器处理函数里面的 this 指向 window
```
 

   -  事件处理函数，`this => 事件源` 
```javascript
div.onclick = function () {
  console.log(this)
}
// 当你点击 div 的时候，this 指向 div
```
 

   -  自调用函数，`this => window` 
```javascript
(function () {
  console.log(this)
})()
// 此时 this 指向 window
```
 

**call 和 apply 和 bind**

- 刚才我们说过的都是函数的基本调用方式里面的 this 指向
- 我们还有三个可以忽略函数本身的 this 指向转而指向别的地方
- 这三个方法就是 **call** / **apply** / **bind**
- 是强行改变 this 指向的方法

###### call

-  `call` 方法是附加在函数调用后面使用，可以忽略函数本身的 this 指向 
-  语法： `函数名.call(要改变的 this 指向，要给函数传递的参数1，要给函数传递的参数2， ...)` 
```javascript
var obj = { name: 'Jack' }
function fn(a, b) {
  console.log(this)
  console.log(a)
  console.log(b)
}
fn(1, 2)
fn.call(obj, 1, 2)
```
 

   - `fn()` 的时候，函数内部的 this 指向 window
   - `fn.call(obj, 1, 2)` 的时候，函数内部的 this 就指向了 obj 这个对象
   - 使用 call 方法的时候 
      - 会立即执行函数
      - 第一个参数是你要改变的函数内部的 this 指向
      - 第二个参数开始，依次是向函数传递参数

###### apply

-  `apply` 方法是附加在函数调用后面使用，可以忽略函数本身的 this 指向 
-  语法： `函数名.apply(要改变的 this 指向，[要给函数传递的参数1， 要给函数传递的参数2， ...])` 
```javascript
var obj = { name: 'Jack' }
function fn(a, b) {
  console.log(this)
  console.log(a)
  console.log(b)
}
fn(1, 2)
fn.call(obj, [1, 2])
```
 

   - `fn()` 的时候，函数内部的 this 指向 window
   - `fn.apply(obj, [1, 2])` 的时候，函数内部的 this 就指向了 obj 这个对象
   - 使用 apply 方法的时候 
      - 会立即执行函数
      - 第一个参数是你要改变的函数内部的 this 指向
      - 第二个参数是一个 **数组**，数组里面的每一项依次是向函数传递的参数

###### bind

-  `bind` 方法是附加在函数调用后面使用，可以忽略函数本身的 this 指向 
-  和 call / apply 有一些不一样，就是不会立即执行函数，而是返回一个已经改变了 this 指向的函数 
-  语法： `var newFn = 函数名.bind(要改变的 this 指向); newFn(传递参数)` 
```javascript
var obj = { name: 'Jack' }
function fn(a, b) {
  console.log(this)
  console.log(a)
  console.log(b)
}
fn(1, 2)
var newFn = fn.bind(obj)
newFn(1, 2)
```
 

   - bind 调用的时候，不会执行 fn 这个函数，而是返回一个新的函数
   - 这个新的函数就是一个改变了 this 指向以后的 fn 函数
   - `fn(1, 2)` 的时候 this 指向 window
   - `newFn(1, 2)` 的时候执行的是一个和 fn 一摸一样的函数，只不过里面的 this 指向改成了 obj

#### 四. ES6

- 我们所说的 ES5 和 ES6 其实就是在 js 语法的发展过程中的一个版本而已
- ECMAScript 就是 js 的语法 
   - 以前的版本没有某些功能
   - 在 ES5 这个版本的时候增加了一些功能
   - 在 ES6 这个版本的时候增加了一些功能
- 因为浏览器是浏览器厂商生产的 
   - ECMAScript 发布了新的功能以后，浏览器厂商需要让自己的浏览器支持这些功能
   - 这个过程是需要时间的
   - 所以到现在，基本上大部分浏览器都可以比较完善的支持了
   - 只不过有些浏览器还是不能全部支持
   - 这就出现了兼容性问题
   - 所以我们写代码的时候就要考虑哪些方法是 ES5 或者 ES6 的，看看是不是浏览器都支持

##### let 和 const 关键字

-  我们以前都是使用 `var` 关键字来声明变量的 
-  在 ES6 的时候，多了两个关键字 `let` 和 `const`，也是用来声明变量的 
-  只不过和 var 有一些区别 
   1.  `let` 和 `const` 不允许重复声明变量 
```javascript
// 使用 var 的时候重复声明变量是没问题的，只不过就是后面会把前面覆盖掉
var num = 100
var num = 200
```
   

   2.  `let` 和 `const` 声明的变量不会在预解析的时候解析（也就是没有变量提升） 
```javascript
// 因为预解析（变量提升）的原因，在前面是有这个变量的，只不过没有赋值
console.log(num) // undefined
var num = 100
```
   

   3.  `let` 和 `const` 声明的变量会被所有代码块限制作用范围 
```javascript
// var 声明的变量只有函数能限制其作用域，其他的不能限制
if (true) {
  var num = 100
}
console.log(num) // 100
```
   

-  `let` 和 `const` 的区别 
   1.  `let` 声明的变量的值可以改变，`const` 声明的变量的值不可以改变 
```javascript
let num = 100
num = 200
console.log(num) // 200
```
  

   2.  `let` 声明的时候可以不赋值，`const` 声明的时候必须赋值 
```javascript
let num
num = 100
console.log(num) // 100
```
  

##### 箭头函数

-  箭头函数是 ES6 里面一个简写函数的语法方式 
-  重点： **箭头函数只能简写函数表达式，不能简写声明式函数** 
```javascript
function fn() {} // 不能简写
const fun = function () {} // 可以简写
const obj = {
  fn: function () {} // 可以简写
}
```
 

-  语法： `(函数的行参) => { 函数体内要执行的代码 }` 
```javascript
const fn = function (a, b) {
  console.log(a)
  console.log(b)
}
// 可以使用箭头函数写成
const fun = (a, b) => {
  console.log(a)
  console.log(b)
}
```
  

###### 箭头函数的特殊性

-  箭头函数内部没有 this，箭头函数的 this 是上下文的 this 
```javascript
// 在箭头函数定义的位置往上数，这一行是可以打印出 this 的
// 因为这里的 this 是 window
// 所以箭头函数内部的 this 就是 window
const obj = {
  fn: function () {
    console.log(this)
  },
  // 这个位置是箭头函数的上一行，但是不能打印出 this
  fun: () => {
    // 箭头函数内部的 this 是书写箭头函数的上一行一个可以打印出 this 的位置
    console.log(this)
  }
}

obj.fn()
obj.fun()
```
 

   - 按照我们之前的 this 指向来判断，两个都应该指向 obj
   - 但是 fun 因为是箭头函数，所以 this 不指向 obj，而是指向 fun 的外层，就是 window
-  箭头函数内部没有 `arguments` 这个参数集合 
```javascript
const obj = {
  fn: function () {
    console.log(arguments)
  },
  fun: () => {
    console.log(arguments)
  }
}
obj.fn(1, 2, 3) // 会打印一个伪数组 [1, 2, 3]
obj.fun(1, 2, 3) // 会直接报错
```
 

-  函数的行参只有一个的时候可以不写 `()` 其余情况必须写 
```javascript
const obj = {
  fn: () => {
    console.log('没有参数，必须写小括号')
  },
  fn2: a => {
    console.log('一个行参，可以不写小括号')
  },
  fn3: (a, b) => {
    console.log('两个或两个以上参数，必须写小括号')
  }
}
```
 

-  函数体只有一行代码的时候，可以不写 `{}` ，并且会自动 return 
```javascript
const obj = {
  fn: a => {
    return a + 10
  },
  fun: a => a + 10
}

console.log(fn(10)) // 20
console.log(fun(10)) // 20
```
 

##### 函数传递参数的时候的默认值

-  我们在定义函数的时候，有的时候需要一个默认值出现 
-  就是当我不传递参数的时候，使用默认值，传递参数了就使用传递的参数 
```javascript
function fn(a) {
  a = a || 10
  console.log(a)
}
fn()   // 不传递参数的时候，函数内部的 a 就是 10
fn(20) // 传递了参数 20 的时候，函数内部的 a 就是 20
```
 

   - 在 ES6 中我们可以直接把默认值写在函数的行参位置
```javascript
function fn(a = 10) {
  console.log(a)
}
fn()   // 不传递参数的时候，函数内部的 a 就是 10
fn(20) // 传递了参数 20 的时候，函数内部的 a 就是 20
```

   - 这个默认值的方式箭头函数也可以使用
```javascript
const fn = (a = 10) => {
  console.log(a)
}
fn()   // 不传递参数的时候，函数内部的 a 就是 10
fn(20) // 传递了参数 20 的时候，函数内部的 a 就是 20
```

   - 注意： **箭头函数如果你需要使用默认值的话，那么一个参数的时候也需要写 （）**

##### 解构赋值

- 解构赋值，就是快速的从对象或者数组中取出成员的一个语法方式

###### 解构对象

-  快速的从对象中获取成员 
```javascript
// ES5 的方法向得到对象中的成员
const obj = {
  name: 'Jack',
  age: 18,
  gender: '男'
}

let name = obj.name
let age = obj.age
let gender = obj.gender
```
  

###### 解构数组

-  快速的从数组中获取成员 
```javascript
// ES5 的方式从数组中获取成员
const arr = ['Jack', 'Rose', 'Tom']
let a = arr[0]
let b = arr[1]
let c = arr[2]
```
  

###### 注意

- `{}` 是专门解构对象使用的
- `[]` 是专门解构数组使用的
- 不能混用

##### 模版字符串

-  ES5 中我们表示字符串的时候使用 `''` 或者 `""` 
-  在 ES6 中，我们还有一个东西可以表示字符串，就是 **``**（反引号） 
```javascript
let str = `hello world`
console.log(typeof str) // string
```
 

-  和单引号好友双引号的区别 
   1.  反引号可以换行书写 
```javascript
// 这个单引号或者双引号不能换行，换行就会报错了
let str = 'hello world' 

// 下面这个就报错了
let str2 = 'hello 
world'
```
  

   2.  反引号可以直接在字符串里面拼接变量 
```javascript
// ES5 需要字符串拼接变量的时候
let num = 100
let str = 'hello' + num + 'world' + num
console.log(str) // hello100world100

// 直接写在字符串里面不好使
let str2 = 'hellonumworldnum'
console.log(str2) // hellonumworldnum
```
  

      - 在 **``** 里面的 `${}` 就是用来书写变量的位置

##### 展开运算符

-  ES6 里面号新添加了一个运算符 `...` ，叫做展开运算符 
-  作用是把数组展开 
```javascript
let arr = [1, 2, 3, 4, 5]
console.log(...arr) // 1 2 3 4 5
```
 

-  合并数组的时候可以使用 
```javascript
let arr = [1, 2, 3, 4]
let arr2 = [...arr, 5]
console.log(arr2)
```
 

-  也可以合并对象使用 
```javascript
let obj = {
  name: 'Jack',
  age: 18
}
let obj2 = {
  ...obj,
  gender: '男'
}
console.log(obj2)
```
 

-  在函数传递参数的时候也可以使用 
```javascript
let arr = [1, 2, 3]
function fn(a, b, c) {
  console.log(a)
  console.log(b)
  console.log(c)
}
fn(...arr)
// 等价于 fn(1, 2, 3)
```
 

#### 五.面向对象

- 首先，我们要明确，面向对象不是语法，是一个思想，是一种 **编程模式**
- 面向： 面（脸），向（朝着）
- 面向过程： 脸朝着过程 =》 关注着过程的编程模式
- 面向对象： 脸朝着对象 =》 关注着对象的编程模式
- 实现一个效果 
   - 在面向过程的时候，我们要关注每一个元素，每一个元素之间的关系，顺序，。。。
   - 在面向过程的时候，我们要关注的就是找到一个对象来帮我做这个事情，我等待结果
- 我们以前的编程思想是，每一个功能，都按照需求一步一步的逐步完成

##### 创建对象的方式

- 因为面向对象就是一个找到对象的过程
- 所以我们先要了解如何创建一个对象

###### 调用系统内置的构造函数创建对象

-  js 给我们内置了一个 Object 构造函数 
-  这个构造函数就是用来创造对象的 
-  当 构造函数 和 new 关键字连用的时候，就可以为我们创造出一个对象 
-  因为 js 是一个动态的语言，那么我们就可以动态的向对象中添加成员了 
```javascript
// 就能得到一个空对象
var o1 = new Object() 

// 正常操作对象
o1.name = 'Jack'
o1.age = 18
o1.gender = '男'
```
 

###### 字面量的方式创建一个对象

-  直接使用字面量的形式，也就是直接写 `{}` 
-  可以在写的时候就添加好成员，也可以动态的添加 
```javascript
// 字面量方式创建对象
var o1 = {
  name: 'Jack',
  age: 18,
  gender: '男'
}

// 再来一个
var o2 = {}
o2.name = 'Rose'
o2.age = 20
o2.gender = '女'
```
 

###### 使用工厂函数的方式创建对象

-  先书写一个工厂函数 
-  这个工厂函数里面可以创造出一个对象，并且给对象添加一些属性，还能把对象返回 
-  使用这个工厂函数创造对象 
```javascript
// 1. 先创建一个工厂函数
function createObj() {
  // 手动创建一个对象
  var obj = new Object()

  // 手动的向对象中添加成员
  obj.name = 'Jack'
  obj.age = 18
  obj.gender = '男'

  // 手动返回一个对象
  return obj
}

// 2. 使用这个工厂函数创建对象
var o1 = createObj()
var o2 = createObj()
```
 

###### 使用自定义构造函数创建对象

-  工厂函数需要经历三个步骤 
   - 手动创建对象
   - 手动添加成员
   - 手动返回对象
-  构造函数会比工厂函数简单一下 
   - 自动创建对象
   - 手动添加成员
   - 自动返回对象
-  先书写一个构造函数 
-  在构造函数内向对象添加一些成员 
-  使用这个构造函数创造一个对象（和 new 连用） 
-  构造函数可以创建对象，并且创建一个带有属性和方法的对象 
-  面向对象就是要想办法找到一个有属性和方法的对象 
-  面向对象就是我们自己制造 **构造函数** 的过程 
```javascript
// 1. 先创造一个构造函数
function Person(name, gender) {
  this.age = 18
  this.name = name
  this.gender = gender
}

// 2. 使用构造函数创建对象
var p1 = new Person('Jack', 'man')
var p2 = new Person('Rose', 'woman')
```
 

##### 构造函数详解

- 我们了解了对象的创建方式
- 我们的面向对象就是要么能直接得到一个对象
- 要么就弄出一个能创造对象的东西，我们自己创造对象
- 我们的构造函数就能创造对象，所以接下来我们就详细聊聊 **构造函数**

###### 构造函数的基本使用

-  和普通函数一样，只不过 **调用的时候要和 new 连用**，不然就是一个普通函数调用 
```javascript
function Person() {}
var o1 = new Person()  // 能得到一个空对象
var o2 = Person()      // 什么也得不到，这个就是普通函数调用
```
 

   - 注意： **不写 new 的时候就是普通函数调用，没有创造对象的能力**
-  首字母大写 
```javascript
function person() {}
var o1 = new person() // 能得到一个对象

function Person() {}
var o2 = new Person() // 能得到一个对象
```
 

   - 注意： **首字母不大写，只要和 new 连用，就有创造对象的能力**
-  当调用的时候如果不需要传递参数可以不写 `()`，建议都写上 
```javascript
function Person() {}
var o1 = new Person()  // 能得到一个空对象
var o2 = new Person    // 能得到一个空对象
```
 

   - 注意： **如果不需要传递参数，那么可以不写 （），如果传递参数就必须写**
-  构造函数内部的 this，由于和 new 连用的关系，是指向当前实例对象的 
```javascript
function Person() {
  console.log(this)
}
var o1 = new Person()  // 本次调用的时候，this => o1
var o2 = new Person()  // 本次调用的时候，this => o2
```
 

   - 注意： **每次 new 的时候，函数内部的 this 都是指向当前这次的实例化对象**
-  因为构造函数会自动返回一个对象，所以构造函数内部不要写 return 
   - 你如果 return 一个基本数据类型，那么写了没有意义
   - 如果你 return 一个引用数据类型，那么构造函数本身的意义就没有了

###### 使用构造函数创建一个对象

-  我们在使用构造函数的时候，可以通过一些代码和内容来向当前的对象中添加一些内容 
```javascript
function Person() {
  this.name = 'Jack'
  this.age = 18
}

var o1 = new Person()
var o2 = new Person()
```
 

   - 我们得到的两个对象里面都有自己的成员 **name** 和 **age**
-  我们在写构造函数的时候，是不是也可以添加一些方法进去呢？ 
```javascript
function Person() {
  this.name = 'Jack'
  this.age = 18
  this.sayHi = function () {
    console.log('hello constructor')
  }
}

var o1 = new Person()
var o2 = new Person()
```
 

   - 显然是可以的，我们的到的两个对象中都有 `sayHi` 这个函数
   - 也都可以正常调用
-  但是这样好不好呢？缺点在哪里？ 
```javascript
function Person() {
  this.name = 'Jack'
  this.age = 18
  this.sayHi = function () {
    console.log('hello constructor')
  }
}

// 第一次 new 的时候， Person 这个函数要执行一遍
// 执行一遍就会创造一个新的函数，并且把函数地址赋值给 this.sayHi
var o1 = new Person()

// 第二次 new 的时候， Person 这个函数要执行一遍
// 执行一遍就会创造一个新的函数，并且把函数地址赋值给 this.sayHi
var o2 = new Person()
```
 

   - 这样的话，那么我们两个对象内的 `sayHi` 函数就是一个代码一摸一样，功能一摸一样
   - 但是是两个空间函数，占用两个内存空间
   - 也就是说 `o1.sayHi` 是一个地址，`o2.sayHi` 是一个地址
   - 所以我们执行 `console.log(o1 === o2.sayHi)` 的到的结果是 `false`
   - 缺点： **一摸一样的函数出现了两次，占用了两个空间地址**
-  怎么解决这个问题呢？ 
   - 就需要用到一个东西，叫做 **原型**

##### 原型

- 原型的出现，就是为了解决 **构造函数的缺点**
- 也就是给我们提供了一个给对象添加函数的方法
- 不然构造函数只能给对象添加属性，不能合理的添加函数就太 LOW 了

###### prototype

-  **每一个函数天生自带一个成员，叫做 prototype，是一个对象空间** 
-  即然每一个函数都有，构造函数也是函数，构造函数也有这个对象空间 
-  这个 `prototype` 对象空间可以由函数名来访问 
```javascript
function Person() {}

console.log(Person.prototype) // 是一个对象
```
 

   - 即然是个对象，那么我们就可以向里面放入一些东西
```javascript
function Person() {}

Person.prototype.name = 'prototype'
Person.prototype.sayHi = function () {}
```

-  我们发现了一个叫做 `prototype` 的空间是和函数有关联的 
-  并且可以向里面存储一些东西 
-  重点： **在函数的 prototype 里面存储的内容，不是给函数使用的，是给函数的每一个实例化对象使用的** 
-  那实例化对象怎么使用能？ 

###### __proto__

-  **每一个对象都天生自带一个成员，叫做 **`**__proto__**`**，是一个对象空间** 
-  即然每一个对象都有，实例化对象也是对象，那么每一个实例化对象也有这个成员 
-  这个 `__proto__` 对象空间是给每一个对象使用的 
-  当你访问一个对象中的成员的时候 
   - 如果这个对象自己本身有这个成员，那么就会直接给你结果
   - 如果没有，就会去 `__proto__` 这个对象空间里面找，里面有的话就给你结果
   - 未完待续。。。
-  那么这个 `__proto__` 又指向哪里呢？ 
   - 这个对象是由哪个构造函数 new 出来的
   - 那么这个对象的 `__proto__` 就指向这个构造函数的 `prototype`
```javascript
function Person() {}

var p1 = new Person()

console.log(p1.__proto__ === Person.prototype) // true
```

   - 我们发现实例化对象的 `__proto__` 和所属的构造函数的 `prototype` 是一个对象空间
   - 我们可以通过构造函数名称来向 `prototype` 中添加成员
   - 对象在访问的时候自己没有，可以自动去自己的 `__proto__` 中查找
   - 那么，我们之前构造函数的缺点就可以解决了 
      - 我们可以把函数放在构造函数的 `prototype` 中
      - 实例化对象访问的时候，自己没有，就会自动去 `__proto__` 中找
      - 那么也可以使用了
```javascript
function Person() {}

Person.prototype.sayHi = function () {
  console.log('hello Person')
}

var p1 = new Person()
p1.sayHi()
```

   - `p1` 自己没有 `sayHi` 方法，就会去自己的 `__proto__` 中查找
   - `p1.__proto__` 就是 `Person.prototype`
   - 我们又向 `Person.prototype` 中添加了 `sayHi` 方法
   - 所以 `p1.sayHi` 就可以执行了
-  到这里，当我们实例化多个对象的时候，每个对象里面都没有方法 
   - 都是去所属的构造函数的 `protottype` 中查找
   - 那么每一个对象使用的函数，其实都是同一个函数
   - 那么就解决了我们构造函数的缺点
```javascript
function Person() {}

Person.prototype.sayHi = function () {
  console.log('hello')
}

var p1 = new Person()
var p2 = new Person()

console.log(p1.sayHi === p2.sayHi)
```

   - `p1` 是 `Person` 的一个实例
   - `p2` 是 `Person` 的一个实例
   - 也就是说 `p1.__proto__` 和 `p2.__proto__` 指向的都是 `Person.prototype`
   - 当 `p1` 去调用 `sayHi` 方法的时候是去 `Person.prototype` 中找
   - 当 `p2` 去调用 `sayHi` 方法的时候是去 `Person.prototype` 中找
   - 那么两个实例化对象就是找到的一个方法，也是执行的一个方法
-  结论 
   - 当我们写构造函数的时候
   - **属性我们直接写在构造函数体内**
   - **方法我们写在原型上**

##### 原型链

- 我们刚才聊过构造函数了，也聊了原型
- 那么问题出现了，我们说构造函数的 `prototype` 是一个对象
- 又说了每一个对象都天生自带一个 `__proto__` 属性
- 那么 **构造函数的 prototype** 里面的 `__proto__` 属性又指向哪里呢？

###### 一个对象所属的构造函数

-  每一个对象都有一个自己所属的构造函数 
-  比如： 数组 
```javascript
// 数组本身也是一个对象
var arr = []
var arr2 = new Array()
```
 

   - 以上两种方式都是创造一个数组
   - 我们就说数组所属的构造函数就是 `Array`
-  比如： 函数 
```javascript
// 函数本身也是一个对象
var fn = function () {}
var fun = new Function()
```
 

   - 以上两种方式都是创造一个函数
   - 我们就说函数所属的构造函数就是 `Function`

###### constructor

- 对象的 `__proto__` 里面也有一个成员叫做 `**constructor**`
- 这个属性就是指向当前这个对象所属的构造函数

###### 链状结构

- 当一个对象我们不知道准确的是谁构造的时候，我们呢就把它看成 `Object` 的实例化对象
- 也就是说，我们的 **构造函数 的 prototype 的 **`**__proto__**` 指向的是 `Object.prototype`
- 那么 `Object.prototype` 也是个对象，那么它的 `__proto__` 又指向谁呢？
- 因为 `Object` 的 js 中的顶级构造函数，我们有一句话叫 **万物皆对象**
- 所以 `Object.prototype` 就到顶了，`Object.prototype` 的 `__proto__` 就是 null

###### 原型链的访问原则

- 我们之前说过，访问一个对象的成员的时候，自己没有就会去 `__proto__` 中找
- 接下来就是，如果 `__proto__` 里面没有就再去 `__proto__` 里面找
- 一直找到 `Object.prototype` 里面都没有，那么就会返回 `undefiend`

###### 对象的赋值

- 到这里，我们就会觉得，如果是赋值的话，那么也会按照原型链的规则来
- 但是： **并不是！并不是！并不是！** 重要的事情说三遍
- 赋值的时候，就是直接给对象自己本身赋值 
   - 如果原先有就是修改
   - 原先没有就是添加
   - 不会和 `__proto__` 有关系

##### 继承

###### 构造函数继承

```javascript
function Student(name,age,classroom){
            Person.call(this,name,age)
            this.classroom = classroom
}
```

###### 原型继承

```javascript
Student.prototype = new Person()
```

###### 组合继承

构造函数继承+原型继承

```javascript
function Person(name,age){
    this.name = name
    this.age = age
}

Person.prototype.say = function(){
    console.log("hello")
}

function Student(name,age,classroom){
    Person.call(this,name,age)
    this.classroom = classroom
}

Student.prototype = new Person()

var obj = new Student("kerwin",100,"1班")
```

#### 六. AJAX

- `ajax` 全名 `async javascript and XML`
- 是前后台交互的能力
- 也就是我们客户端给服务端发送消息的工具，以及接受响应的工具
- 是一个 **默认异步** 执行机制的功能

##### AJAX 的优势

1. 不需要插件的支持，原生 js 就可以使用
2. 用户体验好（不需要刷新页面就可以更新数据）
3. 减轻服务端和带宽的负担
4. 缺点： 搜索引擎的支持度不够，因为数据都不在页面上，搜索引擎搜索不到

##### AJAX 的使用

- 在 js 中有内置的构造函数来创建 ajax 对象
- 创建 ajax 对象以后，我们就使用 ajax 对象的方法去发送请求和接受响应

###### 创建一个 ajax 对象

```javascript
// IE9及以上
const xhr = new XMLHttpRequest()

// IE9以下
const xhr = new ActiveXObject('Mricosoft.XMLHTTP')
```

- 上面就是有了一个 ajax 对象
- 我们就可以使用这个 `xhr` 对象来发送 ajax 请求了

###### 配置链接信息

```javascript
const xhr = new XMLHttpRequest()

// xhr 对象中的 open 方法是来配置请求信息的
// 第一个参数是本次请求的请求方式 get / post / put / ...
// 第二个参数是本次请求的 url 
// 第三个参数是本次请求是否异步，默认 true 表示异步，false 表示同步
// xhr.open('请求方式', '请求地址', 是否异步)
xhr.open('get', './data.php')
```

- 上面的代码执行完毕以后，本次请求的基本配置信息就写完了

###### 发送请求

```javascript
const xhr = new XMLHttpRequest()
xhr.open('get', './data.php')

// 使用 xhr 对象中的 send 方法来发送请求
xhr.send()
```

- 上面代码是把配置好信息的 ajax 对象发送到服务端

###### 一个基本的 ajax 请求

- 一个最基本的 ajax 请求就是上面三步
- 但是光有上面的三个步骤，我们确实能把请求发送的到服务端
- 如果服务端正常的话，响应也能回到客户端
- 但是我们拿不到响应
- 如果想拿到响应，我们有两个前提条件 
   1. 本次 HTTP 请求是成功的，也就是我们之前说的 http 状态码为 200 ~ 299
   2. ajax 对象也有自己的状态码，用来表示本次 ajax 请求中各个阶段

###### ajax 状态码

- ajax 状态码 - `xhr.readyState`
- 是用来表示一个 ajax 请求的全部过程中的某一个状态 
   - `readyState === 0`：  表示未初始化完成，也就是 `open` 方法还没有执行
   - `readyState === 1`：  表示配置信息已经完成，也就是执行完 `open` 之后
   - `readyState === 2`：  表示 `send` 方法已经执行完成
   - `readyState === 3`：  表示正在解析响应内容
   - `readyState === 4`：  表示响应内容已经解析完毕，可以在客户端使用了
- 这个时候我们就会发现，当一个 ajax 请求的全部过程中，只有当 `readyState === 4` 的时候，我们才可以正常使用服务端给我们的数据
- 所以，配合 http 状态码为 200 ~ 299 
   - 一个 ajax 对象中有一个成员叫做 `xhr.status`
   - 这个成员就是记录本次请求的 http 状态码的
- 两个条件都满足的时候，才是本次请求正常完成

###### readyStateChange

-  在 ajax 对象中有一个事件，叫做 `readyStateChange` 事件 
-  这个事件是专门用来监听 ajax 对象的 `readyState` 值改变的的行为 
-  也就是说只要 `readyState` 的值发生变化了，那么就会触发该事件 
-  所以我们就在这个事件中来监听 ajax 的 `readyState` 是不是到 4 了 
```javascript
const xhr = new XMLHttpRequest()
xhr.open('get', './data.php')

xhr.send()

xhr.onreadyStateChange = function () {
  // 每次 readyState 改变的时候都会触发该事件
  // 我们就在这里判断 readyState 的值是不是到 4
  // 并且 http 的状态码是不是 200 ~ 299
  if (xhr.readyState === 4 && /^2\d{2}$/.test(xhr.status)) {
    // 这里表示验证通过
    // 我们就可以获取服务端给我们响应的内容了
  }
}
```
 

###### responseText

-  ajax 对象中的 `responseText` 成员 
-  就是用来记录服务端给我们的响应体内容的 
-  所以我们就用这个成员来获取响应体内容就可以 
```javascript
const xhr = new XMLHttpRequest()
xhr.open('get', './data.php')

xhr.send()

xhr.onreadyStateChange = function () {
  if (xhr.readyState === 4 && /^2\d{2}$/.test(xhr.status)) {
    // 我们在这里直接打印 xhr.responseText 来查看服务端给我们返回的内容
    console.log(xhr.responseText)
  }
}
```
 

##### 使用 ajax 发送请求时携带参数

- 我们使用 ajax 发送请求也是可以携带参数的
- 参数就是和后台交互的时候给他的一些信息
- 但是携带参数 get 和 post 两个方式还是有区别的

###### 发送一个带有参数的 get 请求

-  get 请求的参数就直接在 url 后面进行拼接就可以 
```javascript
const xhr = new XMLHttpRequest()
// 直接在地址后面加一个 ?，然后以 key=value 的形式传递
// 两个数据之间以 & 分割
xhr.open('get', './data.php?a=100&b=200')

xhr.send()
```
 

   - 这样服务端就能接受到两个参数
   - 一个是 a，值是 100
   - 一个是 b，值是 200

###### 发送一个带有参数的 post 请求

-  post 请求的参数是携带在请求体中的，所以不需要再 url 后面拼接 
```javascript
const xhr = new XMLHttpRequest()
xhr.open('get', './data.php')

// 如果是用 ajax 对象发送 post 请求，必须要先设置一下请求头中的 content-type
// 告诉一下服务端我给你的是一个什么样子的数据格式
xhr.setRequestHeader('content-type', 'application/x-www-form-urlencoded')

// 请求体直接再 send 的时候写在 () 里面就行
// 不需要问号，直接就是 'key=value&key=value' 的形式
xhr.send('a=100&b=200')
```
 

   - `application/x-www-form-urlencoded` 表示的数据格式就是 `key=value&key=value`

##### 封装ajax

```javascript
/*
 * @作者: kerwin
 * @公众号: 大前端私房菜
 */
function queryStringify(obj) {
  let str = ''
  for (let k in obj) str += `${k}=${obj[k]}&`
  return str.slice(0, -1)
}

// 封装 ajax
function ajax(options) {
  let defaultoptions = {
    url: "",
    method: "GET",
    async: true,
    data: {},
    headers: {},
    success: function () { },
    error: function () { }
  }
  let { url, method, async, data, headers, success, error } = {
    ...defaultoptions,
    ...options
  }

  if (typeof data === 'object' && headers["content-type"]?.indexOf("json") > -1) {
    data = JSON.stringify(data)
  }
  else {
    data = queryStringify(data)

  }
  // 如果是 get 请求, 并且有参数, 那么直接组装一下 url 信息
  if (/^get$/i.test(method) && data) url += '?' + data

  // 4. 发送请求
  const xhr = new XMLHttpRequest()
  xhr.open(method, url, async)
  xhr.onload = function () {
    if (!/^2\d{2}$/.test(xhr.status)) {
      error(`错误状态码:${xhr.status}`)
      return 
    }
    // 执行解析
    try {
      let result = JSON.parse(xhr.responseText)
      success(result)
    } catch (err) {
      error('解析失败 ! 因为后端返回的结果不是 json 格式字符串')
    }
  }

  // 设置请求头内的信息
  for (let k in headers) xhr.setRequestHeader(k, headers[k])
  if (/^get$/i.test(method)) {
    xhr.send()
  } else {
    xhr.send(data)
  }
}
```

```javascript
ajax({
    url:"http://localhost:3000/users",
    method:"GET",
    async:true,
    data:{
        username:"kerwin",
        password:"123"
    }, 
    headers:{},
    success:function(res){
        console.log(res)
    },
    error:function(err){
        console.log(err)
    }
})
```

##### Promise

- `promise` 是一个 ES6 的语法
- 承诺的意思，是一个专门用来解决异步 **回调地狱** 的问题

###### 回调地狱

-  当一个回调函数嵌套一个回调函数的时候 
-  就会出现一个嵌套结构 
-  当嵌套的多了就会出现回调地狱的情况 
-  比如我们发送三个 ajax 请求 
   - 第一个正常发送
   - 第二个请求需要第一个请求的结果中的某一个值作为参数
   - 第三个请求需要第二个请求的结果中的某一个值作为参数
```javascript
ajax({
  url: '我是第一个请求',
  success (res) {
    // 现在发送第二个请求
    ajax({
      url: '我是第二个请求'，
      data: { a: res.a, b: res.b },
      success (res2) {
        // 进行第三个请求
        ajax({
          url: '我是第三个请求',
          data: { a: res2.a, b: res2.b },
  				success (res3) { 
            console.log(res3) 
          }
        })
      }
    })
  }
})
```

-  **回调地狱，其实就是回调函数嵌套过多导致的** 

![](%E7%AC%94%E8%AE%B0.assets/%E5%9B%9E%E8%B0%83%E5%9C%B0%E7%8B%B1.jpeg#crop=0&crop=0&crop=1&crop=1&id=W4V8F&originalType=binary&ratio=1&rotation=0&showTitle=false&status=done&style=none&title=)

- 当代码成为这个结构以后，已经没有维护的可能了
- 所以我们要把代码写的更加的艺术一些

###### PROMISE

-  为了解决回调地狱 
-  我们就要使用 promise 语法 
-  语法： 
```javascript
new Promise(function (resolve, reject) {
  // resolve 表示成功的回调
  // reject 表示失败的回调
}).then(function (res) {
  // 成功的函数
}).catch(function (err) {
  // 失败的函数
})
```
 

-  promise 就是一个语法 
   - 我们的每一个异步事件，在执行的时候
   - 都会有三个状态，执行中 / 成功 / 失败
-  因为它包含了成功的回调函数 
-  所以我们就可以使用 promise 来解决多个 ajax 发送的问题 
```javascript
new Promise(function (resolve, reject) {
  ajax({
    url: '第一个请求',
    success (res) {
      resolve(res)
    }
  })
}).then(function (res) {
  // 准备发送第二个请求
  return new Promise(function (resolve, reject) {
    ajax({
      url: '第二个请求',
      data: { a: res.a, b: res.b },
      success (res) {
        resolve(res)
      }
    })
  })
}).then(function (res) {
  ajax({
    url: '第三个请求',
    data: { a: res.a, b: res.b },
    success (res) {
      console.log(res)
    }
  })
})
```
 

##### ASYNC/AWAIT

-  `async/await` 是一个 es7 的语法 
-  这个语法是 **回调地狱的终极解决方案** 
-  语法： 
```javascript
async function fn() {
  const res = await promise对象
}
```
 

-  这个是一个特殊的函数方式 
-  可以 await 一个 promise 对象 
-  **可以把异步代码写的看起来像同步代码** 
-  只要是一个 promiser 对象，那么我们就可以使用 `async/await` 来书写 
```javascript
async function fn() {
  const res = new Promise(function (resolve, reject) {
    ajax({
      url: '第一个地址',
      success (res) {
        resolve(res)
      }
    })
  })
  
  // res 就可以得到请求的结果
  const res2 = new Promise(function (resolve, reject) {
    ajax({
      url: '第二个地址',
      data: { a: res.a, b: res.b },
      success (res) {
        resolve(res)
      }
    })
  })
  
  const res3 = new Promise(function (resolve, reject) {
    ajax({
      url: '第三个地址',
      data: { a: res2.a, b: res2.b },
      success (res) {
        resolve(res)
      }
    })
  })
  
  // res3 就是我们要的结果
  console.log(res3)
}
```
 

   - 这样的异步代码写的就看起来像一个同步代码了

##### fetch

	_XMLHttpRequest 是一个设计粗糙的 API，配置和调用方式非常混乱， 而且基于事件的异步模型写起来不友好。_

	**兼容性不好 polyfill: **[**https://github.com/camsong/fetch-ie8**](https://github.com/camsong/fetch-ie8)

```javascript
fetch("http://localhost:3000/users")
            .then(res=>res.json())
            .then(res=>{
                console.log(res)
            })


fetch("http://localhost:3000/users",{
            method:"POST",
            headers:{
                "content-type":"application/json"
            },
            body:JSON.stringify({
                username:"kerwin",
                password:"123"
            })
        })
            .then(res=>res.json())
            .then(res=>{
                console.log(res)
            })

fetch("http://localhost:3000/users/5",{
            method:"PUT",
            headers:{
                "content-type":"application/json"
            },
            body:JSON.stringify({
                username:"kerwin",
                password:"456"
            })
        })
            .then(res=>res.json())
            .then(res=>{
                console.log(res)
            })

fetch("http://localhost:3000/users/5",{
            method:"DELETE"
        })
            .then(res=>res.json())
            .then(res=>{
                console.log(res)
            })
```

```javascript
//错误处理
fetch("http://localhost:3000/users1")
            .then(res=>{
                if(res.ok){
                    return res.json()
                }else{
                    return Promise.reject({
                        status:res.status,
                        statusText:res.statusText
                    })
                }
            })
            .then(res=>{
                console.log(res)
            })
            .catch(err=>{
                console.log(err)
            })
```

##### cookie

**cookie的特点**

1. 只能存储文本
2. 单条存储有大小限制4KB左右
数量限制（一般浏览器，限制大概在50条左右）
3. 读取有域名限制：不可跨域读取，只能由来自 写入cookie的 同一域名 的网页可进行读取。简单的讲就是，哪个服务器发给你的cookie，只有哪个服务器有权利读取
4. 时效限制：每个cookie都有时效，默认的有效期是，会话级别：就是当浏览器关闭，那么cookie立即销毁，但是我们也可以在存储的时候手动设置cookie的过期时间
5. 路径限制：存cookie时候可以指定路径，只允许子路径读取外层cookie，外层不能读取内层。

##### jsonp

Jsonp(JSON with Padding) 是 json 的一种"使用模式"，可以让网页从别的域名（网站）那获取资料，即跨域读取数据。

为什么我们从不同的域（网站）访问数据需要一个特殊的技术( JSONP )呢？这是因为同源策略。

```javascript
const script = document.createElement('script')
script.src = './kerwin.txt'
document.body.appendChild(script)
```

#### 七. jQuery

- `jQuery` 是一个前端库，也是一个方法库
- 他里面封装着一些列的方法供我们使用
- 我们常用的一些方法它里面都有，我们可以直接拿来使用就行了
- `jQuery` 之所以好用，很多人愿意使用，是因为他的几个优点太强大了 
   1. 优质的选择器和筛选器
   2. 好用的隐式迭代
   3. 强大的链式编程
- 因为这些东西的出现，很多时候我们要做的事情被 “一行代码解决”
- 接下来我们就来认识一下 `jQuery`

##### 1. jQuery 的使用

-  [jQuery官网](https://jquery.com/) 
-  [jQuery方法大全中文网](http://jquery.cuishifeng.cn/) 
   - 这个网站可以多看看
   - 里面是 `jQuery` 的方法大全，而且是中文的
-  我们要使用 `jQuery` 首先要下载一个 
   - 可以去官网下载
-  然后就是再页面里面引入 `jQuery.js` 就行了 
```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <title>Document</title>
</head>
<body>
  <script src="./jquery/jquery.js"></script>
</body>
</html>
```
 

-  然后就可以开始使用了 
-  `jQuery` 向全局暴露的接口就是 `jQuery` 或者 `$` 都行 

##### 2.选择器和筛选器

- 选择器和筛选器就是用来帮我们获取 DOM 元素的

###### 2-1选择器

-  `jQuery` 有着相当强大的选择器 
```javascript
// 按照 id 获取页面中的元素
const ele = jQuery('#box') 
const ele = $('#box')
```
 

   - 上面两个都可以按照 id 来获取元素
```javascript
// 按照类名来选择
const eles = jQuery('.a')
const eles = $('.a')
```

   - 上面就是按照类名来选择元素，可以获取到一组元素
```javascript
const lis = jQuery('li')
const lis = $('li')
```

   - 上面就是按照标签名来获取元素，可以获取到一组元素
```javascript
const eles = jQuery('ul > li')
const eles = $('ul > li')
```

   - 上面就是按照选择器来获取元素，可以获取到一组元素

###### 2-2特殊选择器

-  直接找到第一个 
```javascript
$('li:first') // 找到所有 li 中的第一个
```
 

-  直接找到最后一个 
```javascript
$('li:last') // 找到所有 li 中的最后一个
```
 

-  直接找到第几个 
```javascript
$('li:eq(3)') // 找到所有 li 中索引为 3 的那个
```
 

-  找到所有奇数个 
```javascript
$('li:odd') // 找到所有 li 中索引为 奇数 的
```
 

-  找到所有偶数 
```javascript
$('li:even') // 找到所有 li 中索引为 偶数 的
```
 

###### 2-3筛选器

-  jQuery 的筛选器就是在选择器选择到一组元素以后 
-  对元素进行筛选，也可以对准确的某一个元素进行判断和获取 
   1.  找到所有元素中的第一个 
```javascript
$('li').first()
```
 

   2.  找到所有元素中的最后一个 
```javascript
$('li').last()
```
 

   3.  找到某一个元素的下一个兄弟元素 
```javascript
$('li:eq(3)').next()
```
 

   4.  找到某一个元素的上一个兄弟元素 
```javascript
$('li:eq(3)').prev()
```
 

   5.  找到某一个元素的后面的所有兄弟元素 
```javascript
$('li:eq(3)').nextAll()
```
 

   6.  找到某一个元素的前面的所有兄弟元素 
```javascript
$('li:eq(3)').prevAll()
```
 

   7.  找到某一个元素的父元素 
```javascript
$('li:eq(3)').parent()
```
 

   8.  找到某一个元素的所有结构父级，一直到 html 
```javascript
$('li:eq(3)').parents()
```
 

   9.  找到一组元素中的某一个 
```javascript
// 在 li 的所有父级里面找到所有 body 标签
$('li').parents().find('body')

// 找到 div 标签下所有后代元素中所有类名为 box 的元素
$('div').find('.box')
```
 

##### 3.属性操作

-  给一个元素添加某个属性 
```javascript
// 给 div 元素添加一个 id 属性，值是 box
$('div').prop('id', 'box')
// 获取 div 的 id 属性
console.log($('div').prop('id'))
```
 

   - prop 这个方法只能添加元素自己本身就有的属性
   - 如果是添加的自定义属性，不会显示在标签上，但是可以使用
-  给一个元素添加某个自定义属性 
```javascript
// 给 div 添加一个 index 属性，值是 1
$('div').attr('index', 1)
// 获取 div 的 index 属性
console.log($('div').attr('index'))
```
 

-  移除元素的某一个属性 
```javascript
// 移除元素自己本身的属性
$('div').removeProp('id')
// 移除元素的自定义属性
$('div').removeAttr('index')
```
 

##### 4.操作元素的类名

```javascript
// 判断某一个元素有没有某一个 class
$('div').hasClass('box') // true 表示该元素有 box 类名，false 表示该元素没有 box 类名

// 给元素添加一个类名
$('div').addClass('box2') // 给 div 元素添加一个 box2 类名

// 移除元素的类名
$('div').removeClass('box') // 移除 div 的 box 类名

// 切换元素类名
$('div').toggleClass('box3') // 如果元素本身有这个类名就移除，本身没有就添加
```

##### 5. 操作元素的内容

```javascript
给元素的 innerHTML 赋值
$('div').html('<span>hello world</span>')
// 获取元素的 innerHTML
$('div').html()

// 给元素的 innerText 赋值
$('div').text('hello world')
// 获取元素的 innerText
$('div').text()

// 给元素的 value 赋值
$('input').val('admin')
// 获取元素的 value 值
$('input').val()
```

##### 6. 操作样式

-  jQuery 操作元素的样式就是一个方法 `css` 
```javascript
// 给元素设置一个 css 样式
$('div').css('width', '100px')

// 获取元素的某一个样式
$('div').css('width')

// 给元素设置一组样式
$('div').css({
    width: '100px',
    height: '200px'
})
```
 

##### 7. 元素尺寸

-  操作元素的宽和高 
```javascript
// 获取 div 元素内容位置的高，不包含 padding 和 border
$('div').height()
// 设置 div 内容位置的高为 200px
$('div').height(200)

// 获取 div 元素内容位置的宽，不包含 padding 和 border
$('div').width()
// 设置 div 内容位置的宽为 200px
$('div').width(200)
```
 

-  获取元素的内置宽和高 
```javascript
// 获取 div 元素内容位置的高，包含 padding 不包含 border
$('div').innerHeight()

// 获取 div 元素内容位置的宽，包含 padding 不包含 border
$('div').innerWidth()
```
 

-  获取元素的外置宽和高 
```javascript
// 获取 div 元素内容位置的高，包含 padding 和 border
$('div').outerHeight()
// 获取 div 元素内容位置的高，包含 padding 和 border 和 margin
$('div').outerHeight(true)

// 获取 div 元素内容位置的宽，包含 padding 和 border
$('div').outerWidth()
// 获取 div 元素内容位置的高，包含 padding 和 border 和 margin
$('div').outerWidth(true)
```
 

##### 8. 元素位置

-  元素相对页面的位置 
```javascript
// 获取 div 相对页面的位置
$('div').offset() // 得到的是以一个对象 { left: 值, top: 值 }

// 给 div 设置相对页面的位置
$('div').offset({ left: 100, top: 100 })
// 获取定位到一个距离页面左上角 100 100 的位置
```
 

-  元素相对于父元素的偏移量 
```javascript
// 获取 div 相对于父元素的偏移量（定位的值）
$('div').position()
```
 

-  获取页面卷去的高度和宽度 
```javascript
window.onscroll = function () {
    // 获取浏览器卷去的高度
    console.log($(window).scrollTop())
}

window.onscroll = function () {
    // 获取浏览器卷去的宽度
    console.log($(window).scrollLeft())
}
```
 

##### 9. 元素事件

-  绑定事件的方法 
```javascript
// 给 button 按钮绑定一个点击事件
$('button').on('click', function () {
    console.log('我被点击了')
})

// 给 button 按钮绑定一个点击事件，并且携带参数
$('button').on('click', { name: 'Jack' }, function (e) {
    console.log(e) // 所有的内容都再事件对象里面
    console.log(e.data) // { name: 'Jack' }
})

// 事件委托的方式给 button 绑定点击事件
$('div').on('click', 'button', function () {
    console.log(this) // button 按钮
})

// 事件委托的方式给 button 绑定点击事件并携带参数
$('div').on('click', 'button', { name: 'Jack' }, function (e) {
    console.log(this) // button 按钮
    console.log(e.data)
})
```
 

-  移除事件 
```javascript
// 给 button 按钮绑定一个 点击事件，执行 handler 函数
$('button').on('click', handler)

// 移除事件使用 off
$('button').off('click', handler)
```
 

-  只能执行一次的事件 
```javascript
// 这个事件绑定再 button 按钮身上
// 当执行过一次以后就不会再执行了
$('button').one('click', handler)
```
 

-  直接触发事件 
```javascript
// 当代码执行到这里的时候，会自动触发一下 button 的 click 事件
$('button').trigger('click')
```
 

**可以直接使用的常见事件**

-  可以直接使用的事件就是可以不利用 `on` 来绑定，直接就可以使用的事件方法 
-  `click` 
```javascript
// 直接给 div 绑定一个点击事件
$('div').click(function () {
    console.log('我被点击了')
})

// 给 div 绑定一个点击事件并传递参数
$('div').click({ name: 'Jack' }, function (e) {
    console.log(e.data)
})
```
 

-  `dblclick` 
```javascript
// 直接给 div 绑定一个双击事件
$('div').dblclick(function () {
    console.log('我被点击了')
})

// 给 div 绑定一个双击事件并传递参数
$('div').dblclick({ name: 'Jack' }, function (e) {
    console.log(e.data)
})
```
 

-  `scroll` 
```javascript
// 直接给 div 绑定一个滚动事件
$('div').scroll(function () {
    console.log('我被点击了')
})

// 给 div 绑定一个滚动事件并传递参数
$('div').scroll({ name: 'Jack' }, function (e) {
    console.log(e.data)
})
```
 

##### 10.动画

-  `show` 
```javascript
// 给 div 绑定一个显示的动画
$('div').show() // 如果元素本身是 display none 的状态可以显示出来

// 给 div 绑定一个显示的动画
// 接受三个参数
// $('div').show('毫秒', '速度', '回调函数') 
$('div').show(1000, 'linear', function () {
    console.log('我显示完毕')
})
```
 

-  `hide` 
```javascript
// 给 div 绑定一个隐藏的动画
$('div').hide() // 如果元素本身是 display block 的状态可以隐藏起来

// 给 div 绑定一个显示的动画
// 接受三个参数
// $('div').show('毫秒', '速度', '回调函数') 
$('div').hide(1000, 'linear', function () {
    console.log('我隐藏完毕')
})
```
 

-  `toggle` 
```javascript
// 给 div 绑定一个切换的动画
$('div').hide() // 元素本身是显示，那么就隐藏，本身是隐藏那么就显示

// 给 div 绑定一个显示的动画
// 接受三个参数
// $('div').show('毫秒', '速度', '回调函数') 
$('div').toggle(1000, 'linear', function () {
    console.log('动画执行完毕')
})
```
 

-  `animate` 
```javascript
// 定义一个自定义动画
$('.show').click(function () {
    $('div').animate({
        width: 500,
        height: 300
    }, 1000, 'linear', function () {
        console.log('动画运动完毕')
    })
})
```
 

-  `stop` 
```javascript
// 立刻定制动画
$('div').stop() // 就停止再当前状态
```
 

-  `finish` 
```javascript
// 立刻结束动画
$('div').finish() // 停止在动画结束状态
```
 

##### 11. 元素操作

-  创建一个元素 
```javascript
var div = $('<div></div>')
```
 

-  内部插入元素 
```javascript
// 向 div 元素中插入一个 p 元素，放在最后
$('div').append($('<p></p>'))

// 把 p 元素插入到 div 中去，放在最后
$('<p>hello</p>').appendTo($('div'))

// 向 div 元素中插入一个 p 元素，放在最前
$('div').prepend($('<p></p>'))

// 把 p 元素插入到 div 中去，放在最前
$('<p>hello</p>').prependTo($('div'))
```
 

-  外部插入元素 
```javascript
// 在 div 的后面插入一个元素 p
$('div').after($('<p></p>'))

// 在 div 的前面插入一个元素 p
$('div').before($('<p></p>'))

// 把 p 元素插入到 div 元素的后面
$('div').insertAfter($('<p></p>'))

// 把 p 元素插入到 div 元素的前面
$('div').insertBefore($('<p></p>'))
```
 

-  替换元素 
```javascript
// 把 div 元素替换成 p 元素
$('div').replaceWith($('<p></p>'))

// 用 p 元素替换掉 div 元素
$('<p></p>').replaceAll($('div'))
```
 

-  删除元素 
```javascript
// 删除元素下的所有子节点
$('div').empty()

// 把自己从页面中移除
$('div').remove()
```
 

-  克隆元素 
```javascript
// 克隆一个 li 元素
// 接受两个参数
//   参数1： 自己身上的事件要不要复制，默认是 false
//   参数2： 所有子节点身上的事件要不要复制，默认是 true
$('li').clone()
```
 

##### 12. 发送 ajax 请求

-  发送 get 请求 
```javascript
// 直接使用 $.get 方法来发送一个请求
/*
	参数一： 请求地址
	参数二： 请求时携带的参数
	参数三： 请求成功的回调
	参数四： 返回的数据类型
*/
$.get('./ajax.php', { id: 10 }, function (res) { console.log(res) }, 'json')
```
 

-  发送 post 请求 
```javascript
// 直接使用 $.post 方法来发送一个请求
/*
	参数一： 请求地址
	参数二： 请求时携带的参数
	参数三： 请求成功的回调
	参数四： 返回的数据类型
*/
$.post('./ajax.php', { id: 10 }, function (res) { console.log(res) }, 'json')
```
 

-  综合发送 ajax 请求 
```javascript
// 使用 $.ajax 方法
// 只接受一个参数，是一个对象，这个对象对当前的请求进行所有的配置
$.ajax({
    url: './ajax',   // 必填，请求的地址
    type: 'GET',   // 选填，请求方式，默认是 GET（忽略大小写）
    data: {},   // 选填，发送请求是携带的参数
    dataType: 'json',   // 选填，期望返回值的数据类型
    async: true,   // 选填，是否异步，默认是 true
    success () {},   // 选填，成功的回调函数
    error () {},   // 选填，失败的回调函数
    cache: true,   // 选填，是否缓存，默认是 true
    context: div,   // 选填，回调函数中的 this 指向，默认是 ajax 对象
    status: {},   // 选填，根据对应的状态码进行函数执行
    timeout: 1000,   // 选填，超时事件
})
```
 

-  发送一个 jsonp 请求 
```javascript
// 使用 $.ajax 方法也可以发送 jsonp 请求
// 只不过 dataType 要写成 jsonp
$.ajax({
    url: './jsonp.php',
    dataType: 'jsonp',
    data: { name: 'Jack', age: 18 },
    success (res) {
        console.log(res)
    },
    jsonp: 'cb',  // jsonp 请求的时候回调函数的 key
    jsonpCallback: 'fn'   // jsonp 请求的时候回调函数的名称
})
```
 

##### 13. 全局 ajax 函数

- 全局的 `ajax` 函数我们也叫做 `**ajax**`** 的钩子函数**
- 也就是在一个 `ajax` 的整个过程中的某一个阶段执行的函数
- 而且每一个 `ajax` 请求都会触发

###### ajaxStart

-  任意一个请求在 **开始** 的时候就会触发这个函数 
```javascript
$(window).ajaxStart(function () {
    console.log('有一个请求开始了')
})
```
 

###### ajaxSend

-  任意一个请求在 **准备 send 之前** 会触发这个函数 
```javascript
$(window).ajaxSend(function () {
    console.log('有一个要发送出去了')
})
```
 

###### ajaxSuccess

-  任意一个请求在 **成功** 的时候就会触发这个函数 
```javascript
$(window).ajaxSuccess(function () {
    console.log('有一个请求成功了')
})
```
 

###### ajaxError

-  任意一个请求在 **失败** 的时候就会触发这个函数 
```javascript
$(window).ajaxError(function () {
    console.log('有一个请求失败了')
})
```
 

###### ajaxComplete

-  任意一个请求在 **完成** 的时候就会触发这个函数 
```javascript
$(window).ajaxComplete(function () {
    console.log('有一个请求完成了')
})
```
 

###### ajaxStop

-  任意一个请求在 **结束** 的时候就会触发这个函数 
```javascript
$(window).ajaxStop(function () {
    console.log('有一个请求结束了')
})
```
 

##### 14.jQuery 的多库共存

-  我们一直在使用 `jQuery`，都没有什么问题 
-  但是如果有一天，我们需要引入一个别的插件或者库的时候 
-  人家也向外暴露的是 `$` 获取 `jQuery` 
-  那么，我们的 `jQuery` 就不能用了 
-  那么这个时候，`jQuery` 为我们提供了一个多库并存的方法 
```javascript
// 这个方法可以交还 jQuery 命名的控制权
jQuery.noConflict()

// 上面代码执行完毕以后 $ 这个变量就不能用了
// 但是 jQuery 可以使用
console.log($) // undefined
console.log(jQuery) // 可以使用
```
 

-  完全交出控制权 
```javascript
// 这个方法可以交并且传递一个 true 的时候，会完全交出控制权
jQuery.noConflict(true)

// 上面代码执行完毕以后 $ 这个变量就不能用了
// jQuery 这个变量也不能用了
console.log($) // undefined
console.log(jQuery) // undefined
```
 

-  更换控制权 
```javascript
// 可以用一个变量来接受返回值，这个变量就是新的控制权
var aa = jQuery.noConflict(true)

// 接下来就可以把 aa 当作 jQuery 向外暴露的接口使用了
aa('div').click(function () { console.log('我被点击了') })
```
 

##### 15 . JQuery 的插件扩展

- `jQuery` 确实很好很强大
- 但是也有一些方法是他没有的，我们的业务需求中有的时候会遇到一些它里面没有的方法
- 那么我们就可以给他扩展一些方法

###### 扩展给他自己本身

-  扩展给自己本身使用 `jQuery.extend` 这个方法 
-  扩展完后的内容只能用 `$` 或者 `jQuery` 来调用 
```javascript
// jQuery.extend 接受一个参数，是一个对象，对象里面是我们扩展的方法
jQuery.extend({
    max: function (...n) { return Math.max.apply(null, n) },
    min: function (...n) { return Math.min.apply(null, n) }
})
```
 

-  扩展完毕我们就可以使用了 
```javascript
const max = $.max(4, 5, 3, 2, 6, 1)
console.log(max) // 6
const min = $.min(4, 5, 3, 2, 6, 1)
console.log(min) // 1
```
 

###### 扩展给元素集

-  扩展完毕以后给元素的集合使用 
-  也就是我们用 `$('li')` 这样的选择器获取到的元素集合来使用 
-  使用 `jQuery.fn.extend()` 方法来扩展 
```javascript
// jQuery.fn.extend() 接受一个参数，是一个对象，对象里面是我们扩展的方法
jQuery.fn.extend({
    checked: function () {
        // return 关键字是为了保证链式编程
        // 后面的代码才是业务逻辑
        return this.each(function() { this.checked = true })
    }
})
```
 

-  扩展完毕我们就可以使用了 
```javascript
// 靠元素集合来调用
$('input[type=checkbox]').checked()
// 执行完毕之后，所有的 复选框 就都是选中状态了
```
 

#### 八. swiper

> [https://www.swiper.com.cn/](https://www.swiper.com.cn/)


```javascript
  $.get("http://localhost:3000/banner").then(res => {
            console.log(res)
            render(res)
            initSwiper()
        })

        function render(list) {
            var oslides = list.map(item => `
            <div class="swiper-slide">
                <img src="${item.imgUrl}"/>
            </div>
            `)

            // console.log(oslides.join(""))

            $(".swiper-wrapper").html(oslides.join(""))
        }


        $.extend({
            swiper: function (ele, obj) {
                new Swiper(ele,obj)
            }
        })

        function initSwiper() {
            $.swiper(".kerwin", {
                // direction: 'vertical', // 垂直切换选项
                loop: true, // 循环模式选项
                // 如果需要分页器
                pagination: {
                    el: '.swiper-pagination',
                    clickable: true
                },
                observer: true
            })
        }
```

#### 九. BootStrap

![](%E7%AC%94%E8%AE%B0.assets/image-20220716160225615.png#crop=0&crop=0&crop=1&crop=1&id=q8VwN&originalType=binary&ratio=1&rotation=0&showTitle=false&status=done&style=none&title=)

> [https://www.bootcss.com/](https://www.bootcss.com/)


```html
<div class="row">
            <div class="col-xl-3 col-lg-4 col-md-6 col-sm-12">
                <div class="card" style="width: 18rem;">
                    <img src="..." class="card-img-top" alt="...">
                    <div class="card-body">
                        <h5 class="card-title">Card title</h5>
                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of
                            the card's content.</p>
                        <a href="#" class="btn btn-primary">Go somewhere</a>
                    </div>
                </div>

            </div>
            <div class="col-xl-3 col-lg-4 col-md-6 col-sm-12">
                <div class="card" style="width: 18rem;">
                    <img src="..." class="card-img-top" alt="...">
                    <div class="card-body">
                        <h5 class="card-title">Card title</h5>
                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of
                            the card's content.</p>
                        <a href="#" class="btn btn-primary">Go somewhere</a>
                    </div>
                </div>
            </div>
            <div class="col-xl-3 col-lg-4 col-md-6 col-sm-12">
                <div class="card" style="width: 18rem;">
                    <img src="..." class="card-img-top" alt="...">
                    <div class="card-body">
                        <h5 class="card-title">Card title</h5>
                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of
                            the card's content.</p>
                        <a href="#" class="btn btn-primary">Go somewhere</a>
                    </div>
                </div>
            </div>
            <div class="col-xl-3 col-lg-4 col-md-6 col-sm-12">
                <div class="card" style="width: 18rem;">
                    <img src="..." class="card-img-top aaa" alt="...">
                    <div class="card-body">
                        <h5 class="card-title">Card title</h5>
                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of
                            the card's content.</p>
                        <a href="#" class="btn btn-primary">Go somewhere</a>
                    </div>
                </div>
            </div>
        </div>
```

#### 十. Sass

-  [SASS官网](https://www.sass.hk/) 
-  世界上最成熟、最稳定、最强大的专业级CSS扩展语言！ 
-  `sass` 是一个 `css` 的预编译工具 
-  也就是能够 **更优雅** 的书写 `css` 
-  `sass` 写出来的东西 **浏览器不认识** 
-  依旧是要转换成 `css` 在浏览器中运行 

##### 变量

-  定义一个变量，在后面的代码中使用 
-  使用 `$` 来定义变量 
```
// 定义一个 $c 作为变量，值是 红色
$c: red;

h1 {
    // 在使用 $c 这个变量
    color: $c;
}
```
 

-  上面定义的变量全局都可以使用 
-  我们也可以在规则块内定义私有变量 
```
h1 {
    // 这个 $w 变量只能在 h1 这个规则块中使用
    $w: 100px;
    width: $w;
}
```
 

##### 嵌套

-  `sass` 里面我们最长用到的就是嵌套了 
-  而且相当的好用 
```
h1 {
    width: 100px;

    div {
        width: 200px;
    }
}

// 编译结果
h1 {
    width: 100px;
}

h1 div {
    width: 200px;
}
```
 

-  这个就是嵌套，理论上可以无限嵌套下去 
```
ul {
    width: 100px;

    li {
        width: 90px;

        div {
            width: 80px;

            p {
                width: 70px;

                span: {
                    color: red;
                }
            }
        }
    }
}
```
 

###### 嵌套中的 &

-  在嵌套中还有一个标识符是 `&` 我们可以使用 
-  先来看一个例子 
```
div {
    width: 100px;
    height: 100px;

    :hover {
        width: 200px;
    }
}

// 我想的是 div 被鼠标悬停的时候 width 变成 200
// 但是编译结果却是
div {
    width: 100px;
    height: 100px;
}
div :hover {
  	width: 200px;
}
```
 

-  和预想的结果不一样了 
-  这个时候就要用到 `&` 来连接了 
```
div {
    width: 100px;
    height: 100px;

    &:hover {
        width: 200px;
    }
}

// 编译结果
div {
    width: 100px;
    height: 100px;
}
div:hover {
  	width: 200px;
}
```
 

-  这个时候就和我需要的一样了 

###### 群组嵌套

-  群组嵌套就是多个标签同时嵌套 
```
div {
    width: 100px;

    .box1, .box2, .box3 {
        color: red;
    }
}

// 编译结果
div {
  	width: 100px;
}
div .box1, div .box2, div .box3 {
 	color: red;
}
```
 

-  还有一种就是多个标签同时嵌套一个标签 
```
h1, h2, h3 {
    width: 100px;

    .box {
        color: red;
    }
}

// 编译结果
h1, h2, h3 {
 	width: 100px;
}
h1 .box, h2 .box, h3 .box {
  	color: red;
}
```
 

##### 混入

-  也叫 **混合器** 
-  其实就是定义一个 **“函数”** 在 `scss` 文件中使用 
```
// 定义一个混合器使用  @mixin 关键字
@mixin radius {
    -webkit-border-radius: 10px;
    -moz-border-radius: 10px;
    -ms-border-radius: 10px;
    -o-border-radius: 10px;
    border-radius: 10px;
}
```
 

-  上面是定义好的一个混合器 
-  他是不会被编译的，只有当你使用了他以后，才会被编译 
```
// 使用混合器使用 @include 关键字
div {
    width: 100px;
    height: 100px;

    @include radius;
}
```
 

-  这个就是吧刚才定义的混合器拿过来使用 
-  编译结果 
```
div {
    width: 100px;
    height: 100px;
    -webkit-border-radius: 10px;
    -moz-border-radius: 10px;
    -ms-border-radius: 10px;
    -o-border-radius: 10px;
    border-radius: 10px;
}
```
 

###### 混合器传参

-  我们既然说了，混合器就像一个 “函数” 一样，那么就一定可以像 “函数” 一样传递参数 
-  和 “函数” 的使用方式一样，在定时的时候是 “形参”，在调用的时候是 “实参” 
```
// 定义混合器
@mixin my_transition($pro, $dur, $delay, $tim) {
    -webkit-transition: $pro $dur $delay $tim;
    -moz-transition: $pro $dur $delay $tim;
    -ms-transition: $pro $dur $delay $tim;
    -o-transition: $pro $dur $delay $tim;
    transition: $pro $dur $delay $tim;
}
```
 

-  使用这个混合器的时候传递 “实参” 
```
div {
    width: 100px;
    height: 100px;

    @include my_transition(all, 1s, 0s, linear);
}
```
 

-  编译结果 
```
div {
    width: 100px;
    height: 100px;
    -webkit-transition: all 1s 0s linear;
    -moz-transition: all 1s 0s linear;
    -ms-transition: all 1s 0s linear;
    -o-transition: all 1s 0s linear;
    transition: all 1s 0s linear;
}
```
 

-  写了多少个 “形参”，那么调用的时候就要传递多少个 “实参” 
-  不然会报错的 

###### 参数默认值

-  我们在定义混合器的时候，也可以给一些参数写一些默认值 
-  这样一来，就可以不传递 “实参” 了 
```
// 设置一些带有默认值的参数
@mixin my_transition($dur: 1s, $pro: all, $delay: 0s, $tim: linear) {
    -webkit-transition: $dur $pro $delay $tim;
    -moz-transition: $dur $pro $delay $tim;
    -ms-transition: $dur $pro $delay $tim;
    -o-transition: $dur $pro $delay $tim;
    transition: $dur $pro $delay $tim;
}
```
 

-  使用的时候，如果你不传递，那么就是使用默认值 
```
div {
  width: 100px;
  height: 100px;

  // 使用的时候，只传递一个，剩下的使用默认值
  @include my_transition(2s);
}
```
 

-  编译结果 
```
div {
    width: 100px;
    height: 100px;
    -webkit-transition: 2s all 0s linear;
    -moz-transition: 2s all 0s linear;
    -ms-transition: 2s all 0s linear;
    -o-transition: 2s all 0s linear;
    transition: 2s all 0s linear;
}
```
 

##### 继承

-  在 `sass` 里面使用继承可以大大的提高开发效率 
-  其实继承很简单，就是把之前写过的选择器里面的内容直接拿过来一份 
```
div {
    width: 100px;
    height: 100px;
    background-color: pink;
}
```
 

-  这个是之前写过的一个规则样式表 
-  接下来我要写另外一个样式了，发现我要写的一些内容和之前这个 `div` 一样，并且还有一些我自己的内容 
-  那么我就可以把这个样式表先继承下来，再写我自己的内容就好了 
```
p {
      @extend div;

      font-size: 20px;
      color: red;
}
```
 

-  编译结果 
```
div, p {
    width: 100px;
    height: 100px;
    background-color: pink;
}

p {
    font-size: 20px;
    color: red;
}
```
 

##### 导入文件

-  我们刚才学过了定义变量，定义混合器 
-  而这两个内容在定义过以后，如果没有使用，是不会被编译出内容的 
-  所以我们可以把变量单独写一个文件，混合器单独写一个文件，然后直接导入后使用 
```
// 我是 variable.scss
$w: 100px;
$h: 200px;
$c: pink;

// 我是 mixin.scss
@mixin my_transition($dur: 1s, $pro: all, $delay: 0s, $tim: linear) {
    -webkit-transition: $dur $pro $delay $tim;
    -moz-transition: $dur $pro $delay $tim;
    -ms-transition: $dur $pro $delay $tim;
    -o-transition: $dur $pro $delay $tim;
    transition: $dur $pro $delay $tim;
}

@mixin radius {
    -webkit-border-radius: 10px;
    -moz-border-radius: 10px;
    -ms-border-radius: 10px;
    -o-border-radius: 10px;
    border-radius: 10px;
}
```
 

-  然后在我们的主要文件中把这个两个文件导入进来就行了 
```
// 我是 index.scss
@import './variable.scss';
@import './mixin.scss';

div {
    width: $w;
    height: $h;
    background-color: $c;

    @include radius;
}

h1 {
    @include my_transition;
}
```
 

-  编译结果 
```
div {
    width: 100px;
    height: 200px;
    background-color: pink;
    -webkit-border-radius: 10px;
    -moz-border-radius: 10px;
    -ms-border-radius: 10px;
    -o-border-radius: 10px;
    border-radius: 10px;
}

h1 {
    -webkit-transition: 1s all 0s linear;
    -moz-transition: 1s all 0s linear;
    -ms-transition: 1s all 0s linear;
    -o-transition: 1s all 0s linear;
    transition: 1s all 0s linear;
}
```
 
