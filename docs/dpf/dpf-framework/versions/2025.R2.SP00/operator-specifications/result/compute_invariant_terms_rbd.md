---
category: result
plugin: core
license: None
---

# result:compute invariant terms rbd

**Version: 0.0.0**

## Description

Set the required data for the invariant terms computation (reduced matrices, lumped mass matrix, modes ...)

## Inputs

| Input | Name | Expected type(s) | Description |
|-------|-------|------------------|-------------|
| <strong>Pin 0</strong> <br><span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  rom_matrices |[`fields_container`](../../core-concepts/dpf-types.md#fields-container) | FieldsContainers containing the reduced matrices |
| <strong>Pin 1</strong> <br><span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  mode_shapes |[`fields_container`](../../core-concepts/dpf-types.md#fields-container) | FieldsContainers containing the mode shapes, which are CST and NOR for the cms method |
| <strong>Pin 2</strong> <br><span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  lumped_mass |[`fields_container`](../../core-concepts/dpf-types.md#fields-container) | FieldsContainers containing the lumped mass |
| <strong>Pin 3</strong> <br><span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  model_data |[`fields_container`](../../core-concepts/dpf-types.md#fields-container) | data describing the finite element model |
| <strong>Pin 4</strong> <br><span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  center_of_mass |[`fields_container`](../../core-concepts/dpf-types.md#fields-container) |  |
| <strong>Pin 5</strong> <br><span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  inertia_relief |[`fields_container`](../../core-concepts/dpf-types.md#fields-container) | inertia matrix |
| <strong>Pin 6</strong> <br><span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  model_size |[`double`](../../core-concepts/dpf-types.md#standard-types) | model size |
| <strong>Pin 7</strong> <br><span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  field_coordinates |[`field`](../../core-concepts/dpf-types.md#field) | coordinates of all nodes |
| <strong>Pin 8</strong> <br><span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  nod |[`vector<int32>`](../../core-concepts/dpf-types.md#standard-types) |  |
| <strong>Pin 9</strong>|  constraint_mode_check |[`bool`](../../core-concepts/dpf-types.md#standard-types) | if true, the orthogonality of the constraint modes are checked. Default is false. |

## Outputs

| Output |  Name | Expected type(s) | Description |
|-------|------|------------------|-------------|
|  **Pin 0**| model_data |[`property_field`](../../core-concepts/dpf-types.md#property-field) | data describing the finite element model |
|  **Pin 1**| center_of_mass |[`field`](../../core-concepts/dpf-types.md#field) | center of mass of the body |
|  **Pin 2**| inertia_relief |[`field`](../../core-concepts/dpf-types.md#field) | inertia matrix |
|  **Pin 3**| model_size |[`property_field`](../../core-concepts/dpf-types.md#property-field) |  |
|  **Pin 4**| master_node_coordinates |[`vector<double>`](../../core-concepts/dpf-types.md#standard-types) |  |
|  **Pin 5**| v_trsf |[`vector<double>`](../../core-concepts/dpf-types.md#standard-types) | translational and rotational shape functions |
|  **Pin 6**| k_mat |[`field`](../../core-concepts/dpf-types.md#field) |  |
|  **Pin 7**| mass_mat |[`field`](../../core-concepts/dpf-types.md#field) |  |
|  **Pin 8**| c_mat |[`field`](../../core-concepts/dpf-types.md#field) |  |
|  **Pin 9**| rhs |[`field`](../../core-concepts/dpf-types.md#field) |  |
|  **Pin 10**| dn |[`vector<double>`](../../core-concepts/dpf-types.md#standard-types) |  |
|  **Pin 11**| dr_cross_n |[`vector<double>`](../../core-concepts/dpf-types.md#standard-types) |  |
|  **Pin 12**| drn |[`vector<double>`](../../core-concepts/dpf-types.md#standard-types) |  |
|  **Pin 13**| dn_cross_n |[`vector<double>`](../../core-concepts/dpf-types.md#standard-types) |  |
|  **Pin 14**| dnx_y |[`vector<double>`](../../core-concepts/dpf-types.md#standard-types) |  |
|  **Pin 15**| dny_y |[`vector<double>`](../../core-concepts/dpf-types.md#standard-types) |  |
|  **Pin 16**| dnz_y |[`vector<double>`](../../core-concepts/dpf-types.md#standard-types) |  |
|  **Pin 17**| dyx_n |[`vector<double>`](../../core-concepts/dpf-types.md#standard-types) |  |
|  **Pin 18**| dyy_n |[`vector<double>`](../../core-concepts/dpf-types.md#standard-types) |  |
|  **Pin 19**| dyz_n |[`vector<double>`](../../core-concepts/dpf-types.md#standard-types) |  |
|  **Pin 20**| dnxn |[`vector<double>`](../../core-concepts/dpf-types.md#standard-types) |  |
|  **Pin 21**| dnyn |[`vector<double>`](../../core-concepts/dpf-types.md#standard-types) |  |
|  **Pin 22**| dnzn |[`vector<double>`](../../core-concepts/dpf-types.md#standard-types) |  |

## Configurations

| Name| Expected type(s) | Default value | Description |
|-----|------|----------|-------------|
| **mutex** |[`bool`](../../core-concepts/dpf-types.md#standard-types) | false | If this option is set to true, the shared memory is prevented from being simultaneously accessed by multiple threads. |

## Scripting

 **Category**: result

 **Plugin**: core

 **Scripting name**: compute_invariant_terms_rbd

 **Full name**: result.compute_invariant_terms_rbd

 **Internal name**: compute_invariant_terms_rbd

 **License**: None


## Changelog

- Version 0.0.0: Initial release.