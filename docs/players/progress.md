---
title: "📈 Mprogress（进度系统）"
description: "关于 /mprogress 命令，等级进度查看功能的信息"
tags:
  - wan-jia-ming-ling
---

# 📈 Mprogress（进度系统）

### `/mprogress [页码]`

#### 命令格式：

```
/mprogress
/mprogress <页码>
```

#### 执行对象：

* 仅**玩家**

#### 权限：

* **minecrafttkv.progress.use**

#### 用途：

* 打开等级进度 GUI
* 查看等级奖励和领取状态

#### 功能说明：

* 不填写页码时，系统会自动定位到当前最相关页
* 填写页码时，会尝试跳转到对应页面
* **Tab 补全**会根据当前总页数提供数字建议
* 界面中可查看当前等级、奖励节点和领取状态

#### 常见示例：

```
/mprogress
/mprogress 1
/mprogress 3
```

#### 注意事项：

* **仅玩家**可以执行
* 如果进度系统未启用，命令无法使用
* 如果页码不是数字，系统会提示格式错误

***
