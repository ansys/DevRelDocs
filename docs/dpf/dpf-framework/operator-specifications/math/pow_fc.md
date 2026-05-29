---
category: math
plugin: core
license: None
---

# math:^ (fields container)

**Version: 0.0.0**

## Description

Computes element-wise field[i]^p.

## Inputs

This table lists the input pins for this operator. Input pins define the data that the operator requires to perform its operation.
Some inputs are required, while others are optional and provide additional configuration.
Each parameter is detailed in the sections that follow the table.

| Pin number | Name | Status | Expected type(s) |
|------------|------|--------|------------------|
| <strong>0</strong> | [fields_container](/docs/dpf/dpf-framework/operator-specifications/math/pow_fc) |  <span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;" title="This pin is required">Required</span>|[`fields_container`](/docs/dpf/dpf-framework/core-concepts/dpf-types) |
| <strong>1</strong> | [factor](/docs/dpf/dpf-framework/operator-specifications/math/pow_fc) |  <span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;" title="This pin is required">Required</span>|[`double`](/docs/dpf/dpf-framework/core-concepts/dpf-types) |
| <strong>2</strong> | [division_by_zero_value](/docs/dpf/dpf-framework/operator-specifications/math/pow_fc) |  |[`double`](/docs/dpf/dpf-framework/core-concepts/dpf-types) |


<a id="input_0"></a>
### fields_container (Pin 0)

- **Required:** Yes
- **Expected type(s):** [`fields_container`](/docs/dpf/dpf-framework/core-concepts/dpf-types)

Field for which to compute power operation

<a id="input_1"></a>
### factor (Pin 1)

- **Required:** Yes
- **Expected type(s):** [`double`](/docs/dpf/dpf-framework/core-concepts/dpf-types)

Power exponent value

<a id="input_2"></a>
### division_by_zero_value (Pin 2)

- **Required:** No
- **Expected type(s):** [`double`](/docs/dpf/dpf-framework/core-concepts/dpf-types)

If this pin is used, the result of the division by zero for negative exponents is set to this value.
Default = inf


## Outputs

This table lists the output pins for this operator.
Output pins provide the results of the operator's computation and can be connected to inputs of other operators or retrieved for further processing.
Each output is detailed in the sections that follow the table.

| Pin number |  Name | Expected type(s) |
|-------|------|------------------|
|  **0**| [fields_container](/docs/dpf/dpf-framework/operator-specifications/math/pow_fc) |[`fields_container`](/docs/dpf/dpf-framework/core-concepts/dpf-types) |


<a id="output_0"></a>
### fields_container (Pin 0)

- **Expected type(s):** [`fields_container`](/docs/dpf/dpf-framework/core-concepts/dpf-types)




## Configurations

This operator supports [configuration options](/docs/dpf/dpf-framework/core-concepts/operator-configurations) that modify its behavior.


### [mutex](/docs/dpf/dpf-framework/core-concepts/operator-configurations)

- **Expected type(s):** [`bool`](/docs/dpf/dpf-framework/core-concepts/dpf-types)
- **Default value:** false

If this option is set to true, the shared memory is prevented from being simultaneously accessed by multiple threads.



## Scripting

This operator can be accessed through scripting interfaces using these identifiers.

 **Category**: math

 **Plugin**: core

 **Scripting name**: pow_fc

 **Full name**: math.pow_fc

 **Internal name**: Pow_fc

 **License**: None

## Examples

These examples demonstrate how to use this operator in different programming environments.
Each example shows how to instantiate the operator, connect the required inputs, and retrieve the output.

<details>
<summary>C++</summary>

```cpp
#include "dpf_api.h"

ansys::dpf::Operator op("Pow_fc"); // operator instantiation
op.connect(0, my_fields_container);
op.connect(1, my_factor);
op.connect(2, my_division_by_zero_value);
ansys::dpf::FieldsContainer my_fields_container = op.getOutput<ansys::dpf::FieldsContainer>(0);
```
</details>

<details>
<summary>CPython</summary>

```python
import ansys.dpf.core as dpf

op = dpf.operators.math.pow_fc() # operator instantiation
op.inputs.fields_container.connect(my_fields_container)
op.inputs.factor.connect(my_factor)
op.inputs.division_by_zero_value.connect(my_division_by_zero_value)
my_fields_container = op.outputs.fields_container()
```
</details>

<details>
<summary>IPython</summary>

```python
import mech_dpf
import Ans.DataProcessing as dpf

op = dpf.operators.math.pow_fc() # operator instantiation
op.inputs.fields_container.Connect(my_fields_container)
op.inputs.factor.Connect(my_factor)
op.inputs.division_by_zero_value.Connect(my_division_by_zero_value)
my_fields_container = op.outputs.fields_container.GetData()
```
</details>
<br />

## Changelog

- Version 0.0.0: Initial release.