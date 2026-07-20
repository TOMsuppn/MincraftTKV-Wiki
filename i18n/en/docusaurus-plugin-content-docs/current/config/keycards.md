---
title: "🪪 Keycard System Configuration (keycards.yml)"
description: "Instructions for keycards.yml keycard items, drops, and access-control usage"
---

# Keycard System Configuration (keycards.yml)

The keycard configuration file is located at `config/itemlab/keycards.yml` in the plugin data directory. It defines keycard item styles, item library templates, and drop rules for each keycard source. The legacy `config/keycards.yml` is automatically migrated to the new location when first loaded.

Keycards are unique items containing PersistentDataContainer data. Bulk duplication through ordinary item-copying plugins is not recommended. The system automatically splits stacked keycards during inventory operations, pickups, and access-control use, and maintains a unique ID for every card.

After making changes, use `/mtkv config reload` to reload the keycard configuration.

## Configuration structure example:

````
keycards:
  item:
    material: PAPER
    display-name: "§b§l{type} Keycard"
    custom-model-data: 0
    lore:
      - "§7Type: §b{type} §8/ §7Remaining Uses: §f{uses}"
      - "§7Source Map: §f{source-map}"
      - "§7Source Type: §f{source-type}"
  types:
    1: { name: "Red Card" }
    2: { name: "Yellow Card" }
  source-display:
    lootbox: "Standard Loot Box"
    keyroom-lootbox: "Key Room Loot Box"
    ai-corpse: "AI/Monster Corpse"
    boss: "Boss"
  itemlab:
    default-uses: 1
  drops:
    lootbox:
      enabled: true
      chance: 0.015
      tiers: { 1: 70, 2: 22, 3: 7, 4: 1, 5: 0 }
      uses: { 1: 75, 2: 20, 3: 5 }
````

## Item Style (`keycards.item`)

**material**: The Minecraft material used for keycards. The default is `PAPER`.

**display-name**: The display name of the keycard. You can use `{tier}` (internal tier) and `{type}` (custom type name). For example, after setting `types.1.name` to "Red Card", `{type}` displays as "Red Card".

**custom-model-data**: The keycard resource-pack model data value. Set this to `0` to leave model data unset.

**lore**: A list of Lore lines that can be adjusted freely. Supports the `{tier}`, `{type}`, `{uses}`, `{source-map}`, `{source-type}`, `{acquired-at}`, and `{id}` placeholders.

## Type Names (`keycards.types`)

Internal tiers remain 1 through 5 and are used for access-control checks; `types.<tier>.name` controls only the displayed name. Therefore, you can display L1-L5 as "Red Card", "Yellow Card", and so on without affecting existing access-control configuration.

Every keycard stores the following internal data:

| Data | Purpose |
| --- | --- |
| `keycard` | Identifies this item as an MTKV keycard |
| `keycard_tier` | Keycard tier, from L1 to L5 |
| `keycard_uses` | Remaining uses |
| `keycard_uid` | Unique ID for each card |
| `keycard_source_map` | Map ID where the keycard was obtained |
| `keycard_source_type` | Source type where it was obtained |
| `keycard_acquired_at` | Acquisition timestamp |

The default maximum stack size for keycards is 1. Even if another plugin forcibly stacks keycards, the system splits them into individual cards during subsequent operations.

## Source Display (`keycards.source-display`)

Used to convert internal source IDs into display names shown in Lore.

**lootbox**: Standard loot box

**keyroom-lootbox**: Key room loot box

**ai-corpse**: AI or monster corpse

**boss**: Boss drop

`itemlab` is used only for source display compatibility with legacy keycards. Newly claimed keycards from the item library do not store or display source tracking.

## Item Library Settings (`keycards.itemlab`)

````
itemlab:
  default-uses: 1
````

**default-uses**: The default number of uses for keycards generated through the item library. The item library automatically generates five templates: `Keycard-L1` through `Keycard-L5`.

Keycards belong to the `keycard` category in the item library. Obtain them by opening the item library with `/mtkv get itemlab`, or use the `keycard` category in the item library import feature. The item library also provides `KeycardBag` (keycard bag); right-click it in the main hand to open a dedicated 27-slot interface that stores only keycards while preserving their unique IDs and tracking data.

