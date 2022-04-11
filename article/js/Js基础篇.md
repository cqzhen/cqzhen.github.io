[返回导航页](https://cqzhen.github.io/blog.html "导航页面")

# 基础篇

### Javascript 中的数据类型

Js 数据类型目前有七种（Number, String, Boolean, undefined, null, symbol, Object），这六种又分为基本类型和引用类型。基本类型的值存在栈中，引用类型不同，引用类型值存在堆中，每个堆内存中有一个引用地址，该引用地址存放在栈中。

```javascript

// Undefined 类型只有一个值 undefined。当声明了变量没有初始化时，就相当于给变量赋予 undefined 值
// null 类型只有一个值 null, null 值表示一个空对象指针
let jsType = ['Number', 'String', 'Boolean', 'undefined', 'null', 'symbol', 'Object'];

let test;
let sym1 = Symbol('123');
let sym2 = Symbol('123');
console.log(test); // 'undefined'
console.log(test1); // 'test1 is not defined'
console.log(typeof null); // 'object'
console.log(sym1 == sym2); // false

let basicType = jsType.filter(x => x != 'Object');
let QuoteType = ['Object'];
let QuoteChildType = ['Object', 'Array', 'function', 'Date', 'RegExp', 'Function'];

```

### 数组常用的方法
