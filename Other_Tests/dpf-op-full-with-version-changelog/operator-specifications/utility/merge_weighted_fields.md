---
category: utility
plugin: core
license: None
Version: 0.0.0
---

# utility:merge weighted fields

## Version

0.0.0

## Changelog

- Version 0.0.0: Initial release.

## Description

Assembles a set of fields into a unique one, applying a weight on the sum of the fields.


## Inputs

| Input | Name | Expected type(s) | Description |
|-------|-------|------------------|-------------|
| <strong>Pin -2</strong>|  sum_merge |[`bool`](../../getting-started/using-data-containers.md#bool) | Default is false. If true, redundant quantities are summed instead of being ignored. |
| <strong>Pin -1</strong>|  merged_support |[`abstract_field_support`](../../getting-started/using-data-containers.md#abstract-field-support) | Already merged field support. |
| <strong>Pin 0</strong> <br><span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  fields |[`vector<shared_ptr<field>>`](../../getting-started/using-data-containers.md#vector<shared-ptr<field>>), [`field`](../../getting-started/using-data-containers.md#field), [`fields_container`](../../getting-started/using-data-containers.md#fields-container) | Either a fields container, a vector of fields to merge, or fields from pin 0 to ... |
| <strong>Pin 1000</strong> <br><span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  weights |[`vector<shared_ptr<property_field>>`](../../getting-started/using-data-containers.md#vector<shared-ptr<property-field>>), [`property_field`](../../getting-started/using-data-containers.md#property-field) | Weights to apply to each field from pin 1000 to ... |


## Outputs

| Output |  Name | Expected type(s) | Description |
|-------|------|------------------|-------------|
|  **Pin 0**| merged_field |[`field`](../../getting-started/using-data-containers.md#field) |  |

## Configurations

| Name| Expected type(s) | Default value | Description |
|-----|------|----------|-------------|
| **mutex** |[`bool`](../../getting-started/using-data-containers.md#bool) | false | If this option is set to true, the shared memory is prevented from being simultaneously accessed by multiple threads. |

## Scripting

 **Category**: utility

 **Plugin**: core

 **Scripting name**: merge_weighted_fields

 **Full name**: utility.merge_weighted_fields

 **Internal name**: merge::weighted_field

 **License**: None
 
