---
title: "🛠️ MarketAdmin（市场/任务管理）"
description: "关于 /mtkv marketadmin 命令，跳蚤市场管理功能的信息"
tags:
  - guan-li-ming-ling
---

# 🛠️ MarketAdmin（市场/任务管理）

### `/mtkv marketadmin ...`

#### 命令格式：

```
/mtkv marketadmin
/mtkv marketadmin reload
/mtkv marketadmin toggle <on|off>
/mtkv marketadmin list [页码]
/mtkv marketadmin remove <listingId>
/mtkv marketadmin sweep
/mtkv marketadmin stats
```

#### 执行对象：

* **玩家**
* **控制台**

#### 权限：

* 入口权限：**minecrafttkv.market.admin.use**
* 聚合权限：**minecrafttkv.market.admin.\***
* 重载配置：**minecrafttkv.market.admin.reload**
* 开关市场：**minecrafttkv.market.admin.toggle**
* 强制下架：**minecrafttkv.market.admin.remove**
* 过期清理：**minecrafttkv.market.admin.sweep**
* 查看统计：**minecrafttkv.market.admin.stats**

#### 用途：

* 管理跳蚤市场系统
* 开关市场服务
* 查看挂单列表和市场统计
* 清理异常挂单或过期挂单

#### 功能说明：

* 不带参数时，如果执行者是玩家，通常会打开市场管理菜单
* `reload`：重载市场配置，并推动被动刷新
* `toggle <on|off>`：手动开启或关闭市场
* `list [页码]`：查看当前所有挂单
* `remove <listingId>`：强制下架指定挂单
* `sweep`：立即清理已过期挂单
* `stats`：查看市场当前统计信息

#### 常见示例：

```
/mtkv marketadmin
/mtkv marketadmin reload
/mtkv marketadmin toggle off
/mtkv marketadmin toggle on
/mtkv marketadmin list 1
/mtkv marketadmin remove 550e8400-e29b-41d4-a716-446655440000
/mtkv marketadmin sweep
/mtkv marketadmin stats
```

#### 注意事项：

* `remove` 需要填写合法的 `listingId`
* `toggle off` 会直接影响玩家市场使用
* `sweep` 适合用于手动立即清理过期数据
* 即使玩家侧市场限制在藏身处内，管理员命令本身不依赖藏身处位置

***
