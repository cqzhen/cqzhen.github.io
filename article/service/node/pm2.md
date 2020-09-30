[返回导航页](https://cqzhen.github.io/blog.html "导航页面")

# PM2

### 启动服务
>>1. 直接启动  pm2 start *  (文件名) 

### 重启服务 
>>1. pm2 update  (重启服务)

### 停止服务
>>1. pm2 stop id

### 删除启动的服务
>>1. pm2 delete|del id

### 查看启动后记录
>>1. pm2 list

### 查看服务日志
>>1. pm2 logs

### 配置服务环境变量
>>1. pm2 init -> ecosystem.config.js
>>2. 修改 ecosystem.config.js 入口文件: script
>>3. 添加各种环境 （命名规则 env_ 开头)
>>4. 启动服务 （也就是启动配置文件）：pm2 start ecosystem.config.js


```
env: {
  NODE_ENV: 'development'
},
env_uat: {
  NODE_ENV: 'uat'
},
env_production: {
  NODE_ENV: 'production'
}
```
