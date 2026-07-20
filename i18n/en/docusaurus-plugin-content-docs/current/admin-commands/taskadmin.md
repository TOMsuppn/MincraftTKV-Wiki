---
title: "📋 TaskAdmin (Task Commands)"
description: "Information about the /mtkv taskadmin command and task/trader-system administration"
tags:
  - guan-li-ming-ling
---

# 📋 TaskAdmin (Task Commands)

### `/mtkv taskadmin ...`

#### Command format:

```
/mtkv taskadmin reload
/mtkv taskadmin reset player <player|UUID> <all|tasks|rep>
/mtkv taskadmin reset all <all|tasks|rep>
/mtkv taskadmin rep <player|UUID> <traderId> <delta>
/mtkv taskadmin grantitem <player|UUID> <itemlabId> <amount>
```

#### Available to:

* **Players**
* **Console**

#### Permissions:

* Entry permission: **minecrafttkv.taskadmin.use**
* Reload configuration: **minecrafttkv.taskadmin.reload**
* Reset one player: **minecrafttkv.taskadmin.reset.player**
* Reset server-wide: **minecrafttkv.taskadmin.reset.all**
* Adjust reputation: **minecrafttkv.taskadmin.rep**
* Grant items: **minecrafttkv.taskadmin.grantitem**

#### Purpose:

* Manage the task system
* Manage trader reputation
* Manage task-related item grants

#### Details:

* `reload`: Reloads task and trader configuration
* `reset player <player> <all|tasks|rep>`: Resets the specified player's tasks or reputation
* `reset all <all|tasks|rep>`: Resets tasks or reputation server-wide
* `rep <player> <traderId> <delta>`: Adjusts a target player's reputation with a trader
* `grantitem <player> <itemlabId> <amount>`: Grants an Itemlab item template

#### Common examples:

```
/mtkv taskadmin reload
/mtkv taskadmin reset player TOMsuppn all
/mtkv taskadmin reset player TOMsuppn tasks
/mtkv taskadmin reset all rep
/mtkv taskadmin rep TOMsuppn broker 0.01
/mtkv taskadmin rep TOMsuppn broker -0.05
/mtkv taskadmin grantitem TOMsuppn akm 1
```

#### Notes:

* The scope in `reset` may only be `all`, `tasks`, or `rep`
* `grantitem` requires the target player to be online, otherwise it cannot grant the item directly
* `grantitem` depends on the corresponding `itemlabId` existing in Itemlab
* `delta` in `rep` supports two decimal places and can be positive or negative, such as `0.01` or `-0.05`
* Trader reputation ranges from `0.00` to `6.00`

***
