# averaging:nodal to elemental (fields container)

## Description

Transforms Nodal fields into Elemental fields using an averaging process. The result is computed on a given element's scoping. If the input fields are mixed shell/solid, and the shell's layers are not specified as collapsed, then the fields are split by element shape and the output fields container has an elshape label.

## Inputs


| Input | Name| Expected type(s) | Required | Description |
|-------|-----|------|----------|-------------|
| **Pin 0** | fields_container |[`fields_container`](../getting-started/using-data-containers.md#fields-container) | Yes |  |
| **Pin 1** | mesh |[`abstract_meshed_region`](../getting-started/using-data-containers.md#abstract-meshed-region), [`meshes_container`](../getting-started/using-data-containers.md#meshes-container) | No | The mesh region in this pin is used to perform the averaging. It is used if there is no fields support. |
| **Pin 3** | scoping |[`scoping`](../getting-started/using-data-containers.md#scoping), [`scopings_container`](../getting-started/using-data-containers.md#scopings-container) | No | Average only on these elements. If it is a scoping container, the label must correspond to the one of the fields containers. |
| **Pin 10** | collapse_shell_layers |[`bool`](../getting-started/using-data-containers.md#bool) | No | If true, shell layers are averaged as well (default is false). |
| **Pin 26** | merge_solid_shell |[`bool`](../getting-started/using-data-containers.md#bool) | No | For shell/solid mixed field, gather in one field all solids and shells (only on one layer, false by default). |
| **Pin 27** | shell_layer |[`int32`](../getting-started/using-data-containers.md#int32) | No | If merge_solid_shell pin set to true, user have to choose a shell layer. For shell/solid mixed field, gather in one field all solids and shells (only on one layer). |

## Outputs

| Input | Name| Expected type(s) | Required | Description |
|-------|-----|------|----------|-------------|
| **Pin 0** | fields_container |[`fields_container`](../getting-started/using-data-containers.md#fields-container) | Yes |  |

## Configurations

| Name| Expected type(s) | Default value | Description |
|-----|------|----------|-------------|
| **Pin mutex** |[`bool`](../getting-started/using-data-containers.md#bool) | false | If this option is set to true, the shared memory is prevented from being simultaneously accessed by multiple threads. |
| **Pin num_threads** |[`int32`](../getting-started/using-data-containers.md#int32) | 0 | Number of threads to use to run in parallel |
| **Pin run_in_parallel** |[`bool`](../getting-started/using-data-containers.md#bool) | true | Loops are allowed to run in parallel if the value of this config is set to true. |

## Scripting

| Category| Plugin | Scripting name | Full name | Internal name | License |
|---------|--------|----------------|-----------|---------------|---------|
| **averaging** | core | nodal_to_elemental_fc | averaging.nodal_to_elemental_fc | nodal_to_elemental_fc | None |
