---
category: utility
plugin: core
license: None
---

# utility:set attribute

**Version: 0.0.0**

## Description

Uses the FieldsContainer APIs to modify it.

## Inputs

| Input | Name | Expected type(s) | Description |
|-------|-------|------------------|-------------|
| <strong>Pin 0</strong> <br><span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  fields_container |[`fields_container`](../../core-concepts/dpf-types.md#fields-container) |  |
| <strong>Pin 1</strong> <br><span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  property_name |[`string`](../../core-concepts/dpf-types.md#standard-types) | Supported property names are: "labels". |
| <strong>Pin 2</strong>|  property_identifier |[`vector<string>`](../../core-concepts/dpf-types.md#standard-types), [`label_space`](../../core-concepts/dpf-types.md#label-space) | Value of the property to be set : vector of string or LabelSpace for "labels". |

## Outputs

| Output |  Name | Expected type(s) | Description |
|-------|------|------------------|-------------|
|  **Pin 0**| fields_container |[`fields_container`](../../core-concepts/dpf-types.md#fields-container) | Returns the modified FieldsContainer. |

## Configurations

| Name| Expected type(s) | Default value | Description |
|-----|------|----------|-------------|
| **mutex** |[`bool`](../../core-concepts/dpf-types.md#standard-types) | false | If this option is set to true, the shared memory is prevented from being simultaneously accessed by multiple threads. |

## Scripting

 **Category**: utility

 **Plugin**: core

 **Scripting name**: set_attribute

 **Full name**: utility.set_attribute

 **Internal name**: fieldscontainer::set_attribute

 **License**: None


## Changelog

- Version 0.0.0: Initial release.