---
category: math
plugin: core
license: None
---

# math:scale (field)

**Version: 0.0.0**

## Description

Scales a field by a constant factor. This factor can be a scalar or a vector, where each value of the vector represents a scaler per component. Number of the components are corresponding to the input field dimensionality

## Inputs

This table lists the input pins for this operator. Input pins define the data that the operator requires to perform its operation.
Some inputs are required, while others are optional and provide additional configuration.
Each parameter is detailed in the sections that follow the table.

| Pin number | Name | Status | Expected type(s) |
|------------|------|--------|------------------|
| <strong>0</strong> | [field](/docs/dpf/dpf-framework/operator-specifications/math/scale) |  <span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;" title="This pin is required">Required</span>|[`field`](/docs/dpf/dpf-framework/core-concepts/dpf-types), [`fields_container`](/docs/dpf/dpf-framework/core-concepts/dpf-types) |
| <strong>1</strong> | [weights](/docs/dpf/dpf-framework/operator-specifications/math/scale) |  <span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;" title="This pin is required">Required</span>|[`double`](/docs/dpf/dpf-framework/core-concepts/dpf-types), [`field`](/docs/dpf/dpf-framework/core-concepts/dpf-types), [`vector&lt;double&gt;`](/docs/dpf/dpf-framework/core-concepts/dpf-types) |
| <strong>2</strong> | [boolean](/docs/dpf/dpf-framework/operator-specifications/math/scale) |  |[`bool`](/docs/dpf/dpf-framework/core-concepts/dpf-types) |
| <strong>3</strong> | [algorithm](/docs/dpf/dpf-framework/operator-specifications/math/scale) |  |[`int32`](/docs/dpf/dpf-framework/core-concepts/dpf-types) |


<a id="input_0"></a>
### field (Pin 0)

- **Required:** Yes
- **Expected type(s):** [`field`](/docs/dpf/dpf-framework/core-concepts/dpf-types), [`fields_container`](/docs/dpf/dpf-framework/core-concepts/dpf-types)

field or fields container with only one field is expected

<a id="input_1"></a>
### weights (Pin 1)

- **Required:** Yes
- **Expected type(s):** [`double`](/docs/dpf/dpf-framework/core-concepts/dpf-types), [`field`](/docs/dpf/dpf-framework/core-concepts/dpf-types), [`vector&lt;double&gt;`](/docs/dpf/dpf-framework/core-concepts/dpf-types)

Double/Field/Vector of doubles. When scoped on overall, same value(s) applied on all the data, when scoped elsewhere, corresponding values will be multiplied due to the scoping

<a id="input_2"></a>
### boolean (Pin 2)

- **Required:** No
- **Expected type(s):** [`bool`](/docs/dpf/dpf-framework/core-concepts/dpf-types)

Default is false. If set to true, output of scale is made dimensionless

<a id="input_3"></a>
### algorithm (Pin 3)

- **Required:** No
- **Expected type(s):** [`int32`](/docs/dpf/dpf-framework/core-concepts/dpf-types)

Algorithm selection: 0 (default) uses MKL for optimization, 1 uses standard loops


## Outputs

This table lists the output pins for this operator.
Output pins provide the results of the operator's computation and can be connected to inputs of other operators or retrieved for further processing.
Each output is detailed in the sections that follow the table.

| Pin number |  Name | Expected type(s) |
|-------|------|------------------|
|  **0**| [field](/docs/dpf/dpf-framework/operator-specifications/math/scale) |[`field`](/docs/dpf/dpf-framework/core-concepts/dpf-types) |


<a id="output_0"></a>
### field (Pin 0)

- **Expected type(s):** [`field`](/docs/dpf/dpf-framework/core-concepts/dpf-types)

Field with scaled values (input_field * scale_factor)


## Configurations

This operator supports [configuration options](/docs/dpf/dpf-framework/core-concepts/operator-configurations) that modify its behavior.


### [mutex](/docs/dpf/dpf-framework/core-concepts/operator-configurations)

- **Expected type(s):** [`bool`](/docs/dpf/dpf-framework/core-concepts/dpf-types)
- **Default value:** false

If this option is set to true, the shared memory is prevented from being simultaneously accessed by multiple threads.

### [permissive](/docs/dpf/dpf-framework/core-concepts/operator-configurations)

- **Expected type(s):** [`bool`](/docs/dpf/dpf-framework/core-concepts/dpf-types)
- **Default value:** false

If this option is set to true, warning checks (like unit or data sizes) won't be done.



## Scripting

This operator can be accessed through scripting interfaces using these identifiers.

 **Category**: math

 **Plugin**: core

 **Scripting name**: None

 **Full name**: None

 **Internal name**: scale

 **License**: None

## Examples

These examples demonstrate how to use this operator in different programming environments.
Each example shows how to instantiate the operator, connect the required inputs, and retrieve the output.

<details>
<summary>C++</summary>

```cpp
#include "dpf_api.h"

ansys::dpf::Operator op("scale"); // operator instantiation
op.connect(0, my_field);
op.connect(1, my_weights);
op.connect(2, my_boolean);
op.connect(3, my_algorithm);
ansys::dpf::Field my_field = op.getOutput<ansys::dpf::Field>(0);
```
</details>

<details>
<summary>CPython</summary>

```python
import ansys.dpf.core as dpf

op = dpf.operators.math.None() # operator instantiation
op.inputs.field.connect(my_field)
op.inputs.weights.connect(my_weights)
op.inputs.boolean.connect(my_boolean)
op.inputs.algorithm.connect(my_algorithm)
my_field = op.outputs.field()
```
</details>

<details>
<summary>IPython</summary>

```python
import mech_dpf
import Ans.DataProcessing as dpf

op = dpf.operators.math.None() # operator instantiation
op.inputs.field.Connect(my_field)
op.inputs.weights.Connect(my_weights)
op.inputs.boolean.Connect(my_boolean)
op.inputs.algorithm.Connect(my_algorithm)
my_field = op.outputs.field.GetData()
```
</details>
<br />

## Changelog

- Version 0.0.0: Initial release.