---
title: "🚪 Extraction Points"
description: "Everything about extraction points"
tags:
  - xi-tong-xin-xi
---

# 🚪 Extraction Points

## Extraction Point Types

The current version includes the following extraction point types:

| Extraction Point Type | Name | Effect / Usage |
| --- | --- | --- |
| Standard extraction point | `EVAC_OPEN` | Standard extraction point |
| Gate extraction point | `EVAC_GATE` | Opens after interacting with the gate |
| Light-load extraction point | `EVAC_LIGHT` | Extraction is available only when the player's inventory is empty |
| Flare extraction point | `EVAC_FLARE` | Opens when the player right-clicks with a "glow stick" within the extraction point area |

![Flare extraction point illustration](/img/gitbook/image-3.png)

## How to Set Up Extraction Points

There are two ways to set up an extraction point:

| Method | Action |
| --- | --- |
| Use the point editor | Left-click to select an extraction point type, then right-click to place it |
| Use a command | In the map editor, enter `/mtkv set EVAC_<type> Evac-<name>` to place an extraction point at your current location ![](/img/gitbook/image-2.png) |

#### How Do I Set Up a Gate Extraction Point?

First, create a **gate extraction point**. After placing the point, **place a gate point** at the intended location and enter the corresponding gate extraction point ID on the displayed **sign**.

> For example: <kbd>**[GATE] Evac-1**</kbd> corresponds to ID <kbd>**1**</kbd>

#### Set the Number of Randomly Spawned Extraction Points per Raid

```
/mtkv setmanage evaccount <map> <count>
```
