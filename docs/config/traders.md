---
title: "🤝 商人配置文件"
description: "traders.yml 与 trader-prices.xlsx 商人系统配置说明"
---

# 🤝 商人配置文件

商人系统由两个文件共同配置：

- `config/traders/traders.yml`：功能开关、动态定价和商人定义。
- `config/traders/trader-prices.xlsx`：物品回收价、商人出售价、轮换库存与商人分类权限。

修改后可执行 `/mtkv config validate` 检查配置，再执行 `/mtkv config reload` 重载。

## traders.yml

```yaml
traders:
  enabled: true
```

`enabled`：商人功能总开关。

```yaml
  dynamic-pricing:
    enabled: true
    settlement-cadence: daily
    timezone: Asia/Shanghai
```

- `enabled`：是否启用动态回收价。
- `settlement-cadence`：当前仅支持 `daily`；其他值尚未定义结算语义。
- `timezone`：动态定价使用的时区。

```yaml
    defaults:
      daily-supply-target: 24
      min-multiplier: "0.70"
      max-multiplier: "1.10"
      oversupply-step: "0.08"
      recovery-step: "0.05"
      max-daily-drop: "0.18"
```

- `daily-supply-target`：默认每日供货目标。
- `min-multiplier` / `max-multiplier`：动态价格倍率下限与上限。
- `oversupply-step`：供过于求时的降价步长。
- `recovery-step`：供应恢复时的回升步长。
- `max-daily-drop`：单个结算日的最大降价幅度。

`categories` 可按 `supply`、`valuable`、`armament`、`material`、`keycard` 覆盖默认动态定价参数：

```yaml
    categories:
      supply:
        daily-supply-target: 18
        min-multiplier: "0.75"
        max-multiplier: "1.05"
      armament:
        daily-supply-target: 10
        min-multiplier: "0.70"
        max-multiplier: "1.12"
```

商人定义示例：

```yaml
  definitions:
    - id: broker
      displayName: "Kail"
      lore:
        - "§7偏向基础资源与回收"
      levelThresholds: [0.00, 1.20, 3.00, 6.00]

    - id: armorer
      displayName: "Robin"
      lore:
        - "§7偏向战斗资源与高阶材料"
      levelThresholds: [0.00, 1.38, 3.00, 6.00]
```

- `id`：商人内部 ID，必须与 Excel“商人分类”工作表的“商人ID”对应。
- `displayName`：商人展示名称。
- `lore`：商人界面中的描述。
- `levelThresholds`：各好感等级的升级门槛。

## trader-prices.xlsx

### 物品价格

“物品价格”工作表中，回收和出售是两个独立开关：

- D 列“回收启用”：决定商人是否可以从玩家手中回收该物品。
- K 列“出售启用”：决定该物品是否进入商人的每小时出售库存。
- D 与 K 互不影响；可以配置仅回收、仅出售或同时开启。
- K 列为空白时按“未启用出售”处理，必须显式填写 `TRUE` 才会加入库存。
- 旧表完全缺少 K 列时，Itemlab 导入会自动补列：旧行按原 D 列行为迁移，新导入行默认 `FALSE`。

主要列的含义：

| 列 | 配置 | 说明 |
| --- | --- | --- |
| A | 物品ID | Itemlab、枪械、弹药或武器杂项 ID |
| B | 展示名 | 仅用于阅读与管理，不作为唯一标识 |
| C | 分类 | `supply`、`valuable`、`armament`、`material`、`keycard` |
| D | 回收启用 | `TRUE`/`FALSE`，控制玩家向商人出售 |
| E–G | 回收定价 | 基础价、浮动下限、浮动上限 |
| H–J | 回收预览 | 由公式生成的最低价、最高价、平均价，不需手工填写 |
| K | 出售启用 | `TRUE`/`FALSE`，空白等于 `FALSE` |
| L | 出售权重 | 权重越高，每小时库存抽中概率越高；`0` 不会入选 |
| M–N | 出售门槛 | 所需好感度、所需进度等级 |
| O–Q | 出售定价 | 出售基础价、浮动下限、浮动上限 |

浮动列使用百分比格式，并必须满足 `-100% < 下限 <= 上限`；基础价必须大于 `0`。物品 ID 按不区分大小写的方式判定重复，请不要为同一 ID 配置多行。

### 物品 ID 前缀

Excel 支持以下 ID 格式：

| 格式 | 来源 |
| --- | --- |
| `<ItemlabID>` | 兼容写法，优先查找 Itemlab，再查找无前缀枪械 |
| `itemlab:<ItemlabID>` | 显式引用 `items.yml` 物品，建议 Mod 物品使用 |
| `weapon:<ID>` 或 `gun:<ID>` | 枪械注册表 |
| `ammo:<ID>` | 弹药注册表 |
| `weapon_misc:<ID>` 或 `misc:<ID>` | 武器系统杂项物品 |

使用 `itemlab:` 前缀时，冒号后应填写 Itemlab ID，不是 Mod 注册名。例如 `items.yml` 中模板 ID 为 `ThermalBattery`、`namespaced-id` 为 `thermal:battery`，Excel 应写 `itemlab:ThermalBattery`。

`itemlab:` 与裸 Itemlab ID、`gun:` 与 `weapon:`、`misc:` 与 `weapon_misc:` 会按同一物品别名处理，避免重复价格行和“能买不能回收”的不对称。

### 商人分类

“商人分类”工作表决定每个商人可以回收哪些分类，同时也限制该商人能抽取到哪些出售物品。

- “商人ID”必须与 `traders.yml` 中 `definitions[].id` 一致。
- `supply`、`valuable`、`armament`、`material`、`keycard` 布尔开关优先于旧版“收购分类”逗号列表。
- 开关单元格为 `TRUE` 时启用该分类，为 `FALSE` 时显式禁用；只有开关留空时才会回退读取逗号列表。
- `keycard` 与其他四类处理方式相同。如果该商人不应交易钥匙卡，请显式设为 `FALSE`。

### 重载与小时库存

商人出售库存通常按小时轮换。当修改 Excel 的出售开关、权重、价格、门槛、分类或 Itemlab 模板数量后，执行 `/mtkv config reload`；系统会检测库存来源变化，即使仍在同一小时也会重新生成库存，无需等待下一个整点。

如果重载后某个物品没有出现，请检查 K 列是否为 `TRUE`、L 列是否大于 `0`、出售基础价是否大于 `0`、商人是否开启对应分类，以及物品 ID 是否能由 Itemlab/武器注册表创建。
