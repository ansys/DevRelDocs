---
category: mapping
plugin: core
license: None
---

# mapping:on coordinates

**Version: 0.0.0**

## Description


Evaluates field values at arbitrary physical coordinates by performing element search and shape function interpolation in a single optimized operation. Coordinates for which no element can be found are omitted from the output.

##### Mathematical formulation

For each query point $\mathbf{x}_q$ and field $\mathbf{u}(\mathbf{x})$, this operator computes the interpolated value:

$$\mathbf{u}(\mathbf{x}_q) = \sum_{i=1}^{N_{nodes}} N_i(\boldsymbol{\xi}_q) \cdot \mathbf{u}_i$$

where:
- $\mathbf{x}_q$ is the physical coordinate where interpolation is requested
- $\boldsymbol{\xi}_q$ are the reduced coordinates of $\mathbf{x}_q$ within its containing element (computed internally)
- $N_i(\boldsymbol{\xi})$ are the element shape functions evaluated at $\boldsymbol{\xi}_q$
- $\mathbf{u}_i$ are the field values at element nodes

##### Comparison with two-step workflow

This operator provides a convenient all-in-one solution for field interpolation. For more control over the interpolation process, use the two-step workflow:
1. `find_reduced_coordinates` - locates the element containing each coordinate and returns its parametric coordinates
2. `on_reduced_coordinates` - interpolates field values at those parametric coordinates

Key differences from the two-step approach:
- **Tolerance**: Uses a progressively relaxed tolerance when no element is found, vs. fixed tolerance in `find_reduced_coordinates`
- **Performance**: More efficient when intermediate reduced coordinates are not needed

Both approaches omit output entries for coordinates where no element can be found.

##### Field location handling

- **Nodal fields**: Interpolates using nodal values and standard shape functions. Automatically detects whether quadratic (midside) nodes have data.
- **Elemental fields**: Uses element-averaged values with shape function evaluation at the query coordinates.
- **Shell layers**: Interpolates through shell thickness layers independently, preserving layer structure in output.

##### Output structure

The output fields container preserves the label structure of input fields and coordinates. When both inputs have labels (e.g., time steps), outputs are generated for all label combinations. Output fields have nodal location with scoping corresponding to successfully interpolated coordinates.


## Inputs

This table lists the input pins for this operator. Input pins define the data that the operator requires to perform its operation.
Some inputs are required, while others are optional and provide additional configuration.
Each parameter is detailed in the sections that follow the table.

