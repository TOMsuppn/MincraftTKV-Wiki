---
title: "🎫 Mpass (Battle Pass)"
description: "Information about the /mpass command and battle-pass viewing"
tags:
  - wan-jia-ming-ling
---

# 🎫 Mpass (Battle Pass)

### `/mpass [page]`

#### Command Format:

```
/mpass
/mpass <page>
```

#### Executed By:

* **Players** only

#### Permission:

* **minecrafttkv.pass.use**

#### Purpose:

* Open the battle pass GUI
* View battle pass levels, standard rewards, premium rewards, and unlock status

#### Features:

* When no page is specified, the system automatically opens the most relevant page
* When a page is specified, it navigates to that page
* **Tab completion** provides number suggestions based on the current total page count
* The GUI displays battle pass token count, unlockable levels, standard rewards, and premium rewards

#### Common Examples:

```
/mpass
/mpass 1
/mpass 2
```

#### Notes:

* Only **players** can execute this command
* The command cannot be used if the battle pass system is disabled
* If the page number is not numeric, the system reports a format error
* Whether premium rewards can be claimed also depends on whether the player has premium access

***
