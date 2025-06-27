---
category: utility
plugin: core
license: None
Version: 0.0.0
---

# utility:bind support

## Version

0.0.0

## Changelog

- Version 0.0.0: Initial release.

## Description

Ties a support to a field.


## Inputs

| Input | Name | Expected type(s) | Description |
|-------|-------|------------------|-------------|
| <strong>Pin 0</strong> <br><span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  field |[`field`](./../../core-concepts/dpf-types#field), [`fields_container`](./../../core-concepts/dpf-types#fields-container) | field or fields container with only one field is expected |
| <strong>Pin 1</strong> <br><span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  support |[`abstract_meshed_region`](./../../core-concepts/dpf-types#abstract-meshed-region), [`abstract_field_support`](./../../core-concepts/dpf-types#abstract-field-support) | meshed region or a support of the field |


## Outputs

| Output |  Name | Expected type(s) | Description |
|-------|------|------------------|-------------|
|  **Pin 0**| field |[`field`](./../../core-concepts/dpf-types#field) |  |

## Configurations

| Name| Expected type(s) | Default value | Description |
|-----|------|----------|-------------|
| **mutex** |[`bool`](./../../core-concepts/dpf-types#standard-types) | false | If this option is set to true, the shared memory is prevented from being simultaneously accessed by multiple threads. |

## Scripting

 **Category**: utility

 **Plugin**: core

 **Scripting name**: bind_support

 **Full name**: utility.bind_support

 **Internal name**: BindSupport

 **License**: None
 
