---
category: invariant
plugin: core
license: None
---

# invariant:principal invariants (fields container)

**Version: 0.0.0**

## Description

Computes the element-wise Eigen values of all the tensor fields of a fields container.

## Inputs

| Input | Name | Expected type(s) | Description |
|-------|-------|------------------|-------------|
| <strong>Pin 0</strong> <br><span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  fields_container |[`fields_container`](../../core-concepts/dpf-types.md#fields-container) |  |

## Outputs

| Output |  Name | Expected type(s) | Description |
|-------|------|------------------|-------------|
|  **Pin 0**| fields_eig_1 |[`fields_container`](../../core-concepts/dpf-types.md#fields-container) | first eigen value fields |
|  **Pin 1**| fields_eig_2 |[`fields_container`](../../core-concepts/dpf-types.md#fields-container) | second eigen value fields |
|  **Pin 2**| fields_eig_3 |[`fields_container`](../../core-concepts/dpf-types.md#fields-container) | third eigen value fields |

## Configurations

| Name| Expected type(s) | Default value | Description |
|-----|------|----------|-------------|
| **mutex** |[`bool`](../../core-concepts/dpf-types.md#standard-types) | false | If this option is set to true, the shared memory is prevented from being simultaneously accessed by multiple threads. |
| **num_threads** |[`int32`](../../core-concepts/dpf-types.md#standard-types) | 0 | Number of threads to use to run in parallel |
| **run_in_parallel** |[`bool`](../../core-concepts/dpf-types.md#standard-types) | true | Loops are allowed to run in parallel if the value of this config is set to true. |

## Scripting

 **Category**: invariant

 **Plugin**: core

 **Scripting name**: principal_invariants_fc

 **Full name**: invariant.principal_invariants_fc

 **Internal name**: invariants_fc

 **License**: None

## Examples

<details>
<summary>C++</summary>

```cpp
#include "dpf_api.h"

ansys::dpf::Operator op("invariants_fc"); // operator instantiation
op.connect(0, my_fields_container);
ansys::dpf::FieldsContainer my_fields_eig_1 = op.getOutput<ansys::dpf::FieldsContainer>(0);
ansys::dpf::FieldsContainer my_fields_eig_2 = op.getOutput<ansys::dpf::FieldsContainer>(1);
ansys::dpf::FieldsContainer my_fields_eig_3 = op.getOutput<ansys::dpf::FieldsContainer>(2);
```
</details>

<details>
<summary>CPython</summary>

```python
import ansys.dpf.core as dpf

op = dpf.operators.invariant.principal_invariants_fc() # operator instantiation
op.inputs.fields_container.connect(my_fields_container)
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

op = dpf.operators.invariant.principal_invariants_fc() # operator instantiation
op.inputs.fields_container.Connect(my_fields_container)
my_fields_eig_1 = op.outputs.fields_eig_1.GetData()
my_fields_eig_2 = op.outputs.fields_eig_2.GetData()
my_fields_eig_3 = op.outputs.fields_eig_3.GetData()
```
</details>
<br>

## Changelog

- Version 0.0.0: Initial release.