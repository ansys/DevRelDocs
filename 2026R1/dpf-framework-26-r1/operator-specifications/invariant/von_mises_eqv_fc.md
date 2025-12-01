---
category: invariant
plugin: core
license: None
---

# invariant:von mises eqv (fields container)

**Version: 0.0.0**

## Description

Computes the element-wise Von-Mises criteria on all the tensor fields of a fields container.

## Inputs

| Input | Name | Expected type(s) | Description |
|-------|-------|------------------|-------------|
| <strong>Pin 0</strong> <br><span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  fields_container |[`fields_container`](../../core-concepts/dpf-types.md#fields-container) |  |
| <strong>Pin 13</strong> <br><span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  poisson_ratio |[`double`](../../core-concepts/dpf-types.md#standard-types), [`int32`](../../core-concepts/dpf-types.md#standard-types) | Poisson ratio to be used in equivalent strain calculation. |

## Outputs

| Output |  Name | Expected type(s) | Description |
|-------|------|------------------|-------------|
|  **Pin 0**| fields_container |[`fields_container`](../../core-concepts/dpf-types.md#fields-container) |  |

## Configurations

| Name| Expected type(s) | Default value | Description |
|-----|------|----------|-------------|
| **mutex** |[`bool`](../../core-concepts/dpf-types.md#standard-types) | false | If this option is set to true, the shared memory is prevented from being simultaneously accessed by multiple threads. |
| **num_threads** |[`int32`](../../core-concepts/dpf-types.md#standard-types) | 0 | Number of threads to use to run in parallel |
| **run_in_parallel** |[`bool`](../../core-concepts/dpf-types.md#standard-types) | true | Loops are allowed to run in parallel if the value of this config is set to true. |

## Scripting

 **Category**: invariant

 **Plugin**: core

 **Scripting name**: von_mises_eqv_fc

 **Full name**: invariant.von_mises_eqv_fc

 **Internal name**: eqv_fc

 **License**: None

## Examples

<details>
<summary>C++</summary>

```cpp
#include "dpf_api.h"

ansys::dpf::Operator op("eqv_fc"); // operator instantiation
op.connect(0, my_fields_container);
op.connect(13, my_poisson_ratio);
ansys::dpf::FieldsContainer my_fields_container = op.getOutput<ansys::dpf::FieldsContainer>(0);
```
</details>

<details>
<summary>CPython</summary>

```python
import ansys.dpf.core as dpf

op = dpf.operators.invariant.von_mises_eqv_fc() # operator instantiation
op.inputs.fields_container.connect(my_fields_container)
op.inputs.poisson_ratio.connect(my_poisson_ratio)
my_fields_container = op.outputs.fields_container()
```
</details>

<details>
<summary>IPython</summary>

```python
import mech_dpf
import Ans.DataProcessing as dpf

op = dpf.operators.invariant.von_mises_eqv_fc() # operator instantiation
op.inputs.fields_container.Connect(my_fields_container)
op.inputs.poisson_ratio.Connect(my_poisson_ratio)
my_fields_container = op.outputs.fields_container.GetData()
```
</details>
<br>

## Changelog

- Version 0.0.0: Initial release.