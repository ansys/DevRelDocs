---
category: mapping
plugin: core
license: None
---

# mapping:on reduced coordinates

**Version: 0.0.0**

## Description

Evaluates a result on specified reduced coordinates of given elements (interpolates results inside elements with shape functions).

## Inputs

| Pin number | Name | Expected type(s) |
|-------|-------|------------------|
| <strong>0</strong> <span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  [fields_container](#input_0) |[`fields_container`](../../core-concepts/dpf-types.md#fields-container) |
| <strong>1</strong> <span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  [reduced_coordinates](#input_1) |[`field`](../../core-concepts/dpf-types.md#field), [`fields_container`](../../core-concepts/dpf-types.md#fields-container) |
| <strong>2</strong> <span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  [element_ids](#input_2) |[`scopings_container`](../../core-concepts/dpf-types.md#scopings-container) |
| <strong>7</strong>|  [mesh](#input_7) |[`abstract_meshed_region`](../../core-concepts/dpf-types.md#meshed-region), [`meshes_container`](../../core-concepts/dpf-types.md#meshes-container) |
| <strong>200</strong>|  [use_quadratic_elements](#input_200) |[`bool`](../../core-concepts/dpf-types.md#standard-types) |


<a id="input_0"></a>
### fields_container (Pin 0)

- **Required:** Yes
- **Expected type(s):** [`fields_container`](../../core-concepts/dpf-types.md#fields-container)



<a id="input_1"></a>
### reduced_coordinates (Pin 1)

- **Required:** Yes
- **Expected type(s):** [`field`](../../core-concepts/dpf-types.md#field), [`fields_container`](../../core-concepts/dpf-types.md#fields-container)

coordinates in the reference elements to find (found with the operator "find_reduced_coordinates")

<a id="input_2"></a>
### element_ids (Pin 2)

- **Required:** Yes
- **Expected type(s):** [`scopings_container`](../../core-concepts/dpf-types.md#scopings-container)

Ids of the elements where each set of reduced coordinates is found (found with the operator "find_reduced_coordinates")

<a id="input_7"></a>
### mesh (Pin 7)

- **Required:** No
- **Expected type(s):** [`abstract_meshed_region`](../../core-concepts/dpf-types.md#meshed-region), [`meshes_container`](../../core-concepts/dpf-types.md#meshes-container)

if the first field in input has no mesh in support, then the mesh in this pin is expected (default is false), if a meshes container with several meshes is set, it should be on the same label spaces as the coordinates fields container

<a id="input_200"></a>
### use_quadratic_elements (Pin 200)

- **Required:** No
- **Expected type(s):** [`bool`](../../core-concepts/dpf-types.md#standard-types)

If this pin is set to true, the interpolation is computed on the quadratic element if the element is quadratic (more precise but less performant). Default is false. To use only when results have mid side nodes values.


## Outputs

| Pin number |  Name | Expected type(s) |
|-------|------|------------------|
|  **0**| [fields_container](#output_0) |[`fields_container`](../../core-concepts/dpf-types.md#fields-container) |


<a id="output_0"></a>
### fields_container (Pin 0)

- **Expected type(s):** [`fields_container`](../../core-concepts/dpf-types.md#fields-container)




## Configurations


### mutex

- **Expected type(s):** [`bool`](../../core-concepts/dpf-types.md#standard-types)
- **Default value:** false

If this option is set to true, the shared memory is prevented from being simultaneously accessed by multiple threads.



## Scripting

 **Category**: mapping

 **Plugin**: core

 **Scripting name**: on_reduced_coordinates

 **Full name**: mapping.on_reduced_coordinates

 **Internal name**: interpolation_operator

 **License**: None

## Examples

<details>
<summary>C++</summary>

```cpp
#include "dpf_api.h"

ansys::dpf::Operator op("interpolation_operator"); // operator instantiation
op.connect(0, my_fields_container);
op.connect(1, my_reduced_coordinates);
op.connect(2, my_element_ids);
op.connect(7, my_mesh);
op.connect(200, my_use_quadratic_elements);
ansys::dpf::FieldsContainer my_fields_container = op.getOutput<ansys::dpf::FieldsContainer>(0);
```
</details>

<details>
<summary>CPython</summary>

```python
import ansys.dpf.core as dpf

op = dpf.operators.mapping.on_reduced_coordinates() # operator instantiation
op.inputs.fields_container.connect(my_fields_container)
op.inputs.reduced_coordinates.connect(my_reduced_coordinates)
op.inputs.element_ids.connect(my_element_ids)
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

op = dpf.operators.mapping.on_reduced_coordinates() # operator instantiation
op.inputs.fields_container.Connect(my_fields_container)
op.inputs.reduced_coordinates.Connect(my_reduced_coordinates)
op.inputs.element_ids.Connect(my_element_ids)
op.inputs.mesh.Connect(my_mesh)
op.inputs.use_quadratic_elements.Connect(my_use_quadratic_elements)
my_fields_container = op.outputs.fields_container.GetData()
```
</details>
<br>

## Changelog

- Version 0.0.0: Initial release.