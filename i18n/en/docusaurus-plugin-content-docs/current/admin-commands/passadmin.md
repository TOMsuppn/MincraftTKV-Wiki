---
title: "🎟️ PassAdmin (Pass Administration)"
description: "Information about the /mtkv passadmin command and battle-pass administration"
tags:
  - guan-li-ming-ling
---

# 🎟️ PassAdmin (Pass Administration)

### `/mtkv passadmin ...`

#### Command format:

```
/mtkv passadmin give <player|UUID> <amount>
/mtkv passadmin premium <player|UUID> <on|off>
/mtkv passadmin wipe <player|UUID>
```

#### Available to:

* **Players**
* **Console**

#### Permissions:

* Entry permission: **minecrafttkv.passadmin.use**
* Grant tokens: **minecrafttkv.passadmin.give**
* Set premium: **minecrafttkv.passadmin.premium**
* Clear data: **minecrafttkv.passadmin.wipe**

#### Purpose:

* Manage player battle-pass tokens
* Manage player premium eligibility
* Clear player battle-pass data

#### Details:

* `give`: Adds battle-pass tokens to the target player
* `premium`: Sets the target player's battle-pass premium eligibility to `on` or `off`
* `wipe`: Resets the target player's battle-pass data
* The system supports resolving the target through a player name or UUID

#### Common examples:

```
/mtkv passadmin give TOMsuppn 20
/mtkv passadmin premium TOMsuppn on
/mtkv passadmin premium TOMsuppn off
/mtkv passadmin wipe TOMsuppn
```

#### Notes:

* `premium` currently accepts only `on` / `off`
* `wipe` clears:
* Battle-pass tokens
* Premium eligibility
* Unlocked levels
* Standard-reward claim records
* Premium-reward claim records
* If the target is online, some operations send them a synchronization notification

***
