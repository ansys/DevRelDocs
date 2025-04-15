# result:transform invariant terms rbd

## Description

Transform invariant terms rbd based on a coordinate system (translation + rotation).

## Inputs


| Input | Name| Expected type(s) | Required | Description |
|-------|-----|------|----------|-------------|
| **Pin 0** | rotation_matrix |[`field`](../../getting-started/using-data-containers.md#field) | Yes | 3-3 rotation matrix. |
| **Pin 1** | coordinate_system |[`field`](../../getting-started/using-data-containers.md#field) | Yes | origin of the new coordinate system. |
| **Pin 2** | model_data |[`property_field`](../../getting-started/using-data-containers.md#property-field) | Yes | data describing the finite element model |
| **Pin 3** | center_of_mass |[`field`](../../getting-started/using-data-containers.md#field) | Yes | center of mass of the body |
| **Pin 4** | inertia_relief |[`field`](../../getting-started/using-data-containers.md#field) | Yes | inertia matrix |
| **Pin 5** | model_size |[`double`](../../getting-started/using-data-containers.md#double) | Yes | size of the diagonal box containing the body |
| **Pin 6** | master_node_coordinates |[`vector<double>`](../../getting-started/using-data-containers.md#vector<double>) | Yes |  |
| **Pin 7** | v_trsf |[`vector<double>`](../../getting-started/using-data-containers.md#vector<double>) | Yes | translational and rotational shape functions |
| **Pin 8** | k_mat |[`field`](../../getting-started/using-data-containers.md#field) | Yes |  |
| **Pin 9** | mass_mat |[`field`](../../getting-started/using-data-containers.md#field) | Yes |  |
| **Pin 10** | c_mat |[`field`](../../getting-started/using-data-containers.md#field) | Yes |  |
| **Pin 11** | rhs |[`field`](../../getting-started/using-data-containers.md#field) | Yes |  |
| **Pin 12** | dn |[`vector<double>`](../../getting-started/using-data-containers.md#vector<double>) | Yes |  |
| **Pin 13** | dr_cross_n |[`vector<double>`](../../getting-started/using-data-containers.md#vector<double>) | Yes |  |
| **Pin 14** | drn |[`vector<double>`](../../getting-started/using-data-containers.md#vector<double>) | Yes |  |
| **Pin 15** | dn_cross_n |[`vector<double>`](../../getting-started/using-data-containers.md#vector<double>) | Yes |  |
| **Pin 16** | dnx_y |[`vector<double>`](../../getting-started/using-data-containers.md#vector<double>) | Yes |  |
| **Pin 17** | dny_y |[`vector<double>`](../../getting-started/using-data-containers.md#vector<double>) | Yes |  |
| **Pin 18** | dnz_y |[`vector<double>`](../../getting-started/using-data-containers.md#vector<double>) | Yes |  |
| **Pin 19** | dyx_n |[`vector<double>`](../../getting-started/using-data-containers.md#vector<double>) | Yes |  |
| **Pin 20** | dyy_n |[`vector<double>`](../../getting-started/using-data-containers.md#vector<double>) | Yes |  |
| **Pin 21** | dyz_n |[`vector<double>`](../../getting-started/using-data-containers.md#vector<double>) | Yes |  |
| **Pin 22** | dnxn |[`vector<double>`](../../getting-started/using-data-containers.md#vector<double>) | Yes |  |
| **Pin 23** | dnyn |[`vector<double>`](../../getting-started/using-data-containers.md#vector<double>) | Yes |  |
| **Pin 24** | dnzn |[`vector<double>`](../../getting-started/using-data-containers.md#vector<double>) | Yes |  |

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
| **Pin inplace** |[`bool`](../../getting-started/using-data-containers.md#bool) | false | The output is written over the input to save memory if this config is set to true. |
| **Pin mutex** |[`bool`](../../getting-started/using-data-containers.md#bool) | false | If this option is set to true, the shared memory is prevented from being simultaneously accessed by multiple threads. |

## Scripting

| Category| Plugin | Scripting name | Full name | Internal name | License |
|---------|--------|----------------|-----------|---------------|---------|
| **result** | core | transform_invariant_terms_rbd | result.transform_invariant_terms_rbd | transform_invariant_terms_rbd | None |
