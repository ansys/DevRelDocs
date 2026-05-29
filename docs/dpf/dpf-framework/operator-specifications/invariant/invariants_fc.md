---
category: invariant
plugin: core
license: None
---

# invariant:scalar invariants (fields container)

**Version: 0.0.0**

## Description

Computes the element-wise invariants of all the tensor fields of a fields container.

## Inputs

This table lists the input pins for this operator. Input pins define the data that the operator requires to perform its operation.
Some inputs are required, while others are optional and provide additional configuration.
Each parameter is detailed in the sections that follow the table.

| Pin number | Name | Status | Expected type(s) |
|------------|------|--------|------------------|
| <strong>-1</strong> | [generate_principal_stress](/docs/dpf/dpf-framework/operator-specifications/invariant/invariants_fc) |  |[`bool`](/docs/dpf/dpf-framework/core-concepts/dpf-types) |
| <strong>0</strong> | [fields_container](/docs/dpf/dpf-framework/operator-specifications/invariant/invariants_fc) |  <span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;" title="This pin is required">Required</span>|[`fields_container`](/docs/dpf/dpf-framework/core-concepts/dpf-types) |


<a id="input_-1"></a>
### generate_principal_stress (Pin -1)

- **Required:** No
- **Expected type(s):** [`bool`](/docs/dpf/dpf-framework/core-concepts/dpf-types)

if true, generate principal stress in output pin 3/4/5 (default is false)

<a id="input_0"></a>
### fields_container (Pin 0)

- **Required:** Yes
- **Expected type(s):** [`fields_container`](/docs/dpf/dpf-framework/core-concepts/dpf-types)




## Outputs

This table lists the output pins for this operator.
Output pins provide the results of the operator's computation and can be connected to inputs of other operators or retrieved for further processing.
Each output is detailed in the sections that follow the table.

| Pin number |  Name | Expected type(s) |
|-------|------|------------------|
|  **0**| [fields_int](/docs/dpf/dpf-framework/operator-specifications/invariant/invariants_fc) |[`fields_container`](/docs/dpf/dpf-framework/core-concepts/dpf-types) |
|  **1**| [fields_eqv](/docs/dpf/dpf-framework/operator-specifications/invariant/invariants_fc) |[`fields_container`](/docs/dpf/dpf-framework/core-concepts/dpf-types) |
|  **2**| [fields_max_shear](/docs/dpf/dpf-framework/operator-specifications/invariant/invariants_fc) |[`fields_container`](/docs/dpf/dpf-framework/core-concepts/dpf-types) |
|  **3**| [fields_eig_1](/docs/dpf/dpf-framework/operator-specifications/invariant/invariants_fc) |[`fields_container`](/docs/dpf/dpf-framework/core-concepts/dpf-types) |
|  **4**| [fields_eig_2](/docs/dpf/dpf-framework/operator-specifications/invariant/invariants_fc) |[`fields_container`](/docs/dpf/dpf-framework/core-concepts/dpf-types) |
|  **5**| [fields_eig_3](/docs/dpf/dpf-framework/operator-specifications/invariant/invariants_fc) |[`fields_container`](/docs/dpf/dpf-framework/core-concepts/dpf-types) |


<a id="output_0"></a>
### fields_int (Pin 0)

- **Expected type(s):** [`fields_container`](/docs/dpf/dpf-framework/core-concepts/dpf-types)

stress intensity field

<a id="output_1"></a>
### fields_eqv (Pin 1)

- **Expected type(s):** [`fields_container`](/docs/dpf/dpf-framework/core-concepts/dpf-types)

stress equivalent intensity

<a id="output_2"></a>
### fields_max_shear (Pin 2)

- **Expected type(s):** [`fields_container`](/docs/dpf/dpf-framework/core-concepts/dpf-types)

max shear stress field

<a id="output_3"></a>
### fields_eig_1 (Pin 3)

- **Expected type(s):** [`fields_container`](/docs/dpf/dpf-framework/core-concepts/dpf-types)

first eigen value field

<a id="output_4"></a>
### fields_eig_2 (Pin 4)

- **Expected type(s):** [`fields_container`](/docs/dpf/dpf-framework/core-concepts/dpf-types)

