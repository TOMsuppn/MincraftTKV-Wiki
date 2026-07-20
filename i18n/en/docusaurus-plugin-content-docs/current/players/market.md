---
title: "🛒 Market (Market/Tasks)"
description: "Information about the /market command and flea market home features"
tags:
  - wan-jia-ming-ling
---

# 🛒 Market (Market/Tasks)

### `/market`

#### Command Format:

```
/market
/market open
/market gui
```

#### Who Can Run It:

* **Players only**

#### Permission:

* **minecrafttkv.market.use**

#### Purpose:

* Open the main flea market entry point
* Open the market home GUI

#### Features:

* Entering `/market` opens the market home directly
* `/market open` and `/market gui` also open the same market home
* From the home page, players can continue to browse, list items, view their listings, use tasks, and access the trader system

#### Common Examples:

```
/market
/market open
/market gui
```

#### Notes:

* **Players only** can run this command
* You must have the `minecrafttkv.market.use` permission
* In the current version, the flea market can only be used inside the **hideout**

***

### `/market browse [page]`

#### Command Format:

```
/market browse
/market browse <page>
/market list
/market list <page>
```

#### Who Can Run It:

* **Players only**

#### Permission:

* **minecrafttkv.market.use**

#### Purpose:

* Browse listings currently for sale on the market
* View different pages of market items

#### Features:

* `/market list` is an alias for `/market browse`
* The first page opens by default when no page number is provided
* Providing a page number takes you to that page
* The market browsing page is generally used to view items, turn pages, and proceed to purchase confirmation

#### Common Examples:

```
/market browse
/market browse 2
/market list 3
```

#### Notes:

* **Players only** can run this command
* In the current version, browsing the market must also be done inside the **hideout**
* If the market is disabled by an administrator, the command directly reports that the market is currently closed

***

### `/market help`

#### Command Format:

```
/market help
```

#### Who Can Run It:

* **Players only**

#### Permission:

* **minecrafttkv.market.use**

#### Purpose:

* Open the market help panel
* View flea market feature entry points

#### Features:

* Shows entries for the market home, browsing, listing, your listings, tasks, and traders
* Shows the market's current enabled status
* Shows the task system status, trader system status, and current number of active listings

#### Common Examples:

```
/market help
```

#### Notes:

* **Players only** can run this command
* Even if help can be opened, the availability of individual features still depends on whether their systems are enabled
* In the current version, market-related actions remain restricted to the hideout

***

### `/market sell`

#### Command Format:

```
/market sell
```

#### Who Can Run It:

* **Players only**

#### Permission:

* **minecrafttkv.market.use**

#### Purpose:

* Open the market listing interface
* List player items for sale on the flea market

#### Features:

* The command opens the listing GUI
* Players can choose an item to sell
* Players can enter a custom price
* In the current version, price input uses an anvil input and no longer shows a visible sign

#### Common Examples:

```
/market sell
```

#### Notes:

* **Players only** can run this command
* In the current version, listing items must be done inside the **hideout**
* If the market is closed, the system reports that the flea market is currently closed

***

### `/market task`

#### Command Format:

```
/market task
```

#### Who Can Run It:

* **Players only**

#### Permission:

* **minecrafttkv.market.use**

#### Purpose:

* Open the task GUI directly from the market entry point
* Let players access the task system within the market ecosystem

#### Features:

* This command invokes the task system's logic for opening the task interface
* If the task system is not initialized, it directly reports that it cannot be used
* This is a task shortcut within the `/market` system

#### Common Examples:

```
/market task
```

#### Notes:

* **Players only** can run this command
* In the current version, the task system can only be used inside the **hideout**
* If the player is not in the hideout, the task system blocks access even when entered through the market

***

### `/market trader [traderId]`

#### Command Format:

```
/market trader
/market trader <traderId>
```

#### Who Can Run It:

* **Players only**

#### Permission:

* **minecrafttkv.market.use**

#### Purpose:

* Open the trader list
* Or open a specific trader interface directly

#### Features:

* When `traderId` is omitted, the trader list opens
* When `traderId` is provided, the system attempts to enter that trader's interface directly
* **Tab completion** suggests currently known trader IDs
* Trader selling inventory is shared server-wide and refreshes at the start of every hour
* A selling slot contains only one item; after any player buys it, other players cannot buy it
* Buying an item first opens a secondary confirmation menu; funds are deducted only after confirmation
* Some items require trader reputation or player progress levels; they display as locked when requirements are not met

#### Common Examples:

```
/market trader
/market trader prapor
```

#### Notes:

* **Players only** can run this command
* If the trader system is not initialized, the command directly reports that it cannot be used
* In the current version, trader access is also restricted to the **hideout**

***

### `/market my [page]`

#### Command Format:

```
/market my
/market my <page>
```

#### Who Can Run It:

* **Players only**

#### Permission:

* **minecrafttkv.market.use**

#### Purpose:

* View your current listings
* Browse your personal listing list by page

#### Features:

* The first page opens by default when no page number is provided
* Providing a page number takes you to the specified page
* Use it to view the status of items you have listed
* It is usually linked with market actions such as canceling listings and retrieving items

#### Common Examples:

```
/market my
/market my 2
```

#### Notes:

* **Players only** can run this command
* In the current version, this command must be run inside the **hideout**
* If the market is closed, the system reports that it cannot be used

***
