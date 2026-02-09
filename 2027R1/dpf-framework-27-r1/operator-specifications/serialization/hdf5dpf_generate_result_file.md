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

| Pin number | Name | Expected type(s) |
|-------|-------|------------------|
| <strong>-7</strong>|  [h5_chunk_size](#input_-7) |[`int32`](../../core-concepts/dpf-types.md#standard-types) |
| <strong>-6</strong>|  [append_mode](#input_-6) |[`bool`](../../core-concepts/dpf-types.md#standard-types) |
| <strong>-5</strong>|  [dataset_size_compression_threshold](#input_-5) |[`int32`](../../core-concepts/dpf-types.md#standard-types) |
| <strong>-2</strong>|  [h5_native_compression](#input_-2) |[`int32`](../../core-concepts/dpf-types.md#standard-types), [`abstract_data_tree`](../../core-concepts/dpf-types.md#data-tree) |
| <strong>-1</strong>|  [export_floats](#input_-1) |[`bool`](../../core-concepts/dpf-types.md#standard-types) |
| <strong>0</strong> <span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  [filename](#input_0) |[`string`](../../core-concepts/dpf-types.md#standard-types) |
| <strong>1</strong>|  [mesh_provider_out](#input_1) |[`abstract_meshed_region`](../../core-concepts/dpf-types.md#meshed-region) |
| <strong>2</strong>|  [time_freq_support_out](#input_2) |[`time_freq_support`](../../core-concepts/dpf-types.md#time-freq-support) |
| <strong>3</strong>|  [ansys_unit_system_id](#input_3) |[`int32`](../../core-concepts/dpf-types.md#standard-types), [`result_info`](../../core-concepts/dpf-types.md#result-info) |
| <strong>4</strong>|  [input_name](#input_4) |[`string`](../../core-concepts/dpf-types.md#standard-types), [`any`](../../core-concepts/dpf-types.md#any) |


<a id="input_-7"></a>
### h5_chunk_size (Pin -7)

- **Required:** No
- **Expected type(s):** [`int32`](../../core-concepts/dpf-types.md#standard-types)

Size of each HDF5 chunk in kilobytes (KB). Default: 1 MB when compression is enabled; for uncompressed datasets, the default is the full dataset size x dimension.

<a id="input_-6"></a>
### append_mode (Pin -6)

- **Required:** No
- **Expected type(s):** [`bool`](../../core-concepts/dpf-types.md#standard-types)

Experimental: Allow appending chunked data to the file. This disables fields container content deduplication.

<a id="input_-5"></a>
### dataset_size_compression_threshold (Pin -5)

- **Required:** No
- **Expected type(s):** [`int32`](../../core-concepts/dpf-types.md#standard-types)

Integer value that defines the minimum dataset size (in bytes) to use h5 native compression Applicable for arrays of floats, doubles and integers.

<a id="input_-2"></a>
### h5_native_compression (Pin -2)

- **Required:** No
- **Expected type(s):** [`int32`](../../core-concepts/dpf-types.md#standard-types), [`abstract_data_tree`](../../core-concepts/dpf-types.md#data-tree)

Integer value / DataTree that defines the h5 native compression used For Integer Input {0: No Compression (default); 1-9: GZIP Compression : 9 provides maximum compression but at the slowest speed.}For DataTree Input {type: None / GZIP / ZSTD; level: GZIP (1-9) / ZSTD (1-20); num_threads: ZSTD (>0)}

<a id="input_-1"></a>
### export_floats (Pin -1)

- **Required:** No
- **Expected type(s):** [`bool`](../../core-concepts/dpf-types.md#standard-types)

converts double to float to reduce file size (default is true)

<a id="input_0"></a>
### filename (Pin 0)

- **Required:** Yes
- **Expected type(s):** [`string`](../../core-concepts/dpf-types.md#standard-types)

name of the output file that will be generated (utf8).

<a id="input_1"></a>
### mesh_provider_out (Pin 1)

- **Required:** No
- **Expected type(s):** [`abstract_meshed_region`](../../core-concepts/dpf-types.md#meshed-region)

defines the MeshedRegion that is exported and provided by MeshProvider.

<a id="input_2"></a>
### time_freq_support_out (Pin 2)

- **Required:** No
- **Expected type(s):** [`time_freq_support`](../../core-concepts/dpf-types.md#time-freq-support)

defines the TimeFreqSupport that is exported and provided by TimeFreqSupportProvider.

<a id="input_3"></a>
### ansys_unit_system_id (Pin 3)

- **Required:** No
- **Expected type(s):** [`int32`](../../core-concepts/dpf-types.md#standard-types), [`result_info`](../../core-concepts/dpf-types.md#result-info)

defines the unit system the results are exported with. A Result info can be input to also export Physics Type and Analysis Type.

<a id="input_4"></a>
### input_name (Pin 4)

- **Required:** No
- **Expected type(s):** [`string`](../../core-concepts/dpf-types.md#standard-types), [`any`](../../core-concepts/dpf-types.md#any)

Set of even and odd pins to serialize results. Odd pins (4, 6, 8...) are strings, and they represent the names of the results to be serialized. Even pins (5, 7, 9...) are DPF types, and they represent the results to be serialized. They should go in pairs (for each result name, there should be a result) and connected sequentially.


## Outputs

| Pin number |  Name | Expected type(s) |
|-------|------|------------------|
|  **0**| [data_sources](#output_0) |[`data_sources`](../../core-concepts/dpf-types.md#data-sources) |


<a id="output_0"></a>
### data_sources (Pin 0)

- **Expected type(s):** [`data_sources`](../../core-concepts/dpf-types.md#data-sources)

data_sources filled with the H5 generated file path.


## Configurations


### evaluate_inputs_before_run

- **Expected type(s):** [`bool`](../../core-concepts/dpf-types.md#standard-types)
- **Default value:** false

If this option is set to true, all input pins of the operator will be evaluated before entering the run method to maintain a correct Operator status.

### mutex

- **Expected type(s):** [`bool`](../../core-concepts/dpf-types.md#standard-types)
- **Default value:** false

If this option is set to true, the shared memory is prevented from being simultaneously accessed by multiple threads.



## Scripting

 **Category**: serialization

 **Plugin**: core

 **Scripting name**: hdf5dpf_generate_result_file

 **Full name**: serialization.hdf5dpf_generate_result_file

 **Internal name**: hdf5::h5dpf::make_result_file

 **License**: None

## Examples

<details>
<summary>C++</summary>

```cpp
#include "dpf_api.h"

ansys::dpf::Operator op("hdf5::h5dpf::make_result_file"); // operator instantiation
op.connect(-7, my_h5_chunk_size);
op.connect(-6, my_append_mode);
op.connect(-5, my_dataset_size_compression_threshold);
op.connect(-2, my_h5_native_compression);
op.connect(-1, my_export_floats);
op.connect(0, my_filename);
op.connect(1, my_mesh_provider_out);
op.connect(2, my_time_freq_support_out);
op.connect(3, my_ansys_unit_system_id);
op.connect(4, my_input_name);
ansys::dpf::DataSources my_data_sources = op.getOutput<ansys::dpf::DataSources>(0);
```
</details>

<details>
<summary>CPython</summary>

```python
import ansys.dpf.core as dpf

op = dpf.operators.serialization.hdf5dpf_generate_result_file() # operator instantiation
op.inputs.h5_chunk_size.connect(my_h5_chunk_size)
op.inputs.append_mode.connect(my_append_mode)
op.inputs.dataset_size_compression_threshold.connect(my_dataset_size_compression_threshold)
op.inputs.h5_native_compression.connect(my_h5_native_compression)
op.inputs.export_floats.connect(my_export_floats)
op.inputs.filename.connect(my_filename)
op.inputs.mesh_provider_out.connect(my_mesh_provider_out)
op.inputs.time_freq_support_out.connect(my_time_freq_support_out)
op.inputs.ansys_unit_system_id.connect(my_ansys_unit_system_id)
op.inputs.input_name1.connect(my_input_name1)
op.inputs.input_name2.connect(my_input_name2)
my_data_sources = op.outputs.data_sources()
```
</details>

<details>
<summary>IPython</summary>

```python
import mech_dpf
import Ans.DataProcessing as dpf

op = dpf.operators.serialization.hdf5dpf_generate_result_file() # operator instantiation
op.inputs.h5_chunk_size.Connect(my_h5_chunk_size)
op.inputs.append_mode.Connect(my_append_mode)
op.inputs.dataset_size_compression_threshold.Connect(my_dataset_size_compression_threshold)
op.inputs.h5_native_compression.Connect(my_h5_native_compression)
op.inputs.export_floats.Connect(my_export_floats)
op.inputs.filename.Connect(my_filename)
op.inputs.mesh_provider_out.Connect(my_mesh_provider_out)
op.inputs.time_freq_support_out.Connect(my_time_freq_support_out)
op.inputs.ansys_unit_system_id.Connect(my_ansys_unit_system_id)
op.inputs.input_name.Connect(my_input_name)
my_data_sources = op.outputs.data_sources.GetData()
```
</details>
<br>

## Changelog

- Version 0.0.0: Initial release.