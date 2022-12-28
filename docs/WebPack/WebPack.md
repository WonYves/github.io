**为何学习webpack** -  让网页打开的更快<br />webpack是 静态模块打包工具<br />分析 翻译 压缩 打包代码<br />· 支持所有类型文件的打包<br />· 支持less/sass  => css<br />· 支持ES6/ES7/8 => ES5<br />压缩代码 提高速度
<a name="frEfw"></a>
### 使用前准备
webpack本质  ： node环境下的包
<a name="WvLIt"></a>
#### 1.初始化环境 
```shell
yarn init
```
生成 package.json 文件
<a name="zRvyP"></a>
#### 2.安装依赖包
```shell
yarn add webpack webpack-cli -D
```
<a name="x2FkS"></a>
#### 3.配置scripts(自定义命令)
```json
"scripts": {
  "build" : 'webpack'
}
```
<a name="x9ZX4"></a>
### 基础使用
需求：两个js文件 => 打包成1个js文件
<a name="ubN7i"></a>
#### 1.新建src/add/add.js - 定义求和函数导出
```javascript
export const addFn = (a, b) => a + b
```
<a name="HGdXT"></a>
#### 2.新建src/index.js导入使用
```javascript
// webpack打包的入口
import { addFn } from './add/add'
console.log(addFn(5, 2));
```
<a name="IB8eR"></a>
#### 3.运行打包命令
```bash
yarn build
```
<a name="XX3eo"></a>
### 更新打包
<a name="axkoH"></a>
####  1.新建src/tool/tool.js - 导出数组求和方法 
```javascript
export const getArraySum = arr => arr.reduce((sum, val) => {
  return sum = sum + val;
}, 0)
```
<a name="maoHP"></a>
#### 2.src/index.js导入使用
```javascript
import {add} from './add/add'
import {getArraySum} from './tool/tool'
console.log(getArraySum([1,2,3,4,5,6,7,8,9,10]));
console.log(add(3,4));
```
<a name="g2Ycp"></a>
#### 3.运行打包命令
```bash
yarn build
```
<a name="S4lRe"></a>
### 配置修改
![image.png](https://cdn.nlark.com/yuque/0/2022/png/32841606/1672120528258-f8536752-acd1-4ea9-ba4f-f8ac6212982d.png#averageHue=%2327282a&clientId=u1695b071-0ada-4&crop=0&crop=0&crop=1&crop=1&from=paste&height=298&id=u4ad15595&margin=%5Bobject%20Object%5D&name=image.png&originHeight=447&originWidth=459&originalType=binary&ratio=1&rotation=0&showTitle=false&size=26872&status=done&style=none&taskId=u2147aec4-cf86-4c7e-b6b9-50c63513642&title=&width=306)
```javascript
const path = require('path')

// 导出webpack的配置对象
module.exports = {
  // webpack的入口
  entry: './src/index.js',
  output: {
    // path 必须用绝对地址 : path.resolve()拼接2个路径
    // __dirname: node内置全局变量（值：当前文件所在文件夹的绝对路径）
    path: path.resolve(__dirname, 'dist'),
    // webpack 出口文件
    filename: 'bundle.js',
  },
};
```
<a name="VgKT7"></a>
### 打包流程图
![image.png](https://cdn.nlark.com/yuque/0/2022/png/32841606/1672120191242-0dbc3b97-2190-4f7f-af9c-96413568b7f3.png#averageHue=%23cf8072&clientId=u1695b071-0ada-4&crop=0&crop=0&crop=1&crop=1&from=paste&height=537&id=u10fadc76&margin=%5Bobject%20Object%5D&name=image.png&originHeight=806&originWidth=1553&originalType=binary&ratio=1&rotation=0&showTitle=false&size=345272&status=done&style=none&taskId=u98b5f9b4-8cd4-4090-a9b7-7c4095bd438&title=&width=1035)
<a name="IldBO"></a>
#### yarn build后都发生了什么？
1.执行webpack命令，根据配置文件，找到入口<br />2.分析翻译打包输出到出口位置<br />所有要被打包的资源要和入口文件产生直接或间接的引入关系
<a name="BPJkG"></a>
### webpack插件自动生成html文件 
<a name="OFZn2"></a>
####  1.下载插件 
```bash
yarn add html-webpack-plugin  -D
```
<a name="fPYKY"></a>
#### 2. webpack.config.js配置
```javascript
// 引入自动生成 html 的插件
const HtmlWebpackPlugin = require('html-webpack-plugin') 

module.exports = {
    // ...省略其他代码
    plugins: [
        new HtmlWebpackPlugin({
            // 以此为基准生成打包后html文件
            template: './public/index.html' 
        })
    ]
}
```
<a name="K8KN5"></a>
####  3.重新打包后观察dist下 

   - 自动生成html文件
   - 自动引入打包后js文件
> 总结: webpack就像一个人, webpack.config.js是人物属性, 给它穿什么装备它就干什么活

 自动生成html和引入打包后文件, 如何做?  

- 下载html-webpack-plugin插件包, 给webpack.config.js配置上
<a name="X7RKZ"></a>
### 处理css文件
<a name="vf8m3"></a>
#### 1.引入写好的css
```javascript
// 项目中引入css文件
// webpack默认只识别js文件
// css引入后 被打包 等浏览器运行时 css样式生效
import './css/index.css'
```
<a name="SCNWt"></a>
####  2.首先需要安装相应的loader
```bash
npm install --save-dev css-loader
npm install --save-dev style-loader
```
<a name="R1bt9"></a>
#### 3.把 loader 引用到你 webpack 的配置中。如下所示：
```javascript
module.exports = {
  // ...省略其他代码
	module: {
    rules: [
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
}
```
<a name="Fly7Q"></a>
### 处理less
<a name="B6MDf"></a>
#### 1.引入写好的less
```javascript
import './less/index.less'
```
<a name="k7UIr"></a>
####  2.首先需要安装相应的loader
```bash
npm install less less-loader --save-dev 
```
<a name="nCgUp"></a>
#### 3.把 loader 引用到你 webpack 的配置中。如下所示：
```javascript
module.exports = {
  // ...省略其他代码
	module: {
    rules: [
      {
        test: /\.less$/i,
        use: ["style-loader", "css-loader", "less-loader"],
      },
    ],
  },
}
```
<a name="EyuWd"></a>
### 处理图片
<a name="fKSmw"></a>
#### 1.首先引入
```javascript
// webpack打包图片
import image from '../assets/images/1.gif'
let theImg = document.createElement('img')
theImg.src = image
document.body.appendChild(theImg)
```
<a name="mBuuu"></a>
#### 2.配置文件
```javascript
{
   test: /\.(png|jpg|gif|jpeg)$/i, // 匹配图片文件
   type: 'asset' 
  // 在导出一个 data URI 和一个单独的文件之间自动选择
},
```
<a name="P3CXZ"></a>
### 处理字体文件
<a name="duGst"></a>
#### 1.首先引入使用
```javascript
// 打包字体文件
import '../assets/fonts/iconfont.css'
let theI = document.createElement('i')
theI.className = 'iconfont icon-qq'
document.body.appendChild(theI)
```
<a name="g8akf"></a>
#### 2.添加配置
```javascript
module: {
  rules: [
    // ...省略之前的代码
    {
     test: /\.(eot|svg|ttf|woff|woff2)$/,
     type: 'asset/resource',  // 当做静态资源直接复制文件
     generator: { 
      filename: 'font/[name].[hash:6][ext]' // 放到dist/font文件夹, 文件名格式如左
      }
    },
  ]
}
```
<a name="lCXPG"></a>
### 处理高版本js语法
<a name="rl8ds"></a>
#### 1.安装babel-loader
```bash
npm install -D babel-loader @babel/core @babel/preset-env webpack
```
<a name="S1HMb"></a>
#### 2.添加配置
```javascript
module: {
  rules: [
    // ...省略之前的代码
    {
        test: /\.m?js$/, // 匹配.mjs或者.js结尾文件
        // 排除node_modules第三方包里js文件=>别人写的
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader', // 允许webpack使用babel降级js代码
          options: {
            presets: ['@babel/preset-env'] // 使用这个包里记录的规则
          }
        }
      }
  ]
}
```
<a name="pOUxT"></a>
### webpack-开发服务器-学习
下载webpack-dev-server, 启动一个开发服务器, 用于快速开发应用程序<br />[webpack-dev-server文档](https://webpack.docschina.org/configuration/dev-server/)

1. 构建入口和所有模块依赖关系图
2. 磁盘读取对应的文件到内存, 才能加载
3. 用对应的 loader 进行处理和翻译
4. 将处理完的内容, 输出到**内存里而非磁盘上**
5. 以后代码变化, **自动更新打包变化的代码**, 显示到浏览器上
<a name="52b36576-10"></a>
#### 步骤

1.  下载包 
```bash
yarn add webpack-dev-server -D
```

2.  配置自定义命令serve 
```javascript
scripts: {
	"build": "webpack",
	"serve": "webpack serve"
}
```

3.  运行命令-启动webpack开发服务器 
```bash
yarn serve
#或者 npm run serve
```

4.  启动一个web服务器和端口, 在浏览器访问查看 
> 效果: 以后改src下的代码, 自动打包更新到浏览器上


1.  如何用webpack开发服务器, 实时打包我们的代码？  
- 下载webpack-dev-server包
- 在package.json配置serve命令, 启动
- webpack-dev-server给我们一个地址+端口, 供浏览器访问查看index.html页面和打包后的js和css等
2.  webpack开发服务器好处是?  
- 打包进内存里, 使用更快
- 代码变化, 只会重新打包和更新, 变化的文件和代码
<a name="wQH5O"></a>
### webpack-开发服务器-配置
查找文档, 修改开发服务器配置<br />[webpack-dev-server配置文档](https://webpack.docschina.org/configuration/dev-server/#devserverafter)
<a name="wv3fd"></a>
####  webpack.config.js中添加服务器配置 
```javascript
module.exports = {
    // ...其他配置
    devServer: {
      port: 3000, // 端口号
      open: true // 启动后自动打开浏览器
    }
}
```
 
<a name="svnAG"></a>
####  重启开发服务器观察效果即可 
如何修改webpack开发服务器的配置呢？  

- 去文档查找配置项的名字
- 在webpack.config.js的devServer选项里添加

<a name="sSwY4"></a>
### webpack-项目打包发布
<a name="Kp4fE"></a>
####  修改mode选项(任选一个) 
```javascript
module.exports = {
    // ...其他配置
    mode: 'development' // 开发环境-> 不会极致压缩, 一般开发服务器默认使用这个属性
}
```
<a name="Yw6Xv"></a>
####  执行之前的yarn build产生dist目录 
> 所有代码, 被整合打包

<a name="MSIkm"></a>
####  把dist目录交给后台/运维, 部署给客户使用即可 
> 开发环境的代码不用发

 项目分哪2个环境? 

- 线上和线下2个环境
- 线上也叫"生产环境"/"部署", 英文"production"
- [ ]  什么是webpack?<br />静态模块资源打包工具, 打包我们编写的代码, 翻译, 整合, 分析, 压缩等功能 
- [ ]  yarn的作用?<br />替代npm在nodejs环境的包管理器, 速度要比npm好 
```javascript
// 拿到新项目, 缺少node_modules, 执行命令下包, 根据package.json记录的哪些包下载
yarn

// 安装某个包
yarn add 包名
```

<a name="t2VAP"></a>
#### 总结

- [ ]  webpack构建的流程是什么?<br />执行打包命令, 寻找配置文件, 找到入口, 建立依赖关系图, 用插件加载器翻译处理编写的文件, 打包输出到指定位置 
- [ ]  说出webpack的作用, 加载器和插件的作用即可 
> webpack在node环境下使用
>  
> 可以对任何模块, 翻译, 压缩, 打包
>  
> 加载器给webpack带来识别功能类型文件的能力
>  
> 插件是给webpack带来更多的功能

- [ ]  前端为何能用yarn下的包? 
> 因为webpack翻译后输出到js, 再插入到html中运行

- [ ]  以后开发时, 使用webpack还是webpack-dev-server? 为什么?<br />使用webpack-dev-server启动的服务器, 只打包更新的代码, 还提供地址让浏览器访问打包后代码<br />项目开发完成, 使用webpack打包生成dist部署给服务器, 让客户使用 
