---
category: logic
plugin: core
license: None
---

# logic:same meshes?

**Version: 0.0.0**

## Description

Takes two meshes and compares them. Note: When comparing mesh properties, the current behaviour is to verify that the properties in the first mesh (pin 0) are included in the second mesh (pin 1).

## Inputs

| Input | Name | Expected type(s) | Description |
|-------|-------|------------------|-------------|
| <strong>Pin 0</strong> <br><span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  meshA |[`abstract_meshed_region`](../../core-concepts/dpf-types.md#meshed-region) |  |
| <strong>Pin 1</strong> <br><span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  meshB |[`abstract_meshed_region`](../../core-concepts/dpf-types.md#meshed-region) |  |
| <strong>Pin 2</strong>|  small_value |[`double`](../../core-concepts/dpf-types.md#standard-types) | define what is a small value for numeric comparison (default value:1.0e-14). |
| <strong>Pin 3</strong>|  tolerance |[`double`](../../core-concepts/dpf-types.md#standard-types) | define the relative tolerance ceil for numeric comparison (default is 0.001). |
| <strong>Pin 4</strong> <br><span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  compare_auxiliary |[`bool`](../../core-concepts/dpf-types.md#standard-types) | compare auxiliary data (i.e property fields, scopings...). Default value is 'false'. |

## Outputs

| Output |  Name | Expected type(s) | Description |
|-------|------|------------------|-------------|
|  **Pin 0**| are_identical |[`bool`](../../core-concepts/dpf-types.md#standard-types) |  |

## Configurations

| Name| Expected type(s) | Default value | Description |
|-----|------|----------|-------------|
| **mutex** |[`bool`](../../core-concepts/dpf-types.md#standard-types) | false | If this option is set to true, the shared memory is prevented from being simultaneously accessed by multiple threads. |

## Scripting

 **Category**: logic

 **Plugin**: core

 **Scripting name**: identical_meshes

 **Full name**: logic.identical_meshes

 **Internal name**: compare::mesh

 **License**: None

## Examples

<details>
<summary>C++</summary>

```cpp
#include "dpf_api.h"

ansys::dpf::Operator op("compare::mesh"); // operator instantiation
op.connect(0, my_meshA);
op.connect(1, my_meshB);
op.connect(2, my_small_value);
op.connect(3, my_tolerance);
op.connect(4, my_compare_auxiliary);
bool my_are_identical = op.getOutput<bool>(0);
```
</details>

<details>
<summary>CPython</summary>

```python
import ansys.dpf.core as dpf

op = dpf.operators.logic.identical_meshes() # operator instantiation
op.inputs.meshA.connect(my_meshA)
op.inputs.meshB.connect(my_meshB)
op.inputs.small_value.connect(my_small_value)
op.inputs.tolerance.connect(my_tolerance)
op.inputs.compare_auxiliary.connect(my_compare_auxiliary)
my_are_identical = op.outputs.are_identical()
```
</details>

<details>
<summary>IPython</summary>

```python
import mech_dpf
import Ans.DataProcessing as dpf

op = dpf.operators.logic.identical_meshes() # operator instantiation
op.inputs.meshA.Connect(my_meshA)
op.inputs.meshB.Connect(my_meshB)
op.inputs.small_value.Connect(my_small_value)
op.inputs.tolerance.Connect(my_tolerance)
op.inputs.compare_auxiliary.Connect(my_compare_auxiliary)
my_are_identical = op.outputs.are_identical.GetData()
```
</details>
<br>

## Changelog

- Version 0.0.0: Initial release.