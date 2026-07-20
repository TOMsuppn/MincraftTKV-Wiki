---
title: "🛠️ MarketAdmin (Market / Task Administration)"
description: "Information about the /mtkv marketadmin command and flea-market administration"
tags:
  - guan-li-ming-ling
---

# 🛠️ MarketAdmin (Market / Task Administration)

### `/mtkv marketadmin ...`

#### Command format:

```
/mtkv marketadmin
/mtkv marketadmin reload
/mtkv marketadmin toggle <on|off>
/mtkv marketadmin list [page]
/mtkv marketadmin remove <listingId>
/mtkv marketadmin sweep
/mtkv marketadmin stats
```

#### Available to:

* **Players**
* **Console**

#### Permissions:

* Entry permission: **minecrafttkv.market.admin.use**
* Aggregate permission: **minecrafttkv.market.admin.\***
* Reload configuration: **minecrafttkv.market.admin.reload**
* Toggle market: **minecrafttkv.market.admin.toggle**
* Force removal: **minecrafttkv.market.admin.remove**
* Expiration cleanup: **minecrafttkv.market.admin.sweep**
* View statistics: **minecrafttkv.market.admin.stats**

#### Purpose:

* Manage the flea-market system
* Turn market service on or off
* View listing lists and market statistics
* Clean up abnormal or expired listings

#### Details:

* With no arguments, players normally open the market-administration menu
* `reload`: Reloads market configuration and triggers a passive refresh
* `toggle <on|off>`: Manually turns the market on or off
* `list [page]`: Views all current listings
* `remove <listingId>`: Forcibly removes a specified listing
* `sweep`: Immediately cleans up expired listings
* `stats`: Views current market statistics

#### Common examples:

```
/mtkv marketadmin
/mtkv marketadmin reload
/mtkv marketadmin toggle off
/mtkv marketadmin toggle on
/mtkv marketadmin list 1
/mtkv marketadmin remove 550e8400-e29b-41d4-a716-446655440000
/mtkv marketadmin sweep
/mtkv marketadmin stats
```

#### Notes:

* `remove` requires a valid `listingId`
* `toggle off` directly affects player market use
* `sweep` is suitable for manually cleaning up expired data immediately
* Even if player market use is restricted to hideouts, administrator commands themselves do not depend on hideout location

***
