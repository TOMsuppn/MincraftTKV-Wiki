---
title: "🧩 Core Configuration File"
description: "core.yml core configuration reference"
---

# 🧩 Core Configuration File

`core.yml` is MinecraftTKV's main core configuration. Most server-wide baseline experiences are configured here, including language, compatibility, statistics, progression, battle pass, economy, and performance tuning.

Risk level: High.

Reason: Changes here affect multiple systems at the same time.

## Spectating After Leaving a Raid

The following configuration applies to players who remain to spectate the current raid after successfully extracting, dying, or failing to extract. The configuration keys retain the `death-spectate` name for compatibility with existing configurations.

```yaml
# Spectating after leaving a raid: applies to successful extraction, death, and failed extraction (the death-spectate key name is retained for compatibility with existing configurations)
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

| Setting | Description |
| --- | --- |
| `enabled` | Whether spectating after leaving a raid is enabled. |
| `entry-mode` | Entry method; `PROMPT` displays a choice prompt to the player. |
| `target-scope` | Scope of spectatable targets; `PARTY_ONLY` limits targets to party members still in the raid. |
| `camera-mode` | Camera mode; `TARGET_LOCKED` locks the camera onto the spectated target. |
| `delay-seconds` | Seconds to wait before entering spectator mode after leaving the raid. |
| `prompt-timeout-seconds` | Timeout in seconds for the spectate choice prompt. |
| `prompt-timeout-action` | Action after the prompt times out; `RETURN_HIDEOUT` returns the player to the hideout. |
| `freecam-radius` | Movement radius for the free camera; effective only in free-camera mode. |
| `show-target-health` | Whether to show the spectated target's health. |
| `show-target-armor` | Whether to show the spectated target's armor value. |
| `show-target-distance` | Whether to show the distance to the spectated target. |
| `chat-mode` | Spectator chat scope; `DEAD_PARTY_ONLY` allows only teammates who have left/died to communicate. |
| `reconnect-policy` | Handling policy after reconnecting while spectating; `RETURN_HIDEOUT` returns the player to the hideout. |
| `ui-mode` | Spectator control interface mode; `INVENTORY` uses the inventory interface. |

Spectating is disabled by default. Before enabling it, make sure the server's raid and party rules match your expectations.

## License

`license.key`

Purpose:

* Plugin license key

Recommendations:

* Fill it in only when needed
* Do not expose it to regular players

## Basic Settings

`mtkv.debug`

Purpose:

* Master debug switch for the plugin

Recommendations:

* Keep it disabled on production servers
* Enable it temporarily while troubleshooting

`mtkv.basic.language`

Purpose:

* Plugin language

Current default value:

* `zh_cn`

## Experimental Modules

`mtkv.lab.corpsedropfix`

Purpose:

* Fixes corpse drops

Recommendations:

* The comment clearly states that it is recommended only for hybrid servers
* It is not recommended for vanilla servers

`mtkv.lab.pmcbot`

Purpose:

* Allows AI players to fill empty raid slots

Player experience:

* Raids are easier to start during off-peak hours
* AI fill-in players may appear in raids

## Compatibility Settings

`mtkv.compat.disable-pmc-on-incompatible-runtime`

Purpose:

* Automatically disables high-risk PMC-related features when the runtime environment is incompatible

Recommendations:

* Keep this set to `true` on production servers

`mtkv.compat.client-policy.mode`

Purpose:

* Client admission policy

Default value:

* `allow-supported-observe-others`

`mtkv.compat.client-policy.supported-brands`

Purpose:

* Declares the permitted client brands

Included by default:

* `vanilla`
* `fabric`
* `forge`

`mtkv.compat.client-policy.warn-unknown-modded`

Purpose:

* Outputs a warning for unknown modded clients

`mtkv.compat.hybrid-policy.pmc-mode`
`mtkv.compat.hybrid-policy.corpse-mode`

Purpose:

* Controls the enable/disable policy for high-risk modules in hybrid server environments

Default value:

* `auto`

`mtkv.compat.debug-log-client-brand`

Purpose:

* Whether to output client-brand decision logs

Recommendations:

* Disable it in production
* Enable it when troubleshooting compatibility issues

## Custom Display

`mtkv.custom.tab.render`

Purpose:

* Whether to enable the plugin's built-in TAB menu

Recommendations:

* If the server already has another TAB plugin, first check for conflicts

## Statistics System

`mtkv.stats.enabled`

Purpose:

* Master switch for raid statistics

`mtkv.stats.book-on-raid-end`

Purpose:

* Whether to automatically open the statistics book after a raid ends

`mtkv.stats.command.enabled`

Purpose:

* `/mstats` command switch

## Progression System

`mtkv.progress.enabled`

Purpose:

* Master switch for the progression system

`mtkv.progress.max-level`

Purpose:

* Maximum level

### Experience Weights

The following settings affect how much raw experience players gain from each action:

* `mtkv.progress.xp.weights.ai-kill`
* `mtkv.progress.xp.weights.player-kill`
* `mtkv.progress.xp.weights.lootbox-open`
* `mtkv.progress.xp.weights.lootbox-item`
* `mtkv.progress.xp.weights.corpse-search`
* `mtkv.progress.xp.weights.corpse-item`
* `mtkv.progress.xp.weights.evac-switch`
* `mtkv.progress.xp.weights.raid-minute`

### Extraction Multipliers

The following settings affect how raw experience is converted during settlement:

* `mtkv.progress.xp.multiplier.success-evac`
* `mtkv.progress.xp.multiplier.defeated-lost`
* `mtkv.progress.xp.multiplier.disconnect`

### Progression Rewards

The following settings affect level-up rewards:

* `mtkv.progress.reward.milestone-every`
* `mtkv.progress.reward.small.base-coins`
* `mtkv.progress.reward.small.per-level-coins`
* `mtkv.progress.reward.big.base-coins`
* `mtkv.progress.reward.big.per-level-coins`

## Battle Pass System

`mtkv.pass.enabled`

Purpose:

* Master switch for the battle pass system

`mtkv.pass.max-level`

Purpose:

* Maximum battle pass level

`mtkv.pass.unlock-cost.tokens`

Purpose:

* Tokens required to unlock the battle pass

The following settings affect rewards and token generation:

* `mtkv.pass.reward.normal.coins`
* `mtkv.pass.reward.premium.coins`
* `mtkv.pass.tokens.raid-base`
* `mtkv.pass.tokens.success-bonus`
* `mtkv.pass.tokens.level-up-per-level`

## Economy System

`mtkv.economy.enabled`

Purpose:

* Master switch for the economy system

`mtkv.economy.currency.display-name`
`mtkv.economy.currency.symbol`

Purpose:

* Currency name and icon display

`mtkv.economy.wallet.default-balance`
`mtkv.economy.wallet.max-balance`

Purpose:

* Player starting balance and wallet limit

`mtkv.economy.pay.enabled`

Purpose:

* Player transfer feature switch

`mtkv.economy.control.freeze-block-send`
`mtkv.economy.control.freeze-block-receive`

Purpose:

* Controls whether frozen players can send and receive payments

## Performance Tuning

This group primarily controls scanning, title refreshes, AI scheduling, and data write-back frequency:

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
This group of settings significantly affects server performance and update frequency. Do not make large adjustments unless you understand their meaning.
:::

## SCAV Name Pool

`mtkv.custom.scav.botsname`

Purpose:

* SCAV bot name pool

You can extend the list to match your server's style, but English or a reliably displayable character set is recommended.

## Complete Default File

```yml
# MinecraftTarkov Minecraft - Tarkov
# Main configuration file core.yml

