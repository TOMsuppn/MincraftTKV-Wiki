---
title: "🚀 Getting Started with MinecraftTKV"
description: "A beginner's guide to MinecraftTKV"
---

# 🚀 Getting Started with MinecraftTKV

![Cover image](/img/gitbook/jc.png)

<div className="video-embed">
  <iframe
    src="https://player.bilibili.com/player.html?isOutside=true&aid=116075031232668&bvid=BV1wjZtBbEqW&cid=36085629686&p=1"
    title="MinecraftTKV Getting Started Video Guide"
    scrolling="no"
    frameBorder="0"
    allowFullScreen
  />
</div>

## Step 1

### Install the **server core**

We recommend using **Paper 1.21.8** to load this plugin.

First, visit the [**official website**](https://papermc.io) to download the latest server core.

Then **run** the server and accept the **EULA**.

The server has now started successfully.

![Server core startup screen](/img/gitbook/screenshot-2026-02-18-at-19-56-22.png)

## Step 2

### Plugin initialization

Place the **MinecraftTKV** plugin in the **plugins** folder, then start the server.

The plugin will report an error. Stop the server and enter your **License** in the **config** file.

Start the server again and the plugin will run **normally**.

![Configuration example](/img/gitbook/screenshot-2026-02-18-at-19-57-49.png)

## Step 3

### Map file setup

Open the **MTKV** folder in the server root directory, then put your prepared map files in the **maps** folder.

:::info
Note: Do not use Chinese characters or special symbols in map names.
:::

Start the server to complete map setup.

For further `maps.yml` configuration, such as automatically rebuilding a map world after a match or running commands when a match starts, see [Map Configuration](/docs/config/maps).

## Step 4

### Supply cache setup

With **OP** privileges, run <kbd>**/mtkv get loot**</kbd>.

Place the cache, then **sneak and right-click** it to open the editor.

Drag the items you want to add **into it**, then adjust the **chance and refresh count** as prompted.

When finished, click **Save**. The supply cache with this ID is now configured.

![Supply cache setup screen](/img/gitbook/screenshot-2026-02-18-at-20-03-09.png)

## Step 5

### Map point setup

Enter <kbd>/mtkv setmanager map map-file-name</kbd> to open the **map editor**.

Follow the prompts to use **commands** to set points where needed, or click the **editor in slot 9** to enter editing mode.

## Step 6

### Joining matchmaking

Matchmaking requires **no permission**. Players only need to enter <kbd>/play + map name</kbd> to join the matchmaking queue.

The **maximum players per match** depends on the number of **player spawn points** on that map.

#### Congratulations 🎉, you have completed the plugin's most basic configuration!
