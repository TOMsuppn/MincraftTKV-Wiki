---
description: 关于 /mstats 命令，战局统计查看功能的信息
layout:
  width: default
  title:
    visible: true
  description:
    visible: true
  tableOfContents:
    visible: true
  outline:
    visible: true
  pagination:
    visible: true
  metadata:
    visible: true
  tags:
    visible: true
tags:
  - wan-jia-ming-ling
---

# Mstats（战绩查询）

### `/mstats [玩家|UUID]`

#### 命令格式：

```
/mstats
/mstats <玩家|UUID>
```

#### 执行对象：

* 仅**玩家**

#### 权限：

* **minecrafttkv.stats.use**

#### 用途：

* 查看自己的战局统计
* 查看指定玩家的战局统计

#### 功能说明：

* 不填写目标时，默认查看自己的统计信息
* 填写玩家名或 UUID 时，尝试打开目标玩家的统计书
* 统计信息通常由统计系统动态生成
* 命令会依赖统计系统是否已启用、是否允许打开统计命令

#### 常见示例：

```
/mstats
/mstats TOMsuppn
```

#### 注意事项：

* **仅玩家**可以执行
* 如果统计系统未启用，命令会直接失败
* 如果当前命令功能被配置关闭，也无法使用
* 如果玩家没有统计数据，系统可能提示暂无统计数据

***
