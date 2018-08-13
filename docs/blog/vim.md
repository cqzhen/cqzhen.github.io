# vim

## vim 配置
  
  let skip_defaults_vim=1
  
  syntax on
  
  set number
  
  set tabstop=2
  
  set smartindent
  
  set autoindent
  
  set foldmethod=syntax
  
  set shiftwidth=0
  
  set expandtab
  
  " imap { {}<ESC>i<CR><ESC>V<O
  
  set cindent
  
  imap { {}<ESC>i


## 快捷键

###### 把插入模式当成一个命令，随用随 esc

###### 多行注释
    1. v 选中要注释的行（也可用于添加多列内容）
    2. ctrl v 进入列模式
    3. 按大写“I”进入插入模式，输入注释符“#”或者是"//"，然后立刻按下ESC（两下）

###### 取消多行注释
    1. v 选中要取消注释的行（也可用于删除列内容）
    2. ctrl v 进入列模式
    3. 选中要删除的列，之后按 d 即可

###### 同时多个文档的操作
    1. 打开多个文档： vim -O/-o  xx xx （大写的 O：横向展示多个文档，小写的 o：竖屏展示多个文档）
    2. 多个文档切换：
      1) ctrl ww 按顺序切换文档
      2) ctrl w（h/j/k/l）按方向切换文档
 
###### 翻页
    1. 向下翻页 ctrl f
    2. 向上翻页 ctrl b
    3. 向下翻半页 ctrl d
    4. 向上翻半页 ctrl u
