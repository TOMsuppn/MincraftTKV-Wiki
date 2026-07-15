---
title: "🤝 商人配置文件"
description: "traders.yml 与 trader-prices.xlsx 商人系统配置说明"
---

# 🤝 商人配置文件

商人系统由 `config/traders/traders.yml` 和 `config/traders/trader-prices.xlsx` 共同控制。

`traders.yml` 负责商人基础信息、显示名称和好感度等级门槛；`trader-prices.xlsx` 负责物品分类、价格、浮动范围、出售池和收购分类。

## 好感度

好感度范围为 `0.00` 到 `6.00`。

* 玩家数据内部按整数分保存，例如 `1.25` 会保存为 `125`
* GUI、命令和配置说明统一显示为两位小数
* 默认任务奖励通常只增加 `0.01` 到 `0.03`

旧版本整数声望会在配置迁移时按每个商人的旧最高等级门槛压缩到 `6.00`。

## 商人定义

```yml
traders:
  enabled: true
  definitions:
    - id: broker
      displayName: "Kail"
      lore:
        - "§7偏向基础资源与回收"
      levelThresholds: [0.00, 1.20, 3.00, 6.00]
```

`levelThresholds`

作用：

* 商人等级门槛
* 建议直接写好感度小数，例如 `1.20`

## 小时出售库存

商人出售不再主要读取 `traders.yml` 中的固定 `offers`。

系统会按服务器时区每小时整点，为每个商人生成一批全服共享出售库存：

* 每个商人每小时最多生成 45 个出售格
* 每个格子是一个独立商品
* 玩家购买后，该格子会标记为售出
* 已售商品对其他玩家不可见，也不能再次购买
* 打开的商人界面会在购买后或刷新后重新渲染

库存状态保存在：

```text
data/traders/stock.yml
```

## 价格表：物品价格

`trader-prices.xlsx` 的 `物品价格` sheet 支持以下列：

* `物品ID`：Itemlab 物品 ID
* `分类`：物品分类，例如 `supply`、`valuable`、`armament`、`material`
* `启用`：是否启用该价格行
* `基础价`：基准价格
* `浮动下限%`、`浮动上限%`：每次报价或刷新出售库存时的价格波动范围
* `出售启用`：可选；为空时默认跟随 `启用`
* `出售权重`：可选；为空时默认 `1`
* `所需好感度`：可选；为空时默认 `0.00`
* `所需进度等级`：可选；为空时默认 `0`

出售价格会在小时库存生成时固定下来。该小时内同一格商品价格不会继续波动。

## 价格表：商人分类

`商人分类` sheet 决定商人能处理哪些物品分类。

同一分类配置同时影响：

* 商人收购玩家物品
* 商人小时出售库存的随机候选池

例如 `broker` 开启 `supply,valuable,material` 后，只会从这些分类里随机出售物品，也只会收购这些分类。

## 购买门槛

出售商品可以要求：

* 商人好感度达到 `所需好感度`
* 玩家进度等级达到 `所需进度等级`

未达门槛时，商品仍会显示，但会标记为锁定；点击只会提示缺少的条件，不会进入扣款流程。

## Beta.1 配置结构补充

以下配置用于控制动态定价、分类供货和商人定义：

```yml
traders:
  enabled: true
  dynamic-pricing:
    enabled: true
    settlement-cadence: daily
    timezone: Asia/Shanghai
    defaults:
      daily-supply-target: 24
      min-multiplier: "0.70"
      max-multiplier: "1.10"
      oversupply-step: "0.08"
      recovery-step: "0.05"
      max-daily-drop: "0.18"
  categories:
    supply:
      daily-supply-target: 18
      min-multiplier: "0.75"
      max-multiplier: "1.05"
    valuable:
      daily-supply-target: 12
      min-multiplier: "0.70"
      max-multiplier: "1.10"
    material:
      daily-supply-target: 28
      min-multiplier: "0.70"
      max-multiplier: "1.08"
    armament:
      daily-supply-target: 10
      min-multiplier: "0.70"
      max-multiplier: "1.12"
```

* `dynamic-pricing.enabled`：启用动态定价；`settlement-cadence` 为价格刷新间隔；`timezone` 为结算时区。
* `daily-supply-target`：每日供货数量；`min-multiplier` 与 `max-multiplier`：价格倍率范围。
* `oversupply-step`：供过于求时价格下降幅度；`recovery-step`：供应恢复时价格上涨幅度；`max-daily-drop`：单日最大降价幅度。

商人定义示例：

```yml
definitions:
  - id: broker
    displayName: "Kail"
    lore:
      - "§7偏向基础资源与回收"
    levelThresholds: [0.00, 1.20, 3.00, 6.00]
```

`id` 是商人内部 ID，`displayName` 是显示名称，`levelThresholds` 是好感度等级门槛。
