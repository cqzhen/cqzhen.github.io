[返回导航页](https://cqzhen.github.io/blog.html "导航页面")

# Module

    CommonJS, ES6, AMD, CMD


### CommonJS

    module.exports

    require

### ES6

``` Javascript
// test.js

let a = 123;

let getValue = function(value) {
  return value;
}

export { a, getValue }  

// main.js 
import { a, getValue } from './test';

getValue('test');
```

### AMD

    依赖前置，提前执行

``` Javascript
// 无依赖的模块
define(function() {});
// 有依赖的模块
define(['underscore'], function(){});
// 引用
require(['jquery', 'underscore'], function($, underscore) {});
```

### CMD

    依赖就近，延迟执行

``` Javascript
// 有依赖的模块
define(function(require, exports, module){
  let $ = require('jquery');
  let getValue = function() {
    return $.select('#id').value;
  }

  exports.getValue = getValue;
});

```