| Pin number | Name | Status | Expected type(s) |
|------------|------|--------|------------------|
| <strong>0</strong> | [fields_container](#input_0) |  <span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;" title="This pin is required">Required</span>|[`fields_container`](../../core-concepts/dpf-types.md#fields-container) |
| <strong>1</strong> | [coordinates](#input_1) |  <span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;" title="This pin is required">Required</span>|[`field`](../../core-concepts/dpf-types.md#field), [`fields_container`](../../core-concepts/dpf-types.md#fields-container), [`abstract_meshed_region`](../../core-concepts/dpf-types.md#meshed-region), [`meshes_container`](../../core-concepts/dpf-types.md#meshes-container) |
| <strong>2</strong> | [create_support](#input_2) |  |[`bool`](../../core-concepts/dpf-types.md#standard-types) |
| <strong>3</strong> | [mapping_on_scoping](#input_3) |  |[`bool`](../../core-concepts/dpf-types.md#standard-types) |
| <strong>5</strong> | [tolerance](#input_5) |  |[`double`](../../core-concepts/dpf-types.md#standard-types) |
| <strong>7</strong> | [mesh](#input_7) |  |[`abstract_meshed_region`](../../core-concepts/dpf-types.md#meshed-region), [`meshes_container`](../../core-concepts/dpf-types.md#meshes-container) |
| <strong>200</strong> | [use_quadratic_elements](#input_200) |  |[`bool`](../../core-concepts/dpf-types.md#standard-types) |


<a id="input_0"></a>
### fields_container (Pin 0)

- **Required:** Yes
- **Expected type(s):** [`fields_container`](../../core-concepts/dpf-types.md#fields-container)

Fields container with field values to interpolate. Fields can have nodal or elemental location.

**Nodal fields**: Field values defined at mesh nodes. Interpolation uses shape functions with nodal values.
**Elemental fields**: Field values defined at element centers. Interpolation evaluates shape functions at query coordinates using element-averaged data.

The fields container can have labels (e.g., time steps, frequencies) that will be matched with coordinate and mesh labels to determine which combinations to process.

<a id="input_1"></a>
### coordinates (Pin 1)

- **Required:** Yes
- **Expected type(s):** [`field`](../../core-concepts/dpf-types.md#field), [`fields_container`](../../core-concepts/dpf-types.md#fields-container), [`abstract_meshed_region`](../../core-concepts/dpf-types.md#meshed-region), [`meshes_container`](../../core-concepts/dpf-types.md#meshes-container)

Physical (global) coordinates where field values should be evaluated. Each coordinate is a 3D vector ($x$, $y$, $z$).

**Supported input types**:
- **Field**: Single field containing coordinate vectors. The field's support mesh defines the search domain if the `mesh` pin is not provided.
- **FieldsContainer**: Multiple coordinate fields, typically organized by time step or spatial region. Fields are processed independently, and outputs are generated for matching labels.
- **MeshedRegion**: Node coordinates of the mesh are used as evaluation points.
- **MeshesContainer**: Multiple meshes whose node coordinates are used as evaluation points.

<a id="input_2"></a>
### create_support (Pin 2)

- **Required:** No
- **Expected type(s):** [`bool`](../../core-concepts/dpf-types.md#standard-types)

Controls whether output fields have a mesh support consisting of point elements at the evaluation coordinates.

**Default**: `false` (no support mesh created)
**When `true`**: Creates a point mesh support with one point element per evaluation coordinate, enabling visualization of interpolated results as a point cloud.

<a id="input_3"></a>
### mapping_on_scoping (Pin 3)

- **Required:** No
- **Expected type(s):** [`bool`](../../core-concepts/dpf-types.md#standard-types)

Optimizes element search by restricting the spatial domain to the scoping of the first input field.

**Default**: `false` (searches entire mesh)
**When `true`**: Restricts the search to elements or nodes in the first field's scoping, improving performance when interpolating fields with limited spatial extent (e.g., results only on a subset of the mesh). This optimization only takes effect when a single coordinate set and a single mesh are provided; it has no effect in multi-mesh or multi-coordinate scenarios.

This optimization is most effective when coordinates and fields cover the same spatial region of interest.

<a id="input_5"></a>
### tolerance (Pin 5)

- **Required:** No
- **Expected type(s):** [`double`](../../core-concepts/dpf-types.md#standard-types)

Tolerance used when locating query coordinates within elements.

**Default**: $5 \times 10^{-5}$

Lower values provide more accurate coordinate location but may fail for points near element boundaries. If no element is found at the specified tolerance, the tolerance is progressively relaxed up to a maximum of $0.1$.

<a id="input_7"></a>
### mesh (Pin 7)

- **Required:** No
- **Expected type(s):** [`abstract_meshed_region`](../../core-concepts/dpf-types.md#meshed-region), [`meshes_container`](../../core-concepts/dpf-types.md#meshes-container)

Mesh(es) defining the finite element domain for interpolation.

If not provided, the mesh is automatically extracted from the input fields' supports. When using a `MeshesContainer` with multiple meshes, label matching is applied: meshes and fields with corresponding labels are paired for interpolation.

**Label matching**: When fields container, coordinates, and meshes all have labels, the operator processes all matching label combinations (e.g., interpolating field at time $t_1$ using mesh at time $t_1$ and coordinates at spatial location $s_1$).

<a id="input_200"></a>
### use_quadratic_elements (Pin 200)

- **Required:** No
- **Expected type(s):** [`bool`](../../core-concepts/dpf-types.md#standard-types)

Controls whether quadratic (second-order) nodes are included in element search and interpolation.

**Default**: `false` (uses only corner nodes)
**When `true`**: Includes midside nodes in element geometry and field interpolation when available, improving accuracy for curved elements and quadratic shape functions.

The operator automatically detects whether field data exists on quadratic nodes. If the mesh has quadratic elements but the field only has corner node data, interpolation uses corner nodes only.


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

Interpolated field values at the requested coordinates.

Each output field contains the interpolated field values with:
- **Location**: Nodal (regardless of input field location)
- **Scoping**: IDs correspond to successfully interpolated coordinates. Coordinates where no containing element was found are omitted.
- **Components**: Same as input fields (scalar, vector, tensor, etc.)
- **Shell layers**: Preserved from input fields when present

The output container structure reflects the combined labels from input fields and coordinates. For example, if fields have time labels and coordinates have spatial labels, outputs are generated for all time-space combinations.


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

 **Scripting name**: on_coordinates

 **Full name**: mapping.on_coordinates

 **Internal name**: mapping

 **License**: None

## Examples

These examples demonstrate how to use this operator in different programming environments.
Each example shows how to instantiate the operator, connect the required inputs, and retrieve the output.

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