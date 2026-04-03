---
title: "🐞 调试配置文件"
description: "debug.yml 调试配置说明"
---

# 🐞 调试配置文件

`debug.yml` 用于放置不适合长期在正式服开启的调试项。

目前默认模板中的内容较少，但它很适合在排查兼容性或环境问题时临时开启。

## 兼容性探测报告

`mtkv.compat.debug-report-on-enable`

作用：

* 在插件启用时输出兼容性探测报告

默认值：

* `false`

建议：

* 正式服保持关闭
* 当你需要排查“为什么某些功能被自动停用”时再开启

:::tip
如果你同时在 [core.yml](/docs/config/core) 中开启了 `mtkv.compat.debug-log-client-brand`，通常会更容易一起排查客户端兼容问题。
:::

## 完整默认文件

```yml
# MinecraftTarkov 调试配置 debug.yml

## 兼容性探测报告
mtkv.compat.debug-report-on-enable: false
```
