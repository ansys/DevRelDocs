---
category: compression
plugin: N/A
license: None
---

# compression:zstd decompress (field)

**Version: 0.0.0**

## Description

Decompresses a field compressed with ZSTD compression algorithm.

## Inputs

This table lists the input pins for this operator. Input pins define the data that the operator requires to perform its operation.
Some inputs are required, while others are optional and provide additional configuration.
Each parameter is detailed in the sections that follow the table.

| Pin number | Name | Status | Expected type(s) |
|------------|------|--------|------------------|
| <strong>0</strong> | [compressed_input](#input_0) |  <span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;" title="This pin is required">Required</span>|[`generic_data_container`](../../core-concepts/dpf-types.md#generic-data-container) |


<a id="input_0"></a>
### compressed_input (Pin 0)

- **Required:** Yes
- **Expected type(s):** [`generic_data_container`](../../core-concepts/dpf-types.md#generic-data-container)

Generic data container containing the following elements needed for decompression :
- Uncompressed metadata (header, support, field definition)
- Compressed data
- Compressed scoping and its location
- Compressed data pointer if it exists
- Output field type (field or custom type field)



## Outputs

This table lists the output pins for this operator.
Output pins provide the results of the operator's computation and can be connected to inputs of other operators or retrieved for further processing.
Each output is detailed in the sections that follow the table.

| Pin number |  Name | Expected type(s) |
|-------|------|------------------|
|  **0**| [decompressed_field](#output_0) |[`field`](../../core-concepts/dpf-types.md#field), [`custom_type_field`](../../core-concepts/dpf-types.md#custom-type-field) |


<a id="output_0"></a>
### decompressed_field (Pin 0)

- **Expected type(s):** [`field`](../../core-concepts/dpf-types.md#field), [`custom_type_field`](../../core-concepts/dpf-types.md#custom-type-field)

Decompressed field or custom type field.


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

 **Scripting name**: zstd_decompress

 **Full name**: compression.zstd_decompress

 **Internal name**: zstd_decompress

 **License**: None

## Examples

These examples demonstrate how to use this operator in different programming environments.
Each example shows how to instantiate the operator, connect the required inputs, and retrieve the output.

<details>
<summary>C++</summary>

```cpp
#include "dpf_api.h"

ansys::dpf::Operator op("zstd_decompress"); // operator instantiation
op.connect(0, my_compressed_input);
ansys::dpf::Field my_decompressed_field = op.getOutput<ansys::dpf::Field>(0);
```
</details>

<details>
<summary>CPython</summary>

```python
import ansys.dpf.core as dpf

op = dpf.operators.compression.zstd_decompress() # operator instantiation
op.inputs.compressed_input.connect(my_compressed_input)
my_decompressed_field_as_field = op.outputs.decompressed_field_as_field()
```
</details>

<details>
<summary>IPython</summary>

```python
import mech_dpf
import Ans.DataProcessing as dpf

op = dpf.operators.compression.zstd_decompress() # operator instantiation
op.inputs.compressed_input.Connect(my_compressed_input)
my_decompressed_field = op.outputs.decompressed_field.GetData()
```
</details>
<br>

## Changelog

- Version 0.0.0: Initial release.