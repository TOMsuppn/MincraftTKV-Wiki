---
title: "🏠 藏身处"
description: "关于藏身处的一切"
tags:
  - xi-tong-xin-xi
---

# 🏠 藏身处

## 简介

MinecraftTKV 中的藏身处是每个玩家**独立存在**的（独立存档），不同玩家间的藏身处**完全不互通**。

玩家的藏身处文件储存在 根目录/HideOuts 文件夹下，

藏身处文件命名规则：**玩家ID**\_**玩家UUID**

> 例如：**Player\_1** \_ **914e9094-dd43-376a-a052-b63bf94389aa**

## 常见问题

<details>

<summary>经过包含藏身处的版本更新，但我的藏身处没有变化？</summary>

这是因为您的藏身处文件还未更新，删除服务器根目录下的 **HideOuts** 文件夹和插件配置目录下的 **hideout\_temp** 文件夹。

**注意：此操作会导致玩家存储在藏身处的物品消失，请注意数据备份！**

</details>

## Beta.1 藏身处配置

当前版本设施包括仓库（`warehouse`）、栖息处（`roost`）和烟熏炉（`smoker`）。升级项目以 `"0"`、`"1"` 等等级键表示，`coins` 为金币需求，`materials` 为物品库材料需求。

### 仓库

```yml
"0":
  slots: 50
  upgrade:
    coins: 500
    materials:
      - itemlab: Planks
        amount: 8
      - itemlab: COBBLESTONE
        amount: 16
```

`slots` 为该等级的仓库格子数。`itemlab` 对应 [物品库配置](../config/items) 中的物品 ID。

### 栖息处

```yml
"0":
  interval-seconds: 10
  restore-amount: 0.5
  upgrade:
    coins: 300
    materials:
      - itemlab: Planks
        amount: 5
      - itemlab: COBBLESTONE
        amount: 10
```

`interval-seconds` 为生命恢复间隔，`restore-amount` 为每次恢复数量。

### 烟熏炉与合成配方

```yml
"0":
  upgrade:
    coins: 250
    materials:
      - itemlab: COBBLESTONE
        amount: 8
      - itemlab: Planks
        amount: 4

recipes:
  - id: cookie_pack
    name: "饼干补给"
    required-level: 0
    ingredients:
      - itemlab: Planks
        amount: 1
      - itemlab: COBBLESTONE
        amount: 1
    result:
      itemlab: COOKIE
      amount: 2
```

配方中的 `id` 为辨识 ID，`name` 为合成项名称，`required-level` 为等级限制，`ingredients` 为原料，`result` 为合成结果。
