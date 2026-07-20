---
title: "🔫 Weapon System Configuration (weapons.yml)"
description: "Guide to weapons.yml and gun, ammunition, and attachment configuration"
---

# Weapon System Configuration (weapons.yml)

The weapon system’s main configuration file is `config/weapons.yml` in the plugin data directory. Separate configurations for guns, ammunition, and attachments are in `config/weapons/`.

## Configuration files

| File or directory | Purpose |
| --- | --- |
| `weapons.yml` | Global weapon-system switch, firing, scopes, reloading, attachments, armor penetration, and compatibility settings |
| `weapons/guns/*.yml` | Defines gun attributes and gun items |
| `weapons/ammo/*.yml` | Defines ammunition types and ammunition items |
| `weapons/attachments/*.yml` | Defines gun attachments and attribute modifiers |
| `weapons/weapons-advanced.yml` | Charging, reloading, and advanced ballistics settings |
| `weapons/weapons-misc.yml` | Grenade, medkit, and melee-item settings |
| `weapons/weapons-armor.yml` | Armor durability, repairs, armor levels, and penetration settings |
| `weapons/weapons-shop.yml` | Weapon-shop settings |
| `weapons/weapons-crafting.yml` | Weapon-crafting settings |

After editing, use `/mtkv config reload` to reload all configuration, or `/mtkv weapon reload` to reload only gun, ammunition, and attachment configuration.

Gun IDs, ammunition IDs, and attachment IDs are distinct from display names. Use the value of the `name` field when referencing them.

## Main configuration (weapons.yml)

### Configuration structure example:

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
````

### Common main settings

| Setting | Description |
| --- | --- |
| `enable-recoil` | Enables recoil. |
| `enable-durability` | Enables weapon durability. |
| `unlimited-ammo` | Enables unlimited ammunition for testing. |
| `headshot-multiplier` | Damage multiplier for headshots. |
| `gunshot-volume-multiplier` | Global gunshot-volume multiplier. |
| `scope.enable-zoom` | Enables scope zoom. |
| `scope.zoom-move-speed` | Movement speed while zoomed. |
| `scope.accuracy-bonus` | Accuracy bonus while using a scope. |
| `reload.enable-animations` | Enables reload animations. |
| `reload.enable-progress-bar` | Shows reload progress. |
| `reload.cancel-on-damage` | Cancels reload when damaged. |
| `reload.cancel-on-move` | Cancels reload when moving. |
| `reload.tactical-reload` | Enables tactical reload. |
| `reload.emergency-reload` | Enables emergency reload. |
| `reload.cooldown-ms` | Reload cooldown in milliseconds. |
| `attachments.enabled` | Enables attachments. |
| `attachments.allow-stacking` | Allows attachment effects to stack. |
| `attachments.drop-chance` | Default attachment drop chance. |
| `armor-penetration.enabled` | Enables armor-penetration calculation. |
| `armor-penetration.calculation-mode` | Armor-penetration calculation mode. |

## Guns, ammunition, and attachments

Each gun file defines a unique `name`, display information, compatible ammunition, magazine capacity, damage, fire rate, recoil, and related behavior. Ammunition files define their unique ID, display information, damage/penetration properties, and compatible guns. Attachment files define their unique ID, allowed slots, and the modifiers applied while attached.

When configuring references, ensure IDs exactly match the corresponding `name` values. A display name is only user-facing text and cannot replace an internal ID.

## Advanced, miscellaneous, armor, shop, and crafting configuration

`weapons-advanced.yml` controls charging, reload behavior, and advanced projectile behavior. `weapons-misc.yml` manages grenades, medkits, and melee items. `weapons-armor.yml` controls armor durability, repairs, levels, and penetration. `weapons-shop.yml` controls shop offerings and prices, while `weapons-crafting.yml` controls weapon crafting recipes.

:::warning
Weapon-system settings are interdependent. After changing IDs, compatibility, ammunition, or attachment settings, reload the configuration and test the affected gun in game before deploying to production.
:::
