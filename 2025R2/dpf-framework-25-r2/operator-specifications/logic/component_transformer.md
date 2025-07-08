---
category: logic
plugin: core
license: None
Version: 0.0.0
---

# logic:component transformer (field)

Version: 0.0.0


## Description

Takes the input field and creates a field with overriden value on given components.


## Inputs


| Input | Name | Expected type(s) | Description |
|-------|-------|------------------|-------------|
| <strong>Pin 0</strong> <br><span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span> | field |[`field`](../../core-concepts/dpf-types.md#field), [`fields_container`](../../core-concepts/dpf-types.md#fields-container) |  |
| <strong>Pin 1</strong> <br><span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span> | component_number |[`int32`](../../core-concepts/dpf-types.md#standard-types), [`vector<int32>`](../../core-concepts/dpf-types.md#standard-types) | One or several component index that will be modified from the initial field. |
| <strong>Pin 2</strong> | default_value |[`double`](../../core-concepts/dpf-types.md#double) | Set a default value for components selected. |

## Outputs


| Output | Name | Expected type(s) | Description |
|-------|------|------------------|-------------|
| **Pin 0** | field |[`field`](../../core-concepts/dpf-types.md#field) |  |

## Configurations

| Name| Expected type(s) | Default value | Description |
|-----|------|----------|-------------|
| **mutex** |[`bool`](../../core-concepts/dpf-types.md#standard-types) | false | If this option is set to true, the shared memory is prevented from being simultaneously accessed by multiple threads. |


## Scripting

 **Category**: logic

 **Plugin**: core

 **Scripting name**: component_transformer

 **Full name**: logic.component_transformer

 **Internal name**: component_transformer

 **License**: None
 

## Changelog

- Version 0.0.0: Initial release.