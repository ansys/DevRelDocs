---
category: utility
plugin: core
license: None
Version: 0.0.0
---

# utility:set property

## Version

0.0.0

## Changelog

- Version 0.0.0: Initial release.

## Description

Sets a property to an input field/field container.


## Inputs

| Input | Name | Expected type(s) | Description |
|-------|-------|------------------|-------------|
| <strong>Pin 0</strong> <br><span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  field |[`field`](../../core-concepts/dpf-types#field), [`fields_container`](../../core-concepts/dpf-types#fields-container) |  |
| <strong>Pin 1</strong> <br><span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  property_name |[`string`](../../core-concepts/dpf-types#standard-types) | Property to set |
| <strong>Pin 2</strong> <br><span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  property_value |[`string`](../../core-concepts/dpf-types#standard-types), [`int32`](../../core-concepts/dpf-types#standard-types), [`double`](../../core-concepts/dpf-types#standard-types) | Property to set |


## Outputs

| Output |  Name | Expected type(s) | Description |
|-------|------|------------------|-------------|
|  **Pin 0**| field |[`field`](../../core-concepts/dpf-types#field), [`fields_container`](../../core-concepts/dpf-types#fields-container) |  |

## Configurations

| Name| Expected type(s) | Default value | Description |
|-----|------|----------|-------------|
| **mutex** |[`bool`](../../core-concepts/dpf-types#standard-types) | false | If this option is set to true, the shared memory is prevented from being simultaneously accessed by multiple threads. |

## Scripting

 **Category**: utility

 **Plugin**: core

 **Scripting name**: set_property

 **Full name**: utility.set_property

 **Internal name**: field::set_property

 **License**: None
 
