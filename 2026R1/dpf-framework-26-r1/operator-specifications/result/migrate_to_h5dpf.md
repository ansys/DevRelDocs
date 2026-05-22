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

This table lists the input pins for this operator. Input pins define the data that the operator requires to perform its operation.
Some inputs are required, while others are optional and provide additional configuration.
Each parameter is detailed in the sections that follow the table.

| Pin number | Name | Status | Expected type(s) |
|------------|------|--------|------------------|
| <strong>-7</strong> | [h5_chunk_size](#input_-7) |  |[`int32`](../../core-concepts/dpf-types.md#standard-types), [`generic_data_container`](../../core-concepts/dpf-types.md#generic-data-container) |
| <strong>-5</strong> | [dataset_size_compression_threshold](#input_-5) |  |[`int32`](../../core-concepts/dpf-types.md#standard-types), [`generic_data_container`](../../core-concepts/dpf-types.md#generic-data-container) |
| <strong>-2</strong> | [h5_native_compression](#input_-2) |  |[`int32`](../../core-concepts/dpf-types.md#standard-types), [`abstract_data_tree`](../../core-concepts/dpf-types.md#data-tree), [`generic_data_container`](../../core-concepts/dpf-types.md#generic-data-container) |
| <strong>-1</strong> | [export_floats](#input_-1) |  |[`bool`](../../core-concepts/dpf-types.md#standard-types), [`generic_data_container`](../../core-concepts/dpf-types.md#generic-data-container) |
| <strong>0</strong> | [filename](#input_0) |  <span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;" title="This pin is required">Required</span>|[`string`](../../core-concepts/dpf-types.md#standard-types) |
| <strong>1</strong> | [comma_separated_list_of_results](#input_1) |  |[`string`](../../core-concepts/dpf-types.md#standard-types) |
| <strong>2</strong> | [all_time_sets](#input_2) |  |[`bool`](../../core-concepts/dpf-types.md#standard-types) |
| <strong>3</strong> | [streams_container](#input_3) |  |[`streams_container`](../../core-concepts/dpf-types.md#streams-container) |
| <strong>4</strong> | [data_sources](#input_4) |  |[`data_sources`](../../core-concepts/dpf-types.md#data-sources) |
| <strong>6</strong> | [compression_workflow](#input_6) |  |[`workflow`](../../core-concepts/dpf-types.md#workflow), [`generic_data_container`](../../core-concepts/dpf-types.md#generic-data-container) |
| <strong>7</strong> | [filtering_workflow](#input_7) |  |[`workflow`](../../core-concepts/dpf-types.md#workflow), [`generic_data_container`](../../core-concepts/dpf-types.md#generic-data-container) |


<a id="input_-7"></a>
### h5_chunk_size (Pin -7)

- **Required:** No
- **Expected type(s):** [`int32`](../../core-concepts/dpf-types.md#standard-types), [`generic_data_container`](../../core-concepts/dpf-types.md#generic-data-container)

Size of each HDF5 chunk in kilobytes (KB). Default: 1 MB when compression is enabled; for uncompressed datasets, the default is the full dataset size x dimension.

<a id="input_-5"></a>
### dataset_size_compression_threshold (Pin -5)

- **Required:** No
- **Expected type(s):** [`int32`](../../core-concepts/dpf-types.md#standard-types), [`generic_data_container`](../../core-concepts/dpf-types.md#generic-data-container)

Integer value that defines the minimum dataset size (in bytes) to use h5 native compression Applicable for arrays of floats, doubles and integers.

<a id="input_-2"></a>
### h5_native_compression (Pin -2)

- **Required:** No
- **Expected type(s):** [`int32`](../../core-concepts/dpf-types.md#standard-types), [`abstract_data_tree`](../../core-concepts/dpf-types.md#data-tree), [`generic_data_container`](../../core-concepts/dpf-types.md#generic-data-container)

Integer value / DataTree that defines the h5 native compression used For Integer Input {0: No Compression (default); 1-9: GZIP Compression : 9 provides maximum compression but at the slowest speed.}For DataTree Input {type: None / GZIP / ZSTD; level: GZIP (1-9) / ZSTD (1-20); num_threads: ZSTD (>0)}

<a id="input_-1"></a>
### export_floats (Pin -1)

- **Required:** No
- **Expected type(s):** [`bool`](../../core-concepts/dpf-types.md#standard-types), [`generic_data_container`](../../core-concepts/dpf-types.md#generic-data-container)

Converts double to float to reduce file size (default is true).If False, nodal results are exported as double precision and elemental results as single precision.

<a id="input_0"></a>
### filename (Pin 0)

- **Required:** Yes
- **Expected type(s):** [`string`](../../core-concepts/dpf-types.md#standard-types)

filename of the migrated file

<a id="input_1"></a>
### comma_separated_list_of_results (Pin 1)

- **Required:** No
- **Expected type(s):** [`string`](../../core-concepts/dpf-types.md#standard-types)

list of results (source operator names) separated by semicolons that will be stored. (Example: U;S;EPEL). If empty, all available results will be converted.  

<a id="input_2"></a>
### all_time_sets (Pin 2)

- **Required:** No
- **Expected type(s):** [`bool`](../../core-concepts/dpf-types.md#standard-types)

Deprecated. Please use filtering workflows instead to select time scoping. Default is false.

<a id="input_3"></a>
### streams_container (Pin 3)

- **Required:** No
- **Expected type(s):** [`streams_container`](../../core-concepts/dpf-types.md#streams-container)

streams (result file container) (optional)

<a id="input_4"></a>
### data_sources (Pin 4)

- **Required:** No
- **Expected type(s):** [`data_sources`](../../core-concepts/dpf-types.md#data-sources)

if the stream is null then we need to get the file path from the data sources

<a id="input_6"></a>
### compression_workflow (Pin 6)

- **Required:** No
- **Expected type(s):** [`workflow`](../../core-concepts/dpf-types.md#workflow), [`generic_data_container`](../../core-concepts/dpf-types.md#generic-data-container)

BETA Option: Applies input compression workflow.

<a id="input_7"></a>
### filtering_workflow (Pin 7)

- **Required:** No
- **Expected type(s):** [`workflow`](../../core-concepts/dpf-types.md#workflow), [`generic_data_container`](../../core-concepts/dpf-types.md#generic-data-container)

Applies input filtering workflow.


## Outputs

This table lists the output pins for this operator.
Output pins provide the results of the operator's computation and can be connected to inputs of other operators or retrieved for further processing.
Each output is detailed in the sections that follow the table.

| Pin number |  Name | Expected type(s) |
|-------|------|------------------|
|  **0**| [migrated_file](#output_0) |[`data_sources`](../../core-concepts/dpf-types.md#data-sources) |


<a id="output_0"></a>
### migrated_file (Pin 0)

- **Expected type(s):** [`data_sources`](../../core-concepts/dpf-types.md#data-sources)




## Configurations

This operator supports [configuration options](../../core-concepts/operator-configurations.md) that modify its behavior.


### [mutex](../../core-concepts/operator-configurations.md#mutex)

- **Expected type(s):** [`bool`](../../core-concepts/dpf-types.md#standard-types)
- **Default value:** false

If this option is set to true, the shared memory is prevented from being simultaneously accessed by multiple threads.



## Scripting

This operator can be accessed through scripting interfaces using these identifiers.

 **Category**: result

 **Plugin**: core

 **Scripting name**: migrate_to_h5dpf

 **Full name**: result.migrate_to_h5dpf

 **Internal name**: hdf5::h5dpf::migrate_file

 **License**: None

## Examples

These examples demonstrate how to use this operator in different programming environments.
Each example shows how to instantiate the operator, connect the required inputs, and retrieve the output.

<details>
<summary>C++</summary>

```cpp
#include "dpf_api.h"

ansys::dpf::Operator op("hdf5::h5dpf::migrate_file"); // operator instantiation
op.connect(-7, my_h5_chunk_size);
op.connect(-5, my_dataset_size_compression_threshold);
op.connect(-2, my_h5_native_compression);
op.connect(-1, my_export_floats);
op.connect(0, my_filename);
op.connect(1, my_comma_separated_list_of_results);
op.connect(2, my_all_time_sets);
op.connect(3, my_streams_container);
op.connect(4, my_data_sources);
op.connect(6, my_compression_workflow);
op.connect(7, my_filtering_workflow);
ansys::dpf::DataSources my_migrated_file = op.getOutput<ansys::dpf::DataSources>(0);
```
</details>

<details>
<summary>CPython</summary>

```python
import ansys.dpf.core as dpf

op = dpf.operators.result.migrate_to_h5dpf() # operator instantiation
op.inputs.h5_chunk_size.connect(my_h5_chunk_size)
op.inputs.dataset_size_compression_threshold.connect(my_dataset_size_compression_threshold)
op.inputs.h5_native_compression.connect(my_h5_native_compression)
op.inputs.export_floats.connect(my_export_floats)
op.inputs.filename.connect(my_filename)
op.inputs.comma_separated_list_of_results.connect(my_comma_separated_list_of_results)
op.inputs.all_time_sets.connect(my_all_time_sets)
op.inputs.streams_container.connect(my_streams_container)
op.inputs.data_sources.connect(my_data_sources)
op.inputs.compression_workflow.connect(my_compression_workflow)
op.inputs.filtering_workflow.connect(my_filtering_workflow)
my_migrated_file = op.outputs.migrated_file()
```
</details>

<details>
<summary>IPython</summary>

```python
import mech_dpf
import Ans.DataProcessing as dpf

op = dpf.operators.result.migrate_to_h5dpf() # operator instantiation
op.inputs.h5_chunk_size.Connect(my_h5_chunk_size)
op.inputs.dataset_size_compression_threshold.Connect(my_dataset_size_compression_threshold)
op.inputs.h5_native_compression.Connect(my_h5_native_compression)
op.inputs.export_floats.Connect(my_export_floats)
op.inputs.filename.Connect(my_filename)
op.inputs.comma_separated_list_of_results.Connect(my_comma_separated_list_of_results)
op.inputs.all_time_sets.Connect(my_all_time_sets)
op.inputs.streams_container.Connect(my_streams_container)
op.inputs.data_sources.Connect(my_data_sources)
op.inputs.compression_workflow.Connect(my_compression_workflow)
op.inputs.filtering_workflow.Connect(my_filtering_workflow)
my_migrated_file = op.outputs.migrated_file.GetData()
```
</details>
<br>

## Changelog

- Version 0.0.0: Initial release.