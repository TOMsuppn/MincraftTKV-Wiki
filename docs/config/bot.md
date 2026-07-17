---
title: "🤖 Bot 配置文件（config/bot）"
description: "SA、COB Bot 类型、行为、装备、掉落与调试配置说明"
---

# Bot配置文件（config/bot）

Bot配置文件位于插件数据目录的 `config/bot/` 文件夹中，用于配置武装部队（SA）和游荡者（COB）的属性、行为、装备、掉落及调试参数。

## 配置文件一览

| 文件 | 作用 |
| --- | --- |
| `bot-types.yml` | 定义 Bot 类型，以及各类型引用的属性、装备、掉落表和皮肤池 |
| `attributes.yml` | 定义可重复使用的属性档案 |
| `loadouts.yml` | 定义 SA 装备模板 |
| `cob-loadouts.yml` | 定义 COB 独立装备模板 |
| `loot.yml` | 定义 SA 死亡掉落表 |
| `cob.yml` | 定义 COB 的名称、皮肤、掉落和兼容类型 |
| `skins.yml` | 定义 SA Bot 的皮肤池 |
| `pathing.yml` | 定义寻路和地形通行参数 |
| `combat.yml` | 定义基础攻击、目标记忆和枪械战斗参数 |
| `tactical.yml` | 定义战术 Bot 的目标、交战、搜刮和撤离行为 |
| `difficulty.yml` | 定义动态难度倍率 |
| `debug.yml` | 定义 Bot 调试命令和日志开关 |

配置之间通过 ID 互相引用，引用不存在时会使用默认值或无法加载对应功能。修改后可使用 `/mtkv config reload` 重载配置。

## Bot AI v2 开关（config/core.yml）

新版 Bot 引擎的灰度开关位于 `config/core.yml`，不在 `config/bot/` 目录内：

```yaml
mtkv.ai.engine-v2: true
mtkv.ai.motion-v2: true
mtkv.ai.async-pathing: false
mtkv.ai.viewer-sync-v2: true
```

### 混合端 COB 运动模型开关

```yaml
# COB 在不同服务端核心上的运动模型
mtkv.compat.hybrid-policy.cob-motion-mode: auto
```

**`mtkv.ai.engine-v2`**：启用 SA/COB 共用的错峰调度器、生命周期管理和分层状态机。

**`mtkv.ai.motion-v2`**：启用每个 server tick 运行的 SA 运动控制器。行为逻辑只提交移动意图，由运动控制器统一处理重力、地形碰撞和击退。

**`mtkv.ai.async-pathing`**：启用快照异步寻路。默认关闭；只有服务器启动时的能力自检通过后才建议开启。

**`mtkv.ai.viewer-sync-v2`**：启用观察者范围差异同步、相对移动和脏数据包合并。

四个开关可以独立回退。`async-workers` 会在插件启动时创建线程池，因此修改该项后必须重启服务器；其他配置可先执行 `/mtkv config reload`，生产服仍建议在波次结束后重载。

### 混合端 COB 运动模型

`mtkv.compat.hybrid-policy.cob-motion-mode` 控制 COB 的模型和运动权威：

- `auto`（默认）：Arclight、Mohist 等混合端使用 `kinematic-single`；Paper、Spigot 使用 `native-mirror`。
- `kinematic-single`：只生成 packet-only PlayerNPC 和不可碰撞的 ArmorStand 命中代理，不生成隐藏 Pillager/Vindicator，也不把 NMS Player 注册到 `ServerLevel`。移动、方块碰撞、重力、寻路和击退全部由插件运动控制器处理，玩家靠近或穿过 COB 时不会被实体碰撞推开。
- `native-mirror`：保留隐藏 Mob 的原生寻路，并把最终位置镜像给 PlayerNPC，主要用于 Paper/Spigot 或兼容性排障。

插件启动和生成时会检查 PlayerInfo、metadata、装备、观察者同步、伤害入口以及命中代理。单模型能力检查失败时会清理未完成的模型并回退到 `native-mirror`，控制台只输出一次高优先级警告；警告同时说明回退后混合端可能重新出现实体碰撞。修改该配置后建议重启服务器并重新进入战局验证。

`config/bot/combat.yml` 中的 `combat.collision` 只控制 Bot 与方块/地形的碰撞，不会开启 Bot 与玩家之间的实体互推。

## 机器人类型（bot-types.yml）

### 配置结构示例：

