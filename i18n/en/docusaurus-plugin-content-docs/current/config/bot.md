---
title: "🤖 Bot Configuration File (config/bot)"
description: "Configuration reference for SA and COB Bot types, behavior, loadouts, loot, and debugging"
---

# Bot Configuration File (config/bot)

Bot configuration files are located in the `config/bot/` folder under the plugin data directory. They configure the attributes, behavior, loadouts, loot, and debugging parameters of Security Armed Forces (SA) and Scavengers (COB).

## Configuration files at a glance

| File | Purpose |
| --- | --- |
| `bot-types.yml` | Defines Bot types and the attribute profiles, loadouts, loot tables, and skin pools referenced by each type |
| `attributes.yml` | Defines reusable attribute profiles |
| `loadouts.yml` | Defines SA loadout templates |
| `cob-loadouts.yml` | Defines standalone COB loadout templates |
| `loot.yml` | Defines SA death loot tables |
| `cob.yml` | Defines COB names, skins, loot, and compatibility types |
| `skins.yml` | Defines skin pools for SA Bots |
| `pathing.yml` | Defines pathfinding and terrain traversal parameters |
| `combat.yml` | Defines basic attack, target-memory, and firearm-combat parameters |
| `tactical.yml` | Defines targeting, engagement, looting, and evacuation behavior for tactical Bots |
| `difficulty.yml` | Defines dynamic difficulty multipliers |
| `debug.yml` | Defines Bot debug commands and logging switches |

Configurations reference one another through IDs. If a reference does not exist, a default value will be used or the corresponding feature cannot be loaded. After changes, use `/mtkv config reload` to reload the configuration.

## Bot AI v2 switches (`config/core.yml`)

The rollout switches for the new Bot engine are located in `config/core.yml`, not in the `config/bot/` directory:

```yaml
mtkv.ai.engine-v2: true
mtkv.ai.motion-v2: true
mtkv.ai.async-pathing: false
mtkv.ai.viewer-sync-v2: true
```

### Hybrid-server COB motion-model switch

```yaml
# COB motion model on different server cores
mtkv.compat.hybrid-policy.cob-motion-mode: auto
```

**`mtkv.ai.engine-v2`**: Enables the shared staggered scheduler, lifecycle management, and hierarchical state machine for SA/COB.

**`mtkv.ai.motion-v2`**: Enables the SA motion controller that runs every server tick. Behavior logic only submits movement intent; the motion controller centrally handles gravity, terrain collisions, and knockback.

**`mtkv.ai.async-pathing`**: Enables snapshot-based asynchronous pathfinding. Disabled by default; enable it only after the server-start capability self-check passes.

**`mtkv.ai.viewer-sync-v2`**: Enables observer-range differential synchronization, relative movement, and dirty-packet merging.

All four switches can be rolled back independently. `async-workers` creates its thread pool when the plugin starts, so changing it requires a server restart; the other settings can first be reloaded with `/mtkv config reload`, though reloading after a wave ends is still recommended in production.

### Hybrid-server COB motion model

`mtkv.compat.hybrid-policy.cob-motion-mode` controls the COB model and motion authority:

- `auto` (default): Hybrid servers such as Arclight and Mohist use `kinematic-single`; Paper and Spigot use `native-mirror`.
- `kinematic-single`: Generates only a packet-only PlayerNPC and a non-collidable ArmorStand hit proxy. It does not generate hidden Pillagers/Vindicators or register the NMS Player with `ServerLevel`. Movement, block collision, gravity, pathfinding, and knockback are all handled by the plugin motion controller; players will not be pushed away by entity collision when approaching or passing through a COB.
- `native-mirror`: Retains native pathfinding for the hidden Mob and mirrors the final position to the PlayerNPC. This is mainly intended for Paper/Spigot or compatibility troubleshooting.

The plugin checks PlayerInfo, metadata, equipment, observer synchronization, damage entry points, and hit proxies on startup and when spawning. If the capability check for a single model fails, incomplete models are cleaned up and it falls back to `native-mirror`; the console emits only one high-priority warning. The warning also explains that entity collision may reappear on hybrid servers after fallback. After changing this setting, restart the server and re-enter a match to verify it.

`combat.collision` in `config/bot/combat.yml` only controls collisions between Bots and blocks/terrain; it does not enable entity pushing between Bots and players.

## Bot types (`bot-types.yml`)

### Configuration example:

