---
category: mapping
plugin: Ans.Dpf.MultiphysicsMapper
license: any_dpf_supported_increments
---

# mapping:prepare mechanical native mapping with shape functions for surfaces

**Version: 0.0.0**

## Description


Prepares field data mapping from source mesh to target mesh using **finite element shape functions** for **surface
elements** (shells and membranes). This operator computes interpolation weights by locating target points
within source surface elements and evaluating isoparametric shape functions at the reduced coordinates. This operator
must be used in conjunction with `apply_mechanical_native_mapping`.

##### Shape function interpolation for surfaces

For surface elements, the field value at any point $\mathbf{x}$ within an element is interpolated using:

$$
u(\mathbf{x}) = \sum_{i=1}^{N_{\text{nodes}}} N_i(\xi, \eta) \cdot u_i
$$

where:
- $N_i(\xi, \eta)$ are the 2D isoparametric shape functions
- $(\xi, \eta)$ are the reduced (natural) coordinates in the reference element $[-1, 1]^2$
- $u_i$ are the nodal field values
- $N_{\text{nodes}}$ is the number of nodes per element (3, 4, 6, 8, etc.)

##### Comparison with volume shape functions

- **Reduced coordinate dimension**: 2D $(\xi, \eta)$ vs 3D $(\xi, \eta, \zeta)$ for volume elements
- **Target input**: surface operator requires a **meshed_region** target; volume operator also accepts a field
- **Additional proximity controls**: surface operator supports normal distance checking (pins 15-16) and a
  pinball region (pins 17-20), which are not available for volumes

**Ansys Mechanical equivalent**: Weighting = *Shape Function*, Transfer Type = *Surface*.
Note: this mode only supports triangle and quadrilateral source elements.

