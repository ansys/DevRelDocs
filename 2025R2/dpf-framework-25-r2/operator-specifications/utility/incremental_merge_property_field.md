---
category: utility
plugin: core
license: None
Version: 0.0.0
---

# utility:incremental property field

Version: 0.0.0


## Description

Incrementaly merge the input.


## Inputs


| Input | Name | Expected type(s) | Description |
|-------|-------|------------------|-------------|
| <strong>Pin 0</strong> <br><span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span> | input |[`property_field`](../../core-concepts/dpf-types.md#property-field) |  |

## Outputs


| Output | Name | Expected type(s) | Description |
|-------|------|------------------|-------------|
| **Pin 0** | incremented_result | |  |

## Configurations

| Name| Expected type(s) | Default value | Description |
|-----|------|----------|-------------|
| **mutex** |[`bool`](../../core-concepts/dpf-types.md#standard-types) | false | If this option is set to true, the shared memory is prevented from being simultaneously accessed by multiple threads. |


## Scripting

 **Category**: utility

 **Plugin**: core

 **Scripting name**: incremental::merge::property_field

 **Full name**: utility.incremental::merge::property_field

 **Internal name**: incremental::merge::property_field

 **License**: None
 

## Changelog

- Version 0.0.0: Initial release.