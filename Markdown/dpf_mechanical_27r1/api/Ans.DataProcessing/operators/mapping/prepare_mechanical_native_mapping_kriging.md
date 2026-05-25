---
uid: Ans.DataProcessing.operators.mapping.prepare_mechanical_native_mapping_kriging
---

# *class* prepare_mechanical_native_mapping_kriging(source_mesh: object = None, target_mesh: object = None, target_mesh_scoping: object = None, unit: object = None, location: object = None, dimensionality: object = None, e_shell_layers: object = None, html_report_path: object = None, threads_user_requested: object = None, samples_limit: object = None, correlation_function_type: object = None, polynomial_type: object = None, outside_distance_checking: object = None, bounding_box_tolerance: object = None, adaptive_tolerance_percent: object = None, geometry_type: object = None, is_element_centroidal_data_mapping: object = None, projection_options: object = None, dynamic_coordinate_system: object = None, source_dimension: object = None, wb_external_data_info: object = None, target_dimension: object = None, config: OperatorConfig = None)

Prepares field data mapping from a source mesh to a target mesh using **kriging interpolation**, a geostatistical method that assigns weights to nearby source points based on spatial covariance. Use this operator with `apply_mechanical_native_mapping`.

**Ansys Mechanical equivalent**: Weighting = *Kriging*.

For further details on the algorithm and its settings, see the Ansys Mechanical help page on [Data Transfer Mesh Mapping](https://ansyshelp.ansys.com/public/account/secured?returnurl=/Views/Secured/corp/v271/en/wb_sim/ds_appen_data_transfer.html).

available inputs: `source_mesh` (MeshedRegion), `target_mesh` (MeshedRegion, Field), `target_mesh_scoping` (Scoping) (optional), `unit` (string) (optional), `location` (string), `dimensionality` (Int32), `e_shell_layers` (Int32) (optional), `html_report_path` (string) (optional), `threads_user_requested` (Int32) (optional), `samples_limit` (Int32) (optional), `correlation_function_type` (string) (optional), `polynomial_type` (string) (optional), `outside_distance_checking` (bool) (optional), `bounding_box_tolerance` (double) (optional), `adaptive_tolerance_percent` (double) (optional), `geometry_type` (string) (optional), `is_element_centroidal_data_mapping` (bool) (optional), `projection_options` (DataTree) (optional), `dynamic_coordinate_system` (DataTree) (optional), `source_dimension` (string) (optional), `wb_external_data_info` (DataTree) (optional), `target_dimension` (string) (optional)

available outputs: `source_mesh` (MeshedRegion), `source_mesh_id` (Int32), `target_mesh` (MeshedRegion), `target_mesh_id` (Int32), `mapping_manager_data` (Any), `target_scoping` (Scoping), `prepare_output` (Any)

**DPF Framework Reference:** [prepare_mechanical_native_mapping_kriging operator specification](https://developer.ansys.com/docs/dpf-framework-2027-r1/operator-specifications/mapping/prepare_mechanical_native_mapping_kriging.md)

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
* **samples_limit**
* **correlation_function_type**
* **polynomial_type**
* **outside_distance_checking**
* **bounding_box_tolerance**
* **adaptive_tolerance_percent**
* **geometry_type**
* **is_element_centroidal_data_mapping**
* **projection_options**
* **dynamic_coordinate_system**
* **source_dimension**
* **wb_external_data_info**
* **target_dimension**
* **config**

**Example:**

```python
op = prepare_mechanical_native_mapping_kriging()

op = prepare_mechanical_native_mapping_kriging(source_mesh=my_source_mesh,target_mesh=my_target_mesh,target_mesh_scoping=my_target_mesh_scoping,unit=my_unit,location=my_location,dimensionality=my_dimensionality,e_shell_layers=my_e_shell_layers,html_report_path=my_html_report_path,threads_user_requested=my_threads_user_requested,samples_limit=my_samples_limit,correlation_function_type=my_correlation_function_type,polynomial_type=my_polynomial_type,outside_distance_checking=my_outside_distance_checking,bounding_box_tolerance=my_bounding_box_tolerance,adaptive_tolerance_percent=my_adaptive_tolerance_percent,geometry_type=my_geometry_type,is_element_centroidal_data_mapping=my_is_element_centroidal_data_mapping,projection_options=my_projection_options,dynamic_coordinate_system=my_dynamic_coordinate_system,source_dimension=my_source_dimension,wb_external_data_info=my_wb_external_data_info,target_dimension=my_target_dimension)
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

### samples_limit

**Type:** *LinkableInput*

### correlation_function_type

**Type:** *LinkableInput*

### polynomial_type

**Type:** *LinkableInput*

### outside_distance_checking

**Type:** *LinkableInput*

### bounding_box_tolerance

**Type:** *LinkableInput*

### adaptive_tolerance_percent

**Type:** *LinkableInput*

### geometry_type

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
