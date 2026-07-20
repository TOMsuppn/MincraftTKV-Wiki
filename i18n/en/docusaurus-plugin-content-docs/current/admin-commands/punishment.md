---
title: "⚖️ Punishment"
description: "Information about the /mtkv punishment command and the punishment menu"
tags:
  - guan-li-ming-ling
---

# ⚖️ Punishment

### `/mtkv punishment <player|UUID>`

#### Command format:

```
/mtkv punishment <player|UUID>
```

#### Available to:

* **Players only**

#### Permission:

* **minecrafttkv.punishment.use**

#### Purpose:

* Open the punishment book menu
* Apply combined punishment actions to a target player

#### Details:

* After entering a target player, the punishment book menu opens
* Administrators can select different punishment options in the menu
* Current punishment logic normally covers the following:
* Economy reset
* Battle-pass reset
* Progression reset
* Inventory clearing
* Task/reputation reset
* Hideout reset
* After confirming in the menu, the punishment system performs the corresponding reset flow

#### Common examples:

```
/mtkv punishment TOMsuppn
/mtkv punishment 550e8400-e29b-41d4-a716-446655440000
```

#### Notes:

* **Players only** can run this command; the console cannot directly open the punishment book menu
* This is a menu command, not a plain-text command with multiple arguments
* The plugin also has internal action commands such as `__ack`, `__open`, and `__confirm`; entering them manually is not recommended
* Once execution is confirmed, it can trigger data resets, inventory clearing, or subsequent notification flows

***
