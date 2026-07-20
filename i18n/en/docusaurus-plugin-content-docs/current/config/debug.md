---
title: "🐞 Debug Configuration File"
description: "debug.yml debugging configuration guide"
---

# 🐞 Debug Configuration File

`debug.yml` is for debug options that are not suitable to leave enabled on a production server long term.

The default template currently contains only a few options, but it is well suited for temporarily enabling checks while troubleshooting compatibility or environment issues.

## Compatibility Detection Report

`mtkv.compat.debug-report-on-enable`

Purpose:

* Outputs a compatibility detection report when the plugin is enabled

Default value:

* `false`

Recommendation:

* Keep it disabled on production servers
* Enable it when troubleshooting “why certain features were automatically disabled”

:::tip
If you also enable `mtkv.compat.debug-log-client-brand` in [core.yml](/docs/config/core), it is usually easier to troubleshoot client compatibility issues together.
:::

## Complete Default File

```yml
# MinecraftTarkov debug configuration: debug.yml

## Compatibility detection report
mtkv.compat.debug-report-on-enable: false
```
