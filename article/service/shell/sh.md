[返回导航页](https://cqzhen.github.io/blog.html "导航页面")

# Bourne Shell

心得：如果担心每次手动失误，那就交给 Shell，毕竟程序失误的概率很低。

批处理文件，在 Linux 系统中，.sh 文件是可执行文件，由一系列命令构成，其中可以包含对其他程序的调用。这个文件的每一行都是一条命令（大部分时候就好像我们在终端下执行的命令行一样）。

##### 查看命令

```
# !/bin/bash
# demo

pm2 list

pm2 stop all

pm2 delete all

cd /../../test1

pwd

pm2 start ecosystem.config.js --env uat

cd /../../test2

pwd

pm2 start ecosystem.config.js --env uat

pm2 list

cd /../../sh

```

