---
description: 关于 /market task 命令，任务面板入口功能的信息
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

# Market Task（任务入口）

### `/market task`

#### 命令格式：

```
/market task
```

#### 执行对象：

* 仅**玩家**

#### 权限：

* **minecrafttkv.market.use**

#### 用途：

* 从市场入口直接打开任务 GUI
* 方便玩家在市场体系内进入任务系统

#### 功能说明：

* 该命令会调用任务系统的打开任务界面逻辑
* 如果任务系统未初始化，会直接提示无法使用
* 这是 `/market` 体系中的任务快捷入口

#### 常见示例：

```
/market task
```

#### 注意事项：

* **仅玩家**可以执行
* 当前版本中，任务系统只能在**藏身处内**操作
* 如果玩家不在藏身处，即使从市场入口进入，也会被任务系统拦截

***
