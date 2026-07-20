---
title: "🗺️ Map Configuration File"
description: "maps.yml map-level configuration guide"
---

# 🗺️ Map Configuration File

`maps.yml` controls each map's display name, number of matches, and additional behavior when a match starts or ends.

## Basic Structure

```yml
maps:
  Factory:
    displayName: Factory
    maxMatches: 3
    evacRefreshCount: 0
```

Where:

* `Factory` is the map ID
* `displayName` is the in-game display name
* `maxMatches` is the number of matches this map may create concurrently
* `evacRefreshCount` is configuration related to evacuation-point refreshes

## Rebuild the World After a Match Ends

If players can significantly damage a map during a match, or you want to restore it to its initial template state after every match, enable `resetWorldOnMatchEnd`.

The default is `false`. Leaving it unspecified does not affect existing behavior.

```yml
maps:
  Factory:
    displayName: Factory
    maxMatches: 3
    evacRefreshCount: 0
    resetWorldOnMatchEnd: true
```

When enabled, after a match on that map ends and normal cleanup is complete, an additional world rebuilding process runs:

* The current match world is unloaded on the main thread
* The old world is deleted asynchronously and the template is copied again
* The world is reloaded on the main thread, and the LootBox data for that match is refreshed synchronously

:::tip
Enable this only for maps that genuinely need to be restored after every match, to reduce unnecessary rebuilding overhead.
:::

## Run Commands When a Match Starts

To automatically adjust the time or weather, or broadcast a message after a match starts, configure `onMatchStartCommands` for the map.

These commands run automatically when the match enters its active state and are dispatched by the console using `dispatchCommand`.

```yml
maps:
  Factory:
    displayName: Factory
    maxMatches: 3
    onMatchStartCommands:
      - "time set day {world}"
      - "weather clear {world}"
      - "say Map {map}: match {match} has started"
```

### Supported Placeholders

* `{world}`: Bukkit world name, for example `MTKV/matches/Factory_matches/Factory_match_1`
* `{map}`: map ID, for example `Factory`
* `{match}`: match number, for example `1`

### Usage Recommendations

* Suitable for setting starting time, weather, game rules, or sending notices
* If a command includes the target world, prioritize `{world}` instead of hardcoding a specific match name
* Commands are executed by the console, so players do not need to be online or have permissions

## Examples

### Example 1: Automatically Restore the Factory Map After Every Match

```yml
maps:
  Factory:
    displayName: Factory
    maxMatches: 3
    evacRefreshCount: 0
    resetWorldOnMatchEnd: true
```

Suitable for:

* Maps where players frequently destroy blocks
* Maps that need to return to the initial template state after every match

### Example 2: Automatically Set Time and Weather When a Match Starts

```yml
maps:
  Factory:
    displayName: Factory
    maxMatches: 3
    onMatchStartCommands:
      - "time set day {world}"
      - "weather clear {world}"
      - "say Map {map}: match {match} has started"
```

Suitable for:

* Standardizing the starting environment for every match
* Sending a broadcast or debug message at the start of a match
