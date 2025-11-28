---
category: min_max
plugin: core
license: None
---

# min_max:max over time

**Version: 0.0.0**

## Description

Evaluates maximum over time/frequency.

## Inputs

| Input | Name | Expected type(s) | Description |
|-------|-------|------------------|-------------|
| <strong>Pin 0</strong> <br><span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  fields_container |[`fields_container`](../../core-concepts/dpf-types.md#fields-container) |  |
| <strong>Pin 3</strong>|  abs_value |[`bool`](../../core-concepts/dpf-types.md#standard-types) | Should use absolute value. |
| <strong>Pin 4</strong>|  compute_amplitude |[`bool`](../../core-concepts/dpf-types.md#standard-types) | Do calculate amplitude. |

## Outputs

| Output |  Name | Expected type(s) | Description |
|-------|------|------------------|-------------|
|  **Pin 0**| fields_container |[`fields_container`](../../core-concepts/dpf-types.md#fields-container) |  |

## Configurations

| Name| Expected type(s) | Default value | Description |
|-----|------|----------|-------------|
| **incremental** |[`bool`](../../core-concepts/dpf-types.md#standard-types) | true | This operator can be run several times with different inputs so that the output will take all the inputs of the different runs into account. It can be used to save memory. For example, a large time scoping can be split in smaller ranges of time to compute the result range by range. |
| **mutex** |[`bool`](../../core-concepts/dpf-types.md#standard-types) | false | If this option is set to true, the shared memory is prevented from being simultaneously accessed by multiple threads. |

## Scripting

 **Category**: min_max

 **Plugin**: core

 **Scripting name**: None

 **Full name**: None

 **Internal name**: max_over_time_by_entity

 **License**: None

## Examples

<details>
<summary>C++</summary>

```cpp
#include "dpf_api.h"

ansys::dpf::Operator op("max_over_time_by_entity"); // operator instantiation
op.connect(0, my_fields_container);
op.connect(3, my_abs_value);
op.connect(4, my_compute_amplitude);
ansys::dpf::FieldsContainer my_fields_container = op.getOutput<ansys::dpf::FieldsContainer>(0);
```
</details>

<details>
<summary>CPython</summary>

```python
import ansys.dpf.core as dpf

op = dpf.operators.min_max.None() # operator instantiation
op.inputs.fields_container.connect(my_fields_container)
op.inputs.abs_value.connect(my_abs_value)
op.inputs.compute_amplitude.connect(my_compute_amplitude)
my_fields_container = op.outputs.fields_container()
```
</details>

<details>
<summary>IPython</summary>

```python
import mech_dpf
import Ans.DataProcessing as dpf

op = dpf.operators.min_max.None() # operator instantiation
op.inputs.fields_container.Connect(my_fields_container)
op.inputs.abs_value.Connect(my_abs_value)
op.inputs.compute_amplitude.Connect(my_compute_amplitude)
my_fields_container = op.outputs.fields_container.GetData()
```
</details>
<br>

## Changelog

- Version 0.0.0: Initial release.