## License
license.key: ""

# Basic settings
## Debug mode
mtkv.debug: false

## Language settings (currently only Simplified Chinese zh_cn is supported)
mtkv.basic.language: zh_cn

# Experimental modules
# Note: Experimental modules are unstable; use them with caution
## Corpse drop fix
## We only recommend enabling this feature on hybrid servers; do not enable it on vanilla servers!
mtkv.lab.corpsedropfix: false

## ALPHA-PMC allows AI players to fill empty raid slots
mtkv.lab.pmcbot: false

# Compatibility settings
## NMS disable protection mechanism
mtkv.compat.disable-pmc-on-incompatible-runtime: true
## Client admission policy
mtkv.compat.client-policy.mode: allow-supported-observe-others
mtkv.compat.client-policy.supported-brands: ["vanilla", "fabric", "forge"]
mtkv.compat.client-policy.warn-unknown-modded: true
## High-risk module policy for hybrid servers
mtkv.compat.hybrid-policy.pmc-mode: auto
mtkv.compat.hybrid-policy.corpse-mode: auto
## Whether to output client brand decision logs
mtkv.compat.debug-log-client-brand: false

# Custom settings
## TAB menu
## Whether to enable the plugin's built-in TAB menu
mtkv.custom.tab.render: true

# Statistics system
## Master switch
mtkv.stats.enabled: true
## Whether to automatically open the statistics menu after a raid ends
mtkv.stats.book-on-raid-end: true
## /mstats command switch
mtkv.stats.command.enabled: true

