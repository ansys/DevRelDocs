---
category: utility
plugin: core
license: None
---

# utility:merge property fields

**Version: 0.0.0**

## Description

Assembles a set of property fields into a unique one.

## Inputs

| Input | Name | Expected type(s) | Description |
|-------|-------|------------------|-------------|
| <strong>Pin -201</strong> <br><span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  naive_merge |[`bool`](../../core-concepts/dpf-types.md#standard-types) | If true, merge the input property fields assuming that there is no repetition in their scoping ids. Default is false. |
| <strong>Pin 0</strong> <br><span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  property_fields |`vector<shared_ptr<property_field>>`, [`property_field`](../../core-concepts/dpf-types.md#property-field), [`property_fields_container`](../../core-concepts/dpf-types.md#property-fields-container) | Either a property fields container, a vector of property fields to merge or property fields from pin 0 to ... |

## Outputs

| Output |  Name | Expected type(s) | Description |
|-------|------|------------------|-------------|
|  **Pin 0**| property_field |[`property_field`](../../core-concepts/dpf-types.md#property-field) |  |

## Configurations

| Name| Expected type(s) | Default value | Description |
|-----|------|----------|-------------|
| **mutex** |[`bool`](../../core-concepts/dpf-types.md#standard-types) | false | If this option is set to true, the shared memory is prevented from being simultaneously accessed by multiple threads. |

## Scripting

 **Category**: utility

 **Plugin**: core

 **Scripting name**: merge_property_fields

 **Full name**: utility.merge_property_fields

 **Internal name**: merge::property_field

 **License**: None


## Changelog

- Version 0.0.0: Initial release.