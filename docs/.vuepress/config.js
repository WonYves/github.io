// @ts-check
module.exports = {
    title: "Wiess's blog",
    description: '分享笔记，技术博客',
    head:[
        [
            'link',{rel:'icon', href:'/ohwo.png'}
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
                {text:'react-hooks中的过期闭包问题', link: '/talk/react-hooks中的过期闭包问题.md'},
            ]
            },
            { text: 'Vue', 
            items:[
                {text:'Vue双向绑定', link: '/Vue/Vue双向绑定原理.md'},
            ]
            },
            { text: 'JavaScript', 
            items:[
                {text:'JavaScript', link: '/JavaScript/JavaScript.md'},
                {text:'浅拷贝和深拷贝', link: '/JavaScript/浅拷贝和深拷贝.md'},
                {text:'事件循环EventLoop', link: '/JavaScript/事件循环Eventloop.md'},
                {text:'重绘回流(重排)', link: '/JavaScript/重绘回流.md'},
                {text:'call、apply、bind方法', link: '/JavaScript/call、apply、bind方法.md'},
                {text:'TypeScript', link: '/JavaScript/TypeScript.md'},
            ]
            },
            { text: 'WebPack', 
            items:[
                {text:'WebPack入门基础', link: '/WebPack/WebPack.md'},
                {text:'WebPack面试题', link: '/WebPack/WebPack面试题.md'},
            ]
            },
            { text: '数据结构与算法', 
            items:[
                {text:'数组', link: '/Algorithm/数组.md'},
                {text:'栈和队列', link: '/Algorithm/栈和队列.md'},
            ]
            },
            { text: 'Css', 
            items:[
                {text:'Css基础+css3', link: '/Css/CSS.md'},
                {text:'Css常用属性', link: '/Css/css属性.md'},
            ]
            },
            { text: '随便聊聊', 
            items:[
                {text:'高频面试题', link: '/talk/talk.md'},
                {text:'git使用', link: '/talk/git.md'},
                {text:'小程序', link: '/talk/小程序.md'},
                {text:'Ajax、Fetch、Axios这三者有什么区别', link: '/talk/Ajax、Fetch、Axios这三者有什么区别.md'},
            ]
            },
        ],
    }
}