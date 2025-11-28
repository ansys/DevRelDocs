---
category: mapping
plugin: core
license: None
---

# mapping:on coordinates

**Version: 0.0.0**

## Description

Evaluates a result on specified coordinates (interpolates results inside elements with shape functions).

## Inputs

| Input | Name | Expected type(s) | Description |
|-------|-------|------------------|-------------|
| <strong>Pin 0</strong> <br><span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  fields_container |[`fields_container`](../../core-concepts/dpf-types.md#fields-container) |  |
| <strong>Pin 1</strong> <br><span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  coordinates |[`field`](../../core-concepts/dpf-types.md#field), [`fields_container`](../../core-concepts/dpf-types.md#fields-container), [`abstract_meshed_region`](../../core-concepts/dpf-types.md#meshed-region), [`meshes_container`](../../core-concepts/dpf-types.md#meshes-container) |  |
| <strong>Pin 2</strong>|  create_support |[`bool`](../../core-concepts/dpf-types.md#standard-types) | if this pin is set to true, then, a support associated to the fields consisting of points is created |
| <strong>Pin 3</strong>|  mapping_on_scoping |[`bool`](../../core-concepts/dpf-types.md#standard-types) | if this pin is set to true, then the mapping between the coordinates and the fields is created only on the first field scoping |
| <strong>Pin 5</strong>|  tolerance |[`double`](../../core-concepts/dpf-types.md#standard-types) | Tolerance used in the iterative algorithm to locate coordinates inside the mesh. Default value: 5e-5. |
| <strong>Pin 7</strong>|  mesh |[`abstract_meshed_region`](../../core-concepts/dpf-types.md#meshed-region), [`meshes_container`](../../core-concepts/dpf-types.md#meshes-container) | if the first field in input has no mesh in support, then the mesh in this pin is expected (default is false), if a meshes container with several meshes is set, it should be on the same label spaces as the coordinates fields container |
| <strong>Pin 200</strong>|  use_quadratic_elements |[`bool`](../../core-concepts/dpf-types.md#standard-types) | If this pin is set to true, the element search for each coordinate is computed on the quadratic element if the element is quadratic (more precise but less performant). Default is false. |

## Outputs

| Output |  Name | Expected type(s) | Description |
|-------|------|------------------|-------------|
|  **Pin 0**| fields_container |[`fields_container`](../../core-concepts/dpf-types.md#fields-container) |  |

## Configurations

| Name| Expected type(s) | Default value | Description |
|-----|------|----------|-------------|
| **mutex** |[`bool`](../../core-concepts/dpf-types.md#standard-types) | false | If this option is set to true, the shared memory is prevented from being simultaneously accessed by multiple threads. |

## Scripting

 **Category**: mapping

 **Plugin**: core

 **Scripting name**: on_coordinates

 **Full name**: mapping.on_coordinates

 **Internal name**: mapping

 **License**: None

## Examples

<details>
<summary>C++</summary>

```cpp
#include "dpf_api.h"

ansys::dpf::Operator op("mapping"); // operator instantiation
op.connect(0, my_fields_container);
op.connect(1, my_coordinates);
op.connect(2, my_create_support);
op.connect(3, my_mapping_on_scoping);
op.connect(5, my_tolerance);
op.connect(7, my_mesh);
op.connect(200, my_use_quadratic_elements);
ansys::dpf::FieldsContainer my_fields_container = op.getOutput<ansys::dpf::FieldsContainer>(0);
```
</details>

<details>
<summary>CPython</summary>

```python
import ansys.dpf.core as dpf

op = dpf.operators.mapping.on_coordinates() # operator instantiation
op.inputs.fields_container.connect(my_fields_container)
op.inputs.coordinates.connect(my_coordinates)
op.inputs.create_support.connect(my_create_support)
op.inputs.mapping_on_scoping.connect(my_mapping_on_scoping)
op.inputs.tolerance.connect(my_tolerance)
op.inputs.mesh.connect(my_mesh)
op.inputs.use_quadratic_elements.connect(my_use_quadratic_elements)
my_fields_container = op.outputs.fields_container()
```
</details>

<details>
<summary>IPython</summary>

```python
import mech_dpf
import Ans.DataProcessing as dpf

op = dpf.operators.mapping.on_coordinates() # operator instantiation
op.inputs.fields_container.Connect(my_fields_container)
op.inputs.coordinates.Connect(my_coordinates)
op.inputs.create_support.Connect(my_create_support)
op.inputs.mapping_on_scoping.Connect(my_mapping_on_scoping)
op.inputs.tolerance.Connect(my_tolerance)
op.inputs.mesh.Connect(my_mesh)
op.inputs.use_quadratic_elements.Connect(my_use_quadratic_elements)
my_fields_container = op.outputs.fields_container.GetData()
```
</details>
<br>

## Changelog

- Version 0.0.0: Initial release.