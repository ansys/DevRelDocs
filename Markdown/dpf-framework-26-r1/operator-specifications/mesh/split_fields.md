---
category: mesh
plugin: core
license: None
---

# mesh:split field wrt mesh regions

**Version: 0.0.0**

## Description

Split the input field or fields container based on the input mesh regions 

## Inputs

| Input | Name | Expected type(s) | Description |
|-------|-------|------------------|-------------|
| <strong>Pin 0</strong> <br><span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  field_or_fields_container |[`field`](../../core-concepts/dpf-types.md#field), [`fields_container`](../../core-concepts/dpf-types.md#fields-container) |  |
| <strong>Pin 1</strong> <br><span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  meshes |[`meshes_container`](../../core-concepts/dpf-types.md#meshes-container) | body meshes in the mesh controller cannot be mixed shell/solid |

## Outputs

| Output |  Name | Expected type(s) | Description |
|-------|------|------------------|-------------|
|  **Pin 0**| fields_container |[`fields_container`](../../core-concepts/dpf-types.md#fields-container) |  |

## Configurations

| Name| Expected type(s) | Default value | Description |
|-----|------|----------|-------------|
| **mutex** |[`bool`](../../core-concepts/dpf-types.md#standard-types) | false | If this option is set to true, the shared memory is prevented from being simultaneously accessed by multiple threads. |

## Scripting

 **Category**: mesh

 **Plugin**: core

 **Scripting name**: split_fields

 **Full name**: mesh.split_fields

 **Internal name**: split_fields

 **License**: None

## Examples

<details>
<summary>C++</summary>

```cpp
#include "dpf_api.h"

ansys::dpf::Operator op("split_fields"); // operator instantiation
op.connect(0, my_field_or_fields_container);
op.connect(1, my_meshes);
ansys::dpf::FieldsContainer my_fields_container = op.getOutput<ansys::dpf::FieldsContainer>(0);
```
</details>

<details>
<summary>CPython</summary>

```python
import ansys.dpf.core as dpf

op = dpf.operators.mesh.split_fields() # operator instantiation
op.inputs.field_or_fields_container.connect(my_field_or_fields_container)
op.inputs.meshes.connect(my_meshes)
my_fields_container = op.outputs.fields_container()
```
</details>

<details>
<summary>IPython</summary>

```python
import mech_dpf
import Ans.DataProcessing as dpf

op = dpf.operators.mesh.split_fields() # operator instantiation
op.inputs.field_or_fields_container.Connect(my_field_or_fields_container)
op.inputs.meshes.Connect(my_meshes)
my_fields_container = op.outputs.fields_container.GetData()
```
</details>
<br>

## Changelog

- Version 0.0.0: Initial release.