---
category: mesh
plugin: core
license: None
---

# mesh:skin

**Version: 0.0.0**

## Description

Extracts a skin of the mesh in a new meshed region. The material ID of initial elements are propagated to their facets.

## Inputs

This table lists the input pins for this operator. Input pins define the data that the operator requires to perform its operation.
Some inputs are required, while others are optional and provide additional configuration.
Each parameter is detailed in the sections that follow the table.

| Pin number | Name | Status | Expected type(s) |
|------------|------|--------|------------------|
| <strong>0</strong> | [mesh](#input_0) |  <span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;" title="This pin is required">Required</span>|[`abstract_meshed_region`](../../core-concepts/dpf-types.md#meshed-region) |
| <strong>1</strong> | [mesh_scoping](#input_1) |  |[`scoping`](../../core-concepts/dpf-types.md#scoping) |
| <strong>2</strong> | [duplicate_shell](#input_2) |  |[`bool`](../../core-concepts/dpf-types.md#standard-types) |
| <strong>3</strong> | [add_beam_point](#input_3) |  |[`bool`](../../core-concepts/dpf-types.md#standard-types) |


<a id="input_0"></a>
### mesh (Pin 0)

- **Required:** Yes
- **Expected type(s):** [`abstract_meshed_region`](../../core-concepts/dpf-types.md#meshed-region)



<a id="input_1"></a>
### mesh_scoping (Pin 1)

- **Required:** No
- **Expected type(s):** [`scoping`](../../core-concepts/dpf-types.md#scoping)

Nodal scoping to restrict the skin extraction to a set of nodes. If provided, a skin element is added to the skin mesh if all its nodes are in the scoping.

<a id="input_2"></a>
### duplicate_shell (Pin 2)

- **Required:** No
- **Expected type(s):** [`bool`](../../core-concepts/dpf-types.md#standard-types)

If input mesh contains shell elements, output mesh shell elements (boolean = 1) are duplicated, one per each orientation, or (boolean = 0) remain unchanged.

<a id="input_3"></a>
### add_beam_point (Pin 3)

- **Required:** No
- **Expected type(s):** [`bool`](../../core-concepts/dpf-types.md#standard-types)

If input mesh contains beam or point elements, output mesh beam point elements (boolean = 1) are added or (boolean = 0) are ignored. Default: False


## Outputs

This table lists the output pins for this operator.
Output pins provide the results of the operator's computation and can be connected to inputs of other operators or retrieved for further processing.
Each output is detailed in the sections that follow the table.

| Pin number |  Name | Expected type(s) |
|-------|------|------------------|
|  **0**| [mesh](#output_0) |[`abstract_meshed_region`](../../core-concepts/dpf-types.md#meshed-region) |
|  **1**| [nodes_mesh_scoping](#output_1) |[`scoping`](../../core-concepts/dpf-types.md#scoping) |
|  **2**| [map_new_elements_to_old](#output_2) |`umap<int32,int32>` |
|  **3**| [property_field_new_elements_to_old](#output_3) |[`property_field`](../../core-concepts/dpf-types.md#property-field) |
|  **4**| [facet_indices](#output_4) |[`property_field`](../../core-concepts/dpf-types.md#property-field) |


<a id="output_0"></a>
### mesh (Pin 0)

- **Expected type(s):** [`abstract_meshed_region`](../../core-concepts/dpf-types.md#meshed-region)

Skin meshed region with facets and facets_to_ele property fields.

<a id="output_1"></a>
### nodes_mesh_scoping (Pin 1)

- **Expected type(s):** [`scoping`](../../core-concepts/dpf-types.md#scoping)



<a id="output_2"></a>
### map_new_elements_to_old (Pin 2)

- **Expected type(s):** `umap<int32,int32>`



<a id="output_3"></a>
### property_field_new_elements_to_old (Pin 3)

- **Expected type(s):** [`property_field`](../../core-concepts/dpf-types.md#property-field)

This property field provides, for each new face element ID (in the scoping), the corresponding 3D volume element index (in the data) it has been extracted from. The 3D volume element ID can be found with the element scoping of the input mesh.

<a id="output_4"></a>
### facet_indices (Pin 4)

- **Expected type(s):** [`property_field`](../../core-concepts/dpf-types.md#property-field)

This property field gives, for each new face element ID (in the scoping), the corresponding face index on the source 3D volume element. The 3D volume element can be extracted from the previous output.


## Configurations

This operator supports [configuration options](../../core-concepts/operator-configurations.md) that modify its behavior.


### [mutex](../../core-concepts/operator-configurations.md#mutex)

- **Expected type(s):** [`bool`](../../core-concepts/dpf-types.md#standard-types)
- **Default value:** false

If this option is set to true, the shared memory is prevented from being simultaneously accessed by multiple threads.



## Scripting

This operator can be accessed through scripting interfaces using these identifiers.

 **Category**: mesh

 **Plugin**: core

 **Scripting name**: skin

 **Full name**: mesh.skin

 **Internal name**: meshed_skin_sector

 **License**: None

## Examples

These examples demonstrate how to use this operator in different programming environments.
Each example shows how to instantiate the operator, connect the required inputs, and retrieve the output.

<details>
<summary>C++</summary>

```cpp
#include "dpf_api.h"

ansys::dpf::Operator op("meshed_skin_sector"); // operator instantiation
op.connect(0, my_mesh);
op.connect(1, my_mesh_scoping);
op.connect(2, my_duplicate_shell);
op.connect(3, my_add_beam_point);
ansys::dpf::MeshedRegion my_mesh = op.getOutput<ansys::dpf::MeshedRegion>(0);
ansys::dpf::Scoping my_nodes_mesh_scoping = op.getOutput<ansys::dpf::Scoping>(1);
ansys::dpf::Umap<Int32,Int32> my_map_new_elements_to_old = op.getOutput<ansys::dpf::Umap<Int32,Int32>>(2);
ansys::dpf::PropertyField my_property_field_new_elements_to_old = op.getOutput<ansys::dpf::PropertyField>(3);
ansys::dpf::PropertyField my_facet_indices = op.getOutput<ansys::dpf::PropertyField>(4);
```
</details>

<details>
<summary>CPython</summary>

```python
import ansys.dpf.core as dpf

op = dpf.operators.mesh.skin() # operator instantiation
op.inputs.mesh.connect(my_mesh)
op.inputs.mesh_scoping.connect(my_mesh_scoping)
op.inputs.duplicate_shell.connect(my_duplicate_shell)
op.inputs.add_beam_point.connect(my_add_beam_point)
my_mesh = op.outputs.mesh()
my_nodes_mesh_scoping = op.outputs.nodes_mesh_scoping()
my_map_new_elements_to_old = op.outputs.map_new_elements_to_old()
my_property_field_new_elements_to_old = op.outputs.property_field_new_elements_to_old()
my_facet_indices = op.outputs.facet_indices()
```
</details>

<details>
<summary>IPython</summary>

```python
import mech_dpf
import Ans.DataProcessing as dpf

op = dpf.operators.mesh.skin() # operator instantiation
op.inputs.mesh.Connect(my_mesh)
op.inputs.mesh_scoping.Connect(my_mesh_scoping)
op.inputs.duplicate_shell.Connect(my_duplicate_shell)
op.inputs.add_beam_point.Connect(my_add_beam_point)
my_mesh = op.outputs.mesh.GetData()
my_nodes_mesh_scoping = op.outputs.nodes_mesh_scoping.GetData()
my_map_new_elements_to_old = op.outputs.map_new_elements_to_old.GetData()
my_property_field_new_elements_to_old = op.outputs.property_field_new_elements_to_old.GetData()
my_facet_indices = op.outputs.facet_indices.GetData()
```
</details>
<br>

## Changelog

- Version 0.0.0: Initial release.