````
types:
  sa_tactical:
    behavior: tactical
    faction: sa
    attribute-profile: sa_medium
    path-strategy: FASTEST
    loadout: rifle_light
    loot-table: sa_default
    skins: [tactical]
    names:
      - Ranger
      - Viper
````

**types 下的 ID**：Bot 类型内部 ID，例如 `sa_tactical`、`cob_normal`

**behavior**：Bot 行为类型，可填写 `tactical`、`killer`、`sneak`、`offline_player`

**faction**：阵营标识，SA 使用 `sa`，COB 使用 `cob`

**attribute-profile**：引用 `attributes.yml` 中 `profiles` 下的属性档案

**path-strategy**：寻路策略，可填写 `SHORTEST`、`FASTEST`、`SAFEST`、`AGGRESSIVE`、`SCRIPTED_STABLE`

**loadout**：引用装备模板。SA 类型引用 `loadouts.yml`，COB 类型引用 `cob-loadouts.yml`

**loot-table**：SA 类型引用 `loot.yml` 中 `tables` 下的掉落表；COB 类型通常使用由 `cob.yml` 提供的 `cob_normal`、`cob_sniper`、`cob_boss` 或 `cob_default`

**skins**：引用 `skins.yml` 中的皮肤池 ID

**names**：该类型随机使用的名称列表

### 单独覆盖属性

````
  sa_custom:
    behavior: killer
    faction: sa
    attribute-profile: sa_medium
    attributes:
      max-health: 40.0
      damage-reduction: 0.20
    path-strategy: AGGRESSIVE
    loadout: heavy_support
    loot-table: sa_default
````

在 `attributes:` 中填写的字段会覆盖 `attribute-profile` 对应字段；未填写的字段继续使用属性档案的值。

**attributes.max-health**：最大生命值

**attributes.armor**：护甲值

**attributes.damage-reduction**：伤害减免比例，`0.20` 表示减免 20% 伤害

**attributes.interaction-range**：交互距离，单位为方块

**attributes.walk-speed**：行走速度

**attributes.sprint-speed**：疾跑速度

**attributes.sneak-speed**：潜行速度

## 属性档案（attributes.yml）

### 配置结构示例：

````
profiles:
  sa_medium:
    max-health: 24.0
    armor: 4.0
    damage-reduction: 0.08
    interaction-range: 3.0
    walk-speed: 0.10
    sprint-speed: 0.2806
    sneak-speed: 0.05
````

**profiles 下的 ID**：属性档案 ID，需要与 `bot-types.yml` 的 `attribute-profile` 对应

**max-health**：最大生命值

**armor**：护甲值

**damage-reduction**：伤害减免比例，取值范围通常为 `0.0` 至 `1.0`

**interaction-range**：交互距离，单位为方块

**walk-speed**：行走速度

**sprint-speed**：疾跑速度

**sneak-speed**：潜行速度

## SA装备模板（loadouts.yml）

### 配置结构示例：

````
templates:
  rifle_light:
    weight: 28
    drop-chances:
      primary: 0.30
      secondary: 0.45
      armor: 0.35
      items: 0.70
      weapons:
        m4a1s: 0.22
      item-types:
        medkit: 0.85
    primary:
      m4a1s: 0.35
      m16: 0.25
    secondary:
      glock: 0.55
      p30: 0.30
    armor:
      helmet: CHAINMAIL_HELMET
      chest: IRON_CHESTPLATE
      legs: CHAINMAIL_LEGGINGS
      boots: IRON_BOOTS
    items:
      - type: 556
        min: 96
        max: 160
      - type: medkit
        min: 1
        max: 2
        dropChance: 0.85
````

**templates 下的 ID**：装备模板 ID，需要与 `bot-types.yml` 的 `loadout` 对应

**weight**：模板加权随机选择权重，数值越大，被选中的概率越高

**primary**：主武器池。键为枪械 ID，值为该枪械在模板中的权重

**secondary**：副武器池。键为枪械 ID，值为该枪械在模板中的权重

**armor.helmet/chest/legs/boots**：头盔、胸甲、护腿和靴子的 Minecraft 材质名

**items**：装备物品列表。`type` 为弹药、医疗包、手雷等物品 ID

**min / max**：生成数量的最小值和最大值

**drop-chances.primary**：主武器死亡掉落概率

**drop-chances.secondary**：副武器死亡掉落概率

**drop-chances.armor**：护甲死亡掉落概率

