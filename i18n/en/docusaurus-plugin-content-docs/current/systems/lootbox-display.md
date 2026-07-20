---
title: "📦 Loot Box Display Layer"
description: "Configure loot box world displays, interaction prompts, and per-location overrides"
tags:
  - xi-tong-xin-xi
---

# 📦 Loot Box Display Layer

Loot inventory, refreshes, and search status continue to be stored by the LootBox system; display entities are responsible only for visuals and interaction prompts. Deleting `BlockDisplay`, `ItemDisplay`, or hologram entities does not delete inventory. They are rebuilt at runtime when chunks load or during low-frequency health checks.

Click “World Display and Interaction” in the loot box editor to configure template defaults. When an administrator sneaks and breaks a placed loot box, the override editor for that location opens; overrides affect only that coordinate. When non-vanilla display types are placed, they do not place blocking blocks and are registered as independent interaction points instead.

Example configuration in `data/loot/templates.yml`:

```yml
templates:
  medical-crate:
    name: Medical Crate
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
        lines: ["§aMedical Crate", "§7Right-click to loot"]
      sounds:
        opening: BLOCK_CHEST_OPEN
        looted: BLOCK_CHEST_CLOSE
      particle:
        type: VILLAGER_HAPPY
        count: 4
```

Optional display types: `VANILLA_BLOCK`, `BLOCK_DISPLAY`, `ITEM_DISPLAY`, `RESOURCE_PACK_MODEL`, `THIRD_PARTY_MODEL`, and `INVISIBLE`. `ITEM_DISPLAY` and `RESOURCE_PACK_MODEL` support `itemlab-id`, `material`, and `custom-model-data`.

Third-party models are registered through `LootBoxModelProvider`. If a provider is unavailable or creation fails, the system falls back according to the configured `fallback`; when unspecified, it falls back in order to native ItemDisplay, BlockDisplay, and a vanilla block, while keeping the logical interaction point available as a final fallback.

Location overrides are stored under coordinate nodes in `data/loot/placed.yml`, for example:

```yml
placed:
  MTKV/maps/example:
    10,65,-30:
      template: medical-crate
      display:
        offset: { x: 0.0, y: 0.2, z: 0.0 }
        scale: 1.25
```
