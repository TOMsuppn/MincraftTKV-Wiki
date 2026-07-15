---
title: "🏪 市场配置文件"
description: "market.yml 市场系统配置说明"
---

# 🏪 市场配置文件

`market.yml` 用于控制市场系统是否启用、玩家挂单规则、价格范围、税率以及相关 GUI 标题。

:::tip
商人小时库存、价格表、好感度门槛和收购分类请查看 [商人配置文件](./traders.md)。
:::

## 基础配置

```yml
market:
  enabled: false
  taxRate: 0.05
  minPrice: "1.00"
  maxPrice: "999999999.99"
  maxListingsPerPlayer: 10
  expireHours: 48
  allowDamagedItems: true
```

## 核心开关

`market.enabled`

作用：

* 市场系统总开关

建议：

* 新服如果暂时不打算开放玩家交易，可以先保持关闭

## 挂单规则

`market.taxRate`

作用：

* 市场税率

默认值：

* `0.05`，即 5%

`market.minPrice`
`market.maxPrice`

作用：

* 单次挂单允许的最小与最大价格

建议：

* 金额建议使用字符串并保留两位小数

`market.maxListingsPerPlayer`

作用：

* 每位玩家最多可同时存在的挂单数量

`market.expireHours`

作用：

* 挂单过期时间，单位为小时

`market.allowDamagedItems`

作用：

* 是否允许上架有耐久损耗的物品

服主建议：

* 如果你希望市场更标准化，可以关闭
* 如果希望玩法更自由，可以保持开启

## GUI 配置

`market.gui.enabled`

作用：

* 是否启用市场图形界面

`market.gui.pageSize`

作用：

* 列表界面单页容量

`market.gui.defaultPrice`

作用：

* GUI 上架时默认填入的价格

## GUI 标题

以下配置用于自定义市场各界面的标题文本：

* `market.gui.titles.hub`
* `market.gui.titles.main`
* `market.gui.titles.tasks-npc`
* `market.gui.titles.browse`
* `market.gui.titles.my`
* `market.gui.titles.sell`
* `market.gui.titles.buy-confirm`
* `market.gui.titles.cancel-confirm`
* `market.gui.titles.price-anvil`
* `market.gui.titles.admin-main`
* `market.gui.titles.admin-list`
* `market.gui.titles.admin-stats`
* `market.gui.titles.admin-remove-confirm`

:::tip
如果你需要统一服务器术语或美术风格，这一组标题配置很适合优先整理。
:::

## Beta.1 配置结构

```yml
market:
  enabled: true
  taxRate: 0.05
  minPrice: "1.00"
  maxPrice: "999999999.99"
  maxListingsPerPlayer: 10
  expireHours: 48
  allowDamagedItems: true
```

`enabled` 控制市场功能，`taxRate` 为税率，`minPrice` 与 `maxPrice` 为价格范围，`maxListingsPerPlayer` 为每位玩家最大上架数，`expireHours` 为过期时长，`allowDamagedItems` 控制是否允许上架有耐久损耗的物品。

## 完整默认文件

```yml
market:
  enabled: false
  taxRate: 0.05
  minPrice: "1.00"
  maxPrice: "999999999.99"
  maxListingsPerPlayer: 10
  expireHours: 48
  allowDamagedItems: true

  gui:
    enabled: true
    pageSize: 45
    defaultPrice: "100.00"
    titles:
      hub: "§l市场与商人"
      main: "市场主页"
      tasks-npc: "§8§l任务 / NPC"
      browse: "市场列表"
      my: "我的挂单"
      sell: "上架物品"
      buy-confirm: "购买确认"
      cancel-confirm: "下架确认"
      price-anvil: "§8§l编辑价格"
      admin-main: "§8§lMarketAdmin"
      admin-list: "§8§l挂单管理"
      admin-stats: "§8§l市场统计"
      admin-remove-confirm: "§8§l强制下架确认"
```
