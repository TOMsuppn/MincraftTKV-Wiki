---
title: "🔖 PAPI 变量"
description: "MinecraftTKV PlaceholderAPI 变量列表"
---

# 🔖 PAPI 变量

以下变量需要安装并启用 PlaceholderAPI。带有 `<traderId>` 的变量请替换为商人内部 ID。

## 经济

* `%mtkv_balance%`：玩家余额数字
* `%mtkv_currency_name%`：货币名称
* `%mtkv_currency_symbol%`：货币图标

## 进度与战令

* `%mtkv_level%`：玩家等级
* `%mtkv_xp_total%`：总经验数
* `%mtkv_xp_current%`：当前经验
* `%mtkv_xp_needed%`：升级所需经验
* `%mtkv_xp_max_level%`：最大等级数
* `%mtkv_tab_progress_line%`：升级进度条
* `%mtkv_pass_tokens%`：拥有的战令代币数

## 统计数据

* `%mtkv_total_raids%`：总战局数
* `%mtkv_total_raid_seconds%`：累计战局时长（秒）
* `%mtkv_total_ai_kills%`：击杀普通 AI 数量
* `%mtkv_total_player_kills%`：击杀玩家数量
* `%mtkv_total_pmc_kills%`：击杀 PMC Bot 数量
* `%mtkv_total_kdr%`：总 K/D 比
* `%mtkv_total_lootbox_opens%`：打开战利品箱次数
* `%mtkv_total_lootbox_items%`：从战利品箱拿取物品数量
* `%mtkv_total_corpse_searches%`：搜索尸体次数
* `%mtkv_total_corpse_items%`：从尸体拿取物品数量
* `%mtkv_total_evac_switches%`：触发撤离开关次数
* `%mtkv_total_move_blocks%`：移动距离（方块）
* `%mtkv_success_evac_count%`：成功撤离次数
* `%mtkv_disconnect_count%`：掉线结算次数
* `%mtkv_defeated_lost_count%`：战败或失去装备次数
* `%mtkv_last_raid_outcome%`：上一局结果
* `%mtkv_last_raid_xp%`：上一局获得的经验
* `%mtkv_last_raid_duration%`：上一局时长（秒）

## 技能

* `%mtkv_skill_search_speed_level%` / `%mtkv_skill_search_speed_exp%` / `%mtkv_skill_search_speed_bonus%`：搜索速度等级、经验、加成百分比
* `%mtkv_skill_concurrent_search_level%` / `%mtkv_skill_concurrent_search_exp%` / `%mtkv_skill_concurrent_search_slots%`：并发搜索等级、经验、额外栏位
* `%mtkv_skill_auto_search_level%` / `%mtkv_skill_auto_search_exp%`：自动搜索等级、经验
* `%mtkv_skill_knockback_level%` / `%mtkv_skill_knockback_exp%` / `%mtkv_skill_knockback_bonus%`：击退等级、经验、加成百分比

## 战局、任务、商人与市场

* `%mtkv_in_raid%`：是否处于战局中，返回 `true/false`
* `%mtkv_match_map_id%` / `%mtkv_match_map_name%`：当前地图 ID / 显示名
* `%mtkv_match_index%` / `%mtkv_match_world%`：战局实例编号 / 世界名
* `%mtkv_match_state%`：战局状态
* `%mtkv_match_players%`：登记玩家数量
* `%mtkv_match_remaining_seconds%`：剩余时间（不限时返回 `-1`）
* `%mtkv_preferred_map%`：首选地图 ID
* `%mtkv_task_active_count%` / `%mtkv_task_completed_count%` / `%mtkv_task_claimable_count%`：进行中、已完成、待领取任务数量
* `%mtkv_task_daily_key%`：每日任务周期标识
* `%mtkv_trader_rep_<traderId>%` / `%mtkv_trader_rep_formatted_<traderId>%`：商人声望原始值 / 格式化值
* `%mtkv_trader_level_<traderId>%`：商人等级
* `%mtkv_market_active_count%` / `%mtkv_market_my_active_count%`：全服 / 玩家自己的有效挂单数量
* `%mtkv_market_max_listings%`：最大上架数量
* `%mtkv_market_tax_rate%`：市场税率

## 社交与队伍

* `%mtkv_friends_count%`：好友数量
* `%mtkv_friend_requests_in%` / `%mtkv_friend_requests_out%`：收到 / 发出的好友请求数量
* `%mtkv_has_party%`：是否在队伍中
* `%mtkv_party_size%`：队伍人数
* `%mtkv_party_leader%`：队长名称
* `%mtkv_party_chat_enabled%`：是否启用队伍聊天
* `%mtkv_deny_party_invites%`：是否拒绝队伍邀请
