---
category: result
plugin: core
license: None
Version: 0.0.0
---

# result:compute invariant terms rbd

## Version

0.0.0

## Changelog

- Version 0.0.0: Initial release.

## Description

Set the required data for the invariant terms computation (reduced matrices, lumped mass matrix, modes ...)


## Inputs

| Input | Name | Expected type(s) | Description |
|-------|-------|------------------|-------------|
| <strong>Pin 0</strong> <br><span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  rom_matrices |[`fields_container`](../../getting-started/using-data-containers.md#fields-container) | FieldsContainers containing the reduced matrices |
| <strong>Pin 1</strong> <br><span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  mode_shapes |[`fields_container`](../../getting-started/using-data-containers.md#fields-container) | FieldsContainers containing the mode shapes, which are CST and NOR for the cms method |
| <strong>Pin 2</strong> <br><span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  lumped_mass |[`fields_container`](../../getting-started/using-data-containers.md#fields-container) | FieldsContainers containing the lumped mass |
| <strong>Pin 3</strong> <br><span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  model_data |[`fields_container`](../../getting-started/using-data-containers.md#fields-container) | data describing the finite element model |
| <strong>Pin 4</strong> <br><span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  center_of_mass |[`fields_container`](../../getting-started/using-data-containers.md#fields-container) |  |
| <strong>Pin 5</strong> <br><span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  inertia_relief |[`fields_container`](../../getting-started/using-data-containers.md#fields-container) | inertia matrix |
| <strong>Pin 6</strong> <br><span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  model_size |[`double`](../../getting-started/using-data-containers.md#double) | model size |
| <strong>Pin 7</strong> <br><span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  field_coordinates |[`field`](../../getting-started/using-data-containers.md#field) | coordinates of all nodes |
| <strong>Pin 8</strong> <br><span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  nod |[`vector<int32>`](../../getting-started/using-data-containers.md#vector<int32>) |  |
| <strong>Pin 9</strong>|  constraint_mode_check |[`bool`](../../getting-started/using-data-containers.md#bool) | if true, the orthogonality of the constraint modes are checked. Default is false. |


## Outputs

| Output |  Name | Expected type(s) | Description |
|-------|------|------------------|-------------|
|  **Pin 0**| model_data |[`property_field`](../../getting-started/using-data-containers.md#property-field) | data describing the finite element model |
|  **Pin 1**| center_of_mass |[`field`](../../getting-started/using-data-containers.md#field) | center of mass of the body |
|  **Pin 2**| inertia_relief |[`field`](../../getting-started/using-data-containers.md#field) | inertia matrix |
|  **Pin 3**| model_size |[`property_field`](../../getting-started/using-data-containers.md#property-field) |  |
|  **Pin 4**| master_node_coordinates |[`vector<double>`](../../getting-started/using-data-containers.md#vector<double>) |  |
|  **Pin 5**| v_trsf |[`vector<double>`](../../getting-started/using-data-containers.md#vector<double>) | translational and rotational shape functions |
|  **Pin 6**| k_mat |[`field`](../../getting-started/using-data-containers.md#field) |  |
|  **Pin 7**| mass_mat |[`field`](../../getting-started/using-data-containers.md#field) |  |
|  **Pin 8**| c_mat |[`field`](../../getting-started/using-data-containers.md#field) |  |
|  **Pin 9**| rhs |[`field`](../../getting-started/using-data-containers.md#field) |  |
|  **Pin 10**| dn |[`vector<double>`](../../getting-started/using-data-containers.md#vector<double>) |  |
|  **Pin 11**| dr_cross_n |[`vector<double>`](../../getting-started/using-data-containers.md#vector<double>) |  |
|  **Pin 12**| drn |[`vector<double>`](../../getting-started/using-data-containers.md#vector<double>) |  |
|  **Pin 13**| dn_cross_n |[`vector<double>`](../../getting-started/using-data-containers.md#vector<double>) |  |
|  **Pin 14**| dnx_y |[`vector<double>`](../../getting-started/using-data-containers.md#vector<double>) |  |
|  **Pin 15**| dny_y |[`vector<double>`](../../getting-started/using-data-containers.md#vector<double>) |  |
|  **Pin 16**| dnz_y |[`vector<double>`](../../getting-started/using-data-containers.md#vector<double>) |  |
|  **Pin 17**| dyx_n |[`vector<double>`](../../getting-started/using-data-containers.md#vector<double>) |  |
|  **Pin 18**| dyy_n |[`vector<double>`](../../getting-started/using-data-containers.md#vector<double>) |  |
|  **Pin 19**| dyz_n |[`vector<double>`](../../getting-started/using-data-containers.md#vector<double>) |  |
|  **Pin 20**| dnxn |[`vector<double>`](../../getting-started/using-data-containers.md#vector<double>) |  |
|  **Pin 21**| dnyn |[`vector<double>`](../../getting-started/using-data-containers.md#vector<double>) |  |
|  **Pin 22**| dnzn |[`vector<double>`](../../getting-started/using-data-containers.md#vector<double>) |  |

## Configurations

| Name| Expected type(s) | Default value | Description |
|-----|------|----------|-------------|
| **mutex** |[`bool`](../../getting-started/using-data-containers.md#bool) | false | If this option is set to true, the shared memory is prevented from being simultaneously accessed by multiple threads. |

## Scripting

 **Category**: result

 **Plugin**: core

 **Scripting name**: compute_invariant_terms_rbd

 **Full name**: result.compute_invariant_terms_rbd

 **Internal name**: compute_invariant_terms_rbd

 **License**: None
 
