---
title: "🧾 更新日志"
description: "新特性、新功能与版本变更记录"
displayed_sidebar: null
pageClassName: changelog-page
toc_min_heading_level: 2
toc_max_heading_level: 2
---

# 🧾 更新日志

<div className="release-entry release-entry--featured">
  <aside className="release-tags" aria-label="版本标签">
    <span className="release-tag release-tag--alpha">Beta.1</span>
    <span className="release-tag release-tag--pre">Preview</span>
    <p className="release-date">2026-07-14</p>
  </aside>
  <div className="release-content">

## <span className="release-version">MinecraftTKV Beta.1-Preview3 v0.01.0060</span>

:::tip 更新内容
- `[~]` 调整 `hideout.yml` 注释
- `[~]` 删除部分 `market.yml` 配置选项
- `[~]` 调整钥匙房设置提示
- `[~]` 调整点位编辑器提示和 GUI 样式
- `[~]` 调整钥匙房 GUI 样式，不包含下载方式和无关内容
:::
  </div>
</div>

<div className="release-entry">
  <aside className="release-tags" aria-label="版本标签">
    <span className="release-tag release-tag--alpha">Beta.1</span>
    <span className="release-tag release-tag--pre">Preview</span>
    <p className="release-date">2026-07-12</p>
  </aside>
  <div className="release-content">

## <span className="release-version">MinecraftTKV Beta.1-Preview2 v0.01.0055</span>

:::tip 更新内容
- `[~]` 调整社交系统：修改好友申请提示样式和音效
- `[~]` 删除发送好友申请时的重复提示
- `[~]` 修改队伍邀请提示和音效
- `[~]` 修改队伍聊天提示
- `[~]` 统一好友与队伍在线提示
- `[~]` 修改队伍匹配提示
- `[~]` 优化 NMSBot 寻路方式，隐藏部分 Bot 选项
:::
  </div>
</div>

<div className="release-entry">
  <aside className="release-tags" aria-label="版本标签">
    <span className="release-tag release-tag--alpha">Beta.1</span>
    <span className="release-tag release-tag--hotfix">Hotfix</span>
    <p className="release-date">2026-07-05</p>
  </aside>
  <div className="release-content">

## <span className="release-version">MinecraftTKV Beta.1-Preview1-Hotfix3 v0.01.0047</span>

:::warning 更新内容
- `[~]` 优化 NMSBot 战局内性能与寻路调度（#36）
- `[+]` ItemLab 支持物品堆叠
- `[~]` 修复玩家击败 AI 后人机同步导致玩家无法获得击杀的问题
- `[~]` 修复 COB 配置文件不可用及 SA 与 COB 配置文件混用问题
- `[~]` 拓宽人机可携带物品的上限
- `[~]` 修复 QA 枪械无法识别 MTKV 人机头部的问题
- `[+]` SA 物品留空时会像 COB 一样掉落 ItemLab 物品
- `[~]` 优化插件版权说明、封包与 NMS-A* 调试信息
- `[~]` 修复 MTKV 枪械系统对 NMSBot 伤害异常问题
:::

注：该版本对全体用户开放。
  </div>
</div>

<div className="release-entry">
  <aside className="release-tags" aria-label="版本标签">
    <span className="release-tag release-tag--alpha">Beta.1</span>
    <span className="release-tag release-tag--hotfix">Hotfix</span>
    <p className="release-date">2026-07-04</p>
  </aside>
  <div className="release-content">

## <span className="release-version">MinecraftTKV Beta.1-Preview1-Hotfix2 v0.01.0038</span>

:::warning 更新内容
- `[~]` 修复 QA 插件枪无法正常造成伤害的问题
- `[+]` 新增 QueueV3 匹配等待系统
- `[~]` 修复仓库满后取出物品再放入仍提示仓库已满的问题
- `[~]` 修复商人价格表 XLSX 因 POI/XMLBeans 混淆导致读取失败的问题
- `[~]` 修复无法为物品库添加模组物品的问题
- `[+]` 新增通过手持物品导入物品库的功能：`/mtkv itemlab import <itemlabId> <category>`
- `[~]` 修复玩家或 AI 死亡后遗留战利品箱阻挡路径的问题，尸体不再拥有碰撞体积
- `[~]` 禁用藏身处在和平模式下自然回血，仅保留栖息处升级的回血效果
- `[~]` Bot/后台配置默认命名从 PMC/SCAV 统一改为 SA/COB，并保留旧名称兼容
:::

