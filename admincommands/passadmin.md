---
description: 关于 /mtkv passadmin 命令，战令系统管理功能的信息
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

# PassAdmin（通行证管理）

### `/mtkv passadmin ...`

#### 命令格式：

```
/mtkv passadmin give <玩家|UUID> <数量>
/mtkv passadmin premium <玩家|UUID> <on|off>
/mtkv passadmin wipe <玩家|UUID>
```

#### 执行对象：

* **玩家**
* **控制台**

#### 权限：

* 入口权限：**minecrafttkv.passadmin.use**
* 发放代币：**minecrafttkv.passadmin.give**
* 设置典藏：**minecrafttkv.passadmin.premium**
* 清空数据：**minecrafttkv.passadmin.wipe**

#### 用途：

* 管理玩家战令代币
* 管理玩家典藏资格
* 清空玩家战令数据

#### 功能说明：

* `give`：增加目标玩家战令代币
* `premium`：设置目标玩家战令典藏资格为 `on` 或 `off`
* `wipe`：重置目标玩家的战令数据
* 系统支持通过玩家名或 UUID 解析目标玩家

#### 常见示例：

```
/mtkv passadmin give TOMsuppn 20
/mtkv passadmin premium TOMsuppn on
/mtkv passadmin premium TOMsuppn off
/mtkv passadmin wipe TOMsuppn
```

#### 注意事项：

* `premium` 当前只接受 `on` / `off`
* `wipe` 会清空：
* 战令代币
* 典藏资格
* 已解锁等级
* 普通奖励领取记录
* 典藏奖励领取记录
* 如果目标玩家在线，部分操作会给对方发送同步提示

***
