# result:write motion dfmf file

## Description

Write the invariant terms and the model data in a motion dfmf file

## Inputs


| Input | Name| Expected type(s) | Required | Description |
|-------|-----|------|----------|-------------|
| **Pin 0** | model_data |[`property_field`](../../getting-started/using-data-containers.md#property-field) | Yes | data describing the finite element model |
| **Pin 1** | mode_shapes |[`fields_container`](../../getting-started/using-data-containers.md#fields-container) | Yes | FieldsContainers containing the mode shapes, which are CST and NOR for the cms method |
| **Pin 2** | lumped_mass |[`fields_container`](../../getting-started/using-data-containers.md#fields-container) | Yes | FieldsContainers containing the lumped mass |
| **Pin 3** | field_coordinates |[`field`](../../getting-started/using-data-containers.md#field) | Yes | coordinates of all nodes |
| **Pin 4** | nod |[`vector<int32>`](../../getting-started/using-data-containers.md#vector<int32>) | Yes |  |
| **Pin 5** | used_node_index |[`vector<int32>`](../../getting-started/using-data-containers.md#vector<int32>) | Yes |  |
| **Pin 6** | eigenvalue |[`vector<double>`](../../getting-started/using-data-containers.md#vector<double>) | Yes |  |
| **Pin 7** | translational_mode_shape |[`vector<double>`](../../getting-started/using-data-containers.md#vector<double>) | Yes |  |
| **Pin 8** | rotational_mode_shape |[`vector<double>`](../../getting-started/using-data-containers.md#vector<double>) | Yes |  |
| **Pin 9** | invrt_1 |[`double`](../../getting-started/using-data-containers.md#double) | Yes |  |
| **Pin 10** | invrt_2 |[`vector<double>`](../../getting-started/using-data-containers.md#vector<double>) | Yes |  |
| **Pin 11** | invrt_3 |[`vector<double>`](../../getting-started/using-data-containers.md#vector<double>) | Yes |  |
| **Pin 12** | invrt_4 |[`vector<double>`](../../getting-started/using-data-containers.md#vector<double>) | Yes |  |
| **Pin 13** | invrt_5 |[`vector<double>`](../../getting-started/using-data-containers.md#vector<double>) | Yes |  |
| **Pin 14** | invrt_6 |[`vector<double>`](../../getting-started/using-data-containers.md#vector<double>) | Yes |  |
| **Pin 15** | invrt_7 |[`vector<double>`](../../getting-started/using-data-containers.md#vector<double>) | Yes |  |
| **Pin 16** | invrt_8 |[`vector<double>`](../../getting-started/using-data-containers.md#vector<double>) | Yes |  |
| **Pin 17** | dfmffile_path |[`string`](../../getting-started/using-data-containers.md#string) | Yes | path with motion dfmf extension where the export occurs |
| **Pin 18** | rstfile_path |[`string`](../../getting-started/using-data-containers.md#string) | Yes |  |

## Outputs

| Input | Name| Expected type(s) | Required | Description |
|-------|-----|------|----------|-------------|
| **Pin 0** | dfmf_data_source |[`data_sources`](../../getting-started/using-data-containers.md#data-sources) | Yes | Data Source containing the dfmf file generated. |

## Configurations

| Name| Expected type(s) | Default value | Description |
|-----|------|----------|-------------|
| **Pin mutex** |[`bool`](../../getting-started/using-data-containers.md#bool) | false | If this option is set to true, the shared memory is prevented from being simultaneously accessed by multiple threads. |

## Scripting

| Category| Plugin | Scripting name | Full name | Internal name | License |
|---------|--------|----------------|-----------|---------------|---------|
| **result** | core | write_motion_dfmf_file | result.write_motion_dfmf_file | write_motion_dfmf_file | None |
