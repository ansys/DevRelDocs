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

| Input | Name | Expected type(s) | Description |
|-------|-------|------------------|-------------|
| <strong>Pin 0</strong> <br><span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  fields_container |[`fields_container`](../../core-concepts/dpf-types.md#fields-container) |  |

## Outputs

| Output |  Name | Expected type(s) | Description |
|-------|------|------------------|-------------|
|  **Pin 0**| fields_int |[`fields_container`](../../core-concepts/dpf-types.md#fields-container) | stress intensity field |
|  **Pin 1**| fields_eqv |[`fields_container`](../../core-concepts/dpf-types.md#fields-container) | stress equivalent intensity |
|  **Pin 2**| fields_max_shear |[`fields_container`](../../core-concepts/dpf-types.md#fields-container) | max shear stress field |

## Configurations

| Name| Expected type(s) | Default value | Description |
|-----|------|----------|-------------|
| **mutex** |[`bool`](../../core-concepts/dpf-types.md#standard-types) | false | If this option is set to true, the shared memory is prevented from being simultaneously accessed by multiple threads. |
| **num_threads** |[`int32`](../../core-concepts/dpf-types.md#standard-types) | 0 | Number of threads to use to run in parallel |
| **run_in_parallel** |[`bool`](../../core-concepts/dpf-types.md#standard-types) | true | Loops are allowed to run in parallel if the value of this config is set to true. |

## Scripting

 **Category**: invariant

 **Plugin**: core

 **Scripting name**: invariants_fc

 **Full name**: invariant.invariants_fc

 **Internal name**: invariants_deriv_fc

 **License**: None

## Examples

<details>
<summary>C++</summary>

```cpp
#include "dpf_api.h"

ansys::dpf::Operator op("invariants_deriv_fc"); // operator instantiation
op.connect(0, my_fields_container);
ansys::dpf::FieldsContainer my_fields_int = op.getOutput<ansys::dpf::FieldsContainer>(0);
ansys::dpf::FieldsContainer my_fields_eqv = op.getOutput<ansys::dpf::FieldsContainer>(1);
ansys::dpf::FieldsContainer my_fields_max_shear = op.getOutput<ansys::dpf::FieldsContainer>(2);
```
</details>

<details>
<summary>CPython</summary>

```python
import ansys.dpf.core as dpf

op = dpf.operators.invariant.invariants_fc() # operator instantiation
op.inputs.fields_container.connect(my_fields_container)
my_fields_int = op.outputs.fields_int()
my_fields_eqv = op.outputs.fields_eqv()
my_fields_max_shear = op.outputs.fields_max_shear()
```
</details>

<details>
<summary>IPython</summary>

```python
import mech_dpf
import Ans.DataProcessing as dpf

op = dpf.operators.invariant.invariants_fc() # operator instantiation
op.inputs.fields_container.Connect(my_fields_container)
my_fields_int = op.outputs.fields_int.GetData()
my_fields_eqv = op.outputs.fields_eqv.GetData()
my_fields_max_shear = op.outputs.fields_max_shear.GetData()
```
</details>
<br>

## Changelog

- Version 0.0.0: Initial release.