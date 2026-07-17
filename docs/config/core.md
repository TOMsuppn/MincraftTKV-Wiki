---
title: "🧩 核心配置文件"
description: "core.yml 核心总配置说明"
---

# 🧩 核心配置文件

`core.yml` 是 MinecraftTKV 的核心总配置。大多数“全服基础体验”都会从这里读取，包括语言、兼容性、统计、进度、战令、经济与性能调优。

风险等级：高。

原因：这里的改动会同时影响多个系统。

## 本局离场后观战

以下配置适用于玩家成功撤离、阵亡或撤离失败后留在本局观战。配置键保留 `death-spectate` 命名，以兼容已有配置。

```yaml
# 本局离场后观战：适用于成功撤离、阵亡与撤离失败（键名保留 death-spectate 以兼容已有配置）
mtkv.raid.death-spectate.enabled: false
mtkv.raid.death-spectate.entry-mode: PROMPT
mtkv.raid.death-spectate.target-scope: PARTY_ONLY
mtkv.raid.death-spectate.camera-mode: TARGET_LOCKED
mtkv.raid.death-spectate.delay-seconds: 3
mtkv.raid.death-spectate.prompt-timeout-seconds: 10
mtkv.raid.death-spectate.prompt-timeout-action: RETURN_HIDEOUT
mtkv.raid.death-spectate.freecam-radius: 16
mtkv.raid.death-spectate.show-target-health: true
mtkv.raid.death-spectate.show-target-armor: false
mtkv.raid.death-spectate.show-target-distance: false
mtkv.raid.death-spectate.chat-mode: DEAD_PARTY_ONLY
mtkv.raid.death-spectate.reconnect-policy: RETURN_HIDEOUT
mtkv.raid.death-spectate.ui-mode: INVENTORY
```

| 配置项 | 说明 |
| --- | --- |
| `enabled` | 是否启用离场后观战。 |
| `entry-mode` | 进入方式；`PROMPT` 表示向玩家展示选择提示。 |
| `target-scope` | 可观战目标范围；`PARTY_ONLY` 仅限同队仍在战局内的玩家。 |
| `camera-mode` | 镜头模式；`TARGET_LOCKED` 将镜头锁定在观战目标。 |
| `delay-seconds` | 离场后进入观战前的等待秒数。 |
| `prompt-timeout-seconds` | 观战选择提示的超时秒数。 |
| `prompt-timeout-action` | 提示超时后的动作；`RETURN_HIDEOUT` 表示返回藏身处。 |
| `freecam-radius` | 自由镜头可活动半径；仅在自由镜头模式下生效。 |
| `show-target-health` | 是否显示观战目标生命值。 |
| `show-target-armor` | 是否显示观战目标护甲值。 |
| `show-target-distance` | 是否显示与观战目标的距离。 |
| `chat-mode` | 观战聊天范围；`DEAD_PARTY_ONLY` 仅允许离场/阵亡的队友交流。 |
| `reconnect-policy` | 观战期间重连后的处理策略；`RETURN_HIDEOUT` 表示返回藏身处。 |
| `ui-mode` | 观战操作界面模式；`INVENTORY` 使用背包界面。 |

默认配置关闭观战功能。启用前请确认服务器的战局与队伍规则符合预期。

## 许可证

`license.key`

作用：

* 插件许可证密钥

建议：

* 需要时再填写
* 不要泄露给普通玩家

## 基础设置

`mtkv.debug`

作用：

* 插件总调试开关

建议：

* 正式服建议关闭
* 排查问题时临时开启

`mtkv.basic.language`

作用：

* 插件语言

当前默认值：

* `zh_cn`

## 实验模块

`mtkv.lab.corpsedropfix`

作用：

* 尸体掉落修复

建议：

* 注释已明确说明仅建议混合端开启
* 原版端不建议启用

`mtkv.lab.pmcbot`

作用：

* 允许 AI 玩家补全战局空位

玩家体感：

* 冷门时段更容易开局
* 战局里可能出现 AI 补位玩家

## 兼容性设置

`mtkv.compat.disable-pmc-on-incompatible-runtime`

作用：

* 在运行环境不兼容时自动停用高风险 PMC 相关功能

建议：

* 正式服建议保持 `true`

`mtkv.compat.client-policy.mode`

作用：

* 客户端准入策略

默认值：

* `allow-supported-observe-others`

`mtkv.compat.client-policy.supported-brands`

作用：

* 声明允许的客户端品牌

默认包含：

* `vanilla`
* `fabric`
* `forge`

`mtkv.compat.client-policy.warn-unknown-modded`

作用：

* 对未知模组端输出警告

`mtkv.compat.hybrid-policy.pmc-mode`
`mtkv.compat.hybrid-policy.corpse-mode`

作用：

* 控制混合端环境下高风险模块的启停策略

默认值：

* `auto`

