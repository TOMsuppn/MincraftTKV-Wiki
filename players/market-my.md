---
description: 关于 /market my 命令，我的挂单查看功能的信息
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

# Market My（我的挂单）

### `/market my [页]`

#### 命令格式：

```
/market my
/market my <页码>
```

#### 执行对象：

* 仅**玩家**

#### 权限：

* **minecrafttkv.market.use**

#### 用途：

* 查看自己当前的挂单
* 按页浏览个人挂单列表

#### 功能说明：

* 不填写页码时默认打开第一页
* 填写页码时会跳转到指定页面
* 可用于查看自己上架中的物品状态
* 通常会和取消挂单、取回物品等市场操作联动

#### 常见示例：

```
/market my
/market my 2
```

#### 注意事项：

* **仅玩家**可以执行
* 当前版本中，该命令必须在**藏身处内**
* 如果市场已关闭，系统会提示无法使用

***
