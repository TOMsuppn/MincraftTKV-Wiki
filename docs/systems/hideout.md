---
title: "🏠 藏身处"
description: "关于藏身处的一切"
tags:
  - xi-tong-xin-xi
---

# 🏠 藏身处配置（hideout.yml）

## 当前版本（Beta.1）藏身处设施一览

**仓库（warehouse）、栖息处（roost）、烟熏炉（smoker）**

## 玩家起始物品（starter-kit）

起始 kit 会在玩家**首次成功创建藏身处**时直接写入其仓库，不会放到玩家背包。仓库数据会先以原子方式保存，成功后才创建藏身处世界；该数据文件同时作为一次性标记：普通重登、插件重启、配置重载，以及处罚系统清空仓库后都不会再次发放。

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

这是插件默认起始装备：Glock-17、30 发 9mm 弹药、3 个黑面包、罗盘和 3 个火把。

- `enabled`：是否为之后新创建藏身处的玩家发放。设为 `false` 时不会发放；之后重新开启也不会给已创建藏身处的玩家补发。
- `items`：按从上到下的顺序处理。`amount` 必须大于 0。
- `id`：通用物品 ID。可直接填写物品库（Itemlab）ID，例如 `BREAD`、`Torch`；也支持 `weapon:<枪械ID>`（或 `gun:`）、`ammo:<弹药ID>`、`misc:<杂项ID>`。若没有同名 Itemlab 模板，也可填写原版 `Material`，如 `TORCH` 或 `minecraft:bread`。
- `itemlab`：`id` 的等价别名，适合只配置物品库物品，例如 `- itemlab: MyModItem`。

### Mod / 混合端物品

不要在 kit 中把 Mod 物品强制转换成原版 `Material`。先在 [物品库配置](../config/items) 为该物品建立 Itemlab 模板：可使用 `namespaced-id`，或在游戏内手持该物品执行 `/mtkv get itemlab import <itemlabId> <category> [amount]` 保存 `serialized-item`。随后把对应 Itemlab ID 写入 `starter-kit.items`。发放时插件克隆该 ItemStack 而不重新按原版材质构造，因此会沿用 Bukkit 可序列化的 NBT、PDC 与组件数据；混合端 Mod 特有 Capability 的跨重启保留能力仍以目标服务端的 ItemStack 序列化支持为准。若混合端无法暴露该 Mod 物品的堆叠上限，请在其 Itemlab 配置中显式填写 `max-stack-size`。

### 容量与截断规则

kit 按 **LV.0 仓库** 的实际格数校验。每个配置项会按照该物品的逻辑最大堆叠数拆成仓库格：Itemlab 的 `max-stack-size`、武器弹药的 `max-stack` 和 Mod 物品的原生堆叠上限都会参与计算；例如某个自定义或 Mod 物品最大堆叠为 1，`amount: 3` 就占 3 格。

如果所需格数超过 LV.0 仓库容量，控制台会输出 `[Hideout] starter-kit 超出 LV.0 仓库容量` 错误，并严格按配置顺序只保留前 `n` 个可放入的物品堆叠，后续物品会被移除。不会挤占背包，也不会覆盖已有仓库物品。未知的物品 ID 会输出警告并跳过。

修改 `hideout.yml` 后执行 `/mtkv config reload`；新配置仅影响尚未创建藏身处的新玩家。

## 配置结构示例

### 仓库（warehouse）

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

- **`"0"`**：代表升级项目等级，如 `"0"`、`"1"` 等。
- **`slots`**：该等级对应的仓库格子数量。
- **`coins`**：由当前等级升级至下一等级所需的金币。
- **`materials`**：升级所需材料；`itemlab` 对应 [物品库配置](../config/items) 中的物品 ID。
- **`amount`**：所需材料数量。

### 栖息处（roost）

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

- **`interval-seconds`**：生命恢复间隔。
- **`restore-amount`**：每次生命恢复数量。
- **`upgrade`**：升级所需金币和材料，字段含义与仓库相同。

### 烟熏炉（smoker）与合成配方

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

- **`id`**：配方辨识 ID。
- **`name`**：合成项名称。
- **`required-level`**：合成所需等级限制。
- **`ingredients`**：合成原料。
- **`result`**：合成结果。

## 常见问题

如果经过包含藏身处的版本更新后，已有藏身处没有变化，通常是因为玩家的藏身处数据不会自动重置。删除服务器根目录下的 **HideOuts** 文件夹和插件配置目录下的 **hideout_temp** 文件夹可以重新生成数据。

> 注意：此操作会导致玩家存储在藏身处的物品消失，请先做好数据备份。
