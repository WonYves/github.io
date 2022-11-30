### CSS
```css
层叠样式表(英文全称：Cascading Style Sheets)
现标准语言在网页中主要对网页信息的显示进行控制，简单来说就是如何修饰网页信息的显示样式。
目前推荐遵循的是W3C发布的CSS3.0.
用来表现XHTML或者XML等样式文件的计算机语言。
1998年5月21日由W3C正式推出的CSS2.0
```
#### CSS语法：
```css
1. 每个CSS样式由两部分组成，即选择符和声明，声明又分为属性和属性值；
2. 属性必须放在花括号{}中，属性与属性值用冒号：连接。
3. 每条声明用分号；结束。
4. 当一个属性有多个属性值的时候，属性值与属性值不分先后顺序，用空格隔开。
5. 在书写样式过程中，空格、换行等操作不影响属性显示。
```

```css
CSS内部样式：
Stlye（样式） 为 html标签
<Style> h1{color:pink;}</style> 选择符{属性：属性值；}
CSS外部样式：

单标签

<link rerl=”stylesheet” type=”text/css” href=”css文件的路径”/> 
Type=”text/css”的用处：告诉浏览器，这段标签内包含的内容是css或text；也就是说如果某种浏览器（特别是wap等手机浏览器）不能识别css的，会将代码认为text，从而不显示也不报错。

双标签
<Style> @import url(“css文件的路径”);</style>
@import-导入 引入 
Link属于XHTML标签 引用的CSS会同时被加载，@import较慢
@import完全是CSS提供的一种方式老浏览器不支持，IE5以上的才能识别，Link标签无此问题，都支持
CSS行内样式：
<h1 style="color:【颜色】;">【文本】</h1>
```
优先级：外部样式<内部样式<行内样式 important 最高优先级

