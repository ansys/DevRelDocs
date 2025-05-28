---
category: result
plugin: core
license: None
---

# result:transform invariant terms rbd

## Description

Transform invariant terms rbd based on a coordinate system (translation + rotation).

### Plugin

core

## Inputs

| Input | Name | Expected type(s) | Description |
|-------|-------|------------------|-------------|
| <strong>Pin 0</strong> <span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  rotation_matrix |[`field`](../../getting-started/using-data-containers.md#field) | 3-3 rotation matrix. |
| <strong>Pin 1</strong> <span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  coordinate_system |[`field`](../../getting-started/using-data-containers.md#field) | origin of the new coordinate system. |
| <strong>Pin 2</strong> <span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  model_data |[`property_field`](../../getting-started/using-data-containers.md#property-field) | data describing the finite element model |
| <strong>Pin 3</strong> <span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  center_of_mass |[`field`](../../getting-started/using-data-containers.md#field) | center of mass of the body |
| <strong>Pin 4</strong> <span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  inertia_relief |[`field`](../../getting-started/using-data-containers.md#field) | inertia matrix |
| <strong>Pin 5</strong> <span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  model_size |[`double`](../../getting-started/using-data-containers.md#double) | size of the diagonal box containing the body |
| <strong>Pin 6</strong> <span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  master_node_coordinates |[`vector<double>`](../../getting-started/using-data-containers.md#vector<double>) |  |
| <strong>Pin 7</strong> <span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  v_trsf |[`vector<double>`](../../getting-started/using-data-containers.md#vector<double>) | translational and rotational shape functions |
| <strong>Pin 8</strong> <span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  k_mat |[`field`](../../getting-started/using-data-containers.md#field) |  |
| <strong>Pin 9</strong> <span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  mass_mat |[`field`](../../getting-started/using-data-containers.md#field) |  |
| <strong>Pin 10</strong> <span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  c_mat |[`field`](../../getting-started/using-data-containers.md#field) |  |
| <strong>Pin 11</strong> <span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  rhs |[`field`](../../getting-started/using-data-containers.md#field) |  |
| <strong>Pin 12</strong> <span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  dn |[`vector<double>`](../../getting-started/using-data-containers.md#vector<double>) |  |
| <strong>Pin 13</strong> <span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  dr_cross_n |[`vector<double>`](../../getting-started/using-data-containers.md#vector<double>) |  |
| <strong>Pin 14</strong> <span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  drn |[`vector<double>`](../../getting-started/using-data-containers.md#vector<double>) |  |
| <strong>Pin 15</strong> <span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  dn_cross_n |[`vector<double>`](../../getting-started/using-data-containers.md#vector<double>) |  |
| <strong>Pin 16</strong> <span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  dnx_y |[`vector<double>`](../../getting-started/using-data-containers.md#vector<double>) |  |
| <strong>Pin 17</strong> <span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  dny_y |[`vector<double>`](../../getting-started/using-data-containers.md#vector<double>) |  |
| <strong>Pin 18</strong> <span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  dnz_y |[`vector<double>`](../../getting-started/using-data-containers.md#vector<double>) |  |
| <strong>Pin 19</strong> <span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  dyx_n |[`vector<double>`](../../getting-started/using-data-containers.md#vector<double>) |  |
| <strong>Pin 20</strong> <span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  dyy_n |[`vector<double>`](../../getting-started/using-data-containers.md#vector<double>) |  |
| <strong>Pin 21</strong> <span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  dyz_n |[`vector<double>`](../../getting-started/using-data-containers.md#vector<double>) |  |
| <strong>Pin 22</strong> <span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  dnxn |[`vector<double>`](../../getting-started/using-data-containers.md#vector<double>) |  |
| <strong>Pin 23</strong> <span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  dnyn |[`vector<double>`](../../getting-started/using-data-containers.md#vector<double>) |  |
| <strong>Pin 24</strong> <span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  dnzn |[`vector<double>`](../../getting-started/using-data-containers.md#vector<double>) |  |


## Outputs

| Output |  Name | Expected type(s) | Description |
|-------|------|------------------|-------------|
| <strong>Pin 0</strong> <span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span> | model_data |[`property_field`](../../getting-started/using-data-containers.md#property-field) | data describing the finite element model |
| <strong>Pin 1</strong> <span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span> | center_of_mass |[`field`](../../getting-started/using-data-containers.md#field) | center of mass of the body |
| <strong>Pin 2</strong> <span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span> | inertia_relief |[`field`](../../getting-started/using-data-containers.md#field) | inertia matrix |
| <strong>Pin 3</strong> <span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span> | model_size |[`property_field`](../../getting-started/using-data-containers.md#property-field) |  |
| <strong>Pin 4</strong> <span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span> | master_node_coordinates |[`vector<double>`](../../getting-started/using-data-containers.md#vector<double>) |  |
| <strong>Pin 5</strong> <span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span> | v_trsf |[`vector<double>`](../../getting-started/using-data-containers.md#vector<double>) | translational and rotational shape functions |
| <strong>Pin 6</strong> <span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span> | k_mat |[`field`](../../getting-started/using-data-containers.md#field) |  |
| <strong>Pin 7</strong> <span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span> | mass_mat |[`field`](../../getting-started/using-data-containers.md#field) |  |
| <strong>Pin 8</strong> <span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span> | c_mat |[`field`](../../getting-started/using-data-containers.md#field) |  |
| <strong>Pin 9</strong> <span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span> | rhs |[`field`](../../getting-started/using-data-containers.md#field) |  |
| <strong>Pin 10</strong> <span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span> | dn |[`vector<double>`](../../getting-started/using-data-containers.md#vector<double>) |  |
| <strong>Pin 11</strong> <span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span> | dr_cross_n |[`vector<double>`](../../getting-started/using-data-containers.md#vector<double>) |  |
| <strong>Pin 12</strong> <span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span> | drn |[`vector<double>`](../../getting-started/using-data-containers.md#vector<double>) |  |
| <strong>Pin 13</strong> <span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span> | dn_cross_n |[`vector<double>`](../../getting-started/using-data-containers.md#vector<double>) |  |
| <strong>Pin 14</strong> <span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span> | dnx_y |[`vector<double>`](../../getting-started/using-data-containers.md#vector<double>) |  |
| <strong>Pin 15</strong> <span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span> | dny_y |[`vector<double>`](../../getting-started/using-data-containers.md#vector<double>) |  |
| <strong>Pin 16</strong> <span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span> | dnz_y |[`vector<double>`](../../getting-started/using-data-containers.md#vector<double>) |  |
| <strong>Pin 17</strong> <span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span> | dyx_n |[`vector<double>`](../../getting-started/using-data-containers.md#vector<double>) |  |
| <strong>Pin 18</strong> <span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span> | dyy_n |[`vector<double>`](../../getting-started/using-data-containers.md#vector<double>) |  |
| <strong>Pin 19</strong> <span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span> | dyz_n |[`vector<double>`](../../getting-started/using-data-containers.md#vector<double>) |  |
| <strong>Pin 20</strong> <span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span> | dnxn |[`vector<double>`](../../getting-started/using-data-containers.md#vector<double>) |  |
| <strong>Pin 21</strong> <span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span> | dnyn |[`vector<double>`](../../getting-started/using-data-containers.md#vector<double>) |  |
| <strong>Pin 22</strong> <span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span> | dnzn |[`vector<double>`](../../getting-started/using-data-containers.md#vector<double>) |  |

## Configurations

| Name| Expected type(s) | Default value | Description |
|-----|------|----------|-------------|
| **inplace** |[`bool`](../../getting-started/using-data-containers.md#bool) | false | The output is written over the input to save memory if this config is set to true. |
| **mutex** |[`bool`](../../getting-started/using-data-containers.md#bool) | false | If this option is set to true, the shared memory is prevented from being simultaneously accessed by multiple threads. |

## Scripting

- Category: result
- Plugin: core
- Scripting name: transform_invariant_terms_rbd
- Full name: result.transform_invariant_terms_rbd
- Internal name: transform_invariant_terms_rbd
- License: None
  