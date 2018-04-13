# wechat-weapp-wxss-tool
# 微信小程序wxss小工具

微信小程序wxss小工具，将scss转化为wxss,并自动生成兼容的css代码

# 运行

- `npm install` 下载依赖包
- `npm run clean` 清除`.css`文件夹的内容
- `npm run dev` 开启scss实时编译（ps:可以用支持scss的编辑器打开即可使用，如：VS Code等）
-  用微信开发者工具（小程序）运行`weapp`目录


## 目录详解

```
wechat-weapp-wxss-tool

├──scss	项目的scss样式源码
    ├──pages
        ├──index.scss 对应weapp/pages/`index`的wxss样式
        ├──test.scss 对应weapp/pages/`test`的wxss样式
        ├──....
    ├──components
        ├──test.scss 对应weapp/components/`test`的wxss样式
        ├──....
├──.css	项目的scss样式编译之后的过度文件夹
    ├──pages
        ├──index.scss 对应scss/pages/`index`的样式
        ├──test.scss 对应scss/pages/`test`的样式
        ├──....
    ├──components
        ├──test.scss 对应scss/components/`test`的样式
        ├──....
├──weapp 微信小程序源码目录
    ├──components
        ├──test
            ├──test.scss scss编译之后处理的文件
        ├──....
    ├──pages 
        ├──index
            ├──index.js
            ├──index.wxml
            ├──index.wxsss  scss编译之后处理的文件
            ├──index.json
        ├──logs
            ├──logs.js
            ├──logs.wxml
            ├──logs.wxsss scss编译之后处理的文件
            ├──logs.json
        ├──...
    ├──utils
        ├──...
    ├──app.js
    ├──app.json
    ├──app.wxss
├──gulpfile.js  gulp配置文件
├──package.json npm scripts 命令配置在此，及其他相关配置
├──README.md   项目描述
```

`注意：`
- scss/pages文件夹的文件名对应weapp下的pages的页面目录名及wxss的文件名
- scss/components文件夹的文件名对应weapp下的components的组件目录名及wxss的文件名


## License 

The MIT License (MIT)
