---
category: logic
plugin: core
license: None
---

# logic:same fields?

## Description

Check if two fields are identical.

### Plugin

core

## Inputs

| Input | Name | Expected type(s) | Description |
|-------|-------|------------------|-------------|
| <strong>Pin 0</strong> <span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  fieldA |[`field`](../../getting-started/using-data-containers.md#field) |  |
| <strong>Pin 1</strong> <span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  fieldB |[`field`](../../getting-started/using-data-containers.md#field) |  |
| <strong>Pin 2</strong>|  double_value |[`double`](../../getting-started/using-data-containers.md#double) | Double positive small value. Smallest value which will be considered during the comparison step. All the abs(values) in the field less than this value are considered as null, (default value:1.0e-14). |
| <strong>Pin 3</strong>|  double_tolerance |[`double`](../../getting-started/using-data-containers.md#double) | Double relative tolerance. Maximum tolerance gap between two compared values. Values within relative tolerance are considered identical(v1 - v2) / v2 < relativeTol(default is 0.001). |


## Outputs

| Output |  Name | Expected type(s) | Description |
|-------|------|------------------|-------------|
| <strong>Pin 0</strong> <span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span> | boolean |[`bool`](../../getting-started/using-data-containers.md#bool) | bool (true if identical...) |
| <strong>Pin 1</strong> <span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span> | message |[`string`](../../getting-started/using-data-containers.md#string) |  |

## Configurations

| Name| Expected type(s) | Default value | Description |
|-----|------|----------|-------------|
| **mutex** |[`bool`](../../getting-started/using-data-containers.md#bool) | false | If this option is set to true, the shared memory is prevented from being simultaneously accessed by multiple threads. |

## Scripting

- Category: logic
- Plugin: core
- Scripting name: identical_fields
- Full name: logic.identical_fields
- Internal name: AreFieldsIdentical
- License: None
  