**drop-chances.items**：模板物品死亡掉落默认概率

**drop-chances.weapons**：按武器 ID 覆盖掉落概率

**drop-chances.item-types**：按物品 `type` 覆盖掉落概率

**dropChance**：单个物品的掉落概率，会覆盖 `drop-chances.items`

主武器和副武器的 ID 必须对应 `config/weapons/` 中已经注册的枪械；物品 `type` 必须使用插件支持的弹药、医疗物品或其他物品 ID。

## COB独立装备（cob-loadouts.yml）

`cob-loadouts.yml` 的结构与 `loadouts.yml` 基本一致，但只供 `cob.yml` 中 `cob.types.<类型>.loadout` 使用。

````
templates:
  rifle_light:
    weight: 1
    primary:
      ak47: 0.40
      ak47u: 0.30
    secondary:
      glock: 0.60
    armor:
      helmet: CHAINMAIL_HELMET
      chest: IRON_CHESTPLATE
      legs: CHAINMAIL_LEGGINGS
      boots: IRON_BOOTS
    items:
      - type: 762
        min: 64
        max: 128
````

**templates 下的 ID**：COB 装备模板 ID，需要与 `cob.yml` 的 `loadout` 对应

**weight、primary、secondary、armor、items**：含义与 `loadouts.yml` 相同

## SA掉落表（loot.yml）

### 配置结构示例：

````
tables:
  sa_default:
    use-loadout-drops: true
    corpse-owner-name: "SA-Bot"
    itemlab-loot:
      enabled: true
      max-items: 5
      category-chances:
        material: 0.45
        supply: 0.30
        valuable: 0.18
        armament: 0.08
      value-adjust:
        value-divisor: 250.0
        min-multiplier: 0.08
      items: []
    extra-drops: []
````

**tables 下的 ID**：掉落表 ID，需要与 `bot-types.yml` 的 `loot-table` 对应

**use-loadout-drops**：是否使用装备模板中的死亡掉落概率

**corpse-owner-name**：尸体掉落容器显示的所有者名称

**itemlab-loot.enabled**：是否启用 Itemlab 自动掉落

**itemlab-loot.max-items**：Itemlab 自动掉落的最大物品数，最大支持 54

**category-chances**：各物品分类的独立抽取概率，可填写 `material`、`supply`、`valuable`、`armament`、`keycard`

**value-adjust.value-divisor**：物品价值衰减计算的除数，数值越大，高价值物品权重下降越慢

**value-adjust.min-multiplier**：高价值物品的最低权重倍率

**extra-drops**：额外掉落列表

### 额外掉落写法

````
extra-drops:
  - DIAMOND
  - itemlab: lab_keycard_tier_1
  - material: EMERALD
    min: 1
    max: 3
    chance: 0.25
  - itemlab: Planks
    amount: 2
    chance: 0.50
````

**DIAMOND**：直接填写 Minecraft 材质名

**itemlab**：调用 `config/itemlab/items.yml` 中的物品库 ID

**material**：Minecraft 材质名

**amount**：固定掉落数量；也可以使用 `min` 和 `max` 设置随机数量

**chance**：该条掉落的概率

### 显式指定 Itemlab 物品池

````
      items:
        - itemlabId: Planks
          category: material
          min: 1
          max: 2
          value: 20
          chance: 1.0
````

**itemlabId**：物品库 ID

**category**：物品分类

**min / max**：随机掉落数量范围

**value**：用于高价值衰减计算的物品价值

**chance**：该物品在分类物品池中的权重

`items` 留空时，会从 Itemlab 物品库中按物品分类自动抽取。

## COB配置（cob.yml）

### 配置结构示例：

````
cob:
  skins:
    normal: cob_normal
    sniper: cob_sniper
    boss: cob_boss
    sword: cob_sword
  loot:
    enabled: true
    max-items: 5
    category-chances:
      material: 0.45
      supply: 0.30
      valuable: 0.18
      armament: 0.08
      keycard: 0.01
    weapon-drop-chance: 0.08
    weapons:
      glock: 0.35
      makarov: 0.35
    value-adjust:
      value-divisor: 250.0
      min-multiplier: 0.08
````

**cob.skins.normal/sniper/boss/sword**：普通、狙击手、Boss、剑客 COB 使用的皮肤 ID

**cob.loot.enabled**：是否启用 COB 额外掉落

**cob.loot.max-items**：单个 COB 最多生成的额外物品数量

