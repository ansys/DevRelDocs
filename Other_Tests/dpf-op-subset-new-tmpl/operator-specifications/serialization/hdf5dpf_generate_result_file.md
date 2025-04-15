# serialization:hdf5dpf generate result file

## Description

Generate a dpf result file from provided information.

## Inputs


| Input | Name| Expected type(s) | Required | Description |
|-------|-----|------|----------|-------------|
| **Pin -5** | dataset_size_compression_threshold |[`int32`](../../getting-started/using-data-containers.md#int32) | No | Integer value that defines the minimum dataset size (in bytes) to use h5 native compression Applicable for arrays of floats, doubles and integers. |
| **Pin -2** | h5_native_compression |[`int32`](../../getting-started/using-data-containers.md#int32) | No | Integer value that defines the h5 native compression used 0: No Compression (default)1-9: GZIP Level Compression : 9 gives us maximum compression but at the slowest speed.  |
| **Pin -1** | export_floats |[`bool`](../../getting-started/using-data-containers.md#bool) | No | converts double to float to reduce file size (default is true) |
| **Pin 0** | filename |[`string`](../../getting-started/using-data-containers.md#string) | Yes | name of the output file that will be generated (utf8). |
| **Pin 1** | mesh_provider_out |[`abstract_meshed_region`](../../getting-started/using-data-containers.md#abstract-meshed-region) | No | defines the MeshedRegion that is exported and provided by MeshProvider. |
| **Pin 2** | time_freq_support_out |[`time_freq_support`](../../getting-started/using-data-containers.md#time-freq-support) | No | defines the TimeFreqSupport that is exported and provided by TimeFreqSupportProvider. |
| **Pin 3** | ansys_unit_system_id |[`int32`](../../getting-started/using-data-containers.md#int32), [`result_info`](../../getting-started/using-data-containers.md#result-info) | No | defines the unit system the results are exported with. A Result info can be input to also export Physics Type and Analysis Type. |
| **Pin 4** | input_name |[`string`](../../getting-started/using-data-containers.md#string), [`any`](../../getting-started/using-data-containers.md#any) | No | Set of even and odd pins to serialize results. Odd pins (4, 6, 8...) are strings, and they represent the names of the results to be serialized. Even pins (5, 7, 9...) are DPF types, and they represent the results to be serialized. They should go in pairs (for each result name, there should be a result) and connected sequentially. |

## Outputs

| Input | Name| Expected type(s) | Required | Description |
|-------|-----|------|----------|-------------|
| **Pin 0** | data_sources |[`data_sources`](../../getting-started/using-data-containers.md#data-sources) | Yes | data_sources filed with the H5 generated file path. |

## Configurations

| Name| Expected type(s) | Default value | Description |
|-----|------|----------|-------------|
| **Pin mutex** |[`bool`](../../getting-started/using-data-containers.md#bool) | false | If this option is set to true, the shared memory is prevented from being simultaneously accessed by multiple threads. |

## Scripting

| Category| Plugin | Scripting name | Full name | Internal name | License |
|---------|--------|----------------|-----------|---------------|---------|
| **serialization** | core | hdf5dpf_generate_result_file | serialization.hdf5dpf_generate_result_file | hdf5::h5dpf::make_result_file | None |
