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

| Input | Name | Expected type(s) | Description |
|-------|-------|------------------|-------------|
| <strong>Pin 0</strong> <br><span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  dataIn |[`field`](../../core-concepts/dpf-types.md#field), [`fields_container`](../../core-concepts/dpf-types.md#fields-container) | field or fields container to be compressed |
| <strong>Pin 1</strong> <br><span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  mode |[`string`](../../core-concepts/dpf-types.md#standard-types), [`char`](../../core-concepts/dpf-types.md#standard-types) | zfp mode: fixed-rate ('r'), fixed-precision ('p'), fixed-accuracy ('a') |
| <strong>Pin 2</strong> <br><span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  mode_parameter |[`int32`](../../core-concepts/dpf-types.md#standard-types), [`double`](../../core-concepts/dpf-types.md#standard-types) | mode-corresponding parameter: rate (double) / precision (int) / accuracy (double) |
| <strong>Pin 3</strong>|  dim |[`int32`](../../core-concepts/dpf-types.md#standard-types) | dimension (1D/2D/3D) for data organization before the compression (int; default: 2) |
| <strong>Pin 4</strong>|  order |[`int32`](../../core-concepts/dpf-types.md#standard-types) | xyz dimensions order, where x (row) corresponds to number of elementary data, y (col) - number of time steps, z - number of components (applicable only for 3d data) : 0=xyz, 1=yxz (int; default: 0) |
| <strong>Pin 5</strong>|  double_absthreshold |[`double`](../../core-concepts/dpf-types.md#standard-types) | Double positive small value. All the values smaller than max(small value, max(vi) * relative threshold) are considered as zero values, (default value: 1.0e-18). |
| <strong>Pin 6</strong>|  double_relthreshold |[`double`](../../core-concepts/dpf-types.md#standard-types) | Double relative threshold. Values smaller than (v1 - v2) < max(small value, v1 * relativeTol) are considered identical (default value: 1.0e-10). |

## Outputs

| Output |  Name | Expected type(s) | Description |
|-------|------|------------------|-------------|
|  **Pin 0**| compress_speed |[`double`](../../core-concepts/dpf-types.md#standard-types) | the output entity is a double, containing compression speed of the input data: for ElementalNodal location - [elements/sec], for Nodal location - [nodes/sec] |
|  **Pin 1**| compress_ratio |[`double`](../../core-concepts/dpf-types.md#standard-types) | the output entity is a double, containing compression rate = initial/compressed |
|  **Pin 2**| dataOut |[`custom_type_fields_container`](../../core-concepts/dpf-types.md#custom-type-fields-container) | the output entity is a 'custom type field container';                     each output field containing compressed results corresponding to one component data (ie. input vector field/fc contains 3 components will give 3 output fields), this is not the case when input pin3 is set to 3, all components will be compressed into one field. |

## Configurations

| Name| Expected type(s) | Default value | Description |
|-----|------|----------|-------------|
| **mutex** |[`bool`](../../core-concepts/dpf-types.md#standard-types) | false | If this option is set to true, the shared memory is prevented from being simultaneously accessed by multiple threads. |
| **num_threads** |[`int32`](../../core-concepts/dpf-types.md#standard-types) | 0 | Number of threads to use to run in parallel |
| **run_in_parallel** |[`bool`](../../core-concepts/dpf-types.md#standard-types) | true | Loops are allowed to run in parallel if the value of this config is set to true. |
| **use_cuda** |[`bool`](../../core-concepts/dpf-types.md#standard-types) | false | If this option is set to true, zfp fixed-rate parallel (de)compression will use CUDA.  |

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