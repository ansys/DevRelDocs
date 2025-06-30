---
category: min_max
plugin: core
license: None
Version: 0.0.0
---

# min_max:min max by entity

## Version

0.0.0

## Changelog

- Version 0.0.0: Initial release.

## Description

Compute the entity-wise minimum (out 0) and maximum (out 1) through all fields of a fields container.


## Inputs


| Input | Name | Expected type(s) | Description |
|-------|-------|------------------|-------------|
| <strong>Pin 0</strong> <br><span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span> | fields_container |[`fields_container`](../../core-concepts/dpf-types.md#fields-container) |  |

## Outputs


| Output | Name | Expected type(s) | Description |
|-------|------|------------------|-------------|
| **Pin 0** | field_min |[`field`](../../core-concepts/dpf-types.md#field) |  |
| **Pin 1** | field_max |[`field`](../../core-concepts/dpf-types.md#field) |  |

## Configurations

| Name| Expected type(s) | Default value | Description |
|-----|------|----------|-------------|
| **mutex** |[`bool`](../../core-concepts/dpf-types.md#standard-types) | false | If this option is set to true, the shared memory is prevented from being simultaneously accessed by multiple threads. |


## Scripting

 **Category**: min_max

 **Plugin**: core

 **Scripting name**: None

 **Full name**: None

 **Internal name**: min_max_by_entity

 **License**: None
 