**cob.loot.category-chances**：各物品分类的抽取概率

**cob.loot.weapon-drop-chance**：COB 额外掉落枪械的概率

**cob.loot.weapons**：枪械 ID 及其抽取权重

**cob.loot.value-adjust**：高价值物品的权重衰减参数，含义与 `loot.yml` 相同

**cob.items**：显式指定 COB 的 Itemlab 物品池，写法与 `loot.yml` 的 `itemlab-loot.items` 相同

### COB类型

````
  types:
    normal:
      names:
        - Nikita
        - Pasha
      weapon: ak47
      loadout: rifle_light
      armor:
        helmet: CHAINMAIL_HELMET
        chest: IRON_CHESTPLATE
        legs: CHAINMAIL_LEGGINGS
        boots: IRON_BOOTS
````

**types 下的 ID**：COB 类型 ID，例如 `normal`、`sniper`、`boss`、`sword`

**names**：该类型的随机名称列表

**weapon**：兼容模式下使用的默认武器 ID

**loadout**：引用 `cob-loadouts.yml` 中的装备模板 ID

**armor.helmet/chest/legs/boots**：该类型默认护甲的 Minecraft 材质名

## 皮肤池（skins.yml）

### 配置结构示例：

````
skins:
  killer: []
  tactical: []
  sneak: []
  offline_player: []
````

**killer**：`killer` 类型使用的皮肤池

**tactical**：`tactical` 类型使用的皮肤池

**sneak**：`sneak` 类型使用的皮肤池

**offline_player**：离线玩家类型使用的皮肤池

皮肤池中的内容为皮肤名称或皮肤配置 ID，具体皮肤资源需要在服务器已有的 AI 皮肤配置中注册。

## 寻路配置（pathing.yml）

### 配置结构示例：

````
pathing:
  default-strategy: FASTEST
  navigation-mode: native-first
  max-search-distance: 64
  max-search-nodes: 500
  async-workers: 2
  stuck-repath-ticks: 20
  viewer-active-distance: 64.0
  passable-soft-blocks: true
  doors:
    open-blocking-doors: true
    close-after-passing: true
  terrain:
    allow-stairs: true
    allow-slabs: true
    allow-ladders: true
    allow-one-block-jump: true
    max-controlled-fall: 3
````

**default-strategy**：默认寻路策略

**navigation-mode**：导航实现，可填写 `native-first`、`native-only`、`villager-fallback`、`legacy-villager`

**max-search-distance**：单次寻路最大搜索距离，单位为方块

**max-search-nodes**：单次寻路最大搜索节点数

**async-workers**：异步寻路 worker 数量，可填写 `1`–`4`，默认 `2`。修改后需要重启服务器。

**stuck-repath-ticks**：有移动意图但位移不足时，进入卡住恢复前的等待 tick 数；按真实 server tick 计时

**viewer-active-distance**：玩家进入该距离时立即唤醒 Bot，默认 `64.0` 格；离开 `72` 格并持续 `40` tick 后进入休眠心跳

**passable-soft-blocks**：是否将软方块视为可通行

**doors.open-blocking-doors**：是否自动打开阻挡路径的门

**doors.close-after-passing**：通过门后是否关闭门

**terrain.allow-stairs**：是否允许经过楼梯

**terrain.allow-slabs**：是否允许经过台阶

**terrain.allow-ladders**：是否允许使用梯子

**terrain.allow-one-block-jump**：是否允许一格高度跳跃

**terrain.max-controlled-fall**：允许 Bot 控制的最大下落高度

## 基础战斗配置（combat.yml）

### 配置结构示例：

````
combat:
  target-range: 48.0
  melee-range: 2.7
  melee-damage: 6.0
  attack-cooldown-ticks: 13
  damageable: true
  knockback-multiplier: 1.0
  collision: true
  forget-target-min-seconds: 45
  forget-target-max-seconds: 60
  flee-health-ratio: 0.30
  gun-integration:
    enabled: true
    preferred-distance: 18.0
    fallback-to-melee: true
````

**target-range**：最大索敌距离，单位为方块

**melee-range**：近战攻击距离，单位为方块

**melee-damage**：近战基础伤害

**attack-cooldown-ticks**：攻击冷却时间，单位为 tick

**damageable**：Bot 是否接收伤害。该配置不再隐式控制击退或地形碰撞。

