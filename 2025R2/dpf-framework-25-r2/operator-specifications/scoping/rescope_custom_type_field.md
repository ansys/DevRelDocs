---
category: scoping
plugin: core
license: None
Version: 0.0.0
---

# scoping:rescope custom type field

Version: 0.0.0


## Description

Rescopes a custom type field on the given scoping. If an ID does not exist in the original custom type field, the default value (in 2) is used when defined.


## Inputs


| Input | Name | Expected type(s) | Description |
|-------|-------|------------------|-------------|
| <strong>Pin 0</strong> <br><span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span> | fields |[`custom_type_fields_container`](../../core-concepts/dpf-types.md#custom-type-fields-container), [`custom_type_field`](../../core-concepts/dpf-types.md#custom-type-field) |  |
| <strong>Pin 1</strong> | mesh_scoping |[`scoping`](../../core-concepts/dpf-types.md#scoping), [`vector<int32>`](../../core-concepts/dpf-types.md#standard-types) |  |
| <strong>Pin 2</strong> | default_value |[`custom_type_field`](../../core-concepts/dpf-types.md#custom-type-field), [`custom_type_field`](../../core-concepts/dpf-types.md#custom-type-field) | If pin 2 is used, the IDs not found in the custom type field are added with this default value. |

## Outputs


| Output | Name | Expected type(s) | Description |
|-------|------|------------------|-------------|
| **Pin 0** | fields |[`custom_type_fields_container`](../../core-concepts/dpf-types.md#custom-type-fields-container), [`custom_type_field`](../../core-concepts/dpf-types.md#custom-type-field) |  |

## Configurations

| Name| Expected type(s) | Default value | Description |
|-----|------|----------|-------------|
| **mutex** |[`bool`](../../core-concepts/dpf-types.md#standard-types) | false | If this option is set to true, the shared memory is prevented from being simultaneously accessed by multiple threads. |
| **num_threads** |[`int32`](../../core-concepts/dpf-types.md#standard-types) | 0 | Number of threads to use to run in parallel |
| **run_in_parallel** |[`bool`](../../core-concepts/dpf-types.md#standard-types) | true | Loops are allowed to run in parallel if the value of this config is set to true. |


## Scripting

 **Category**: scoping

 **Plugin**: core

 **Scripting name**: rescope_custom_type_field

 **Full name**: scoping.rescope_custom_type_field

 **Internal name**: Rescope_ctf

 **License**: None
 

## Changelog

- Version 0.0.0: Initial release.