---
description: 关于 /eco pay 命令，玩家转账功能的信息
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

# Eco Pay（玩家转账）

### `/eco pay <玩家|UUID> <金额>`

#### 命令格式：

```
/eco pay <玩家|UUID> <金额>
```

#### 执行对象：

* 仅**玩家**

#### 权限：

* **minecrafttkv.eco.pay**

#### 用途：

* 向其他玩家转账
* 在玩家之间流通经济货币

#### 功能说明：

* 目标可以填写玩家名，也可以填写 UUID
* 金额必须是大于 `0` 的数字
* 支持小数金额
* 转账成功后，付款方会看到自己的剩余余额
* 如果收款方在线，也会收到到账提示

#### 常见示例：

```
/eco pay TOMsuppn 100.00
/eco pay PlayerA 500
```

#### 注意事项：

* **仅玩家**可以执行
* 如果转账功能被关闭，则该命令无法使用
* 如果金额格式错误、余额不足、目标不存在或账户被冻结，都会导致转账失败

***
