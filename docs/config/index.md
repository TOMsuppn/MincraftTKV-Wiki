---
title: "⚙️ 配置文件总览"
description: "MinecraftTKV 配置文件使用说明"
---

# ⚙️ 配置文件总览

MinecraftTKV 的配置大致可以分成几类：

* 核心功能配置：决定语言、兼容性、经济、进度、战令与性能表现
* 玩法内容配置：决定地图、市场、任务、商人等系统是否开放以及如何运行
* 商人价格表：决定商人收购分类、小时出售库存、价格浮动和购买门槛
* 数据模板配置：决定战利品模板、点位、运行时会话等内容

## 推荐修改顺序

如果是第一次部署新服，建议按下面的顺序配置：

1. 先改 `core.yml`
2. 再配置 `maps.yml`
3. 按需开启 `market.yml`、`tasks.yml`
4. 最后再扩展更多玩法内容配置

## 建议先看的文件

* [核心配置 `core.yml`](/docs/config/core)：全服基础体验总开关
* [地图配置 `maps.yml`](/docs/config/maps)：地图数量、地图行为、战局附加逻辑
* [市场配置 `market.yml`](/docs/config/market)：市场开关、税率、价格范围、GUI
* [武器系统配置 `weapons.yml`](/docs/config/weapons)：枪械、弹药、附件、护甲穿透与武器商店
* [钥匙卡系统配置 `keycards.yml`](/docs/config/keycards)：钥匙卡样式、来源、掉落与门禁使用
* [Bot 配置 `config/bot`](/docs/config/bot)：SA/COB 类型、装备、掉落、寻路与战斗行为
* [任务配置 `tasks.yml`](/docs/config/tasks)：每日任务刷新、模板、奖励
* [调试配置 `debug.yml`](/docs/config/debug)：排查兼容性问题时使用

## 修改前建议

* 改配置前先备份
* 改完后重启或重载，并确认没有 YAML 缩进错误
* 金额建议保留两位小数
* 列表配置要注意 `-` 的缩进层级

:::tip
如果你只想先把服务器跑起来，优先看 `core.yml` 和 `maps.yml` 就够了，其他内容都可以后续慢慢补。
:::
