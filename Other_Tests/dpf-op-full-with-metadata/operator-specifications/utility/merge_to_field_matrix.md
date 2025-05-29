---
category: utility
plugin: core
license: None
---

# utility:merge fields into field matrix

## Description

Assembles a set of fields into a field matrix.


## Inputs

| Input | Name | Expected type(s) | Description |
|-------|-------|------------------|-------------|
| <strong>Pin 0</strong> <br><span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  fields |[`vector<shared_ptr<field>>`](../../getting-started/using-data-containers.md#vector<shared-ptr<field>>), [`field`](../../getting-started/using-data-containers.md#field), [`fields_container`](../../getting-started/using-data-containers.md#fields-container) | Either a fields container, a vector of fields to merge, or fields from pin 0 to ... |


## Outputs

| Output |  Name | Expected type(s) | Description |
|-------|------|------------------|-------------|
|  **Pin 0**| merged_field_matrix |[`field`](../../getting-started/using-data-containers.md#field) |  |

## Configurations

| Name| Expected type(s) | Default value | Description |
|-----|------|----------|-------------|
| **mutex** |[`bool`](../../getting-started/using-data-containers.md#bool) | false | If this option is set to true, the shared memory is prevented from being simultaneously accessed by multiple threads. |

## Scripting

 **Category**: utility

 **Plugin**: core

 **Scripting name**: merge_to_field_matrix

 **Full name**: utility.merge_to_field_matrix

 **Internal name**: merge::to_field_matrix

 **License**: None
