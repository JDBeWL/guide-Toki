# 猜数字小游戏

插件仓库地址：[koishi-plugin-guess-number](https://github.com/koishijs/koishi-plugin-guess-number)

作者GitHub个人页：[Shigma](https://github.com/Shigma)

```
<!-- 指令 -->
    guess-number [...number]
    猜数字
<!-- 功能 -->
    输入要猜测的数字，将得到一个形如 xAyB 的匹配结果：
    x 为本次猜测的四位数字中，答案包含的且所处位置正确的数字个数；
    y 为本次猜测的四位数字中，答案包含的但所处位置不正确的数字个数。
    例如：生成的数字为 0637，猜测 2730，则返回 1A2B。
    这是因为 3 在答案中包含且位置正确，7 和 0 在答案中包含但位置不正确。
    可用的选项有：
        -b, --base <base>  设置进制数
        -l, --length <length>  设置答案长度
        -c, --chances <count>  设置猜测次数
        -q, --quit  退出游戏
```

**使用示例**
```
    guess-number
    guess-number 1234
```