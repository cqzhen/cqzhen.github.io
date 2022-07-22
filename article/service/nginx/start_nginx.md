[返回导航页](https://cqzhen.github.io/blog.html "导航页面")

# Linux Nginx 添加开机重启

### 配置内容地址

[配置内容地址](https://www.nginx.com/resources/wiki/start/topics/examples/redhatnginxinit/ "Init Script")

### 添加开机重启文件

    1. vim /etc/init.d/nginx

    2. 复制配置内容

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

# Windows Nginx 添加开机重启

### 准备工具

[工具 winSW 地址](https://github.com/winsw/winsw/releases)

### 操作

    1. 下载 winSW 工具

    2. 新建winsw.xml

    3. 编辑，将下载的 exe 文件移动到 nginx 目录下，重命名为 winsw.exe ,新建配置文件 winsw.xml ，写入下面的配置，注意替换路径：winsw.xml

    4. 在当前路径下打开命令窗口（cmd 窗口）,执行命令：winsw install winsw.xml

    5. 启动服务：winsw start winsw.xml（这个时候就可以了）

    6. 检测启动服务是否正常：winsw status winsw.xml

    7. 查看是否成功添加了服务，“此电脑”右键 -> “管理” -> “服务和应用程序” -> “服务”：Nginx

``` winsw.xml
  <service>
    <id>nginx service</id>
    <name>Nginx</name>
    <description>This service runs Nginx.</description>
    <env name="NGINX_COMIC" value="%BASE%" />
    <prestart>start D:\nginx-1.18.0\nginx.exe</prestart>
    <executable>D:\nginx-1.18.0\nginx.exe</executable>
    <prestop>D:\nginx-1.18.0\nginx.exe -s stop</prestop>
    <log mode="roll" />
    <onfailure action="none" />
  </service>

```

### windows 注意点：

    1. 输入命令时参数 winsw.xml 并不是必需，想要省略，让配置文件名称跟 winsw.exe 文件的名称一致即可，否则不带配置文件名称参数会报错。

    2. winsw.exe 文件需要放置在 nginx 安装目录下，否则执行指令的时候会提示找不到 nginx 的配置文件。

    3. 出错误的时候，会输出日志，看日志有助于排查问题。