````
types:
  sa_tactical:
    behavior: tactical
    faction: sa
    attribute-profile: sa_medium
    path-strategy: FASTEST
    loadout: rifle_light
    loot-table: sa_default
    skins: [tactical]
    names:
      - Ranger
      - Viper
````

**ID under `types`**: The internal Bot type ID, for example `sa_tactical` or `cob_normal`.

**behavior**: Bot behavior type. Can be `tactical`, `killer`, `sneak`, or `offline_player`.

**faction**: Faction identifier. SA uses `sa`; COB uses `cob`.

**attribute-profile**: References an attribute profile under `profiles` in `attributes.yml`.

**path-strategy**: Pathfinding strategy. Can be `SHORTEST`, `FASTEST`, `SAFEST`, `AGGRESSIVE`, or `SCRIPTED_STABLE`.

**loadout**: References a loadout template. SA types reference `loadouts.yml`; COB types reference `cob-loadouts.yml`.

**loot-table**: SA types reference a loot table under `tables` in `loot.yml`; COB types usually use `cob_normal`, `cob_sniper`, `cob_boss`, or `cob_default` provided by `cob.yml`.

**skins**: References a skin-pool ID in `skins.yml`.

**names**: List of names randomly used by this type.

### Override attributes individually

````
  sa_custom:
    behavior: killer
    faction: sa
    attribute-profile: sa_medium
    attributes:
      max-health: 40.0
      damage-reduction: 0.20
    path-strategy: AGGRESSIVE
    loadout: heavy_support
    loot-table: sa_default
````

Fields specified under `attributes:` override the corresponding fields in `attribute-profile`; unspecified fields continue to use the attribute-profile values.

**attributes.max-health**: Maximum health.

**attributes.armor**: Armor value.

**attributes.damage-reduction**: Damage-reduction ratio; `0.20` means 20% damage reduction.

**attributes.interaction-range**: Interaction distance, in blocks.

**attributes.walk-speed**: Walking speed.

**attributes.sprint-speed**: Sprinting speed.

**attributes.sneak-speed**: Sneaking speed.

## Attribute profiles (`attributes.yml`)

### Configuration example:

````
profiles:
  sa_medium:
    max-health: 24.0
    armor: 4.0
    damage-reduction: 0.08
    interaction-range: 3.0
    walk-speed: 0.10
    sprint-speed: 0.2806
    sneak-speed: 0.05
````

**ID under `profiles`**: Attribute-profile ID. It must correspond to `attribute-profile` in `bot-types.yml`.

**max-health**: Maximum health.

**armor**: Armor value.

**damage-reduction**: Damage-reduction ratio, typically from `0.0` to `1.0`.

**interaction-range**: Interaction distance, in blocks.

**walk-speed**: Walking speed.

**sprint-speed**: Sprinting speed.

**sneak-speed**: Sneaking speed.

## SA loadout templates (`loadouts.yml`)

### Configuration example:

````
templates:
  rifle_light:
    weight: 28
    drop-chances:
      primary: 0.30
      secondary: 0.45
      armor: 0.35
      items: 0.70
      weapons:
        m4a1s: 0.22
      item-types:
        medkit: 0.85
    primary:
      m4a1s: 0.35
      m16: 0.25
    secondary:
      glock: 0.55
      p30: 0.30
    armor:
      helmet: CHAINMAIL_HELMET
      chest: IRON_CHESTPLATE
      legs: CHAINMAIL_LEGGINGS
      boots: IRON_BOOTS
    items:
      - type: 556
        min: 96
        max: 160
      - type: medkit
        min: 1
        max: 2
        dropChance: 0.85
````

**ID under `templates`**: Loadout-template ID. It must correspond to `loadout` in `bot-types.yml`.

**weight**: Weighted random-selection weight for this template. Higher values make it more likely to be selected.

**primary**: Primary-weapon pool. Keys are firearm IDs; values are the firearm weights within the template.

**secondary**: Secondary-weapon pool. Keys are firearm IDs; values are the firearm weights within the template.

**armor.helmet/chest/legs/boots**: Minecraft material names for the helmet, chestplate, leggings, and boots.

**items**: List of loadout items. `type` is the ID for ammunition, medkits, grenades, or other items.

**min / max**: Minimum and maximum generated quantity.

**drop-chances.primary**: Death-drop chance for the primary weapon.

**drop-chances.secondary**: Death-drop chance for the secondary weapon.

**drop-chances.armor**: Death-drop chance for armor.

**drop-chances.items**: Default death-drop chance for template items.

