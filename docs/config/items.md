---
title: "📦 物品库配置（items.yml）"
description: "items.yml 物品库配置说明"
---

# 📦 物品库配置（items.yml）

`items.yml` 位于 `config/itemlab/items.yml`，所有物品必须放在顶层 `items:` 节点下。修改后执行 `/mtkv config reload` 重载。

## 基本结构

```yaml
items:
  Planks:
    material: PLAYER_HEAD
    display-name: "§f§l建筑木材"
    quality: "§f§l普通"
    category: material
    lore:
      - "§5§o建造监狱留下的废弃木材，"
      - "§5§o废品回收站会给你个好价格"
    head-texture-url: "http://textures.minecraft.net/texture/f9395389fed1a8ab1c52417e7a9b345e2d51ff068848087a00bdfdff96364acf"
    amount: 1
    max-stack-size: 1
```

- `Planks`：Itemlab 内部 ID。ID 不区分大小写，不要配置仅大小写不同的重复 ID。
- `material`：原版 Bukkit `Material`，例如 `BOOK`、`DIAMOND`、`PLAYER_HEAD`。
- `display-name`：展示名称，可使用 `§` 颜色码。
- `quality`：质量文字，会加入物品 Lore。
- `category`：物品库分类，可用 `supply`、`valuable`、`armament`、`material`、`keycard`。导入时会同步到 Excel；实际交易权限以 Excel“物品价格”中的分类为准。
- `lore`：详细描述列表。
- `head-texture-url`：当 `material: PLAYER_HEAD` 时使用的 Mojang 皮肤纹理 URL。
- `custom-model-data`：可选，用于资源包物品外观。
- `amount`：每次根据该模板创建的物品数量，范围 `1–64`；例如 `amount: 16` 表示一份模板是 16 个物品。
- `max-stack-size`：单个物品栈的最大堆叠容量，与 `amount` 不是同一含义。

## Mod 和复杂物品

对于只需按注册名创建的混合端 Mod 物品，可使用 `namespaced-id`：

```yaml
items:
  MyModIngot:
    namespaced-id: "examplemod:my_ingot"
    display-name: "§bMod 金属锭"
    category: material
    amount: 1
```

`material: "examplemod:my_ingot"` 也可作为简写。注册名必须包含命名空间，并且该物品已在当前服务端注册。

带 NBT、PDC、耐久、附魔或 Mod 组件数据的复杂物品，建议直接导入为 `serialized-item`。将原物品拿在主手后执行：

```text
/mtkv get itemlab import <ItemlabID> <分类> [数量]
```

例如：

```text
/mtkv get itemlab import ThermalBattery material 8
```

导入数量默认为主手物品数量，可填写 `1–64`。命令会原子写入 `serialized-item`、重载物品库并尝试同步 `trader-prices.xlsx`；同 ID 导入会更新现有模板。如果序列化后无法重建物品，导入会失败并恢复之前的配置。

不建议手工编写 `serialized-item` 内部字段；该结构由 Bukkit/混合端生成，不同版本可能不同。

## 与商人 Excel 联动

`trader-prices.xlsx` 的物品 ID 可以写原始 Itemlab ID（如 `ThermalBattery`），也可显式写成 `itemlab:ThermalBattery`。对 Mod 物品建议使用显式前缀，便于与武器系统 ID 区分。

如果物品在 Excel 中显示但无法交易，依次检查：

1. `items.yml` 是否存在顶层 `items:`。
2. 去掉可选的 `itemlab:` 前缀后，Itemlab ID 是否能按不区分大小写的方式对应，且没有仅大小写不同的重复项。
3. Mod 物品是否能通过 `namespaced-id` 创建，或已用导入命令生成 `serialized-item`。
4. Excel C 列分类是否合法，对应商人是否开启该分类；导入命令会自动同步名称和分类，交易判定以 Excel 为准。
5. 执行 `/mtkv config validate`，再执行 `/mtkv config reload`。
