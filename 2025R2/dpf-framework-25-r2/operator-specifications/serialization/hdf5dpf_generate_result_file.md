---
category: serialization
plugin: core
license: None
---

# serialization:hdf5dpf generate result file

**Version: 0.0.0**

## Description

Generate a dpf result file from provided information.

## Inputs

| Input | Name | Expected type(s) | Description |
|-------|-------|------------------|-------------|
| <strong>Pin -6</strong>|  append_mode |[`bool`](../../core-concepts/dpf-types.md#standard-types) | Experimental: Allow appending chunked data to the file. This disables fields container content deduplication. |
| <strong>Pin -5</strong>|  dataset_size_compression_threshold |[`int32`](../../core-concepts/dpf-types.md#standard-types) | Integer value that defines the minimum dataset size (in bytes) to use h5 native compression Applicable for arrays of floats, doubles and integers. |
| <strong>Pin -2</strong>|  h5_native_compression |[`int32`](../../core-concepts/dpf-types.md#standard-types), [`abstract_data_tree`](../../core-concepts/dpf-types.md#data-tree) | Integer value / DataTree that defines the h5 native compression used For Integer Input {0: No Compression (default); 1-9: GZIP Compression : 9 provides maximum compression but at the slowest speed.}For DataTree Input {type: None / GZIP / ZSTD; level: GZIP (1-9) / ZSTD (1-20); num_threads: ZSTD (>0)} |
| <strong>Pin -1</strong>|  export_floats |[`bool`](../../core-concepts/dpf-types.md#standard-types) | converts double to float to reduce file size (default is true) |
| <strong>Pin 0</strong> <br><span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  filename |[`string`](../../core-concepts/dpf-types.md#standard-types) | name of the output file that will be generated (utf8). |
| <strong>Pin 1</strong>|  mesh_provider_out |[`abstract_meshed_region`](../../core-concepts/dpf-types.md#meshed-region) | defines the MeshedRegion that is exported and provided by MeshProvider. |
| <strong>Pin 2</strong>|  time_freq_support_out |[`time_freq_support`](../../core-concepts/dpf-types.md#time-freq-support) | defines the TimeFreqSupport that is exported and provided by TimeFreqSupportProvider. |
| <strong>Pin 3</strong>|  ansys_unit_system_id |[`int32`](../../core-concepts/dpf-types.md#standard-types), [`result_info`](../../core-concepts/dpf-types.md#result-info) | defines the unit system the results are exported with. A Result info can be input to also export Physics Type and Analysis Type. |
| <strong>Pin 4</strong>|  input_name |[`string`](../../core-concepts/dpf-types.md#standard-types), [`any`](../../core-concepts/dpf-types.md#any) | Set of even and odd pins to serialize results. Odd pins (4, 6, 8...) are strings, and they represent the names of the results to be serialized. Even pins (5, 7, 9...) are DPF types, and they represent the results to be serialized. They should go in pairs (for each result name, there should be a result) and connected sequentially. |

## Outputs

| Output |  Name | Expected type(s) | Description |
|-------|------|------------------|-------------|
|  **Pin 0**| data_sources |[`data_sources`](../../core-concepts/dpf-types.md#data-sources) | data_sources filled with the H5 generated file path. |

## Configurations

| Name| Expected type(s) | Default value | Description |
|-----|------|----------|-------------|
| **evaluate_inputs_before_run** |[`bool`](../../core-concepts/dpf-types.md#standard-types) | false | If this option is set to true, all input pins of the operator will be evaluated before entering the run method to maintain a correct Operator status. |
| **mutex** |[`bool`](../../core-concepts/dpf-types.md#standard-types) | false | If this option is set to true, the shared memory is prevented from being simultaneously accessed by multiple threads. |

## Scripting

 **Category**: serialization

 **Plugin**: core

 **Scripting name**: hdf5dpf_generate_result_file

 **Full name**: serialization.hdf5dpf_generate_result_file

 **Internal name**: hdf5::h5dpf::make_result_file

 **License**: None


## Changelog

- Version 0.0.0: Initial release.