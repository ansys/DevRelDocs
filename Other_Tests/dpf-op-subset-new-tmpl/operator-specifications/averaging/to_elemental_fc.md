# averaging:to elemental (fields container)

## Description

Transforms Input fields into Elemental fields using an averaging process. The result is computed on a given element's scoping.

## Inputs


| Input | Name| Expected type(s) | Required | Description |
|-------|-----|------|----------|-------------|
| **Pin 0** | fields_container |[`fields_container`](../../getting-started/using-data-containers.md#fields-container) | Yes |  |
| **Pin 1** | mesh |[`abstract_meshed_region`](../../getting-started/using-data-containers.md#abstract-meshed-region) | No |  |
| **Pin 3** | mesh_scoping |[`scoping`](../../getting-started/using-data-containers.md#scoping) | No |  |
| **Pin 7** | smoothen_values |[`bool`](../../getting-started/using-data-containers.md#bool) | No | if it is set to true, Elemental Nodal fields are first averaged on nodes and then averaged on elements (default is false). |
| **Pin 10** | collapse_shell_layers |[`bool`](../../getting-started/using-data-containers.md#bool) | No | if true shell layers are averaged as well (default is false) |
| **Pin 26** | merge_solid_shell |[`bool`](../../getting-started/using-data-containers.md#bool) | No | For shell/solid mixed field, gather in one field all solids and shells (only on one layer, false by default). |
| **Pin 27** | shell_layer |[`int32`](../../getting-started/using-data-containers.md#int32) | No | If merge_solid_shell pin set to true, user have to choose a shell layer. For shell/solid mixed field, gather in one field all solids and shells (only on one layer). |

## Outputs

| Input | Name| Expected type(s) | Required | Description |
|-------|-----|------|----------|-------------|
| **Pin 0** | fields_container |[`fields_container`](../../getting-started/using-data-containers.md#fields-container) | Yes |  |

## Configurations

| Name| Expected type(s) | Default value | Description |
|-----|------|----------|-------------|
| **Pin mutex** |[`bool`](../../getting-started/using-data-containers.md#bool) | false | If this option is set to true, the shared memory is prevented from being simultaneously accessed by multiple threads. |
| **Pin num_threads** |[`int32`](../../getting-started/using-data-containers.md#int32) | 0 | Number of threads to use to run in parallel |
| **Pin run_in_parallel** |[`bool`](../../getting-started/using-data-containers.md#bool) | true | Loops are allowed to run in parallel if the value of this config is set to true. |

## Scripting

| Category| Plugin | Scripting name | Full name | Internal name | License |
|---------|--------|----------------|-----------|---------------|---------|
| **averaging** | core | to_elemental_fc | averaging.to_elemental_fc | to_elemental_fc | None |
