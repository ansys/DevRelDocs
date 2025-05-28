---
category: utility
plugin: core
license: None
---

# utility:merge property fields

## Description

Assembles a set of property fields into a unique one.

### Plugin

core

## Inputs

| Input | Name | Expected type(s) | Description |
|-------|-------|------------------|-------------|
| <strong>Pin 0</strong> <br><span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  vector<shared_ptr<property_field>> |[`vector<shared_ptr<property_field>>`](../../getting-started/using-data-containers.md#vector<shared-ptr<property-field>>), [`property_field`](../../getting-started/using-data-containers.md#property-field), [`property_fields_container`](../../getting-started/using-data-containers.md#property-fields-container) | Either a property fields container, a vector of property fields to merge or property fields from pin 0 to ... |


## Outputs

| Output |  Name | Expected type(s) | Description |
|-------|------|------------------|-------------|
| <strong>Pin 0</strong> <br><span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span> | property_field |[`property_field`](../../getting-started/using-data-containers.md#property-field) |  |

## Configurations

| Name| Expected type(s) | Default value | Description |
|-----|------|----------|-------------|
| **mutex** |[`bool`](../../getting-started/using-data-containers.md#bool) | false | If this option is set to true, the shared memory is prevented from being simultaneously accessed by multiple threads. |

## Scripting

- Category: utility
- Plugin: core
- Scripting name: merge_property_fields
- Full name: utility.merge_property_fields
- Internal name: merge::property_field
- License: None
  