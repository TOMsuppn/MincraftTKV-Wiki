---
title: "🔫 武器系统配置（weapons.yml）"
description: "weapons.yml 及枪械、弹药、附件配置说明"
---

# 武器系统配置（weapons.yml）

武器系统的主配置文件位于插件数据目录的 `config/weapons.yml`，枪械、弹药和附件的独立配置位于 `config/weapons/` 目录。

## 配置文件一览

| 文件或目录 | 作用 |
| --- | --- |
| `weapons.yml` | 武器系统总开关、射击、瞄准镜、换弹、附件、护甲穿透和兼容设置 |
| `weapons/guns/*.yml` | 定义枪械属性和枪械物品 |
| `weapons/ammo/*.yml` | 定义弹药类型和弹药物品 |
| `weapons/attachments/*.yml` | 定义枪械附件及属性修改器 |
| `weapons/weapons-advanced.yml` | 充能、换弹和高级弹道设置 |
| `weapons/weapons-misc.yml` | 手雷、医疗包和近战物品设置 |
| `weapons/weapons-armor.yml` | 护甲耐久、维修、护甲等级和穿透设置 |
| `weapons/weapons-shop.yml` | 武器商店设置 |
| `weapons/weapons-crafting.yml` | 武器合成设置 |

修改配置后可使用 `/mtkv config reload` 重载全部配置，也可以使用 `/mtkv weapon reload` 单独重载枪械、弹药和附件配置。

配置中的枪械 ID、弹药 ID 和附件 ID 区分于显示名称，引用时应填写 `name` 字段的值。

## 主配置（weapons.yml）

### 配置结构示例：

````
weapons:
  mechanics:
    enable-recoil: true
    enable-durability: false
    unlimited-ammo: false
    headshot-multiplier: 2.0
    sound:
      gunshot-volume-multiplier: 0.35
    scope:
      enable-zoom: true
      zoom-move-speed: 0.5
      accuracy-bonus: 0.3
      enable-crosshair: true
      default-scope: IRON_SIGHT
      allow-scope-change: true
    reload:
      enable-animations: true
      enable-progress-bar: true
      cancel-on-damage: true
      cancel-on-move: false
      tactical-reload: true
      emergency-reload: true
      cooldown-ms: 500
    attachments:
      enabled: true
      allow-stacking: true
      drop-chance: 0.15
      show-modifiers-in-lore: true
    armor-penetration:
      enabled: true
      calculation-mode: PERCENTAGE
      show-penetration-damage: true
  performance:
    bullet-step: 0.5
    max-distance: 150
    enable-bullet-trails: true
    attachment-cache-duration: 300
````

**enable-recoil**：是否启用枪械后坐力

**enable-durability**：是否启用原版物品耐久。启用后，每次成功射击消耗 1 点物品耐久，耐久耗尽时枪械损坏

**unlimited-ammo**：是否启用无限弹药，主要用于调试

**headshot-multiplier**：爆头伤害倍率，`2.0` 表示爆头造成两倍伤害

**gunshot-volume-multiplier**：枪声总音量倍率，不影响命中、换弹等其他音效

**enable-zoom**：是否启用瞄准缩放

**zoom-move-speed**：瞄准时的移动速度倍率，`0.5` 表示为普通移动速度的 50%

**accuracy-bonus**：瞄准时的精度加成

**enable-crosshair**：是否在 ActionBar 显示准星

**default-scope**：默认瞄准镜类型，可填写 `IRON_SIGHT`、`RED_DOT`、`HOLOGRAPHIC`、`SCOPE_2X`、`SCOPE_4X`、`SCOPE_8X`

**allow-scope-change**：是否允许更换瞄准镜

**enable-animations**：是否显示换弹动画

**enable-progress-bar**：是否显示换弹进度条

**cancel-on-damage**：受到伤害时是否取消换弹

**cancel-on-move**：移动时是否取消换弹

**tactical-reload**：是否允许战术换弹

**emergency-reload**：是否启用紧急换弹功能

**cooldown-ms**：换弹冷却时间，单位为毫秒

**attachments.enabled**：附件系统开关

