---
title: "⚙️ Configuration Overview"
description: "MinecraftTKV configuration file guide"
---

# ⚙️ Configuration Overview

MinecraftTKV configuration can broadly be divided into several categories:

* Core feature configuration: controls language, compatibility, economy, progression, battle pass, and performance
* Gameplay content configuration: controls whether systems such as maps, the market, tasks, and traders are available and how they operate
* Trader price tables: control trader buyback categories, hourly sale inventory, price fluctuations, and purchase requirements
* Data template configuration: controls loot templates, locations, runtime sessions, and related content

## Recommended Editing Order

When deploying a new server for the first time, configure it in the following order:

1. Edit `core.yml` first
2. Then configure `maps.yml`
3. Enable `market.yml` and `tasks.yml` as needed
4. Finally, expand more gameplay content configuration

## Files to Read First

* [Core configuration `core.yml`](/docs/config/core): master switches for the server's foundational experience
* [Map configuration `maps.yml`](/docs/config/maps): map count, map behavior, and match-specific logic
* [Market configuration `market.yml`](/docs/config/market): market switch, tax rate, price range, and GUI
* [Weapon system configuration `weapons.yml`](/docs/config/weapons): firearms, ammunition, attachments, armor penetration, and weapon shops
* [Keycard system configuration `keycards.yml`](/docs/config/keycards): keycard styles, sources, drops, and access-control use
* [Bot configuration `config/bot`](/docs/config/bot): SA/COB types, equipment, drops, pathfinding, and combat behavior
* [Task configuration `tasks.yml`](/docs/config/tasks): daily task refreshes, templates, and rewards
* [Debug configuration `debug.yml`](/docs/config/debug): used when troubleshooting compatibility issues

## Recommendations Before Editing

* Back up your configuration before making changes
* Restart or reload after changes, and confirm there are no YAML indentation errors
* Keep monetary amounts to two decimal places
* Pay attention to the indentation level of `-` in list configuration

:::tip
If you only want to get the server running first, prioritize `core.yml` and `maps.yml`; all other content can be filled in gradually later.
:::
