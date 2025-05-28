---
category: utility
plugin: core
license: None
---

# utility:set attribute

## Description

Uses the FieldsContainer APIs to modify it.


## Inputs

| Input | Name | Expected type(s) | Description |
|-------|-------|------------------|-------------|
| <strong>Pin 0</strong> <br><span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  fields_container |[`fields_container`](../../getting-started/using-data-containers.md#fields-container) |  |
| <strong>Pin 1</strong> <br><span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  property_name |[`string`](../../getting-started/using-data-containers.md#string) | Supported property names are: "labels". |
| <strong>Pin 2</strong>|  property_identifier |[`vector<string>`](../../getting-started/using-data-containers.md#vector<string>), [`label_space`](../../getting-started/using-data-containers.md#label-space) | Value of the property to be set : vector of string or LabelSpace for "labels". |


## Outputs

| Output |  Name | Expected type(s) | Description |
|-------|------|------------------|-------------|
|  **Pin 0**| fields_container |[`fields_container`](../../getting-started/using-data-containers.md#fields-container) | Returns the modified FieldsContainer. |

## Configurations

| Name| Expected type(s) | Default value | Description |
|-----|------|----------|-------------|
| **mutex** |[`bool`](../../getting-started/using-data-containers.md#bool) | false | If this option is set to true, the shared memory is prevented from being simultaneously accessed by multiple threads. |

## Scripting

 **Category**: utility

 **Plugin**: core

 **Scripting name**: set_attribute

 **Full name**: utility.set_attribute

 **Internal name**: fieldscontainer::set_attribute

 **License**: None
