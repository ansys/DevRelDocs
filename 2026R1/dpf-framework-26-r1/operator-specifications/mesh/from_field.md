---
category: mesh
plugin: core
license: None
---

# mesh:extract from field

**Version: 0.0.0**

## Description

Extracts the meshed region from the support of a field.

## Inputs

| Input | Name | Expected type(s) | Description |
|-------|-------|------------------|-------------|
| <strong>Pin 0</strong> <br><span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  field |[`field`](../../core-concepts/dpf-types.md#field) | Field containing a mesh support |

## Outputs

| Output |  Name | Expected type(s) | Description |
|-------|------|------------------|-------------|
|  **Pin 0**| mesh |[`abstract_meshed_region`](../../core-concepts/dpf-types.md#meshed-region) | Meshed region extracted from the field's support |

## Configurations

| Name| Expected type(s) | Default value | Description |
|-----|------|----------|-------------|
| **mutex** |[`bool`](../../core-concepts/dpf-types.md#standard-types) | false | If this option is set to true, the shared memory is prevented from being simultaneously accessed by multiple threads. |

## Scripting

 **Category**: mesh

 **Plugin**: core

 **Scripting name**: from_field

 **Full name**: mesh.from_field

 **Internal name**: GetSupportFromField

 **License**: None

## Examples

<details>
<summary>C++</summary>

```cpp
#include "dpf_api.h"

ansys::dpf::Operator op("GetSupportFromField"); // operator instantiation
op.connect(0, my_field);
ansys::dpf::MeshedRegion my_mesh = op.getOutput<ansys::dpf::MeshedRegion>(0);
```
</details>

<details>
<summary>CPython</summary>

```python
import ansys.dpf.core as dpf

op = dpf.operators.mesh.from_field() # operator instantiation
op.inputs.field.connect(my_field)
my_mesh = op.outputs.mesh()
```
</details>

<details>
<summary>IPython</summary>

```python
import mech_dpf
import Ans.DataProcessing as dpf

op = dpf.operators.mesh.from_field() # operator instantiation
op.inputs.field.Connect(my_field)
my_mesh = op.outputs.mesh.GetData()
```
</details>
<br>

## Changelog

- Version 0.0.0: Initial release.