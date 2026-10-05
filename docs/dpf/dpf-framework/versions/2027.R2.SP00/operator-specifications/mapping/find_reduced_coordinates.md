---
category: mapping
plugin: core
license: None
---

# mapping:find reduced coordinates

**Version: 0.0.0**

## Description


Performs the inverse isoparametric mapping from physical (global) coordinates to reduced (natural/parametric) coordinates within finite elements.
This is the first stage in field interpolation workflows, determining which element contains each query point and computing its local coordinates within that element.

##### Mathematical formulation

For a query point $\mathbf{x}_q$ in physical space, this operator finds the element $e$ containing the point and solves the inverse mapping:

$$\mathbf{x}_q = \sum_{i=1}^{N_{nodes}} N_i(\boldsymbol{\xi}) \cdot \mathbf{x}_i^{(e)}$$

to compute the reduced coordinates $\boldsymbol{\xi} = (\xi, \eta, \zeta)$ where:
- $N_i(\boldsymbol{\xi})$ are the element shape functions
- $\mathbf{x}_i^{(e)}$ are the nodal coordinates of element $e$
- $\boldsymbol{\xi}$ are the parametric coordinates in the reference element space (typically $[-1, 1]$ for most elements)

##### Output format

The operator produces two synchronized outputs:
- **Reduced coordinates**: 3D vectors in parametric space, stored with the same labels/scoping structure as input coordinates
- **Element IDs**: Corresponding element identifiers, enabling subsequent interpolation operations

This operator is typically paired with `on_reduced_coordinates` to complete field interpolation: first find where points are located (`find_reduced_coordinates`), then evaluate field values at those locations (`on_reduced_coordinates`).


## Inputs

This table lists the input pins for this operator. Input pins define the data that the operator requires to perform its operation.
Some inputs are required, while others are optional and provide additional configuration.
Each parameter is detailed in the sections that follow the table.

