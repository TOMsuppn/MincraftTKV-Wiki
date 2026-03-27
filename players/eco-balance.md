---
description: 关于 /eco balance 命令，余额查询功能的信息
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

# Eco Balance（余额查询）

### `/eco balance [玩家|UUID]`

#### 命令格式：

```
/eco balance
/eco balance <玩家|UUID>
/eco bal
/eco bal <玩家|UUID>
```

#### 执行对象：

* 仅**玩家**

#### 权限：

* 查询自己余额需要 **minecrafttkv.eco.use**
* 查询他人余额需要 **minecrafttkv.eco.balance.others**

#### 用途：

* 查看自己的钱包余额
* 有权限时查看其他玩家的钱包余额

#### 功能说明：

* 不填写目标时，默认查询自己的余额
* 填写玩家名或 UUID 时，会尝试查询对应账户
* 如果账户处于冻结状态，结果中会显示冻结标记
* `bal` 是 `balance` 的简写别名

#### 常见示例：

```
/eco balance
/eco balance TOMsuppn
/eco bal TOMsuppn
```

#### 注意事项：

* **仅玩家**可以执行
* 查询他人余额必须拥有额外权限
* 如果目标玩家不存在，系统会提示找不到玩家或 UUID

***
