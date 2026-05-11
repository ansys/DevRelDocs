---
category: mapping
plugin: N/A
license: any_dpf_supported_increments
---

# mapping:prepare mechanical native mapping

**Version: 0.0.0**

## Description

Prepare mapping of source data from source mesh to target mesh by operating the source_mesh/target_mesh weights computation. This operator needs to be used with the apply mechanical native mapping associated one. At least one of the optional DataTree inputs need to be set, in order to chose the mapping algorithm and set the mapping options.

## Inputs

This table lists the input pins for this operator. Input pins define the data that the operator requires to perform its operation.
Some inputs are required, while others are optional and provide additional configuration.
Each parameter is detailed in the sections that follow the table.

| Pin number | Name | Status | Expected type(s) |
|------------|------|--------|------------------|
| <strong>0</strong> | [source_mesh](#input_0) |  <span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;" title="This pin is required">Required</span>|[`abstract_meshed_region`](../../core-concepts/dpf-types.md#meshed-region) |
| <strong>1</strong> | [target_mesh](#input_1) |  <span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;" title="This pin is required">Required</span>|[`abstract_meshed_region`](../../core-concepts/dpf-types.md#meshed-region), [`field`](../../core-concepts/dpf-types.md#field) |
| <strong>3</strong> | [target_mesh_scoping](#input_3) |  |[`scoping`](../../core-concepts/dpf-types.md#scoping) |
| <strong>8</strong> | [html_report_path](#input_8) |  |[`string`](../../core-concepts/dpf-types.md#standard-types) |
| <strong>9</strong> | [threads_user_requested](#input_9) |  |[`int32`](../../core-concepts/dpf-types.md#standard-types) |
| <strong>30</strong> | [shape_function_volumes_mapping](#input_30) |  |[`data_tree`](../../core-concepts/dpf-types.md#data-tree) |
| <strong>31</strong> | [shape_function_surfaces_mapping](#input_31) |  |[`data_tree`](../../core-concepts/dpf-types.md#data-tree) |
| <strong>32</strong> | [point_cloud_mapping](#input_32) |  |[`data_tree`](../../core-concepts/dpf-types.md#data-tree) |
| <strong>33</strong> | [kriging_mapping](#input_33) |  |[`data_tree`](../../core-concepts/dpf-types.md#data-tree) |
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

Target mesh. Can be a meshed region or a node coordinates field depending on the algorithm that is used. Refer to the dedicated algorithm operator documentation.

<a id="input_3"></a>
### target_mesh_scoping (Pin 3)

- **Required:** No
- **Expected type(s):** [`scoping`](../../core-concepts/dpf-types.md#scoping)

Target mesh scoping. If used, ensure to give only the elements where results are expected into source mesh input to have optimized computation.

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

<a id="input_30"></a>
### shape_function_volumes_mapping (Pin 30)

- **Required:** No
- **Expected type(s):** [`data_tree`](../../core-concepts/dpf-types.md#data-tree)

Mapping options as DataTree object with 'mapping_options' subtree for mapping with shape function algorithm. Another 'data_definition' subtree needs to be contained, with at least 'dimensionality' int and 'location' string attributes. The other 'data_definition' and 'mapping_options' attributes can be found looking at the corresponding operator definition. The available mapping_options are: scale (int), edge_tolerance (double), conservative (bool), ignore_outside_nodes (bool). Corresponding operator definition can be checked to know the default values of the mapping options.

<a id="input_31"></a>
### shape_function_surfaces_mapping (Pin 31)

- **Required:** No
- **Expected type(s):** [`data_tree`](../../core-concepts/dpf-types.md#data-tree)

Mapping options as DataTree object with 'mapping_options' subtree for mapping with shape function algorithm. Another 'data_definition' subtree needs to be contained, with at least 'dimensionality' int and 'location' string attributes. The other 'data_definition' and 'mapping_options' attributes can be found looking at the corresponding operator definition. The available mapping_options are: scale (int), edge_tolerance (double), conservative (bool), ignore_outside_nodes (bool), key (string), normal_distance_check (bool), normal_tolerance (double), pinball_controll (bool), pinball_key (string), exclude_elements_outside_pinball (bool), pinball_value (double). Corresponding operator definition can be checked to know the default values of the mapping options.

<a id="input_32"></a>
### point_cloud_mapping (Pin 32)

- **Required:** No
- **Expected type(s):** [`data_tree`](../../core-concepts/dpf-types.md#data-tree)

Mapping options as DataTree object with 'mapping_options' subtree for mapping with point cloud algorithm. Another 'data_definition' subtree needs to be contained, with at least 'dimensionality' int and 'location' string attributes. The other 'data_definition' and 'mapping_options' attributes can be found looking at the corresponding operator definition. The available mapping_options are: weighting_type (string), outside_option (string), num_outside_nodes (int), max_outside_distance (double), search_limit (int), bouding_box_range (double), geometry_type (string),shell_thickness_factor (double). Corresponding operator definition can be checked to know the default values of the mapping options.

<a id="input_33"></a>
### kriging_mapping (Pin 33)

- **Required:** No
- **Expected type(s):** [`data_tree`](../../core-concepts/dpf-types.md#data-tree)

Mapping options as DataTree object with 'mapping_options' subtree for mapping with kriging algorithm. Another 'data_definition' subtree needs to be contained, with at least 'dimensionality' int and 'location' string attributes. The other 'data_definition' and 'mapping_options' attributes can be found looking at the corresponding operator definition. The available mapping_options are: samples_limit (int), correlation_function_type (string), polynomial_type (string), outside_distance_checking (bool), bouding_box_tolerance (double), adaptive_tolerance_percent (double), geometry_type (string). Corresponding operator definition can be checked to know the default values of the mapping options.

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

 **Plugin**: N/A

 **Scripting name**: prepare_mechanical_native_mapping

 **Full name**: mapping.prepare_mechanical_native_mapping

 **Internal name**: mechanical_native_mapping::prepare

 **License**: any_dpf_supported_increments

## Examples

These examples demonstrate how to use this operator in different programming environments.
Each example shows how to instantiate the operator, connect the required inputs, and retrieve the output.

<details>
<summary>C++</summary>

```cpp
#include "dpf_api.h"

ansys::dpf::Operator op("mechanical_native_mapping::prepare"); // operator instantiation
op.connect(0, my_source_mesh);
op.connect(1, my_target_mesh);
op.connect(3, my_target_mesh_scoping);
op.connect(8, my_html_report_path);
op.connect(9, my_threads_user_requested);
op.connect(30, my_shape_function_volumes_mapping);
op.connect(31, my_shape_function_surfaces_mapping);
op.connect(32, my_point_cloud_mapping);
op.connect(33, my_kriging_mapping);
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

op = dpf.operators.mapping.prepare_mechanical_native_mapping() # operator instantiation
op.inputs.source_mesh.connect(my_source_mesh)
op.inputs.target_mesh.connect(my_target_mesh)
op.inputs.target_mesh_scoping.connect(my_target_mesh_scoping)
op.inputs.html_report_path.connect(my_html_report_path)
op.inputs.threads_user_requested.connect(my_threads_user_requested)
op.inputs.shape_function_volumes_mapping.connect(my_shape_function_volumes_mapping)
op.inputs.shape_function_surfaces_mapping.connect(my_shape_function_surfaces_mapping)
op.inputs.point_cloud_mapping.connect(my_point_cloud_mapping)
op.inputs.kriging_mapping.connect(my_kriging_mapping)
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

op = dpf.operators.mapping.prepare_mechanical_native_mapping() # operator instantiation
op.inputs.source_mesh.Connect(my_source_mesh)
op.inputs.target_mesh.Connect(my_target_mesh)
op.inputs.target_mesh_scoping.Connect(my_target_mesh_scoping)
op.inputs.html_report_path.Connect(my_html_report_path)
op.inputs.threads_user_requested.Connect(my_threads_user_requested)
op.inputs.shape_function_volumes_mapping.Connect(my_shape_function_volumes_mapping)
op.inputs.shape_function_surfaces_mapping.Connect(my_shape_function_surfaces_mapping)
op.inputs.point_cloud_mapping.Connect(my_point_cloud_mapping)
op.inputs.kriging_mapping.Connect(my_kriging_mapping)
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