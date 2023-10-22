# 手办Wiki

插件仓库地址：[koishi-plugin-hpoi](https://github.com/KIRA2ZERO/koishi-plugin-hpoi)

作者GitHub个人页：[KIRA2ZERO](https://github.com/KIRA2ZERO)

```
<!-- 指令 -->
    hpoi <order> <category> 返回hpoi维基的索引结果(默认前10条)
可用的选项有：
    -r, --r18 <r18>  设定r18阈值(不限、全年龄、低于轻微露出、轻微露出、一般露出),默认值:不限
    -n, --number <number>  设定索引个数,默认值:10
    -k, --keyword <keyword>  设定索引关键词
可用的子指令有：
    hpoi.clear  
    hpoi.update
<!-- 功能 -->
    手办维基索引

使用教程 https://github.com/KIRA2ZERO/koishi-plugin-hpoi
```

**使用示例**
```
    hpoi 一天热度 手办 -r 全年龄 -n 36 -k miku
```