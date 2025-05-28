---
category: result
plugin: core
license: None
---

# result:read cms_rbd file

## Description

Read the invariant terms and the model data from a cms_rbd file

### Plugin

core

## Inputs

| Input | Name | Expected type(s) | Description |
|-------|-------|------------------|-------------|
| <strong>Pin 0</strong> <br><span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  in_cms_rbd_file_path |[`string`](../../getting-started/using-data-containers.md#string) | file name with cms_rbd extension where to read the input cms_rbd file. |


## Outputs

| Output |  Name | Expected type(s) | Description |
|-------|------|------------------|-------------|
| <strong>Pin 0</strong> <br><span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span> | model_data |[`property_field`](../../getting-started/using-data-containers.md#property-field) | data describing the finite element model |
| <strong>Pin 1</strong> <br><span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span> | center_of_mass |[`field`](../../getting-started/using-data-containers.md#field) | center of mass of the body |
| <strong>Pin 2</strong> <br><span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span> | inertia_relief |[`field`](../../getting-started/using-data-containers.md#field) | inertia matrix |
| <strong>Pin 3</strong> <br><span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span> | model_size |[`property_field`](../../getting-started/using-data-containers.md#property-field) |  |
| <strong>Pin 4</strong> <br><span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span> | master_node_coordinates |[`vector<double>`](../../getting-started/using-data-containers.md#vector<double>) |  |
| <strong>Pin 5</strong> <br><span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span> | v_trsf |[`vector<double>`](../../getting-started/using-data-containers.md#vector<double>) | translational and rotational shape functions |
| <strong>Pin 6</strong> <br><span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span> | k_mat |[`field`](../../getting-started/using-data-containers.md#field) |  |
| <strong>Pin 7</strong> <br><span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span> | mass_mat |[`field`](../../getting-started/using-data-containers.md#field) |  |
| <strong>Pin 8</strong> <br><span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span> | c_mat |[`field`](../../getting-started/using-data-containers.md#field) |  |
| <strong>Pin 9</strong> <br><span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span> | rhs |[`field`](../../getting-started/using-data-containers.md#field) |  |
| <strong>Pin 10</strong> <br><span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span> | dn |[`vector<double>`](../../getting-started/using-data-containers.md#vector<double>) |  |
| <strong>Pin 11</strong> <br><span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span> | dr_cross_n |[`vector<double>`](../../getting-started/using-data-containers.md#vector<double>) |  |
| <strong>Pin 12</strong> <br><span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span> | drn |[`vector<double>`](../../getting-started/using-data-containers.md#vector<double>) |  |
| <strong>Pin 13</strong> <br><span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span> | dn_cross_n |[`vector<double>`](../../getting-started/using-data-containers.md#vector<double>) |  |
| <strong>Pin 14</strong> <br><span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span> | dnx_y |[`vector<double>`](../../getting-started/using-data-containers.md#vector<double>) |  |
| <strong>Pin 15</strong> <br><span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span> | dny_y |[`vector<double>`](../../getting-started/using-data-containers.md#vector<double>) |  |
| <strong>Pin 16</strong> <br><span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span> | dnz_y |[`vector<double>`](../../getting-started/using-data-containers.md#vector<double>) |  |
| <strong>Pin 17</strong> <br><span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span> | dyx_n |[`vector<double>`](../../getting-started/using-data-containers.md#vector<double>) |  |
| <strong>Pin 18</strong> <br><span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span> | dyy_n |[`vector<double>`](../../getting-started/using-data-containers.md#vector<double>) |  |
| <strong>Pin 19</strong> <br><span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span> | dyz_n |[`vector<double>`](../../getting-started/using-data-containers.md#vector<double>) |  |
| <strong>Pin 20</strong> <br><span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span> | dnxn |[`vector<double>`](../../getting-started/using-data-containers.md#vector<double>) |  |
| <strong>Pin 21</strong> <br><span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span> | dnyn |[`vector<double>`](../../getting-started/using-data-containers.md#vector<double>) |  |
| <strong>Pin 22</strong> <br><span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span> | dnzn |[`vector<double>`](../../getting-started/using-data-containers.md#vector<double>) |  |

## Configurations

| Name| Expected type(s) | Default value | Description |
|-----|------|----------|-------------|
| **mutex** |[`bool`](../../getting-started/using-data-containers.md#bool) | false | If this option is set to true, the shared memory is prevented from being simultaneously accessed by multiple threads. |

## Scripting

- Category: result
- Plugin: core
- Scripting name: read_cms_rbd_file
- Full name: result.read_cms_rbd_file
- Internal name: read_cms_rbd_file
- License: None
  