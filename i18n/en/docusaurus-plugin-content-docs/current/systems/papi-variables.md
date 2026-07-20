---
title: "🔖 PAPI Variables"
description: "MinecraftTKV PlaceholderAPI variable list"
---

# 🔖 PAPI Variables

The following variables require PlaceholderAPI to be installed and enabled. For variables containing `<traderId>`, replace it with the trader's internal ID.

## Economy

* `%mtkv_balance%`: Player balance
* `%mtkv_currency_name%`: Currency name
* `%mtkv_currency_symbol%`: Currency icon

## Progress and Battle Pass

* `%mtkv_level%`: Player level
* `%mtkv_xp_total%`: Total XP
* `%mtkv_xp_current%`: Current XP
* `%mtkv_xp_needed%`: XP required to level up
* `%mtkv_xp_max_level%`: Maximum level
* `%mtkv_tab_progress_line%`: Level progress bar
* `%mtkv_pass_tokens%`: Number of battle pass tokens owned

## Statistics

* `%mtkv_total_raids%`: Total raids
* `%mtkv_total_raid_seconds%`: Total raid duration (seconds)
* `%mtkv_total_ai_kills%`: Number of regular AI kills
* `%mtkv_total_player_kills%`: Number of player kills
* `%mtkv_total_pmc_kills%`: Number of PMC Bot kills
* `%mtkv_total_kdr%`: Overall K/D ratio
* `%mtkv_total_lootbox_opens%`: Number of loot boxes opened
* `%mtkv_total_lootbox_items%`: Number of items taken from loot boxes
* `%mtkv_total_corpse_searches%`: Number of corpses searched
* `%mtkv_total_corpse_items%`: Number of items taken from corpses
* `%mtkv_total_evac_switches%`: Number of extraction switches triggered
* `%mtkv_total_move_blocks%`: Distance moved (blocks)
* `%mtkv_success_evac_count%`: Number of successful extractions
* `%mtkv_disconnect_count%`: Number of disconnect settlements
* `%mtkv_defeated_lost_count%`: Number of defeats or equipment losses
* `%mtkv_last_raid_outcome%`: Previous raid outcome
* `%mtkv_last_raid_xp%`: XP earned in the previous raid
* `%mtkv_last_raid_duration%`: Previous raid duration (seconds)

## Skills

* `%mtkv_skill_search_speed_level%` / `%mtkv_skill_search_speed_exp%` / `%mtkv_skill_search_speed_bonus%`: Search speed level, XP, and bonus percentage
* `%mtkv_skill_concurrent_search_level%` / `%mtkv_skill_concurrent_search_exp%` / `%mtkv_skill_concurrent_search_slots%`: Concurrent search level, XP, and additional slots
* `%mtkv_skill_auto_search_level%` / `%mtkv_skill_auto_search_exp%`: Auto-search level and XP
* `%mtkv_skill_knockback_level%` / `%mtkv_skill_knockback_exp%` / `%mtkv_skill_knockback_bonus%`: Knockback level, XP, and bonus percentage

## Raids, Tasks, Traders, and Market

* `%mtkv_in_raid%`: Whether the player is in a raid; returns `true/false`
* `%mtkv_match_map_id%` / `%mtkv_match_map_name%`: Current map ID / display name
* `%mtkv_match_index%` / `%mtkv_match_world%`: Raid instance number / world name
* `%mtkv_match_state%`: Raid state
* `%mtkv_match_players%`: Number of registered players
* `%mtkv_match_remaining_seconds%`: Remaining time (returns `-1` when unlimited)
* `%mtkv_preferred_map%`: Preferred map ID
* `%mtkv_task_active_count%` / `%mtkv_task_completed_count%` / `%mtkv_task_claimable_count%`: Number of active, completed, and claimable tasks
* `%mtkv_task_daily_key%`: Daily task cycle identifier
* `%mtkv_trader_rep_<traderId>%` / `%mtkv_trader_rep_formatted_<traderId>%`: Raw / formatted trader reputation
* `%mtkv_trader_level_<traderId>%`: Trader level
* `%mtkv_market_active_count%` / `%mtkv_market_my_active_count%`: Number of active listings across the server / owned by the player
* `%mtkv_market_max_listings%`: Maximum number of listings
* `%mtkv_market_tax_rate%`: Market tax rate

## Social and Parties

* `%mtkv_friends_count%`: Number of friends
* `%mtkv_friend_requests_in%` / `%mtkv_friend_requests_out%`: Number of received / sent friend requests
* `%mtkv_has_party%`: Whether the player is in a party
* `%mtkv_party_size%`: Party size
* `%mtkv_party_leader%`: Party leader name
* `%mtkv_party_chat_enabled%`: Whether party chat is enabled
* `%mtkv_deny_party_invites%`: Whether party invitations are denied
