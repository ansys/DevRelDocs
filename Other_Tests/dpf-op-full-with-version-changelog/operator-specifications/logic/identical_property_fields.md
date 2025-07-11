---
category: logic
plugin: core
license: None
Version: 0.0.0
---

# logic:same property fields?

## Version

0.0.0

## Changelog

- Version 0.0.0: Initial release.

## Description

Takes two property fields and compares them.


## Inputs

| Input | Name | Expected type(s) | Description |
|-------|-------|------------------|-------------|
| <strong>Pin 0</strong> <br><span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  property_fieldA |[`abstract_meshed_region`](../../getting-started/using-data-containers.md#abstract-meshed-region) |  |
| <strong>Pin 1</strong> <br><span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  property_fieldB |[`abstract_meshed_region`](../../getting-started/using-data-containers.md#abstract-meshed-region) |  |


## Outputs

| Output |  Name | Expected type(s) | Description |
|-------|------|------------------|-------------|
|  **Pin 0**| are_identical |[`bool`](../../getting-started/using-data-containers.md#bool) |  |
|  **Pin 1**| information |[`string`](../../getting-started/using-data-containers.md#string) |  |

## Configurations

| Name| Expected type(s) | Default value | Description |
|-----|------|----------|-------------|
| **mutex** |[`bool`](../../getting-started/using-data-containers.md#bool) | false | If this option is set to true, the shared memory is prevented from being simultaneously accessed by multiple threads. |

## Scripting

 **Category**: logic

 **Plugin**: core

 **Scripting name**: identical_property_fields

 **Full name**: logic.identical_property_fields

 **Internal name**: compare::property_field

 **License**: None
 
