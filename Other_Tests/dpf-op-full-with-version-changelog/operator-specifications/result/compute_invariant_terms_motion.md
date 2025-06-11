---
category: result
plugin: core
license: None
Version: 0.0.0
---

# result:compute invariant terms motion

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
| <strong>Pin 4</strong> <br><span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  field_coordinates |[`field`](../../getting-started/using-data-containers.md#field) | coordinates of all nodes |
| <strong>Pin 5</strong> <br><span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  nod |[`vector<int32>`](../../getting-started/using-data-containers.md#vector<int32>) |  |


## Outputs

| Output |  Name | Expected type(s) | Description |
|-------|------|------------------|-------------|
|  **Pin 0**| model_data |[`property_field`](../../getting-started/using-data-containers.md#property-field) | data describing the finite element model |
|  **Pin 1**| mode_shapes |[`fields_container`](../../getting-started/using-data-containers.md#fields-container) | FieldsContainers containing the mode shapes, which are CST and NOR for the cms method |
|  **Pin 2**| lumped_mass |[`fields_container`](../../getting-started/using-data-containers.md#fields-container) | FieldsContainers containing the lumped mass |
|  **Pin 3**| field_coordinates_and_euler_angles |[`fields_container`](../../getting-started/using-data-containers.md#fields-container) | coordinates and euler angles of all nodes |
|  **Pin 4**| nod |[`vector<int32>`](../../getting-started/using-data-containers.md#vector<int32>) |  |
|  **Pin 5**| used_node_index |[`vector<int32>`](../../getting-started/using-data-containers.md#vector<int32>) |  |
|  **Pin 6**| eigenvalue |[`vector<double>`](../../getting-started/using-data-containers.md#vector<double>) |  |
|  **Pin 7**| translational_mode_shape |[`vector<double>`](../../getting-started/using-data-containers.md#vector<double>) |  |
|  **Pin 8**| rotational_mode_shape |[`vector<double>`](../../getting-started/using-data-containers.md#vector<double>) |  |
|  **Pin 9**| invrt_1 |[`double`](../../getting-started/using-data-containers.md#double) |  |
|  **Pin 10**| invrt_2 |[`vector<double>`](../../getting-started/using-data-containers.md#vector<double>) |  |
|  **Pin 11**| invrt_3 |[`vector<double>`](../../getting-started/using-data-containers.md#vector<double>) |  |
|  **Pin 12**| invrt_4 |[`vector<double>`](../../getting-started/using-data-containers.md#vector<double>) |  |
|  **Pin 13**| invrt_5 |[`vector<double>`](../../getting-started/using-data-containers.md#vector<double>) |  |
|  **Pin 14**| invrt_6 |[`vector<double>`](../../getting-started/using-data-containers.md#vector<double>) |  |
|  **Pin 15**| invrt_7 |[`vector<double>`](../../getting-started/using-data-containers.md#vector<double>) |  |
|  **Pin 16**| invrt_8 |[`vector<double>`](../../getting-started/using-data-containers.md#vector<double>) |  |

## Configurations

| Name| Expected type(s) | Default value | Description |
|-----|------|----------|-------------|
| **mutex** |[`bool`](../../getting-started/using-data-containers.md#bool) | false | If this option is set to true, the shared memory is prevented from being simultaneously accessed by multiple threads. |

## Scripting

 **Category**: result

 **Plugin**: core

 **Scripting name**: compute_invariant_terms_motion

 **Full name**: result.compute_invariant_terms_motion

 **Internal name**: compute_invariant_terms_motion

 **License**: None
 
