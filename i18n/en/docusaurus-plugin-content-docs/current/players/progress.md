---
title: "📈 Mprogress (Progress System)"
description: "Information about the /mprogress command and level-progress viewing"
tags:
  - wan-jia-ming-ling
---

# 📈 Mprogress (Progress System)

### `/mprogress [page]`

#### Command Format:

```
/mprogress
/mprogress <page>
```

#### Executed By:

* **Players** only

#### Permission:

* **minecrafttkv.progress.use**

#### Purpose:

* Open the level progress GUI
* View level rewards and claim status

#### Features:

* When no page is specified, the system automatically opens the most relevant page
* When a page is specified, it attempts to navigate to that page
* **Tab completion** provides number suggestions based on the current total page count
* The interface displays the current level, reward milestones, and claim status

#### Common Examples:

```
/mprogress
/mprogress 1
/mprogress 3
```

#### Notes:

* Only **players** can execute this command
* The command cannot be used if the progress system is disabled
* If the page number is not numeric, the system reports a format error

***
