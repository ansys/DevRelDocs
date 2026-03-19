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

| Pin number | Name | Expected type(s) |
|-------|-------|------------------|
| <strong>0</strong> <span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  [source_mesh](#input_0) |[`abstract_meshed_region`](../../core-concepts/dpf-types.md#meshed-region), [`field`](../../core-concepts/dpf-types.md#field) |
| <strong>1</strong> <span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  [target_mesh](#input_1) |[`abstract_meshed_region`](../../core-concepts/dpf-types.md#meshed-region), [`field`](../../core-concepts/dpf-types.md#field) |
| <strong>3</strong>|  [target_mesh_scoping](#input_3) |[`scoping`](../../core-concepts/dpf-types.md#scoping) |
| <strong>4</strong>|  [unit](#input_4) |[`string`](../../core-concepts/dpf-types.md#standard-types) |
| <strong>5</strong>|  [location](#input_5) |[`string`](../../core-concepts/dpf-types.md#standard-types) |
| <strong>6</strong> <span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  [dimensionality](#input_6) |[`int32`](../../core-concepts/dpf-types.md#standard-types) |
| <strong>7</strong>|  [e_shell_layers](#input_7) |[`int32`](../../core-concepts/dpf-types.md#standard-types) |
| <strong>8</strong>|  [html_report_path](#input_8) |[`string`](../../core-concepts/dpf-types.md#standard-types) |
| <strong>9</strong>|  [threads_user_requested](#input_9) |[`int32`](../../core-concepts/dpf-types.md#standard-types) |
| <strong>10</strong>|  [weighting_type](#input_10) |[`string`](../../core-concepts/dpf-types.md#standard-types) |
| <strong>11</strong>|  [outside_option](#input_11) |[`string`](../../core-concepts/dpf-types.md#standard-types) |
| <strong>12</strong>|  [num_outside_points](#input_12) |[`int32`](../../core-concepts/dpf-types.md#standard-types) |
| <strong>13</strong>|  [max_outside_distance](#input_13) |[`double`](../../core-concepts/dpf-types.md#standard-types) |
| <strong>14</strong>|  [search_limit](#input_14) |[`int32`](../../core-concepts/dpf-types.md#standard-types) |
| <strong>15</strong>|  [bounding_box_sizing](#input_15) |[`double`](../../core-concepts/dpf-types.md#standard-types) |
| <strong>16</strong>|  [geometry_type](#input_16) |[`string`](../../core-concepts/dpf-types.md#standard-types) |
| <strong>17</strong>|  [shell_thickness_factor](#input_17) |[`double`](../../core-concepts/dpf-types.md#standard-types) |
| <strong>100</strong>|  [is_element_centroidal_data_mapping](#input_100) |[`bool`](../../core-concepts/dpf-types.md#standard-types) |
| <strong>101</strong>|  [projection_options](#input_101) |[`data_tree`](../../core-concepts/dpf-types.md#data-tree) |
| <strong>102</strong>|  [dynamic_coordinate_system](#input_102) |[`data_tree`](../../core-concepts/dpf-types.md#data-tree) |
| <strong>103</strong>|  [source_dimension](#input_103) |[`string`](../../core-concepts/dpf-types.md#standard-types) |
| <strong>104</strong>|  [wb_external_data_info](#input_104) |[`data_tree`](../../core-concepts/dpf-types.md#data-tree) |
| <strong>105</strong>|  [target_dimension](#input_105) |[`string`](../../core-concepts/dpf-types.md#standard-types) |


<a id="input_0"></a>
### source_mesh (Pin 0)

- **Required:** Yes
- **Expected type(s):** [`abstract_meshed_region`](../../core-concepts/dpf-types.md#meshed-region), [`field`](../../core-concepts/dpf-types.md#field)

Source mesh. Can be a meshed region or a node coordinates field.

<a id="input_1"></a>
### target_mesh (Pin 1)

- **Required:** Yes
- **Expected type(s):** [`abstract_meshed_region`](../../core-concepts/dpf-types.md#meshed-region), [`field`](../../core-concepts/dpf-types.md#field)

Target mesh. Can be a meshed region or a node coordinates field.

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

- **Required:** No
- **Expected type(s):** [`string`](../../core-concepts/dpf-types.md#standard-types)

Location of the result to map. If elemental, this input needs to be specified.

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
### weighting_type (Pin 10)

- **Required:** No
- **Expected type(s):** [`string`](../../core-concepts/dpf-types.md#standard-types)

Default 'triangulation'. Can also be 'weighted_average'.

<a id="input_11"></a>
### outside_option (Pin 11)

- **Required:** No
- **Expected type(s):** [`string`](../../core-concepts/dpf-types.md#standard-types)

Default is 'weighted_average'. Can also be 'ignore', 'projection', 'nearest_node'.

<a id="input_12"></a>
### num_outside_points (Pin 12)

- **Required:** No
- **Expected type(s):** [`int32`](../../core-concepts/dpf-types.md#standard-types)

Default is 3

<a id="input_13"></a>
### max_outside_distance (Pin 13)

- **Required:** No
- **Expected type(s):** [`double`](../../core-concepts/dpf-types.md#standard-types)

Default is 0.0

<a id="input_14"></a>
### search_limit (Pin 14)

- **Required:** No
- **Expected type(s):** [`int32`](../../core-concepts/dpf-types.md#standard-types)

Default is 20

<a id="input_15"></a>
### bounding_box_sizing (Pin 15)

- **Required:** No
- **Expected type(s):** [`double`](../../core-concepts/dpf-types.md#standard-types)

Pinball area. Default is 0.0.

<a id="input_16"></a>
### geometry_type (Pin 16)

- **Required:** No
- **Expected type(s):** [`string`](../../core-concepts/dpf-types.md#standard-types)

Default is 'volume'. Can also be 'surface'.

<a id="input_17"></a>
### shell_thickness_factor (Pin 17)

- **Required:** No
- **Expected type(s):** [`double`](../../core-concepts/dpf-types.md#standard-types)

Default is '0.0'

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


### mutex

- **Expected type(s):** [`bool`](../../core-concepts/dpf-types.md#standard-types)
- **Default value:** false

If this option is set to true, the shared memory is prevented from being simultaneously accessed by multiple threads.



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