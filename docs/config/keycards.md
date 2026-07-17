---
title: "🪪 钥匙卡系统配置（keycards.yml）"
description: "keycards.yml 钥匙卡物品、掉落与门禁使用说明"
---

# 钥匙卡系统配置（keycards.yml）

钥匙卡配置文件位于插件数据目录的 `config/itemlab/keycards.yml`，用于定义钥匙卡物品样式、物品库模板以及各类钥匙卡掉落规则。旧版 `config/keycards.yml` 会在首次加载时自动迁移到新位置。

钥匙卡是带有 PersistentDataContainer 数据的唯一物品，不建议通过普通物品复制插件批量复制。系统会在背包操作、拾取和门禁使用时自动拆分钥匙卡堆，并为每张卡维护独立 ID。

修改后可使用 `/mtkv config reload` 重载钥匙卡配置。

## 配置结构示例：

````
keycards:
  item:
    material: PAPER
    display-name: "§b§l{type} 钥匙卡"
    custom-model-data: 0
    lore:
      - "§7类型: §b{type} §8/ §7剩余次数: §f{uses}"
      - "§7来源地图: §f{source-map}"
      - "§7来源类型: §f{source-type}"
  types:
    1: { name: "红卡" }
    2: { name: "黄卡" }
  source-display:
    lootbox: "普通物资箱"
    keyroom-lootbox: "钥匙房物资箱"
    ai-corpse: "AI/怪物尸体"
    boss: "Boss"
  itemlab:
    default-uses: 1
  drops:
    lootbox:
      enabled: true
      chance: 0.015
      tiers: { 1: 70, 2: 22, 3: 7, 4: 1, 5: 0 }
      uses: { 1: 75, 2: 20, 3: 5 }
````

## 物品样式（keycards.item）

**material**：钥匙卡使用的 Minecraft 材质，默认是 `PAPER`

**display-name**：钥匙卡显示名称。可用 `{tier}`（内部等级）和 `{type}`（自定义类型名称）；例如将 `types.1.name` 设置为“红卡”后，`{type}` 会显示为“红卡”。

**custom-model-data**：钥匙卡材质包模型数据值。设置为 `0` 表示不设置模型数据

**lore**：Lore 行列表，可自由调整。支持 `{tier}`、`{type}`、`{uses}`、`{source-map}`、`{source-type}`、`{acquired-at}` 和 `{id}` 占位符。

## 类型名称（keycards.types）

内部等级仍为 1 至 5，用于门禁判定；`types.<等级>.name` 只控制显示名称。因此可将 L1-L5 显示为“红卡”“黄卡”等而不影响现有门禁配置。

每张钥匙卡都会写入以下内部数据：

| 数据 | 作用 |
| --- | --- |
| `keycard` | 标识该物品为 MTKV 钥匙卡 |
| `keycard_tier` | 钥匙卡等级，范围为 L1-L5 |
| `keycard_uses` | 剩余使用次数 |
| `keycard_uid` | 每张卡的唯一 ID |
| `keycard_source_map` | 获取钥匙卡的地图 ID |
| `keycard_source_type` | 获取来源类型 |
| `keycard_acquired_at` | 获取时间戳 |

钥匙卡默认最大堆叠数量为 1。即使其他插件强行将钥匙卡堆叠，系统也会在后续操作中拆分为单张卡。

## 来源显示（keycards.source-display）

用于把内部来源 ID 转换为 Lore 中显示的中文名称。

**lootbox**：普通物资箱

**keyroom-lootbox**：钥匙房物资箱

**ai-corpse**：AI 或怪物尸体

**boss**：Boss 掉落

`itemlab` 仅用于兼容旧钥匙卡的来源显示。新从物品库直接领取的钥匙卡不会写入或显示来源追溯。

## 物品库设置（keycards.itemlab）

````
itemlab:
  default-uses: 1
````

**default-uses**：通过物品库生成钥匙卡时的默认使用次数。物品库会自动生成 `Keycard-L1` 至 `Keycard-L5` 五种模板。

钥匙卡在物品库中属于 `keycard` 分类，可通过 `/mtkv get itemlab` 打开物品库后获取，也可以在物品库导入功能中使用 `keycard` 分类。物品库还提供 `KeycardBag`（钥匙包）；主手右键可打开 27 格专用界面，只会保存钥匙卡，并保留其唯一 ID 与追溯数据。

## 掉落规则（keycards.drops）

每类来源的配置结构相同：

