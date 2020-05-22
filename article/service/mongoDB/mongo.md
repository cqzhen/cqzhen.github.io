[返回导航页](https://cqzhen.github.io/blog.html "导航页面")

# MongoDB

### 准备工作

>1. [下载 mongoDB](https://www.mongodb.com/download-center/community "mongoDB")
>2. [mongoDB 指导](https://www.runoob.com/mongodb/mongodb-window-install.html "mongoDB")
>3. 安装好后创建 db 存储的数据文件夹


### 启动

>1. 进入 MongDB 安装目录的 bin 文件下, 记得先看 ./../README (指导操作很重要）
>2. 执行 ./mongo (如果嫌弃这种操作，可以看下面的 2，快速摆脱）
>3. 优化 2 ,可以添加环境变量（思考：一切都有最【偷】优【懒】的方法）
    >1. touch ~/.bash_profile
    >2. .bash_profile 添加 mongo 环境变量（mongo 的安装目录，定位到 bin 目录）
    >3. source ~/.bash_profile （source 环境变量生效的命令)
    >4. 测试 gitbash 窗口任意目录下执行 mongo

### 导出导入

    导出：mongoexport

    导入：mongoimport

    备份：mongodump

    恢复：mongorestore

### 使用

    show databases || show dbs;

    use db

    show tables;

    db.table.find() ...   (注意 mongdb 增删查改语法，不同与 sql）
