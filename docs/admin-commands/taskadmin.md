---
title: "📋 TaskAdmin（任务命令）"
description: "关于 /mtkv taskadmin 命令，任务与商人系统管理功能的信息"
tags:
  - guan-li-ming-ling
---

# 📋 TaskAdmin（任务命令）

### `/mtkv taskadmin ...`

#### 命令格式：

```
/mtkv taskadmin reload
/mtkv taskadmin reset player <玩家|UUID> <all|tasks|rep>
/mtkv taskadmin reset all <all|tasks|rep>
/mtkv taskadmin rep <玩家|UUID> <traderId> <delta>
/mtkv taskadmin grantitem <玩家|UUID> <itemlabId> <数量>
```

#### 执行对象：

* **玩家**
* **控制台**

#### 权限：

* 入口权限：**minecrafttkv.taskadmin.use**
* 重载配置：**minecrafttkv.taskadmin.reload**
* 重置单人：**minecrafttkv.taskadmin.reset.player**
* 全服重置：**minecrafttkv.taskadmin.reset.all**
* 调整好感度：**minecrafttkv.taskadmin.rep**
* 发放物品：**minecrafttkv.taskadmin.grantitem**

#### 用途：

* 管理任务系统
* 管理商人好感度
* 管理任务相关物品发放

#### 功能说明：

* `reload`：重载任务和商人配置
* `reset player <玩家> <all|tasks|rep>`：重置指定玩家任务或好感度
* `reset all <all|tasks|rep>`：全服重置任务或好感度
* `rep <玩家> <traderId> <delta>`：调整目标玩家某个商人的好感度
* `grantitem <玩家> <itemlabId> <数量>`：发放 Itemlab 中的物品模板

#### 常见示例：

```
/mtkv taskadmin reload
/mtkv taskadmin reset player TOMsuppn all
/mtkv taskadmin reset player TOMsuppn tasks
/mtkv taskadmin reset all rep
/mtkv taskadmin rep TOMsuppn broker 0.01
/mtkv taskadmin rep TOMsuppn broker -0.05
/mtkv taskadmin grantitem TOMsuppn akm 1
```

#### 注意事项：

* `reset` 中的作用域只允许填写 `all`、`tasks`、`rep`
* `grantitem` 需要目标玩家在线，否则无法直接发放
* `grantitem` 依赖 Itemlab 中存在对应 `itemlabId`
* `rep` 中的 `delta` 支持两位小数，可正可负，例如 `0.01`、`-0.05`
* 商人好感度范围为 `0.00` 到 `6.00`

***