**allow-stacking**：是否允许附件修改器叠加

**drop-chance**：附件掉落概率，取值范围为 `0.0` 至 `1.0`

**show-modifiers-in-lore**：是否在枪械 Lore 中显示附件带来的属性变化

**armor-penetration.enabled**：是否启用护甲穿透

**calculation-mode**：护甲穿透计算模式，可填写 `PERCENTAGE` 或 `FLAT`

**show-penetration-damage**：是否显示护甲穿透造成的伤害信息

**bullet-step**：子弹轨迹检测步进距离，数值越小越精确，但性能消耗越高

**max-distance**：系统默认最大射程，单位为方块

**enable-bullet-trails**：是否显示子弹轨迹粒子

**attachment-cache-duration**：附件属性缓存时间，单位为秒

## 枪械配置（weapons/guns/*.yml）

### 配置结构示例：

````
name: p30
display-name: '&6P30'
material: CROSSBOW
custom-model-data: 1
weapon-type: PISTOL
ammo-type: 9mm
damage: 3.0
max-bullets: 12
fire-rate: 1200
reload-time: 1.5
accuracy: 0.8
recoil: 1.0
velocity: 2.5
automatic: false
price: 700.0
weaponsounds:
  - bulletsmall
weaponsounds_volume: 4.0
lore:
  - §7PISTOL
  - '§7伤害: §c3'
  - '§7弹匣: §e12发'
````

**name**：枪械内部 ID。必须唯一；Bot、命令、附件兼容列表都使用此 ID

**display-name**：枪械展示名称，支持 `&` 颜色代码

**material**：枪械使用的 Minecraft 材质，默认推荐使用 `CROSSBOW`

**custom-model-data**：材质包使用的模型数据值

**weapon-type**：武器类型，可填写 `PISTOL`、`SMG`、`RIFLE`、`SNIPER`、`SHOTGUN`、`LMG`、`DMR`、`MELEE`、`GRENADE`、`MISC`

**ammo-type**：使用的弹药 ID，必须对应 `weapons/ammo/` 中注册的弹药

**damage**：基础伤害

**max-bullets**：基础弹匣容量

**fire-rate**：射速，单位为 RPM

**reload-time**：基础换弹时间，单位为秒

**accuracy**：基础精度，通常填写 `0.0` 至 `1.0`，数值越大越精准

**recoil**：基础后坐力

**velocity**：子弹速度及射程计算参数

**armor-penetration**：枪械基础护甲穿透值

**automatic**：是否为全自动武器

**price**：枪械价格，供商店或其他经济模块使用

**weaponsounds**：枪械开火音效列表，多个音效会随机播放

**weaponsounds_volume**：单把枪械的枪声音量

**lore**：枪械 Lore。系统会在此基础上显示弹药和附件相关信息

### 可选高级字段

````
scope: IRON_SIGHT
can-attach-scope: true
setZoomLevel: 0
hasNightVisionOnScope: false
headshotMultiplier: 2.0
bullets-per-shot: 1
maxBulletDistance: 150
delayForShoot: 0.25
unlimitedAmmo: false
ReloadingHandler: none
ChargingHandler: none
CustomProjectiles:
  projectileType: none
  explosionRadius: 0.0
DestructableMaterials:
  - GLASS
````

**scope**：枪械默认瞄准镜类型

**can-attach-scope**：是否允许安装瞄准镜

**setZoomLevel**：瞄准缩放等级

**hasNightVisionOnScope**：瞄准时是否启用夜视

**headshotMultiplier**：单把枪械的爆头倍率，未设置时使用主配置

**bullets-per-shot**：一次射击发射的子弹数

**maxBulletDistance**：单把枪械的最大射程

**delayForShoot**：特殊射击/充能路径使用的射击间隔，单位为秒

**unlimitedAmmo**：单把枪械的无限弹药开关

**ReloadingHandler**：自定义换弹处理器名称，填写 `none` 表示不使用

**ChargingHandler**：自定义充能处理器名称，填写 `none` 表示不使用

**CustomProjectiles**：自定义弹道和爆炸配置

**DestructableMaterials**：该枪械可以破坏的方块材质列表

