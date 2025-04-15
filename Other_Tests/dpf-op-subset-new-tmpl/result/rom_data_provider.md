# result:rom data provider

## Description

Set the required data for the invariant terms computation (reduced matrices, lumped mass matrix, modes ...)

## Inputs


| Input | Name| Expected type(s) | Required | Description |
|-------|-----|------|----------|-------------|
| **Pin 0** | rom_type |[`bool`](../getting-started/using-data-containers.md#bool) | Yes | If this pin is set to true, customized rom data must be given |
| **Pin 1** | reduced_stiff_matrix |[`fields_container`](../getting-started/using-data-containers.md#fields-container) | Yes | FieldsContainers containing the reduced Stiffness matrix |
| **Pin 2** | reduced_damping_matrix |[`fields_container`](../getting-started/using-data-containers.md#fields-container) | Yes | FieldsContainers containing the reduced Mass matrix |
| **Pin 3** | reduced_mass_matrix |[`fields_container`](../getting-started/using-data-containers.md#fields-container) | Yes | FieldsContainers containing the reduced Damp matrix |
| **Pin 4** | data_sources |[`data_sources`](../getting-started/using-data-containers.md#data-sources) | Yes |  |
| **Pin 5** | reduced_rhs_vector |[`fields_container`](../getting-started/using-data-containers.md#fields-container) | Yes | FieldsContainers containing the reduced RHS vector |
| **Pin 6** | lumped_mass_matrix |[`fields_container`](../getting-started/using-data-containers.md#fields-container) | Yes | FieldsContainers containing the lumped Mass matrix |
| **Pin 7** | mode_shapes |[`fields_container`](../getting-started/using-data-containers.md#fields-container) | Yes | FieldsContainers containing the customized mode shapes |

## Outputs

| Input | Name| Expected type(s) | Required | Description |
|-------|-----|------|----------|-------------|
| **Pin 0** | rom_matrices |[`fields_container`](../getting-started/using-data-containers.md#fields-container) | Yes | FieldsContainers containing the reduced matrices |
| **Pin 1** | mode_shapes |[`fields_container`](../getting-started/using-data-containers.md#fields-container) | Yes | FieldsContainers containing the mode shapes, which are CST and NOR for the cms method |
| **Pin 2** | lumped_mass |[`fields_container`](../getting-started/using-data-containers.md#fields-container) | Yes | FieldsContainers containing the lumped mass |
| **Pin 3** | model_data |[`property_field`](../getting-started/using-data-containers.md#property-field) | Yes | data describing the finite element model |
| **Pin 4** | center_of_mass |[`property_field`](../getting-started/using-data-containers.md#property-field) | Yes |  |
| **Pin 5** | inertia_relief |[`field`](../getting-started/using-data-containers.md#field) | Yes | inertia matrix |
| **Pin 6** | model_size |[`double`](../getting-started/using-data-containers.md#double) | Yes | size of the model |
| **Pin 7** | field_coordinates_and_euler_angles |[`double`](../getting-started/using-data-containers.md#double) | Yes | coordinates and euler angles of all nodes |
| **Pin 8** | nod |[`vector<int32>`](../getting-started/using-data-containers.md#vector<int32>) | Yes | ids of master nodes |
| **Pin 9** | meshed_region |[`abstract_meshed_region`](../getting-started/using-data-containers.md#abstract-meshed-region) | Yes | expanded meshed region. |

## Configurations

| Name| Expected type(s) | Default value | Description |
|-----|------|----------|-------------|
| **Pin mutex** |[`bool`](../getting-started/using-data-containers.md#bool) | false | If this option is set to true, the shared memory is prevented from being simultaneously accessed by multiple threads. |

## Scripting

| Category| Plugin | Scripting name | Full name | Internal name | License |
|---------|--------|----------------|-----------|---------------|---------|
| **result** | core | rom_data_provider | result.rom_data_provider | rom_data_provider | None |
