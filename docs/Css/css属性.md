## CSS属性
```css
·important 最重要
·opacity 透明度
·Transparent 透明的
```
### 文本属性
```css
·Font-size 字体大小
·Font-family 字体
·Font-weight 加粗
·Font-style 倾斜
·Text-align 文本水平对齐
·line-height 行高
·Text-indent 首行缩进
·Letter-spacing 字间距
·word-spacing 词间距
·Text-decoration 文本修饰
·Font 文字简写
·Text-shadow 文本阴影
·@font-face{Font-family:你需要引用的字体名字; Src:url(字体);
```
### 列表属性
```css
·Text-transform 文本变形 检索大小写
·List-style-type 定义列表符合样式
·List-style-image将图片设置为列表符合样式
·List-style-position设置列表标记的放置位置。
```
### 背景属性
```css
·background-color 背景颜色
·background-image 背景图片
·background-repeat 背景图片的平铺
·background-position背景图片的定位
·background-attachment 背景图片的固定
·background-size 背景图片的大小
```
### 浮动属性
```css
·float：left; 元素靠左边浮动
·float：right; 元素靠右边浮动
·float：none; 元素不浮动
·Clear：none；允许有浮动对象
·clear：right； 不允许右边有浮动对象
·clear：left；不允许左边有浮动对象
·clear：both； 不允许有浮动对象
```
### 盒子模型边距属性
```css
·padding 内边距
·border 边框
·margin 外边距
```
### 溢出属性
```css
·Overflow：visible默认显示溢出
·overflow: hidden 溢出隐藏，文本裁切
·overflow:scroll 生成滚动条
·overflow:auto 自动设置
·overflow:inherit 继承父元素的效果
·white-space:normal 默认值
·white-space:nowrap 不换行 直到遇到<br>为止
·white-space:pre 保留空格，tab，回车 可当做html标签使用
·::webkit-scrollbar{ display:none;} 隐藏滚动条
```
### 省略属性
```css
·Text-overflow：clip; 默认裁切
·Text-overflow：ellipsis 显示省略标记
```
### 元素属性
```css
·display: bolck 块元素
·display：inline 行内元素
·display：inline-block 行内块元素
·display：none 隐藏
·outline：none 隐藏input框
·display：flex 弹性布局
```
### 定位属性
```css
·Position:static 默认值 默认从左到右 从上到下
·Position:absolute 绝对定位
·Position:relative 相对定位
·Position:fixed 固定定位
·Position:sticky 粘性定位
·z-index:00 数值越大 层级越大 越靠上显示
·flex-direction：column; 水平排列
·flex-direction：rou; 竖直排列
```
### 基础属性
```css
·min-height 最小高度
·max-height 最大高度
·min-width 最小宽度
·max-width 最大宽度
·visibility：hidden 让一个元素不显示
·resize：vertical； 重新设置垂直大小
·resize：horizontal； 重新设置水平大小
·resize：both； 默认值 随意设置水平垂直
·resize：none； 无法设置
```
### 盒子阴影
```css
box-shadow
·h-shadow 水平阴影
·v-shadow 垂直阴影
·bur 模糊距离
·spread 阴影大小
·color 阴影颜色
·inset 内侧阴影
```
### 圆角边框
```css
·Border-radius
·Border-top-left-radius 垂直在先 水平在后
```
### 弹性盒
```css
·flex-direction：column; 竖直排列
·flex-direction：row; 默认的水平排列
·flex-direction：row-reverse; 类似右浮动水平排列
·flex-direction：column-reverse; 反向竖直排列
·Justify-content: flex-start 默认排序
·Justify-content: flex-end 贴向右边
·Justify-content: center 中间显示
·Justify-content: space-between 两端对齐
·Justify-content: space-around 距离环绕
·align-items: ; 侧轴属性 同上
·align-center：center多行垂直方向居中
·flex-wrap：warp； 折行显示
·Align-self 单独给某个项目设置
·order：数值； 项目调整顺序时使用
·Align-self：baseline 与flex-start 效果一致
·Align-self：stretch 拉伸默认撑开占满
·order：权重数值；
·Flex-shrink:0; 横向滚动
·Column-count:数字; 控制显示的列数
·Column-gap: *px； 调整列间距
·Column-rule: 1px soild color; 设置列边框
·Column-fill:balance; auto； 检索列高度是否统一/把父盒子占满
·Column-span:all; 横跨所有列
·Column-width 调整列宽
·Break-inside:avoid;禁止盒子内部折行
```
### 渐变属性
```css
·linear-gradient(red,yellow)线性渐变
·radial-gradient( ) 径向渐变
·background：repeating-linear-gradient(red,yellow) 重复渐变
```
### 过渡属性
```css
·transition:all 2s linear 2s动画过渡属性
·Transfrom：Translate（*px，*px）； 2d平移
·Transfrom：Sclae（比例）； 2d缩放
·Trasform-origin：left top; 更改中心点
·Transfrom：rotate（*deg） 2d旋转
·Transfrom：skew（deg） 支持X,Y轴 默认拉扯右下角
```
### 关键帧动画
```css
·Animation-name 动画名称
·Animation-duration 动画持续时间
·Animation-timing-function 动画过渡类型运动速度
·Animation- delay 动画延迟时间
·Animation-infinite/number动画循环次数 infinite无限循环 number 循环次数
·Animation-direction nomal正常方向 reverse反方向运行 alternate 先正常运行然后反方向运行 并持续交替
alternate-reverse 先反方向运行然后正常运行 并持续交替
·Animation-play-state:paused; 动画停顿
·transform-style：preserve-3d; 给盒子添加3D 舞台
·Perspective:**px 设置景深
·transform:translateZ(**px)； 设置Y轴平移
```
### 网格布局
```css
·display:grid 网格布局
·grid-template-rows: 规定行属性
·grid-template-columns: 固定列属性
·repeat（auto-fill，25%） 自动划分重复次数
·repeat（3,33.33%） 3次重复33.33%
·grid-template-areas: 指定区域名字
·place-content:center center; 大九宫格水平垂直居中 复合写法
·Place-items:center center; 每一个项目的区域居中 复合写法
·grid-column-start:1; 从第1条列网格线开始合并
·grid-column-end:3; 到3条列网格线合并结束
·简写：grid-column:1/3;
·grid-row-start:1; 从第1条行网格线开始合并
·grid-row-end:3; 到3条行网格线合并结束
·简写：grid-row:1/3;
```
