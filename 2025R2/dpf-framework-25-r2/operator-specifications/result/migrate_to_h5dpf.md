---
category: result
plugin: core
license: None
Version: 0.0.0
---

# result:migrate to h5dpf

**Version: 0.0.0**


## Description

Read mesh properties from the results files contained in the streams or data sources and make those properties available through a mesh selection manager in output.


## Inputs


| Input | Name | Expected type(s) | Description |
|-------|-------|------------------|-------------|
| <strong>Pin -5</strong> | dataset_size_compression_threshold |[`int32`](../../core-concepts/dpf-types.md#standard-types) | Integer value that defines the minimum dataset size (in bytes) to use h5 native compression Applicable for arrays of floats, doubles and integers. |
| <strong>Pin -2</strong> | h5_native_compression |[`int32`](../../core-concepts/dpf-types.md#standard-types) | Integer value that defines the h5 native compression used 0: No Compression (default)1-9: GZIP Level Compression : 9 gives us maximum compression but at the slowest speed.  |
| <strong>Pin -1</strong> | export_floats |[`bool`](../../core-concepts/dpf-types.md#standard-types) | converts double to float to reduce file size (default is true) |
| <strong>Pin 0</strong> <br><span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span> | filename |[`string`](../../core-concepts/dpf-types.md#string) | filename of the migrated file |
| <strong>Pin 1</strong> | comma_separated_list_of_results |[`string`](../../core-concepts/dpf-types.md#string) | list of results (source operator names) separated by semicolons that will be stored. (Example: U;S;EPEL). If empty, all available results will be converted.   |
| <strong>Pin 2</strong> | all_time_sets |[`bool`](../../core-concepts/dpf-types.md#standard-types) | default is false |
| <strong>Pin 3</strong> | streams_container |[`streams_container`](../../core-concepts/dpf-types.md#streams-container) | streams (result file container) (optional) |
| <strong>Pin 4</strong> | data_sources |[`data_sources`](../../core-concepts/dpf-types.md#data-sources) | if the stream is null then we need to get the file path from the data sources |
| <strong>Pin 6</strong> | compression_workflow |[`workflow`](../../core-concepts/dpf-types.md#workflow), [`generic_data_container`](../../core-concepts/dpf-types.md#generic-data-container) | BETA Option: Applies input compression workflow. User can input a GenericDataContainer that will map a compression workflow to a result name. Example of Map: {{ default: wf1}, {EUL: wf2}, {ENG_SE: wf3}} |
| <strong>Pin 7</strong> | filtering_workflow |[`workflow`](../../core-concepts/dpf-types.md#workflow), [`generic_data_container`](../../core-concepts/dpf-types.md#generic-data-container) | Applies input filtering workflow. User can input a GenericDataContainer of the format described for Pin(6) that will map a filtering workflow to a result name. |

## Outputs


| Output | Name | Expected type(s) | Description |
|-------|------|------------------|-------------|
| **Pin 0** | migrated_file |[`data_sources`](../../core-concepts/dpf-types.md#data-sources) |  |

## Configurations

| Name| Expected type(s) | Default value | Description |
|-----|------|----------|-------------|
| **mutex** |[`bool`](../../core-concepts/dpf-types.md#standard-types) | false | If this option is set to true, the shared memory is prevented from being simultaneously accessed by multiple threads. |


## Scripting

 **Category**: result

 **Plugin**: core

 **Scripting name**: migrate_to_h5dpf

 **Full name**: result.migrate_to_h5dpf

 **Internal name**: hdf5::h5dpf::migrate_file

 **License**: None
 

## Changelog

- Version 0.0.0: Initial release.