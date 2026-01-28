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
| <strong>Pin 30</strong>|  shape_function_volumes_mapping |[`data_tree`](../../core-concepts/dpf-types.md#data-tree) | Mapping options as DataTree object with 'mapping_options' subtree for mapping with shape function algorithm. Another 'data_definition' subtree needs to be contained, with at least 'dimensionality' int and 'location' string attributes. The other 'data_definition' and 'mapping_options' attributes can be found looking at the corresponding operator definition. The available mapping_options are: scale (int), edge_tolerance (double), conservative (bool), ignore_outside_nodes (bool). Corresponding operator definition can be checked to know the default values of the mapping options. |
| <strong>Pin 31</strong>|  shape_function_surfaces_mapping |[`data_tree`](../../core-concepts/dpf-types.md#data-tree) | Mapping options as DataTree object with 'mapping_options' subtree for mapping with shape function algorithm. Another 'data_definition' subtree needs to be contained, with at least 'dimensionality' int and 'location' string attributes. The other 'data_definition' and 'mapping_options' attributes can be found looking at the corresponding operator definition. The available mapping_options are: scale (int), edge_tolerance (double), conservative (bool), ignore_outside_nodes (bool), key (string), normal_distance_check (bool), normal_tolerance (double), pinball_controll (bool), pinball_key (string), exclude_elements_outside_pinball (bool), pinball_value (double). Corresponding operator definition can be checked to know the default values of the mapping options. |
| <strong>Pin 32</strong>|  point_cloud_mapping |[`data_tree`](../../core-concepts/dpf-types.md#data-tree) | Mapping options as DataTree object with 'mapping_options' subtree for mapping with point cloud algorithm. Another 'data_definition' subtree needs to be contained, with at least 'dimensionality' int and 'location' string attributes. The other 'data_definition' and 'mapping_options' attributes can be found looking at the corresponding operator definition. The available mapping_options are: weighting_type (string), outside_option (string), num_outside_nodes (int), max_outside_distance (double), search_limit (int), bouding_box_range (double), geometry_type (string),shell_thickness_factor (double). Corresponding operator definition can be checked to know the default values of the mapping options. |
| <strong>Pin 33</strong>|  kriging_mapping |[`data_tree`](../../core-concepts/dpf-types.md#data-tree) | Mapping options as DataTree object with 'mapping_options' subtree for mapping with kriging algorithm. Another 'data_definition' subtree needs to be contained, with at least 'dimensionality' int and 'location' string attributes. The other 'data_definition' and 'mapping_options' attributes can be found looking at the corresponding operator definition. The available mapping_options are: samples_limit (int), correlation_function_type (string), polynomial_type (string), outside_distance_checking (bool), bouding_box_tolerance (double), adaptive_tolerance_percent (double), geometry_type (string). Corresponding operator definition can be checked to know the default values of the mapping options. |
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

 **Scripting name**: prepare_mechanical_native_mapping

 **Full name**: mapping.prepare_mechanical_native_mapping

 **Internal name**: mechanical_native_mapping::prepare

 **License**: any_dpf_supported_increments


## Changelog

- Version 0.0.0: Initial release.