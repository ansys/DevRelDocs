---
category: utility
plugin: core
license: None
Version: 0.0.0
---

# utility:weighted merge fields by label

## Version

0.0.0

## Changelog

- Version 0.0.0: Initial release.

## Description

Performs a weighted merge on fields of a fields container that share the same label value.


## Inputs

| Input | Name | Expected type(s) | Description |
|-------|-------|------------------|-------------|
| <strong>Pin 0</strong> <br><span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  fields_container |[`fields_container`](../../getting-started/using-data-containers.md#fields-container) |  |
| <strong>Pin 1</strong> <br><span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  label |[`string`](../../getting-started/using-data-containers.md#string) | Label identifier that should be merged. |
| <strong>Pin 2</strong>|  merged_field_support |[`abstract_field_support`](../../getting-started/using-data-containers.md#abstract-field-support) | The FieldsContainer's support that has already been merged. |
| <strong>Pin 3</strong>|  sum_merge |[`bool`](../../getting-started/using-data-containers.md#bool) | Default is false. If true, redundant quantities are summed instead of being ignored. |
| <strong>Pin 1000</strong> <br><span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  weights |[`vector<shared_ptr<class dataProcessing::DpfTypeCollection<class dataProcessing::CPropertyField>>>`](../../getting-started/using-data-containers.md#vector<shared-ptr<class-dataprocessing::dpftypecollection<class-dataprocessing::cpropertyfield>>>), [`property_field`](../../getting-started/using-data-containers.md#property-field) | Weights to apply to each field from pin 1000 to ... |


## Outputs

| Output |  Name | Expected type(s) | Description |
|-------|------|------------------|-------------|
|  **Pin 0**| fields_container |[`fields_container`](../../getting-started/using-data-containers.md#fields-container) |  |

## Configurations

| Name| Expected type(s) | Default value | Description |
|-----|------|----------|-------------|
| **mutex** |[`bool`](../../getting-started/using-data-containers.md#bool) | false | If this option is set to true, the shared memory is prevented from being simultaneously accessed by multiple threads. |

## Scripting

 **Category**: utility

 **Plugin**: core

 **Scripting name**: weighted_merge_fields_by_label

 **Full name**: utility.weighted_merge_fields_by_label

 **Internal name**: merge::weighted_fields_container_label

 **License**: None
 
