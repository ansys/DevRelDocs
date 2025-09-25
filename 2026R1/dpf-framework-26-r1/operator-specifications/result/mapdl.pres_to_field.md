---
category: result
plugin: mapdl
license: None
---

# result:pres to field

**Version: 0.0.0**

## Description

Read the presol generated file from mapdl.

## Inputs

| Input | Name | Expected type(s) | Description |
|-------|-------|------------------|-------------|
| <strong>Pin 0</strong> <br><span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  filepath |[`string`](../../core-concepts/dpf-types.md#standard-types) | filepath |
| <strong>Pin 1</strong>|  columns_to_read |[`int32`](../../core-concepts/dpf-types.md#standard-types) | columns_to_read |

## Outputs

| Output |  Name | Expected type(s) | Description |
|-------|------|------------------|-------------|
|  **Pin 0**| field |[`field`](../../core-concepts/dpf-types.md#field) |  |

## Configurations

| Name| Expected type(s) | Default value | Description |
|-----|------|----------|-------------|
| **mutex** |[`bool`](../../core-concepts/dpf-types.md#standard-types) | false | If this option is set to true, the shared memory is prevented from being simultaneously accessed by multiple threads. |

## Scripting

 **Category**: result

 **Plugin**: mapdl

 **Scripting name**: mapdl.pres_to_field

 **Full name**: result.mapdl.pres_to_field

 **Internal name**: PRES_Reader

 **License**: None


## Changelog

- Version 0.0.0: Initial release.