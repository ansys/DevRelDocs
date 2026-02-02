---
category: result
plugin: core
license: None
---

# result:compute invariant terms motion

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
| <strong>Pin 4</strong> <br><span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  field_coordinates |[`field`](../../core-concepts/dpf-types.md#field) | coordinates of all nodes |
| <strong>Pin 5</strong> <br><span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  nod |[`vector<int32>`](../../core-concepts/dpf-types.md#standard-types) |  |

## Outputs

| Output |  Name | Expected type(s) | Description |
|-------|------|------------------|-------------|
|  **Pin 0**| model_data |[`property_field`](../../core-concepts/dpf-types.md#property-field) | data describing the finite element model |
|  **Pin 1**| mode_shapes |[`fields_container`](../../core-concepts/dpf-types.md#fields-container) | FieldsContainers containing the mode shapes, which are CST and NOR for the cms method |
|  **Pin 2**| lumped_mass |[`fields_container`](../../core-concepts/dpf-types.md#fields-container) | FieldsContainers containing the lumped mass |
|  **Pin 3**| field_coordinates_and_euler_angles |[`fields_container`](../../core-concepts/dpf-types.md#fields-container) | coordinates and euler angles of all nodes |
|  **Pin 4**| nod |[`vector<int32>`](../../core-concepts/dpf-types.md#standard-types) |  |
|  **Pin 5**| used_node_index |[`vector<int32>`](../../core-concepts/dpf-types.md#standard-types) |  |
|  **Pin 6**| eigenvalue |[`vector<double>`](../../core-concepts/dpf-types.md#standard-types) |  |
|  **Pin 7**| translational_mode_shape |[`vector<double>`](../../core-concepts/dpf-types.md#standard-types) |  |
|  **Pin 8**| rotational_mode_shape |[`vector<double>`](../../core-concepts/dpf-types.md#standard-types) |  |
|  **Pin 9**| invrt_1 |[`double`](../../core-concepts/dpf-types.md#standard-types) |  |
|  **Pin 10**| invrt_2 |[`vector<double>`](../../core-concepts/dpf-types.md#standard-types) |  |
|  **Pin 11**| invrt_3 |[`vector<double>`](../../core-concepts/dpf-types.md#standard-types) |  |
|  **Pin 12**| invrt_4 |[`vector<double>`](../../core-concepts/dpf-types.md#standard-types) |  |
|  **Pin 13**| invrt_5 |[`vector<double>`](../../core-concepts/dpf-types.md#standard-types) |  |
|  **Pin 14**| invrt_6 |[`vector<double>`](../../core-concepts/dpf-types.md#standard-types) |  |
|  **Pin 15**| invrt_7 |[`vector<double>`](../../core-concepts/dpf-types.md#standard-types) |  |
|  **Pin 16**| invrt_8 |[`vector<double>`](../../core-concepts/dpf-types.md#standard-types) |  |

## Configurations

| Name| Expected type(s) | Default value | Description |
|-----|------|----------|-------------|
| **mutex** |[`bool`](../../core-concepts/dpf-types.md#standard-types) | false | If this option is set to true, the shared memory is prevented from being simultaneously accessed by multiple threads. |

## Scripting

 **Category**: result

 **Plugin**: core

 **Scripting name**: compute_invariant_terms_motion

 **Full name**: result.compute_invariant_terms_motion

 **Internal name**: compute_invariant_terms_motion

 **License**: None


## Changelog

- Version 0.0.0: Initial release.