注：该版本对全体用户开放。
  </div>
</div>

<div className="release-entry">
  <aside className="release-tags" aria-label="版本标签">
    <span className="release-tag release-tag--alpha">Beta.1</span>
    <span className="release-tag release-tag--hotfix">Hotfix</span>
    <p className="release-date">2026-06-27</p>
  </aside>
  <div className="release-content">

## <span className="release-version">MinecraftTKV Beta.1-Preview1-Hotfix1</span>

:::warning 更新内容
- `[~]` 修复枪械 `automatic` 关闭后仍会自动射击的问题
- `[~]` 修复枪械 `fire_rate` 射速异常与发射间隔不稳定的问题
- `[~]` 修复 `mtkv reset` / `config reload` 不重载枪械配置的问题
- `[~]` 隐藏启动时逐条加载枪械和弹药的控制台提示
- `[+]` 商人支持自定义售卖物品，包括 TaCZ 枪包、模组物品等
- `[~]` 锁定商人价格编辑表中的不可编辑区域，防止误改
- `[+]` ItemLab 配置支持模组物品 ID，例如 KubeJS 自定义物品
- `[~]` 修复部分 AI 玩家异常变成卫道士的问题
- `[+]` AI 支持配置额外掉落物，并修复掉落配置不生效的问题
- `[+]` Core 新增 Shift + F 快捷菜单启用开关
- `[~]` 修复 COB 只掉落武器、不掉落其他类别物品的问题
- `[~]` 禁止钥匙卡物品重叠，修复重复刷卡一次性消耗多张钥匙卡的问题
- `[~]` 修复换弹时边开枪边换弹的问题，并调低枪械声音
- `[+]` 兼容 QA 插件，修复与 MTKV 枪械冲突的问题
- `[+]` 增加钥匙房动画方块种类
- `[+]` 新增大量 PAPI 变量
- `[~]` 修复闸门撤离点、露天刷新点、动态随机事件、材质包枪械显示等问题
- `[~]` 修复混合端 NMS 异常、NMS 机器人无法使用及 Bot 表现问题
- `[+]` `debugmode` 下可用 NMS 调试功能
- `[~]` 将 Bot 命名池转移到对应 Bot 配置文件
:::
  </div>
</div>

<div className="release-entry">
  <aside className="release-tags" aria-label="版本标签">
    <span className="release-tag release-tag--alpha">Beta.1</span>
    <span className="release-tag release-tag--pre">Preview</span>
    <p className="release-date">2026-06-20</p>
  </aside>
  <div className="release-content">

## <span className="release-version">MinecraftTKV Beta.1-Preview1 · v0.1.3</span>

### 重要修复

- 修复若干针对藏身处和战局副本的高危漏洞。
- 修复外接经济插件时原生经济功能无法正常使用的问题。
- 修复剧情模式对话保存丢失、预览破坏输入、ActionBar 不显示、时间线总时长异常等问题。
- 修复玩家重连时异常触发开场动画的问题。
- 修复 PMC 上楼、卡墙、绕路、近战判定，以及 PMC/SCAV 目标筛选与交战逻辑异常的问题。

### 新增内容

- 新增总览 GUI、战局管理器、物资箱管理器与物资箱最小刷新数配置。
- 新增战局时间限制、昼夜与天气系统、动态事件、露天刷新机制。
- 新增约 50 种物资箱、组队与好友、玩家取消匹配、玩家离线模型、声音系统和新 NMS API。
- 新增钥匙房与设置 GUI、战局指令黑名单/白名单、SCAV 掉落池与 PMC/SCAV 掉落概率控制。
- 新增自定义 AI 皮肤、物品库、物资箱、自定义 Excel 表格对照与商人自由收购功能。
- 新增栖息地、藏身处、烟熏炉等内容。

### AI 系统更新

