---
category: utility
plugin: core
license: None
Version: 0.0.0
---

# utility:fields container get attribute

## Version

0.0.0

## Changelog

- Version 0.0.0: Initial release.

## Description

Uses the FieldsContainer APIs to return a given attribute of the mesh in input.


## Inputs

| Input | Name | Expected type(s) | Description |
|-------|-------|------------------|-------------|
| <strong>Pin 0</strong> <br><span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  fields_container |[`fields_container`](../../core-concepts/dpf-types#fields-container) |  |
| <strong>Pin 1</strong> <br><span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  property_name |[`string`](../../core-concepts/dpf-types#standard-types) | Supported property names are: "label_scoping", "label_values", "time_freq_support", "labels", "field_scoping" . |
| <strong>Pin 2</strong>|  property_identifier |[`string`](../../core-concepts/dpf-types#standard-types), [`int32`](../../core-concepts/dpf-types#standard-types) | Additional pin for some property : the label name for "label_scoping" or "label_values", the field index (default 0) for "field_scoping". |


## Outputs

| Output |  Name | Expected type(s) | Description |
|-------|------|------------------|-------------|
|  **Pin 0**| property |[`scoping`](../../core-concepts/dpf-types#scoping), [`vector<int32>`](../../core-concepts/dpf-types#standard-types), [`time_freq_support`](../../core-concepts/dpf-types#time-freq-support), [`vector<string>`](../../core-concepts/dpf-types#standard-types), [`label_space`](../../core-concepts/dpf-types#label-space) | Returns a Scoping for property: "label_scoping", a vector of int for "label_values", a time freq support for "time_freq_support", a vector of string for "labels", a LabelSpace for "field_scoping". |

## Configurations

| Name| Expected type(s) | Default value | Description |
|-----|------|----------|-------------|
| **mutex** |[`bool`](../../core-concepts/dpf-types#standard-types) | false | If this option is set to true, the shared memory is prevented from being simultaneously accessed by multiple threads. |

## Scripting

 **Category**: utility

 **Plugin**: core

 **Scripting name**: fc_get_attribute

 **Full name**: utility.fc_get_attribute

 **Internal name**: fieldscontainer::get_attribute

 **License**: None
 
