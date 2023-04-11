## 基于vue-cli 从0开始搭建的登录注册的业务实现流程的后台管理系统
### 技术栈

```
vue-cli (自定义配置vue2脚手架)

Less (css预处理语言)

axios  (网络请求库)

axios请求拦截器 (在发起时，统一携带请求头Authorization和token值,登录和注册页面除外)

axios响应拦截器 (token过期时 清空vuex中存储的数据 导致被动退出)

elementUI (组件库)
 
echarts   (图表  各种饼状图 柱状图 线性图)

vue-router vuex   (vue相关生态路由 以及vuex公共状态管理)

vue-quill-editor  (富文本编辑器 用于发表文章)
```

### 项目结构

```
src
├─ App.vue    根组件
├─ api 	
│    └─ index.js      封装请求接口的方法 方便复用  get post put patch delete
├─ assets	            一些默认的文件
├─ main.js  	项目入口文件
├─ router
│    └─ index.js     配置路由 
├─ store
│    └─ index.js	   vuex存储token信息和用户信息
├─ utils
│    └─ request.js   封装请求基地址  方便复用
└─ views
       ├─ article      文章
       │    ├─ artCate.vue    文章分类
       │    └─ artList.vue    文章列表 发布文章等功能
       ├─ home
       │    └─ index.vue      首页 - echarts 图表 
       ├─ layout	
       │    └─ index.vue      侧边栏和顶部区域
       ├─ login
       │    └─ index.vue      登录
       ├─ register
       │    └─ index.vue      注册
       └─ user
              ├─ userAvatar.vue  个人基本资料
              ├─ userInfo.vue     更换头像
              └─ userPwd.vue	  重置密码
```

### 功能

```
登录
注册
退出
更换头像
修改邮箱 昵称
重置密码
文章分类 增删改查
文章列表筛选 重置 分页 
发表文章 -  富文本
```

### 展示


![image.png](/article/1.png)
![image.png](/article/2.png)
![image.png](/article/3.png)
![image.png](/article/4.png)
![image.png](/article/5.png)
![image.png](/article/6.png)
![image.png](/article/7.png)