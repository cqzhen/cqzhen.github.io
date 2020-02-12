[返回导航页](https://cqzhen.github.io/blog.html "导航页面")

# Mac 搭建 IIS 服务

[Mono 官网](https://www.mono-project.com/ "官网")
[Mono 官网 fastcgi 配置](https://www.mono-project.com/docs/web/fastcgi/nginx/ "安装配置")

### Mono
		fastcgi_params
		nginx

### Nginx

```
server {
         listen   80;
         server_name  www.domain1.xyz;
         access_log   /var/log/nginx/your.domain1.xyz.access.log;
         root /var/www/www.domain1.xyz/;

         location / {
                 index index.html index.htm default.aspx Default.aspx;
                 fastcgi_index Default.aspx;
                 fastcgi_pass 127.0.0.1:9000;
                 include /etc/nginx/fastcgi_params;
         }
 }
```

### fastcgi_params
    ../nginx/fastcgi_params

```
fastcgi_param  PATH_INFO          "";
fastcgi_param  SCRIPT_FILENAME    $document_root$fastcgi_script_name;
```

### Working
fastcgi fastcgi-mono-server4

```
fastcgi-mono-server4 /applications=/:/var/www/www.domain1.xyz/ /socket=tcp:127.0.0.1:9000
```
启动Nginx: nginx