- 全面加强 PMC 与 SCAV 人机逻辑。PMC 获得巡逻、战斗、搜索、撤离等状态机行为。
- PMC 会根据目标距离、视野、掩体、血量、补给状态做出决策，并搜索尸体与物资箱。
- PMC 会在低血量或物资较多时选择撤离，并根据 A* 路径、撤离点距离、风险值和开关条件选择路线。
- PMC 丢失目标后会前往最后已知位置搜索，找不到目标后返回巡逻；装备改为随机模板出装。
- 优化多个 AI 同时行动时的路径重叠问题，重新调整 SCAV 与 PMC 的攻击逻辑。
- SCAV 更名为 COB，PMC 更名为 SA。

### 物资与装备更新

- 物资箱点位与模板文件结构重构至 MigrationV3，物资箱管理器按编号分类，重复编号仅显示一个。
- 新增轻装、重装、狙击、支援、潜行等随机装备模板，更新 PMC 默认枪械、弹药、护甲与补给组合。
- 兼容旧装备 ID，例如 `ak74`、`m4a1`、`glock17`、`ammo_556` 等。
- 新增商人经济循环优化，支持 XConomy 兼容。
- 点位编辑器中 `cob`、`sa`、`boss`、`mm` 合并为 `bot` 分类。
- 优化撤离点条件提示，倒计时移动至 BossBar 显示。

### 平衡性调整

- 削弱 SCAV 强度，增强 PMC 强度。
- 优化 PMC 表现，使其更像独立行动的 AI 个体。

:::info 测试与材质包说明
1. 仅有申请测试的用户可以下载并运行插件。已申请但无法启动时，可在发布约 1 小时后重试；仍无法启动请联系 TOMsuppn。
2. 材质包为枪械提供支持，使用时需要在主配置文件中绑定直链供玩家下载。
:::
  </div>
</div>

<div className="release-entry release-entry--featured">
  <aside className="release-tags" aria-label="版本标签">
    <span className="release-tag release-tag--alpha">Alpha</span>
    <p className="release-date">2026-04-11</p>
  </aside>
  <div className="release-content">

## <span className="release-version">MinecraftTKV Alpha.2-rc2</span>

<div className="release-raw-list" aria-label="Alpha.2-rc2 更新日志">
  <p className="release-raw-line">{'[+] 插件启动线程优化，提示启动速度'}</p>
  <p className="release-raw-line">{'[+] 新增惩罚菜单'}</p>
  <p className="release-raw-line">{'[+] 新增1.20版本支持'}</p>
  <p className="release-raw-line">{'[+] 新增战令'}</p>
  <p className="release-raw-line">{'[+] 新增市场'}</p>
  <p className="release-raw-line">{'[+] 新增商人，任务'}</p>
  <p className="release-raw-line">{'[+] 加入更多任务条件,优化任务线形进度'}</p>
  <p className="release-raw-line">{'[~] 配置文件系统更新第二阶段完成开发'}</p>
  <p className="release-raw-line">{'[+] 新增独立随机撤离点设置项'}</p>
  <p className="release-raw-line">{'[~] 修复点位编辑器翻页键闪烁的问题'}</p>
  <p className="release-raw-line">{'[+] 为点位编辑器翻页键添加判断逻辑，当没有可翻页的选项时会隐藏按键'}</p>
  <p className="release-raw-line">{'[~] 修复跳蚤市场自定义价格无法正常使用的问题'}</p>
  <p className="release-raw-line">{'[+] 添加重置世界选项'}</p>
  <p className="release-raw-line">{'[+] 允许战局开始时设置自定义命令'}</p>
  <p className="release-raw-line">{'[~] 战局世界规则设置将与初始地图强同步'}</p>
</div>

<div className="release-raw-list release-raw-list--continued" aria-label="Alpha.2-rc2 追加更新日志">
  <p className="release-raw-line">{'[+] 新增技能系统'}</p>
  <p className="release-raw-line">{'[+] 战局内自动隐藏玩家标签'}</p>
  <p className="release-raw-line">{'[~] 已修复由于未及时清理闸门点旧盔甲架导致卡顿的问题'}</p>
  <p className="release-raw-line">{'[+] 适配MythicMobs生物生成'}</p>
  <p className="release-raw-line">{'[~] 优化SkillGUI'}</p>
  <p className="release-raw-line">{'[+] 新增外部经济插件支持'}</p>
  <p className="release-raw-line">{'[~] 修复resetWorldOnMatchEnd功能无法正常使用的问题'}</p>
  <p className="release-raw-line">{'[~] 修复物资箱在特定条件下无法跟随地图状态重置而刷新的问题'}</p>
