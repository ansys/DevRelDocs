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

## Outputs

| Output |  Name | Expected type(s) | Description |
|-------|------|------------------|-------------|
|  **Pin 0**| source_mesh |[`abstract_meshed_region`](../../core-concepts/dpf-types.md#meshed-region) | Source mesh |
|  **Pin 1**| source_mesh_id |[`int32`](../../core-concepts/dpf-types.md#standard-types) | Source mesh id |
|  **Pin 2**| target_mesh |[`abstract_meshed_region`](../../core-concepts/dpf-types.md#meshed-region) | Target mesh |
|  **Pin 3**| target_mesh_id |[`int32`](../../core-concepts/dpf-types.md#standard-types) | Target mesh id |
|  **Pin 4**| mapping_manager_data | |  |
|  **Pin 6**| target_scoping |[`scoping`](../../core-concepts/dpf-types.md#scoping) | Target scoping |
|  **Pin 7**| unmapped_nodes_scoping |[`scoping`](../../core-concepts/dpf-types.md#scoping) | Unmapped nodes scoping |
|  **Pin 8**| outside_nodes_scoping |[`scoping`](../../core-concepts/dpf-types.md#scoping) | Outside nodes scoping |
|  **Pin 9**| mapping_error_codes |[`int32`](../../core-concepts/dpf-types.md#standard-types) | contains the error codes from the mapping manager kernel |

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


## Changelog

- Version 0.0.0: Initial release.