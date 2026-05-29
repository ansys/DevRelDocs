---
category: utility
plugin: core
license: None
---

# utility:assemble scalars to vector fc

**Version: 0.0.0**

## Description

Takes three scalar fields container and assembles them as a 3D vector fields container.

## Inputs

This table lists the input pins for this operator. Input pins define the data that the operator requires to perform its operation.
Some inputs are required, while others are optional and provide additional configuration.
Each parameter is detailed in the sections that follow the table.

| Pin number | Name | Status | Expected type(s) |
|------------|------|--------|------------------|
| <strong>0</strong> | [x](/docs/dpf/dpf-framework/operator-specifications/utility/assemble_scalars_to_vectors_fc) |  |[`fields_container`](/docs/dpf/dpf-framework/core-concepts/dpf-types) |
| <strong>1</strong> | [y](/docs/dpf/dpf-framework/operator-specifications/utility/assemble_scalars_to_vectors_fc) |  |[`fields_container`](/docs/dpf/dpf-framework/core-concepts/dpf-types) |
| <strong>2</strong> | [z](/docs/dpf/dpf-framework/operator-specifications/utility/assemble_scalars_to_vectors_fc) |  |[`fields_container`](/docs/dpf/dpf-framework/core-concepts/dpf-types) |


<a id="input_0"></a>
### x (Pin 0)

- **Required:** No
- **Expected type(s):** [`fields_container`](/docs/dpf/dpf-framework/core-concepts/dpf-types)



<a id="input_1"></a>
### y (Pin 1)

- **Required:** No
- **Expected type(s):** [`fields_container`](/docs/dpf/dpf-framework/core-concepts/dpf-types)



<a id="input_2"></a>
### z (Pin 2)

- **Required:** No
- **Expected type(s):** [`fields_container`](/docs/dpf/dpf-framework/core-concepts/dpf-types)




## Outputs

This table lists the output pins for this operator.
Output pins provide the results of the operator's computation and can be connected to inputs of other operators or retrieved for further processing.
Each output is detailed in the sections that follow the table.

| Pin number |  Name | Expected type(s) |
|-------|------|------------------|
|  **0**| [fields_container](/docs/dpf/dpf-framework/operator-specifications/utility/assemble_scalars_to_vectors_fc) |[`fields_container`](/docs/dpf/dpf-framework/core-concepts/dpf-types) |


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

 **Category**: utility

 **Plugin**: core

 **Scripting name**: None

 **Full name**: None

 **Internal name**: assemble_scalars_to_vectors_fc

 **License**: None

## Examples

These examples demonstrate how to use this operator in different programming environments.
Each example shows how to instantiate the operator, connect the required inputs, and retrieve the output.

<details>
<summary>C++</summary>

```cpp
#include "dpf_api.h"

ansys::dpf::Operator op("assemble_scalars_to_vectors_fc"); // operator instantiation
op.connect(0, my_x);
op.connect(1, my_y);
op.connect(2, my_z);
ansys::dpf::FieldsContainer my_fields_container = op.getOutput<ansys::dpf::FieldsContainer>(0);
```
</details>

<details>
<summary>CPython</summary>

```python
import ansys.dpf.core as dpf

op = dpf.operators.utility.None() # operator instantiation
op.inputs.x.connect(my_x)
op.inputs.y.connect(my_y)
op.inputs.z.connect(my_z)
my_fields_container = op.outputs.fields_container()
```
</details>

<details>
<summary>IPython</summary>

```python
import mech_dpf
import Ans.DataProcessing as dpf

op = dpf.operators.utility.None() # operator instantiation
op.inputs.x.Connect(my_x)
op.inputs.y.Connect(my_y)
op.inputs.z.Connect(my_z)
my_fields_container = op.outputs.fields_container.GetData()
```
</details>
<br />

## Changelog

- Version 0.0.0: Initial release.