[返回导航页](https://cqzhen.github.io/blog.html "导航页面")

# 错误篇

### throw

    1. 字符串：throw '出错了'
    2. error 对象：throw new Error('出错了')

### catch

    1. Promise catch
    2. try catch

### try

    1. try catch 不能捕获代码块里的异步方法里面抛的异常

```
try {
  return new Promise((resolve, reject) => {
      reject('出错了');
    }).catch(err=> { throw new Error(err.message) });
} catch (err) {
  // 并不能打印出，因为不能捕获异步方法抛出的异常
  console.log(err.message);
}
```

    2. Promise 异常捕获(Promise 后面的 catch 方法返回的还是一个 Promise 对象)

```
function test() {
  return new Promise((resolve, reject) => {
      reject({message:'出错了'});
    }).catch(err=> { console.log(typeof err); return new Error(err.message) });
}
test().then(res => console.log(1)).then(res => console.log(2)).catch(err => console.log(err.message));
// object
// 1
// 2
// Promise {<resolved>: undefined}
```

```
function test() {
  return new Promise((resolve, reject) => {
      reject({message:'出错了'});
    }).catch(err=> { console.log(typeof err); throw new Error(err.message) });
}
test().then(res => console.log(1)).then(res => console.log(2)).catch(err => console.log(err.message));
// object
// 出错了
```

    3. Promise 异步异常捕获

    Promise 对象的错误具有冒泡性质，会一直向后传递，直到被捕获为止，也就是说，错误总是会被下一个 catch 语句捕获

```
function test(n) {
  return new Promise((resolve, reject) => {
      console.log('正常' + n)
      resolve({message:'正常' + n});
    }).catch(err=> { console.log(typeof err); throw new Error(err.message) });
}

function testError() {
  return new Promise((resolve, reject) => {
      console.log('出错了')
      reject({message:'出错了'});
    }).catch(err=> { console.log(typeof err); throw new Error(err.message) });
}

test(1).then(res => test(2)).then(res => testError()).then(res => test(3)).catch(err => { console.log(123); console.log(err) });
// 正常1
// 正常2
// 出错了
// object
// 123
// Error:出错了
// Promise {<resolved>: undefined}
```

## 错误类型

[错误类型](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Error "Error Type")

1. EvalError

  创建一个 error 实列，表示错误的原因：与 eval() 有关

2. InternalError

  创建一个代表 Javascript 引擎内部错误的异常抛出的实例。如 “递归太多”

3. RangeError

  创建一个 error 实例，表示错误的原因：数值变量或参数超出其有效范围。

4. ReferenceError

  创建一个 error 实例，表示错误的原因：无效引用。

5. SyntaxError

  创建一个 error 实例，表示错误的原因：eval() 在解析代码的过程中发生的语法错误。

6. TypeError

  创建一个 error 实例，表示错误的原因：变量和参数不属于有效类型。

7. URIError

  创建一个 error 实例，表示错误的原因：给 encodeURI() 或 decodeURI() 传递的参数无效。

