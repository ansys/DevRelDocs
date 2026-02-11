---
category: math
plugin: core
license: None
---

# math:time integration

**Version: 0.0.0**

## Description

Integrates a field of time varying quantities over time

## Inputs

This table lists the input pins for this operator. Input pins define the data that the operator requires to perform its operation.
Some inputs are required, while others are optional and provide additional configuration.
Each parameter is detailed in the sections that follow the table.

| Pin number | Name | Status | Expected type(s) |
|------------|------|--------|------------------|
| <strong>0</strong> | [field](#input_0) |  <span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;" title="This pin is required">Required</span>|[`field`](../../core-concepts/dpf-types.md#field) |
| <strong>1</strong> | [resample_output](#input_1) |  |[`bool`](../../core-concepts/dpf-types.md#standard-types) |
| <strong>2</strong> | [absolute_error](#input_2) |  |[`double`](../../core-concepts/dpf-types.md#standard-types) |
| <strong>3</strong> | [minimum_step_size](#input_3) |  |[`double`](../../core-concepts/dpf-types.md#standard-types) |
| <strong>4</strong> | [integration_constant](#input_4) |  |[`double`](../../core-concepts/dpf-types.md#standard-types) |


<a id="input_0"></a>
### field (Pin 0)

- **Required:** Yes
- **Expected type(s):** [`field`](../../core-concepts/dpf-types.md#field)

field

<a id="input_1"></a>
### resample_output (Pin 1)

- **Required:** No
- **Expected type(s):** [`bool`](../../core-concepts/dpf-types.md#standard-types)

Resample the output

<a id="input_2"></a>
### absolute_error (Pin 2)

- **Required:** No
- **Expected type(s):** [`double`](../../core-concepts/dpf-types.md#standard-types)

Absolute error for the resampling

<a id="input_3"></a>
### minimum_step_size (Pin 3)

- **Required:** No
- **Expected type(s):** [`double`](../../core-concepts/dpf-types.md#standard-types)

Minimum time step size for the resamplig

<a id="input_4"></a>
### integration_constant (Pin 4)

- **Required:** No
- **Expected type(s):** [`double`](../../core-concepts/dpf-types.md#standard-types)

Constant to be added to the integrated field


## Outputs

This table lists the output pins for this operator.
Output pins provide the results of the operator's computation and can be connected to inputs of other operators or retrieved for further processing.
Each output is detailed in the sections that follow the table.

| Pin number |  Name | Expected type(s) |
|-------|------|------------------|
|  **0**| [field](#output_0) |[`field`](../../core-concepts/dpf-types.md#field) |


<a id="output_0"></a>
### field (Pin 0)

- **Expected type(s):** [`field`](../../core-concepts/dpf-types.md#field)




## Configurations

This operator supports [configuration options](../../core-concepts/operator-configurations.md) that modify its behavior.


### [mutex](../../core-concepts/operator-configurations.md#mutex)

- **Expected type(s):** [`bool`](../../core-concepts/dpf-types.md#standard-types)
- **Default value:** false

If this option is set to true, the shared memory is prevented from being simultaneously accessed by multiple threads.



## Scripting

This operator can be accessed through scripting interfaces using these identifiers.

 **Category**: math

 **Plugin**: core

 **Scripting name**: time_integration

 **Full name**: math.time_integration

 **Internal name**: TimeIntegration

 **License**: None

## Examples

These examples demonstrate how to use this operator in different programming environments.
Each example shows how to instantiate the operator, connect the required inputs, and retrieve the output.

<details>
<summary>C++</summary>

```cpp
#include "dpf_api.h"

ansys::dpf::Operator op("TimeIntegration"); // operator instantiation
op.connect(0, my_field);
op.connect(1, my_resample_output);
op.connect(2, my_absolute_error);
op.connect(3, my_minimum_step_size);
op.connect(4, my_integration_constant);
ansys::dpf::Field my_field = op.getOutput<ansys::dpf::Field>(0);
```
</details>

<details>
<summary>CPython</summary>

```python
import ansys.dpf.core as dpf

op = dpf.operators.math.time_integration() # operator instantiation
op.inputs.field.connect(my_field)
op.inputs.resample_output.connect(my_resample_output)
op.inputs.absolute_error.connect(my_absolute_error)
op.inputs.minimum_step_size.connect(my_minimum_step_size)
op.inputs.integration_constant.connect(my_integration_constant)
my_field = op.outputs.field()
```
</details>

<details>
<summary>IPython</summary>

```python
import mech_dpf
import Ans.DataProcessing as dpf

op = dpf.operators.math.time_integration() # operator instantiation
op.inputs.field.Connect(my_field)
op.inputs.resample_output.Connect(my_resample_output)
op.inputs.absolute_error.Connect(my_absolute_error)
op.inputs.minimum_step_size.Connect(my_minimum_step_size)
op.inputs.integration_constant.Connect(my_integration_constant)
my_field = op.outputs.field.GetData()
```
</details>
<br>

## Changelog

- Version 0.0.0: Initial release.