---
description: 关于 /mtkv punishment 命令，处罚菜单功能的信息
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
  - guan-li-ming-ling
---

# Punishment（惩罚）

### `/mtkv punishment <玩家|UUID>`

#### 命令格式：

```
/mtkv punishment <玩家|UUID>
```

#### 执行对象：

* 仅**玩家**

#### 权限：

* **minecrafttkv.punishment.use**

#### 用途：

* 打开处罚书本菜单
* 对目标玩家执行组合式处罚操作

#### 功能说明：

* 输入目标玩家后，会打开处罚书本菜单
* 管理员可以在菜单中选择不同处罚项
* 当前处罚逻辑通常围绕以下范围展开：
* 经济重置
* 战令重置
* 进度重置
* 背包清空
* 任务/声望重置
* 藏身处重置
* 菜单确认后会由处罚系统统一执行对应重置流程

#### 常见示例：

```
/mtkv punishment TOMsuppn
/mtkv punishment 550e8400-e29b-41d4-a716-446655440000
```

#### 注意事项：

* **仅玩家**可以执行，控制台不能直接打开处罚书本菜单
* 这是菜单式命令，不是纯文本多参数命令
* 插件内部还有 `__ack`、`__open`、`__confirm` 等内部动作命令，不建议手动输入
* 一旦确认执行，可能会触发数据重置、背包清空或后续通知流程

***
