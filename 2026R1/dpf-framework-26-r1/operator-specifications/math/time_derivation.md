---
category: math
plugin: core
license: None
---

# math:time derivation

**Version: 0.0.0**

## Description

Derives a field of time varying quantities with respect to time

## Inputs

| Input | Name | Expected type(s) | Description |
|-------|-------|------------------|-------------|
| <strong>Pin 0</strong> <br><span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  field |[`field`](../../core-concepts/dpf-types.md#field) | field |
| <strong>Pin 1</strong>|  spline_fitting |[`bool`](../../core-concepts/dpf-types.md#standard-types) | Uses spline fitting on the input field to compute smooth derivatives |

## Outputs

| Output |  Name | Expected type(s) | Description |
|-------|------|------------------|-------------|
|  **Pin 0**| field |[`field`](../../core-concepts/dpf-types.md#field) |  |

## Configurations

| Name| Expected type(s) | Default value | Description |
|-----|------|----------|-------------|
| **mutex** |[`bool`](../../core-concepts/dpf-types.md#standard-types) | false | If this option is set to true, the shared memory is prevented from being simultaneously accessed by multiple threads. |

## Scripting

 **Category**: math

 **Plugin**: core

 **Scripting name**: time_derivation

 **Full name**: math.time_derivation

 **Internal name**: TimeDerivation

 **License**: None

## Examples

<details>
<summary>C++</summary>

```cpp
#include "dpf_api.h"

ansys::dpf::Operator op("TimeDerivation"); // operator instantiation
op.connect(0, my_field);
op.connect(1, my_spline_fitting);
ansys::dpf::Field my_field = op.getOutput<ansys::dpf::Field>(0);
```
</details>

<details>
<summary>CPython</summary>

```python
import ansys.dpf.core as dpf

op = dpf.operators.math.time_derivation() # operator instantiation
op.inputs.field.connect(my_field)
op.inputs.spline_fitting.connect(my_spline_fitting)
my_field = op.outputs.field()
```
</details>

<details>
<summary>IPython</summary>

```python
import mech_dpf
import Ans.DataProcessing as dpf

op = dpf.operators.math.time_derivation() # operator instantiation
op.inputs.field.Connect(my_field)
op.inputs.spline_fitting.Connect(my_spline_fitting)
my_field = op.outputs.field.GetData()
```
</details>
<br>

## Changelog

- Version 0.0.0: Initial release.