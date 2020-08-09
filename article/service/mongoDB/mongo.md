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

    参数说明：
　　　　-h 指明数据库宿主机的IP
　　　　--port 指明数据库的端口
　　　　-u 指明数据库的用户名
　　　　-p 指明数据库的密码
　　　　-d 指明数据库的名字
　　　　-c 指明collection的名字
　　　　-o 指明到要导出的文件名
　　　　-q 指明导出数据的过滤条件
    
    导出：mongoexport

    导入：mongoimport

    备份：mongodump-> mongodump targetDB（目标数据库） -o backupDB（备份数据库，备份位置可自己选择）

    恢复：mongorestore-> mongorestore backupDB

### 使用

    展示所有数据库：show databases || show dbs;

    切换当前数据库：use db
    
    为当前数据库创建表：db.createCollection('表名');  // table 在 mongoDB 里叫 collections
    
    删除当前数据库表：db.表名.drop();

    展示当前数据库所有表：show tables || show collections;

    为当前数据库某 table 表增加一条（如果是对象数组：增加多条）数据：db.table.insert({name: 'test', ...}) ...   (注意 mongdb 增删查改语法，不同与 sql）
    
    为当前数据库某 table 表删除数据（可以加个整数参数，代表删除几行）：db.table.remove({name: 'test', ..., n}) ...   (注意 mongdb 增删查改语法，不同与 sql）
    
    查询当前数据库某 table 表：db.table.find() ...   (注意 mongdb 增删查改语法，不同与 sql）
