[返回导航页](https://cqzhen.github.io/blog.html "导航页面")

# CORS

Cors (Cross-Origin Resource Sharing，跨源资源共享）

### withCredentials

默认情况下，跨源请求不提供凭据（cookie、HTTP 认证以及客户端 SSL 证明等）。通过将 withCredentials 属性设置为 true，可以指定某个请求应该发送凭据。如果服务器接收带凭据的请求，会用下面的 HTTP 头部来响应。

```
Access-Control-Allow-Credentials: true
```
如果这个头部没有返回，那么浏览器不会把响应交给 JavaScript(于是，responseText 中将是空字符串， status 的值为 0，而且会调用 onerror() 事件处理程序）。

### 跨域方案

#### 图像 Ping

#### JSONP
