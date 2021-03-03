[返回导航页](https://cqzhen.github.io/blog.html "导航页面")

# Object toString

[toString](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/toString "toString")

每个对象都有一个 toString() 方法，当该对象被表示为一个文本值时，或者一个对象以预期的字符串方式引用时自动调用。默认情况下，toString() 方法被每个 Object 对象继承。如果此方法在自定义对象中未被覆盖，toString() 返回 "[object type]"，其中 type 是对象的类型。以下代码说明了这一点：

可以通过 toString() 来获取每个对象的类型。为了每个对象都能通过 Object.prototype.toString() 来检测，需要以 Function.prototype.call() 或者 Function.prototype.apply() 的形式来调用，传递要检查的对象作为第一个参数，称为 thisArg。

[![ynEHtx.png](https://s3.ax1x.com/2021/02/02/ynEHtx.png)](https://imgchr.com/i/ynEHtx)


# Array toString

[Array.prototype.toString](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/toString "Array toString")
Array对象覆盖了 Object的 toString 方法。对于数组对象，toString 方法连接数组并返回一个字符串，其中包含用逗号分隔的每个数组元素。

# Function toString

[Function.prototype.toString](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Function/toString "Function toString")
Function对象覆盖了从Object继承来的toString 方法。对于用户定义的 Function 对象，toString方法返回一个字符串，其中包含用于定义函数的源文本段。

# Number toString

[Number.prototype.toString](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Number/toString "Number toString")
Number 对象覆盖了 Object 对象上的 toString() 方法，它不是继承的 Object.prototype.toString()。对于 Number 对象，toString() 方法以指定的基数返回该对象的字符串表示。

# Boolean toString

[Boolean.prototype.toString](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Boolean/toString "Boolean toString")
Boolean 对象覆盖了 Object 对象的  toString 方法。并没有继承 Object.prototype.toString()。对于布尔对象，toString 方法返回该对象的字符串形式。

# Date toString

[Date.prototype.toString](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Date/toString "Date toString")
Date对象覆盖了 Object 对象的 toString() 方法；它不是继承自 Object.prototype.toString()。对于  Date 对象，toString() 方法返回一个表示该对象的字符串。该 toString 方法总是返回一个美式英语日期格式的字符串。

# Error toString

[Error.prototype.toString](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Error/toString "Error toString")
Error 对象覆盖了 Object.prototype.toString() 方法。toString() 方法返回一个指定的错误对象（Error object）的字符串表示。
