---
category: math
plugin: core
license: None
Version: 0.0.0
---

# math:unit convert

## Version

0.0.0

## Changelog

- Version 0.0.0: Initial release.

## Description

Converts an input field/fields container or mesh of a given unit to another unit.


## Inputs

| Input | Name | Expected type(s) | Description |
|-------|-------|------------------|-------------|
| <strong>Pin 0</strong> <br><span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  entity_to_convert |[`field`](./../../core-concepts/dpf-types#field), [`fields_container`](./../../core-concepts/dpf-types#fields-container), [`abstract_meshed_region`](./../../core-concepts/dpf-types#abstract-meshed-region), [`meshes_container`](./../../core-concepts/dpf-types#meshes-container) |  |
| <strong>Pin 1</strong> <br><span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  unit_name |[`string`](./../../core-concepts/dpf-types#standard-types), [`int32`](./../../core-concepts/dpf-types#standard-types) | unit as a string, ex 'm' for meter, 'Pa' for pascal,... Or ansys unit system's ID |


## Outputs

| Output |  Name | Expected type(s) | Description |
|-------|------|------------------|-------------|
|  **Pin 0**| converted_entity |[`field`](./../../core-concepts/dpf-types#field), [`fields_container`](./../../core-concepts/dpf-types#fields-container), [`abstract_meshed_region`](./../../core-concepts/dpf-types#abstract-meshed-region), [`meshes_container`](./../../core-concepts/dpf-types#meshes-container) | the output entity is the same as the input (inplace operator) |

## Configurations

| Name| Expected type(s) | Default value | Description |
|-----|------|----------|-------------|
| **mutex** |[`bool`](./../../core-concepts/dpf-types#standard-types) | false | If this option is set to true, the shared memory is prevented from being simultaneously accessed by multiple threads. |
| **permissive** |[`bool`](./../../core-concepts/dpf-types#standard-types) | false | If this option is set to true, warning checks (like unit or data sizes) won't be done. |

## Scripting

 **Category**: math

 **Plugin**: core

 **Scripting name**: None

 **Full name**: None

 **Internal name**: unit_convert

 **License**: None
 