````
lootbox:
  enabled: true
  chance: 0.015
  tiers: { 1: 70, 2: 22, 3: 7, 4: 1, 5: 0 }
  uses: { 1: 75, 2: 20, 3: 5 }
````

**enabled**：是否启用该来源的钥匙卡配置

**chance**：钥匙卡掉落概率，取值范围为 `0.0` 至 `1.0`。例如 `0.015` 表示 1.5%

**tiers**：钥匙卡等级权重。键为等级，值为权重；权重不需要加起来等于 100，系统会按所有有效权重进行随机

**uses**：钥匙卡使用次数权重。键为次数，值为权重；系统最终会将次数限制在 1 至 99

### 各来源说明

| 来源节点 | 触发位置 | 说明 |
| --- | --- | --- |
| `lootbox` | 普通物资箱 | 仅在正在进行的战局中抽取 |
| `keyroom-lootbox` | 钥匙房物资箱 | 仅在正在进行的战局中抽取，概率可单独设置 |
| `ai-corpse` | AI/怪物死亡掉落 | 玩家死亡不会触发该来源 |
| `boss` | Boss 掉落 | Boss 使用独立的等级和次数权重 |

普通物资箱和钥匙房物资箱的钥匙卡会作为额外战利品加入物资箱。AI 尸体钥匙卡会加入实体死亡掉落。

Boss 的钥匙卡由 Boss 掉落流程直接生成，默认等级权重偏向 L2-L4；`boss.chance` 主要用于保留配置兼容，Boss 是否生成应通过 Boss 掉落逻辑控制。

## 等级与使用次数

钥匙卡等级范围为 L1 至 L5。门禁会读取玩家主手钥匙卡的等级，并与门禁配置中的 `requiredTier` 比较：

- 卡片等级大于或等于 `requiredTier` 时允许开门
- 卡片等级低于 `requiredTier` 时拒绝开门，不消耗次数
- 每次认证成功消耗 1 次使用次数
- 剩余次数变为 0 时钥匙卡销毁，并播放物品损坏音效
- 没有次数的异常钥匙卡也会在使用时被清理

门禁的 `requiredTier` 会被限制在 1 至 5，通常在地图的钥匙房/门禁组配置中设置。

## 钥匙卡 Lore

系统会自动写入以下信息：

````
分类: 钥匙卡
类型: 红卡 / 剩余次数: 2
来源地图: map_id
来源类型: 普通物资箱
获取时间: 2026-01-01 12:00
ID: 8 位唯一 ID 前缀
````

来源地图、来源类型和获取时间来自钥匙卡生成时的战局信息。从 ItemLab 直接领取的卡默认不显示任何来源追溯行；当该模板在物资箱、钥匙房物资箱等容器中刷出时，系统会自动改写为对应容器来源。无法确定战局地图时，来源地图显示为 `unknown`。

## 获取与使用流程

1. 在物资箱、钥匙房物资箱、AI 尸体或 Boss 掉落中获得钥匙卡。
2. 也可以从物品库获取 `Keycard-L1` 至 `Keycard-L5`。
3. 将钥匙卡放在主手，点击钥匙房读卡器或门禁。
4. 系统检查钥匙卡等级和剩余次数。
5. 认证成功后扣除 1 次使用次数，并打开对应门禁组。

钥匙卡只检查主手物品，放在副手或背包中不会被门禁直接使用。

## 相关命令

````
/mtkv get itemlab
/mtkv config reload
````

**`/mtkv get itemlab`**：打开物品库，可以按 `keycard` 分类获取钥匙卡模板

**`/mtkv config reload`**：重载 `keycards.yml` 等插件配置

当前没有单独的 `/mtkv keycard` 命令；管理员测试钥匙卡时应使用物品库或配置对应的掉落来源。

## 常见问题

1. 物资箱没有钥匙卡：确认对应来源的 `enabled` 为 `true`，并确认当前处于运行中的战局。
2. 钥匙卡等级不正确：检查 `tiers` 权重是否有效；所有权重为 0 或格式错误时会使用默认等级。
3. 钥匙卡无法开门：确认钥匙卡在主手，并检查门禁组的 `requiredTier`。
4. 钥匙卡被拆成多张：这是正常行为，每张卡都有独立 UID，避免不同使用次数的钥匙卡被错误合并。
5. 修改概率后没有生效：执行 `/mtkv config reload`，并检查控制台是否有配置文件读取错误。
