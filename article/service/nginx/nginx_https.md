[返回导航页](https://cqzhen.github.io/blog.html "导航页面")

# Nginx 开启 Https

### 购买 SSL 证书（阿里可购，其中有一款免费购一年）
### 下载证书解压
下载证书后解压，会看到两个文件，一个是 .pem 后缀，另一个是 .key 后缀。
### Nginx 开启 Https 的配置
>1. 到服务器找到 Nginx 的配置，找到其中监听 443 端口的服务配置。（要注意，http 用的是 80 端口，而 https 用的 443 端口，所以找到监听 443 的端口服务配置）
>2. 其中 ssl_certificate、ssl_certificate_key 为你的密钥和公钥，你需要从你本地下载的上传到你的服务器相应的地方（具体 Nginx 配置阿里云上有教程)
>3. 配置好，执行 nginx -s reload  (重启 nginx），结果报错了：
nginx: [emerg] unknown directive "ssl"
搜了一波，原因是我没有配置 --with-http_ssl_module 这个模块。但是发现安装这个模块需要去 Nginx 解压包的文件下执行 （瞬间懵逼了，我记得我安装好 Nginx 后我就把解压包和压缩包都删掉了...)
呵呵哒
似乎听到高中老师的呼唤：这个有解没？
有解没？
有解没？
有解没？
(除了我下面的笨办法外，还有其它方法吗？求解: github 上留答案）
.
.
.
>4. 瞬间脑袋一灵光，看看自己的 Nginx 的版本，然后重新下载同一个版本并解压，然后到解压包下面执行：./configure --with-http_ssl_module  （记得安装 openssl 包：yum -y install openssl openssl-devel，本人试过，安装多次也无妨，不用担心安装多了）
然后执行：关掉 Nginx (nginx -s quit)，重启 Nginx （nginx)。（注意：本人试了多次，直接nginx -s reload 多次无效，不知道是否自己运气不佳，还是根本就得关掉重启）
>5. nginx -t 测试通过
>6. 网站可以 https 访问了，Https 终于可见天日了 
#### 友情提示，记得 http 定向到 https (rewrite)