| Pin number | Name | Status | Expected type(s) |
|------------|------|--------|------------------|
| <strong>1</strong> | [coordinates](#input_1) |  <span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;" title="This pin is required">Required</span>|[`field`](../../core-concepts/dpf-types.md#field), [`fields_container`](../../core-concepts/dpf-types.md#fields-container), [`abstract_meshed_region`](../../core-concepts/dpf-types.md#meshed-region), [`meshes_container`](../../core-concepts/dpf-types.md#meshes-container) |
| <strong>7</strong> | [mesh](#input_7) |  |[`abstract_meshed_region`](../../core-concepts/dpf-types.md#meshed-region), [`meshes_container`](../../core-concepts/dpf-types.md#meshes-container) |
| <strong>200</strong> | [use_quadratic_elements](#input_200) |  |[`bool`](../../core-concepts/dpf-types.md#standard-types) |


<a id="input_1"></a>
### coordinates (Pin 1)

- **Required:** Yes
- **Expected type(s):** [`field`](../../core-concepts/dpf-types.md#field), [`fields_container`](../../core-concepts/dpf-types.md#fields-container), [`abstract_meshed_region`](../../core-concepts/dpf-types.md#meshed-region), [`meshes_container`](../../core-concepts/dpf-types.md#meshes-container)

Physical (global) coordinates at which reduced coordinates and element associations should be computed. Each coordinate is a 3D vector ($x$, $y$, $z$).

**Supported input types**:
- **Field**: Single field containing coordinate vectors. Field location is ignored; the field is treated as a set of query points. The field's support mesh defines the search domain if the `mesh` pin is not provided.
- **FieldsContainer**: Multiple coordinate fields, typically organized by time step or spatial region. Each field is processed independently.
- **MeshedRegion**: Node coordinates of the mesh are used as query points. Useful for evaluating fields at mesh nodes.
- **MeshesContainer**: Multiple meshes whose node coordinates are used as query points.

<a id="input_7"></a>
### mesh (Pin 7)

- **Required:** No
- **Expected type(s):** [`abstract_meshed_region`](../../core-concepts/dpf-types.md#meshed-region), [`meshes_container`](../../core-concepts/dpf-types.md#meshes-container)

Mesh(es) defining the finite element domain where elements are searched. The operator searches for elements containing the query coordinates within this mesh.

If not provided, the mesh is automatically extracted from:
- Field support (if input is a Field)
- Field supports of the Fields in the FieldsContainer (if input is a FieldsContainer)
- The mesh itself (if input is a MeshedRegion or MeshesContainer)

**Label matching**: When both `coordinates` and `mesh` have labels (e.g., time steps), the operator matches fields to meshes with corresponding labels. If a mesh label doesn't exist in `coordinates`, it's added to the output structure.

<a id="input_200"></a>
### use_quadratic_elements (Pin 200)

- **Required:** No
- **Expected type(s):** [`bool`](../../core-concepts/dpf-types.md#standard-types)

Controls whether quadratic (second-order) nodes are included in the element search and coordinate transformation.

**Default**: `false` (uses only corner nodes)
**When `true`**: Includes midside nodes in the element geometry, improving accuracy for curved elements and quadratic shape functions at the price of lower performance.



## Outputs

This table lists the output pins for this operator.
Output pins provide the results of the operator's computation and can be connected to inputs of other operators or retrieved for further processing.
Each output is detailed in the sections that follow the table.

| Pin number |  Name | Expected type(s) |
|-------|------|------------------|
|  **0**| [reduced_coordinates](#output_0) |[`fields_container`](../../core-concepts/dpf-types.md#fields-container) |
|  **1**| [element_ids](#output_1) |[`scopings_container`](../../core-concepts/dpf-types.md#scopings-container) |


<a id="output_0"></a>
### reduced_coordinates (Pin 0)

- **Expected type(s):** [`fields_container`](../../core-concepts/dpf-types.md#fields-container)

Reduced (natural/parametric) coordinates $\boldsymbol{\xi} = (\xi, \eta, \zeta)$ for each query point in its containing element's reference frame.

Each output field contains 3D vectors representing the local coordinates within the reference element. The range of valid reduced coordinates depends on element type:
- **Hexahedra/Quadrilaterals**: $-1 \leq \xi, \eta, \zeta \leq 1$
- **Tetrahedra/Triangles**: $0 \leq \xi, \eta, \zeta$ and $\xi + \eta + \zeta \leq 1$

The output structure (labels, field count) matches the input coordinates structure. The number of entities in each output field may be less than the number of input coordinates: query points that do not lie within or sufficiently close to any element in the mesh are omitted from the output. Points near element boundaries are included with permissive tolerance.

<a id="output_1"></a>
### element_ids (Pin 1)

- **Expected type(s):** [`scopings_container`](../../core-concepts/dpf-types.md#scopings-container)

Element IDs corresponding to each successfully located query coordinate, identifying the element associated with each point.

The scoping container structure matches the input coordinates structure. Each scoping is parallel to the corresponding field in `reduced_coordinates`: `element_ids[i]` is the element containing the point whose parametric location is `reduced_coordinates[i]`.

These element IDs are required by the `on_reduced_coordinates` operator to perform the actual field interpolation.


## Configurations

This operator supports [configuration options](../../core-concepts/operator-configurations.md) that modify its behavior.


### [mutex](../../core-concepts/operator-configurations.md#mutex)

- **Expected type(s):** [`bool`](../../core-concepts/dpf-types.md#standard-types)
- **Default value:** false

If this option is set to true, the shared memory is prevented from being simultaneously accessed by multiple threads.



## Scripting

This operator can be accessed through scripting interfaces using these identifiers.

 **Category**: mapping

 **Plugin**: core

 **Scripting name**: find_reduced_coordinates

 **Full name**: mapping.find_reduced_coordinates

 **Internal name**: find_reduced_coordinates

 **License**: None

## Examples

These examples demonstrate how to use this operator in different programming environments.
Each example shows how to instantiate the operator, connect the required inputs, and retrieve the output.

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