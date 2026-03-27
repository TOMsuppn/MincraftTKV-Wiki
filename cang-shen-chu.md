---
description: 关于藏身处的一切
tags:
  - xi-tong-xin-xi
---

# 藏身处

## 简介

MinecraftTKV 中的藏身处是每个玩家**独立存在**的（独立存档），不同玩家间的藏身处**完全不互通**。

玩家的藏身处文件储存在 根目录/HideOuts 文件夹下，

藏身处文件命名规则：**玩家ID**\_**玩家UUID**

> 例如：**Player\_1** \_ **914e9094-dd43-376a-a052-b63bf94389aa**

## 常见问题

<details>

<summary>经过包含藏身处的版本更新，但我的藏身处没有变化？</summary>

这是因为您的藏身处文件还未更新，删除服务器根目录下的 **HideOuts** 文件夹和插件配置目录下的 **hideout\_temp** 文件夹。

<mark style="color:$warning;">注意：此操作会导致玩家存储在藏身处的物品消失，请注意数据备份！</mark>

</details>

