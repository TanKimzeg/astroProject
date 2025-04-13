---
title: Vim使用教程
description: "随时查阅"
pubDate: "2025 2 17"
categories:
  - tech
tags: 
  - vim
---

[【Vim】可能是B站最系统的Vim教程](https://www.bilibili.com/video/BV1s4421A7he)

> Edit text at the speed of thought.

*之前粗略学习了一下,已经在我的VScode,Obsdian中投入使用.但感觉不够高效,遂补齐这一课.*

# Vim模式
Vim主要有4中模式:
- Normal
- Insert
- Command
- Visual

# Normal模式
## 移动
### 基本移动
- `hjkl`: 上下左右
- `gg`: 跳到第一行
- `G`: 跳到最后一行
- `Ctrl-U` / `Ctrl-B`: 往上翻半页/一页
- `Ctrl-D` / `Ctrl-F`: 往下翻半页/一页
- `{lineno}gg`: 跳到`lineno`行
- `zz/zt/zb`: 光标设置为屏幕居中/屏幕第一行/屏幕最后一行
### 基于单词的移动
- `w`: 跳转到下一处单词的开头
- `b`: 跳转到上一处单词的开头
- `e`: 跳转到下一处单词的结尾
- `ge`: 跳转到上一处单词的结尾
- `wbe`的单词会以标点为界,大写版本`WBE`对应的单词是连续的非空字符

### 基于搜索的移动
行内搜索:
- `f{char}`/`t{char}`: 跳转到本行下一个`char`字符出现处/出现前
- `;`/`,`: 快速向后/向前重复`ft`查找
- `F{char}`/`T{char}`: 往前搜索

文件中搜索:
- `/{pattern}`: 跳转到本文件中下一个`pattern`出现处
- `?{pattern}`: 跳转到本文件中上一个`pattern`出现处
- `{pattern}`: 可以是正则表达式
- `*`: 等价于 `/{当前光标下的单词}`
- `nN`: 快速重复`/`查找,`n`向后;`N`向前

### 基于标记的移动
- `m{mark}`: 把当前位置标记为{mark}
- <code>`{mark}</code> : 跳转到名为{mark}的标记处
内置标记:
- <code>``</code>:上次跳转的位置
- <code>`.</code>: 上次修改的位置
- <code>`^</code>: 上次插入的位置

### 其他实用的跳转
- `^` / `$`: 跳转到本行的开始/ 结尾处
- `%`: 跳转到匹配的配对符号处(小括号,中括号,大括号,注释)

## Operator+Motion
`{operator}{motion}`: 一次编辑操作
上面任何移动都视为一次motion.
常用的操作符:
- `c`: 修改(删除内容并进入Insert模式)
- `d`: 删除
- `y`: 复制
- `v`: 选中,进入Visual模式
- 连按两次,作用于当前行.(`yy/dd/cc`)

## 批量操作
`{count}{action}`:重复执行操作
action可以是移动也可以是编辑操作

## Redo/Undo
- `.`: 重复上一次修改
- `u`: 撤销上一次修改
- `<Ctrl>-r`: 重做上一次修改

## Operator+textobject
`{operator}{textobject}`:文本对象操作
{textobject}: 语义化文本片段
格式: `i` / `a` + 对象
常用的对象:
- `w` / `W`, `s`, `p`: 单词,句子,段落
- `(` / `)` , `[` / `]` , `{` / `}` , `<` / `>` , `'` / `"`: 配对符定义的对象
`i` 代表内部, `a`包括周围的空格或配对符

## Operator操作符补充
- `>` / `<`: 缩进/取消缩进
- `J`:join, 连接两行
- `gu`/`gU`/`g~`:转小写/转大写/翻转大小写
- `g<Ctrl-A>`: 创建递增序列
- `<Ctrl-a>`/`<Ctrl-x>`:增加/减小数字

# Insert模式
Normal模式下,通过特定命令进入Insert模式:
- `i`:在光标之前开始输入
- `I`: 在本行开头开始输入
- `a`: 在光标之后开始输入
- `A`: 在本行末尾开始输入
- `o`:下方插入新的一行,然后开始输入
- `O`: 上方插入新的一行,然后开始输入
- `s`: 删除当前光标字符,然后开始输入
- `S`: 删除当前行,然后开始输入


# Command模式
Normal模式下输入`:`,进入Command模式
- `:w`: 保存文件
- `:q`: 退出
- `:wq`: 保存并退出
- `:h {command}`: 显示关于命令的帮助(VScode Vim不支持)
- `<Esc>`: 回到Normal模式
## Ex命令格式
`:[range] {excommand} [args]`
- `range`: 作用的范围,默认本行
- `excommand`: 使用于Command模式下的特殊命令
- `args`: 后续的参数

一些Ex Command(`[x]`是寄存器,是可选项):
- `:[range] d [x]`: 删除range中的行到寄存器x
- `:[range] y [x]`: 复制range中的行到寄存器x
- `:[range] p`: 打印range中的行

### `range`与address:指定范围
`range`由一个或两个address构成,即`{address}` 或 `{address},{address}`
address可以是:
- `{lineno}`: 行号
- `$`: 最后一行
- `.`:光标当前行
- `/{pattern}`: 下一个`pattern`所在行
address可以做加减法,如 `.+3`表示光标往下第3行, `$-3`表示倒数第4行.
- `%`: 当前文件所有行
- `'<` / `'>`: Visual模式中选中的开头和结尾

### 行的复制/移动/粘贴
- `:[range] copy {address}`: 把range中的行复制到address后面
- `:[range] move {address}`: 把range中的行移动到address后面
- `:[address] put [x]`: 把寄存器x中的内容粘贴到address后面

## 批量操作:normal命令
格式: `:[range] normal {commands}`
含义:对range中所有行执行Normal 模式下的命令commands
小技巧:
- range为%,可以对所有行执行
- `:[range] normal .`
- `:[range] normal @{register}`

## 批量操作:global命令
格式: `:[range] global/pattern/[excmd]`
含义: 对range中包含pattern的所有行执行Command模式下的e命令
`[excmd]`:Ex命令,默认为打印(print)
`:[range] global/{pattern}/normal {commands}`:
对range中所有符合pttern的行,执行Normal模式下的命令commands
例如:`:% global/TODO/normal @x` 即对所有TODO行执行寄存器x录制的宏.

## 替换命令
`:[range]s/{pattern}/{string}/[flags]`
讲pattern替换为string
flags:
- `g`: 替换每一行的所有匹配
- `i`: 忽视大小写
- `c`: 替换前确认
- `n`: 计数而不是替换

# Visual模式
- Normal模式下按`v`进入visual 模式
- 用移动命令选择文本
- `x/y`: 剪切/复制文本,回到Normal模式下`p`粘贴
- Normal模式下按`V`进入visual line 模式,一次选中一行
- `<Esc>`: 回到Normal模式


# 寄存器与宏
## 寄存器
一个字符对应一个寄存器
特殊的寄存器:
- `"`: 默认寄存器
- `%`: 当前文件名
- `.`: 上一次插入的内容
- `:`: 上一次执行的命令
- `+`: 系统剪切板
- 通过`:reg {register}`查看
指定寄存器:
在复制/删除/粘贴等操作前加上 `"{register}`可以指定寄存器
如`"+p`复制系统剪切板的内容.
想要持久保存的文本放入指定的寄存器,避免被覆盖.
寄存器字符大写:添加到原来内容的后面而非覆盖

## 宏
录制一系列键盘操作,并允许重放这些操作.
操作系列存储在指定的寄存器中
- `q{register}`: 开始录制宏,并存放在指定寄存器中
- 录制过程中,按`q`退出录制
- `@{register}`: 重放寄存器中的操作
- `@@`: 重放上一次宏操作
