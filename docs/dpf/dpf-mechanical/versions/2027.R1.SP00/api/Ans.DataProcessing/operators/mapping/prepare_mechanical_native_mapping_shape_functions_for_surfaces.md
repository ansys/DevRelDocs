---
uid: Ans.DataProcessing.operators.mapping.prepare_mechanical_native_mapping_shape_functions_for_surfaces
---

# *class* prepare_mechanical_native_mapping_shape_functions_for_surfaces(source_mesh: object = None, target_mesh: object = None, target_mesh_scoping: object = None, unit: object = None, location: object = None, dimensionality: object = None, e_shell_layers: object = None, html_report_path: object = None, threads_user_requested: object = None, scale: object = None, edge_tolerance: object = None, conservative: object = None, ignore_outside_nodes: object = None, key: object = None, normal_distance_check: object = None, normal_tolerance: object = None, pinball_control: object = None, pinball_key: object = None, exclude_elements_outside_pinball: object = None, pinball_value: object = None, is_element_centroidal_data_mapping: object = None, projection_options: object = None, dynamic_coordinate_system: object = None, source_dimension: object = None, wb_external_data_info: object = None, target_dimension: object = None, config: OperatorConfig = None)

Prepares field data mapping from source mesh to target mesh using **finite element shape functions** for **surface

elements** (shells and membranes). This operator computes interpolation weights by locating target points

within source surface elements and evaluating isoparametric shape functions at the reduced coordinates. This operator

must be used in conjunction with `apply_mechanical_native_mapping`.

## Shape function interpolation for surfaces

For surface elements, the field value at any point $\mathbf{x}$ within an element is interpolated using:

$$

u(\mathbf{x}) = \sum_{i=1}^{N_{\text{nodes}}} N_i(\xi, \eta) \cdot u_i

$$

where:

- $N_i(\xi, \eta)$ are the 2D isoparametric shape functions

- $(\xi, \eta)$ are the reduced (natural) coordinates in the reference element $[-1, 1]^2$

- $u_i$ are the nodal field values

- $N_{\text{nodes}}$ is the number of nodes per element (3, 4, 6, 8, etc.)

## Comparison with volume shape functions

- **Reduced coordinate dimension**: 2D $(\xi, \eta)$ vs 3D $(\xi, \eta, \zeta)$ for volume elements

- **Target input**: surface operator requires a **meshed_region** target; volume operator also accepts a field

- **Additional proximity controls**: surface operator supports normal distance checking (pins 15-16) and a

  pinball region (pins 17-20), which are not available for volumes

**Ansys Mechanical equivalent**: Weighting = *Shape Function*, Transfer Type = *Surface*.

Note: this mode only supports triangle and quadrilateral source elements.

For further details on the algorithm and its settings, see the Ansys Mechanical help page on

