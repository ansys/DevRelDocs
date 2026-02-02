---
category: mapping
plugin: N/A
license: any_dpf_supported_increments
---

# mapping:prepare mechanical native mapping with shape functions for surfaces

**Version: 0.0.0**

## Description

Prepare mapping of source data from source mesh to target mesh by operating the source_mesh/target_mesh weights computation. This operator will use the shape functions of the elements. This operator is meant for surfaces elements. This operator needs to be used with the apply mechanical native mapping associated one.

## Inputs

| Input | Name | Expected type(s) | Description |
|-------|-------|------------------|-------------|
| <strong>Pin 0</strong> <br><span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  source_mesh |[`abstract_meshed_region`](../../core-concepts/dpf-types.md#meshed-region) | Source mesh |
| <strong>Pin 1</strong> <br><span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  target_mesh |[`abstract_meshed_region`](../../core-concepts/dpf-types.md#meshed-region) | Target mesh |
| <strong>Pin 3</strong>|  target_mesh_scoping |[`scoping`](../../core-concepts/dpf-types.md#scoping) | Target mesh scoping. If used, ensure to give only the elements where results are expected into source mesh input to have optimized computation. |
| <strong>Pin 4</strong>|  unit |[`string`](../../core-concepts/dpf-types.md#standard-types) | Unit of the result to map |
| <strong>Pin 5</strong> <br><span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  location |[`string`](../../core-concepts/dpf-types.md#standard-types) | Location of the result to map |
| <strong>Pin 6</strong> <br><span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  dimensionality |[`int32`](../../core-concepts/dpf-types.md#standard-types) | Dimensionality of the result to map (for example it will be 3 for a displacement along (x, y, z) axes). |
| <strong>Pin 7</strong>|  e_shell_layers |[`int32`](../../core-concepts/dpf-types.md#standard-types) | EShellLayers enum value if field has shell layers |
| <strong>Pin 8</strong>|  html_report_path |[`string`](../../core-concepts/dpf-types.md#standard-types) | Path for html report (for example 'my_disk/my_report.html'). If set, an html report will be generated and exported to the html file. If not set, nothing will be generated. |
| <strong>Pin 10</strong>|  scale |[`int32`](../../core-concepts/dpf-types.md#standard-types) | Default is 50 |
| <strong>Pin 11</strong>|  edge_tolerance |[`double`](../../core-concepts/dpf-types.md#standard-types) | Default is 0.02 |
| <strong>Pin 12</strong>|  conservative |[`bool`](../../core-concepts/dpf-types.md#standard-types) | Default is false |
| <strong>Pin 13</strong>|  ignore_outside_nodes |[`bool`](../../core-concepts/dpf-types.md#standard-types) | Default is false |
| <strong>Pin 14</strong>|  key |[`string`](../../core-concepts/dpf-types.md#standard-types) | Can be 'absolute' or 'relative'. Default is 'relative' |
| <strong>Pin 15</strong>|  normal_distance_check |[`bool`](../../core-concepts/dpf-types.md#standard-types) | Default is false |
| <strong>Pin 16</strong>|  normal_tolerance |[`double`](../../core-concepts/dpf-types.md#standard-types) | Default is 1e-6 |
| <strong>Pin 17</strong>|  pinball_control |[`bool`](../../core-concepts/dpf-types.md#standard-types) | Default is false |
| <strong>Pin 18</strong>|  pinball_key |[`string`](../../core-concepts/dpf-types.md#standard-types) | Can be 'absolute' or 'relative'. Default is 'absolute' |
| <strong>Pin 19</strong>|  exclude_elements_outside_pinball |[`bool`](../../core-concepts/dpf-types.md#standard-types) | Default is false |
| <strong>Pin 20</strong>|  pinball_value |[`double`](../../core-concepts/dpf-types.md#standard-types) | Default is 0.0 |
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

 **Scripting name**: prepare_mechanical_native_mapping_shape_functions_for_surfaces

 **Full name**: mapping.prepare_mechanical_native_mapping_shape_functions_for_surfaces

 **Internal name**: mechanical_native_mapping::prepare::shape_function_surfaces

 **License**: any_dpf_supported_increments


## Changelog

- Version 0.0.0: Initial release.