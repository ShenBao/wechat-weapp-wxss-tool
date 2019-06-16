# wechat-weapp-wxss-tool

## 微信小程序wxss小工具

微信小程序wxss小工具，将scss转化为wxss,并自动生成兼容的css代码

# 运行

- `npm install` 下载依赖包
- `npm run dev` 开启scss实时编译（ps:可以用支持scss的编辑器打开即可使用，如：VS Code等）
- `npm run style`
- `npm run img`
-  用微信开发者工具（小程序）运行`weapp`目录


## 目录详解

```
├── .gitignore
├── gulpfile.js
├── package-lock.json
├── package.json
├── README.md
├── src
│   ├── imgs // img 源文件
│   │   ├── arrow-a.png
│   │   └── ...
│   ├── styles
│   │   ├── base.scss
│   │   ├── components
│   │   │   └── test
│   │   │       └── test.scss // 对应weapp/components/test/test.wxss样式
│   │   │       └── ...
│   │   ├── pages
│   │   │   └── test
│   │   │       └── test.scss // 对应weapp/pages/test/test.wxss样式
│   │   │       └── ...
│   │   └── styles
│   │       ├── iconfont.wxss
│   │       └── weui.wxss
│   └── utils
│       └── index.js
└── weapp
    ├── app.js
    ├── app.json
    ├── app.wxss
    ├── commons
    │   └── index.js
    ├── components
    │   └── test
    │       └── test.wxss // scss编译之后处理的文件
    ├── config
    │   ├── api-config.js
    │   ├── config.js
    │   ├── img-config.js
    │   └── index.js
    ├── imgs // img 压缩处理后的文件
    │   ├── arrow-a.png
    │   └── ...
    ├── library
    │   ├── ald-stat-conf.js
    │   ├── ald-stat.js
    │   └── fundebug.0.5.0.min.js
    ├── models
    │   └── index.js
    ├── pages
    │   ├── index
    │   │   ├── index.js
    │   │   └── index.wxml
    │   ├── logs
    │   │   ├── logs.js
    │   │   ├── logs.json
    │   │   ├── logs.wxml
    │   │   └── logs.wxss
    │   └── test
    │       └── test.wxss  // scss编译之后处理的文件
    ├── project.config.json
    ├── requests
    │   ├── index.js
    │   └── wxRequest.js
    ├── styles
    │   ├── iconfont.wxss
    │   └── weui.wxss
    ├── templates
    │   └── tmp.wxml
    └── utils
        ├── date-utils.js
        ├── index.js
        ├── polyfill.js
        ├── url-utils.js
        ├── util.js
        └── wx-util.js
```

`注意：`
- scss/pages文件夹的文件名对应weapp下的pages的页面目录名及wxss的文件名
- scss/components文件夹的文件名对应weapp下的components的组件目录名及wxss的文件名


## License

The MIT License (MIT)
