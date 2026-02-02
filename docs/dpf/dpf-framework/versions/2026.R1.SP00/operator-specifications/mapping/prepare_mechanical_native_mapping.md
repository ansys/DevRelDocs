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

| Input | Name | Expected type(s) | Description |
|-------|-------|------------------|-------------|
| <strong>Pin 0</strong> <br><span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  source_mesh |[`abstract_meshed_region`](../../core-concepts/dpf-types.md#meshed-region) | Source mesh |
| <strong>Pin 1</strong> <br><span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  target_mesh |[`abstract_meshed_region`](../../core-concepts/dpf-types.md#meshed-region), [`field`](../../core-concepts/dpf-types.md#field) | Target mesh. Can be a meshed region or a node coordinates field depending on the algorithm that is used. Refer to the dedicated algorithm operator documentation. |
| <strong>Pin 3</strong>|  target_mesh_scoping |[`scoping`](../../core-concepts/dpf-types.md#scoping) | Target mesh scoping. If used, ensure to give only the elements where results are expected into source mesh input to have optimized computation. |
| <strong>Pin 8</strong>|  html_report_path |[`string`](../../core-concepts/dpf-types.md#standard-types) | Path for html report (for example 'my_disk/my_report.html'). If set, an html report will be generated and exported to the html file. If not set, nothing will be generated. |
| <strong>Pin 9</strong>|  threads_user_requested |[`int32`](../../core-concepts/dpf-types.md#standard-types) | Number of threads to be used to parallelize apply operations. |
| <strong>Pin 30</strong>|  shape_function_volumes_mapping |[`data_tree`](../../core-concepts/dpf-types.md#data-tree) | Mapping options as DataTree object with 'mapping_options' subtree for mapping with shape function algorithm. Another 'data_definition' subtree needs to be contained, with at least 'dimensionality' int and 'location' string attributes. The other 'data_definition' and 'mapping_options' attributes can be found looking at the corresponding operator definition. The available mapping_options are: scale (int), edge_tolerance (double), conservative (bool), ignore_outside_nodes (bool). Corresponding operator definition can be checked to know the default values of the mapping options. |
| <strong>Pin 31</strong>|  shape_function_surfaces_mapping |[`data_tree`](../../core-concepts/dpf-types.md#data-tree) | Mapping options as DataTree object with 'mapping_options' subtree for mapping with shape function algorithm. Another 'data_definition' subtree needs to be contained, with at least 'dimensionality' int and 'location' string attributes. The other 'data_definition' and 'mapping_options' attributes can be found looking at the corresponding operator definition. The available mapping_options are: scale (int), edge_tolerance (double), conservative (bool), ignore_outside_nodes (bool), key (string), normal_distance_check (bool), normal_tolerance (double), pinball_controll (bool), pinball_key (string), exclude_elements_outside_pinball (bool), pinball_value (double). Corresponding operator definition can be checked to know the default values of the mapping options. |
| <strong>Pin 32</strong>|  point_cloud_mapping |[`data_tree`](../../core-concepts/dpf-types.md#data-tree) | Mapping options as DataTree object with 'mapping_options' subtree for mapping with point cloud algorithm. Another 'data_definition' subtree needs to be contained, with at least 'dimensionality' int and 'location' string attributes. The other 'data_definition' and 'mapping_options' attributes can be found looking at the corresponding operator definition. The available mapping_options are: weighting_type (string), outside_option (string), num_outside_nodes (int), max_outside_distance (double), search_limit (int), bouding_box_range (double), geometry_type (string),shell_thickness_factor (double). Corresponding operator definition can be checked to know the default values of the mapping options. |
| <strong>Pin 33</strong>|  kriging_mapping |[`data_tree`](../../core-concepts/dpf-types.md#data-tree) | Mapping options as DataTree object with 'mapping_options' subtree for mapping with kriging algorithm. Another 'data_definition' subtree needs to be contained, with at least 'dimensionality' int and 'location' string attributes. The other 'data_definition' and 'mapping_options' attributes can be found looking at the corresponding operator definition. The available mapping_options are: samples_limit (int), correlation_function_type (string), polynomial_type (string), outside_distance_checking (bool), bouding_box_tolerance (double), adaptive_tolerance_percent (double), geometry_type (string). Corresponding operator definition can be checked to know the default values of the mapping options. |
| <strong>Pin 100</strong>|  is_element_centroidal_data_mapping |[`bool`](../../core-concepts/dpf-types.md#standard-types) | Default is 'false'. Set to 'true' if the source elemental data is representing as element centroidal nodal data |
| <strong>Pin 101</strong>|  projection_options |[`data_tree`](../../core-concepts/dpf-types.md#data-tree) | Default is empty. This data tree contains 2D projection options for mapping 2D to 3D |
| <strong>Pin 102</strong>|  dynamic_coordinate_system |[`data_tree`](../../core-concepts/dpf-types.md#data-tree) | Default is empty. This data tree contains the dynamic coordinate system for performing rigid body transformation on the source mesh |
| <strong>Pin 103</strong>|  source_dimension |[`string`](../../core-concepts/dpf-types.md#standard-types) | Default is empty string. The string contains either "2D" or "3D" which specifies the source dimension |
| <strong>Pin 104</strong>|  wb_external_data_info |[`data_tree`](../../core-concepts/dpf-types.md#data-tree) | Default is empty. This data tree contains the Rigid & Analytical transformations specified in the workbench external data system |
| <strong>Pin 105</strong>|  target_dimension |[`string`](../../core-concepts/dpf-types.md#standard-types) | Default is empty string. The string contains either "2D" or "3D" which specifies the target dimension |

## Outputs

| Output |  Name | Expected type(s) | Description |
|-------|------|------------------|-------------|
|  **Pin 0**| source_mesh |[`abstract_meshed_region`](../../core-concepts/dpf-types.md#meshed-region) | Source mesh |
|  **Pin 1**| source_mesh_id |[`int32`](../../core-concepts/dpf-types.md#standard-types) | Source mesh id |
|  **Pin 2**| target_mesh |[`abstract_meshed_region`](../../core-concepts/dpf-types.md#meshed-region) | Target mesh |
|  **Pin 3**| target_mesh_id |[`int32`](../../core-concepts/dpf-types.md#standard-types) | Target mesh id |
|  **Pin 4**| mapping_manager_data | |  |
|  **Pin 6**| target_scoping |[`scoping`](../../core-concepts/dpf-types.md#scoping) | Target scoping |
|  **Pin 7**| prepare_output | | A Map containing the outputs of the mapping as a key value pair |

## Configurations

| Name| Expected type(s) | Default value | Description |
|-----|------|----------|-------------|
| **mutex** |[`bool`](../../core-concepts/dpf-types.md#standard-types) | false | If this option is set to true, the shared memory is prevented from being simultaneously accessed by multiple threads. |

## Scripting

 **Category**: mapping

 **Plugin**: N/A

 **Scripting name**: prepare_mechanical_native_mapping

 **Full name**: mapping.prepare_mechanical_native_mapping

 **Internal name**: mechanical_native_mapping::prepare

 **License**: any_dpf_supported_increments

## Examples

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