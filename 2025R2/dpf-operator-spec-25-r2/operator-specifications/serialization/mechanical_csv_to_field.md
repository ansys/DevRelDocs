---
category: serialization
plugin: csv
license: None
Version: 0.0.0
---

# serialization:mechanical csv to field

## Version

0.0.0

## Changelog

- Version 0.0.0: Initial release.

## Description

Reads mechanical exported csv file


## Inputs

| Input | Name | Expected type(s) | Description |
|-------|-------|------------------|-------------|
| <strong>Pin 0</strong> <br><span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  unit |[`class dataProcessing::unit::CUnit`](../../core-concepts/dpf-types#class-dataprocessing::unit::cunit) |  |
| <strong>Pin 1</strong>|  mesh |[`abstract_meshed_region`](../../core-concepts/dpf-types#abstract-meshed-region) |  |
| <strong>Pin 4</strong> <br><span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  data_sources |[`data_sources`](../../core-concepts/dpf-types#data-sources) |  |
| <strong>Pin 9</strong> <br><span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  requested_location |[`string`](../../core-concepts/dpf-types#standard-types), [`field_definition`](../../core-concepts/dpf-types#field-definition) |  |


## Outputs

| Output |  Name | Expected type(s) | Description |
|-------|------|------------------|-------------|
|  **Pin 0**| field |[`field`](../../core-concepts/dpf-types#field) |  |

## Configurations

| Name| Expected type(s) | Default value | Description |
|-----|------|----------|-------------|
| **mutex** |[`bool`](../../core-concepts/dpf-types#standard-types) | false | If this option is set to true, the shared memory is prevented from being simultaneously accessed by multiple threads. |

## Scripting

 **Category**: serialization

 **Plugin**: csv

 **Scripting name**: None

 **Full name**: None

 **Internal name**: mechanical_csv_to_field

 **License**: None
 
