---
category: compression
plugin: core
license: None
---

# compression:apply zfp

**Version: 0.0.0**

## Description

Compressing input data using one of zfp compression algorithm modes.

## Inputs

| Pin number | Name | Expected type(s) |
|-------|-------|------------------|
| <strong>0</strong> <span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  [dataIn](#input_0) |[`field`](../../core-concepts/dpf-types.md#field), [`fields_container`](../../core-concepts/dpf-types.md#fields-container) |
| <strong>1</strong> <span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  [mode](#input_1) |[`string`](../../core-concepts/dpf-types.md#standard-types), [`char`](../../core-concepts/dpf-types.md#standard-types) |
| <strong>2</strong> <span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  [mode_parameter](#input_2) |[`int32`](../../core-concepts/dpf-types.md#standard-types), [`double`](../../core-concepts/dpf-types.md#standard-types) |
| <strong>3</strong>|  [dim](#input_3) |[`int32`](../../core-concepts/dpf-types.md#standard-types) |
| <strong>4</strong>|  [order](#input_4) |[`int32`](../../core-concepts/dpf-types.md#standard-types) |
| <strong>5</strong>|  [double_absthreshold](#input_5) |[`double`](../../core-concepts/dpf-types.md#standard-types) |
| <strong>6</strong>|  [double_relthreshold](#input_6) |[`double`](../../core-concepts/dpf-types.md#standard-types) |


<a id="input_0"></a>
### dataIn (Pin 0)

- **Required:** Yes
- **Expected type(s):** [`field`](../../core-concepts/dpf-types.md#field), [`fields_container`](../../core-concepts/dpf-types.md#fields-container)

field or fields container to be compressed

<a id="input_1"></a>
### mode (Pin 1)

- **Required:** Yes
- **Expected type(s):** [`string`](../../core-concepts/dpf-types.md#standard-types), [`char`](../../core-concepts/dpf-types.md#standard-types)

zfp mode: fixed-rate ('r'), fixed-precision ('p'), fixed-accuracy ('a')

<a id="input_2"></a>
### mode_parameter (Pin 2)

- **Required:** Yes
- **Expected type(s):** [`int32`](../../core-concepts/dpf-types.md#standard-types), [`double`](../../core-concepts/dpf-types.md#standard-types)

mode-corresponding parameter: rate (double) / precision (int) / accuracy (double)

<a id="input_3"></a>
### dim (Pin 3)

- **Required:** No
- **Expected type(s):** [`int32`](../../core-concepts/dpf-types.md#standard-types)

dimension (1D/2D/3D) for data organization before the compression (int; default: 2)

<a id="input_4"></a>
### order (Pin 4)

- **Required:** No
- **Expected type(s):** [`int32`](../../core-concepts/dpf-types.md#standard-types)

xyz dimensions order, where x (row) corresponds to number of elementary data, y (col) - number of time steps, z - number of components (applicable only for 3d data) : 0=xyz, 1=yxz (int; default: 0)

<a id="input_5"></a>
### double_absthreshold (Pin 5)

- **Required:** No
- **Expected type(s):** [`double`](../../core-concepts/dpf-types.md#standard-types)

Double positive small value. All the values smaller than max(small value, max(vi) * relative threshold) are considered as zero values, (default value: 1.0e-18).

<a id="input_6"></a>
### double_relthreshold (Pin 6)

- **Required:** No
- **Expected type(s):** [`double`](../../core-concepts/dpf-types.md#standard-types)

Double relative threshold. Values smaller than (v1 - v2) < max(small value, v1 * relativeTol) are considered identical (default value: 1.0e-10).


## Outputs

| Pin number |  Name | Expected type(s) |
|-------|------|------------------|
|  **0**| [compress_speed](#output_0) |[`double`](../../core-concepts/dpf-types.md#standard-types) |
|  **1**| [compress_ratio](#output_1) |[`double`](../../core-concepts/dpf-types.md#standard-types) |
|  **2**| [dataOut](#output_2) |[`custom_type_fields_container`](../../core-concepts/dpf-types.md#custom-type-fields-container) |


<a id="output_0"></a>
### compress_speed (Pin 0)

- **Expected type(s):** [`double`](../../core-concepts/dpf-types.md#standard-types)

the output entity is a double, containing compression speed of the input data: for ElementalNodal location - [elements/sec], for Nodal location - [nodes/sec]

<a id="output_1"></a>
### compress_ratio (Pin 1)

- **Expected type(s):** [`double`](../../core-concepts/dpf-types.md#standard-types)

the output entity is a double, containing compression rate = initial/compressed

<a id="output_2"></a>
### dataOut (Pin 2)

- **Expected type(s):** [`custom_type_fields_container`](../../core-concepts/dpf-types.md#custom-type-fields-container)

the output entity is a 'custom type field container';                     each output field containing compressed results corresponding to one component data (ie. input vector field/fc contains 3 components will give 3 output fields), this is not the case when input pin3 is set to 3, all components will be compressed into one field.


## Configurations


### mutex

- **Expected type(s):** [`bool`](../../core-concepts/dpf-types.md#standard-types)
- **Default value:** false

If this option is set to true, the shared memory is prevented from being simultaneously accessed by multiple threads.

### num_threads

- **Expected type(s):** [`int32`](../../core-concepts/dpf-types.md#standard-types)
- **Default value:** 0

Number of threads to use to run in parallel

### run_in_parallel

- **Expected type(s):** [`bool`](../../core-concepts/dpf-types.md#standard-types)
- **Default value:** true

Loops are allowed to run in parallel if the value of this config is set to true.

### use_cuda

- **Expected type(s):** [`bool`](../../core-concepts/dpf-types.md#standard-types)
- **Default value:** false

If this option is set to true, zfp fixed-rate parallel (de)compression will use CUDA. 



## Scripting

 **Category**: compression

 **Plugin**: core

 **Scripting name**: apply_zfp

 **Full name**: compression.apply_zfp

 **Internal name**: zfp

 **License**: None

## Examples

<details>
<summary>C++</summary>

```cpp
#include "dpf_api.h"

ansys::dpf::Operator op("zfp"); // operator instantiation
op.connect(0, my_dataIn);
op.connect(1, my_mode);
op.connect(2, my_mode_parameter);
op.connect(3, my_dim);
op.connect(4, my_order);
op.connect(5, my_double_absthreshold);
op.connect(6, my_double_relthreshold);
double my_compress_speed = op.getOutput<double>(0);
double my_compress_ratio = op.getOutput<double>(1);
ansys::dpf::CustomTypeFieldsContainer my_dataOut = op.getOutput<ansys::dpf::CustomTypeFieldsContainer>(2);
```
</details>

<details>
<summary>CPython</summary>

```python
import ansys.dpf.core as dpf

op = dpf.operators.compression.apply_zfp() # operator instantiation
op.inputs.dataIn.connect(my_dataIn)
op.inputs.mode.connect(my_mode)
op.inputs.mode_parameter.connect(my_mode_parameter)
op.inputs.dim.connect(my_dim)
op.inputs.order.connect(my_order)
op.inputs.double_absthreshold.connect(my_double_absthreshold)
op.inputs.double_relthreshold.connect(my_double_relthreshold)
my_compress_speed = op.outputs.compress_speed()
my_compress_ratio = op.outputs.compress_ratio()
my_dataOut = op.outputs.dataOut()
```
</details>

<details>
<summary>IPython</summary>

```python
import mech_dpf
import Ans.DataProcessing as dpf

op = dpf.operators.compression.apply_zfp() # operator instantiation
op.inputs.dataIn.Connect(my_dataIn)
op.inputs.mode.Connect(my_mode)
op.inputs.mode_parameter.Connect(my_mode_parameter)
op.inputs.dim.Connect(my_dim)
op.inputs.order.Connect(my_order)
op.inputs.double_absthreshold.Connect(my_double_absthreshold)
op.inputs.double_relthreshold.Connect(my_double_relthreshold)
my_compress_speed = op.outputs.compress_speed.GetData()
my_compress_ratio = op.outputs.compress_ratio.GetData()
my_dataOut = op.outputs.dataOut.GetData()
```
</details>
<br>

## Changelog

- Version 0.0.0: Initial release.