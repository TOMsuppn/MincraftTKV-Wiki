---
title: "🎮 Play (Matchmaking)"
description: "Information about the /play command and matchmaking features"
tags:
  - wan-jia-ming-ling
---

# 🎮 Play (Matchmaking)

### `/play [mapId]`

#### Command Format:

```
/play
/play <mapId>
```

#### Available To:

* **Players only**

#### Permissions:

* **No permission required**

#### Purpose:

* Enter the map matchmaking process
* Specify a map to search for a match

#### Features:

* When `mapId` is omitted, the plugin searches for the default map according to the current matchmaking logic
* When `mapId` is provided, its value is passed to the match search process
* **Tab completion** suggests map IDs from the currently loaded maps
* The matchmaking logic is then handled by the RaidSearch system

#### Common Examples:

```
/play
/play Factory
/play Woods
```

#### Notes:

* **Players only** can run this command
* Available map IDs depend on the map templates currently loaded by the server
* If you specify a map that does not exist, whether you can enter a match depends on how the matchmaking system handles it

***