`mtkv.compat.debug-log-client-brand`

作用：

* 是否输出客户端品牌判定日志

建议：

* 线上关闭
* 排查兼容性问题时开启

## 自定义显示

`mtkv.custom.tab.render`

作用：

* 是否启用插件自带 TAB 菜单

建议：

* 如果服务器已经装了其他 TAB 插件，要先确认是否会冲突

## 统计系统

`mtkv.stats.enabled`

作用：

* 战局统计总开关

`mtkv.stats.book-on-raid-end`

作用：

* 战局结束后是否自动弹出统计书本

`mtkv.stats.command.enabled`

作用：

* `/mstats` 命令开关

## 进度系统

`mtkv.progress.enabled`

作用：

* 进度系统总开关

`mtkv.progress.max-level`

作用：

* 最大等级

### 经验权重

以下配置会影响玩家每种行为获得多少原始经验：

* `mtkv.progress.xp.weights.ai-kill`
* `mtkv.progress.xp.weights.player-kill`
* `mtkv.progress.xp.weights.lootbox-open`
* `mtkv.progress.xp.weights.lootbox-item`
* `mtkv.progress.xp.weights.corpse-search`
* `mtkv.progress.xp.weights.corpse-item`
* `mtkv.progress.xp.weights.evac-switch`
* `mtkv.progress.xp.weights.raid-minute`

### 撤离倍率

以下配置会影响原始经验在结算时如何换算：

* `mtkv.progress.xp.multiplier.success-evac`
* `mtkv.progress.xp.multiplier.defeated-lost`
* `mtkv.progress.xp.multiplier.disconnect`

### 进度奖励

以下配置会影响升级奖励：

* `mtkv.progress.reward.milestone-every`
* `mtkv.progress.reward.small.base-coins`
* `mtkv.progress.reward.small.per-level-coins`
* `mtkv.progress.reward.big.base-coins`
* `mtkv.progress.reward.big.per-level-coins`

## 战令系统

`mtkv.pass.enabled`

作用：

* 战令系统总开关

`mtkv.pass.max-level`

作用：

* 战令最大等级

`mtkv.pass.unlock-cost.tokens`

作用：

* 解锁战令所需代币

以下配置会影响奖励与代币产出：

* `mtkv.pass.reward.normal.coins`
* `mtkv.pass.reward.premium.coins`
* `mtkv.pass.tokens.raid-base`
* `mtkv.pass.tokens.success-bonus`
* `mtkv.pass.tokens.level-up-per-level`

## 经济系统

`mtkv.economy.enabled`

作用：

* 经济系统总开关

`mtkv.economy.currency.display-name`
`mtkv.economy.currency.symbol`

作用：

* 货币名称与图标显示

`mtkv.economy.wallet.default-balance`
`mtkv.economy.wallet.max-balance`

作用：

* 玩家初始资金与钱包上限

`mtkv.economy.pay.enabled`

作用：

* 玩家转账功能开关

`mtkv.economy.control.freeze-block-send`
`mtkv.economy.control.freeze-block-receive`

作用：

* 控制冻结玩家是否允许收付款

## 性能调优

这一组主要控制扫描、标题刷新、AI 调度与数据写回频率：

* `mtkv.perf.evac-scan-interval-ticks`
* `mtkv.perf.evac-title-refresh-interval-ticks`
* `mtkv.perf.raid-ready-title-interval-ticks`
* `mtkv.perf.search-progress-interval-ticks`
* `mtkv.perf.pmc-viewer-sync-coalesce-ticks`
* `mtkv.perf.pmc-tick-interval`
* `mtkv.perf.scav-melee-tick-interval`
* `mtkv.perf.playerdata-flush-interval-ticks`
* `mtkv.perf.debug-log-hotpaths`

:::warning
这一组配置会明显影响服务器性能和表现频率，不建议在不了解含义时大幅调整。
:::

## SCAV 命名池

`mtkv.custom.scav.botsname`

作用：

* SCAV 机器人名称池

你可以按服务器风格自行扩展列表，但建议保持英文或稳定可显示的字符集。

## 完整默认文件

