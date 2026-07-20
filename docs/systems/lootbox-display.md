---
title: "📦 物资箱显示层"
description: "配置物资箱的世界显示、交互提示与点位覆盖"
tags:
  - xi-tong-xin-xi
---

# 📦 物资箱显示层

物资库存、刷新和搜索状态仍由 LootBox 系统保存；显示实体只负责画面与交互提示。删除 `BlockDisplay`、`ItemDisplay` 或全息实体不会删除库存，运行时会在区块加载或低频健康检查时重建。

在物资箱编辑器点击“世界显示与交互”可配置模板默认值。管理员潜行破坏一个已放置物资箱会打开该点位的覆盖编辑器；覆盖只影响这个坐标。非原版显示类型在放置时不会放下阻挡方块，而是注册为独立交互点。

`data/loot/templates.yml` 中的配置示例：

```yml
templates:
  medical-crate:
    name: 医疗箱
    type: MEDKIT
    display:
      type: RESOURCE_PACK_MODEL
      material: PAPER
      custom-model-data: 1201
      fallback: BLOCK_DISPLAY
      offset: { x: 0.0, y: 0.0, z: 0.0 }
      rotation: { yaw: 0.0, pitch: 0.0, roll: 0.0 }
      scale: 1.0
      states:
        LOOTED:
          custom-model-data: 1202
      interaction:
        width: 1.4
        height: 1.0
        depth: 1.4
        max-distance: 5.0
        require-line-of-sight: true
      hologram:
        enabled: true
        lines: ["§a医疗箱", "§7右键搜刮"]
      sounds:
        opening: BLOCK_CHEST_OPEN
        looted: BLOCK_CHEST_CLOSE
      particle:
        type: VILLAGER_HAPPY
        count: 4
```

可选显示类型：`VANILLA_BLOCK`、`BLOCK_DISPLAY`、`ITEM_DISPLAY`、`RESOURCE_PACK_MODEL`、`THIRD_PARTY_MODEL` 与 `INVISIBLE`。`ITEM_DISPLAY` 与 `RESOURCE_PACK_MODEL` 支持 `itemlab-id`、`material` 和 `custom-model-data`。

第三方模型通过 `LootBoxModelProvider` 注册。提供者不可用或创建失败时，系统按配置的 `fallback` 回退；未指定时会依次回退至原生 ItemDisplay、BlockDisplay、原版方块，最后保持逻辑交互点可用。

点位覆盖保存在 `data/loot/placed.yml` 的坐标节点下，例如：

```yml
placed:
  MTKV/maps/example:
    10,65,-30:
      template: medical-crate
      display:
        offset: { x: 0.0, y: 0.2, z: 0.0 }
        scale: 1.25
```
