---
title: "📋 任务配置文件"
description: "tasks.yml 每日任务与模板配置说明"
---

# 📋 任务配置文件

`tasks.yml` 用于控制任务系统是否启用、每日刷新时间、分配规则以及任务模板内容。

## 基础配置

```yml
tasks:
  enabled: true
  timezone: Asia/Shanghai
  daily-reset: "00:00"
```

`tasks.enabled`

作用：

* 任务系统总开关

`tasks.timezone`

作用：

* 任务系统使用的时区

默认值：

* `Asia/Shanghai`

`tasks.daily-reset`

作用：

* 每日任务刷新时间

建议：

* 建议与服务器主要玩家群体所处时区保持一致

## 任务分配规则

`tasks.assignment.behavior-per-trader`

作用：

* 每位商人分配的行为类任务数量

`tasks.assignment.delivery-per-trader`

作用：

* 每位商人分配的交付类任务数量

`tasks.assignment.chain-active-min`
`tasks.assignment.chain-active-max`

作用：

* 任务链同时激活数量的最小值与最大值

`tasks.assignment.resident-collection-target`
`tasks.assignment.resident-coin-target`

作用：

* 常驻类任务的收集与金币目标值

## 任务模板

`tasks.templates` 下的每一项都代表一个可被系统分配的任务模板，例如：

```yml
- id: broker_raid_complete
  traderId: broker
  title: "跑图记录"
  description:
    - "完成战局并安全回到藏身处"
  metric: RAID_COMPLETE
  target: 2
  rewardCoins: "120.00"
  rewardRep: 0.01
```

### 常见字段

`id`

作用：

* 任务模板唯一 ID

`traderId`

作用：

* 该任务所属商人

`title`
`description`

作用：

* 任务标题与描述文本

`metric`

作用：

* 任务计数方式，例如完成战局、搜索物资箱、击杀 AI、成功撤离等

`target`

作用：

* 任务目标数量

`rewardCoins`
`rewardRep`

作用：

* 完成任务后给予的金币与商人好感度奖励
* 好感度建议使用两位小数，默认任务通常为 `0.01` 到 `0.03`

`rewardItems`

作用：

* 完成任务后附带发放的物品奖励

### 交付类任务附加字段

对于 `ITEM_DELIVER` 这类交付任务，通常还会出现：

* `itemlabId`：要求上交的物品 ID
* `deliveryMode`：交付模式

当前模板中出现的交付模式包括：

* `normal`
* `strict`

一般理解：

* `normal`：普通交付
* `strict`：更严格的来源或条件校验

## 示例任务类型

当前默认模板中可以看到一些典型任务方向：

* 完成战局：`RAID_COMPLETE`
* 搜索物资箱：`LOOTBOX_OPEN`
* 击杀 AI：`AI_KILL`
* 成功撤离：`SUCCESS_EVAC`
* 上交物品：`ITEM_DELIVER`

:::warning
任务模板通常会和商人、物品库、好感度系统联动。新增或修改模板时，请确认 `traderId` 和 `itemlabId` 在你的服务器内容里确实存在。
:::

## 使用实例

### 示例 1：中间商的基础跑图任务

```yml
- id: broker_raid_complete
  traderId: broker
  title: "跑图记录"
  description:
    - "完成战局并安全回到藏身处"
  metric: RAID_COMPLETE
  target: 2
  rewardCoins: "120.00"
  rewardRep: 0.01
```

适合用于：

* 引导新玩家先完成基础战局流程
* 给中间商设计偏入门向的每日任务

### 示例 2：严格交付类任务

```yml
- id: armorer_delivery_strict
  traderId: armorer
  title: "前线委托"
  description:
    - "只接受带有战局来源标记的物资"
  metric: ITEM_DELIVER
  target: 2
  itemlabId: COAL_BLOCK
  deliveryMode: strict
  rewardCoins: "260.00"
  rewardRep: 0.03
```

适合用于：

* 做中后期更严格的交付目标
* 强化“必须从战局中带出物资”的玩法感

## 完整默认文件

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
      title: "跑图记录"
      description:
        - "完成战局并安全回到藏身处"
      metric: RAID_COMPLETE
      target: 2
      rewardCoins: "120.00"
      rewardRep: 0.01
      rewardItems:
        - itemlabId: Torch
          amount: 1

    - id: broker_lootbox_scan
      traderId: broker
      title: "仓储盘点"
      description:
        - "搜索物资箱，带回可用资源"
      metric: LOOTBOX_OPEN
      target: 6
      rewardCoins: "140.00"
      rewardRep: 0.01
      rewardItems:
        - itemlabId: Sapling
          amount: 1

    - id: broker_delivery_normal
      traderId: broker
      title: "杂项回收"
      description:
        - "上交常见材料给中间商"
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
      title: "清理威胁"
      description:
        - "击杀活动区域内的敌对AI"
      metric: AI_KILL
      target: 5
      rewardCoins: "180.00"
      rewardRep: 0.02
      rewardItems:
        - itemlabId: IRON_BLOCK
          amount: 1

    - id: armorer_success_evac
      traderId: armorer
      title: "战术撤离"
      description:
        - "成功撤离并带回战利品"
      metric: SUCCESS_EVAC
      target: 1
      rewardCoins: "220.00"
      rewardRep: 0.02
      rewardItems:
        - itemlabId: REDSTONE
          amount: 1

    - id: armorer_delivery_strict
      traderId: armorer
      title: "前线委托"
      description:
        - "只接受带有战局来源标记的物资"
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
