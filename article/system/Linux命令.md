[返回导航页](https://cqzhen.github.io/blog.html "导航页面")

# Linux 基础篇

### 系统篇

    uname -a 查看系统信息
		
    source /etc/profile 刷新权限
		
    vi /etc/passwd 查看权限

### 磁盘篇

    df -hl 查看磁盘剩余空间
    
    df -h 查看每个根路径的分区大小
    
    du -sh [目录名] 返回该目录的大小
    
    du -sm [文件夹] 返回该文件夹总M数
    
    du -h [目录名] 查看指定文件夹下的所有文件大小（包含子文件夹）

### 命令
    使用历史命令：ctrl + r 进行搜索

[![D7Q9IA.png](https://s3.ax1x.com/2020/12/03/D7Q9IA.png)](https://imgchr.com/i/D7Q9IA)

### 用户篇

    用户：超级用户（root 具有操作系统的一切权限，UID 值为 0）、普通用户（操作系统有限的权限，UID 值为 500-6000）、伪用户（方便系统管理，满足相应的系统进程文件属主的要求，伪用户不能登录系统，UID值 1 – 499）

    用户管理文件：passwd /etc/passwd  共七列，分别为

    | 账号名称 | 用户密码 | 用户标识码 | 组标识码 | 用户相关信息 | 用户家目录 |  用户环境   |
    |   :-:    |    :-:   |     :-:    |    :-:   |      :-:     |     :-:    |     :-:     |
    |   root   |    xxx   |      0     |     0    |     admin    |    /root   |  /bin/bash  |

    用户口令文件：shadow /etc/shadow  共八列，分别为

    |  用户名  |   口令   | lastModifyTime | 最大时间间隔 | 最小时间间隔 | 警告时间 | 不活动时间 | 失效时间 |
    |   :-:    |    :-:   |     :-:    |    :-:   |      :-:     |     :-:    |     :-:     |     :-:     |
    |   root   |    存放加密口令,第一个字符为！，表示不能登录   |    |    |    |   |   |   |

    添加用户： sudo adduser 用户名  || sudo useradd 用户名  (建议用第一个，可以为用户创建主目录，而且为用户指定 shell 版本，创建密码)

    删除用户：sudo userdel 用户名   （该用户已经删除，但是/home/下的文件夹还在，rm 直接删除即可）

    用户组分类：

    | 私有组 | 标准组 |
    |  :-:   |  :-:   |
    |  当在创建一个新用户user时，若没有指定他所属于的组，Linux就建立一个和该用户同名的私有组   |   标准组可以容纳多个用户，若使用标准组，在创建一个新用户时，就应该指定该用户所属于的组  |

    用户组：group /etc/group 共四列，分别为

    | 组名 | 组口令 | 组标识码 | 组内用户列表 |
    |  :-: |   :-:  |    :-:   |      :-:     |
    |  用户登录时所在的组名 | 一般不使用 |  |属于改组的所有用户列表|

    修改组名： groupmod -n newGroupName groupName

    删除组： groupdel groupName  （删除的帐号必须存在，且不能是某个用户的私有组）

    添加用户到组： gpasswd -a userName groupName

    从组中删除用户： gpasswd -d userName groupName

    查看某个用户属于哪个组: groups userName

    查看某个组有哪些用户: tail 5 /etc/group 最后一行

    查看一个用户的UID和GID: 
    
        id -g userName 显示 GID

        id -G userName 显示所有组

        id -u userName 显示 UID

    查看用户的相关信息，包括用户的主目录，启动shell，用户名等:

        finger [options] userName eg: finger bruce

        finger -l userName

        finger -s userName

    转换当前账户:su username
    

### 文件权限篇

    r（读 read）：4，文件：读取文件内容，目录：查看目录下的文件列表 
   
    w（写 write）：2，文件：修改文件内容，目录：删除和创建目录下的文件
    
    x（执行 execute）：1，文件：执行权限对除二进制程序以外的文件没什么意义，目录：可以cd进入目录，能查看目录中文件的详细属性，能访问目录下文件内容（基础权限）
    
    修改文件权限：chmod xxx file (备注：xxx 每个字符代表不同级别的权限，顺序依次为 owner,group,other, 每个最高权限之和为 7 = 4 + 2 + 1） 

### echo
