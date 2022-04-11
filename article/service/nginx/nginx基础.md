[返回导航页](https://cqzhen.github.io/blog.html "导航页面")

# Nginx 基础篇

## Linux Nginx 基础篇

### 启动 Nginx
>>1. 直接启动   nginx
>>2. 命令启动   systemctl start nginx.service
### 重启 Nginx
>>1. systemctl restart nginx.service     (重启Nginx服务)
>>2. nginx -s reload                     (重新载入配置文件，建议不要停止再重启，以防报错)
### 停止Nginx服务
>>1. nginx -s quit										(非暴力停止)
>>2. nginx -s stop										(暴力停止）
>>3. systemctl stop nginx.service    (Liunx 命令停止)
>>4. killall nginx                   (killall 方法，直接杀死进程，强硬暴力)
### 查看启动后记录
ps aux | grep nginx
### 查看端口号
netstat -tlnp
lsof -i:port
netstat -ap | grep port

## Windows Nginx 基础篇

### 启动 Nginx
>>1. 直接启动   ./nginx.exe 或 start ./nginx
### 停止 Nginx
>>1. ./nginx -s stop 或 ./nginx.exe -s stop 或 ./nginx -s quit
### 重启 Nginx
>>1. ./nginx -s reload 或 ./nginx.exe -s reload