**drop-chances.weapons**: Overrides the drop chance by weapon ID.

**drop-chances.item-types**: Overrides the drop chance by item `type`.

**dropChance**: Drop chance for an individual item; overrides `drop-chances.items`.

Primary- and secondary-weapon IDs must correspond to firearms registered in `config/weapons/`; item `type` must use ammunition, medical-item, or other item IDs supported by the plugin.

## Standalone COB loadouts (`cob-loadouts.yml`)

The structure of `cob-loadouts.yml` is essentially the same as `loadouts.yml`, but it is used only by `cob.types.<type>.loadout` in `cob.yml`.

````
templates:
  rifle_light:
    weight: 1
    primary:
      ak47: 0.40
      ak47u: 0.30
    secondary:
      glock: 0.60
    armor:
      helmet: CHAINMAIL_HELMET
      chest: IRON_CHESTPLATE
      legs: CHAINMAIL_LEGGINGS
      boots: IRON_BOOTS
    items:
      - type: 762
        min: 64
        max: 128
````

**ID under `templates`**: COB loadout-template ID. It must correspond to `loadout` in `cob.yml`.

**weight, primary, secondary, armor, items**: Have the same meaning as in `loadouts.yml`.

## SA loot tables (`loot.yml`)

### Configuration example:

````
tables:
  sa_default:
    use-loadout-drops: true
    corpse-owner-name: "SA-Bot"
    itemlab-loot:
      enabled: true
      max-items: 5
      category-chances:
        material: 0.45
        supply: 0.30
        valuable: 0.18
        armament: 0.08
      value-adjust:
        value-divisor: 250.0
        min-multiplier: 0.08
      items: []
    extra-drops: []
````

**ID under `tables`**: Loot-table ID. It must correspond to `loot-table` in `bot-types.yml`.

**use-loadout-drops**: Whether to use the death-drop chances from the loadout template.

**corpse-owner-name**: Owner name displayed by the corpse loot container.

**itemlab-loot.enabled**: Whether to enable automatic Itemlab drops.

**itemlab-loot.max-items**: Maximum number of items from automatic Itemlab drops; up to 54 is supported.

**category-chances**: Independent selection chances for item categories. Can include `material`, `supply`, `valuable`, `armament`, and `keycard`.

**value-adjust.value-divisor**: Divisor for item-value decay calculations. Higher values make high-value item weights decrease more slowly.

**value-adjust.min-multiplier**: Minimum weight multiplier for high-value items.

**extra-drops**: List of extra drops.

### Extra-drop syntax

````
extra-drops:
  - DIAMOND
  - itemlab: lab_keycard_tier_1
  - material: EMERALD
    min: 1
    max: 3
    chance: 0.25
  - itemlab: Planks
    amount: 2
    chance: 0.50
````

**DIAMOND**: Enter the Minecraft material name directly.

**itemlab**: Calls an item-library ID from `config/itemlab/items.yml`.

**material**: Minecraft material name.

**amount**: Fixed drop quantity; alternatively, use `min` and `max` for a random quantity.

**chance**: Chance for this drop entry.

### Explicitly specify the Itemlab item pool

````
      items:
        - itemlabId: Planks
          category: material
          min: 1
          max: 2
          value: 20
          chance: 1.0
````

**itemlabId**: Item-library ID.

**category**: Item category.

**min / max**: Random drop-quantity range.

**value**: Item value used for high-value decay calculations.

**chance**: Weight of this item within the category item pool.

When `items` is empty, items are automatically selected from the Itemlab item library by item category.

## COB configuration (`cob.yml`)

### Configuration example:

````
cob:
  skins:
    normal: cob_normal
    sniper: cob_sniper
    boss: cob_boss
    sword: cob_sword
  loot:
    enabled: true
    max-items: 5
    category-chances:
      material: 0.45
      supply: 0.30
      valuable: 0.18
      armament: 0.08
      keycard: 0.01
    weapon-drop-chance: 0.08
    weapons:
      glock: 0.35
      makarov: 0.35
    value-adjust:
      value-divisor: 250.0
      min-multiplier: 0.08
````

**cob.skins.normal/sniper/boss/sword**: Skin IDs used by normal, sniper, Boss, and swordfighter COBs.

**cob.loot.enabled**: Whether to enable extra COB drops.

**cob.loot.max-items**: Maximum number of extra items generated by one COB.

**cob.loot.category-chances**: Selection chances for each item category.

