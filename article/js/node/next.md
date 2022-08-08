[返回导航页](https://cqzhen.github.io/blog.html "导航页面")

# Node Next

用于中间件（middleware）,它允许将控制权从一个中间件函数传递给另一个。

   1. 应用级中间件
   2. 路由级中间件
   3. 错误处理中间件（四个参数，多了个参数 err）
   4. 内置中间件
   5. 第三方中间件

## Next

    1. next()：继续下一个中间件，当前中间件的代码仍继续执行。
    2. return next()：继续下一个中间件，当前中间件的代码不继续执行。


```
const express = require('express');

const app = express();

const port = 8080;

app.get('/test', (req, res, next) => {
  let params = req.query;
  if (params && params.id) return next(new Error('something is wrong'));
  next();
  console.log('next 1 code continue');
});

app.get('/test', (req, res, next) => {
  return next();
  console.log('next 2 code continue');
});

app.get('/test', (req, res, next) => {
  console.log('creat the error');
  res.status(200).send('creat the error');
});

app.use((err, req, res, next) => {
  console.log('catch the error');
  res.status(500).send('catch the error');
});

app.listen(port, () => {
  console.log('port:', port);
});

```

路由输入 /test，控制台输出

```
// 需要注意 next() 仍然会继续执行代码
// 所以输出下面这句
next 1 code continue

creat the error

```

路由输入 /test?id=123，控制台输出

```
next 1 code continue

catch the error

```
















