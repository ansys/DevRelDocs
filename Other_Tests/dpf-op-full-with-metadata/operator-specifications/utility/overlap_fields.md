---
category: utility
plugin: core
license: None
---

# utility:overlap fields

## Description

Take two fields and superpose them, the overlapping field will override values of base_field.


## Inputs

| Input | Name | Expected type(s) | Description |
|-------|-------|------------------|-------------|
| <strong>Pin 0</strong>|  base_field |[`field`](../../getting-started/using-data-containers.md#field) |  |
| <strong>Pin 1</strong>|  overlapping_field |[`field`](../../getting-started/using-data-containers.md#field) |  |


## Outputs

| Output |  Name | Expected type(s) | Description |
|-------|------|------------------|-------------|
|  **Pin 0**| field |[`field`](../../getting-started/using-data-containers.md#field) |  |

## Configurations

| Name| Expected type(s) | Default value | Description |
|-----|------|----------|-------------|
| **mutex** |[`bool`](../../getting-started/using-data-containers.md#bool) | false | If this option is set to true, the shared memory is prevented from being simultaneously accessed by multiple threads. |

## Scripting

 **Category**: utility

 **Plugin**: core

 **Scripting name**: None

 **Full name**: None

 **Internal name**: overlap_fields

 **License**: None
