---
category: mapping
plugin: N/A
license: any_dpf_supported_increments
---

# mapping:prepare mechanical native mapping with point cloud

**Version: 0.0.0**

## Description

Prepare mapping of source data from source mesh to target mesh by operating the source_mesh/target_mesh weights computation. This operator will use a point cloud based algorithm. This operator needs to be used with the apply mechanical native mapping associated one.

## Inputs

| Input | Name | Expected type(s) | Description |
|-------|-------|------------------|-------------|
| <strong>Pin 0</strong> <br><span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  source_mesh |[`abstract_meshed_region`](../../core-concepts/dpf-types.md#meshed-region), [`field`](../../core-concepts/dpf-types.md#field) | Source mesh. Can be a meshed region or a node coordinates field. |
| <strong>Pin 1</strong> <br><span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  target_mesh |[`abstract_meshed_region`](../../core-concepts/dpf-types.md#meshed-region), [`field`](../../core-concepts/dpf-types.md#field) | Target mesh. Can be a meshed region or a node coordinates field. |
| <strong>Pin 3</strong>|  target_mesh_scoping |[`scoping`](../../core-concepts/dpf-types.md#scoping) | Target mesh scoping. If used, ensure to give only the elements where results are expected into source mesh input to have optimized computation. |
| <strong>Pin 4</strong>|  unit |[`string`](../../core-concepts/dpf-types.md#standard-types) | Unit of the result to map |
| <strong>Pin 5</strong>|  location |[`string`](../../core-concepts/dpf-types.md#standard-types) | Location of the result to map. If elemental, this input needs to be specified. |
| <strong>Pin 6</strong> <br><span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  dimensionality |[`int32`](../../core-concepts/dpf-types.md#standard-types) | Dimensionality of the result to map (for example it will be 3 for a displacement along (x, y, z) axes). |
| <strong>Pin 7</strong>|  e_shell_layers |[`int32`](../../core-concepts/dpf-types.md#standard-types) | EShellLayers enum value if field has shell layers |
| <strong>Pin 8</strong>|  html_report_path |[`string`](../../core-concepts/dpf-types.md#standard-types) | Path for html report (for example 'my_disk/my_report.html'). If set, an html report will be generated and exported to the html file. If not set, nothing will be generated. |
| <strong>Pin 9</strong>|  threads_user_requested |[`int32`](../../core-concepts/dpf-types.md#standard-types) | Number of threads to be used to parallelize apply operations. |
| <strong>Pin 10</strong>|  weighting_type |[`string`](../../core-concepts/dpf-types.md#standard-types) | Default 'triangulation'. Can also be 'weighted_average'. |
| <strong>Pin 11</strong>|  outside_option |[`string`](../../core-concepts/dpf-types.md#standard-types) | Default is 'weighted_average'. Can also be 'ignore', 'projection', 'nearest_node'. |
| <strong>Pin 12</strong>|  num_outside_points |[`int32`](../../core-concepts/dpf-types.md#standard-types) | Default is 3 |
| <strong>Pin 13</strong>|  max_outside_distance |[`double`](../../core-concepts/dpf-types.md#standard-types) | Default is 0.0 |
| <strong>Pin 14</strong>|  search_limit |[`int32`](../../core-concepts/dpf-types.md#standard-types) | Default is 20 |
| <strong>Pin 15</strong>|  bounding_box_sizing |[`double`](../../core-concepts/dpf-types.md#standard-types) | Pinball area. Default is 0.0. |
| <strong>Pin 16</strong>|  geometry_type |[`string`](../../core-concepts/dpf-types.md#standard-types) | Default is 'volume'. Can also be 'surface'. |
| <strong>Pin 17</strong>|  shell_thickness_factor |[`double`](../../core-concepts/dpf-types.md#standard-types) | Default is '0.0' |
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

 **Scripting name**: prepare_mechanical_native_mapping_point_cloud

 **Full name**: mapping.prepare_mechanical_native_mapping_point_cloud

 **Internal name**: mechanical_native_mapping::prepare::point_cloud

 **License**: any_dpf_supported_increments

## Examples

<details>
<summary>C++</summary>

```cpp
#include "dpf_api.h"

ansys::dpf::Operator op("mechanical_native_mapping::prepare::point_cloud"); // operator instantiation
op.connect(0, my_source_mesh);
op.connect(1, my_target_mesh);
op.connect(3, my_target_mesh_scoping);
op.connect(4, my_unit);
op.connect(5, my_location);
op.connect(6, my_dimensionality);
op.connect(7, my_e_shell_layers);
op.connect(8, my_html_report_path);
op.connect(9, my_threads_user_requested);
op.connect(10, my_weighting_type);
op.connect(11, my_outside_option);
op.connect(12, my_num_outside_points);
op.connect(13, my_max_outside_distance);
op.connect(14, my_search_limit);
op.connect(15, my_bounding_box_sizing);
op.connect(16, my_geometry_type);
op.connect(17, my_shell_thickness_factor);
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

op = dpf.operators.mapping.prepare_mechanical_native_mapping_point_cloud() # operator instantiation
op.inputs.source_mesh.connect(my_source_mesh)
op.inputs.target_mesh.connect(my_target_mesh)
op.inputs.target_mesh_scoping.connect(my_target_mesh_scoping)
op.inputs.unit.connect(my_unit)
op.inputs.location.connect(my_location)
op.inputs.dimensionality.connect(my_dimensionality)
op.inputs.e_shell_layers.connect(my_e_shell_layers)
op.inputs.html_report_path.connect(my_html_report_path)
op.inputs.threads_user_requested.connect(my_threads_user_requested)
op.inputs.weighting_type.connect(my_weighting_type)
op.inputs.outside_option.connect(my_outside_option)
op.inputs.num_outside_points.connect(my_num_outside_points)
op.inputs.max_outside_distance.connect(my_max_outside_distance)
op.inputs.search_limit.connect(my_search_limit)
op.inputs.bounding_box_sizing.connect(my_bounding_box_sizing)
op.inputs.geometry_type.connect(my_geometry_type)
op.inputs.shell_thickness_factor.connect(my_shell_thickness_factor)
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

op = dpf.operators.mapping.prepare_mechanical_native_mapping_point_cloud() # operator instantiation
op.inputs.source_mesh.Connect(my_source_mesh)
op.inputs.target_mesh.Connect(my_target_mesh)
op.inputs.target_mesh_scoping.Connect(my_target_mesh_scoping)
op.inputs.unit.Connect(my_unit)
op.inputs.location.Connect(my_location)
op.inputs.dimensionality.Connect(my_dimensionality)
op.inputs.e_shell_layers.Connect(my_e_shell_layers)
op.inputs.html_report_path.Connect(my_html_report_path)
op.inputs.threads_user_requested.Connect(my_threads_user_requested)
op.inputs.weighting_type.Connect(my_weighting_type)
op.inputs.outside_option.Connect(my_outside_option)
op.inputs.num_outside_points.Connect(my_num_outside_points)
op.inputs.max_outside_distance.Connect(my_max_outside_distance)
op.inputs.search_limit.Connect(my_search_limit)
op.inputs.bounding_box_sizing.Connect(my_bounding_box_sizing)
op.inputs.geometry_type.Connect(my_geometry_type)
op.inputs.shell_thickness_factor.Connect(my_shell_thickness_factor)
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