---
title: "🧾 Changelog"
description: "Records of new features, functionality, and version changes"
displayed_sidebar: null
pageClassName: changelog-page
toc_min_heading_level: 2
toc_max_heading_level: 2
---

# 🧾 Changelog

<div className="release-entry release-entry--featured">
  <aside className="release-tags" aria-label="Version tags">
    <span className="release-tag release-tag--alpha">Beta.1</span>
    <span className="release-tag release-tag--pre">Release</span>
    <p className="release-date">2026-07-20</p>
  </aside>
  <div className="release-content">

## <span className="release-version">MinecraftTKV Beta.1 Release v0.01.0139</span>

:::tip Changes
- `[+]` Expanded Story Mode chapters
- `[+]` Added region triggers, interaction points, model displays, and task-condition binding to the Story Editor (#41)
- `[+]` Hideout upgrade level caps can now be extended through configuration (#33)
- `[+]` Story-project map settings are now strictly bound to the initial file
- `[~]` Temporarily disabled the random map-event module
- `[+]` Supply crates now support custom world models, mod blocks, and multi-state displays
- `[+]` Added spectator functionality
- `[+]` Extraction-point styles are now customizable; added paid extraction points and the Extraction Point Editor
- `[~]` Updated the key-room editing GUI
- `[+]` Different hit sound effects can now be configured for each weapon
- `[+]` Weapon lore now includes detailed descriptions, including unit-type information
- `[+]` Added custom key cards; key-card configuration is automatically migrated to `itemlab/keycards.yml`
:::
  </div>
</div>

<div className="release-entry release-entry--featured">
  <aside className="release-tags" aria-label="Version tags">
    <span className="release-tag release-tag--alpha">Beta.1</span>
    <span className="release-tag release-tag--pre">Preview</span>
    <p className="release-date">2026-07-16</p>
  </aside>
  <div className="release-content">

## <span className="release-version">MinecraftTKV-Beta.1-Preview5 v0.01.0105</span>

:::tip Changes
- `[~]` Fixed AI teleporting upward
- `[~]` Hid AI name tags
- `[+]` Added an anti-stuck mechanism for AI
- `[+]` Added MicroTV Bot AI v2 (vanilla clients only)
- `[+]` Added a weapon attachment system
- `[~]` Improved the external display of the weapon system
- `[~]` Systematically fixed numerous issues with merchant Excel files, ItemLab, and mod-item integration
- `[~]` Players leaving a match due to death no longer have their health restored to full
- `[+]` Added satiety recovery for habitats
- `[+]` Added void-fall protection for hideouts and the location editor
- `[+]` Added player starting-loadout settings (configured in the hideout)
:::
  </div>
</div>

<div className="release-entry release-entry--featured">
  <aside className="release-tags" aria-label="Version tags">
    <span className="release-tag release-tag--alpha">Beta.1</span>
    <span className="release-tag release-tag--pre">Preview</span>
    <p className="release-date">2026-07-15</p>
  </aside>
  <div className="release-content">

## <span className="release-version">MinecraftTKV Beta.1-Preview4 v0.01.0065</span>

:::tip Changes
- `[~]` Improved license display
- `[~]` Fixed BOT spawning in the location editor
- `[~]` Improved MTPS performance when affected by NMSBOT
- `[+]` Added the automatic update module (e-stone)
:::
  </div>
</div>

<div className="release-entry release-entry--featured">
  <aside className="release-tags" aria-label="Version tags">
    <span className="release-tag release-tag--alpha">Beta.1</span>
    <span className="release-tag release-tag--pre">Preview</span>
    <p className="release-date">2026-07-14</p>
  </aside>
  <div className="release-content">

## <span className="release-version">MinecraftTKV Beta.1-Preview3 v0.01.0060</span>

:::tip Changes
- `[~]` Updated `hideout.yml` comments
- `[-]` Removed some `market.yml` configuration options
- `[~]` Updated key-room setup prompts
- `[~]` Updated location-editor prompts and GUI styling
- `[~]` Updated key-room GUI styling; removed download methods and unrelated content
:::
  </div>
</div>

<div className="release-entry">
  <aside className="release-tags" aria-label="Version tags">
    <span className="release-tag release-tag--alpha">Beta.1</span>
    <span className="release-tag release-tag--pre">Preview</span>
    <p className="release-date">2026-07-12</p>
  </aside>
  <div className="release-content">

## <span className="release-version">MinecraftTKV Beta.1-Preview2 v0.01.0055</span>

:::tip Changes
- `[~]` Updated the social system: changed friend-request prompt styling and sound effects
- `[-]` Removed duplicate prompts when sending friend requests
- `[~]` Changed party-invitation prompts and sound effects
- `[~]` Changed party-chat prompts
- `[~]` Unified online notifications for friends and parties
- `[~]` Changed party-matching prompts
- `[~]` Improved NMSBot pathfinding and hid some Bot options
:::
  </div>
</div>

<div className="release-entry">
  <aside className="release-tags" aria-label="Version tags">
    <span className="release-tag release-tag--alpha">Beta.1</span>
    <span className="release-tag release-tag--hotfix">Hotfix</span>
    <p className="release-date">2026-07-05</p>
  </aside>
  <div className="release-content">

## <span className="release-version">MinecraftTKV Beta.1-Preview1-Hotfix3 v0.01.0047</span>

:::warning Changes
- `[~]` Improved NMSBot in-match performance and pathfinding scheduling (#36)
- `[+]` ItemLab now supports item stacking
- `[~]` Fixed players being unable to receive kills after defeating AI because of player-bot synchronization
- `[~]` Fixed unusable COB config files and SA/COB config-file mix-ups
- `[~]` Increased the limit on items Bots can carry
- `[~]` Fixed QA guns being unable to recognize MTKV Bot headshots
- `[+]` Empty SA item slots now drop ItemLab items like COB
- `[~]` Improved plugin copyright notices, packet debugging, and NMS-A* debug information
- `[~]` Fixed abnormal MTKV weapon-system damage against NMSBot
:::

Note: This version is available to all users.
  </div>
</div>

<div className="release-entry">
  <aside className="release-tags" aria-label="Version tags">
    <span className="release-tag release-tag--alpha">Beta.1</span>
    <span className="release-tag release-tag--hotfix">Hotfix</span>
    <p className="release-date">2026-07-04</p>
  </aside>
  <div className="release-content">

## <span className="release-version">MinecraftTKV Beta.1-Preview1-Hotfix2 v0.01.0038</span>

:::warning Changes
- `[~]` Fixed QA plugin guns not dealing damage correctly
- `[+]` Added the QueueV3 matchmaking waiting system
- `[~]` Fixed the warehouse still reporting as full after removing and then restoring an item
- `[~]` Fixed merchant price-table XLSX files failing to load due to POI/XMLBeans obfuscation
- `[~]` Fixed inability to add mod items to ItemLab
- `[+]` Added ItemLab imports from the item held in hand: `/mtkv itemlab import <itemlabId> <category>`
- `[~]` Fixed loot crates left after a player or AI dies blocking paths; corpses no longer have collision volumes
- `[~]` Disabled natural health regeneration in hideouts on Peaceful difficulty; only habitat-upgrade regeneration remains
- `[~]` Renamed default Bot/backend configuration labels from PMC/SCAV to SA/COB, while retaining compatibility with the old names
:::

Note: This version is available to all users.
  </div>
</div>

<div className="release-entry">
  <aside className="release-tags" aria-label="Version tags">
    <span className="release-tag release-tag--alpha">Beta.1</span>
    <span className="release-tag release-tag--hotfix">Hotfix</span>
    <p className="release-date">2026-06-27</p>
  </aside>
  <div className="release-content">

## <span className="release-version">MinecraftTKV Beta.1-Preview1-Hotfix1</span>

:::warning Changes
- `[~]` Fixed guns continuing to fire automatically after `automatic` was disabled
- `[~]` Fixed abnormal `fire_rate` values and unstable firing intervals
- `[~]` Fixed `mtkv reset` / `config reload` not reloading weapon configurations
- `[~]` Hid individual console messages for loaded guns and ammunition at startup
- `[+]` Merchants now support custom sale items, including TaCZ gun packs and mod items
- `[~]` Locked non-editable areas in the merchant price-editing spreadsheet to prevent accidental changes
- `[+]` ItemLab configurations now support mod item IDs, such as KubeJS custom items
- `[~]` Fixed some AI players unexpectedly becoming Vindicators
- `[+]` AI now support configurable additional drops, and fixed drop configurations not taking effect
- `[+]` Added a Core toggle for the Shift + F quick menu
- `[~]` Fixed COB dropping only weapons and no other item categories
- `[~]` Prevented key-card stacking and fixed repeated swipes consuming multiple key cards at once
- `[~]` Fixed firing while reloading and lowered weapon volume
- `[+]` Added QA plugin compatibility and fixed conflicts with MTKV weapons
- `[+]` Added more animation-block types for key rooms
- `[+]` Added numerous PAPI variables
- `[~]` Fixed gate extraction points, outdoor spawn points, dynamic random events, resource-pack weapon display, and other issues
- `[~]` Fixed hybrid-client NMS exceptions, unusable NMS bots, and Bot behavior issues
- `[+]` NMS debugging is available under `debugmode`
- `[~]` Moved Bot name pools into their respective Bot configuration files
:::
  </div>
</div>

<div className="release-entry">
  <aside className="release-tags" aria-label="Version tags">
    <span className="release-tag release-tag--alpha">Beta.1</span>
    <span className="release-tag release-tag--pre">Preview</span>
    <p className="release-date">2026-06-20</p>
  </aside>
  <div className="release-content">

## <span className="release-version">MinecraftTKV Beta.1-Preview1 · v0.1.3</span>

### Important Fixes

- Fixed several critical vulnerabilities affecting hideouts and match instances.
- Fixed native economy features not working correctly when an external economy plugin was connected.
- Fixed issues with Story Mode, including lost dialogue saves, preview input being disrupted, ActionBar not displaying, and incorrect total timeline duration.
- Fixed opening animations triggering unexpectedly when players reconnect.
- Fixed issues with PMC stair climbing, wall-sticking, detours, melee detection, and PMC/SCAV target selection and engagement logic.

### New Content

- Added an overview GUI, match manager, loot-crate manager, and a configuration for the minimum loot-crate refresh count.
- Added match time limits, day/night and weather systems, dynamic events, and outdoor spawning.
- Added approximately 50 loot-crate types, parties and friends, player matchmaking cancellation, offline player models, a sound system, and a new NMS API.
- Added key rooms and their settings GUI, match-command blacklists/whitelists, a SCAV drop pool, and PMC/SCAV drop-rate controls.
- Added custom AI skins, ItemLab, loot crates, custom Excel lookup tables, and flexible merchant purchasing.
- Added habitats, hideouts, smokers, and more.

### AI System Updates

- Significantly enhanced PMC and SCAV Bot logic. PMCs now have state-machine behaviors for patrolling, combat, searching, extraction, and more.
- PMCs make decisions based on target distance, line of sight, cover, health, and supplies, and search corpses and loot crates.
- PMCs choose extraction when low on health or carrying substantial loot, and choose routes based on A* paths, extraction-point distance, risk, and toggle conditions.
- After losing a target, PMCs search the last known location; when no target is found, they return to patrol. Equipment now uses random loadout templates.
- Improved path overlap when multiple AIs act simultaneously, and reworked SCAV and PMC attack logic.
- SCAV has been renamed to COB, and PMC to SA.

### Loot and Equipment Updates

- Loot-crate location and template file structures were refactored into MigrationV3. The loot-crate manager categorizes entries by ID, and duplicate IDs are displayed only once.
- Added random loadout templates for light, heavy, sniper, support, stealth, and other roles; updated default PMC weapon, ammunition, armor, and supply combinations.
- Added compatibility with legacy equipment IDs such as `ak74`, `m4a1`, `glock17`, and `ammo_556`.
- Added merchant economy-cycle improvements with XConomy compatibility.
- In the location editor, `cob`, `sa`, `boss`, and `mm` are merged into the `bot` category.
- Improved extraction-condition prompts and moved the countdown to the BossBar.

### Balance Adjustments

- Reduced SCAV strength and increased PMC strength.
- Improved PMC behavior to make them feel more like independent AI agents.

:::info Testing and Resource Pack Notes
1. Only users approved for testing can download and run the plugin. If an approved user cannot start it, try again about one hour after release; if it still cannot start, contact TOMsuppn.
2. The resource pack provides weapon support. To use it, bind a direct-download link for players in the main configuration file.
:::
  </div>
</div>

<div className="release-entry release-entry--featured">
  <aside className="release-tags" aria-label="Version tags">
    <span className="release-tag release-tag--alpha">Alpha</span>
    <p className="release-date">2026-04-11</p>
  </aside>
  <div className="release-content">

## <span className="release-version">MinecraftTKV Alpha.2-rc2</span>

<div className="release-raw-list" aria-label="Alpha.2-rc2 changelog">
  <p className="release-raw-line">{'[+] Optimized plugin startup threads and improved startup speed'}</p>
  <p className="release-raw-line">{'[+] Added a punishment menu'}</p>
  <p className="release-raw-line">{'[+] Added 1.20 support'}</p>
  <p className="release-raw-line">{'[+] Added a battle pass'}</p>
  <p className="release-raw-line">{'[+] Added a market'}</p>
  <p className="release-raw-line">{'[+] Added merchants and quests'}</p>
  <p className="release-raw-line">{'[+] Added more quest conditions and improved linear quest progression'}</p>
  <p className="release-raw-line">{'[~] Completed development of phase two of the configuration-system update'}</p>
  <p className="release-raw-line">{'[+] Added independent random extraction-point settings'}</p>
  <p className="release-raw-line">{'[~] Fixed location-editor page buttons flickering'}</p>
  <p className="release-raw-line">{'[+] Added logic to location-editor page buttons; buttons are hidden when there are no options to page through'}</p>
  <p className="release-raw-line">{'[~] Fixed custom flea-market prices not working correctly'}</p>
  <p className="release-raw-line">{'[+] Added a world-reset option'}</p>
  <p className="release-raw-line">{'[+] Allowed custom commands to be set when a match starts'}</p>
  <p className="release-raw-line">{'[~] Match world-rule settings are now strongly synchronized with the initial map'}</p>
</div>

<div className="release-raw-list release-raw-list--continued" aria-label="Alpha.2-rc2 additional changelog">
  <p className="release-raw-line">{'[+] Added a skill system'}</p>
  <p className="release-raw-line">{'[+] Player tags are automatically hidden during matches'}</p>
  <p className="release-raw-line">{'[~] Fixed lag caused by old armor stands at gate locations not being cleared in time'}</p>
  <p className="release-raw-line">{'[+] Added MythicMobs mob-spawning compatibility'}</p>
  <p className="release-raw-line">{'[~] Optimized SkillGUI'}</p>
  <p className="release-raw-line">{'[+] Added external economy-plugin support'}</p>
  <p className="release-raw-line">{'[~] Fixed resetWorldOnMatchEnd not working correctly'}</p>
  <p className="release-raw-line">{'[~] Fixed loot crates failing to respawn with map-state resets under certain conditions'}</p>
</div>
  </div>
</div>

<div className="release-entry">
  <aside className="release-tags" aria-label="Version tags">
    <span className="release-tag release-tag--alpha">Alpha</span>
    <span className="release-tag release-tag--pre">PreTest</span>
    <p className="release-date">2026-04-04</p>
  </aside>
  <div className="release-content">

## <span className="release-version">MinecraftTKV-P2-Alpha.2-rc1 Pre-release</span>

:::warning Changes
- `[+]` Added independent random extraction-point settings
- `[~]` Fixed location-editor page buttons flickering
- `[+]` Added logic to location-editor page buttons; buttons are hidden when there are no options to page through
- `[~]` Fixed custom flea-market prices not working correctly
- `[+]` Added a world-reset option
- `[+]` Allowed custom commands to be set when a match starts
- `[~]` Match world-rule settings are now strongly synchronized with the initial map
:::

:::info Notes
1. This update automatically supports old configuration files, backs them up, and upgrades them to the latest configuration management system. Startup may take longer than before.
2. Version 1.20.x is now supported, but a small number of newer blocks in hideout map files may still not display correctly.
:::
  </div>
</div>

<div className="release-entry">
  <aside className="release-tags" aria-label="Version tags">
    <span className="release-tag release-tag--alpha">Alpha</span>
    <span className="release-tag release-tag--pre">PreTest</span>
    <p className="release-date">2026-03-28</p>
  </aside>
  <div className="release-content">

## <span className="release-version">MinecraftTKV-P1-Alpha.2-rc1 Pre-release</span>

:::warning Changes
- `[+]` Optimized plugin startup threads and improved startup speed
- `[+]` Added a punishment menu
- `[+]` Added 1.20 support
- `[+]` Added a battle pass
- `[+]` Added a market
- `[+]` Added merchants and quests
- `[+]` Added more quest conditions and improved linear quest progression
- `[~]` Completed development of phase two of the configuration-system update
:::

:::info Notes
1. This update automatically supports old configuration files, backs them up, and upgrades them to the latest configuration management system. Startup may take longer than before.
2. Version 1.20.x is now supported, but a small number of newer blocks in hideout map files may still not display correctly.
:::
  </div>
</div>

<div className="release-entry">
  <aside className="release-tags" aria-label="Version tags">
    <span className="release-tag release-tag--alpha">Alpha</span>
    <p className="release-date">2026-03-03</p>
  </aside>
  <div className="release-content">

## <span className="release-version">MinecraftTKV Alpha.1-rc.2-pre4</span>

:::tip Changes
- `[+]` Added light-loadout, signal-flare, and gate extraction points
- `[+]` Added configurable gate locations
- `[+]` Added random match-extraction-point spawn logic
- `[+]` Added an economy system with transfers, freezing, and economy leaderboards
- `[+]` Added a statistics list so players can view their most recent match and overall statistics
- `[~]` Fixed players being unable to restart matchmaking after leaving while matching
- `[+]` Added a progression system and menu; players can level up by gaining experience to receive currency rewards
- `[+]` Rebuilt the configuration-file structure for the new system
:::

### Interface Preview

![Alpha.1-rc.2-pre4 Screenshot 1](/img/gitbook/e1bdd9f3074ca5c4acd1140171542625.png)

![Alpha.1-rc.2-pre4 Screenshot 2](/img/gitbook/ae1569e090fd66e9439b3cf1c4aa61d2.png)

![Alpha.1-rc.2-pre4 Screenshot 3](/img/gitbook/34487160da877dbef5a14cac33d4f127.png)
  </div>
</div>

<div className="release-entry">
  <aside className="release-tags" aria-label="Version tags">
    <span className="release-tag release-tag--alpha">Alpha</span>
    <p className="release-date">2026-02-28</p>
  </aside>
  <div className="release-content">

## <span className="release-version">MinecraftTKV Alpha.1-rc.2-pre3</span>

:::tip Changes
- `[~]` Fixed items getting stuck in the loot editor
- `[+]` Added configurable Scav name pools
- `[+]` Added a Tab-menu toggle configuration
- `[~]` Refactored the configuration-file architecture
- `[~]` Fixed the map editor setting locations inside blocks
- `[~]` Fixed extraction points affecting Creative / Spectator players
- `[+]` Added an experimental PMC-BOT feature: when enabled, PMC players automatically fill vacant slots when there are not enough players in a match
:::
  </div>
</div>

<div className="release-entry">
  <aside className="release-tags" aria-label="Version tags">
    <span className="release-tag release-tag--alpha">Alpha</span>
    <span className="release-tag release-tag--hotfix">Hotfix</span>
    <p className="release-date">2026-02-23</p>
  </aside>
  <div className="release-content">

## <span className="release-version">MinecraftTKV Alpha.1-rc.2-pre2-hotfix2</span>

:::warning Changes
- `[~]` Fixed players being able to use `/play` without restrictions in hideouts
- `[~]` Fixed players starting a new match while already in a match
- `[+]` Players gain damage immunity during the 10-second match-start countdown
- `[+]` Players gain damage immunity while in hideouts
- `[+]` Players can no longer leave a match by quitting the game
:::
  </div>
</div>

<div className="release-entry">
  <aside className="release-tags" aria-label="Version tags">
    <span className="release-tag release-tag--alpha">Alpha</span>
    <span className="release-tag release-tag--hotfix">Hotfix</span>
    <p className="release-date">2026-02-12</p>
  </aside>
  <div className="release-content">

## <span className="release-version">MinecraftTKV Alpha.1-rc.2-pre1-260212</span>

:::warning Changes
- `[+]` Updated the hideout map file with expandable content such as storage chests and crafting tables
- `[~]` Improved the speed at which players enter the queue
:::
  </div>
</div>

<div className="release-entry">
  <aside className="release-tags" aria-label="Version tags">
    <span className="release-tag release-tag--alpha">Alpha</span>
    <p className="release-date">2026-02-07</p>
  </aside>
  <div className="release-content">

## <span className="release-version">MinecraftTKV Alpha.1-rc.2-pre1</span>

:::tip Changes
- `[+]` Multi-queue system
- `[+]` Player-location table: added `PLAYER_TO_LOBBY`
- `[+]` Room pre-allocation: added `RESERVED_MATCH_WORLDS`
- `[+]` Automatic `SEARCHING -> WAITING` transition
- `[+]` Segmented timing mechanism
- `[+]` Dynamic maximum player count
- `[+]` BossBar time format
- `[+]` `SEARCHING` sweep-light title
- `[~]` Compatibility fix: the sweep-light animation no longer relies on `Bukkit.getCurrentTick()`
- `[-]` Removed the old waiting mechanism
- `[-]` Removed `SEARCHING` progress accumulation logic
:::
  </div>
</div>

<div className="release-entry">
  <aside className="release-tags" aria-label="Version tags">
    <span className="release-tag release-tag--alpha">Alpha</span>
    <span className="release-tag release-tag--hotfix">Hotfix</span>
    <p className="release-date">2026-01-31</p>
  </aside>
  <div className="release-content">

## <span className="release-version">MinecraftTKV Alpha.1-rc.1-fix3</span>

:::warning Changes
- `[~]` Updated TAB menu styling: changed the yellow sweep-light speed curve for “MinecraftTKV” text to a sine function
- `[~]` Updated plugin startup messages and removed redundant debug logs
- `[~]` Updated glass-pane color settings in the loot-search menu; added indicators distinguishing paused searches from active searches; unified search prompt text in white
- `[+]` Added the ability for players to pause a search by clicking the item currently being searched
- `[~]` Changed loot-search time to `1.3s ~ 3.2s` (previously `2.8s`); changed corpse-search time to `4.8s ~ 8.7s` (previously `5s`); search time is tied to the corpse, so it is consistent across players
- `[~]` Scavs no longer drop loot
- `[~]` Fixed inconsistent text display for “maximum refresh value” in the loot-editing system
- `[-]` Removed the “Waiting for players” BossBar
- `[-]` Removed match-status prompts and numerous other debug messages
:::
  </div>
</div>
