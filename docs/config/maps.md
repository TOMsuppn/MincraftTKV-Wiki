---
title: "🗺️ 地图配置文件"
description: "maps.yml 地图级配置说明"
---

# 🗺️ 地图配置文件

`maps.yml` 用于控制每张地图的显示名称、战局数量以及战局开始或结束时的附加行为。

## 基础结构

```yml
maps:
  Factory:
    displayName: 工厂
    maxMatches: 3
    evacRefreshCount: 0
```

其中：

* `Factory` 是地图 ID
* `displayName` 是游戏内显示名称
* `maxMatches` 是该地图允许同时创建的战局数量
* `evacRefreshCount` 是撤离点刷新相关配置

## 战局结束后重建世界

如果某张地图在战局过程中会被玩家明显破坏，或者你希望每一局结束后都恢复到模板初始状态，可以开启 `resetWorldOnMatchEnd`。

默认值为 `false`，不填写时不会影响现有行为。

```yml
maps:
  Factory:
    displayName: 工厂
    maxMatches: 3
    evacRefreshCount: 0
    resetWorldOnMatchEnd: true
```

开启后，该地图的战局在结束并完成常规清理后，会额外执行一次世界重建流程：

* 主线程卸载当前战局世界
* 异步删除旧世界并重新拷贝模板
* 主线程重新加载世界，并同步刷新该战局对应的 LootBox 数据

:::tip
建议只对确实需要“每局还原地图”的地图开启此项，以减少不必要的重建开销。
:::

## 战局开始时执行命令

如果你希望战局开始后自动调整时间、天气，或者广播提示信息，可以为地图配置 `onMatchStartCommands`。

这些命令会在战局进入运行状态时自动执行，并以控制台身份 `dispatchCommand`。

```yml
maps:
  Factory:
    displayName: 工厂
    maxMatches: 3
    onMatchStartCommands:
      - "time set day {world}"
      - "weather clear {world}"
      - "say 地图 {map} 战局 {match} 已开始"
```

### 支持的占位符

* `{world}`: Bukkit 世界名，例如 `MTKV/matches/Factory_matches/Factory_match_1`
* `{map}`: 地图 ID，例如 `Factory`
* `{match}`: 战局序号，例如 `1`

### 使用建议

* 适合用于设置开局时间、天气、游戏规则或发送提示消息
* 如果命令中包含目标世界，请优先使用 `{world}`，避免写死具体战局名称
* 命令由控制台执行，因此无需玩家在线或拥有权限

## 使用实例

### 示例 1：每局结束后自动还原工厂地图

```yml
maps:
  Factory:
    displayName: 工厂
    maxMatches: 3
    evacRefreshCount: 0
    resetWorldOnMatchEnd: true
```

适合用于：

* 玩家会频繁破坏方块的地图
* 需要每局都恢复到模板初始状态的地图

### 示例 2：战局开始时自动设置时间和天气

```yml
maps:
  Factory:
    displayName: 工厂
    maxMatches: 3
    onMatchStartCommands:
      - "time set day {world}"
      - "weather clear {world}"
      - "say 地图 {map} 战局 {match} 已开始"
```

适合用于：

* 统一每局开场环境
* 开局发送广播或调试提示
