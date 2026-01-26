---
category: compression
plugin: core
license: None
---

# compression:zfp decompression

**Version: 0.0.0**

## Description

zfp decompression using the information about compression written into the properties of the field(s)

## Inputs

| Pin number | Name | Expected type(s) |
|-------|-------|------------------|
| <strong>0</strong> <span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  [dataIn](#input_0) |[`custom_type_fields_container`](../../core-concepts/dpf-types.md#custom-type-fields-container) |


<a id="input_0"></a>
### dataIn (Pin 0)

- **Required:** Yes
- **Expected type(s):** [`custom_type_fields_container`](../../core-concepts/dpf-types.md#custom-type-fields-container)

custom type field container from zfp_compression operator to decompress


## Outputs

| Pin number |  Name | Expected type(s) |
|-------|------|------------------|
|  **0**| [dataOut](#output_0) |[`field`](../../core-concepts/dpf-types.md#field), [`fields_container`](../../core-concepts/dpf-types.md#fields-container) |
|  **1**| [decompress_speed](#output_1) |[`double`](../../core-concepts/dpf-types.md#standard-types) |


<a id="output_0"></a>
### dataOut (Pin 0)

- **Expected type(s):** [`field`](../../core-concepts/dpf-types.md#field), [`fields_container`](../../core-concepts/dpf-types.md#fields-container)

the output entity is a field or a fields container; it contains decompressed data

<a id="output_1"></a>
### decompress_speed (Pin 1)

- **Expected type(s):** [`double`](../../core-concepts/dpf-types.md#standard-types)

the output entity is a double, containing decompression speed (mb/sec)


## Configurations


### mutex

- **Expected type(s):** [`bool`](../../core-concepts/dpf-types.md#standard-types)
- **Default value:** false

If this option is set to true, the shared memory is prevented from being simultaneously accessed by multiple threads.



## Scripting

 **Category**: compression

 **Plugin**: core

 **Scripting name**: zfp_decompress

 **Full name**: compression.zfp_decompress

 **Internal name**: zfp_decompress

 **License**: None

## Examples

<details>
<summary>C++</summary>

```cpp
#include "dpf_api.h"

ansys::dpf::Operator op("zfp_decompress"); // operator instantiation
op.connect(0, my_dataIn);
ansys::dpf::Field my_dataOut = op.getOutput<ansys::dpf::Field>(0);
double my_decompress_speed = op.getOutput<double>(1);
```
</details>

<details>
<summary>CPython</summary>

```python
import ansys.dpf.core as dpf

op = dpf.operators.compression.zfp_decompress() # operator instantiation
op.inputs.dataIn.connect(my_dataIn)
my_dataOut_as_field = op.outputs.dataOut_as_field()
my_decompress_speed = op.outputs.decompress_speed()
```
</details>

<details>
<summary>IPython</summary>

```python
import mech_dpf
import Ans.DataProcessing as dpf

op = dpf.operators.compression.zfp_decompress() # operator instantiation
op.inputs.dataIn.Connect(my_dataIn)
my_dataOut = op.outputs.dataOut.GetData()
my_decompress_speed = op.outputs.decompress_speed.GetData()
```
</details>
<br>

## Changelog

- Version 0.0.0: Initial release.