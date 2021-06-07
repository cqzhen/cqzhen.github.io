[返回导航页](https://cqzhen.github.io/blog.html "导航页面")

# Bat

此 bat 非彼 BAT，此 bat：

批处理文件，在DOS和Windows（任意）系统中，.bat文件是可执行文件，由一系列命令构成，其中可以包含对其他程序的调用。这个文件的每一行都是一条DOS命令（大部分时候就好像我们在DOS提示符下执行的命令行一样），你可以使用DOS下的Edit或者Windows的记事本(notepad)等任何文本文件编辑工具创建和修改批处理文件。

批处理(Batch)，也称为批处理脚本。顾名思义，批处理就是对某对象进行批量的处理，通常被认为是一种简化的脚本语言，它应用于DOS和Windows系统中。批处理文件的扩展名为bat 或cmd。目前比较常见的批处理包含两类：DOS批处理和PS批处理。

##### 查看命令

遇到不懂的命令，可以通过 /? 查看帮助说明（command_name /?），比如查看 help 命令，可在 cmd 窗口输入：help /?

[![20NQBR.png](https://z3.ax1x.com/2021/06/07/20NQBR.png)](https://imgtu.com/i/20NQBR)

``` 
// shell bat || batch

@echo off

echo %cd%

copy "%cd%\**\*.js" "%cd%\project_test\js\"

```

##### del 删除文件

[![bat_del](https://z3.ax1x.com/2021/06/07/20MISI.png)](https://imgtu.com/i/20MISI)

##### rd 删除目录

[![bat_rd](https://z3.ax1x.com/2021/06/07/20QF7F.png)](https://imgtu.com/i/20QF7F)