**CSS选择器**
为什么要选择器？要是用CSS对HTML页面中的元素实现1对1,1对多或者多对1的控制，这就需要用到CSS选择器
```css
Class选择器/类别选择器
语法：.class名{属性：属性值；}
说明：
1. 当我们选择使用class选择符时，应先为每一个元素定义一个class名称
2. Class选择符的语法格式是：
如：<div class=”top”></div>
.top{width=200px;height:100px;background:green;}
用法：class选择符更适合定义一类样式；


Id选择器
语法：#id名{属性：属性值；}
说明：
1. 当我们使用id选择符时，应该喂每个元素定义一个id属性 如：<div id=”box”></div>
2. id选择符的语法格式是”#”加上自定义的id名
如：#box{width:300px;height:300px}
3、起名时要取英文名，不能用关键字：（所有的标记和属性都是关键字）如：head标记
4、一个id名称只能对应文档中一个具体的元素对象。（唯一性）


*通配符/选择器
语法：*{属性：属性值；}
说明：通配选择符的写法是”*”，其含义就是所有元素。
*{margin:0;padding:0;}代表清除所有元素的默认边距值和填充值；
群组选择器
语法：选择符1，选择符2，选择符3......{属性：属性值；}
例：#top1，#nav1，h1{width:960px;}
说明：当有多个选择符应用相同的声明时，可以将选择符用”,”分隔的方式，合并为一组。
margin：0 atuo；实现盒子的水平居中


包含选择器/后代选择器
语法：选择符1 选择符2{属性：属性值；}
说明：含义就是选择符1中包含的所有选择符2； 
用法：当我的元素存在父级元素的时候，我要改变自己本身的样式，可以不另加选择符，
直接用包含选择符的方式解决。 
如：结构<ul class=”list”>
<li></li>
<li></li>
<li></li>
</ul>
样式：.list li{background:red;}


伪类选择器 最常用是给a链接使用
语法：
a:link{属性：属性值；}超链接的初始状态；
a:visited{属性：属性值；}超链接被访问后的状态；
a:hover{属性：属性值；}鼠标悬停，即鼠标划过超连接时的状态；
a:active{属性：属性值；}超链接被激活时的状态，即鼠标按下时超链接的状态
Link--visited--hover--active。
说明：
1. 当这4个超链接伪类选择符联合使用时，应注意他们的顺序，正常顺序为：
a:link,a:visited,a:0hover,a:active,  错误的顺序有时会使超链接的样式失效；
2. 为了简化代码，可以把伪类选择符中相同的声明提出来放在a选择符中；
例如：a{color:red;}a:hover{color:green;}表示超链接的初始和访问过后的状态一样，鼠标划过的状态和点击时的状态一样。 


选择器的权重
当多个选择器，选中的是一个元素，且都为他们定义了样式，如果属性发生冲突了，会选择权重高的来执行。
Important>内联样式>包含选择符>Id>class>元素
```
**CSS文本属性 **
```css
Font-size 字体大小 单位是PX，浏览器默认是16px，设计图常用字号是12px。
Font-family 字体 谷歌浏览器默认微软雅黑 
当字体是中文字体、英文字体中有空格时，需加双引号；
多个字体中间用逗号链接，先解析第一个字体，如果没有解析第二个字体，以此类推
Font-weight 文本加粗 100细体 400正常 700加粗 900最粗
【lighter 更轻的】【normal 正常的】【bold粗的 bolder更粗】
Font-style 文本倾斜 italic(斜字体) oblique(倾斜的文字)/normal(常规显示) 
Text-align 文本水平对齐 left right center 【justify 水平2端对齐】.
Line-height 行高 line-height的数据=height的数据，可以实现单行文本垂直居中
Text-indent 首行缩进 text-indent可以取负值；text-indent属性只对第一行起作用 text-indent：可使用单位px,em；
Letter-spacing 字符间距 控制文字和文字之间的间距用于中文
word-spacing 词间距 控制单词和单词之间的间距用于英文
Text-decoration text-decoration：none  没有/uderline下划线/overline上划线/line-through删除线
Font 文字简写font是 font-style font-weight font-size/line-height font-famiy的简写Font:italic 800/bold 30px/80px”宋体”，顺序不能改变，必须同时指定font-size和font-family属性时才起作用
Text-transform 文本变形 检索大小写 
capitalize 单词首字母全部大写
lowercase 整个文本单词全部小写 
Upercase  整个文本单词全部大写
```
**CSS列表属性**
```css
List-style-type：
定义列表符合样式 list-style-type
disc（实心圆）/circle（空心圆）/square（实心方块）/none（去掉符号）
List-style-image：
将图片设置为列表符合样式 List-style-image:url();
List-style-position： 
设置列表标记的放置位置。
List-style-position：outside;列表的外面 默认值
List-style-position：inside;列表的里面
List-style：简写 List-style：none；去除列表符号
```
**CSS背景属性**
```css
background-color 背景颜色 background-color：red；
background-image 背景图片 background-image:url(图片);
background-repeat 背景图片的平铺： 
background-repeat:no-repeat/repeat/repeat-x/repeat-y；
/* repeat：默认平铺
 repeat-x x轴平铺 
 repeat-y y轴平铺
 no-repeat 不平铺*/
background-position背景图片的定位
background-position：水平位置 垂直位置；可以给负值
 /* 1.20px 20px 
 2.10% 10%
 3.left center right
 top center bottom*/
Background-size 背景图片的大小 
 /*
 1.400px 400
 2.100% 100%
 3.cover:背景图片图像扩展至足够大，以使背景图像完全覆盖背景区域
 4.contain：把图像扩展至最大尺寸，以使其宽度和高度完全适应内容区域。铺不满盒子，留白
 */
background-attachment背景图片的固定
background-attachment : scroll (滚动)/ fixed（固定，固定在浏览器窗口里面，固定之后就相对于浏览器窗口了） ;
Background属性复合写法：
1. 用空格隔开
2. 顺序可以换
3. 只可以取一个值，放在后面能覆盖前面的值
4. Background-size属性只能单独用
```
**CSS浮动**
```css
浮动属性
1.folat 描述：float：left; 元素靠左边浮动
2.folat 描述：float：right; 元素靠右边浮动
3.folat 描述：float：none; 元素不浮动
浮动的作用1：定义网页中其他文本如何环绕该元素显示
浮动的作用2：就是让竖着的东西横着过来
清浮动
Clear：none；允许有浮动对象 
clear：right； 不允许右边有浮动对象 
clear：left；不允许左边有浮动对象 
clear：both； 不允许有浮动对象 清楚浮动只是改变元素的排列方式，该元素还是漂浮着，不占据文档位置。
```
**CSS盒子 **
盒模型是CSS布局的基石，它规定了网页元素如何显示以及元素间相互关系。Css定义所有的元素都可以拥有像盒子一样的外形和平面空间，即都包含边框、边界、补白、内容区这就是盒模型。
![image.png](https://cdn.nlark.com/yuque/0/2022/png/32841606/1669706247541-66e0c931-ed3e-4cac-a03d-d99a72056925.png#clientId=ucf7f893f-aa08-4&crop=0&crop=0&crop=1&crop=1&from=paste&id=uea534d84&margin=%5Bobject%20Object%5D&name=image.png&originHeight=349&originWidth=583&originalType=url&ratio=1&rotation=0&showTitle=false&size=125285&status=done&style=none&taskId=u447bf7d1-d073-441f-bf8a-272b7fd32a6&title=)
编辑
添加图片注释，不超过 140 字（可选）
```css
padding：内边距 单位:PX 不支持负数
1个值，4个方向都一样
2个值，上下，左右
3个值，上，左右，下
4个值，上，右，左，下 顺时针
背景色蔓延到内边距 
可以设置单一方向
Padding-方向：top left right bottom
Border：边框 单位PX 不支持负数
背景色能蔓延到边框
可以设置单一方向
Border-方向：top left right bottom
样式：
Solid（实线） double（双实线） 
dashed（线段线） dotted（点状线）
border-width 边框宽度 border-color 边框颜色 border-style 边框样式
Transparent 透明的
Margin：外边距 单位PX 
支持负数
可以设置单一方向
背景色无法蔓延到外边距
屏幕居中？Margin:0 auto; 横向居中方案
Margin-方向：top left right bottom
```


**特性问题： **

1. 兄弟关系，两个盒子垂直外边距与水平外边距问题 垂直方向：外边距取最大值，水平方向：外边距合并处理。
2. 父子关系，给子加外边距，但作用于父身上了，怎么解决

 子margin-top===>父的padding-top，注意高度计算;
 给父盒子设置边框;加浮动;Overflow：hidden.BFC。

**溢出属性（容器的）**
```css
Overflow:visible/hidden/scroll/auto/inherit;
Visible:默认值，溢出内容会显示在元素之外；
Hidden:溢出内容隐藏； 
Scroll:滚动，溢出内容以滚动方式显示；【滚动条】
Auto:如果有溢出会添加滚动条，没有溢出正常显示；
Inherit:规定应该遵从父元素继承overflow属性的值。
Overflow-x：X轴溢出； overflow-y：Y轴溢出
```
**空余空间：**
```css
White-space: normal/nowrap/pre/pre-wrap/pre-line/inherit 
该属性用来设置如何处理元素内的空白；
Normal：默认值，空白会被浏览器忽略，
Nowrap：文本不会换行，文本会在同一行上继续，直到遇到<br/>标签为止；
Pre：显示空格，回车，不换行
Pre-warp：显示空格，回车，换行
Pre-line：显示回车，不显示空格，换行
```
**省略号显示：**
```css
Text-overflow：clip; 默认裁切
Text-overflow：ellipsis 显示省略标记
当单行文本溢出省略号需要同时设置以下声明：
1. 容器宽度：width：200px；
2. 强制文本在一行显示：white-space：nowarp；
3. 溢出内容为隐藏：overflow：hidden；
4. 溢出文本显示省略号：text-overflow：ellipsis；
```
**元素类型的分类**
```css
块元素  display:block;
```
![image.png](https://cdn.nlark.com/yuque/0/2022/png/32841606/1669706247573-7e7ff4b6-8118-4d2c-9b1c-76891bcd80a3.png#clientId=ucf7f893f-aa08-4&crop=0&crop=0&crop=1&crop=1&from=paste&id=u45a8e2d0&margin=%5Bobject%20Object%5D&name=image.png&originHeight=470&originWidth=408&originalType=url&ratio=1&rotation=0&showTitle=false&size=123726&status=done&style=none&taskId=u4b6b2bd3-b029-4f38-b20f-ec47d4fc82d&title=)
编辑
添加图片注释，不超过 140 字（可选）
```css
列如：div p ul li ol li dl dt dd h1-h6等矩阵区域 自上而下排序 可以定义自己的宽度和高度 
作为其他元素的容器存在，比喻为一个盒子。


块元素：
display:block; 
display:list-item;
P标签可以放文本，不能放块级元素
```
**行内（内联）元素**
![image.png](https://cdn.nlark.com/yuque/0/2022/png/32841606/1669706247543-37189419-d9d4-47fa-b753-998c21f9b140.png#clientId=ucf7f893f-aa08-4&crop=0&crop=0&crop=1&crop=1&from=paste&id=ue224ce2e&margin=%5Bobject%20Object%5D&name=image.png&originHeight=479&originWidth=395&originalType=url&ratio=1&rotation=0&showTitle=false&size=110155&status=done&style=none&taskId=uf5afb0a2-9392-44c2-93bc-4b29e437e05&title=)
编辑
添加图片注释，不超过 140 字（可选）
```css
例如：a链接 b i span strong等 横着排 不能定义它的宽和高。
行内元素：display:inline
行内块元素：
内联块状元素（inline-block）就是同时具备内联元素，块状元素的特点 例如：img input等
display:inline-block
盒子模型的影响
Span一类的 行内元素 只能设置边距的左右边距 不能设置上下边距
Img input 行内块支持边距设置
```
**定位**
```css
Position 偏移位置（top left right bottom）时候的参照物
Position:static 默认值 默认 从左到右 从上到下 
Position:absolute 绝对定位 脱离文档流 可以将行内元素转换为块元素
1. 当没有父元素或者父元素没有定位，参照物是浏览器窗口的第一屏 
2、有父元素且父元素有定位，父元素为参照。 
Position:relative 相对定位 不脱离文档流 自己的初始位置 根据原本的位置进行调整位置 
Position:fixed 固定定位 脱离文档流 浏览器的当前窗口 如何滚动都不会改变当前位置
Position:sticky 粘性定位 可以做吸顶效果 粘性定位是CSS3.0新增加的，兼容不好

定位里的层级：后来者居上
z-index:数值；

绝对定位 父子关系中 给子盒子设置z-index:负数值；可满足父盒子覆盖子盒子

水平垂直居中： 使用Position:absolute 绝对定位后
再添加margin-left：盒子宽度一半的负值及margin-top盒子高度一半的负值 即可演变为绝对垂直居中。

浮动和定位的区别：
Float：半脱离文档流，文字环绕效果
Absolute：全脱离，不会出现文字环绕效果
锚点作用：页面不同区域的跳转，使用a链接
<a herf='#锚点名字'></a>
<div id='锚点名字'></div>
```
**CSS Sprites的原理（图片整合技术）（CSS精灵）/雪碧图**
```css
1. 将导航背景图片，按钮背景图片等有规则的合并成一张背景图，即将多张图片合为一张整图，
然后用background-position来实现背景图片的定位技术。
2. 图片整合的优势：
3. 通过图片整合来减少对服务器的请求次数，从而提交面的加载速度。
4. 通过整合图片来减小图片的体积。
```
**宽高自适应**
```css
自适应：
网页布局中经常要定义元素的宽和高。但很多时候我们希望元素的大小能够根据窗子或子元素自动调整，这就是自适应。
 宽度自适应：元素宽度的默认值为auto 不写或者是auto 就是自适应 主要运用于导航栏 通栏布局
 高度自适应：元素高度的默认值为{height：auto}
·min-height 最小高度·max-height 最大高度
·min-width 最小宽度·max-width 最大宽度

浮动元素的高度自适应
父元素不写高度时，子元素写了浮动后，父元素会发生高度塌陷

方法1：给父元素添加声明overflow：hidden；（缺点会隐藏溢出元素）

方法2：在浮动元素下方添加空块元素，并给该元素添加声明：clear：both； height：00； overflow：hidden； （缺点：在结构里增加了空的标签，不利于代码可读性，且降低了浏览器的性能）

方法3：万能清浮动法
内容清除浮动设置为块级元素宽高设置为0不显示但是占位隐藏

选择符：
after{content:”**”; 
clear:both; 
display:block;
Width:0;
height:0;
visibility:hidden；或者overflow:hidden;} 

display:none 不占位隐藏
visibility：hidden 占位隐藏
伪元素标准写法需要用上两个冒号{：：}
```
**窗口自适应**：
```css
盒子根据窗口的大小进行改变 设置方法
Html,body{height:100%}
Calc()函数的使用：
Calc()函数：用于动态计算长度值。
需要注意的是，运算符前后都需要保留一个空格，列如：
width：calc（100%-10px）;
任何长度值都可以使用calc（）函数进行计算；
Calc（）函数支持“+”“-”“*”“/”运算；
Calc（）函数使用标准的数学运算优先级规则。
```
## CSS3
```css
一、CSS3的概念和优势
CSS3是css技术的升级版本，CSS3语言开发朝着模块化发展的。
以前的规范作为一个模块实在太庞大而且比较复杂，所以把它分解为一些小的模块，
更多新的模块也被加入进来。这些模块包快：盒子模型、列表模块、超链接方式、语言模块、
背景和边框、文字特效、多栏布局等。
Css3的优点：CSS3将完全向后兼容，所以没有必要修改现在的设计让他们来继续运作。
网络浏览器也还将继续支持CSS2。对我们来说，CSS3主要的影响是将可以使用新的可用的选择器和属性，
这些会允许实现新的设计效果（譬如动态和渐变），而且可以很简单的设计出现在的设计效果（比如使用分栏）
```

1. 渐进增强和优雅降级 
```css
渐进增强progerssive enhancement
针对低版本的浏览进行构建页面，保证最基本的功能，然后再针对高级浏览器进行效果、
交互等改进和追加功能达到更好的用户体验

优雅降级 graceful degradation 
一开始就构建完整的功能，然后再针对低版本浏览器进行兼容
区别：优雅降级是从复杂的现状，并试图减少用户体验的供给，而渐进增则是从一个非常基础的，
能够起作用的版本开始，并不断扩充，以适应未来环境的需要。降级（功能衰减）意味着往回看；
而渐进增强意味着朝前看，同时保证其根基处于安全地带。
```
**选择器**
```css
层级选择器： 例如 .box+li{} .box~li{}
+ 当前元素的后面第一个兄弟 加上属性
~ 当前元素的后面所有的兄弟 加上属性

属性选择器： 列如div[class] p[class]
以[]中括号的方式选择 
格式：标签[属性] 列如input[name] 
class~=box1 包含就匹配选择

模糊匹配：
class^=b 以这个开头的 
Class$=b 以这个结尾的
Class*=b 包含某个字符的
```
**伪类选择器**
```css
1、结构伪类选择器
X:first-child 匹配子集的第一个元素，IE7就可以支持
X:last-child 匹配父元素中最后一个X元素
X:nth-child（）用于匹配索引值为N的子元素。索引值从1开始 odd奇数 even偶数
X:only-child 用的较少 比如上述代码匹配的是DIV下的有且仅有一个P，也就是说，如果DIV内有多个P 将不再匹配
X:root匹配文档的根元素。在HTML中，根元素永远是HTML
X：enpty匹配没有任何子元素（包含文本）的元素X

2、目标伪类选择器
E：target选择匹配E的所有元素，且匹配元素被相关URL指向
1. UI元素状态伪类选择器 E:enabled 匹配所有用户界面（from表单）中处于可用状态的E元素 E:disabled 匹配所有用户界面（from表单）中处于不可用状态E元素 E:checked 匹配所有用户界面（from表单）中处于选中状态的E元素 E:seletion匹配E元素中被用户选中或处于高亮状态的部分
2. 否定伪类选择器
E:not(s)匹配所有不匹配简单选择符s的元素E 反向操作 不是这个就行
```
**文本阴影**
```css
Text-shadow：10px 20px 1px red
1. 水平方向位移 2.垂直方向位移 3.模糊程度 4.颜色
支持多个阴影效果 用逗号隔开
盒子阴影
box-shadow : 10px 10px 10px 5px red;
支持多个阴影效果 用逗号隔开
h-shadow 水平阴影 v-shadow 垂直阴影
bur 模糊距离 spread 阴影大小 color 阴影颜色
inset 内侧阴影
```
**圆角边框**
```css
Border-radius：PX或者百分比
V1，四个角一样
V1,v2 左上右下，左下右上 一致
V1,v2,v3 左上，左下右上，右下
V1,v2,v3,v4 顺时针方向
Border-top-left-radius 垂直在先 水平在后
Border-radius:30px/60px 水平/垂直 仅支持border-radius
Border-radius设置为正方形宽度的一半 可以制造一个圆
```
**字体引入**
```css
字体模块：@font-face是CSS3中的一个模块，它主要是把自定义的Web字体嵌入到你的网页中，
随着@font-face的出现，我们在Web的开发中使用字体不怕只能使用Web安全字体 在IE4就支持
@font-face的语法规则：
@font-face{
Font-family:<YourWebFontName>;
Src:<source>[<format>][,<source>[<format>]]*;
[font-weight:<weight>];
[font-style:<style>]; 
@font-face语法说明：
1、YourWebFontNam：此值指的是你的自定义字体名称，最好是使用你下载的默认字体
，他将被引用到你的web元素中的font-family 。列如Font-family:<YourWebFontName>;
2、source：此值指的是你自定义的字体存放路径，可以是相对路径也可以是绝对路径；
```
**怪异盒模型**
```css
Box-sizing:content-box 默认标准盒模型
Box-sizing:border-box 怪异盒模型 为元素设定的宽度和高度决定了元素的边框盒子。
也就是说，为元素指定的任何内边距和边框都将在已设定的宽度和高度内进行绘制。
通过从已设定的宽度和高度分别减去边框和内边距才能得到内容的宽度和高度。
更改原有布局盒子模型的计算方式通过Box-sizing属性的取值进行更改 
```
**弹性盒 **
```css
display:flex; 一种新的布局方式 特别适合移动端布局
1. 让子元素默认横向排列
2. 行内元素，变成块级元素
3. 只有一个元素的情况 可以使用margin：auto 自动居中

修改主轴方向
flex-direction：column; 竖直排列
flex-direction：row; 默认的水平排列
flex-direction：row-reverse; 类似右浮动水平排列
flex-direction：column-reverse; 反向竖直排列

主轴对齐方式
Justify-content: ；
常用属性值：flex-start flex-end center
space-between 两端对齐 space-around 距离环绕 

侧轴对齐方式
align-items: ; 调整侧
折行： flex-wrap：warp； 折行显示
Align-content:flex-start; 控制折行后的行间距

项目中的对齐属性：
Align-self 单独给某个项目设置
Align-self：baseline 与flex-start 效果一致
Align-self：stretch 拉伸默认撑开占满

项目中顺序调整 ： order：权重数值； 可使用负数 

剩余宽高 
属性值 flex:数字; 占满剩余空间 
Flex-shrink:0; 横向布局 配合
```
**移动端布局：**
```css
浏览器模拟器上显示的分辨率
CSS像素：设备的独立像素
物理分辨率（截图分辨率）：真正的设备像素
设备像素比（dpr）=物理像素/CSS像素
尽量使用百分比布局 弹性盒布局 rem布局
布局视口：布局视口是指网页的宽度，一般移动端浏览器都默认设置了布局视口的宽度。
根据设备的不同，布局视口的默认宽度有可能是768PX、980PX、或1024PX等。
```
![image.png](https://cdn.nlark.com/yuque/0/2022/png/32841606/1669706247469-99c2566d-71b8-4e35-9105-83faa5bfa2f7.png#clientId=ucf7f893f-aa08-4&crop=0&crop=0&crop=1&crop=1&from=paste&id=u3b722036&margin=%5Bobject%20Object%5D&name=image.png&originHeight=163&originWidth=188&originalType=url&ratio=1&rotation=0&showTitle=false&size=4378&status=done&style=none&taskId=u45bdbbbd-056d-4f9e-a2e4-daefeed2121&title=)
编辑
添加图片注释，不超过 140 字（可选）
**视觉视口：**视觉视口是指用户正在看到的网站的区域，这个区域的宽度等同于移动设备的浏览器窗口的宽度。
![image.png](https://cdn.nlark.com/yuque/0/2022/png/32841606/1669706247475-c5c84e82-3ead-45ab-b291-47e3e65fe0c5.png#clientId=ucf7f893f-aa08-4&crop=0&crop=0&crop=1&crop=1&from=paste&id=u90ba17f4&margin=%5Bobject%20Object%5D&name=image.png&originHeight=174&originWidth=191&originalType=url&ratio=1&rotation=0&showTitle=false&size=4494&status=done&style=none&taskId=u6bcd5fe9-b4db-409b-9c28-a26c6859b44&title=)
编辑
添加图片注释，不超过 140 字（可选）
**理想视口：**理想视口是指对设备来讲最理想的视口尺寸，采用理想视口的方式，可以使网页在移动端浏览器上获得最理想的浏览和阅读的宽度。
![image.png](https://cdn.nlark.com/yuque/0/2022/png/32841606/1669706247906-b0722726-74ac-4f8d-863d-3b579d4146aa.png#clientId=ucf7f893f-aa08-4&crop=0&crop=0&crop=1&crop=1&from=paste&id=uaad69d16&margin=%5Bobject%20Object%5D&name=image.png&originHeight=153&originWidth=106&originalType=url&ratio=1&rotation=0&showTitle=false&size=3226&status=done&style=none&taskId=ue49af708-bb90-4738-a347-13fdfd6c301&title=)

添加图片注释，不超过 140 字（可选）
Viewport 视口
Content=device-width 内容=设备的宽度
Initial-scale=1.0设备像素比 User-scalable=no 不允许用户缩放
**多列布局 瀑布流**
```css
Column-count:数字; 控制显示的列数 

Column-gap: *px； 调整列间距

Column-rule: 1px soild color; 设置列边框

Column-fill:balance; auto； 检索列高度是否统一/把父盒子占满

Column-span:all; 横跨所有列

Column-width 调整列宽

Break-inside:avoid;禁止盒子内部折行
```
**响应式布局：**
```css
固定布局： 以像素作为页面的基本单位，不管设备屏幕及浏览器宽度，只设计一套尺寸。
可切换的固定布局：同样以像素作为页面单位，参考主流设备尺寸，设计几套不同宽度的布局。
通过识别的屏幕尺寸或浏览器宽度，选择最适合的那套宽度布局

弹性布局
以百分比作为页面的基本单位，可以适应一定范围内所有尺寸的设备屏幕及浏览器宽度，
并能完美利用有效空间展现最佳效果。

混合布局：同弹性布局类似，可以适应一定范围内所有尺寸的设备屏幕以及浏览器宽度，
并能完美利用有效空间展现最佳效果；只是混合像素和百分比两种单位作为页面单位。

布局响应：对页面进行响应式的设计实现，需要对相同内容进行宽度不同的布局设计，
有两种设计方式：PC优先（从PC端开始向下设计）；移动优先（从移动端向上设计）；
无论基于哪种模式的设计，要兼容所有设备，
布局响应时不可避免的需要对对模块布局做一些变化（发生布局改变的临界点称之为断点）。
```
**媒体查询**
```css
1. @media all and（min-width：*px）{对应样式}
Screen 显示器、笔记本、移动端等设备 是媒体类型的一种
And被称为关键字，其他关键字还包括not（排除某种设备），only（限定某种设备） 
（min-width：*px）就是媒体特性，其被放在一对圆括号中
Orientation:portrait 竖屏 orientation:landscape 横屏
```
**Rem布局开发**
```css
Px:50px
em:相对单位，相对于父元素的字体大小。div width:10em;
rem:相对单位，相对于根元素（html）字体大小， div width:10rem;
假如提供750PX设计稿情况下 使用
<script> document.documentElement.style.fontSize=document.documentElement.clientWidth/750 * 16 +'px'
</script>
Fontsize=当前设备的css设备布局宽度/物理分辨率（设计稿的宽度）*基准font-size
```
![image.png](https://cdn.nlark.com/yuque/0/2022/png/32841606/1669706247973-e402b845-b286-4821-90c2-2b089b101afc.png#clientId=ucf7f893f-aa08-4&crop=0&crop=0&crop=1&crop=1&from=paste&id=u42023da7&margin=%5Bobject%20Object%5D&name=image.png&originHeight=87&originWidth=167&originalType=url&ratio=1&rotation=0&showTitle=false&size=14267&status=done&style=none&taskId=ua0417bfd-266e-4845-8c7b-7af6477f953&title=)

添加图片注释，不超过 140 字（可选）
```css
下载工具 F1+center 快速转换 
750px- 转换
Rem 等比例缩放布局
vw与vh
Vh ：view-height
 100vh=视口的高度
Vw ：view-width
 100vw=视口的宽度
没有滚动条的时候100vw=100%
有滚动条的时候100vw包含滚动条，窗口大小
100% 刨除滚动条 剩余空间占满
```
**渐变**
```css
1. 线性渐变 ： 语法background：linear-gradient(red,yellow) 支持多颜色渐变 
支持方向 to top right 支持角度的写法 0-360deg 度数 
To top 从上到下 to bottom 从下到上(默认值) 
To left 从右到左 to right 从左到右

2. 径向渐变： 语法background：radial-gradient( ) 
Center:渐变起点的位置，可以为百分比，默认是图形正中心 
Circle 设置渐变形状为圆形 ；
ellipse 根据元素形状渐变，元素为正方形时候显示效果与circle无差异 
默认值 Size 渐变的大小 即渐变到哪里停止，它有4个值。 
closet-side:最近边； 
farthest-side:最远边；
closest-corner：最近角；
farthest-corner： 最远角。

3. 重复渐变：
语法 background：repeating-linear-gradient(red,yellow)
```
**过渡**
动画过渡属性 
```css
transition: all （1） 2s（2） linear（3） 2s（4）
1. all 所有属性/具体属性值 除了display: none/block属性 
2. 2s动画运动时间 
3. linear 匀速 ease逐渐慢下来 ease-in加速 ease-out 减速ease-in-out 先加速后减速 
4.  2s延迟
贝塞尔曲线 属性值 cubic-bezier()
```
**2D属性- **Transfrom 
```css
属性值： 平移
TranslateX（100px） 向右平移100px
TranslateY（100px） 向下平移100px 负值则反
Transfrom：TranslateX（100px）TranslateY（100px） 右下平移
Transfrom：Translate（100px，100px）； 简便写法
```
为何不使用position定位做动画 ：
![image.png](https://cdn.nlark.com/yuque/0/2022/png/32841606/1669706248412-638a5675-a9b5-4380-954c-3bd69ffebf48.png#clientId=ucf7f893f-aa08-4&crop=0&crop=0&crop=1&crop=1&from=paste&id=u2c907b63&margin=%5Bobject%20Object%5D&name=image.png&originHeight=169&originWidth=720&originalType=url&ratio=1&rotation=0&showTitle=false&size=138913&status=done&style=none&taskId=u813c573f-1712-4ace-9547-4fb84e67422&title=)
编辑切换为居中                                       加图片注释，不超过 140 字（可选）
```css
为了减少浏览器负担 Transfrom和opacity更加优选 
设置left会合成图层 设置translate是独立图层

属性值： 缩放
Transfrom：Sclae（比例1 1.5 ）； 负值 倒像放大效果
支持X轴 支持Y轴 
ScaleX 只支持X轴缩放 ScaleY 只支持Y轴缩放
Trasform-origin：left top; 中心点在左上角 默认值center

属性值：旋转
Transfrom：rotate（deg） 正值 顺时针旋转 
XYZ坐标轴支持 默认Z轴
Trasform 中可添加多个属性值 正常顺序为 平移 旋转 缩放

属性值：倾斜
Transfrom：skew（deg） 支持X,Y轴 默认拉扯右下角
```
**关键帧动画**
```css
语法：Animation: 定义名字2s linear 1s **；
2s：轮播时间 linear：动画运动速度 1s：延迟时间 **：轮播次
Infinite 无限次执行
声明动画写法： 
@keyframes (/定义名字/) { 
From{/初始状态/} to{/结束状态/} 
 }
@keyframes (/定义名字/) { 
0%{/初始状态/} 20% 30% 40% ..中间状态 100%{/结束状态/} 
 }
Animation-name 动画名称
Animation-duration 动画持续时间
Animation-timing-function 动画过渡类型运动速度
Animation- delay 动画延迟时间
Animation-infinite/number动画循环次数 infinite无限循环 number 循环次数
Animation-direction nomal正常方向 reverse反方向运行 alternate 先正常运行然后反方向运行 并持续交替
Alternate-reverse 先反方向运行然后正常运行 并持续交替
Animation-play-state:paused; 动画停顿
```
**为了实现无缝轮播 最后一份跟第一份是一样的**
```css
Steps（直接进行关键帧跳跃）
语法 Steps（1，end） steps-end
1：帧数 end：保留当前帧，看不到最后一帧 动画结束
Start：保留下一帧，看不见第一帧，从第一帧很快跳到最后一帧
```
Animate.css 动画库 网址 [http://www.dowebok.com/demo/2014/98/](http://www.dowebok.com/demo/2014/98/)
**3D动画**
```css
2D场景水平垂直XY轴 3D相比2D多出一个Z轴
3D平移 
首步 transform-style：preserve-3d; 给盒子添加3D 舞台
Perspective:**px 设置景深
Transform:traslate3d(0,0,200px); (x,y,z) 设置数值
3D旋转 Transform:rotate3d(1,1,1,30deg); 
前面三个值取值0-1 后面的值是角度值
3D 缩放 sclaeZ 需要加上景深 再使用旋转放大Z轴 
ScaleZ 和 scale3d 函数单独使用时没有任何效果，需要配合其他的变形函数一起使用才会有效果
```
**网格布局 Grid**
```css
含义：它将网页划分成一个个网格，可以任意组合不同的风格，做出各种各样的布局
和flex布局的区别：
FLEX布局是轴线布局，只能指定项目针对轴线的位置，可以看做是一维布局。
Grid布局是将容器划分成行和列 产生单元格 然后指定项目所在的单元格，可以看做是二维布局
```
**display:grid 网格布局**
```css
Display关于网格的取值分为两个，grid（块网格）和inline-grid（行内网格，行内块）
Grid===容器从上向下排列 inline-grid===容器从左向右排列
规定行属性 grid-template-rows:
固定列属性 grid-template-column: 
后面的值取决于代表多少行列
```
**属性值语法方式**
```css
1. 固定值 **px **px 
2. 百分比 
3. repeat（3,33.33%） 3次重复33.33% 重点
4. repeat（auto-fill，25%） 自动划分重复次数
5. fr 片段 grid-template-row: 100px 1fr 300px 类似于flex1
6. minmax（100px，200px） 最小100 最大200
7. auto grid-template-row:100px auto 200px auto自适应
```
```css
间距 

grid-row-gap:**px 行与行之间的间距
grid-column-gap:**px 列与列之间的间距
可直接单独使用 gap:**px 行列间距

合并
先指定区域名字 列如：
grid-template-areas:’a a c’
’a a f’
’g h i’
单独设置某个盒子名字
div:nth-child(第几个需要作为主体){
gird-area:a;
}
只可合并正方形或者长方形

对齐方式
Grid-auto-flow:columns / rows ;
网格对齐方式与弹性盒 所使用的属性大体相同 
使用justify-content:; align-content; 九宫格的区域 
justify-items:; align-items; 每一个项目的区域
Place-content:center center; 大九宫格水平垂直居中 复合写法 
Place-items:center center; 每一个项目的区域居中 复合写法

项目属性
网格线合并（单一属性）
grid-column-start:1; 从第1条列网格线开始合并 
grid-column-end:3; 到3条列网格线合并结束
简写：
grid-column:1/3; 
grid-row-start:1; 从第1条行网格线开始合并 
grid-row-end:3; 到3条行网格线合并结束
简写： 
grid-row:1/3;
```