[Data Transfer Mesh Mapping](https://ansyshelp.ansys.com/public/account/secured?returnurl=/Views/Secured/corp/v271/en/wb_sim/ds_appen_data_transfer.html).

available inputs: `source_mesh` (MeshedRegion), `target_mesh` (MeshedRegion, Field), `target_mesh_scoping` (Scoping) (optional), `unit` (string) (optional), `location` (string), `dimensionality` (Int32), `e_shell_layers` (Int32) (optional), `html_report_path` (string) (optional), `threads_user_requested` (Int32) (optional), `scale` (Int32) (optional), `edge_tolerance` (double) (optional), `conservative` (bool) (optional), `ignore_outside_nodes` (bool) (optional), `key` (string) (optional), `normal_distance_check` (bool) (optional), `normal_tolerance` (double) (optional), `pinball_control` (bool) (optional), `pinball_key` (string) (optional), `exclude_elements_outside_pinball` (bool) (optional), `pinball_value` (double) (optional), `is_element_centroidal_data_mapping` (bool) (optional), `projection_options` (DataTree) (optional), `dynamic_coordinate_system` (DataTree) (optional), `source_dimension` (string) (optional), `wb_external_data_info` (DataTree) (optional), `target_dimension` (string) (optional)

available outputs: `source_mesh` (MeshedRegion), `source_mesh_id` (Int32), `target_mesh` (MeshedRegion), `target_mesh_id` (Int32), `mapping_manager_data` (Any), `target_scoping` (Scoping), `prepare_output` (Any)

**DPF Framework Reference:** [prepare_mechanical_native_mapping_shape_functions_for_surfaces operator specification](https://developer.ansys.com/docs/dpf-framework-2027-r1/operator-specifications/mapping/prepare_mechanical_native_mapping_shape_functions_for_surfaces.md)

**Parameters:**

* **source_mesh**
* **target_mesh**
* **target_mesh_scoping**
* **unit**
* **location**
* **dimensionality**
* **e_shell_layers**
* **html_report_path**
* **threads_user_requested**
* **scale**
* **edge_tolerance**
* **conservative**
* **ignore_outside_nodes**
* **key**
* **normal_distance_check**
* **normal_tolerance**
* **pinball_control**
* **pinball_key**
* **exclude_elements_outside_pinball**
* **pinball_value**
* **is_element_centroidal_data_mapping**
* **projection_options**
* **dynamic_coordinate_system**
* **source_dimension**
* **wb_external_data_info**
* **target_dimension**
* **config**

**Example:**

```python
op = prepare_mechanical_native_mapping_shape_functions_for_surfaces()

op = prepare_mechanical_native_mapping_shape_functions_for_surfaces(source_mesh=my_source_mesh,target_mesh=my_target_mesh,target_mesh_scoping=my_target_mesh_scoping,unit=my_unit,location=my_location,dimensionality=my_dimensionality,e_shell_layers=my_e_shell_layers,html_report_path=my_html_report_path,threads_user_requested=my_threads_user_requested,scale=my_scale,edge_tolerance=my_edge_tolerance,conservative=my_conservative,ignore_outside_nodes=my_ignore_outside_nodes,key=my_key,normal_distance_check=my_normal_distance_check,normal_tolerance=my_normal_tolerance,pinball_control=my_pinball_control,pinball_key=my_pinball_key,exclude_elements_outside_pinball=my_exclude_elements_outside_pinball,pinball_value=my_pinball_value,is_element_centroidal_data_mapping=my_is_element_centroidal_data_mapping,projection_options=my_projection_options,dynamic_coordinate_system=my_dynamic_coordinate_system,source_dimension=my_source_dimension,wb_external_data_info=my_wb_external_data_info,target_dimension=my_target_dimension)
```

## Inputs

### source_mesh

Source mesh

**Type:** *LinkableInput*

### target_mesh

Target mesh/coordinates

**Type:** *LinkableInput*

### target_mesh_scoping

Target mesh scoping. If used, ensure to give only the elements where results are expected into source mesh input to have optimized computation.

**Type:** *LinkableInput*

### unit

Unit of the result to map

**Type:** *LinkableInput*

### location

Location of the result to map

**Type:** *LinkableInput*

### dimensionality

Dimensionality of the result to map (for example it will be 3 for a displacement along (x, y, z) axes).

**Type:** *LinkableInput*

### e_shell_layers

EShellLayers enum value if field has shell layers

**Type:** *LinkableInput*

### html_report_path

Path for html report (for example 'my_disk/my_report.html'). If set, an html report will be generated and exported to the html file. If not set, nothing will be generated.

**Type:** *LinkableInput*

### threads_user_requested

Number of threads to be used to parallelize apply operations.

**Type:** *LinkableInput*

### scale

**Type:** *LinkableInput*

### edge_tolerance

**Type:** *LinkableInput*

### conservative

**Type:** *LinkableInput*

### ignore_outside_nodes

**Type:** *LinkableInput*

### key

**Type:** *LinkableInput*

### normal_distance_check

**Type:** *LinkableInput*

### normal_tolerance

**Type:** *LinkableInput*

### pinball_control

**Type:** *LinkableInput*

### pinball_key

**Type:** *LinkableInput*

### exclude_elements_outside_pinball

**Type:** *LinkableInput*

### pinball_value

**Type:** *LinkableInput*

### is_element_centroidal_data_mapping

Default is 'false'. Set to 'true' if the source elemental data is representing as element centroidal nodal data

**Type:** *LinkableInput*

### projection_options

Default is empty. This data tree contains 2D projection options for mapping 2D to 3D

**Type:** *LinkableInput*

### dynamic_coordinate_system

Default is empty. This data tree contains the dynamic coordinate system for performing rigid body transformation on the source mesh

**Type:** *LinkableInput*

### source_dimension

Default is empty string. The string contains either "2D" or "3D" which specifies the source dimension

**Type:** *LinkableInput*

### wb_external_data_info

**Type:** *LinkableInput*

### target_dimension

Default is empty string. The string contains either "2D" or "3D" which specifies the target dimension

**Type:** *LinkableInput*

## Outputs

### source_mesh

Source mesh

**Type:** *LinkableOutput*

### source_mesh_id

Source mesh id

**Type:** *LinkableOutput*

### target_mesh

Target mesh

**Type:** *LinkableOutput*

### target_mesh_id

Target mesh id

**Type:** *LinkableOutput*

### mapping_manager_data

**Type:** *LinkableOutput*

### target_scoping

Target scoping

**Type:** *LinkableOutput*

### prepare_output

A Map containing the outputs of the mapping as a key value pair

**Type:** *LinkableOutput*

## Methods

## Properties

#### *property* inputs: InputSpec

*get/set*

#### *property* outputs: OutputSpec

*get/set*

#### *property* defaultConfig: Config

*get*
