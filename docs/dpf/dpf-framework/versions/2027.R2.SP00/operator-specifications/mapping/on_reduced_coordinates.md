---
category: mapping
plugin: core
license: None
---

# mapping:on reduced coordinates

**Version: 0.0.0**

## Description

Evaluates field data at specified reduced coordinates within given elements using finite element shape function interpolation.

**Reduced coordinates**: Also known as natural or parametric coordinates, these are coordinates in the reference element space (typically ranging from -1 to 1 for most element types). For example, in a quadrilateral element, reduced coordinates $(\xi, \eta)$ map to physical coordinates $(x, y)$ through the element's shape functions.

**Mathematical formulation**: For a field $u$ evaluated at reduced coordinates $\boldsymbol{\xi} = (\xi_1, \xi_2, \xi_3)$ within element $e$, the interpolated value is computed as:

$$u(\boldsymbol{\xi}) = \sum_{i=1}^{N_{nodes}} N_i(\boldsymbol{\xi}) \cdot u_i$$

where $N_i(\boldsymbol{\xi})$ are the element shape functions evaluated at the reduced coordinates, $u_i$ are the field values at the element nodes, and $N_{nodes}$ is the number of nodes in the element.

**Workflow**: This operator is typically used in conjunction with the 'find_reduced_coordinates' operator:
1. **find_reduced_coordinates** - Converts physical coordinates to reduced coordinates and identifies containing elements
2. **on_reduced_coordinates** (this operator) - Interpolates field values at those reduced coordinates

**Shape functions**: The interpolation uses finite element shape functions appropriate for each element type (linear or quadratic triangles, quadrilaterals, tetrahedra, hexahedra, etc.). When `use_quadratic_elements` is enabled, mid-side node shape functions are included for higher accuracy.

**Field location handling**:
- **Nodal fields**: Interpolates using node values and shape functions
- **Elemental nodal fields**: Interpolates using values already defined at element nodes (per element)
- **Shell layers**: For shell elements with multiple layers, interpolation is performed separately for each layer

## Inputs

This table lists the input pins for this operator. Input pins define the data that the operator requires to perform its operation.
Some inputs are required, while others are optional and provide additional configuration.
Each parameter is detailed in the sections that follow the table.

| Pin number | Name | Status | Expected type(s) |
|------------|------|--------|------------------|
| <strong>0</strong> | [fields_container](#input_0) |  <span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;" title="This pin is required">Required</span>|[`fields_container`](../../core-concepts/dpf-types.md#fields-container) |
| <strong>1</strong> | [reduced_coordinates](#input_1) |  <span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;" title="This pin is required">Required</span>|[`field`](../../core-concepts/dpf-types.md#field), [`fields_container`](../../core-concepts/dpf-types.md#fields-container) |
| <strong>2</strong> | [element_ids](#input_2) |  <span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;" title="This pin is required">Required</span>|[`scopings_container`](../../core-concepts/dpf-types.md#scopings-container) |
| <strong>7</strong> | [mesh](#input_7) |  |[`abstract_meshed_region`](../../core-concepts/dpf-types.md#meshed-region), [`meshes_container`](../../core-concepts/dpf-types.md#meshes-container) |
| <strong>200</strong> | [use_quadratic_elements](#input_200) |  |[`bool`](../../core-concepts/dpf-types.md#standard-types) |


<a id="input_0"></a>
### fields_container (Pin 0)

- **Required:** Yes
- **Expected type(s):** [`fields_container`](../../core-concepts/dpf-types.md#fields-container)

Fields container with field results to interpolate. Can contain nodal or elemental nodal fields. If fields have mesh support attached, it will be used; otherwise, the `mesh` pin must be connected.

<a id="input_1"></a>
### reduced_coordinates (Pin 1)

- **Required:** Yes
- **Expected type(s):** [`field`](../../core-concepts/dpf-types.md#field), [`fields_container`](../../core-concepts/dpf-types.md#fields-container)

Reduced (natural/parametric) coordinates in reference element space where interpolation will be performed. Typically obtained from the 'find_reduced_coordinates' operator. For a 3D element, this is a 3-component vector field $(\xi, \eta, \zeta)$. Each coordinate set corresponds to a point inside an element.

<a id="input_2"></a>
### element_ids (Pin 2)

- **Required:** Yes
- **Expected type(s):** [`scopings_container`](../../core-concepts/dpf-types.md#scopings-container)

Element IDs specifying which element contains each set of reduced coordinates. Typically obtained from the 'find_reduced_coordinates' operator output (pin 1). Must correspond one-to-one with the reduced coordinates in pin 1.

<a id="input_7"></a>
### mesh (Pin 7)

- **Required:** No
- **Expected type(s):** [`abstract_meshed_region`](../../core-concepts/dpf-types.md#meshed-region), [`meshes_container`](../../core-concepts/dpf-types.md#meshes-container)

Mesh region or meshes container defining the finite element mesh. Required if input fields (pin 0) have no mesh in their support. If a meshes container with multiple meshes is provided, it should have the same label space as the reduced coordinates fields container.

<a id="input_200"></a>
### use_quadratic_elements (Pin 200)

- **Required:** No
- **Expected type(s):** [`bool`](../../core-concepts/dpf-types.md#standard-types)

If true, uses quadratic shape functions (including mid-side nodes) for quadratic elements, providing higher accuracy but lower performance. Default is false (uses linear shape functions). Only enable when field results include values at mid-side nodes.


## Outputs

This table lists the output pins for this operator.
Output pins provide the results of the operator's computation and can be connected to inputs of other operators or retrieved for further processing.
Each output is detailed in the sections that follow the table.

| Pin number |  Name | Expected type(s) |
|-------|------|------------------|
|  **0**| [fields_container](#output_0) |[`fields_container`](../../core-concepts/dpf-types.md#fields-container) |


<a id="output_0"></a>
### fields_container (Pin 0)

- **Expected type(s):** [`fields_container`](../../core-concepts/dpf-types.md#fields-container)

Fields container with interpolated field values at the specified reduced coordinates. Output fields have nodal location and preserve the component structure of input fields. Shell layer data (if present) is interpolated separately for each layer. The number of entities in each output field may be less than the number of input reduced coordinates: a coordinate is omitted if its element ID is not found in the mesh or, for nodal fields, if any of the element's nodes has no data in the field.


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

 **Scripting name**: on_reduced_coordinates

 **Full name**: mapping.on_reduced_coordinates

 **Internal name**: interpolation_operator

 **License**: None

## Examples

These examples demonstrate how to use this operator in different programming environments.
Each example shows how to instantiate the operator, connect the required inputs, and retrieve the output.

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