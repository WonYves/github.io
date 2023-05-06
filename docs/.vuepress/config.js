// @ts-check
module.exports = {
    title: "Way's blog",
    description: '分享笔记，技术博客',
    head:[
        [
            'link',{rel:'icon', href:'/ohwo2.jpg'}
        ]
    ],
    bgImage: '/ohwo.png',
    themeConfig: {
        nav: [
            { text: 'React', 
            items:[
                {text:'React基础语法', link: '/React/react.md'},
                {text:'React-Hooks', link: '/React/hook.md'},
                {text:'Redux', link: '/React/Redux.md'},
                {text:'React-Router', link: '/React/React-Router.md'},
                {text:'深入理解Redux', link: '/React/深入理解Redux.md'},
                {text:'Immutable', link: '/React/Immutable.md'},
                {text:'RouterV6', link: '/React/RouterV6.md'},
                {text:'react-hooks中的过期闭包问题', link: '/talk/react-hooks中的过期闭包问题.md'},
            ]
            },
            { text: 'Vue', 
            items:[
                {text:'Vue基础', link: '/Vue/Vue基础.md'},
                {text:'Vue组件化', link: '/Vue/Vue组件化.md'},
                {text:'Vue-router', link: '/Vue/Vue-router.md'},
                {text:'Vue状态管理', link: '/Vue/Vue状态管理.md'},
                {text:'Vue性能优化', link: '/Vue/Vue性能优化.md'},
                {text:'Mixins混入', link: '/Vue/Mixins混入.md'},
                {text:'Vue双向绑定', link: '/Vue/Vue双向绑定原理.md'},
                {text:'Vue3 setup语法糖', link: '/Vue/Vue3 setup语法糖.md'},
            ]
            },
            { text: 'JavaScript', 
            items:[
                {text:'JavaScript', link: '/JavaScript/JavaScript.md'},
                {text:'浅拷贝和深拷贝', link: '/JavaScript/浅拷贝和深拷贝.md'},
                {text:'事件循环EventLoop', link: '/JavaScript/事件循环Eventloop.md'},
                {text:'重绘回流(重排)', link: '/JavaScript/重绘回流.md'},
                {text:'call、apply、bind方法', link: '/JavaScript/call、apply、bind.md'},
                {text:'设计模式', link: '/JavaScript/设计模式.md'},
                {text:'手撕promise', link: '/JavaScript/手写promise.md'},
                {text:'TypeScript', link: '/JavaScript/TypeScript.md'},
                {text:'Ajax、Fetch、Axios这三者有什么区别', link: '/talk/Ajax、Fetch、Axios这三者有什么区别.md'},
            ]
            },
            { text: '个人项目', 
            items:[
                {text:'ReactEvents', link: '/个人项目/ReactEvents.md'},
                {text:'Vue2-文章后台管理系统', link: '/个人项目/Vue2-文章后台管理系统.md'},
                {text:'Vue2-MovieShop', link: '/个人项目/Vue2-MovieShop.md'},
                {text:'Yi-MiniShop', link: '/个人项目/Yi-MiniShop.md'},
                {text:'Netease-Cloud-Music(完成中)', link: '/个人项目/Netease-Cloud-Music.md'},
            ]
            },
            { text: '随便聊聊', 
            items:[
                {text:'Css+css3', link: '/Css/CSS.md'},
                {text:'Css属性', link: '/Css/css属性.md'},
                {text:'WebPack', link: '/WebPack/WebPack.md'},
                {text:'WebPack2', link: '/WebPack/WebPack面试题.md'},
                {text:'talk', link: '/talk/talk.md'},
                {text:'git', link: '/talk/git.md'},
                {text:'小程序', link: '/talk/小程序.md'},
                {text:'uniapp购物车', link: '/talk/uniapp购物车.md'},
                {text:'冒泡选择插入', link: '/talk/三种排序算法.md'},
            ]
            },
        ],
    }
}