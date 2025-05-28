---
category: result
plugin: core
license: None
---

# result:rom data provider

## Description

Set the required data for the invariant terms computation (reduced matrices, lumped mass matrix, modes ...)

### Plugin

core

## Inputs

| Input | Name | Expected type(s) | Description |
|-------|-------|------------------|-------------|
| <strong>Pin 0</strong> <br><span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  rom_type |[`bool`](../../getting-started/using-data-containers.md#bool) | If this pin is set to true, customized rom data must be given |
| <strong>Pin 1</strong> <br><span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  reduced_stiff_matrix |[`fields_container`](../../getting-started/using-data-containers.md#fields-container) | FieldsContainers containing the reduced Stiffness matrix |
| <strong>Pin 2</strong> <br><span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  reduced_damping_matrix |[`fields_container`](../../getting-started/using-data-containers.md#fields-container) | FieldsContainers containing the reduced Mass matrix |
| <strong>Pin 3</strong> <br><span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  reduced_mass_matrix |[`fields_container`](../../getting-started/using-data-containers.md#fields-container) | FieldsContainers containing the reduced Damp matrix |
| <strong>Pin 4</strong> <br><span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  data_sources |[`data_sources`](../../getting-started/using-data-containers.md#data-sources) |  |
| <strong>Pin 5</strong> <br><span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  reduced_rhs_vector |[`fields_container`](../../getting-started/using-data-containers.md#fields-container) | FieldsContainers containing the reduced RHS vector |
| <strong>Pin 6</strong> <br><span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  lumped_mass_matrix |[`fields_container`](../../getting-started/using-data-containers.md#fields-container) | FieldsContainers containing the lumped Mass matrix |
| <strong>Pin 7</strong> <br><span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  mode_shapes |[`fields_container`](../../getting-started/using-data-containers.md#fields-container) | FieldsContainers containing the customized mode shapes |


## Outputs

| Output |  Name | Expected type(s) | Description |
|-------|------|------------------|-------------|
| <strong>Pin 0</strong> <br><span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span> | rom_matrices |[`fields_container`](../../getting-started/using-data-containers.md#fields-container) | FieldsContainers containing the reduced matrices |
| <strong>Pin 1</strong> <br><span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span> | mode_shapes |[`fields_container`](../../getting-started/using-data-containers.md#fields-container) | FieldsContainers containing the mode shapes, which are CST and NOR for the cms method |
| <strong>Pin 2</strong> <br><span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span> | lumped_mass |[`fields_container`](../../getting-started/using-data-containers.md#fields-container) | FieldsContainers containing the lumped mass |
| <strong>Pin 3</strong> <br><span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span> | model_data |[`property_field`](../../getting-started/using-data-containers.md#property-field) | data describing the finite element model |
| <strong>Pin 4</strong> <br><span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span> | center_of_mass |[`property_field`](../../getting-started/using-data-containers.md#property-field) |  |
| <strong>Pin 5</strong> <br><span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span> | inertia_relief |[`field`](../../getting-started/using-data-containers.md#field) | inertia matrix |
| <strong>Pin 6</strong> <br><span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span> | model_size |[`double`](../../getting-started/using-data-containers.md#double) | size of the model |
| <strong>Pin 7</strong> <br><span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span> | field_coordinates_and_euler_angles |[`double`](../../getting-started/using-data-containers.md#double) | coordinates and euler angles of all nodes |
| <strong>Pin 8</strong> <br><span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span> | nod |[`vector<int32>`](../../getting-started/using-data-containers.md#vector<int32>) | ids of master nodes |
| <strong>Pin 9</strong> <br><span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span> | meshed_region |[`abstract_meshed_region`](../../getting-started/using-data-containers.md#abstract-meshed-region) | expanded meshed region. |

## Configurations

| Name| Expected type(s) | Default value | Description |
|-----|------|----------|-------------|
| **mutex** |[`bool`](../../getting-started/using-data-containers.md#bool) | false | If this option is set to true, the shared memory is prevented from being simultaneously accessed by multiple threads. |

## Scripting

- Category: result
- Plugin: core
- Scripting name: rom_data_provider
- Full name: result.rom_data_provider
- Internal name: rom_data_provider
- License: None
  