---
description: 关于 /eco top 命令，财富排行榜功能的信息
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

# Eco Top（财富排行）

### `/eco top [页码]`

#### 命令格式：

```
/eco top
/eco top <页码>
```

#### 执行对象：

* 仅**玩家**

#### 权限：

* **minecrafttkv.eco.use**

#### 用途：

* 查看服务器财富排行榜
* 了解当前经济系统中的高余额玩家

#### 功能说明：

* 不填写页码时，默认查看第一页
* 排行榜会按钱包余额从高到低排序
* 如果账户被冻结，列表中会显示冻结标记
* 支持分页查看

#### 常见示例：

```
/eco top
/eco top 2
```

#### 注意事项：

* **仅玩家**可以执行
* 如果当前还没有钱包数据，系统会提示暂无排行榜内容
* 页码填写错误时，系统通常会自动修正到有效范围

***
