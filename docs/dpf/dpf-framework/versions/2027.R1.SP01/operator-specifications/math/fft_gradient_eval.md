---
category: math
plugin: core
license: any_dpf_supported_increments
---

# math:fft gradient evaluation

**Version: 0.0.0**

## Description

Evaluate min max based on the fast fourier transform at a given field, using gradient method for adaptative time step.

## Inputs

This table lists the input pins for this operator. Input pins define the data that the operator requires to perform its operation.
Some inputs are required, while others are optional and provide additional configuration.
Each parameter is detailed in the sections that follow the table.

| Pin number | Name | Status | Expected type(s) |
|------------|------|--------|------------------|
| <strong>0</strong> | [fields_container](/docs/dpf/dpf-framework/versions/2027.R1.SP01/operator-specifications/math/fft_gradient_eval) |  <span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;" title="This pin is required">Required</span>|[`fields_container`](/docs/dpf/dpf-framework/versions/2027.R1.SP01/core-concepts/dpf-types) |
| <strong>1</strong> | [time_scoping](/docs/dpf/dpf-framework/versions/2027.R1.SP01/operator-specifications/math/fft_gradient_eval) |  |[`scoping`](/docs/dpf/dpf-framework/versions/2027.R1.SP01/core-concepts/dpf-types) |
| <strong>2</strong> | [fs_ratio](/docs/dpf/dpf-framework/versions/2027.R1.SP01/operator-specifications/math/fft_gradient_eval) |  |[`int32`](/docs/dpf/dpf-framework/versions/2027.R1.SP01/core-concepts/dpf-types) |


<a id="input_0"></a>
### fields_container (Pin 0)

- **Required:** Yes
- **Expected type(s):** [`fields_container`](/docs/dpf/dpf-framework/versions/2027.R1.SP01/core-concepts/dpf-types)



<a id="input_1"></a>
### time_scoping (Pin 1)

- **Required:** No
- **Expected type(s):** [`scoping`](/docs/dpf/dpf-framework/versions/2027.R1.SP01/core-concepts/dpf-types)

if specified only the results at these set ids are used

<a id="input_2"></a>
### fs_ratio (Pin 2)

- **Required:** No
- **Expected type(s):** [`int32`](/docs/dpf/dpf-framework/versions/2027.R1.SP01/core-concepts/dpf-types)

default value = 20


## Outputs

This table lists the output pins for this operator.
Output pins provide the results of the operator's computation and can be connected to inputs of other operators or retrieved for further processing.
Each output is detailed in the sections that follow the table.

| Pin number |  Name | Expected type(s) |
|-------|------|------------------|
|  **0**| [coefficients](/docs/dpf/dpf-framework/versions/2027.R1.SP01/operator-specifications/math/fft_gradient_eval) |[`fields_container`](/docs/dpf/dpf-framework/versions/2027.R1.SP01/core-concepts/dpf-types) |


<a id="output_0"></a>
### coefficients (Pin 0)

- **Expected type(s):** [`fields_container`](/docs/dpf/dpf-framework/versions/2027.R1.SP01/core-concepts/dpf-types)




## Configurations

This operator supports [configuration options](/docs/dpf/dpf-framework/versions/2027.R1.SP01/core-concepts/operator-configurations) that modify its behavior.


### [mutex](/docs/dpf/dpf-framework/versions/2027.R1.SP01/core-concepts/operator-configurations)

- **Expected type(s):** [`bool`](/docs/dpf/dpf-framework/versions/2027.R1.SP01/core-concepts/dpf-types)
- **Default value:** false

If this option is set to true, the shared memory is prevented from being simultaneously accessed by multiple threads.



## Scripting

This operator can be accessed through scripting interfaces using these identifiers.

 **Category**: math

 **Plugin**: core

 **Scripting name**: fft_gradient_eval

 **Full name**: math.fft_gradient_eval

 **Internal name**: fft_eval_gr

 **License**: any_dpf_supported_increments

## Examples

These examples demonstrate how to use this operator in different programming environments.
Each example shows how to instantiate the operator, connect the required inputs, and retrieve the output.

<details>
<summary>C++</summary>

```cpp
#include "dpf_api.h"

ansys::dpf::Operator op("fft_eval_gr"); // operator instantiation
op.connect(0, my_fields_container);
op.connect(1, my_time_scoping);
op.connect(2, my_fs_ratio);
ansys::dpf::FieldsContainer my_coefficients = op.getOutput<ansys::dpf::FieldsContainer>(0);
```
</details>

<details>
<summary>CPython</summary>

```python
import ansys.dpf.core as dpf

op = dpf.operators.math.fft_gradient_eval() # operator instantiation
op.inputs.fields_container.connect(my_fields_container)
op.inputs.time_scoping.connect(my_time_scoping)
op.inputs.fs_ratio.connect(my_fs_ratio)
my_coefficients = op.outputs.coefficients()
```
</details>

<details>
<summary>IPython</summary>

```python
import mech_dpf
import Ans.DataProcessing as dpf

op = dpf.operators.math.fft_gradient_eval() # operator instantiation
op.inputs.fields_container.Connect(my_fields_container)
op.inputs.time_scoping.Connect(my_time_scoping)
op.inputs.fs_ratio.Connect(my_fs_ratio)
my_coefficients = op.outputs.coefficients.GetData()
```
</details>
<br />

## Changelog

- Version 0.0.0: Initial release.