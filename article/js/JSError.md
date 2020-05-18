[返回导航页](https://cqzhen.github.io/blog.html "导航页面")

# 错误篇

### throw

    1. 字符串：throw '出错了'
    2. error 对象：throw new Error('出错了')

### catch

    1. promise catch
    2. try catch

### try

    1. try catch 不能捕获代码块里的异步方法里面抛的异常

    ```
    try {
      return Promise((resolve, reject) => {
          reject('出错了');
        }).catch(err=> { throw new Error(err.message) });
    } catch (err) {
      // 并不能打印出，因为不能捕获异步方法抛出的异常
      console.log(err.message);
    }
    ```
