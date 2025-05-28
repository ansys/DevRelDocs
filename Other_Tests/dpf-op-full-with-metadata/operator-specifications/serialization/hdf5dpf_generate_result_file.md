---
category: serialization
plugin: core
license: None
---

# serialization:hdf5dpf generate result file

## Description

Generate a dpf result file from provided information.

### Plugin

core

## Inputs

| Input | Name | Expected type(s) | Description |
|-------|-------|------------------|-------------|
| <strong>Pin -5</strong>|  dataset_size_compression_threshold |[`int32`](../../getting-started/using-data-containers.md#int32) | Integer value that defines the minimum dataset size (in bytes) to use h5 native compression Applicable for arrays of floats, doubles and integers. |
| <strong>Pin -2</strong>|  h5_native_compression |[`int32`](../../getting-started/using-data-containers.md#int32) | Integer value that defines the h5 native compression used 0: No Compression (default)1-9: GZIP Level Compression : 9 gives us maximum compression but at the slowest speed.  |
| <strong>Pin -1</strong>|  export_floats |[`bool`](../../getting-started/using-data-containers.md#bool) | converts double to float to reduce file size (default is true) |
| <strong>Pin 0</strong> <span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  filename |[`string`](../../getting-started/using-data-containers.md#string) | name of the output file that will be generated (utf8). |
| <strong>Pin 1</strong>|  mesh_provider_out |[`abstract_meshed_region`](../../getting-started/using-data-containers.md#abstract-meshed-region) | defines the MeshedRegion that is exported and provided by MeshProvider. |
| <strong>Pin 2</strong>|  time_freq_support_out |[`time_freq_support`](../../getting-started/using-data-containers.md#time-freq-support) | defines the TimeFreqSupport that is exported and provided by TimeFreqSupportProvider. |
| <strong>Pin 3</strong>|  ansys_unit_system_id |[`int32`](../../getting-started/using-data-containers.md#int32), [`result_info`](../../getting-started/using-data-containers.md#result-info) | defines the unit system the results are exported with. A Result info can be input to also export Physics Type and Analysis Type. |
| <strong>Pin 4</strong>|  input_name |[`string`](../../getting-started/using-data-containers.md#string), [`any`](../../getting-started/using-data-containers.md#any) | Set of even and odd pins to serialize results. Odd pins (4, 6, 8...) are strings, and they represent the names of the results to be serialized. Even pins (5, 7, 9...) are DPF types, and they represent the results to be serialized. They should go in pairs (for each result name, there should be a result) and connected sequentially. |


## Outputs

| Output |  Name | Expected type(s) | Description |
|-------|------|------------------|-------------|
| <strong>Pin 0</strong> <span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span> | data_sources |[`data_sources`](../../getting-started/using-data-containers.md#data-sources) | data_sources filed with the H5 generated file path. |

## Configurations

| Name| Expected type(s) | Default value | Description |
|-----|------|----------|-------------|
| **mutex** |[`bool`](../../getting-started/using-data-containers.md#bool) | false | If this option is set to true, the shared memory is prevented from being simultaneously accessed by multiple threads. |

## Scripting

- Category: serialization
- Plugin: core
- Scripting name: hdf5dpf_generate_result_file
- Full name: serialization.hdf5dpf_generate_result_file
- Internal name: hdf5::h5dpf::make_result_file
- License: None
  