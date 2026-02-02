---
category: math
plugin: core
license: any_dpf_supported_increments
---

# math:modal participation

**Version: 0.0.0**

## Description

Compute the modal participation factor for a given vector field V, defined as  sum_i ( V .dot. mode_shape_i * ponderation ).

## Inputs

| Input | Name | Expected type(s) | Description |
|-------|-------|------------------|-------------|
| <strong>Pin 0</strong> <br><span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  v_real |[`field`](../../core-concepts/dpf-types.md#field) | real part of field V |
| <strong>Pin 1</strong> <br><span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  v_imag |[`field`](../../core-concepts/dpf-types.md#field) | imag part of field V |
| <strong>Pin 2</strong> <br><span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  mode_shapes |[`fields_container`](../../core-concepts/dpf-types.md#fields-container) |  |
| <strong>Pin 3</strong>|  ponderation |[`field`](../../core-concepts/dpf-types.md#field) |  |
| <strong>Pin 4</strong>|  force_label_space |[`label_space`](../../core-concepts/dpf-types.md#label-space) | If set, will force a label space for output result. |

## Outputs

| Output |  Name | Expected type(s) | Description |
|-------|------|------------------|-------------|
|  **Pin 0**| output |[`fields_container`](../../core-concepts/dpf-types.md#fields-container) |  |

## Configurations

| Name| Expected type(s) | Default value | Description |
|-----|------|----------|-------------|
| **mutex** |[`bool`](../../core-concepts/dpf-types.md#standard-types) | false | If this option is set to true, the shared memory is prevented from being simultaneously accessed by multiple threads. |

## Scripting

 **Category**: math

 **Plugin**: core

 **Scripting name**: modal_participation

 **Full name**: math.modal_participation

 **Internal name**: harmonic::modal_participation

 **License**: any_dpf_supported_increments

## Examples

<details>
<summary>C++</summary>

```cpp
#include "dpf_api.h"

ansys::dpf::Operator op("harmonic::modal_participation"); // operator instantiation
op.connect(0, my_v_real);
op.connect(1, my_v_imag);
op.connect(2, my_mode_shapes);
op.connect(3, my_ponderation);
op.connect(4, my_force_label_space);
ansys::dpf::FieldsContainer my_output = op.getOutput<ansys::dpf::FieldsContainer>(0);
```
</details>

<details>
<summary>CPython</summary>

```python
import ansys.dpf.core as dpf

op = dpf.operators.math.modal_participation() # operator instantiation
op.inputs.v_real.connect(my_v_real)
op.inputs.v_imag.connect(my_v_imag)
op.inputs.mode_shapes.connect(my_mode_shapes)
op.inputs.ponderation.connect(my_ponderation)
op.inputs.force_label_space.connect(my_force_label_space)
my_output = op.outputs.output()
```
</details>

<details>
<summary>IPython</summary>

```python
import mech_dpf
import Ans.DataProcessing as dpf

op = dpf.operators.math.modal_participation() # operator instantiation
op.inputs.v_real.Connect(my_v_real)
op.inputs.v_imag.Connect(my_v_imag)
op.inputs.mode_shapes.Connect(my_mode_shapes)
op.inputs.ponderation.Connect(my_ponderation)
op.inputs.force_label_space.Connect(my_force_label_space)
my_output = op.outputs.output.GetData()
```
</details>
<br>

## Changelog

- Version 0.0.0: Initial release.