---
description: 关于 /market browse 命令，市场浏览功能的信息
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

# Market Browse（浏览挂单）

### `/market browse [页]`

#### 命令格式：

```
/market browse
/market browse <页码>
/market list
/market list <页码>
```

#### 执行对象：

* 仅**玩家**

#### 权限：

* **minecrafttkv.market.use**

#### 用途：

* 浏览当前市场中正在出售的挂单
* 按页查看不同的市场物品

#### 功能说明：

* `/market list` 是 `/market browse` 的别名
* 不填写页码时默认打开第一页
* 填写页码时会跳转到对应页面
* 市场浏览页通常用于查看商品、翻页和进一步购买确认

#### 常见示例：

```
/market browse
/market browse 2
/market list 3
```

#### 注意事项：

* **仅玩家**可以执行
* 当前版本中，浏览市场也必须在**藏身处内**
* 如果市场被管理员关闭，命令会直接提示市场当前已关闭

***
