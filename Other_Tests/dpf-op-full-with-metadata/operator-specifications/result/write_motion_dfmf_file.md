---
category: result
plugin: core
license: None
---

# result:write motion dfmf file

## Description

Write the invariant terms and the model data in a motion dfmf file


## Inputs

| Input | Name | Expected type(s) | Description |
|-------|-------|------------------|-------------|
| <strong>Pin 0</strong> <br><span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  model_data |[`property_field`](../../getting-started/using-data-containers.md#property-field) | data describing the finite element model |
| <strong>Pin 1</strong> <br><span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  mode_shapes |[`fields_container`](../../getting-started/using-data-containers.md#fields-container) | FieldsContainers containing the mode shapes, which are CST and NOR for the cms method |
| <strong>Pin 2</strong> <br><span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  lumped_mass |[`fields_container`](../../getting-started/using-data-containers.md#fields-container) | FieldsContainers containing the lumped mass |
| <strong>Pin 3</strong> <br><span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  field_coordinates |[`field`](../../getting-started/using-data-containers.md#field) | coordinates of all nodes |
| <strong>Pin 4</strong> <br><span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  nod |[`vector<int32>`](../../getting-started/using-data-containers.md#vector<int32>) |  |
| <strong>Pin 5</strong> <br><span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  used_node_index |[`vector<int32>`](../../getting-started/using-data-containers.md#vector<int32>) |  |
| <strong>Pin 6</strong> <br><span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  eigenvalue |[`vector<double>`](../../getting-started/using-data-containers.md#vector<double>) |  |
| <strong>Pin 7</strong> <br><span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  translational_mode_shape |[`vector<double>`](../../getting-started/using-data-containers.md#vector<double>) |  |
| <strong>Pin 8</strong> <br><span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  rotational_mode_shape |[`vector<double>`](../../getting-started/using-data-containers.md#vector<double>) |  |
| <strong>Pin 9</strong> <br><span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  invrt_1 |[`double`](../../getting-started/using-data-containers.md#double) |  |
| <strong>Pin 10</strong> <br><span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  invrt_2 |[`vector<double>`](../../getting-started/using-data-containers.md#vector<double>) |  |
| <strong>Pin 11</strong> <br><span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  invrt_3 |[`vector<double>`](../../getting-started/using-data-containers.md#vector<double>) |  |
| <strong>Pin 12</strong> <br><span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  invrt_4 |[`vector<double>`](../../getting-started/using-data-containers.md#vector<double>) |  |
| <strong>Pin 13</strong> <br><span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  invrt_5 |[`vector<double>`](../../getting-started/using-data-containers.md#vector<double>) |  |
| <strong>Pin 14</strong> <br><span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  invrt_6 |[`vector<double>`](../../getting-started/using-data-containers.md#vector<double>) |  |
| <strong>Pin 15</strong> <br><span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  invrt_7 |[`vector<double>`](../../getting-started/using-data-containers.md#vector<double>) |  |
| <strong>Pin 16</strong> <br><span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  invrt_8 |[`vector<double>`](../../getting-started/using-data-containers.md#vector<double>) |  |
| <strong>Pin 17</strong> <br><span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  dfmffile_path |[`string`](../../getting-started/using-data-containers.md#string) | path with motion dfmf extension where the export occurs |
| <strong>Pin 18</strong> <br><span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  rstfile_path |[`string`](../../getting-started/using-data-containers.md#string) |  |


## Outputs

| Output |  Name | Expected type(s) | Description |
|-------|------|------------------|-------------|
|  **Pin 0**| dfmf_data_source |[`data_sources`](../../getting-started/using-data-containers.md#data-sources) | Data Source containing the dfmf file generated. |

## Configurations

| Name| Expected type(s) | Default value | Description |
|-----|------|----------|-------------|
| **mutex** |[`bool`](../../getting-started/using-data-containers.md#bool) | false | If this option is set to true, the shared memory is prevented from being simultaneously accessed by multiple threads. |

## Scripting

 **Category**: result

 **Plugin**: core

 **Scripting name**: write_motion_dfmf_file

 **Full name**: result.write_motion_dfmf_file

 **Internal name**: write_motion_dfmf_file

 **License**: None
