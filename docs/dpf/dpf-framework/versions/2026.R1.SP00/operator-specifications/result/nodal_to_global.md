---
category: result
plugin: core
license: None
---

# result:nodal_to_global

**Version: 0.0.0**

## Description

Rotates nodal elemental results to global coordinate system

## Inputs

This table lists the input pins for this operator. Input pins define the data that the operator requires to perform its operation.
Some inputs are required, while others are optional and provide additional configuration.
Each parameter is detailed in the sections that follow the table.

| Pin number | Name | Status | Expected type(s) |
|------------|------|--------|------------------|
| <strong>0</strong> | [fieldA](/docs/dpf/dpf-framework/versions/2026.R1.SP00/operator-specifications/result/nodal_to_global) |  <span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;" title="This pin is required">Required</span>|[`field`](/docs/dpf/dpf-framework/versions/2026.R1.SP00/core-concepts/dpf-types) |
| <strong>1</strong> | [fieldB](/docs/dpf/dpf-framework/versions/2026.R1.SP00/operator-specifications/result/nodal_to_global) |  <span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;" title="This pin is required">Required</span>|[`field`](/docs/dpf/dpf-framework/versions/2026.R1.SP00/core-concepts/dpf-types) |
| <strong>200</strong> | [inverse_rotation](/docs/dpf/dpf-framework/versions/2026.R1.SP00/operator-specifications/result/nodal_to_global) |  |[`bool`](/docs/dpf/dpf-framework/versions/2026.R1.SP00/core-concepts/dpf-types) |


<a id="input_0"></a>
### fieldA (Pin 0)

- **Required:** Yes
- **Expected type(s):** [`field`](/docs/dpf/dpf-framework/versions/2026.R1.SP00/core-concepts/dpf-types)

Vector or tensor field that must be rotated, expressed in nodal coordinate system.

<a id="input_1"></a>
### fieldB (Pin 1)

- **Required:** Yes
- **Expected type(s):** [`field`](/docs/dpf/dpf-framework/versions/2026.R1.SP00/core-concepts/dpf-types)

Nodal euler angles defined from a result file. Those must be the rotations from Nodal to Global.

<a id="input_200"></a>
### inverse_rotation (Pin 200)

- **Required:** No
- **Expected type(s):** [`bool`](/docs/dpf/dpf-framework/versions/2026.R1.SP00/core-concepts/dpf-types)

If true, we apply the inverse rotation (default is false).


## Outputs

This table lists the output pins for this operator.
Output pins provide the results of the operator's computation and can be connected to inputs of other operators or retrieved for further processing.
Each output is detailed in the sections that follow the table.

| Pin number |  Name | Expected type(s) |
|-------|------|------------------|
|  **0**| [field](/docs/dpf/dpf-framework/versions/2026.R1.SP00/operator-specifications/result/nodal_to_global) |[`field`](/docs/dpf/dpf-framework/versions/2026.R1.SP00/core-concepts/dpf-types) |


<a id="output_0"></a>
### field (Pin 0)

- **Expected type(s):** [`field`](/docs/dpf/dpf-framework/versions/2026.R1.SP00/core-concepts/dpf-types)

Rotated field


## Configurations

This operator supports [configuration options](/docs/dpf/dpf-framework/versions/2026.R1.SP00/core-concepts/operator-configurations) that modify its behavior.


### [mutex](/docs/dpf/dpf-framework/versions/2026.R1.SP00/core-concepts/operator-configurations)

- **Expected type(s):** [`bool`](/docs/dpf/dpf-framework/versions/2026.R1.SP00/core-concepts/dpf-types)
- **Default value:** false

If this option is set to true, the shared memory is prevented from being simultaneously accessed by multiple threads.



## Scripting

This operator can be accessed through scripting interfaces using these identifiers.

 **Category**: result

 **Plugin**: core

 **Scripting name**: nodal_to_global

 **Full name**: result.nodal_to_global

 **Internal name**: NodalElementalResultsRotation

 **License**: None

## Examples

These examples demonstrate how to use this operator in different programming environments.
Each example shows how to instantiate the operator, connect the required inputs, and retrieve the output.

<details>
<summary>C++</summary>

```cpp
#include "dpf_api.h"

ansys::dpf::Operator op("NodalElementalResultsRotation"); // operator instantiation
op.connect(0, my_fieldA);
op.connect(1, my_fieldB);
op.connect(200, my_inverse_rotation);
ansys::dpf::Field my_field = op.getOutput<ansys::dpf::Field>(0);
```
</details>

<details>
<summary>CPython</summary>

```python
import ansys.dpf.core as dpf

op = dpf.operators.result.nodal_to_global() # operator instantiation
op.inputs.fieldA.connect(my_fieldA)
op.inputs.fieldB.connect(my_fieldB)
op.inputs.inverse_rotation.connect(my_inverse_rotation)
my_field = op.outputs.field()
```
</details>

<details>
<summary>IPython</summary>

```python
import mech_dpf
import Ans.DataProcessing as dpf

op = dpf.operators.result.nodal_to_global() # operator instantiation
op.inputs.fieldA.Connect(my_fieldA)
op.inputs.fieldB.Connect(my_fieldB)
op.inputs.inverse_rotation.Connect(my_inverse_rotation)
my_field = op.outputs.field.GetData()
```
</details>
<br />

## Changelog

- Version 0.0.0: Initial release.