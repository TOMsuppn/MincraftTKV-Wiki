---
title: "📊 Mstats (Match Statistics)"
description: "Information about the /mstats command and match-statistics viewing"
tags:
  - wan-jia-ming-ling
---

# 📊 Mstats (Match Statistics)

### `/mstats [player|UUID]`

#### Command Format:

```
/mstats
/mstats <player|UUID>
```

#### Executed By:

* **Players** only

#### Permission:

* **minecrafttkv.stats.use**

#### Purpose:

* View your own match statistics
* View the match statistics of a specified player

#### Features:

* When no target is specified, your own statistics are shown by default
* When a player name or UUID is specified, the command attempts to open that player's statistics book
* Statistics are usually generated dynamically by the statistics system
* The command depends on whether the statistics system is enabled and allows the statistics command to be opened

#### Common Examples:

```
/mstats
/mstats TOMsuppn
```

#### Notes:

* Only **players** can execute this command
* The command fails immediately if the statistics system is disabled
* It also cannot be used if this command feature is disabled in the configuration
* If a player has no statistics, the system may indicate that no statistics are available

***
