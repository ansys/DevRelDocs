---
category: utility
plugin: core
license: None
---

# utility:bind support (fields container)

**Version: 0.0.0**

## Description

Ties a support to a fields container.

## Inputs

| Input | Name | Expected type(s) | Description |
|-------|-------|------------------|-------------|
| <strong>Pin 0</strong> <br><span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  fields_container |[`fields_container`](../../core-concepts/dpf-types.md#fields-container) |  |
| <strong>Pin 1</strong> <br><span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  support |[`abstract_meshed_region`](../../core-concepts/dpf-types.md#meshed-region), `abstract_field_support`, [`time_freq_support`](../../core-concepts/dpf-types.md#time-freq-support) | Meshed region or a support of the field. |

## Outputs

| Output |  Name | Expected type(s) | Description |
|-------|------|------------------|-------------|
|  **Pin 0**| fields_container |[`fields_container`](../../core-concepts/dpf-types.md#fields-container) |  |

## Configurations

| Name| Expected type(s) | Default value | Description |
|-----|------|----------|-------------|
| **mutex** |[`bool`](../../core-concepts/dpf-types.md#standard-types) | false | If this option is set to true, the shared memory is prevented from being simultaneously accessed by multiple threads. |

## Scripting

 **Category**: utility

 **Plugin**: core

 **Scripting name**: bind_support_fc

 **Full name**: utility.bind_support_fc

 **Internal name**: BindSupportFC

 **License**: None


## Changelog

- Version 0.0.0: Initial release.