[返回导航页](https://cqzhen.github.io/blog.html "导航页面")

# Promise

### Promise 是什么 ？

    > 1. 是一个对象，它代表了一个异步操作的最终完成或失败。
    
    Promise 对象是由关键字 new 及其构造函数来创建的。该构造函数会把一个叫做“处理器函数”（executor function）的函数作为它的参数。这个“处理器函数”接受两个函数——resolve 和 reject ——作为其参数。当异步任务顺利完成且返回结果值时，会调用 resolve 函数；而当异步任务失败且返回失败原因（通常是一个错误对象）时，会调用reject 函数。

### 为什么会用 Promise ？

    > 1. 链式调用（chaining）
    > 2. 即使异步操作已经完成（成功或失败），在这之后通过 then() 添加的回调函数也会被调用。
    > 3. 通过多次调用 then() 可以添加多个回调函数，它们会按照插入顺序执行。
    > 4. 在本轮 事件循环 运行完成之前，回调函数是不会被调用的。

### 什么是链式调用？

    > 1. 连续执行两个或者多个异步操作是一个常见的需求，在上一个操作执行成功之后，开始下一个的操作，并带着上一步操作所返回的结果。我们可以通过创造一个 Promise 链来实现这种需求。
    > 2. then() 函数会返回一个和原来不同的新的Promise
    > 3. Catch 的后续链式操作：有可能会在一个回调失败之后继续使用链式操作，即 使用一个 catch，这对于在链式操作中抛出一个失败之后，再次进行新的操作很有用。
    注意：一定要有返回值，否则，callback 将无法获取上一个 Promise 的结果。(如果使用箭头函数，() => x 比 () => { return x; } 更简洁一些，但后一种保留 return 的写法才支持使用多个语句。）。

### Promise 拒绝事件

当 Promise 被拒绝时，会有下文所述的两个事件之一被派发到全局作用域（通常而言，就是window；如果是在 web worker 中使用的话，就是 Worker 或者其他 worker-based 接口）。这两个事件如下所示：
    > 1. rejectionhandled: 当 Promise 被拒绝、并且在 reject 函数处理该 rejection 之后会派发此事件。
    > 2. unhandledrejection：当 Promise 被拒绝，但没有提供 reject 函数来处理该 rejection 时，会派发此事件。

### 详解 Promise

Promise.prototype.then 和  Promise.prototype.catch 方法返回promise 对象， 所以它们可以被链式调用。

    > 1. Promise.all(iterable)
    > 2. Promise.allSettled(iterable)
    > 3. Promise.any(iterable)
    > 4. Promise.race(iterable)
    > 5. Promise.reject(reason)
    > 6. Promise.resolve(value)
