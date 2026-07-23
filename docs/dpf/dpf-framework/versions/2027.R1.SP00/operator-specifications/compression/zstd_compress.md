---
category: compression
plugin: N/A
license: None
---

# compression:zstd compress (field)

**Version: 0.0.0**

## Description

Compresses the data of a field with ZSTD compression algorithm.

## Inputs

This table lists the input pins for this operator. Input pins define the data that the operator requires to perform its operation.
Some inputs are required, while others are optional and provide additional configuration.
Each parameter is detailed in the sections that follow the table.

| Pin number | Name | Status | Expected type(s) |
|------------|------|--------|------------------|
| <strong>0</strong> | [input_field](#input_0) |  <span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;" title="This pin is required">Required</span>|[`field`](../../core-concepts/dpf-types.md#field), [`custom_type_field`](../../core-concepts/dpf-types.md#custom-type-field) |
| <strong>2</strong> | [zstd_level](#input_2) |  |[`int32`](../../core-concepts/dpf-types.md#standard-types) |
| <strong>3</strong> | [num_threads](#input_3) |  |[`int32`](../../core-concepts/dpf-types.md#standard-types) |


<a id="input_0"></a>
### input_field (Pin 0)

- **Required:** Yes
- **Expected type(s):** [`field`](../../core-concepts/dpf-types.md#field), [`custom_type_field`](../../core-concepts/dpf-types.md#custom-type-field)

Field or custom type field of type "double" to compress.

<a id="input_2"></a>
### zstd_level (Pin 2)

- **Required:** No
- **Expected type(s):** [`int32`](../../core-concepts/dpf-types.md#standard-types)

Compression level : from 0 to 20. Default = 3.
 High compression level increase computation time.

<a id="input_3"></a>
### num_threads (Pin 3)

- **Required:** No
- **Expected type(s):** [`int32`](../../core-concepts/dpf-types.md#standard-types)

Number of threads for parallelization : from 0 to 20. Default = 4.


## Outputs

This table lists the output pins for this operator.
Output pins provide the results of the operator's computation and can be connected to inputs of other operators or retrieved for further processing.
Each output is detailed in the sections that follow the table.

| Pin number |  Name | Expected type(s) |
|-------|------|------------------|
|  **0**| [compressed_output](#output_0) |[`generic_data_container`](../../core-concepts/dpf-types.md#generic-data-container) |
|  **1**| [output_bytes_size](#output_1) |[`uint64`](../../core-concepts/dpf-types.md#standard-types) |


<a id="output_0"></a>
### compressed_output (Pin 0)

- **Expected type(s):** [`generic_data_container`](../../core-concepts/dpf-types.md#generic-data-container)

Generic data container containing the following elements needed for decompression :
- Uncompressed metadata (header, support, field definition)
- Compressed data
- Compressed scoping and its location
- Compressed data pointer if it exists
- Input field type (field or custom type field)


<a id="output_1"></a>
### output_bytes_size (Pin 1)

- **Expected type(s):** [`uint64`](../../core-concepts/dpf-types.md#standard-types)

Total size of compressed data in bytes.


## Configurations

This operator supports [configuration options](../../core-concepts/operator-configurations.md) that modify its behavior.


### [mutex](../../core-concepts/operator-configurations.md#mutex)

- **Expected type(s):** [`bool`](../../core-concepts/dpf-types.md#standard-types)
- **Default value:** false

If this option is set to true, the shared memory is prevented from being simultaneously accessed by multiple threads.



## Scripting

This operator can be accessed through scripting interfaces using these identifiers.

 **Category**: compression

 **Plugin**: N/A

 **Scripting name**: zstd_compress

 **Full name**: compression.zstd_compress

 **Internal name**: zstd_compress

 **License**: None

## Examples

These examples demonstrate how to use this operator in different programming environments.
Each example shows how to instantiate the operator, connect the required inputs, and retrieve the output.

<details>
<summary>C++</summary>

```cpp
#include "dpf_api.h"

ansys::dpf::Operator op("zstd_compress"); // operator instantiation
op.connect(0, my_input_field);
op.connect(2, my_zstd_level);
op.connect(3, my_num_threads);
ansys::dpf::GenericDataContainer my_compressed_output = op.getOutput<ansys::dpf::GenericDataContainer>(0);
ansys::dpf::Uint64 my_output_bytes_size = op.getOutput<ansys::dpf::Uint64>(1);
```
</details>

<details>
<summary>CPython</summary>

```python
import ansys.dpf.core as dpf

op = dpf.operators.compression.zstd_compress() # operator instantiation
op.inputs.input_field.connect(my_input_field)
op.inputs.zstd_level.connect(my_zstd_level)
op.inputs.num_threads.connect(my_num_threads)
my_compressed_output = op.outputs.compressed_output()
my_output_bytes_size = op.outputs.output_bytes_size()
```
</details>

<details>
<summary>IPython</summary>

```python
import mech_dpf
import Ans.DataProcessing as dpf

op = dpf.operators.compression.zstd_compress() # operator instantiation
op.inputs.input_field.Connect(my_input_field)
op.inputs.zstd_level.Connect(my_zstd_level)
op.inputs.num_threads.Connect(my_num_threads)
my_compressed_output = op.outputs.compressed_output.GetData()
my_output_bytes_size = op.outputs.output_bytes_size.GetData()
```
</details>
<br>

## Changelog

- Version 0.0.0: Initial release.