## MiniShop弋购 基于原生微信小程序构建的手机商城项目
## 项目结构

```
components   组件
└─ search   搜索框
       
pages

├─ auth  微信授权-页面 

├─ category   分类-页面

├─ center  我的-页面 

├─ detail 商品详情-页面

├─ home 首页商城-页面

├─ search 搜索-页面

├─ searchlist  搜索列表-页面

├─ shopcar 购物车-页面

└─ telform 手机绑定-页面
util

       ├─ auth.js   Sorage获取token tel 
       1.判断本地存储是否有手机号信息 如果有 直接加入 
       2.没有手机号 判断是否有token信息   授权信息 如果有 引导跳转到手机号绑定
       3.没有授权信息 我们先引导用户到授权页面
       └─ request.js  封装Ajax Promise接收参数 展开参数 放在这和后面的内容进行拼接
```

## 功能

```
轮播 

懒加载

搜索框

微信授权

手机号绑定

加入购物车

金额试算

换头像功能等
```

## 效果预览
![image.png](/minishop/1.png)
![image.png](/minishop/2.png)
![image.png](/minishop/3.png)
![image.png](/minishop/4.png)
![image.png](/minishop/5.png)
![image.png](/minishop/6.png)
![image.png](/minishop/7.png)
![image.png](/minishop/8.png)