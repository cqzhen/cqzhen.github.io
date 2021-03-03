[返回导航页](https://cqzhen.github.io/blog.html "导航页面")

# 时区篇

由于世界各国家与地区经度不同，地方时也有所不同，因此会划分为不同的时区。

### 问题

一切依赖于时间的服务，都需要考虑到时区的准确性。(*常见的就是各种定时任务*)

    1. 全球性软件，根据用户所在时区 (*需要在应用层对时间做时区处理*)

    2. 局域性软件，根据系统时间（*这时候就要看系统时间的时区是否正确*）

### Linux

查看当前系统时区：命令行输入 date

##### 系统各种时区文件位置：

```
cd /usr/share/zoneinfo/
```

##### 修改时区多种方法：

[参考 timedatectl](https://www.cnblogs.com/zhi-leaf/p/6282301.html "timedatectl")

```
// 1种，通过覆盖，修改为上海时间
cp /usr/share/zoneinfo/Asia/Shanghai /etc/localtime

timedatectl set-timezone "Asia/Shanghai"
```

```
// 2种，直接手动创建软链接，修改为上海时间
ln -sf /usr/share/zoneinfo/Asia/Shanghai /etc/localtime

timedatectl set-timezone "Asia/Shanghai"
```

```
// 3种，通过命令行 tzselect，跟着提示走，修改为上海时间
tzselect
...
...
// 最终记得还得敲下面命令
TZ='Asia/Shanghai'; export TZ
```

```
// 4种，通过命令行 timedatectl，修改为上海时间，这种怎么和第一种有点相似。这种比较靠谱。
timedatectl list-timezones  | grep "Asia/Shanghai"
timedatectl set-timezone Asia/Shanghai
```
		

### Windows