second eigen value field

<a id="output_5"></a>
### fields_eig_3 (Pin 5)

- **Expected type(s):** [`fields_container`](/docs/dpf/dpf-framework/core-concepts/dpf-types)

third eigen value field


## Configurations

This operator supports [configuration options](/docs/dpf/dpf-framework/core-concepts/operator-configurations) that modify its behavior.


### [mutex](/docs/dpf/dpf-framework/core-concepts/operator-configurations)

- **Expected type(s):** [`bool`](/docs/dpf/dpf-framework/core-concepts/dpf-types)
- **Default value:** false

If this option is set to true, the shared memory is prevented from being simultaneously accessed by multiple threads.

### [num_threads](/docs/dpf/dpf-framework/core-concepts/operator-configurations)

- **Expected type(s):** [`int32`](/docs/dpf/dpf-framework/core-concepts/dpf-types)
- **Default value:** 0

Number of threads to use to run in parallel

### [run_in_parallel](/docs/dpf/dpf-framework/core-concepts/operator-configurations)

- **Expected type(s):** [`bool`](/docs/dpf/dpf-framework/core-concepts/dpf-types)
- **Default value:** true

Loops are allowed to run in parallel if the value of this config is set to true.



## Scripting

This operator can be accessed through scripting interfaces using these identifiers.

 **Category**: invariant

 **Plugin**: core

 **Scripting name**: invariants_fc

 **Full name**: invariant.invariants_fc

 **Internal name**: invariants_deriv_fc

 **License**: None

## Examples

These examples demonstrate how to use this operator in different programming environments.
Each example shows how to instantiate the operator, connect the required inputs, and retrieve the output.

<details>
<summary>C++</summary>

```cpp
#include "dpf_api.h"

ansys::dpf::Operator op("invariants_deriv_fc"); // operator instantiation
op.connect(-1, my_generate_principal_stress);
op.connect(0, my_fields_container);
ansys::dpf::FieldsContainer my_fields_int = op.getOutput<ansys::dpf::FieldsContainer>(0);
ansys::dpf::FieldsContainer my_fields_eqv = op.getOutput<ansys::dpf::FieldsContainer>(1);
ansys::dpf::FieldsContainer my_fields_max_shear = op.getOutput<ansys::dpf::FieldsContainer>(2);
ansys::dpf::FieldsContainer my_fields_eig_1 = op.getOutput<ansys::dpf::FieldsContainer>(3);
ansys::dpf::FieldsContainer my_fields_eig_2 = op.getOutput<ansys::dpf::FieldsContainer>(4);
ansys::dpf::FieldsContainer my_fields_eig_3 = op.getOutput<ansys::dpf::FieldsContainer>(5);
```
</details>

<details>
<summary>CPython</summary>

```python
import ansys.dpf.core as dpf

op = dpf.operators.invariant.invariants_fc() # operator instantiation
op.inputs.generate_principal_stress.connect(my_generate_principal_stress)
op.inputs.fields_container.connect(my_fields_container)
my_fields_int = op.outputs.fields_int()
my_fields_eqv = op.outputs.fields_eqv()
my_fields_max_shear = op.outputs.fields_max_shear()
my_fields_eig_1 = op.outputs.fields_eig_1()
my_fields_eig_2 = op.outputs.fields_eig_2()
my_fields_eig_3 = op.outputs.fields_eig_3()
```
</details>

<details>
<summary>IPython</summary>

```python
import mech_dpf
import Ans.DataProcessing as dpf

op = dpf.operators.invariant.invariants_fc() # operator instantiation
op.inputs.generate_principal_stress.Connect(my_generate_principal_stress)
op.inputs.fields_container.Connect(my_fields_container)
my_fields_int = op.outputs.fields_int.GetData()
my_fields_eqv = op.outputs.fields_eqv.GetData()
my_fields_max_shear = op.outputs.fields_max_shear.GetData()
my_fields_eig_1 = op.outputs.fields_eig_1.GetData()
my_fields_eig_2 = op.outputs.fields_eig_2.GetData()
my_fields_eig_3 = op.outputs.fields_eig_3.GetData()
```
</details>
<br />

## Changelog

- Version 0.0.0: Initial release.