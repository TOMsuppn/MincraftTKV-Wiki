---
title: "🏠 Hideout"
description: "Everything about the hideout"
tags:
  - xi-tong-xin-xi
---

# 🏠 Hideout Configuration (`hideout.yml`)

## Hideout Facilities in the Current Version (Beta.1)

**Warehouse (`warehouse`), Roost (`roost`), Smoker (`smoker`)**

## Player Starting Items (`starter-kit`)

The starter kit is written directly to the player's warehouse when they **first successfully create a hideout**; it is not placed in the player's inventory. Warehouse data is saved atomically before the hideout world is created. This data file also serves as a one-time marker: it will not be granted again after normal rejoining, plugin restarts, configuration reloads, or when the punishment system clears the warehouse.

```yaml
starter-kit:
  enabled: true
  items:
    - id: weapon:glock
      amount: 1
    - id: ammo:9mm
      amount: 30
    - id: BREAD
      amount: 3
    - id: COMPASS
      amount: 1
    - id: TORCH
      amount: 3
```

This is the plugin's default starter equipment: a Glock-17, 30 rounds of 9mm ammunition, 3 black breads, a compass, and 3 torches.

- `enabled`: Whether to grant it to players who create hideouts from this point onward. When set to `false`, it is not granted; enabling it later will not retroactively grant it to players who have already created a hideout.
- `items`: Processed in top-to-bottom order. `amount` must be greater than 0.
- `id`: A general item ID. You can directly specify an Itemlab item ID, such as `BREAD` or `Torch`; `weapon:<weaponId>` (or `gun:`), `ammo:<ammoId>`, and `misc:<miscId>` are also supported. If no Itemlab template with the same name exists, you can use a vanilla `Material`, such as `TORCH` or `minecraft:bread`.
- `itemlab`: An equivalent alias for `id`, suitable when configuring only Itemlab items, for example `- itemlab: MyModItem`.

### Mod / Hybrid-Server Items

Do not forcibly convert Mod items to vanilla `Material` in the kit. First, create an Itemlab template for the item in [Item Library Configuration](../config/items): you can use `namespaced-id`, or hold the item in-game and run `/mtkv get itemlab import <itemlabId> <category> [amount]` to save `serialized-item`. Then enter the corresponding Itemlab ID in `starter-kit.items`. When granting the item, the plugin clones that ItemStack instead of reconstructing it from a vanilla material, preserving Bukkit-serializable NBT, PDC, and component data. The ability to preserve Mod-specific Capabilities across restarts on hybrid servers still depends on the target server's ItemStack serialization support. If the hybrid server cannot expose the Mod item's stack limit, explicitly set `max-stack-size` in its Itemlab configuration.

### Capacity and Truncation Rules

The kit is checked against the actual number of slots in the **LV.0 warehouse**. Each configuration entry is split into warehouse slots according to the item's logical maximum stack size: Itemlab's `max-stack-size`, weapon/ammo `max-stack`, and a Mod item's native stack limit are all considered. For example, if a custom or Mod item has a maximum stack size of 1, `amount: 3` occupies 3 slots.

If the required number of slots exceeds the LV.0 warehouse capacity, the console outputs the error `[Hideout] starter-kit exceeds LV.0 warehouse capacity`, and strictly retains only the first `n` item stacks that fit in configuration order; subsequent items are removed. It does not use inventory space or overwrite existing warehouse items. Unknown item IDs produce a warning and are skipped.

After changing `hideout.yml`, run `/mtkv config reload`; the new configuration affects only new players who have not yet created a hideout.

## Configuration Structure Examples

### Warehouse (`warehouse`)

```yaml
warehouse:
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

- **`"0"`**: Represents the upgrade level, such as `"0"` or `"1"`.
- **`slots`**: The number of warehouse slots at this level.
- **`coins`**: Coins required to upgrade from the current level to the next level.
- **`materials`**: Materials required for the upgrade; `itemlab` corresponds to the item ID in [Item Library Configuration](../config/items).
- **`amount`**: Quantity of required materials.

### Roost (`roost`)

```yaml
roost:
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

- **`interval-seconds`**: Health restoration interval.
- **`restore-amount`**: Amount of health restored each time.
- **`upgrade`**: Coins and materials required for the upgrade; field meanings are the same as for the warehouse.

### Smoker (`smoker`) and Crafting Recipes

```yaml
smoker:
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
      name: "Cookie Supply"
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

- **`id`**: Recipe identifier.
- **`name`**: Name of the crafted item.
- **`required-level`**: Required crafting level.
- **`ingredients`**: Crafting ingredients.
- **`result`**: Crafting result.

## Frequently Asked Questions

If an existing hideout does not change after an update that includes hideout changes, it is usually because player hideout data is not reset automatically. Delete the **HideOuts** folder in the server root directory and the **hideout_temp** folder in the plugin configuration directory to regenerate the data.

> Note: This will cause items stored in player hideouts to disappear. Back up your data first.
