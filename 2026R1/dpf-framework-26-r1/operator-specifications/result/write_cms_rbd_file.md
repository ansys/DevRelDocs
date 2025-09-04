---
category: result
plugin: core
license: None
---

# result:write cms rbd file

**Version: 0.0.0**

## Description

Write the invariant terms and the model data in a cms_rbd file

## Inputs

| Input | Name | Expected type(s) | Description |
|-------|-------|------------------|-------------|
| <strong>Pin 0</strong> <br><span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  model_data |[`property_field`](./../../core-concepts/dpf-types.md#property-field) | data describing the finite element model |
| <strong>Pin 1</strong> <br><span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  center_of_mass |[`field`](./../../core-concepts/dpf-types.md#field) | center of mass of the body |
| <strong>Pin 2</strong> <br><span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  inertia_relief |[`field`](./../../core-concepts/dpf-types.md#field) | inertia matrix |
| <strong>Pin 3</strong> <br><span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  model_size |[`double`](./../../core-concepts/dpf-types.md#standard-types) | size of the diagonal box containing the body |
| <strong>Pin 4</strong> <br><span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  master_node_coordinates |[`vector<double>`](./../../core-concepts/dpf-types.md#standard-types) |  |
| <strong>Pin 5</strong> <br><span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  v_trsf |[`vector<double>`](./../../core-concepts/dpf-types.md#standard-types) | translational and rotational shape functions |
| <strong>Pin 6</strong> <br><span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  k_mat |[`field`](./../../core-concepts/dpf-types.md#field) |  |
| <strong>Pin 7</strong> <br><span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  mass_mat |[`field`](./../../core-concepts/dpf-types.md#field) |  |
| <strong>Pin 8</strong> <br><span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  c_mat |[`field`](./../../core-concepts/dpf-types.md#field) |  |
| <strong>Pin 9</strong> <br><span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  rhs |[`field`](./../../core-concepts/dpf-types.md#field) |  |
| <strong>Pin 10</strong> <br><span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  dn |[`vector<double>`](./../../core-concepts/dpf-types.md#standard-types) |  |
| <strong>Pin 11</strong> <br><span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  dr_cross_n |[`vector<double>`](./../../core-concepts/dpf-types.md#standard-types) |  |
| <strong>Pin 12</strong> <br><span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  drn |[`vector<double>`](./../../core-concepts/dpf-types.md#standard-types) |  |
| <strong>Pin 13</strong> <br><span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  dn_cross_n |[`vector<double>`](./../../core-concepts/dpf-types.md#standard-types) |  |
| <strong>Pin 14</strong> <br><span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  dnx_y |[`vector<double>`](./../../core-concepts/dpf-types.md#standard-types) |  |
| <strong>Pin 15</strong> <br><span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  dny_y |[`vector<double>`](./../../core-concepts/dpf-types.md#standard-types) |  |
| <strong>Pin 16</strong> <br><span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  dnz_y |[`vector<double>`](./../../core-concepts/dpf-types.md#standard-types) |  |
| <strong>Pin 17</strong> <br><span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  dyx_n |[`vector<double>`](./../../core-concepts/dpf-types.md#standard-types) |  |
| <strong>Pin 18</strong> <br><span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  dyy_n |[`vector<double>`](./../../core-concepts/dpf-types.md#standard-types) |  |
| <strong>Pin 19</strong> <br><span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  dyz_n |[`vector<double>`](./../../core-concepts/dpf-types.md#standard-types) |  |
| <strong>Pin 20</strong> <br><span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  dnxn |[`vector<double>`](./../../core-concepts/dpf-types.md#standard-types) |  |
| <strong>Pin 21</strong> <br><span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  dnyn |[`vector<double>`](./../../core-concepts/dpf-types.md#standard-types) |  |
| <strong>Pin 22</strong> <br><span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  dnzn |[`vector<double>`](./../../core-concepts/dpf-types.md#standard-types) |  |
| <strong>Pin 23</strong> <br><span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  file_path |[`string`](./../../core-concepts/dpf-types.md#standard-types) | path with cms_rbd extension where the export occurs |

## Outputs

| Output |  Name | Expected type(s) | Description |
|-------|------|------------------|-------------|
|  **Pin 0**| data_sources |[`data_sources`](./../../core-concepts/dpf-types.md#data-sources) | Data Source containing the cms_rbd file generated. |

## Configurations

| Name| Expected type(s) | Default value | Description |
|-----|------|----------|-------------|
| **mutex** |[`bool`](./../../core-concepts/dpf-types.md#standard-types) | false | If this option is set to true, the shared memory is prevented from being simultaneously accessed by multiple threads. |

## Scripting

 **Category**: result

 **Plugin**: core

 **Scripting name**: write_cms_rbd_file

 **Full name**: result.write_cms_rbd_file

 **Internal name**: write_cms_rbd_file

 **License**: None


## Changelog

- Version 0.0.0: Initial release.