### 一款移动端的影院项目 此项目使用vue-cli创建vue2脚手架框架
# 技术栈
```
axios 以及axios请求拦截器(请求数据时触发loading加载框)

vue-cli  (vue2脚手架)

vue-router vuex  (Vue相关生态 路由和状态管理)

Scss (css预处理语言)
 
Vant  (轻量、可靠的移动端 Vue 组件库)

Swiper (轮播图组件库)

Batter Scroll (优化移动端滚动)

iconfont (图标)

...
```
## 功能

```
影片展示

影片详情预览

影院搜索

切换城市

数据懒加载
```
## 项目结构

```
└─ src 

├─ App.vue

├─ assets

├─ components

│	├─ Tabbar.vue 底部导航栏

│	├─ center  我的-页面放置许多壁纸

│	├─ detail

│	│	├─ DetailHeader.vue   详情下拉粘性返回菜单

│	│	├─ DetailSwiper.vue   详情页轮播

│	│	└─ DetailSwiperItem.vue 详情页轮播

│	└─ films

│	 	├─ FilmHeader.vue 正在热映+即将上线 切换高亮

│	 	├─ FilmSwiper.vue 主页轮播

│	 	└─ FilmSwiperItem.vue 主页轮播

├─ main.js  程序入口文件,是初始化vue实例并使用需要的插件,加载各种公共组件

├─ router 

│	└─ index.js  配置路由

├─ store

│	└─ index.js vuex状态共享管理

├─ util

│	├─ http.js 封装axios请求以及axios拦截器Loading加载组件

│	└─ mixinobj.js  封装的混入(mixins) 调用来 使底部tabbar导航栏切换时消失

└─ views   组件

 	├─ Center.vue 我的-页面
  
 	├─ Cinemas.vue 影院-页面
  
 	├─ City.vue 城市-页面
  
 	├─ Detail.vue 详情-页面
  
 	├─ Films.vue 首页
  
 	├─ Login.vue 登录-页面
  
 	├─ Search.vue 搜索-页面
  
 	└─ films
  
 	 	├─ Comingsoon.vue 我的-即将上映
    
 	 	└─ Nowplaying.vue 我的-正在热映
```

## 项目展示

![image.png](/movieshop/1.png)
![image.png](/movieshop/2.png)
![image.png](/movieshop/3.png)
![image.png](/movieshop/4.png)
![image.png](/movieshop/5.png)
![image.png](/movieshop/6.png)
![image.png](/movieshop/7.png)