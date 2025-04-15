# result:compute invariant terms rbd

## Description

Set the required data for the invariant terms computation (reduced matrices, lumped mass matrix, modes ...)

## Inputs


| Input | Name| Expected type(s) | Required | Description |
|-------|-----|------|----------|-------------|
| **Pin 0** | rom_matrices |[`fields_container`](../../getting-started/using-data-containers.md#fields-container) | Yes | FieldsContainers containing the reduced matrices |
| **Pin 1** | mode_shapes |[`fields_container`](../../getting-started/using-data-containers.md#fields-container) | Yes | FieldsContainers containing the mode shapes, which are CST and NOR for the cms method |
| **Pin 2** | lumped_mass |[`fields_container`](../../getting-started/using-data-containers.md#fields-container) | Yes | FieldsContainers containing the lumped mass |
| **Pin 3** | model_data |[`fields_container`](../../getting-started/using-data-containers.md#fields-container) | Yes | data describing the finite element model |
| **Pin 4** | center_of_mass |[`fields_container`](../../getting-started/using-data-containers.md#fields-container) | Yes |  |
| **Pin 5** | inertia_relief |[`fields_container`](../../getting-started/using-data-containers.md#fields-container) | Yes | inertia matrix |
| **Pin 6** | model_size |[`double`](../../getting-started/using-data-containers.md#double) | Yes | model size |
| **Pin 7** | field_coordinates |[`field`](../../getting-started/using-data-containers.md#field) | Yes | coordinates of all nodes |
| **Pin 8** | nod |[`vector<int32>`](../../getting-started/using-data-containers.md#vector<int32>) | Yes |  |
| **Pin 9** | constraint_mode_check |[`bool`](../../getting-started/using-data-containers.md#bool) | No | if true, the orthogonality of the constraint modes are checked. Default is false. |

## Outputs

| Input | Name| Expected type(s) | Required | Description |
|-------|-----|------|----------|-------------|
| **Pin 0** | model_data |[`property_field`](../../getting-started/using-data-containers.md#property-field) | Yes | data describing the finite element model |
| **Pin 1** | center_of_mass |[`field`](../../getting-started/using-data-containers.md#field) | Yes | center of mass of the body |
| **Pin 2** | inertia_relief |[`field`](../../getting-started/using-data-containers.md#field) | Yes | inertia matrix |
| **Pin 3** | model_size |[`property_field`](../../getting-started/using-data-containers.md#property-field) | Yes |  |
| **Pin 4** | master_node_coordinates |[`vector<double>`](../../getting-started/using-data-containers.md#vector<double>) | Yes |  |
| **Pin 5** | v_trsf |[`vector<double>`](../../getting-started/using-data-containers.md#vector<double>) | Yes | translational and rotational shape functions |
| **Pin 6** | k_mat |[`field`](../../getting-started/using-data-containers.md#field) | Yes |  |
| **Pin 7** | mass_mat |[`field`](../../getting-started/using-data-containers.md#field) | Yes |  |
| **Pin 8** | c_mat |[`field`](../../getting-started/using-data-containers.md#field) | Yes |  |
| **Pin 9** | rhs |[`field`](../../getting-started/using-data-containers.md#field) | Yes |  |
| **Pin 10** | dn |[`vector<double>`](../../getting-started/using-data-containers.md#vector<double>) | Yes |  |
| **Pin 11** | dr_cross_n |[`vector<double>`](../../getting-started/using-data-containers.md#vector<double>) | Yes |  |
| **Pin 12** | drn |[`vector<double>`](../../getting-started/using-data-containers.md#vector<double>) | Yes |  |
| **Pin 13** | dn_cross_n |[`vector<double>`](../../getting-started/using-data-containers.md#vector<double>) | Yes |  |
| **Pin 14** | dnx_y |[`vector<double>`](../../getting-started/using-data-containers.md#vector<double>) | Yes |  |
| **Pin 15** | dny_y |[`vector<double>`](../../getting-started/using-data-containers.md#vector<double>) | Yes |  |
| **Pin 16** | dnz_y |[`vector<double>`](../../getting-started/using-data-containers.md#vector<double>) | Yes |  |
| **Pin 17** | dyx_n |[`vector<double>`](../../getting-started/using-data-containers.md#vector<double>) | Yes |  |
| **Pin 18** | dyy_n |[`vector<double>`](../../getting-started/using-data-containers.md#vector<double>) | Yes |  |
| **Pin 19** | dyz_n |[`vector<double>`](../../getting-started/using-data-containers.md#vector<double>) | Yes |  |
| **Pin 20** | dnxn |[`vector<double>`](../../getting-started/using-data-containers.md#vector<double>) | Yes |  |
| **Pin 21** | dnyn |[`vector<double>`](../../getting-started/using-data-containers.md#vector<double>) | Yes |  |
| **Pin 22** | dnzn |[`vector<double>`](../../getting-started/using-data-containers.md#vector<double>) | Yes |  |

## Configurations

| Name| Expected type(s) | Default value | Description |
|-----|------|----------|-------------|
| **Pin mutex** |[`bool`](../../getting-started/using-data-containers.md#bool) | false | If this option is set to true, the shared memory is prevented from being simultaneously accessed by multiple threads. |

## Scripting

| Category| Plugin | Scripting name | Full name | Internal name | License |
|---------|--------|----------------|-----------|---------------|---------|
| **result** | core | compute_invariant_terms_rbd | result.compute_invariant_terms_rbd | compute_invariant_terms_rbd | None |
