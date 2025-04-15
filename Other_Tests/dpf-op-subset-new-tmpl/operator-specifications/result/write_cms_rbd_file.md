# result:write cms rbd file

## Description

Write the invariant terms and the model data in a cms_rbd file

## Inputs


| Input | Name| Expected type(s) | Required | Description |
|-------|-----|------|----------|-------------|
| **Pin 0** | model_data |[`property_field`](../../getting-started/using-data-containers.md#property-field) | Yes | data describing the finite element model |
| **Pin 1** | center_of_mass |[`field`](../../getting-started/using-data-containers.md#field) | Yes | center of mass of the body |
| **Pin 2** | inertia_relief |[`field`](../../getting-started/using-data-containers.md#field) | Yes | inertia matrix |
| **Pin 3** | model_size |[`double`](../../getting-started/using-data-containers.md#double) | Yes | size of the diagonal box containing the body |
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
| **Pin 23** | file_path |[`string`](../../getting-started/using-data-containers.md#string) | Yes | path with cms_rbd extension where the export occurs |

## Outputs

| Input | Name| Expected type(s) | Required | Description |
|-------|-----|------|----------|-------------|
| **Pin 0** | data_sources |[`data_sources`](../../getting-started/using-data-containers.md#data-sources) | Yes | Data Source containing the cms_rbd file generated. |

## Configurations

| Name| Expected type(s) | Default value | Description |
|-----|------|----------|-------------|
| **Pin mutex** |[`bool`](../../getting-started/using-data-containers.md#bool) | false | If this option is set to true, the shared memory is prevented from being simultaneously accessed by multiple threads. |

## Scripting

| Category| Plugin | Scripting name | Full name | Internal name | License |
|---------|--------|----------------|-----------|---------------|---------|
| **result** | core | write_cms_rbd_file | result.write_cms_rbd_file | write_cms_rbd_file | None |