**cob.loot.weapon-drop-chance**: Chance that a COB drops an extra firearm.

**cob.loot.weapons**: Firearm IDs and their selection weights.

**cob.loot.value-adjust**: Weight-decay parameters for high-value items; has the same meaning as in `loot.yml`.

**cob.items**: Explicitly specifies the COB Itemlab item pool. Its syntax is the same as `itemlab-loot.items` in `loot.yml`.

### COB types

````
  types:
    normal:
      names:
        - Nikita
        - Pasha
      weapon: ak47
      loadout: rifle_light
      armor:
        helmet: CHAINMAIL_HELMET
        chest: IRON_CHESTPLATE
        legs: CHAINMAIL_LEGGINGS
        boots: IRON_BOOTS
````

**ID under `types`**: COB type ID, for example `normal`, `sniper`, `boss`, or `sword`.

**names**: Random name list for this type.

**weapon**: Default weapon ID used in compatibility mode.

**loadout**: References a loadout-template ID in `cob-loadouts.yml`.

**armor.helmet/chest/legs/boots**: Minecraft material names for this type's default armor.

## Skin pools (`skins.yml`)

### Configuration example:

````
skins:
  killer: []
  tactical: []
  sneak: []
  offline_player: []
````

**killer**: Skin pool used by the `killer` type.

**tactical**: Skin pool used by the `tactical` type.

**sneak**: Skin pool used by the `sneak` type.

**offline_player**: Skin pool used by the offline-player type.

Contents of a skin pool are skin names or skin configuration IDs. The corresponding skin resources must be registered in the AI skin configuration already present on the server.

## Pathfinding configuration (`pathing.yml`)

### Configuration example:

````
pathing:
  default-strategy: FASTEST
  navigation-mode: native-first
  max-search-distance: 64
  max-search-nodes: 500
  async-workers: 2
  stuck-repath-ticks: 20
  viewer-active-distance: 64.0
  passable-soft-blocks: true
  doors:
    open-blocking-doors: true
    close-after-passing: true
  terrain:
    allow-stairs: true
    allow-slabs: true
    allow-ladders: true
    allow-one-block-jump: true
    max-controlled-fall: 3
````

**default-strategy**: Default pathfinding strategy.

**navigation-mode**: Navigation implementation. Can be `native-first`, `native-only`, `villager-fallback`, or `legacy-villager`.

**max-search-distance**: Maximum search distance for one pathfinding attempt, in blocks.

**max-search-nodes**: Maximum search-node count for one pathfinding attempt.

**async-workers**: Number of asynchronous pathfinding workers. Can be `1`–`4`; default is `2`. Changes require a server restart.

**stuck-repath-ticks**: Number of real server ticks to wait before entering stuck recovery when movement intent exists but displacement is insufficient.

**viewer-active-distance**: Immediately wakes a Bot when a player enters this distance; defaults to `64.0` blocks. It enters the sleep heartbeat after the player leaves `72` blocks for `40` ticks.

**passable-soft-blocks**: Whether soft blocks are treated as passable.

**doors.open-blocking-doors**: Whether to automatically open doors blocking a path.

**doors.close-after-passing**: Whether to close doors after passing through them.

**terrain.allow-stairs**: Whether stairs are allowed.

**terrain.allow-slabs**: Whether slabs are allowed.

**terrain.allow-ladders**: Whether ladders are allowed.

**terrain.allow-one-block-jump**: Whether one-block-high jumps are allowed.

**terrain.max-controlled-fall**: Maximum fall height a Bot is allowed to control.

## Basic combat configuration (`combat.yml`)

### Configuration example:

````
combat:
  target-range: 48.0
  melee-range: 2.7
  melee-damage: 6.0
  attack-cooldown-ticks: 13
  damageable: true
  knockback-multiplier: 1.0
  collision: true
  forget-target-min-seconds: 45
  forget-target-max-seconds: 60
  flee-health-ratio: 0.30
  gun-integration:
    enabled: true
    preferred-distance: 18.0
    fallback-to-melee: true
````

**target-range**: Maximum target-acquisition distance, in blocks.

**melee-range**: Melee attack range, in blocks.

**melee-damage**: Base melee damage.

**attack-cooldown-ticks**: Attack cooldown, in ticks.

**damageable**: Whether the Bot takes damage. This setting no longer implicitly controls knockback or terrain collision.

**knockback-multiplier**: Knockback multiplier when an attack hits a Bot; `0` means immunity to damage knockback, and `1.0` uses standard strength.

