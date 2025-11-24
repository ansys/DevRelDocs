---
category: serialization
plugin: N/A
license: any_dpf_supported_increments
---

# serialization:export mesh with prime

**Version: 0.0.0**

## Description

Transfer DPF's meshed region into an external layer prime model and serialize it into a given file format.

## Inputs

| Input | Name | Expected type(s) | Description |
|-------|-------|------------------|-------------|
| <strong>Pin 0</strong> <br><span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  path |[`string`](../../core-concepts/dpf-types.md#standard-types) | path(with the file extension) to export |
| <strong>Pin 7</strong> <br><span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  mesh |[`abstract_meshed_region`](../../core-concepts/dpf-types.md#meshed-region) |  |

## Outputs

| Output |  Name | Expected type(s) | Description |
|-------|------|------------------|-------------|

## Configurations

| Name| Expected type(s) | Default value | Description |
|-----|------|----------|-------------|
| **mutex** |[`bool`](../../core-concepts/dpf-types.md#standard-types) | false | If this option is set to true, the shared memory is prevented from being simultaneously accessed by multiple threads. |

## Scripting

 **Category**: serialization

 **Plugin**: N/A

 **Scripting name**: export_mesh_with_prime

 **Full name**: serialization.export_mesh_with_prime

 **Internal name**: serialization::export_mesh_with_prime

 **License**: any_dpf_supported_increments

## Examples

<details>
<summary>C++</summary>

```cpp
#include "dpf_api.h"

ansys::dpf::Operator op("serialization::export_mesh_with_prime"); // operator instantiation
op.connect(0, my_path);
op.connect(7, my_mesh);
```
</details>

<details>
<summary>CPython</summary>

```python
import ansys.dpf.core as dpf

op = dpf.operators.serialization.export_mesh_with_prime() # operator instantiation
op.inputs.path.connect(my_path)
op.inputs.mesh.connect(my_mesh)
```
</details>

<details>
<summary>IPython</summary>

```python
import mech_dpf
import Ans.DataProcessing as dpf

op = dpf.operators.serialization.export_mesh_with_prime() # operator instantiation
op.inputs.path.Connect(my_path)
op.inputs.mesh.Connect(my_mesh)
```
</details>
<br>

## Changelog

- Version 0.0.0: Initial release.