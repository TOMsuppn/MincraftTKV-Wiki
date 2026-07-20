---
title: "💰 ECO (Economy)"
description: "Information about the /eco command and economy-system help"
tags:
  - wan-jia-ming-ling
---

# 💰 ECO (Economy)

### `/eco help`

#### Command format:

```
/eco help
```

#### Available to:

* **Players only**

#### Permission:

* **minecrafttkv.eco.use**

#### Purpose:

* Open the economy-system help panel
* View currently available economy commands

#### Details:

* Shows the current currency name and symbol
* Shows `/eco balance`
* Shows `/eco pay`
* Shows `/eco top`
* Entering `/eco` directly also opens the help panel

#### Common examples:

```
/eco help
/eco
```

#### Notes:

* **Players only** can run this command
* Players cannot use economy commands normally if the economy system is disabled
* Whether commands displayed in the help panel can actually be used still depends on the player's permissions

***

### `/eco balance [player|UUID]`

#### Command format:

```
/eco balance
/eco balance <player|UUID>
/eco bal
/eco bal <player|UUID>
```

#### Available to:

* **Players only**

#### Permission:

* Checking your own balance requires **minecrafttkv.eco.use**
* Checking another player's balance requires **minecrafttkv.eco.balance.others**

#### Purpose:

* Check your wallet balance
* Check another player's wallet balance when authorized

#### Details:

* Without a target, your own balance is checked by default
* With a player name or UUID, the command attempts to look up that account
* A frozen account is marked as frozen in the result
* `bal` is a short alias for `balance`

#### Common examples:

```
/eco balance
/eco balance TOMsuppn
/eco bal TOMsuppn
```

#### Notes:

* **Players only** can run this command
* Checking another player's balance requires the additional permission
* If the target player does not exist, the system reports that the player or UUID was not found

***

### `/eco pay <player|UUID> <amount>`

#### Command format:

```
/eco pay <player|UUID> <amount>
```

#### Available to:

* **Players only**

#### Permission:

* **minecrafttkv.eco.pay**

#### Purpose:

* Transfer money to another player
* Circulate economy currency between players

#### Details:

* The target can be a player name or UUID
* The amount must be a number greater than `0`
* Decimal amounts are supported
* After a successful transfer, the payer sees their remaining balance
* If the recipient is online, they also receive a payment notification

#### Common examples:

```
/eco pay TOMsuppn 100.00
/eco pay PlayerA 500
```

#### Notes:

* **Players only** can run this command
* The command cannot be used if transfers are disabled
* An invalid amount, insufficient balance, missing target, or frozen account causes the transfer to fail

***

### `/eco top [page]`

#### Command format:

```
/eco top
/eco top <page>
```

#### Available to:

* **Players only**

#### Permission:

* **minecrafttkv.eco.use**

#### Purpose:

* View the server wealth leaderboard
* See players with high balances in the current economy system

#### Details:

* Without a page number, the first page is shown by default
* The leaderboard is sorted by wallet balance from highest to lowest
* Frozen accounts are marked in the list
* Pages are supported

#### Common examples:

```
/eco top
/eco top 2
```

#### Notes:

* **Players only** can run this command
* If no wallet data exists yet, the system reports that the leaderboard is empty
* An invalid page number is usually corrected automatically to a valid range

***