**collision**: Controls only collisions with blocks, walls, and terrain during SA Bot movement. Disabling it may allow traversal through terrain, so it should normally remain `true`.

Passive entity pushing between Bots and players is always disabled: when a player approaches or passes through a Bot, the Bot will not push the player away. A Boss roar on first detecting a player also no longer writes to player velocity. Attack knockback from firearms, melee, explosions, and dedicated abilities is still resolved according to the respective damage rules and `knockback-multiplier`.

**forget-target-min-seconds**: Minimum time before forgetting a lost target.

**forget-target-max-seconds**: Maximum time before forgetting a lost target.

**flee-health-ratio**: Health ratio that triggers fleeing; `0.30` means health below 30%.

**gun-integration.enabled**: Whether to enable firearm-system integration.

**gun-integration.preferred-distance**: Distance at which firearm combat is preferred, in blocks.

**gun-integration.fallback-to-melee**: Whether to switch to melee when firearms are unavailable.

## Tactical configuration (`tactical.yml`)

### Target memory

````
tactical:
  target_memory:
    view_cone_angle: 110
    target_loss_min_seconds: 45
    target_loss_max_seconds: 60
    max_track_distance: 64.0
````

**view_cone_angle**: View-cone angle, in degrees.

**target_loss_min_seconds / target_loss_max_seconds**: Forgetting-time range after a target is lost.

**max_track_distance**: Maximum tracking distance, in blocks.

### Combat decisions, looting, and evacuation

````
  combat_decisions:
    cob_engage_chance: 0.75
    sa_engage_chance: 0.75
    sa_damage_multiplier: 1.6
    flee_health_threshold: 0.3
    flee_ammo_threshold: 10
  looting:
    search_radius: 32.0
    max_loot_time_seconds: 15
    item_priority: [weapons, ammo, medical, armor, misc]
  evacuation:
    health_threshold: 0.3
    weight_threshold: 0.8
    switch_max_detour: 100.0
````

**cob_engage_chance**: Chance of engaging COBs.

**sa_engage_chance**: Chance of engaging SA.

**sa_damage_multiplier**: Damage multiplier for SA Bots.

**flee_health_threshold**: Fleeing health ratio in combat decisions.

**flee_ammo_threshold**: Minimum ammo amount that triggers tactical retreat.

**search_radius**: Looting radius, in blocks.

**max_loot_time_seconds**: Maximum duration of one looting attempt.

**item_priority**: Looting priorities, from highest to lowest.

**health_threshold**: Evacuation triggers when health is below this ratio.

**weight_threshold**: Evacuation triggers when carried weight reaches this ratio.

**switch_max_detour**: Maximum detour distance allowed when switching evacuation routes, in blocks.

Current runtime target-forgetting time and fleeing health ratio use `forget-target-*` and `flee-health-ratio` in `combat.yml` as their base configuration. When changing them, keep the corresponding values in both files consistent.

## Dynamic difficulty (`difficulty.yml`)

### Configuration example:

````
difficulty_levels:
  easy:
    health_multiplier: 0.8
    damage_multiplier: 0.7
    accuracy_multiplier: 0.6
    reaction_time_ms: 800
    loot_speed_multiplier: 0.7

  normal:
    health_multiplier: 1.0
    damage_multiplier: 1.0
    accuracy_multiplier: 0.8
    reaction_time_ms: 500
    loot_speed_multiplier: 1.0

default_difficulty: normal
````

**ID under `difficulty_levels`**: Difficulty level. Can use `easy`, `normal`, `hard`, or `extreme`.

**health_multiplier**: Health multiplier.

**damage_multiplier**: Damage multiplier.

**accuracy_multiplier**: Accuracy multiplier.

**reaction_time_ms**: Reaction time in milliseconds; lower values react faster.

**loot_speed_multiplier**: Looting speed multiplier.

**default_difficulty**: Default difficulty.

## Debug configuration (`debug.yml`)

### Configuration example:

````
debug:
  command-enabled: true
  log-spawn: false
  log-path-failures: true
  log-state-changes: false
````

**command-enabled**: Whether Bot debug commands are available.

**log-spawn**: Whether to log Bot spawning.

**log-path-failures**: Whether to log pathfinding failures.

**log-state-changes**: Whether to log Bot state changes.

To use Bot debug commands, `mtkv.debug: true` must also be enabled in `config/core.yml`; debug commands take effect only when both switches are enabled.
