---
category: compression
plugin: N/A
license: any_dpf_supported_increments
---

# compression:quantization (field)

**Version: 0.0.0**

## Description

Scales a field to a given precision threshold, then rounds all the values to the unit.

The output of the quantization operation is :
$$ q(x) = \left\lfloor\frac{x}{2\varepsilon} + \frac{1}{2}\right\rfloor $$
The truncated value in the original scale has to be computed by doing $ 2\varepsilon q(x) $.

To truncate a number to $n$ decimal places, the threshold must be chosen as $10^{-n}$.

## Inputs

This table lists the input pins for this operator. Input pins define the data that the operator requires to perform its operation.
Some inputs are required, while others are optional and provide additional configuration.
Each parameter is detailed in the sections that follow the table.

| Pin number | Name | Status | Expected type(s) |
|------------|------|--------|------------------|
| <strong>0</strong> | [input_field](#input_0) |  <span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;" title="This pin is required">Required</span>|[`field`](../../core-concepts/dpf-types.md#field) |
| <strong>1</strong> | [threshold](#input_1) |  <span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;" title="This pin is required">Required</span>|[`double`](../../core-concepts/dpf-types.md#standard-types), [`field`](../../core-concepts/dpf-types.md#field) |


<a id="input_0"></a>
### input_field (Pin 0)

- **Required:** Yes
- **Expected type(s):** [`field`](../../core-concepts/dpf-types.md#field)

Field to quantize.

<a id="input_1"></a>
### threshold (Pin 1)

- **Required:** Yes
- **Expected type(s):** [`double`](../../core-concepts/dpf-types.md#standard-types), [`field`](../../core-concepts/dpf-types.md#field)

Precision threshold desired.

- Case double : the threshold is applied over all the input field.
- Case field with one value : the threshold is applied over all the input field.
- Case field with _numComp_ values : each threhsold is applied to the corresponding component of the input field.
- Case field with the same number of values than the input field : quantization is performed component-wise.


## Outputs

This table lists the output pins for this operator.
Output pins provide the results of the operator's computation and can be connected to inputs of other operators or retrieved for further processing.
Each output is detailed in the sections that follow the table.

| Pin number |  Name | Expected type(s) |
|-------|------|------------------|
|  **0**| [output_field](#output_0) |[`field`](../../core-concepts/dpf-types.md#field) |


<a id="output_0"></a>
### output_field (Pin 0)

- **Expected type(s):** [`field`](../../core-concepts/dpf-types.md#field)

Quantized field.


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

 **Scripting name**: quantization

 **Full name**: compression.quantization

 **Internal name**: quantization

 **License**: any_dpf_supported_increments

## Examples

These examples demonstrate how to use this operator in different programming environments.
Each example shows how to instantiate the operator, connect the required inputs, and retrieve the output.

<details>
<summary>C++</summary>

```cpp
#include "dpf_api.h"

ansys::dpf::Operator op("quantization"); // operator instantiation
op.connect(0, my_input_field);
op.connect(1, my_threshold);
ansys::dpf::Field my_output_field = op.getOutput<ansys::dpf::Field>(0);
```
</details>

<details>
<summary>CPython</summary>

```python
import ansys.dpf.core as dpf

op = dpf.operators.compression.quantization() # operator instantiation
op.inputs.input_field.connect(my_input_field)
op.inputs.threshold.connect(my_threshold)
my_output_field = op.outputs.output_field()
```
</details>

<details>
<summary>IPython</summary>

```python
import mech_dpf
import Ans.DataProcessing as dpf

op = dpf.operators.compression.quantization() # operator instantiation
op.inputs.input_field.Connect(my_input_field)
op.inputs.threshold.Connect(my_threshold)
my_output_field = op.outputs.output_field.GetData()
```
</details>
<br>

## Changelog

- Version 0.0.0: Initial release.