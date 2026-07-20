---
title: "📋 Task Configuration File"
description: "Daily task and template configuration reference for tasks.yml"
---

# 📋 Task Configuration File

`tasks.yml` controls whether the task system is enabled, the daily reset time, assignment rules, and task template content.

## Basic Configuration

```yml
tasks:
  enabled: true
  timezone: Asia/Shanghai
  daily-reset: "00:00"
```

`tasks.enabled`

Purpose:

* Master switch for the task system

`tasks.timezone`

Purpose:

* Time zone used by the task system

Default value:

* `Asia/Shanghai`

`tasks.daily-reset`

Purpose:

* Daily task reset time

Recommendation:

* Keep this consistent with the time zone of your server's main player base

## Task Assignment Rules

`tasks.assignment.behavior-per-trader`

Purpose:

* Number of behavior-based tasks assigned to each trader

`tasks.assignment.delivery-per-trader`

Purpose:

* Number of delivery tasks assigned to each trader

`tasks.assignment.chain-active-min`
`tasks.assignment.chain-active-max`

Purpose:

* Minimum and maximum number of simultaneously active task chains

`tasks.assignment.resident-collection-target`
`tasks.assignment.resident-coin-target`

Purpose:

* Collection and coin target values for resident tasks

## Task Templates

Each entry under `tasks.templates` represents a task template that can be assigned by the system, for example:

```yml
- id: broker_raid_complete
  traderId: broker
  title: "Raid Record"
  description:
    - "Complete a raid and return safely to the hideout"
  metric: RAID_COMPLETE
  target: 2
  rewardCoins: "120.00"
  rewardRep: 0.01
```

### Common Fields

`id`

Purpose:

* Unique ID of the task template

`traderId`

Purpose:

* Trader this task belongs to

`title`
`description`

Purpose:

* Task title and description text

`metric`

Purpose:

* How task progress is counted, such as completing raids, searching loot boxes, killing AI, successfully extracting, and more

`target`

Purpose:

* Required task target amount

`rewardCoins`
`rewardRep`

Purpose:

* Coin and trader reputation rewards granted after completing the task
* Reputation is recommended to use two decimal places; default tasks generally use `0.01` to `0.03`

`rewardItems`

Purpose:

* Item rewards additionally granted after completing the task

### Additional Fields for Delivery Tasks

For delivery tasks such as `ITEM_DELIVER`, you will usually also see:

* `itemlabId`: ID of the item that must be handed in
* `deliveryMode`: Delivery mode

The delivery modes found in the current templates include:

* `normal`
* `strict`

General interpretation:

* `normal`: Standard delivery
* `strict`: Stricter source or condition validation

## Example Task Types

The current default templates include these typical task types:

* Complete a raid: `RAID_COMPLETE`
* Search loot boxes: `LOOTBOX_OPEN`
* Kill AI: `AI_KILL`
* Successfully extract: `SUCCESS_EVAC`
* Hand in items: `ITEM_DELIVER`

:::warning
Task templates usually integrate with traders, the item library, and the reputation system. When adding or modifying templates, make sure that `traderId` and `itemlabId` actually exist in your server content.
:::

## Usage Examples

### Example 1: A Basic Raid Task for the Broker

```yml
- id: broker_raid_complete
  traderId: broker
  title: "Raid Record"
  description:
    - "Complete a raid and return safely to the hideout"
  metric: RAID_COMPLETE
  target: 2
  rewardCoins: "120.00"
  rewardRep: 0.01
```

Suitable for:

* Guiding new players through the basic raid flow first
* Designing beginner-friendly daily tasks for the broker

### Example 2: A Strict Delivery Task

```yml
- id: armorer_delivery_strict
  traderId: armorer
  title: "Frontline Contract"
  description:
    - "Only supplies marked as originating from a raid are accepted"
  metric: ITEM_DELIVER
  target: 2
  itemlabId: COAL_BLOCK
  deliveryMode: strict
  rewardCoins: "260.00"
  rewardRep: 0.03
```

Suitable for:

* Creating stricter mid- to late-game delivery objectives
* Reinforcing the gameplay feel of having to bring supplies out of raids

## Complete Default File

```yml
tasks:
  enabled: true
  timezone: Asia/Shanghai
  daily-reset: "00:00"

  assignment:
    behavior-per-trader: 2
    delivery-per-trader: 1
    chain-active-min: 3
    chain-active-max: 5
    resident-collection-target: 10
    resident-coin-target: 10000

  templates:
    - id: broker_raid_complete
      traderId: broker
      title: "Raid Record"
      description:
        - "Complete a raid and return safely to the hideout"
      metric: RAID_COMPLETE
      target: 2
      rewardCoins: "120.00"
      rewardRep: 0.01
      rewardItems:
        - itemlabId: Torch
          amount: 1

    - id: broker_lootbox_scan
      traderId: broker
      title: "Storage Inventory"
      description:
        - "Search loot boxes and bring back useful resources"
      metric: LOOTBOX_OPEN
      target: 6
      rewardCoins: "140.00"
      rewardRep: 0.01
      rewardItems:
        - itemlabId: Sapling
          amount: 1

    - id: broker_delivery_normal
      traderId: broker
      title: "Miscellaneous Recycling"
      description:
        - "Hand common materials over to the broker"
      metric: ITEM_DELIVER
      target: 3
      itemlabId: Planks
      deliveryMode: normal
      rewardCoins: "160.00"
      rewardRep: 0.01
      rewardItems:
        - itemlabId: Bottle
          amount: 1

    - id: armorer_ai_kill
      traderId: armorer
      title: "Clear the Threat"
      description:
        - "Kill hostile AI in the active area"
      metric: AI_KILL
      target: 5
      rewardCoins: "180.00"
      rewardRep: 0.02
      rewardItems:
        - itemlabId: IRON_BLOCK
          amount: 1

    - id: armorer_success_evac
      traderId: armorer
      title: "Tactical Extraction"
      description:
        - "Extract successfully and bring back loot"
      metric: SUCCESS_EVAC
      target: 1
      rewardCoins: "220.00"
      rewardRep: 0.02
      rewardItems:
        - itemlabId: REDSTONE
          amount: 1

    - id: armorer_delivery_strict
      traderId: armorer
      title: "Frontline Contract"
      description:
        - "Only supplies marked as originating from a raid are accepted"
      metric: ITEM_DELIVER
      target: 2
      itemlabId: COAL_BLOCK
      deliveryMode: strict
      rewardCoins: "260.00"
      rewardRep: 0.03
      rewardItems:
        - itemlabId: GUNPOWDER
          amount: 1
```
