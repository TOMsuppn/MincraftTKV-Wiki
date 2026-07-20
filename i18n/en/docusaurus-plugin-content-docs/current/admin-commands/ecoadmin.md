---
title: "🪙 ECOAdmin (Economy Administration)"
description: "Information about the /mtkv ecoadmin command and economy administration"
tags:
  - guan-li-ming-ling
---

# 🪙 ECOAdmin (Economy Administration)

### `/mtkv ecoadmin ...`

#### Command format:

```
/mtkv ecoadmin get <player|UUID>
/mtkv ecoadmin set <player|UUID> <amount>
/mtkv ecoadmin give <player|UUID> <amount>
/mtkv ecoadmin take <player|UUID> <amount>
/mtkv ecoadmin reset <player|UUID>
/mtkv ecoadmin freeze <player|UUID> [reason]
/mtkv ecoadmin unfreeze <player|UUID>
/mtkv ecoadmin reload
```

#### Available to:

* **Players**
* **Console**

#### Permissions:

* Entry permission: **minecrafttkv.ecoadmin.use**
* Check balance: **minecrafttkv.ecoadmin.get**
* Set balance: **minecrafttkv.ecoadmin.set**
* Add balance: **minecrafttkv.ecoadmin.give**
* Deduct balance: **minecrafttkv.ecoadmin.take**
* Reset balance: **minecrafttkv.ecoadmin.reset**
* Freeze/unfreeze: **minecrafttkv.ecoadmin.freeze**
* Reload configuration: **minecrafttkv.ecoadmin.reload**

#### Purpose:

* Manage player wallet data
* Manually correct abnormal balances
* Freeze suspicious accounts
* Reload economy-system configuration

#### Details:

* `get`: Check the target player's current balance and account status
* `set`: Directly set the target balance to a specified amount
* `give`: Add balance to the target
* `take`: Deduct balance from the target
* `reset`: Reset the target balance to its default state
* `freeze`: Freeze an account, optionally with a reason
* `unfreeze`: Unfreeze an account
* `reload`: Reload economy-related configuration

#### Common examples:

```
/mtkv ecoadmin get TOMsuppn
/mtkv ecoadmin set TOMsuppn 5000.00
/mtkv ecoadmin give TOMsuppn 1000.00
/mtkv ecoadmin take TOMsuppn 300.00
/mtkv ecoadmin reset TOMsuppn
/mtkv ecoadmin freeze TOMsuppn suspicious transaction
/mtkv ecoadmin unfreeze TOMsuppn
/mtkv ecoadmin reload
```

#### Notes:

* `set` can directly alter balances and is high risk; use it carefully
* `freeze` and `unfreeze` share the same granular permission
* Amount arguments must use a numeric format allowed by the economy system
* If the target player does not exist, the system reports that the player or UUID was not found

***
