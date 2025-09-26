---
category: result
plugin: core
license: None
---

# result:rom data provider

**Version: 0.0.0**

## Description

Set the required data for the invariant terms computation (reduced matrices, lumped mass matrix, modes ...)

## Inputs

| Input | Name | Expected type(s) | Description |
|-------|-------|------------------|-------------|
| <strong>Pin 0</strong> <br><span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  rom_type |[`bool`](../../core-concepts/dpf-types.md#standard-types) | If this pin is set to true, customized rom data must be given |
| <strong>Pin 1</strong> <br><span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  reduced_stiff_matrix |[`fields_container`](../../core-concepts/dpf-types.md#fields-container) | FieldsContainers containing the reduced Stiffness matrix |
| <strong>Pin 2</strong> <br><span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  reduced_damping_matrix |[`fields_container`](../../core-concepts/dpf-types.md#fields-container) | FieldsContainers containing the reduced Mass matrix |
| <strong>Pin 3</strong> <br><span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  reduced_mass_matrix |[`fields_container`](../../core-concepts/dpf-types.md#fields-container) | FieldsContainers containing the reduced Damp matrix |
| <strong>Pin 4</strong> <br><span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  data_sources |[`data_sources`](../../core-concepts/dpf-types.md#data-sources) |  |
| <strong>Pin 5</strong> <br><span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  reduced_rhs_vector |[`fields_container`](../../core-concepts/dpf-types.md#fields-container) | FieldsContainers containing the reduced RHS vector |
| <strong>Pin 6</strong> <br><span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  lumped_mass_matrix |[`fields_container`](../../core-concepts/dpf-types.md#fields-container) | FieldsContainers containing the lumped Mass matrix |
| <strong>Pin 7</strong> <br><span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  mode_shapes |[`fields_container`](../../core-concepts/dpf-types.md#fields-container) | FieldsContainers containing the customized mode shapes |

## Outputs

| Output |  Name | Expected type(s) | Description |
|-------|------|------------------|-------------|
|  **Pin 0**| rom_matrices |[`fields_container`](../../core-concepts/dpf-types.md#fields-container) | FieldsContainers containing the reduced matrices |
|  **Pin 1**| mode_shapes |[`fields_container`](../../core-concepts/dpf-types.md#fields-container) | FieldsContainers containing the mode shapes, which are CST and NOR for the cms method |
|  **Pin 2**| lumped_mass |[`fields_container`](../../core-concepts/dpf-types.md#fields-container) | FieldsContainers containing the lumped mass |
|  **Pin 3**| model_data |[`property_field`](../../core-concepts/dpf-types.md#property-field) | data describing the finite element model |
|  **Pin 4**| center_of_mass |[`property_field`](../../core-concepts/dpf-types.md#property-field) |  |
|  **Pin 5**| inertia_relief |[`field`](../../core-concepts/dpf-types.md#field) | inertia matrix |
|  **Pin 6**| model_size |[`double`](../../core-concepts/dpf-types.md#standard-types) | size of the model |
|  **Pin 7**| field_coordinates_and_euler_angles |[`double`](../../core-concepts/dpf-types.md#standard-types) | coordinates and euler angles of all nodes |
|  **Pin 8**| nod |[`vector<int32>`](../../core-concepts/dpf-types.md#standard-types) | ids of master nodes |
|  **Pin 9**| meshed_region |[`abstract_meshed_region`](../../core-concepts/dpf-types.md#meshed-region) | expanded meshed region. |

## Configurations

| Name| Expected type(s) | Default value | Description |
|-----|------|----------|-------------|
| **mutex** |[`bool`](../../core-concepts/dpf-types.md#standard-types) | false | If this option is set to true, the shared memory is prevented from being simultaneously accessed by multiple threads. |

## Scripting

 **Category**: result

 **Plugin**: core

 **Scripting name**: rom_data_provider

 **Full name**: result.rom_data_provider

 **Internal name**: rom_data_provider

 **License**: None


## Changelog

- Version 0.0.0: Initial release.