</div>
  </div>
</div>

<div className="release-entry">
  <aside className="release-tags" aria-label="版本标签">
    <span className="release-tag release-tag--alpha">Alpha</span>
    <span className="release-tag release-tag--pre">PreTest</span>
    <p className="release-date">2026-04-04</p>
  </aside>
  <div className="release-content">

## <span className="release-version">MinecraftTKV-P2-Alpha.2-rc1 预发布版</span>

:::warning 更新内容
- `[+]` 新增独立随机撤离点设置项
- `[~]` 修复点位编辑器翻页键闪烁的问题
- `[+]` 为点位编辑器翻页键添加判断逻辑，当没有可翻页的选项时会隐藏按键
- `[~]` 修复跳蚤市场自定义价格无法正常使用的问题
- `[+]` 添加重置世界选项
- `[+]` 允许战局开始时设置自定义命令
- `[~]` 战局世界规则设置将与初始地图强同步
:::

:::info 注意事项
1. 插件本次更新会自动兼容旧版本配置文件，并备份升级到最新配置文件管理系统，启动时间可能会比以往更长。
2. 1.20.x 版本现已支持，但藏身处地图文件可能仍有少量新版本方块无法正常显示。
:::
  </div>
</div>

<div className="release-entry">
  <aside className="release-tags" aria-label="版本标签">
    <span className="release-tag release-tag--alpha">Alpha</span>
    <span className="release-tag release-tag--pre">PreTest</span>
    <p className="release-date">2026-03-28</p>
  </aside>
  <div className="release-content">

## <span className="release-version">MinecraftTKV-P1-Alpha.2-rc1 预发布版</span>

:::warning 更新内容
- `[+]` 插件启动线程优化，提示启动速度
- `[+]` 新增惩罚菜单
- `[+]` 新增 1.20 版本支持
- `[+]` 新增战令
- `[+]` 新增市场
- `[+]` 新增商人、任务
- `[+]` 加入更多任务条件，优化任务线形进度
- `[~]` 配置文件系统更新第二阶段完成开发
:::

:::info 注意事项
1. 插件本次更新会自动兼容旧版本配置文件，并备份升级到最新配置文件管理系统，启动时间可能会比以往更长。
2. 1.20.x 版本现已支持，但藏身处地图文件可能仍有少量新版本方块无法正常显示。
:::
  </div>
</div>

<div className="release-entry">
  <aside className="release-tags" aria-label="版本标签">
    <span className="release-tag release-tag--alpha">Alpha</span>
    <p className="release-date">2026-03-03</p>
  </aside>
  <div className="release-content">

## <span className="release-version">MinecraftTKV Alpha.1-rc.2-pre4</span>

:::tip 更新内容
- `[+]` 新增轻装、信号弹、拉闸撤离点
- `[+]` 新增闸门（gate）可设置点位
- `[+]` 新增战局撤离点随机刷新逻辑
- `[+]` 新增经济系统，可转账、冻结、经济排行榜
- `[+]` 新增统计信息列表，玩家可以查看上一次战局和总统计数据
- `[~]` 修复玩家在匹配中退出后无法重新开启匹配的问题
- `[+]` 新增进度系统和进度菜单，玩家可以通过获取经验值来升级获得货币奖励
- `[+]` 重制配置文件结构，以供适应新体系
:::

### 界面预览

![Alpha.1-rc.2-pre4 截图 1](/img/gitbook/e1bdd9f3074ca5c4acd1140171542625.png)

![Alpha.1-rc.2-pre4 截图 2](/img/gitbook/ae1569e090fd66e9439b3cf1c4aa61d2.png)

![Alpha.1-rc.2-pre4 截图 3](/img/gitbook/34487160da877dbef5a14cac33d4f127.png)
  </div>
</div>

<div className="release-entry">
  <aside className="release-tags" aria-label="版本标签">
    <span className="release-tag release-tag--alpha">Alpha</span>
    <p className="release-date">2026-02-28</p>
  </aside>
  <div className="release-content">

## <span className="release-version">MinecraftTKV Alpha.1-rc.2-pre3</span>

