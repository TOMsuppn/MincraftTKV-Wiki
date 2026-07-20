---
title: "🤝 Trader Configuration"
description: "Trader system configuration guide for traders.yml and trader-prices.xlsx"
---

# 🤝 Trader Configuration

The trader system is configured through two files:

- `config/traders/traders.yml`: feature switches, dynamic pricing, and trader definitions.
- `config/traders/trader-prices.xlsx`: item buyback prices, trader sale prices, rotating inventory, and trader category permissions.

After making changes, run `/mtkv config validate` to check the configuration, then run `/mtkv config reload` to reload it.

## traders.yml

```yaml
traders:
  enabled: true
```

`enabled`: Master switch for the trader feature.

```yaml
  dynamic-pricing:
    enabled: true
    settlement-cadence: daily
    timezone: Asia/Shanghai
```

- `enabled`: Whether to enable dynamic buyback prices.
- `settlement-cadence`: Currently only supports `daily`; settlement semantics for other values are not defined.
- `timezone`: The time zone used by dynamic pricing.

```yaml
    defaults:
      daily-supply-target: 24
      min-multiplier: "0.70"
      max-multiplier: "1.10"
      oversupply-step: "0.08"
      recovery-step: "0.05"
      max-daily-drop: "0.18"
```

- `daily-supply-target`: Default daily supply target.
- `min-multiplier` / `max-multiplier`: Lower and upper bounds for the dynamic price multiplier.
- `oversupply-step`: Price reduction step when supply exceeds demand.
- `recovery-step`: Recovery step when supply returns.
- `max-daily-drop`: Maximum price decrease in a single settlement day.

`categories` can override the default dynamic-pricing parameters for `supply`, `valuable`, `armament`, `material`, and `keycard`:

```yaml
    categories:
      supply:
        daily-supply-target: 18
        min-multiplier: "0.75"
        max-multiplier: "1.05"
      armament:
        daily-supply-target: 10
        min-multiplier: "0.70"
        max-multiplier: "1.12"
```

Example trader definitions:

```yaml
  definitions:
    - id: broker
      displayName: "Kail"
      lore:
        - "§7Focuses on basic resources and buyback"
      levelThresholds: [0.00, 1.20, 3.00, 6.00]

    - id: armorer
      displayName: "Robin"
      lore:
        - "§7Focuses on combat resources and advanced materials"
      levelThresholds: [0.00, 1.38, 3.00, 6.00]
```

- `id`: Internal trader ID. It must match the “Trader ID” in the Excel “Trader Categories” worksheet.
- `displayName`: Display name of the trader.
- `lore`: Description shown in the trader interface.
- `levelThresholds`: Upgrade thresholds for each reputation level.

## trader-prices.xlsx

### Item Prices

In the “Item Prices” worksheet, buying back and selling are two independent switches:

- Column D, “Buyback Enabled”: determines whether the trader can buy back this item from players.
- Column K, “Sale Enabled”: determines whether the item enters the trader's hourly sale inventory.
- D and K do not affect each other; configure buyback only, sale only, or both.
- A blank K cell is treated as “sale not enabled”; you must explicitly enter `TRUE` for it to join the inventory.
- If an old sheet is completely missing column K, Itemlab import automatically adds it: existing rows are migrated using the original behavior of column D, while newly imported rows default to `FALSE`.

Meaning of the main columns:

| Column | Configuration | Description |
| --- | --- | --- |
| A | Item ID | Itemlab, firearm, ammunition, or weapon miscellaneous-item ID |
| B | Display Name | Used only for readability and management; not a unique identifier |
| C | Category | `supply`, `valuable`, `armament`, `material`, `keycard` |
| D | Buyback Enabled | `TRUE`/`FALSE`; controls player sales to the trader |
| E–G | Buyback Pricing | Base price, lower fluctuation limit, upper fluctuation limit |
| H–J | Buyback Preview | Formula-generated minimum, maximum, and average prices; no manual entry required |
| K | Sale Enabled | `TRUE`/`FALSE`; blank equals `FALSE` |
| L | Sale Weight | Higher weight means a higher chance of selection for the hourly inventory; `0` is never selected |
| M–N | Sale Requirements | Required reputation and required progression level |
| O–Q | Sale Pricing | Sale base price, lower fluctuation limit, upper fluctuation limit |

Fluctuation columns use percentage formatting and must satisfy `-100% < lower limit <= upper limit`; the base price must be greater than `0`. Duplicate item IDs are detected case-insensitively, so do not configure multiple rows for the same ID.

### Item ID Prefixes

Excel supports the following ID formats:

| Format | Source |
| --- | --- |
| `<ItemlabID>` | Compatible format: looks up Itemlab first, then unprefixed firearms |
| `itemlab:<ItemlabID>` | Explicitly references an `items.yml` item; recommended for mod items |
| `weapon:<ID>` or `gun:<ID>` | Firearm registry |
| `ammo:<ID>` | Ammunition registry |
| `weapon_misc:<ID>` or `misc:<ID>` | Weapon-system miscellaneous items |

When using the `itemlab:` prefix, enter the Itemlab ID after the colon, not the mod registry name. For example, if a template in `items.yml` has ID `ThermalBattery` and `namespaced-id` is `thermal:battery`, Excel should use `itemlab:ThermalBattery`.

`itemlab:` and bare Itemlab IDs, `gun:` and `weapon:`, and `misc:` and `weapon_misc:` are treated as aliases for the same item. This prevents duplicate price rows and the asymmetry of “can buy but cannot sell back.”

### Trader Categories

The “Trader Categories” worksheet determines which categories each trader can buy back, and also limits which sale items that trader can draw.

- “Trader ID” must match `definitions[].id` in `traders.yml`.
- The `supply`, `valuable`, `armament`, `material`, and `keycard` Boolean switches take priority over the legacy comma-separated “Purchase Categories” list.
- A switch cell set to `TRUE` enables that category; `FALSE` explicitly disables it. The comma-separated list is used only when the switch is blank.
- `keycard` is handled the same as the other four categories. If the trader should not trade keycards, explicitly set it to `FALSE`.

### Reloading and Hourly Inventory

Trader sale inventory normally rotates hourly. After changing Excel sale switches, weights, prices, requirements, categories, or Itemlab template quantities, run `/mtkv config reload`; the system detects inventory-source changes and regenerates the inventory even within the same hour, so there is no need to wait for the next hour.

If an item does not appear after reloading, check whether column K is `TRUE`, column L is greater than `0`, the sale base price is greater than `0`, the trader has the corresponding category enabled, and the Itemlab/firearm registry can create the item ID.
