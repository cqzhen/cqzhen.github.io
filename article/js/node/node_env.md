[返回导航页](https://cqzhen.github.io/blog.html "导航页面")

# Node ENV

## 作用

ENV 环境变量，顾名思义，根据当前环境产生不同效果。所以想到最好的作用就是快速切换环境。尤其现在市场上开发主题流程为：dev - uat - prod。有了环境变量，我们就可以针对不同的环境做任何的定制化。

## Example 

### 区分服务 

```
NODE_ENV='dev' npm run build // 加入环境变量
```

```
// config.js
const envs = {
  "local": {
     url: "http://localhost"
  },
  "development": {
     url: "https://dev.test.com"
  },
  "uat": {
     url: "https://uat.test.com"
  },
  "production": {
     url: "https://prod.test.com"
  },
}

let env = envs[process.env.NODE_ENV];

module.exports = env;

```

```
// 需要区分环境变量的模块
import Env from '../utils/config';
let baseUrl = Env.url || https://www.test.com;

```