:::tip 更新内容
- `[~]` 修复物资编辑器中物品卡死 BUG
- `[+]` 新增 Scav 命名池自定义配置
- `[+]` 新增 Tab 菜单开关配置
- `[~]` 重构配置文件架构
- `[~]` 修复地图编辑器将点位设置在方块内部的 bug
- `[~]` 修复撤离点对创造 / 旁观玩家生效
- `[+]` 新增实验功能：PMC-BOT，当功能开启时 PMC 玩家会在战局人数不足时自动补全空位
:::
  </div>
</div>

<div className="release-entry">
  <aside className="release-tags" aria-label="版本标签">
    <span className="release-tag release-tag--alpha">Alpha</span>
    <span className="release-tag release-tag--hotfix">Hotfix</span>
    <p className="release-date">2026-02-23</p>
  </aside>
  <div className="release-content">

## <span className="release-version">MinecraftTKV Alpha.1-rc.2-pre2-hotfix2</span>

:::warning 更新内容
- `[~]` 修复玩家在藏身处无限制使用 `/play` 命令的 bug
- `[~]` 修复玩家在战局中开启新战局的 bug
- `[+]` 玩家在开局 10 秒倒计时期间会获得免疫伤害的效果
- `[+]` 玩家在藏身处时会获得免疫伤害的效果
- `[+]` 玩家不能再通过退出游戏的方式脱离战局
:::
  </div>
</div>

<div className="release-entry">
  <aside className="release-tags" aria-label="版本标签">
    <span className="release-tag release-tag--alpha">Alpha</span>
    <span className="release-tag release-tag--hotfix">Hotfix</span>
    <p className="release-date">2026-02-12</p>
  </aside>
  <div className="release-content">

## <span className="release-version">MinecraftTKV Alpha.1-rc.2-pre1-260212</span>

:::warning 更新内容
- `[+]` 更新藏身处地图文件，加入可存放物品的箱子、工作台等拓展内容
- `[~]` 优化玩家进入队列的速度
:::
  </div>
</div>

<div className="release-entry">
  <aside className="release-tags" aria-label="版本标签">
    <span className="release-tag release-tag--alpha">Alpha</span>
    <p className="release-date">2026-02-07</p>
  </aside>
  <div className="release-content">

## <span className="release-version">MinecraftTKV Alpha.1-rc.2-pre1</span>

:::tip 更新内容
- `[+]` 多队列系统
- `[+]` 玩家定位表：新增 `PLAYER_TO_LOBBY`
- `[+]` 房间预占用：新增 `RESERVED_MATCH_WORLDS`
- `[+]` `SEARCHING -> WAITING` 自动迁移
- `[+]` 分段计时机制
- `[+]` 最大人数动态化
- `[+]` BossBar 时间格式
- `[+]` `SEARCHING` 扫光标题
- `[~]` 兼容性修复：扫光动画不再依赖 `Bukkit.getCurrentTick()`
- `[-]` 移除旧等待机制
- `[-]` 移除 `SEARCHING` 进度累积逻辑
:::
  </div>
</div>

<div className="release-entry">
  <aside className="release-tags" aria-label="版本标签">
    <span className="release-tag release-tag--alpha">Alpha</span>
    <span className="release-tag release-tag--hotfix">Hotfix</span>
    <p className="release-date">2026-01-31</p>
  </aside>
  <div className="release-content">

## <span className="release-version">MinecraftTKV Alpha.1-rc.1-fix3</span>

:::warning 更新内容
- `[~]` 调整 TAB 菜单样式：“MinecraftTKV” 文字黄色扫光速度曲线调整为正弦函数
- `[~]` 调整插件启动提示信息，删除冗余的 debug log
- `[~]` 调整物资搜索菜单玻璃板颜色设置，加入区分暂停搜索和正在搜索的识别符；统一搜索提示文字为白色
- `[+]` 添加玩家通过点击正在搜索项目从而暂停搜索的功能
- `[~]` 将物资搜索时间调整为 `1.3s ~ 3.2s`（原 `2.8s`）；将尸体搜索时间调整为 `4.8s ~ 8.7s`（原 `5s`），且搜索时间与尸体绑定，不同玩家搜索时间一致
- `[~]` Scav 不再掉落战利品
- `[~]` 修复物资编辑系统有关“最大刷新值”的文本显示不一致问题
- `[-]` 移除“正在等待玩家”的 BossBar
- `[-]` 移除匹配状态提示信息等众多 Debug 信息
:::
  </div>
</div>
