## 识别 Array

先定义一个数组：var arr = [];
>1. Array.isArray(arr);
>2. arr instanceof Array
>3. arr.constructor == Array
>4. Object.prototype.toString.call(arr) == '[object Array]'
