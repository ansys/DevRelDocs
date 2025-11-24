---
category: result
plugin: core
license: None
---

# result:recombine cyclic harmonic indices

**Version: 0.0.0**

## Description

Add the fields corresponding to different load steps with the same frequencies to compute the response.

## Inputs

| Input | Name | Expected type(s) | Description |
|-------|-------|------------------|-------------|
| <strong>Pin 0</strong> <br><span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  fields_container |[`fields_container`](../../core-concepts/dpf-types.md#fields-container) |  |
| <strong>Pin 1</strong>|  is_constant |[`bool`](../../core-concepts/dpf-types.md#standard-types) | If the result is constant, it will only copy the first result found. |

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
| **use_cache** |[`bool`](../../core-concepts/dpf-types.md#standard-types) | true | Some intermediate data is put in cache if this config is set to true. This option can reduce computation time after the first run. |
| **work_by_index** |[`bool`](../../core-concepts/dpf-types.md#standard-types) | false | If this option is set to true, loops and comparisons by entity will be done by index instead of ids. |

## Scripting

 **Category**: result

 **Plugin**: core

 **Scripting name**: recombine_harmonic_indeces_cyclic

 **Full name**: result.recombine_harmonic_indeces_cyclic

 **Internal name**: recombine_harmonic_indeces_cyclic

 **License**: None

## Examples

<details>
<summary>C++</summary>

```cpp
#include "dpf_api.h"

ansys::dpf::Operator op("recombine_harmonic_indeces_cyclic"); // operator instantiation
op.connect(0, my_fields_container);
op.connect(1, my_is_constant);
ansys::dpf::FieldsContainer my_fields_container = op.getOutput<ansys::dpf::FieldsContainer>(0);
```
</details>

<details>
<summary>CPython</summary>

```python
import ansys.dpf.core as dpf

op = dpf.operators.result.recombine_harmonic_indeces_cyclic() # operator instantiation
op.inputs.fields_container.connect(my_fields_container)
op.inputs.is_constant.connect(my_is_constant)
my_fields_container = op.outputs.fields_container()
```
</details>

<details>
<summary>IPython</summary>

```python
import mech_dpf
import Ans.DataProcessing as dpf

op = dpf.operators.result.recombine_harmonic_indeces_cyclic() # operator instantiation
op.inputs.fields_container.Connect(my_fields_container)
op.inputs.is_constant.Connect(my_is_constant)
my_fields_container = op.outputs.fields_container.GetData()
```
</details>
<br>

## Changelog

- Version 0.0.0: Initial release.