**knockback-multiplier**：攻击命中 Bot 时的击退倍率；`0` 表示免疫伤害击退，`1.0` 表示使用标准力度。

**collision**：仅控制 SA Bot 运动时与方块、墙面和地形的碰撞。关闭后可能穿过地形，通常应保持 `true`。

Bot 与玩家之间的被动实体互推固定关闭：玩家靠近或穿过 Bot 时，Bot 不会把玩家挤开。Boss 首次发现玩家时的咆哮也不再写入玩家速度。枪械、近战、爆炸和专用技能造成的攻击击退仍按各自伤害规则及 `knockback-multiplier` 结算。

**forget-target-min-seconds**：目标丢失后的最短遗忘时间

**forget-target-max-seconds**：目标丢失后的最长遗忘时间

**flee-health-ratio**：触发逃跑的生命值比例，`0.30` 表示生命值低于 30%

**gun-integration.enabled**：是否启用枪械系统集成

**gun-integration.preferred-distance**：优先使用枪械作战的距离，单位为方块

**gun-integration.fallback-to-melee**：枪械不可用时是否切换为近战

## 战术配置（tactical.yml）

### 目标记忆

````
tactical:
  target_memory:
    view_cone_angle: 110
    target_loss_min_seconds: 45
    target_loss_max_seconds: 60
    max_track_distance: 64.0
````

**view_cone_angle**：视锥角度，单位为度

**target_loss_min_seconds / target_loss_max_seconds**：目标丢失后的遗忘时间范围

**max_track_distance**：最大追踪距离，单位为方块

### 战斗决策、搜刮和撤离

````
  combat_decisions:
    cob_engage_chance: 0.75
    sa_engage_chance: 0.75
    sa_damage_multiplier: 1.6
    flee_health_threshold: 0.3
    flee_ammo_threshold: 10
  looting:
    search_radius: 32.0
    max_loot_time_seconds: 15
    item_priority: [weapons, ammo, medical, armor, misc]
  evacuation:
    health_threshold: 0.3
    weight_threshold: 0.8
    switch_max_detour: 100.0
````

**cob_engage_chance**：与 COB 交战的概率

**sa_engage_chance**：与 SA 交战的概率

**sa_damage_multiplier**：SA Bot 的伤害倍率

**flee_health_threshold**：战斗决策中的逃跑生命值比例

**flee_ammo_threshold**：触发战术撤退的最低弹药数量

**search_radius**：搜刮半径，单位为方块

**max_loot_time_seconds**：单次最大搜刮时间

**item_priority**：搜刮优先级，从前到后依次为高到低

**health_threshold**：生命值低于该比例时触发撤离

**weight_threshold**：负重达到该比例时触发撤离

**switch_max_detour**：切换撤离开关时允许的最大绕路距离，单位为方块

当前运行时的目标遗忘时间和逃跑生命值比例以 `combat.yml` 中的 `forget-target-*`、`flee-health-ratio` 为基础配置；修改时建议保持两个文件中的对应数值一致。

## 动态难度（difficulty.yml）

### 配置结构示例：

````
difficulty_levels:
  easy:
    health_multiplier: 0.8
    damage_multiplier: 0.7
    accuracy_multiplier: 0.6
    reaction_time_ms: 800
    loot_speed_multiplier: 0.7

  normal:
    health_multiplier: 1.0
    damage_multiplier: 1.0
    accuracy_multiplier: 0.8
    reaction_time_ms: 500
    loot_speed_multiplier: 1.0

default_difficulty: normal
````

**difficulty_levels 下的 ID**：难度等级，可使用 `easy`、`normal`、`hard`、`extreme`

**health_multiplier**：生命值倍率

**damage_multiplier**：伤害倍率

**accuracy_multiplier**：精准度倍率

**reaction_time_ms**：反应时间，单位为毫秒；数值越小反应越快

**loot_speed_multiplier**：搜刮速度倍率

**default_difficulty**：默认难度

## 调试配置（debug.yml）

### 配置结构示例：

````
debug:
  command-enabled: true
  log-spawn: false
  log-path-failures: true
  log-state-changes: false
````

**command-enabled**：是否开放 Bot 调试命令

**log-spawn**：是否记录 Bot 生成日志

**log-path-failures**：是否记录寻路失败日志

**log-state-changes**：是否记录 Bot 状态变化日志

使用 Bot 调试命令时，还需要在 `config/core.yml` 中开启 `mtkv.debug: true`；两个开关都开启后调试命令才会生效。
