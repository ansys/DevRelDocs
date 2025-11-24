---
category: mapping
plugin: core
license: None
---

# mapping:find reduced coordinates

**Version: 0.0.0**

## Description

Finds the elements corresponding to the given coordinates in input and computes their reduced coordinates in those elements.

## Inputs

| Input | Name | Expected type(s) | Description |
|-------|-------|------------------|-------------|
| <strong>Pin 1</strong> <br><span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  coordinates |[`field`](../../core-concepts/dpf-types.md#field), [`fields_container`](../../core-concepts/dpf-types.md#fields-container), [`abstract_meshed_region`](../../core-concepts/dpf-types.md#meshed-region), [`meshes_container`](../../core-concepts/dpf-types.md#meshes-container) |  |
| <strong>Pin 7</strong>|  mesh |[`abstract_meshed_region`](../../core-concepts/dpf-types.md#meshed-region), [`meshes_container`](../../core-concepts/dpf-types.md#meshes-container) | If the first field in input has no mesh in support, then the mesh in this pin is expected (default is false). If a meshes container with several meshes is set, it should be on the same label spaces as the coordinates fields container. |
| <strong>Pin 200</strong>|  use_quadratic_elements |[`bool`](../../core-concepts/dpf-types.md#standard-types) | If this pin is set to true, reduced coordinates are computed on the quadratic element if the element is quadratic (more precise but less performant). Default is false. |

## Outputs

| Output |  Name | Expected type(s) | Description |
|-------|------|------------------|-------------|
|  **Pin 0**| reduced_coordinates |[`fields_container`](../../core-concepts/dpf-types.md#fields-container) | coordinates in the reference elements |
|  **Pin 1**| element_ids |[`scopings_container`](../../core-concepts/dpf-types.md#scopings-container) | Ids of the elements where each set of reduced coordinates is found |

## Configurations

| Name| Expected type(s) | Default value | Description |
|-----|------|----------|-------------|
| **mutex** |[`bool`](../../core-concepts/dpf-types.md#standard-types) | false | If this option is set to true, the shared memory is prevented from being simultaneously accessed by multiple threads. |

## Scripting

 **Category**: mapping

 **Plugin**: core

 **Scripting name**: find_reduced_coordinates

 **Full name**: mapping.find_reduced_coordinates

 **Internal name**: find_reduced_coordinates

 **License**: None

## Examples

<details>
<summary>C++</summary>

```cpp
#include "dpf_api.h"

ansys::dpf::Operator op("find_reduced_coordinates"); // operator instantiation
op.connect(1, my_coordinates);
op.connect(7, my_mesh);
op.connect(200, my_use_quadratic_elements);
ansys::dpf::FieldsContainer my_reduced_coordinates = op.getOutput<ansys::dpf::FieldsContainer>(0);
ansys::dpf::ScopingsContainer my_element_ids = op.getOutput<ansys::dpf::ScopingsContainer>(1);
```
</details>

<details>
<summary>CPython</summary>

```python
import ansys.dpf.core as dpf

op = dpf.operators.mapping.find_reduced_coordinates() # operator instantiation
op.inputs.coordinates.connect(my_coordinates)
op.inputs.mesh.connect(my_mesh)
op.inputs.use_quadratic_elements.connect(my_use_quadratic_elements)
my_reduced_coordinates = op.outputs.reduced_coordinates()
my_element_ids = op.outputs.element_ids()
```
</details>

<details>
<summary>IPython</summary>

```python
import mech_dpf
import Ans.DataProcessing as dpf

op = dpf.operators.mapping.find_reduced_coordinates() # operator instantiation
op.inputs.coordinates.Connect(my_coordinates)
op.inputs.mesh.Connect(my_mesh)
op.inputs.use_quadratic_elements.Connect(my_use_quadratic_elements)
my_reduced_coordinates = op.outputs.reduced_coordinates.GetData()
my_element_ids = op.outputs.element_ids.GetData()
```
</details>
<br>

## Changelog

- Version 0.0.0: Initial release.