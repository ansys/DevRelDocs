---
category: logic
plugin: core
license: None
Version: 0.0.0
---

# logic:same fields container?

## Version

0.0.0

## Changelog

- Version 0.0.0: Initial release.

## Description

Checks if two fields containers are identical.


## Inputs

| Input | Name | Expected type(s) | Description |
|-------|-------|------------------|-------------|
| <strong>Pin 0</strong> <br><span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  fields_containerA |[`fields_container`](./../../getting-started/using-data-containers.md#fields-container) |  |
| <strong>Pin 1</strong> <br><span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  fields_containerB |[`fields_container`](./../../getting-started/using-data-containers.md#fields-container) |  |
| <strong>Pin 2</strong>|  small_value |[`double`](./../../getting-started/using-data-containers.md#double) | Double positive small value. Smallest value which will be considered during the comparison step. All the abs(values) in the field less than this value are considered as null, (default value:1.0e-14). |
| <strong>Pin 3</strong>|  tolerance |[`double`](./../../getting-started/using-data-containers.md#double) | Double relative tolerance. Maximum tolerance gap between two compared values. Values within relative tolerance are considered identical (v1-v2)/v2 < relativeTol (default is 0.001). |


## Outputs

| Output |  Name | Expected type(s) | Description |
|-------|------|------------------|-------------|
|  **Pin 0**| boolean |[`bool`](./../../getting-started/using-data-containers.md#bool) | bool (true if identical...) |
|  **Pin 1**| message |[`string`](./../../getting-started/using-data-containers.md#string) |  |

## Configurations

| Name| Expected type(s) | Default value | Description |
|-----|------|----------|-------------|
| **mutex** |[`bool`](./../../getting-started/using-data-containers.md#bool) | false | If this option is set to true, the shared memory is prevented from being simultaneously accessed by multiple threads. |

## Scripting

 **Category**: logic

 **Plugin**: core

 **Scripting name**: identical_fc

 **Full name**: logic.identical_fc

 **Internal name**: AreFieldsIdentical_fc

 **License**: None
 