## 弹药配置（weapons/ammo/*.yml）

### 配置结构示例：

````
name: 9mm
display-name: '&f9mm'
material: PHANTOM_MEMBRANE
custom-model-data: 1
max-stack: 50
piercing-damage: 0.7
price: 2.0
lore:
  - §7弹药
````

**name**：弹药内部 ID，需要与枪械的 `ammo-type` 对应

**display-name**：弹药展示名称

**material**：弹药使用的 Minecraft 材质

**custom-model-data**：材质包使用的模型数据值

**max-stack**：弹药最大堆叠数量

**piercing-damage**：弹药护甲穿透伤害参数

**price**：弹药价格

**lore**：弹药 Lore

## 附件配置（weapons/attachments/*.yml）

### 配置结构示例：

````
name: extended_mag
display-name: "§6扩容弹匣"
type: MAGAZINE
material: IRON_BLOCK
custom-model-data: 3008
modifiers:
  maxbullets: 10.0
  reloadtime: 0.2
compatible-guns:
  - ak47
  - m4a1
price: 600
lore:
  - "§7增加弹匣容量"
````

**name**：附件内部 ID

**display-name**：附件展示名称

**type**：附件槽位，可填写 `GRIP`（握把）、`MUZZLE`（枪口）、`SCOPE`（瞄准镜）、`TACTICAL`（战术配件）、`MAGAZINE`（弹匣）、`STOCK`（枪托）

**material**：附件使用的 Minecraft 材质

**custom-model-data**：附件模型数据值

**modifiers**：属性修改器。当前支持 `damage`、`accuracy`、`recoil`、`firerate`、`reloadtime`、`maxbullets`、`velocity`

修改器为加法修改。例如 `recoil: -0.2` 表示减少 0.2 后坐力，`maxbullets: 10` 表示增加 10 发容量。

**compatible-guns**：兼容的枪械 ID 列表。留空表示兼容所有枪械

**price**：附件价格

**lore**：附件 Lore

### 附件工作台

玩家手持枪械时使用潜行+右键可以打开“枪械附件工作台”。附件按类型放入对应槽位；每种类型只能安装一个附件。

附件安装后会写入枪械物品，实际射击伤害、精度、后坐力、射速、换弹时间、弹匣容量和弹速会读取修改后的属性。点击已安装附件可以卸载，卸下的附件会返还为物品。

## 武器使用命令

````
/mtkv weapon give <枪械名称> [玩家] [数量]
/mtkv weapon ammo <弹药名称> [玩家] [数量]
/mtkv weapon list [guns|ammo]
/mtkv weapon info <枪械名称>
/mtkv weapon reload
/mtkv get weapon
/mtkv get weapon gun <枪械名称>
/mtkv get weapon ammo <弹药名称> [数量]
````

**weapon give**：给予枪械，数量范围为 `1-64`

**weapon ammo**：给予弹药，数量超过最大堆叠时会自动拆分为多个物品堆；背包空间不足时会掉落在玩家位置

**weapon list**：列出已注册的枪械或弹药

**weapon info**：查看枪械的基础属性

**weapon reload**：重载枪械、弹药和附件配置

**get weapon**：打开武器库 GUI

## 兼容设置

`weapons.compat.quality-armory` 用于兼容 QualityArmory 等外部武器插件。默认会跳过已识别的外部武器，避免 MTKV 重复处理。

`mtkv-legacy-material-match` 默认关闭。开启后可以使用材质和 CustomModelData 识别旧版 MTKV 枪械，但也可能误识别其他插件的物品。

## 常见问题

1. 枪械无法使用：检查 `name`、`material`、`custom-model-data`、`ammo-type` 是否正确，并确认弹药 ID 已注册。
2. 附件无法安装：检查附件 `type`、枪械 ID 是否位于 `compatible-guns`，以及枪械系统是否已重载。
3. 换弹容量不正确：检查附件是否修改了 `maxbullets`，并确认枪械物品确实是安装附件后的物品。
4. 修改配置后没有生效：使用 `/mtkv weapon reload`，并查看控制台是否有 YAML 或材质错误。