## Drop Rules (`keycards.drops`)

Each source uses the same configuration structure:

````
lootbox:
  enabled: true
  chance: 0.015
  tiers: { 1: 70, 2: 22, 3: 7, 4: 1, 5: 0 }
  uses: { 1: 75, 2: 20, 3: 5 }
````

**enabled**: Whether the keycard configuration for this source is enabled.

**chance**: Keycard drop probability, from `0.0` to `1.0`. For example, `0.015` means 1.5%.

**tiers**: Keycard tier weights. Keys are tiers and values are weights; weights do not need to add up to 100, because the system rolls among all valid weights.

**uses**: Keycard use-count weights. Keys are use counts and values are weights; the system ultimately limits use counts to 1 through 99.

### Source Details

| Source node | Trigger location | Description |
| --- | --- | --- |
| `lootbox` | Standard loot box | Rolled only during an active match |
| `keyroom-lootbox` | Key room loot box | Rolled only during an active match; its probability can be configured independently |
| `ai-corpse` | AI/monster death drop | Player deaths do not trigger this source |
| `boss` | Boss drop | Bosses use independent tier and use-count weights |

Keycards from standard loot boxes and key room loot boxes are added as extra loot. AI corpse keycards are added to entity death drops.

Boss keycards are generated directly by the Boss drop flow. The default tier weights favor L2-L4; `boss.chance` is primarily retained for configuration compatibility, and whether a Boss generates a keycard should be controlled through the Boss drop logic.

## Tiers and Uses

Keycard tiers range from L1 to L5. Access control reads the tier of the keycard in the player's main hand and compares it with `requiredTier` in the access-control configuration:

- The door opens when the card tier is greater than or equal to `requiredTier`.
- The door is denied when the card tier is below `requiredTier`; no use is consumed.
- One use is consumed after each successful authentication.
- When remaining uses reach 0, the keycard is destroyed and an item-break sound plays.
- Invalid keycards with no uses are also removed when used.

Access-control `requiredTier` is limited to 1 through 5 and is normally configured in the map's key room/access-control group configuration.

## Keycard Lore

The system automatically writes the following information:

````
Category: Keycard
Type: Red Card / Remaining Uses: 2
Source Map: map_id
Source Type: Standard Loot Box
Acquired At: 2026-01-01 12:00
ID: 8-character unique ID prefix
````

The source map, source type, and acquisition time come from match information when the keycard is generated. Cards claimed directly from ItemLab do not display any source-tracking lines by default; when such a template spawns in a loot box, key room loot box, or another container, the system automatically rewrites it with the corresponding container source. If the match map cannot be determined, the source map is displayed as `unknown`.

## Acquisition and Usage Flow

1. Obtain a keycard from a loot box, key room loot box, AI corpse, or Boss drop.
2. You can also obtain `Keycard-L1` through `Keycard-L5` from the item library.
3. Hold the keycard in your main hand and click a key room card reader or access-control point.
4. The system checks the keycard tier and remaining uses.
5. After successful authentication, one use is deducted and the corresponding access-control group opens.

Keycards are checked only in the main hand. Keycards in the off hand or inventory cannot be used directly by access control.

## Related Commands

````
/mtkv get itemlab
/mtkv config reload
````

**`/mtkv get itemlab`**: Opens the item library, where you can obtain keycard templates in the `keycard` category.

**`/mtkv config reload`**: Reloads plugin configuration such as `keycards.yml`.

There is currently no separate `/mtkv keycard` command. Administrators testing keycards should use the item library or configure the appropriate drop source.

## Frequently Asked Questions

1. No keycards in loot boxes: Confirm that `enabled` is `true` for the corresponding source and that a match is currently running.
2. Incorrect keycard tier: Check whether the `tiers` weights are valid. If all weights are 0 or the format is invalid, the default tier is used.
3. Keycard cannot open the door: Confirm that the keycard is in the main hand and check the access-control group's `requiredTier`.
4. Keycard was split into multiple cards: This is normal behavior. Every card has an independent UID, preventing keycards with different use counts from being merged incorrectly.
5. Probability changes did not take effect: Run `/mtkv config reload` and check the console for configuration file parsing errors.
