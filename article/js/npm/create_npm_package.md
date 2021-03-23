[返回导航页](https://cqzhen.github.io/blog.html "导航页面")

#  Create a package for npm

### npm 账号

[npm 官网注册账号](https://www.npmjs.com/)

### 创建包项目

    1. 和普通项目没区别

### 调试
本地包项目写好了，在发布包之前如何本地测试呢？

    1. npm link     (在包项目目录下执行 npm  link, 会产生一个链接，类似：../project/yourpackage/ -> ../yourpackage)
    
    2. 创建一个本地项目，然后引入你的本地包，在根目录下执行 npm link yourpackage（也就是 important package from 'yourpackage' 你的 npm link）
    
    3. 引入本地包成功后会看到提示：本地项目加载的依赖包 -> npm 包路径 -> 本地包路径

```

try it

```

### 上传

    1. 本地登录 npm: npm login
    2. usernaem/password/email  依次输入，和自己的 npm 账号应完全匹配
    3. 登录是否成功可以用 npm whoaim 校验
    4. 版本设置（每次发布需要不同的版本，需注意）
    5. 发布 npm publish

### 验证

    1. 先上 npm 官网看看自己的包是否更新
    2. 本地建个项目安装一下自己最新的包，体验一下是否所有功能正常
