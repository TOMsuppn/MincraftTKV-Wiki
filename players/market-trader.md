---
description: 关于 /market trader 命令，商人入口功能的信息
layout:
  width: default
  title:
    visible: true
  description:
    visible: true
  tableOfContents:
    visible: true
  outline:
    visible: true
  pagination:
    visible: true
  metadata:
    visible: true
  tags:
    visible: true
tags:
  - wan-jia-ming-ling
---

# Market Trader（商人入口）

### `/market trader [traderId]`

#### 命令格式：

```
/market trader
/market trader <traderId>
```

#### 执行对象：

* 仅**玩家**

#### 权限：

* **minecrafttkv.market.use**

#### 用途：

* 打开商人列表
* 或直接打开指定商人界面

#### 功能说明：

* 不填写 `traderId` 时，打开商人列表
* 填写 `traderId` 时，尝试直接进入对应商人界面
* **Tab 补全**会根据当前已知商人 ID 提供建议

#### 常见示例：

```
/market trader
/market trader prapor
```

#### 注意事项：

* **仅玩家**可以执行
* 如果商人系统未初始化，命令会直接提示无法使用
* 当前版本中，商人入口同样受到**藏身处限制**

***
