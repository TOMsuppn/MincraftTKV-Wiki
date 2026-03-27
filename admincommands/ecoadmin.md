---
description: 关于 /mtkv ecoadmin 命令，经济系统管理功能的信息
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
  - guan-li-ming-ling
---

# EcoAdmin（经济管理）

### `/mtkv ecoadmin ...`

#### 命令格式：

```
/mtkv ecoadmin get <玩家|UUID>
/mtkv ecoadmin set <玩家|UUID> <金额>
/mtkv ecoadmin give <玩家|UUID> <金额>
/mtkv ecoadmin take <玩家|UUID> <金额>
/mtkv ecoadmin reset <玩家|UUID>
/mtkv ecoadmin freeze <玩家|UUID> [原因]
/mtkv ecoadmin unfreeze <玩家|UUID>
/mtkv ecoadmin reload
```

#### 执行对象：

* **玩家**
* **控制台**

#### 权限：

* 入口权限：**minecrafttkv.ecoadmin.use**
* 查询余额：**minecrafttkv.ecoadmin.get**
* 设置余额：**minecrafttkv.ecoadmin.set**
* 增加余额：**minecrafttkv.ecoadmin.give**
* 扣除余额：**minecrafttkv.ecoadmin.take**
* 重置余额：**minecrafttkv.ecoadmin.reset**
* 冻结/解冻：**minecrafttkv.ecoadmin.freeze**
* 重载配置：**minecrafttkv.ecoadmin.reload**

#### 用途：

* 管理玩家钱包数据
* 人工修正余额异常
* 冻结可疑账户
* 重载经济系统配置

#### 功能说明：

* `get`：查询指定玩家当前余额和账户状态
* `set`：直接将目标余额设置为指定金额
* `give`：给目标增加余额
* `take`：从目标扣除余额
* `reset`：将目标余额重置为默认状态
* `freeze`：冻结账户，可附带原因
* `unfreeze`：解冻账户
* `reload`：重载经济相关配置

#### 常见示例：

```
/mtkv ecoadmin get TOMsuppn
/mtkv ecoadmin set TOMsuppn 5000.00
/mtkv ecoadmin give TOMsuppn 1000.00
/mtkv ecoadmin take TOMsuppn 300.00
/mtkv ecoadmin reset TOMsuppn
/mtkv ecoadmin freeze TOMsuppn 异常交易
/mtkv ecoadmin unfreeze TOMsuppn
/mtkv ecoadmin reload
```

#### 注意事项：

* `set` 可以直接修改余额，风险高，建议谨慎使用
* `freeze` 和 `unfreeze` 共用同一个细分权限
* 金额参数必须符合经济系统允许的数字格式
* 如果目标玩家不存在，系统会提示找不到玩家或 UUID

***
