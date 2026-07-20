---
title: "🏪 Market Configuration File"
description: "market.yml market system configuration guide"
---

# 🏪 Market Configuration File

`market.yml` controls whether the market system is enabled, player listing rules, price ranges, tax rates, and related GUI titles.

:::tip
For trader hourly inventory, price tables, reputation requirements, and buyback categories, see [Trader Configuration](./traders.md).
:::

## Basic Configuration

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

## Main Switch

`market.enabled`

Purpose:

* Master switch for the market system

Recommendation:

* If a new server does not plan to allow player trading yet, keep it disabled initially

## Listing Rules

`market.taxRate`

Purpose:

* Market tax rate

Default value:

* `0.05`, or 5%

`market.minPrice`
`market.maxPrice`

Purpose:

* Minimum and maximum prices allowed for a single listing

Recommendation:

* Amounts should be strings with two decimal places

`market.maxListingsPerPlayer`

Purpose:

* Maximum number of concurrent listings per player

`market.expireHours`

Purpose:

* Listing expiration time in hours

`market.allowDamagedItems`

Purpose:

* Whether items with durability damage may be listed

Server-owner recommendations:

* Disable it if you want a more standardized market
* Keep it enabled if you want more flexible gameplay

## GUI Configuration

`market.gui.enabled`

Purpose:

* Whether to enable the market graphical interface

`market.gui.pageSize`

Purpose:

* Single-page capacity of the listing interface

`market.gui.defaultPrice`

Purpose:

* Default price filled in when listing through the GUI

## GUI Titles

The following configuration is used to customize the title text for each market interface:

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
If you need consistent server terminology or visual style, this group of title configuration is a good place to organize first.
:::

## Beta.1 Configuration Structure

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

`enabled` controls the market feature, `taxRate` is the tax rate, `minPrice` and `maxPrice` define the price range, `maxListingsPerPlayer` is the maximum number of listings per player, `expireHours` is the expiration period, and `allowDamagedItems` controls whether items with durability damage may be listed.

## Complete Default File

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
      hub: "§lMarket & Traders"
      main: "Market Home"
      tasks-npc: "§8§lTasks / NPC"
      browse: "Market Listings"
      my: "My Listings"
      sell: "List Item"
      buy-confirm: "Purchase Confirmation"
      cancel-confirm: "Cancel Listing"
      price-anvil: "§8§lEdit Price"
      admin-main: "§8§lMarketAdmin"
      admin-list: "§8§lListing Management"
      admin-stats: "§8§lMarket Statistics"
      admin-remove-confirm: "§8§lForce Cancel Confirmation"
```
