[返回导航页](https://cqzhen.github.io/blog.html "导航页面")

# Linux Nginx 添加开机重启

### 添加开机重启文件

    1. vim /etc/init.d/nginx

    2. [复制配置内容](https://www.nginx.com/resources/wiki/start/topics/examples/redhatnginxinit/ "Init Script")

### 添加执行权限

    1. chmod a+x /etc/init.d/nginx

### 测试

    /etc/init.d/nginx start #启动

    /etc/init.d/nginx stop #关闭

    或者

    service nginx start

    service nginx stop

### 添加至开机自启动

    chkconfig --add /etc/init.d/nginx

    或

    chkconfig /etc/init.d/nginx on (不知道为什么这个不行）