```yml
# MinecraftTarkov 我的世界-塔克夫
# 主要配置文件 core.yml

## 许可证
license.key: ""

# 基础设置
## 调试模式
mtkv.debug: false

## 语言设置(目前仅支持简体中文zh_cn)
mtkv.basic.language: zh_cn

# 实验模块
# 注意：实验模块的功能具有不稳定性，请谨慎使用
## 尸体掉落修复
## 我们仅建议混合端开启此功能，原版端请勿启用！
mtkv.lab.corpsedropfix: false

## ALPHA-PMC 允许AI玩家补全战局空余位置
mtkv.lab.pmcbot: false

# 兼容性设置
## NMS停用保护机制
mtkv.compat.disable-pmc-on-incompatible-runtime: true
## 客户端准入策略
mtkv.compat.client-policy.mode: allow-supported-observe-others
mtkv.compat.client-policy.supported-brands: ["vanilla", "fabric", "forge"]
mtkv.compat.client-policy.warn-unknown-modded: true
## 混合端高风险模块策略
mtkv.compat.hybrid-policy.pmc-mode: auto
mtkv.compat.hybrid-policy.corpse-mode: auto
## 是否输出客户端品牌决策日志
mtkv.compat.debug-log-client-brand: false

# 自定义设置
## TAB 菜单
## 是否启用插件自带的TAB菜单
mtkv.custom.tab.render: true

# 统计系统
## 总开关
mtkv.stats.enabled: true
## 战局结束后是否自动弹出统计菜单
mtkv.stats.book-on-raid-end: true
## /mstats 命令开关
mtkv.stats.command.enabled: true

# 进度系统
## 总开关
mtkv.progress.enabled: true
## 最大等级
mtkv.progress.max-level: 100

## 经验权重（rawXp）
### AI击杀
mtkv.progress.xp.weights.ai-kill: 6
### 玩家击杀
mtkv.progress.xp.weights.player-kill: 20
### 物资箱搜索
mtkv.progress.xp.weights.lootbox-open: 5
### 物资箱物品搜索
mtkv.progress.xp.weights.lootbox-item: 1
### 尸体搜索
mtkv.progress.xp.weights.corpse-search: 4
### 尸体物品搜索
mtkv.progress.xp.weights.corpse-item: 1
### 闸门开启
mtkv.progress.xp.weights.evac-switch: 2
### 战局存活时间（单位：时间）
mtkv.progress.xp.weights.raid-minute: 2

## 撤离状态倍率 玩家获取原始经验*倍率=最终获取的经验
### 成功撤离
mtkv.progress.xp.multiplier.success-evac: 1.0
### 撤离失败
mtkv.progress.xp.multiplier.defeated-lost: 0.25
### 拔线（退出游戏）
mtkv.progress.xp.multiplier.disconnect: 0.0

## 进度奖励配置(Alpha)
mtkv.progress.reward.milestone-every: 5
mtkv.progress.reward.small.base-coins: 30
mtkv.progress.reward.small.per-level-coins: 5
mtkv.progress.reward.big.base-coins: 250
mtkv.progress.reward.big.per-level-coins: 20

# 战令系统
## 总开关
mtkv.pass.enabled: true
## 最大等级
mtkv.pass.max-level: 100

## 解锁消耗
mtkv.pass.unlock-cost.tokens: 2

## 奖励配置
mtkv.pass.reward.normal.coins: 100
mtkv.pass.reward.premium.coins: 200

## 战令代币获取
### 每局基础
mtkv.pass.tokens.raid-base: 1
### 成功撤离额外
mtkv.pass.tokens.success-bonus: 1
### 进度额外奖励
mtkv.pass.tokens.level-up-per-level: 2

# 经济系统
## 总开关
mtkv.economy.enabled: true

## 货币显示
mtkv.economy.currency.display-name: "金币"
mtkv.economy.currency.symbol: "🪙"

## 钱包限制
### 初始资金
mtkv.economy.wallet.default-balance: 0.00
mtkv.economy.wallet.max-balance: 999999999.99

## 玩家转账
mtkv.economy.pay.enabled: true

## 冻结管控
### 转账
mtkv.economy.control.freeze-block-send: true
### 收款
mtkv.economy.control.freeze-block-receive: true

# 性能调优
## 撤离点主循环扫描频率
mtkv.perf.evac-scan-interval-ticks: 10
## 撤离点标题刷新频率
mtkv.perf.evac-title-refresh-interval-ticks: 10
## 进图准备标题最小刷新频率
mtkv.perf.raid-ready-title-interval-ticks: 2
## 搜索进度最小刷新频率
mtkv.perf.search-progress-interval-ticks: 2
## PMC 视野同步去重窗口
mtkv.perf.pmc-viewer-sync-coalesce-ticks: 2
## PMC AI 调度频率
mtkv.perf.pmc-tick-interval: 2
## 近战 SCAV AI 调度频率
mtkv.perf.scav-melee-tick-interval: 2
## 玩家数据批量写回频率
mtkv.perf.playerdata-flush-interval-ticks: 200
## 是否输出热点调优日志
mtkv.perf.debug-log-hotpaths: false

# SCAV 机器人
## 机器人命名池
mtkv.custom.scav.botsname: ["Nikita", "Pasha", "Ilya", "Sergey", "Viktor", "Kostya", "Sasha", "Artyom",
                            "Oleg", "Misha", "Yura", "Andrei", "Borya", "Dima", "Grisha", "Kolya", "Ruslan",
                            "Denis", "Timur", "Fyodor", "Anatoly", "Boris", "Maksim", "Pavel", "Vitya",
                            "Yegor", "Yuri"]
```
