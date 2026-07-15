---
title: "📦 物品库配置（items.yml）"
description: "items.yml 物品库配置说明"
---

# 📦 物品库配置（items.yml）

## 配置结构示例

```yml
Planks:
  material: PLAYER_HEAD
  display-name: "§f§l建筑木材"
  quality: "§f§l普通"
  category: material
  lore:
    - "§5§o建造监狱留下的废弃木材，"
    - "§5§o废品回收站会给你个好价格"
  head-texture-url: "http://textures.minecraft.net/texture/f9395389fed1a8ab1c52417e7a9b345e2d51ff068848087a00bdfdff96364acf"
  max-stack-size: 1
```

* `Planks`：物品内部 ID
* `material`：对应游戏内物品
* `display-name`：展示名称，可通过 `§` 控制颜色和样式
* `quality`：品质描述
* `category`：物品分类，可用 `supply`、`valuable`、`armament`、`material`、`keycard`
* `lore`：详细描述
* `head-texture-url`：当 `material` 为 `PLAYER_HEAD` 时使用的 Mojang 皮肤 URL
* `max-stack-size`：最大堆叠数
