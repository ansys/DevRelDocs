---
uid: Ans.DataProcessing.operators.mapping.prepare_mechanical_native_mapping_shape_functions_for_volume
---

# *class* prepare_mechanical_native_mapping_shape_functions_for_volume(source_mesh: object = None, target_mesh: object = None, target_mesh_scoping: object = None, unit: object = None, location: object = None, dimensionality: object = None, e_shell_layers: object = None, html_report_path: object = None, threads_user_requested: object = None, scale: object = None, edge_tolerance: object = None, conservative: object = None, ignore_outside_nodes: object = None, is_element_centroidal_data_mapping: object = None, projection_options: object = None, dynamic_coordinate_system: object = None, source_dimension: object = None, wb_external_data_info: object = None, target_dimension: object = None, config: OperatorConfig = None)

Prepares field data mapping from source mesh to target mesh using **finite element shape functions** on volume elements (hexahedra, tetrahedra, wedges, pyramids).

Each target point is located within a source element and the field value is interpolated using 3D isoparametric shape functions at the corresponding reduced coordinates.

Note: shape functions near the apex of pyramid elements exhibit singular behaviour and may produce errors for target points close to the apex. Use this operator with `apply_mechanical_native_mapping`.

**Ansys Mechanical equivalent**: Weighting = *Shape Function*, Transfer Type = *Volumetric*.

For further details on the algorithm and its settings, see the Ansys Mechanical help page on [Data Transfer Mesh Mapping](https://ansyshelp.ansys.com/public/account/secured?returnurl=/Views/Secured/corp/v271/en/wb_sim/ds_appen_data_transfer.html).

available inputs: `source_mesh` (MeshedRegion), `target_mesh` (MeshedRegion, Field), `target_mesh_scoping` (Scoping) (optional), `unit` (string) (optional), `location` (string), `dimensionality` (Int32), `e_shell_layers` (Int32) (optional), `html_report_path` (string) (optional), `threads_user_requested` (Int32) (optional), `scale` (Int32) (optional), `edge_tolerance` (double) (optional), `conservative` (bool) (optional), `ignore_outside_nodes` (bool) (optional), `is_element_centroidal_data_mapping` (bool) (optional), `projection_options` (DataTree) (optional), `dynamic_coordinate_system` (DataTree) (optional), `source_dimension` (string) (optional), `wb_external_data_info` (DataTree) (optional), `target_dimension` (string) (optional)

available outputs: `source_mesh` (MeshedRegion), `source_mesh_id` (Int32), `target_mesh` (MeshedRegion), `target_mesh_id` (Int32), `mapping_manager_data` (Any), `target_scoping` (Scoping), `prepare_output` (Any)

**DPF Framework Reference:** [prepare_mechanical_native_mapping_shape_functions_for_volume operator specification](https://developer.ansys.com/docs/dpf-framework-2027-r1/operator-specifications/mapping/prepare_mechanical_native_mapping_shape_functions_for_volume.md)

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
* **is_element_centroidal_data_mapping**
* **projection_options**
* **dynamic_coordinate_system**
* **source_dimension**
* **wb_external_data_info**
* **target_dimension**
* **config**

**Example:**

```python
op = prepare_mechanical_native_mapping_shape_functions_for_volume()

op = prepare_mechanical_native_mapping_shape_functions_for_volume(source_mesh=my_source_mesh,target_mesh=my_target_mesh,target_mesh_scoping=my_target_mesh_scoping,unit=my_unit,location=my_location,dimensionality=my_dimensionality,e_shell_layers=my_e_shell_layers,html_report_path=my_html_report_path,threads_user_requested=my_threads_user_requested,scale=my_scale,edge_tolerance=my_edge_tolerance,conservative=my_conservative,ignore_outside_nodes=my_ignore_outside_nodes,is_element_centroidal_data_mapping=my_is_element_centroidal_data_mapping,projection_options=my_projection_options,dynamic_coordinate_system=my_dynamic_coordinate_system,source_dimension=my_source_dimension,wb_external_data_info=my_wb_external_data_info,target_dimension=my_target_dimension)
```

## Inputs

### source_mesh

Source mesh

**Type:** *LinkableInput*

### target_mesh

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