# Progression system
## Master switch
mtkv.progress.enabled: true
## Maximum level
mtkv.progress.max-level: 100

## Experience weights (rawXp)
### AI kills
mtkv.progress.xp.weights.ai-kill: 6
### Player kills
mtkv.progress.xp.weights.player-kill: 20
### Supply crate searches
mtkv.progress.xp.weights.lootbox-open: 5
### Supply crate item searches
mtkv.progress.xp.weights.lootbox-item: 1
### Corpse searches
mtkv.progress.xp.weights.corpse-search: 4
### Corpse item searches
mtkv.progress.xp.weights.corpse-item: 1
### Gate opening
mtkv.progress.xp.weights.evac-switch: 2
### Raid survival time (unit: time)
mtkv.progress.xp.weights.raid-minute: 2

## Extraction status multiplier: player's raw experience * multiplier = final experience gained
### Successful extraction
mtkv.progress.xp.multiplier.success-evac: 1.0
### Failed extraction
mtkv.progress.xp.multiplier.defeated-lost: 0.25
### Disconnect (quit game)
mtkv.progress.xp.multiplier.disconnect: 0.0

## Progression reward settings (Alpha)
mtkv.progress.reward.milestone-every: 5
mtkv.progress.reward.small.base-coins: 30
mtkv.progress.reward.small.per-level-coins: 5
mtkv.progress.reward.big.base-coins: 250
mtkv.progress.reward.big.per-level-coins: 20

# Battle pass system
## Master switch
mtkv.pass.enabled: true
## Maximum level
mtkv.pass.max-level: 100

## Unlock cost
mtkv.pass.unlock-cost.tokens: 2

## Reward settings
mtkv.pass.reward.normal.coins: 100
mtkv.pass.reward.premium.coins: 200

## Battle pass token acquisition
### Base per raid
mtkv.pass.tokens.raid-base: 1
### Extra for successful extraction
mtkv.pass.tokens.success-bonus: 1
### Extra progression reward
mtkv.pass.tokens.level-up-per-level: 2

# Economy system
## Master switch
mtkv.economy.enabled: true

## Currency display
mtkv.economy.currency.display-name: "Gold Coins"
mtkv.economy.currency.symbol: "🪙"

## Wallet limits
### Starting balance
mtkv.economy.wallet.default-balance: 0.00
mtkv.economy.wallet.max-balance: 999999999.99

## Player transfers
mtkv.economy.pay.enabled: true

## Freeze controls
### Transfers
mtkv.economy.control.freeze-block-send: true
### Receiving payments
mtkv.economy.control.freeze-block-receive: true

# Performance tuning
## Extraction point main loop scan frequency
mtkv.perf.evac-scan-interval-ticks: 10
## Extraction point title refresh frequency
mtkv.perf.evac-title-refresh-interval-ticks: 10
## Minimum title refresh frequency while preparing to enter a raid
mtkv.perf.raid-ready-title-interval-ticks: 2
## Minimum search progress refresh frequency
mtkv.perf.search-progress-interval-ticks: 2
## PMC view synchronization deduplication window
mtkv.perf.pmc-viewer-sync-coalesce-ticks: 2
## PMC AI scheduling frequency
mtkv.perf.pmc-tick-interval: 2
## Melee SCAV AI scheduling frequency
mtkv.perf.scav-melee-tick-interval: 2
## Player data batch write-back frequency
mtkv.perf.playerdata-flush-interval-ticks: 200
## Whether to output hot-path tuning logs
mtkv.perf.debug-log-hotpaths: false

# SCAV bots
## Bot name pool
mtkv.custom.scav.botsname: ["Nikita", "Pasha", "Ilya", "Sergey", "Viktor", "Kostya", "Sasha", "Artyom",
                            "Oleg", "Misha", "Yura", "Andrei", "Borya", "Dima", "Grisha", "Kolya", "Ruslan",
                            "Denis", "Timur", "Fyodor", "Anatoly", "Boris", "Maksim", "Pavel", "Vitya",
                            "Yegor", "Yuri"]
```
