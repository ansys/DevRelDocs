---
category: compression
plugin: N/A
license: any_dpf_supported_increments
---

# compression:quantization (fields container)

**Version: 0.0.0**

## Description

Scales all the fields of a fields container to a given precision threshold, then rounds all the values to the unit.

## Inputs

| Pin number | Name | Expected type(s) |
|-------|-------|------------------|
| <strong>0</strong> <span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  [input_fc](#input_0) |[`fields_container`](../../core-concepts/dpf-types.md#fields-container) |
| <strong>1</strong> <span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  [threshold](#input_1) |[`double`](../../core-concepts/dpf-types.md#standard-types), [`field`](../../core-concepts/dpf-types.md#field), [`fields_container`](../../core-concepts/dpf-types.md#fields-container) |


<a id="input_0"></a>
### input_fc (Pin 0)

- **Required:** Yes
- **Expected type(s):** [`fields_container`](../../core-concepts/dpf-types.md#fields-container)

Fields container to be quantized.

<a id="input_1"></a>
### threshold (Pin 1)

- **Required:** Yes
- **Expected type(s):** [`double`](../../core-concepts/dpf-types.md#standard-types), [`field`](../../core-concepts/dpf-types.md#field), [`fields_container`](../../core-concepts/dpf-types.md#fields-container)

Precision threshold desired.
Case double : the threshold is applied on all the fields of the input fields container.
Case field with one, numComp or input size values : the threshold is used for each field of the input fields container.
Case fields container : the corresponding threshold field is found by matching label.



## Outputs

| Pin number |  Name | Expected type(s) |
|-------|------|------------------|
|  **0**| [output_fc](#output_0) |[`fields_container`](../../core-concepts/dpf-types.md#fields-container) |


<a id="output_0"></a>
### output_fc (Pin 0)

- **Expected type(s):** [`fields_container`](../../core-concepts/dpf-types.md#fields-container)

Quantized fields container.


## Configurations


### mutex

- **Expected type(s):** [`bool`](../../core-concepts/dpf-types.md#standard-types)
- **Default value:** false

If this option is set to true, the shared memory is prevented from being simultaneously accessed by multiple threads.



## Scripting

 **Category**: compression

 **Plugin**: N/A

 **Scripting name**: quantization_fc

 **Full name**: compression.quantization_fc

 **Internal name**: quantization_fc

 **License**: any_dpf_supported_increments

## Examples

<details>
<summary>C++</summary>

```cpp
#include "dpf_api.h"

ansys::dpf::Operator op("quantization_fc"); // operator instantiation
op.connect(0, my_input_fc);
op.connect(1, my_threshold);
ansys::dpf::FieldsContainer my_output_fc = op.getOutput<ansys::dpf::FieldsContainer>(0);
```
</details>

<details>
<summary>CPython</summary>

```python
import ansys.dpf.core as dpf

op = dpf.operators.compression.quantization_fc() # operator instantiation
op.inputs.input_fc.connect(my_input_fc)
op.inputs.threshold.connect(my_threshold)
my_output_fc = op.outputs.output_fc()
```
</details>

<details>
<summary>IPython</summary>

```python
import mech_dpf
import Ans.DataProcessing as dpf

op = dpf.operators.compression.quantization_fc() # operator instantiation
op.inputs.input_fc.Connect(my_input_fc)
op.inputs.threshold.Connect(my_threshold)
my_output_fc = op.outputs.output_fc.GetData()
```
</details>
<br>

## Changelog

- Version 0.0.0: Initial release.