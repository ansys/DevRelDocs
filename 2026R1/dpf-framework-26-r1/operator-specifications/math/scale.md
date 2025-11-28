---
category: math
plugin: core
license: None
---

# math:scale (field)

**Version: 0.0.0**

## Description

Scales a field by a constant factor. This factor can be a scalar or a vector, where each value of the vector represents a scaler per component. Number of the components are corresponding to the input field dimensionality

## Inputs

| Input | Name | Expected type(s) | Description |
|-------|-------|------------------|-------------|
| <strong>Pin 0</strong> <br><span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  field |[`field`](../../core-concepts/dpf-types.md#field), [`fields_container`](../../core-concepts/dpf-types.md#fields-container) | field or fields container with only one field is expected |
| <strong>Pin 1</strong> <br><span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  weights |[`double`](../../core-concepts/dpf-types.md#standard-types), [`field`](../../core-concepts/dpf-types.md#field), [`vector<double>`](../../core-concepts/dpf-types.md#standard-types) | Double/Field/Vector of doubles. When scoped on overall, same value(s) applied on all the data, when scoped elsewhere, corresponding values will be multiplied due to the scoping |
| <strong>Pin 2</strong>|  boolean |[`bool`](../../core-concepts/dpf-types.md#standard-types) | Default is false. If set to true, output of scale is made dimensionless |
| <strong>Pin 3</strong>|  algorithm |[`int32`](../../core-concepts/dpf-types.md#standard-types) | Algorithm selection: 0 (default) uses MKL for optimization, 1 uses standard loops |

## Outputs

| Output |  Name | Expected type(s) | Description |
|-------|------|------------------|-------------|
|  **Pin 0**| field |[`field`](../../core-concepts/dpf-types.md#field) | Field with scaled values (input_field * scale_factor) |

## Configurations

| Name| Expected type(s) | Default value | Description |
|-----|------|----------|-------------|
| **mutex** |[`bool`](../../core-concepts/dpf-types.md#standard-types) | false | If this option is set to true, the shared memory is prevented from being simultaneously accessed by multiple threads. |
| **permissive** |[`bool`](../../core-concepts/dpf-types.md#standard-types) | false | If this option is set to true, warning checks (like unit or data sizes) won't be done. |

## Scripting

 **Category**: math

 **Plugin**: core

 **Scripting name**: None

 **Full name**: None

 **Internal name**: scale

 **License**: None

## Examples

<details>
<summary>C++</summary>

```cpp
#include "dpf_api.h"

ansys::dpf::Operator op("scale"); // operator instantiation
op.connect(0, my_field);
op.connect(1, my_weights);
op.connect(2, my_boolean);
op.connect(3, my_algorithm);
ansys::dpf::Field my_field = op.getOutput<ansys::dpf::Field>(0);
```
</details>

<details>
<summary>CPython</summary>

```python
import ansys.dpf.core as dpf

op = dpf.operators.math.None() # operator instantiation
op.inputs.field.connect(my_field)
op.inputs.weights.connect(my_weights)
op.inputs.boolean.connect(my_boolean)
op.inputs.algorithm.connect(my_algorithm)
my_field = op.outputs.field()
```
</details>

<details>
<summary>IPython</summary>

```python
import mech_dpf
import Ans.DataProcessing as dpf

op = dpf.operators.math.None() # operator instantiation
op.inputs.field.Connect(my_field)
op.inputs.weights.Connect(my_weights)
op.inputs.boolean.Connect(my_boolean)
op.inputs.algorithm.Connect(my_algorithm)
my_field = op.outputs.field.GetData()
```
</details>
<br>

## Changelog

- Version 0.0.0: Initial release.