# result:read cms_rbd file

## Description

Read the invariant terms and the model data from a cms_rbd file

## Inputs


| Input | Name| Expected type(s) | Required | Description |
|-------|-----|------|----------|-------------|
| **Pin 0** | in_cms_rbd_file_path |[`string`](../../getting-started/using-data-containers.md#string) | Yes | file name with cms_rbd extension where to read the input cms_rbd file. |

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
| **result** | core | read_cms_rbd_file | result.read_cms_rbd_file | read_cms_rbd_file | None |
