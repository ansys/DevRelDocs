---
uid: Ans.DataProcessing.operators.mapping.prepare_mechanical_native_mapping
---

# *class* prepare_mechanical_native_mapping(source_mesh: object = None, target_mesh: object = None, target_mesh_scoping: object = None, html_report_path: object = None, threads_user_requested: object = None, shape_function_volumes_mapping: object = None, shape_function_surfaces_mapping: object = None, point_cloud_mapping: object = None, kriging_mapping: object = None, is_element_centroidal_data_mapping: object = None, projection_options: object = None, dynamic_coordinate_system: object = None, source_dimension: object = None, wb_external_data_info: object = None, target_dimension: object = None, config: OperatorConfig = None)

Prepares the interpolation weights for mapping source field data from a source mesh to a target mesh.

This operator delegates to one of the dedicated algorithm operators (shape function volumes, shape function surfaces, point cloud, or kriging) depending on which DataTree input pin is provided.

At least one of the `*_mapping` algorithm DataTree inputs (pins 30-33) must be set to choose the mapping algorithm and supply its options.

This operator must be used together with the associated `apply_mechanical_native_mapping` operator.

For further details on the available algorithms and their settings, see the Ansys Mechanical help page on [Data Transfer Mesh Mapping](https://ansyshelp.ansys.com/public/account/secured?returnurl=/Views/Secured/corp/v271/en/wb_sim/ds_appen_data_transfer.html).

available inputs: `source_mesh` (MeshedRegion), `target_mesh` (MeshedRegion, Field), `target_mesh_scoping` (Scoping) (optional), `html_report_path` (string) (optional), `threads_user_requested` (Int32) (optional), `shape_function_volumes_mapping` (DataTree) (optional), `shape_function_surfaces_mapping` (DataTree) (optional), `point_cloud_mapping` (DataTree) (optional), `kriging_mapping` (DataTree) (optional), `is_element_centroidal_data_mapping` (bool) (optional), `projection_options` (DataTree) (optional), `dynamic_coordinate_system` (DataTree) (optional), `source_dimension` (string) (optional), `wb_external_data_info` (DataTree) (optional), `target_dimension` (string) (optional)

available outputs: `source_mesh` (MeshedRegion), `source_mesh_id` (Int32), `target_mesh` (MeshedRegion), `target_mesh_id` (Int32), `mapping_manager_data` (Any), `target_scoping` (Scoping), `prepare_output` (Any)

**DPF Framework Reference:** [prepare_mechanical_native_mapping operator specification](https://developer.ansys.com/docs/dpf-framework-2027-r1/operator-specifications/mapping/prepare_mechanical_native_mapping.md)

**Parameters:**

* **source_mesh**
* **target_mesh**
* **target_mesh_scoping**
* **html_report_path**
* **threads_user_requested**
* **shape_function_volumes_mapping**
* **shape_function_surfaces_mapping**
* **point_cloud_mapping**
* **kriging_mapping**
* **is_element_centroidal_data_mapping**
* **projection_options**
* **dynamic_coordinate_system**
* **source_dimension**
* **wb_external_data_info**
* **target_dimension**
* **config**

**Example:**

```python
op = prepare_mechanical_native_mapping()

op = prepare_mechanical_native_mapping(source_mesh=my_source_mesh,target_mesh=my_target_mesh,target_mesh_scoping=my_target_mesh_scoping,html_report_path=my_html_report_path,threads_user_requested=my_threads_user_requested,shape_function_volumes_mapping=my_shape_function_volumes_mapping,shape_function_surfaces_mapping=my_shape_function_surfaces_mapping,point_cloud_mapping=my_point_cloud_mapping,kriging_mapping=my_kriging_mapping,is_element_centroidal_data_mapping=my_is_element_centroidal_data_mapping,projection_options=my_projection_options,dynamic_coordinate_system=my_dynamic_coordinate_system,source_dimension=my_source_dimension,wb_external_data_info=my_wb_external_data_info,target_dimension=my_target_dimension)
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

### html_report_path

Path for html report (for example 'my_disk/my_report.html'). If set, an html report will be generated and exported to the html file. If not set, nothing will be generated.

**Type:** *LinkableInput*

### threads_user_requested

Number of threads to be used to parallelize apply operations.

**Type:** *LinkableInput*

### shape_function_volumes_mapping

**Type:** *LinkableInput*

### shape_function_surfaces_mapping

**Type:** *LinkableInput*

### point_cloud_mapping

**Type:** *LinkableInput*

### kriging_mapping

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
