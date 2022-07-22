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
>>4. 启动服务 （也就是启动配置文件）：pm2 start ecosystem.config.js --env local


```
env: {
  NODE_ENV: 'development'
},
env_local: {
  NODE_ENV: 'development'
},
env_uat: {
  NODE_ENV: 'uat'
},
env_production: {
  NODE_ENV: 'production'
}
```

### 自动重启（代码更新） PM2

    1. pm2 start app.js --watch (待测试：假如项目里面有文件在跑任务更新是否需要慎重气用）

    2. --ignore-watch （在问题 1 里面可以试试 --ignore-watch）

### 配置电脑重启自动重启 PM2 (Linux)

    1. pm2 unstartup

    2. pm2 save

    3. pm2 startup

    4. 将 3 产生的输出命令复制并贴到输入窗口然后执行

### 配置电脑重启自动重启 PM2 (Windows)

    1. npm install pm2-windows-startup -g

    2. pm2-startup install (nginx root file || Nginx 根目录)

    3. pm2 start path

    4. pm2 save

### 日志 Logs

    1. pm2 的日志默认没有时间，需要配置添加时间字段，log_date_format : "YYYY-MM-DD HH:mm Z",

