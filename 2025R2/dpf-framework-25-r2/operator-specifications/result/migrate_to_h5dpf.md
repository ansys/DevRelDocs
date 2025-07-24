---
category: result
plugin: core
license: None
---

# result:migrate to h5dpf

**Version: 0.0.0**

## Description

Read mesh properties from the results files contained in the streams or data sources and make those properties available through a mesh selection manager in output.User can input a GenericDataContainer that will map an item to a result name. Example of Map: {{ default: wf1}, {EUL: wf2}, {ENG_SE: wf3}}.

## Inputs

| Input | Name | Expected type(s) | Description |
|-------|-------|------------------|-------------|
| <strong>Pin -5</strong>|  dataset_size_compression_threshold |[`int32`](../../core-concepts/dpf-types.md#standard-types), [`generic_data_container`](../../core-concepts/dpf-types.md#generic-data-container) | Integer value that defines the minimum dataset size (in bytes) to use h5 native compression Applicable for arrays of floats, doubles and integers. |
| <strong>Pin -2</strong>|  h5_native_compression |[`int32`](../../core-concepts/dpf-types.md#standard-types), [`abstract_data_tree`](../../core-concepts/dpf-types.md#data-tree), [`generic_data_container`](../../core-concepts/dpf-types.md#generic-data-container) | Integer value / DataTree that defines the h5 native compression used For Integer Input {0: No Compression (default); 1-9: GZIP Compression : 9 provides maximum compression but at the slowest speed.}For DataTree Input {type: None / GZIP / ZSTD; level: GZIP (1-9) / ZSTD (1-20); num_threads: ZSTD (>0)} |
| <strong>Pin -1</strong>|  export_floats |[`bool`](../../core-concepts/dpf-types.md#standard-types), [`generic_data_container`](../../core-concepts/dpf-types.md#generic-data-container) | Converts double to float to reduce file size (default is true).If False, nodal results are exported as double precision and elemental results as single precision. |
| <strong>Pin 0</strong> <br><span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  filename |[`string`](../../core-concepts/dpf-types.md#standard-types) | filename of the migrated file |
| <strong>Pin 1</strong>|  comma_separated_list_of_results |[`string`](../../core-concepts/dpf-types.md#standard-types) | list of results (source operator names) separated by semicolons that will be stored. (Example: U;S;EPEL). If empty, all available results will be converted.   |
| <strong>Pin 2</strong>|  all_time_sets |[`bool`](../../core-concepts/dpf-types.md#standard-types) | Deprecated. Please use filtering workflows instead to select time scoping. Default is false. |
| <strong>Pin 3</strong>|  streams_container |[`streams_container`](../../core-concepts/dpf-types.md#streams-container) | streams (result file container) (optional) |
| <strong>Pin 4</strong>|  data_sources |[`data_sources`](../../core-concepts/dpf-types.md#data-sources) | if the stream is null then we need to get the file path from the data sources |
| <strong>Pin 6</strong>|  compression_workflow |[`workflow`](../../core-concepts/dpf-types.md#workflow), [`generic_data_container`](../../core-concepts/dpf-types.md#generic-data-container) | BETA Option: Applies input compression workflow. |
| <strong>Pin 7</strong>|  filtering_workflow |[`workflow`](../../core-concepts/dpf-types.md#workflow), [`generic_data_container`](../../core-concepts/dpf-types.md#generic-data-container) | Applies input filtering workflow. |

## Outputs

| Output |  Name | Expected type(s) | Description |
|-------|------|------------------|-------------|
|  **Pin 0**| migrated_file |[`data_sources`](../../core-concepts/dpf-types.md#data-sources) |  |

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