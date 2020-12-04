[返回导航页](https://cqzhen.github.io/blog.html "导航页面")

# Linux mysql

### 查看自己 Linux 版本

1. 清理遗留 mysql（暴力，和 mysql 相关的统统删掉)
2. find / -name mysql*  (如果有，统统删掉)
3. yum repolist all \| grep mysql  (如果有，yum remove '文件名'，删掉)
4. rpm -qa \| grep mysql  (如果有，rpm -e '文件名'，删掉)
5. rpm -pa \| grep mariadb (如果有，同上，mariadb 很招人烦）
6. 别担心，以上步骤涉及到的文件统统删掉，反正你正在从头安装 mysql ，越干净越好

### 下载相应的 mysql 镜像


[一定要下载和自己系统版本相对应的](https://dev.mysql.com/downloads/repo/yum/)
![mysql](https://s2.ax1x.com/2019/11/26/QSSdv4.png "mysql")

###  通过 wget 下载镜像

1. wget url （下载到你放置的文件夹）
2. 通过 rpm 安装镜像：rpm -ivh '镜像名称(你刚下载的)'
3. 通过 yum 安装 mysql：yum install mysql-community-server 或者 yum install -y mysql-server
4. 查看MySql默认密码: grep 'temporary password' /var/log/mysqld.log
5. 登陆 mysql -u root -p
6. 要注意，Linux 用命令为：
    - systemctl start mysqld #启动mysqld
    - systemctl stop mysqld #停止mysqld
    - systemctl restart mysqld #重启mysqld
    - systemctl enable mysqld #设置开机启动
    - systemctl status mysqld #查看 MySQL Server 状态
7. 修改初始密码：ALTER USER 'root'@'localhost' IDENTIFIED BY 'newpassword'
8. 创建基于 root 的用户：CREATE USER 'newuser'@'localhost' IDENTIFIED BY 'root';
9. 修改初始密码：ALTER USER 'newuser'@'localhost' IDENTIFIED BY 'newpassword'
10. 给用户 newuser 分配权限：GRANT ALL PRIVILEGES ON *.* TO 'newuser'@'localhost'

## windows install mysql

1. [一定要下载和自己系统版本相对应的](https://dev.mysql.com/downloads/installer/)
2. 安装完成：
      cmd 启动 mysql 服务：net start mysql 
      可视化启动 mysql 服务：计算机管理 -> 服务 -> MySQL -> 右键启动服务
3. 进入数据库：mysql -u root -p
4. 待写关于 windows gitbash 启动 mysql，winpty ......

### 完毕！
