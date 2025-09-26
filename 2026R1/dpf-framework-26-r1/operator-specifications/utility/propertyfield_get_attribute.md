---
category: utility
plugin: core
license: None
---

# utility:property field get attribute

**Version: 0.0.0**

## Description

Gets a property from an input field/field container. A PropertyFieldin pin 0, a property name (string) in pin 1 are expected as inputs

## Inputs

| Input | Name | Expected type(s) | Description |
|-------|-------|------------------|-------------|
| <strong>Pin 0</strong> <br><span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  property_field |[`property_field`](../../core-concepts/dpf-types.md#property-field), [`property_fields_container`](../../core-concepts/dpf-types.md#property-fields-container) |  |
| <strong>Pin 1</strong> <br><span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  property_name |[`string`](../../core-concepts/dpf-types.md#standard-types) | Property to get. Accepted inputs are specific strings namely: 'unit, 'name','time_freq_support', 'scoping' and 'header'. |

## Outputs

| Output |  Name | Expected type(s) | Description |
|-------|------|------------------|-------------|
|  **Pin 0**| property |[`string`](../../core-concepts/dpf-types.md#standard-types), [`time_freq_support`](../../core-concepts/dpf-types.md#time-freq-support), [`scoping`](../../core-concepts/dpf-types.md#scoping), [`abstract_data_tree`](../../core-concepts/dpf-types.md#data-tree) | Property value that is returned. Accepted Outputs are: Field, PropertyField, CustomTypeField or their containers. |

## Configurations

| Name| Expected type(s) | Default value | Description |
|-----|------|----------|-------------|
| **mutex** |[`bool`](../../core-concepts/dpf-types.md#standard-types) | false | If this option is set to true, the shared memory is prevented from being simultaneously accessed by multiple threads. |

## Scripting

 **Category**: utility

 **Plugin**: core

 **Scripting name**: propertyfield_get_attribute

 **Full name**: utility.propertyfield_get_attribute

 **Internal name**: propertyfield::get_attribute

 **License**: None


## Changelog

- Version 0.0.0: Initial release.