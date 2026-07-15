---
title: "🧰 物资箱设置（types.yml）"
description: "types.yml 物资箱类型配置说明"
---

# 🧰 物资箱设置（types.yml）

## 配置结构示例

```yml
STANDARD:
  id-prefix: "Standard"
  display-name: "标准物资箱"
  material: CHEST
  slots: 45
  head-texture-url: "http://textures.minecraft.net/texture/8362438ff4ecf8f4a2caa1277561c9513c9a986dbe38a80b9bafcbfed8b2a9c8"
```

* `STANDARD`：内部识别 ID
* `id-prefix`：物资箱 ID 前缀，可在持有物资箱时查看
* `display-name`：物资箱展示名称
* `material`：物资箱材料，填写 Minecraft 物品名称 ID
* `slots`：物资箱格数；不是 GUI 格子倍数时会向上取整
* `head-texture-url`：当 `material` 为 `PLAYER_HEAD` 时使用的头颅皮肤 URL
