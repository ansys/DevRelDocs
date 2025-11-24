---
category: invariant
plugin: core
license: None
---

# invariant:scalar invariants (field)

**Version: 0.0.0**

## Description

Computes the element-wise invariants of a tensor field.

## Inputs

| Input | Name | Expected type(s) | Description |
|-------|-------|------------------|-------------|
| <strong>Pin 0</strong> <br><span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  field |[`field`](../../core-concepts/dpf-types.md#field) |  |

## Outputs

| Output |  Name | Expected type(s) | Description |
|-------|------|------------------|-------------|
|  **Pin 0**| field_int |[`field`](../../core-concepts/dpf-types.md#field) | stress intensity field |
|  **Pin 1**| field_eqv |[`field`](../../core-concepts/dpf-types.md#field) | stress equivalent intensity |
|  **Pin 2**| field_max_shear |[`field`](../../core-concepts/dpf-types.md#field) | max shear stress field |

## Configurations

| Name| Expected type(s) | Default value | Description |
|-----|------|----------|-------------|
| **mutex** |[`bool`](../../core-concepts/dpf-types.md#standard-types) | false | If this option is set to true, the shared memory is prevented from being simultaneously accessed by multiple threads. |
| **num_threads** |[`int32`](../../core-concepts/dpf-types.md#standard-types) | 0 | Number of threads to use to run in parallel |
| **run_in_parallel** |[`bool`](../../core-concepts/dpf-types.md#standard-types) | true | Loops are allowed to run in parallel if the value of this config is set to true. |

## Scripting

 **Category**: invariant

 **Plugin**: core

 **Scripting name**: invariants

 **Full name**: invariant.invariants

 **Internal name**: invariants_deriv

 **License**: None

## Examples

<details>
<summary>C++</summary>

```cpp
#include "dpf_api.h"

ansys::dpf::Operator op("invariants_deriv"); // operator instantiation
op.connect(0, my_field);
ansys::dpf::Field my_field_int = op.getOutput<ansys::dpf::Field>(0);
ansys::dpf::Field my_field_eqv = op.getOutput<ansys::dpf::Field>(1);
ansys::dpf::Field my_field_max_shear = op.getOutput<ansys::dpf::Field>(2);
```
</details>

<details>
<summary>CPython</summary>

```python
import ansys.dpf.core as dpf

op = dpf.operators.invariant.invariants() # operator instantiation
op.inputs.field.connect(my_field)
my_field_int = op.outputs.field_int()
my_field_eqv = op.outputs.field_eqv()
my_field_max_shear = op.outputs.field_max_shear()
```
</details>

<details>
<summary>IPython</summary>

```python
import mech_dpf
import Ans.DataProcessing as dpf

op = dpf.operators.invariant.invariants() # operator instantiation
op.inputs.field.Connect(my_field)
my_field_int = op.outputs.field_int.GetData()
my_field_eqv = op.outputs.field_eqv.GetData()
my_field_max_shear = op.outputs.field_max_shear.GetData()
```
</details>
<br>

## Changelog

- Version 0.0.0: Initial release.