---
category: invariant
plugin: core
license: None
---

# invariant:principal invariants (field)

**Version: 0.0.0**

## Description

Computes the element-wise Eigen values of a tensor field.

## Inputs

This table lists the input pins for this operator. Input pins define the data that the operator requires to perform its operation.
Some inputs are required, while others are optional and provide additional configuration.
Each parameter is detailed in the sections that follow the table.

| Pin number | Name | Status | Expected type(s) |
|------------|------|--------|------------------|
| <strong>0</strong> | [field](/docs/dpf/dpf-framework/versions/2026.R1.SP00/operator-specifications/invariant/principal_invariants) |  <span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;" title="This pin is required">Required</span>|[`field`](/docs/dpf/dpf-framework/versions/2026.R1.SP00/core-concepts/dpf-types) |


<a id="input_0"></a>
### field (Pin 0)

- **Required:** Yes
- **Expected type(s):** [`field`](/docs/dpf/dpf-framework/versions/2026.R1.SP00/core-concepts/dpf-types)




## Outputs

This table lists the output pins for this operator.
Output pins provide the results of the operator's computation and can be connected to inputs of other operators or retrieved for further processing.
Each output is detailed in the sections that follow the table.

| Pin number |  Name | Expected type(s) |
|-------|------|------------------|
|  **0**| [field_eig_1](/docs/dpf/dpf-framework/versions/2026.R1.SP00/operator-specifications/invariant/principal_invariants) |[`field`](/docs/dpf/dpf-framework/versions/2026.R1.SP00/core-concepts/dpf-types) |
|  **1**| [field_eig_2](/docs/dpf/dpf-framework/versions/2026.R1.SP00/operator-specifications/invariant/principal_invariants) |[`field`](/docs/dpf/dpf-framework/versions/2026.R1.SP00/core-concepts/dpf-types) |
|  **2**| [field_eig_3](/docs/dpf/dpf-framework/versions/2026.R1.SP00/operator-specifications/invariant/principal_invariants) |[`field`](/docs/dpf/dpf-framework/versions/2026.R1.SP00/core-concepts/dpf-types) |


<a id="output_0"></a>
### field_eig_1 (Pin 0)

- **Expected type(s):** [`field`](/docs/dpf/dpf-framework/versions/2026.R1.SP00/core-concepts/dpf-types)

first eigen value field

<a id="output_1"></a>
### field_eig_2 (Pin 1)

- **Expected type(s):** [`field`](/docs/dpf/dpf-framework/versions/2026.R1.SP00/core-concepts/dpf-types)

second eigen value field

<a id="output_2"></a>
### field_eig_3 (Pin 2)

- **Expected type(s):** [`field`](/docs/dpf/dpf-framework/versions/2026.R1.SP00/core-concepts/dpf-types)

third eigen value field


## Configurations

This operator supports [configuration options](/docs/dpf/dpf-framework/versions/2026.R1.SP00/core-concepts/operator-configurations) that modify its behavior.


### [mutex](/docs/dpf/dpf-framework/versions/2026.R1.SP00/core-concepts/operator-configurations)

- **Expected type(s):** [`bool`](/docs/dpf/dpf-framework/versions/2026.R1.SP00/core-concepts/dpf-types)
- **Default value:** false

If this option is set to true, the shared memory is prevented from being simultaneously accessed by multiple threads.

### [num_threads](/docs/dpf/dpf-framework/versions/2026.R1.SP00/core-concepts/operator-configurations)

- **Expected type(s):** [`int32`](/docs/dpf/dpf-framework/versions/2026.R1.SP00/core-concepts/dpf-types)
- **Default value:** 0

Number of threads to use to run in parallel

### [run_in_parallel](/docs/dpf/dpf-framework/versions/2026.R1.SP00/core-concepts/operator-configurations)

- **Expected type(s):** [`bool`](/docs/dpf/dpf-framework/versions/2026.R1.SP00/core-concepts/dpf-types)
- **Default value:** true

Loops are allowed to run in parallel if the value of this config is set to true.



## Scripting

This operator can be accessed through scripting interfaces using these identifiers.

 **Category**: invariant

 **Plugin**: core

 **Scripting name**: principal_invariants

 **Full name**: invariant.principal_invariants

 **Internal name**: invariants

 **License**: None

## Examples

These examples demonstrate how to use this operator in different programming environments.
Each example shows how to instantiate the operator, connect the required inputs, and retrieve the output.

<details>
<summary>C++</summary>

```cpp
#include "dpf_api.h"

ansys::dpf::Operator op("invariants"); // operator instantiation
op.connect(0, my_field);
ansys::dpf::Field my_field_eig_1 = op.getOutput<ansys::dpf::Field>(0);
ansys::dpf::Field my_field_eig_2 = op.getOutput<ansys::dpf::Field>(1);
ansys::dpf::Field my_field_eig_3 = op.getOutput<ansys::dpf::Field>(2);
```
</details>

<details>
<summary>CPython</summary>

```python
import ansys.dpf.core as dpf

op = dpf.operators.invariant.principal_invariants() # operator instantiation
op.inputs.field.connect(my_field)
my_field_eig_1 = op.outputs.field_eig_1()
my_field_eig_2 = op.outputs.field_eig_2()
my_field_eig_3 = op.outputs.field_eig_3()
```
</details>

<details>
<summary>IPython</summary>

```python
import mech_dpf
import Ans.DataProcessing as dpf

op = dpf.operators.invariant.principal_invariants() # operator instantiation
op.inputs.field.Connect(my_field)
my_field_eig_1 = op.outputs.field_eig_1.GetData()
my_field_eig_2 = op.outputs.field_eig_2.GetData()
my_field_eig_3 = op.outputs.field_eig_3.GetData()
```
</details>
<br />

## Changelog

- Version 0.0.0: Initial release.