For further details on the algorithm and its settings, see the Ansys Mechanical help page on
[Data Transfer Mesh Mapping](https://ansyshelp.ansys.com/public/account/secured?returnurl=/Views/Secured/corp/v271/en/wb_sim/ds_appen_data_transfer.html).

## Inputs

This table lists the input pins for this operator. Input pins define the data that the operator requires to perform its operation.
Some inputs are required, while others are optional and provide additional configuration.
Each parameter is detailed in the sections that follow the table.

| Pin number | Name | Status | Expected type(s) |
|------------|------|--------|------------------|
| <strong>0</strong> | [source_mesh](#input_0) |  <span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;" title="This pin is required">Required</span>|[`abstract_meshed_region`](../../core-concepts/dpf-types.md#meshed-region) |
| <strong>1</strong> | [target_mesh](#input_1) |  <span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;" title="This pin is required">Required</span>|[`abstract_meshed_region`](../../core-concepts/dpf-types.md#meshed-region), [`field`](../../core-concepts/dpf-types.md#field) |
| <strong>3</strong> | [target_mesh_scoping](#input_3) |  |[`scoping`](../../core-concepts/dpf-types.md#scoping) |
| <strong>4</strong> | [unit](#input_4) |  |[`string`](../../core-concepts/dpf-types.md#standard-types) |
| <strong>5</strong> | [location](#input_5) |  <span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;" title="This pin is required">Required</span>|[`string`](../../core-concepts/dpf-types.md#standard-types) |
| <strong>6</strong> | [dimensionality](#input_6) |  <span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;" title="This pin is required">Required</span>|[`int32`](../../core-concepts/dpf-types.md#standard-types) |
| <strong>7</strong> | [e_shell_layers](#input_7) |  |[`int32`](../../core-concepts/dpf-types.md#standard-types) |
| <strong>8</strong> | [html_report_path](#input_8) |  |[`string`](../../core-concepts/dpf-types.md#standard-types) |
| <strong>9</strong> | [threads_user_requested](#input_9) |  |[`int32`](../../core-concepts/dpf-types.md#standard-types) |
| <strong>10</strong> | [scale](#input_10) |  |[`int32`](../../core-concepts/dpf-types.md#standard-types) |
| <strong>11</strong> | [edge_tolerance](#input_11) |  |[`double`](../../core-concepts/dpf-types.md#standard-types) |
| <strong>12</strong> | [conservative](#input_12) |  |[`bool`](../../core-concepts/dpf-types.md#standard-types) |
| <strong>13</strong> | [ignore_outside_nodes](#input_13) |  |[`bool`](../../core-concepts/dpf-types.md#standard-types) |
| <strong>14</strong> | [key](#input_14) |  |[`string`](../../core-concepts/dpf-types.md#standard-types) |
| <strong>15</strong> | [normal_distance_check](#input_15) |  |[`bool`](../../core-concepts/dpf-types.md#standard-types) |
| <strong>16</strong> | [normal_tolerance](#input_16) |  |[`double`](../../core-concepts/dpf-types.md#standard-types) |
| <strong>17</strong> | [pinball_control](#input_17) |  |[`bool`](../../core-concepts/dpf-types.md#standard-types) |
| <strong>18</strong> | [pinball_key](#input_18) |  |[`string`](../../core-concepts/dpf-types.md#standard-types) |
| <strong>19</strong> | [exclude_elements_outside_pinball](#input_19) |  |[`bool`](../../core-concepts/dpf-types.md#standard-types) |
| <strong>20</strong> | [pinball_value](#input_20) |  |[`double`](../../core-concepts/dpf-types.md#standard-types) |
| <strong>100</strong> | [is_element_centroidal_data_mapping](#input_100) |  |[`bool`](../../core-concepts/dpf-types.md#standard-types) |
| <strong>101</strong> | [projection_options](#input_101) |  |[`data_tree`](../../core-concepts/dpf-types.md#data-tree) |
| <strong>102</strong> | [dynamic_coordinate_system](#input_102) |  |[`data_tree`](../../core-concepts/dpf-types.md#data-tree) |
| <strong>103</strong> | [source_dimension](#input_103) |  |[`string`](../../core-concepts/dpf-types.md#standard-types) |
| <strong>104</strong> | [wb_external_data_info](#input_104) |  |[`data_tree`](../../core-concepts/dpf-types.md#data-tree) |
| <strong>105</strong> | [target_dimension](#input_105) |  |[`string`](../../core-concepts/dpf-types.md#standard-types) |


<a id="input_0"></a>
### source_mesh (Pin 0)

- **Required:** Yes
- **Expected type(s):** [`abstract_meshed_region`](../../core-concepts/dpf-types.md#meshed-region)

Source mesh

<a id="input_1"></a>
### target_mesh (Pin 1)

- **Required:** Yes
- **Expected type(s):** [`abstract_meshed_region`](../../core-concepts/dpf-types.md#meshed-region), [`field`](../../core-concepts/dpf-types.md#field)

Target mesh/coordinates

<a id="input_3"></a>
### target_mesh_scoping (Pin 3)

- **Required:** No
- **Expected type(s):** [`scoping`](../../core-concepts/dpf-types.md#scoping)

Target mesh scoping. If used, ensure to give only the elements where results are expected into source mesh input to have optimized computation.

<a id="input_4"></a>
### unit (Pin 4)

- **Required:** No
- **Expected type(s):** [`string`](../../core-concepts/dpf-types.md#standard-types)

Unit of the result to map

<a id="input_5"></a>
### location (Pin 5)

- **Required:** Yes
- **Expected type(s):** [`string`](../../core-concepts/dpf-types.md#standard-types)

Location of the result to map

<a id="input_6"></a>
### dimensionality (Pin 6)

- **Required:** Yes
- **Expected type(s):** [`int32`](../../core-concepts/dpf-types.md#standard-types)

Dimensionality of the result to map (for example it will be 3 for a displacement along (x, y, z) axes).

<a id="input_7"></a>
### e_shell_layers (Pin 7)

- **Required:** No
- **Expected type(s):** [`int32`](../../core-concepts/dpf-types.md#standard-types)

EShellLayers enum value if field has shell layers

<a id="input_8"></a>
### html_report_path (Pin 8)

- **Required:** No
- **Expected type(s):** [`string`](../../core-concepts/dpf-types.md#standard-types)

Path for html report (for example 'my_disk/my_report.html'). If set, an html report will be generated and exported to the html file. If not set, nothing will be generated.

<a id="input_9"></a>
### threads_user_requested (Pin 9)

- **Required:** No
- **Expected type(s):** [`int32`](../../core-concepts/dpf-types.md#standard-types)

Number of threads to be used to parallelize apply operations.

<a id="input_10"></a>
### scale (Pin 10)

- **Required:** No
- **Expected type(s):** [`int32`](../../core-concepts/dpf-types.md#standard-types)

Spatial bucketing scale factor controlling the grid resolution used to partition the source mesh for efficient nearest-element searches.
Higher values create finer grids, improving search for dense meshes but increasing memory usage.
Default: 50.

<a id="input_11"></a>
### edge_tolerance (Pin 11)

- **Required:** No
- **Expected type(s):** [`double`](../../core-concepts/dpf-types.md#standard-types)

Tolerance for accepting target points near element boundaries in reduced coordinate space.
Extends the valid reduced coordinate range from $[-1, 1]$ to $[-1-\epsilon, 1+\epsilon]$
where $\epsilon$ is this parameter.
Default: 0.02 (2% extension).
Larger values increase robustness but may reduce accuracy for boundary points.

<a id="input_12"></a>
### conservative (Pin 12)

- **Required:** No
- **Expected type(s):** [`bool`](../../core-concepts/dpf-types.md#standard-types)

Enable conservative (integral-preserving) mapping. Default: false.
When true, the mapping preserves the surface integral of the field across the transfer:
$$\int_{\Omega_{\text{target}}} u \, dA = \int_{\Omega_{\text{source}}} u \, dA$$
Requires the target input (pin 1) to be a **meshed_region** with full element connectivity;
a field-only target (coordinates without topology) is not supported in conservative mode.

<a id="input_13"></a>
### ignore_outside_nodes (Pin 13)

- **Required:** No
- **Expected type(s):** [`bool`](../../core-concepts/dpf-types.md#standard-types)

Controls the fallback behavior for target nodes not found within any source element after applying
tolerances. Default: false.
- **false**: Each unmapped node is assigned weights from the nearest source element node (nearest-node
  fallback). The node is recorded in the unmapped-nodes diagnostic output.
- **true**: Unmapped nodes are excluded from the mapping entirely (no weight assigned) and recorded
  in the unmapped-nodes diagnostic output.

<a id="input_14"></a>
### key (Pin 14)

- **Required:** No
- **Expected type(s):** [`string`](../../core-concepts/dpf-types.md#standard-types)

Tolerance interpretation mode for the `edge_tolerance` parameter. Options:
- **'relative'** (default): Edge tolerance is scaled relative to element characteristic length;
  adapts automatically to mesh refinement
- **'absolute'**: Edge tolerance is a direct distance value in mesh length units;
  provides uniform tolerance across all elements

<a id="input_15"></a>
### normal_distance_check (Pin 15)

- **Required:** No
- **Expected type(s):** [`bool`](../../core-concepts/dpf-types.md#standard-types)

Enable checking of normal distance between target points and source surface elements.
When true, target points are only mapped if they lie within `normal_tolerance` distance from the source surface
along the surface normal direction. Default: false.
**Purpose**: Ensures target and source surfaces are approximately parallel or aligned. Prevents mapping between
surfaces facing different directions.
**Use cases**:
- Shell-to-shell mapping with known alignment
- Preventing cross-surface mapping in complex geometries
- Quality control for surface proximity

<a id="input_16"></a>
### normal_tolerance (Pin 16)

- **Required:** No
- **Expected type(s):** [`double`](../../core-concepts/dpf-types.md#standard-types)

Maximum allowable distance (in mesh length units) between target point and source surface
measured along the surface normal direction. Only active when `normal_distance_check` is true. Default: 1e-6.
**Interpretation**: Target points farther than this threshold in the normal direction are rejected.
**Recommendation**: Set based on expected surface separation (e.g., 0.01 for 1% of characteristic length).

<a id="input_17"></a>
### pinball_control (Pin 17)

- **Required:** No
- **Expected type(s):** [`bool`](../../core-concepts/dpf-types.md#standard-types)

Enable pinball region constraint. When true, a bounding region of radius `pinball_value` is
created around each target node. This serves two purposes:
- **Expand the bucket search**: buckets overlapping the region are included when searching for the matching
  source element, improving accuracy when source and target meshes are offset (e.g., shell-solid submodeling).
- **Gap-based exclusion**: source elements whose projection gap (distance from target point to its projection
  on the element) exceeds `pinball_value` are excluded from mapping.

Default: false.

<a id="input_18"></a>
### pinball_key (Pin 18)

- **Required:** No
- **Expected type(s):** [`string`](../../core-concepts/dpf-types.md#standard-types)

Sizing mode for pinball region thickness. Options:
- **'absolute'** (default): `pinball_value` is direct distance in mesh length units
- **'relative'**: `pinball_value` is scaled by element characteristic length

Only relevant when `pinball_control` is true.
Relative mode adapts pinball to local mesh refinement; absolute provides uniform thickness.

<a id="input_19"></a>
### exclude_elements_outside_pinball (Pin 19)

- **Required:** No
- **Expected type(s):** [`bool`](../../core-concepts/dpf-types.md#standard-types)

When true and `pinball_control` is enabled, source elements entirely outside the pinball
region (centered at target points) are excluded from consideration. This can improve performance by reducing the
number of candidate elements checked. Default: false.
**Performance trade-off**: Adds cost of element-pinball intersection tests but reduces interpolation candidates.
Beneficial when source mesh is much larger than target region of interest.

<a id="input_20"></a>
### pinball_value (Pin 20)

- **Required:** No
- **Expected type(s):** [`double`](../../core-concepts/dpf-types.md#standard-types)

Thickness of the pinball search region around the source surface. Interpretation depends
on `pinball_key`:
- **Absolute mode**: Direct distance value (e.g., 0.5 for 0.5 length units)
- **Relative mode**: Multiple of element characteristic length (e.g., 0.5 for half element size)

Default: 0.0 (no pinball region).
Only active when `pinball_control` is true.

<a id="input_100"></a>
### is_element_centroidal_data_mapping (Pin 100)

- **Required:** No
- **Expected type(s):** [`bool`](../../core-concepts/dpf-types.md#standard-types)

Default is 'false'. Set to 'true' if the source elemental data is representing as element centroidal nodal data

<a id="input_101"></a>
### projection_options (Pin 101)

- **Required:** No
- **Expected type(s):** [`data_tree`](../../core-concepts/dpf-types.md#data-tree)

Default is empty. This data tree contains 2D projection options for mapping 2D to 3D

<a id="input_102"></a>
### dynamic_coordinate_system (Pin 102)

- **Required:** No
- **Expected type(s):** [`data_tree`](../../core-concepts/dpf-types.md#data-tree)

Default is empty. This data tree contains the dynamic coordinate system for performing rigid body transformation on the source mesh

<a id="input_103"></a>
### source_dimension (Pin 103)

- **Required:** No
- **Expected type(s):** [`string`](../../core-concepts/dpf-types.md#standard-types)

Default is empty string. The string contains either "2D" or "3D" which specifies the source dimension

<a id="input_104"></a>
### wb_external_data_info (Pin 104)

- **Required:** No
- **Expected type(s):** [`data_tree`](../../core-concepts/dpf-types.md#data-tree)

Default is empty. This data tree contains the Rigid & Analytical transformations specified in the workbench external data system

<a id="input_105"></a>
### target_dimension (Pin 105)

- **Required:** No
- **Expected type(s):** [`string`](../../core-concepts/dpf-types.md#standard-types)

Default is empty string. The string contains either "2D" or "3D" which specifies the target dimension


## Outputs

This table lists the output pins for this operator.
Output pins provide the results of the operator's computation and can be connected to inputs of other operators or retrieved for further processing.
Each output is detailed in the sections that follow the table.

| Pin number |  Name | Expected type(s) |
|-------|------|------------------|
|  **0**| [source_mesh](#output_0) |[`abstract_meshed_region`](../../core-concepts/dpf-types.md#meshed-region) |
|  **1**| [source_mesh_id](#output_1) |[`int32`](../../core-concepts/dpf-types.md#standard-types) |
|  **2**| [target_mesh](#output_2) |[`abstract_meshed_region`](../../core-concepts/dpf-types.md#meshed-region) |
|  **3**| [target_mesh_id](#output_3) |[`int32`](../../core-concepts/dpf-types.md#standard-types) |
|  **4**| [mapping_manager_data](#output_4) | |
|  **6**| [target_scoping](#output_6) |[`scoping`](../../core-concepts/dpf-types.md#scoping) |
|  **7**| [prepare_output](#output_7) | |


<a id="output_0"></a>
### source_mesh (Pin 0)

- **Expected type(s):** [`abstract_meshed_region`](../../core-concepts/dpf-types.md#meshed-region)

Source mesh

<a id="output_1"></a>
### source_mesh_id (Pin 1)

- **Expected type(s):** [`int32`](../../core-concepts/dpf-types.md#standard-types)

Source mesh id

<a id="output_2"></a>
### target_mesh (Pin 2)

- **Expected type(s):** [`abstract_meshed_region`](../../core-concepts/dpf-types.md#meshed-region)

Target mesh

<a id="output_3"></a>
### target_mesh_id (Pin 3)

- **Expected type(s):** [`int32`](../../core-concepts/dpf-types.md#standard-types)

Target mesh id

<a id="output_4"></a>
### mapping_manager_data (Pin 4)

- **Expected type(s):** 



<a id="output_6"></a>
### target_scoping (Pin 6)

- **Expected type(s):** [`scoping`](../../core-concepts/dpf-types.md#scoping)

Target scoping

<a id="output_7"></a>
### prepare_output (Pin 7)

- **Expected type(s):** 

A Map containing the outputs of the mapping as a key value pair


## Configurations

This operator supports [configuration options](../../core-concepts/operator-configurations.md) that modify its behavior.


### [mutex](../../core-concepts/operator-configurations.md#mutex)

- **Expected type(s):** [`bool`](../../core-concepts/dpf-types.md#standard-types)
- **Default value:** false

If this option is set to true, the shared memory is prevented from being simultaneously accessed by multiple threads.



## Scripting

This operator can be accessed through scripting interfaces using these identifiers.

 **Category**: mapping

 **Plugin**: Ans.Dpf.MultiphysicsMapper

 **Scripting name**: prepare_mechanical_native_mapping_shape_functions_for_surfaces

 **Full name**: mapping.prepare_mechanical_native_mapping_shape_functions_for_surfaces

 **Internal name**: mechanical_native_mapping::prepare::shape_function_surfaces

 **License**: any_dpf_supported_increments

## Examples

These examples demonstrate how to use this operator in different programming environments.
Each example shows how to instantiate the operator, connect the required inputs, and retrieve the output.

<details>
<summary>C++</summary>

```cpp
#include "dpf_api.h"

ansys::dpf::Operator op("mechanical_native_mapping::prepare::shape_function_surfaces"); // operator instantiation
op.connect(0, my_source_mesh);
op.connect(1, my_target_mesh);
op.connect(3, my_target_mesh_scoping);
op.connect(4, my_unit);
op.connect(5, my_location);
op.connect(6, my_dimensionality);
op.connect(7, my_e_shell_layers);
op.connect(8, my_html_report_path);
op.connect(9, my_threads_user_requested);
op.connect(10, my_scale);
op.connect(11, my_edge_tolerance);
op.connect(12, my_conservative);
op.connect(13, my_ignore_outside_nodes);
op.connect(14, my_key);
op.connect(15, my_normal_distance_check);
op.connect(16, my_normal_tolerance);
op.connect(17, my_pinball_control);
op.connect(18, my_pinball_key);
op.connect(19, my_exclude_elements_outside_pinball);
op.connect(20, my_pinball_value);
op.connect(100, my_is_element_centroidal_data_mapping);
op.connect(101, my_projection_options);
op.connect(102, my_dynamic_coordinate_system);
op.connect(103, my_source_dimension);
op.connect(104, my_wb_external_data_info);
op.connect(105, my_target_dimension);
ansys::dpf::MeshedRegion my_source_mesh = op.getOutput<ansys::dpf::MeshedRegion>(0);
int my_source_mesh_id = op.getOutput<int>(1);
ansys::dpf::MeshedRegion my_target_mesh = op.getOutput<ansys::dpf::MeshedRegion>(2);
int my_target_mesh_id = op.getOutput<int>(3);
 my_mapping_manager_data = op.getOutput<>(4);
ansys::dpf::Scoping my_target_scoping = op.getOutput<ansys::dpf::Scoping>(6);
 my_prepare_output = op.getOutput<>(7);
```
</details>

<details>
<summary>CPython</summary>

```python
import ansys.dpf.core as dpf

op = dpf.operators.mapping.prepare_mechanical_native_mapping_shape_functions_for_surfaces() # operator instantiation
op.inputs.source_mesh.connect(my_source_mesh)
op.inputs.target_mesh.connect(my_target_mesh)
op.inputs.target_mesh_scoping.connect(my_target_mesh_scoping)
op.inputs.unit.connect(my_unit)
op.inputs.location.connect(my_location)
op.inputs.dimensionality.connect(my_dimensionality)
op.inputs.e_shell_layers.connect(my_e_shell_layers)
op.inputs.html_report_path.connect(my_html_report_path)
op.inputs.threads_user_requested.connect(my_threads_user_requested)
op.inputs.scale.connect(my_scale)
op.inputs.edge_tolerance.connect(my_edge_tolerance)
op.inputs.conservative.connect(my_conservative)
op.inputs.ignore_outside_nodes.connect(my_ignore_outside_nodes)
op.inputs.key.connect(my_key)
op.inputs.normal_distance_check.connect(my_normal_distance_check)
op.inputs.normal_tolerance.connect(my_normal_tolerance)
op.inputs.pinball_control.connect(my_pinball_control)
op.inputs.pinball_key.connect(my_pinball_key)
op.inputs.exclude_elements_outside_pinball.connect(my_exclude_elements_outside_pinball)
op.inputs.pinball_value.connect(my_pinball_value)
op.inputs.is_element_centroidal_data_mapping.connect(my_is_element_centroidal_data_mapping)
op.inputs.projection_options.connect(my_projection_options)
op.inputs.dynamic_coordinate_system.connect(my_dynamic_coordinate_system)
op.inputs.source_dimension.connect(my_source_dimension)
op.inputs.wb_external_data_info.connect(my_wb_external_data_info)
op.inputs.target_dimension.connect(my_target_dimension)
my_source_mesh = op.outputs.source_mesh()
my_source_mesh_id = op.outputs.source_mesh_id()
my_target_mesh = op.outputs.target_mesh()
my_target_mesh_id = op.outputs.target_mesh_id()
my_mapping_manager_data = op.outputs.mapping_manager_data()
my_target_scoping = op.outputs.target_scoping()
my_prepare_output = op.outputs.prepare_output()
```
</details>

<details>
<summary>IPython</summary>

```python
import mech_dpf
import Ans.DataProcessing as dpf

op = dpf.operators.mapping.prepare_mechanical_native_mapping_shape_functions_for_surfaces() # operator instantiation
op.inputs.source_mesh.Connect(my_source_mesh)
op.inputs.target_mesh.Connect(my_target_mesh)
op.inputs.target_mesh_scoping.Connect(my_target_mesh_scoping)
op.inputs.unit.Connect(my_unit)
op.inputs.location.Connect(my_location)
op.inputs.dimensionality.Connect(my_dimensionality)
op.inputs.e_shell_layers.Connect(my_e_shell_layers)
op.inputs.html_report_path.Connect(my_html_report_path)
op.inputs.threads_user_requested.Connect(my_threads_user_requested)
op.inputs.scale.Connect(my_scale)
op.inputs.edge_tolerance.Connect(my_edge_tolerance)
op.inputs.conservative.Connect(my_conservative)
op.inputs.ignore_outside_nodes.Connect(my_ignore_outside_nodes)
op.inputs.key.Connect(my_key)
op.inputs.normal_distance_check.Connect(my_normal_distance_check)
op.inputs.normal_tolerance.Connect(my_normal_tolerance)
op.inputs.pinball_control.Connect(my_pinball_control)
op.inputs.pinball_key.Connect(my_pinball_key)
op.inputs.exclude_elements_outside_pinball.Connect(my_exclude_elements_outside_pinball)
op.inputs.pinball_value.Connect(my_pinball_value)
op.inputs.is_element_centroidal_data_mapping.Connect(my_is_element_centroidal_data_mapping)
op.inputs.projection_options.Connect(my_projection_options)
op.inputs.dynamic_coordinate_system.Connect(my_dynamic_coordinate_system)
op.inputs.source_dimension.Connect(my_source_dimension)
op.inputs.wb_external_data_info.Connect(my_wb_external_data_info)
op.inputs.target_dimension.Connect(my_target_dimension)
my_source_mesh = op.outputs.source_mesh.GetData()
my_source_mesh_id = op.outputs.source_mesh_id.GetData()
my_target_mesh = op.outputs.target_mesh.GetData()
my_target_mesh_id = op.outputs.target_mesh_id.GetData()
my_mapping_manager_data = op.outputs.mapping_manager_data.GetData()
my_target_scoping = op.outputs.target_scoping.GetData()
my_prepare_output = op.outputs.prepare_output.GetData()
```
</details>
<br>

## Changelog

- Version 0.0.0: Initial release.