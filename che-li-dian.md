---
description: 关于撤离点的一切
tags:
  - xi-tong-xin-xi
---

# 撤离点

## 撤离点类型

当前版本，包含以下撤离点类型：

<table><thead><tr><th width="203">撤离点类型</th><th>名称</th><th>效果/使用方法</th></tr></thead><tbody><tr><td>常规撤离点</td><td>EVAC_OPEN</td><td>正常撤离点</td></tr><tr><td>拉闸撤离点</td><td>EVAC_GATE</td><td>与闸门互动后撤离点开启</td></tr><tr><td>轻装撤离点</td><td>EVAC_LIGHT</td><td>当玩家背包内无任何物品时方可撤离</td></tr><tr><td>信号弹撤离点</td><td>EVAC_FLARE</td><td>当玩家使用“荧光棒”在撤离点范围内右键时，会开启此撤离点<img src=".gitbook/assets/image (3).png" alt=""></td></tr></tbody></table>

## 如何设置撤离点

设置撤离点，共有两个方法：

| 方式        | 操作                                                                                         |
| --------- | ------------------------------------------------------------------------------------------ |
| 通过点位编辑器设置 | 左键点击选择撤离点类型，右键点击设置                                                                         |
| 通过命令设置    | 在地图编辑器内，输入`/mtkv set EVAC_<类型> Evac-<名称>` 则会在当前位置设置撤离点![](<.gitbook/assets/image (2).png>) |

#### 如何设置拉闸撤离点？

首先需要创建一个**拉闸撤离点**，点位放置完成后在**预期位置放置闸门点，**&#x5E76;在弹出的**告示牌**内**填入拉闸撤离点对应的ID**

> 例如：<kbd>**\[GATE] Evac-1**</kbd>  对应ID为 <kbd>**1**</kbd>

#### 设置战局撤离点随机刷新数

```
/mtkv setmanage evaccount <地图> <数量>
```
