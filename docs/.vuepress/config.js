module.exports = {
    title: "Wiess's blog",
    description: '分享笔记，技术博客',
    head:[
        [
            'link',{rel:'icon', href:'/ohwo.png'}
        ]
    ],
    themeConfig: {
        nav: [
            { text: 'React', 
            items:[
                {text:'React基础语法', link: '/React/react.md'},
                {text:'React-Hooks', link: '/React/hook.md'},
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
                {text:'JavaScript基础', link: '/JavaScript/JavaScript.md'},
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