---
title: "🧰 Supply Crate Settings (types.yml)"
description: "types.yml supply crate type configuration guide"
---

# 🧰 Supply Crate Settings (types.yml)

## Configuration Structure Example

```yml
STANDARD:
  id-prefix: "Standard"
  display-name: "Standard Supply Crate"
  material: CHEST
  slots: 45
  head-texture-url: "http://textures.minecraft.net/texture/8362438ff4ecf8f4a2caa1277561c9513c9a986dbe38a80b9bafcbfed8b2a9c8"
```

* `STANDARD`: internal identifier ID
* `id-prefix`: supply crate ID prefix, visible while holding a supply crate
* `display-name`: displayed supply crate name
* `material`: supply crate material; enter a Minecraft item name ID
* `slots`: number of supply crate slots; values that are not multiples of GUI rows are rounded up
* `head-texture-url`: head skin URL used when `material` is `PLAYER_HEAD`
