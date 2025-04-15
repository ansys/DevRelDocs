# averaging:elemental mean (fields container)

## Description

Computes the average of a multi-entity container of fields, (ElementalNodal -> Elemental), (NodalElemental -> Nodal). If the input fields are mixed shell/solid and collapseShellLayers is not specified, then the fields are split by element shape and the output fields container has an elshape label.

## Inputs


| Input | Name| Expected type(s) | Required | Description |
|-------|-----|------|----------|-------------|
| **Pin 0** | fields_container |[`fields_container`](../getting-started/using-data-containers.md#fields-container) | Yes |  |
| **Pin 1** | collapse_shell_layers |[`bool`](../getting-started/using-data-containers.md#bool) | No | If true, shell layers are averaged as well (default is false). |
| **Pin 2** | force_averaging |[`bool`](../getting-started/using-data-containers.md#bool) | No | If true you average, if false you just sum. |
| **Pin 3** | scoping |[`scoping`](../getting-started/using-data-containers.md#scoping) | No | Average only on these elements. If it is a scoping container, the label must correspond to the one of the fields containers. |
| **Pin 4** | abstract_meshed_region |[`abstract_meshed_region`](../getting-started/using-data-containers.md#abstract-meshed-region) | No | The mesh region in this pin is used to perform the averaging. It is used if there is no fields support. |

## Outputs

| Input | Name| Expected type(s) | Required | Description |
|-------|-----|------|----------|-------------|
| **Pin 0** | fields_container |[`fields_container`](../getting-started/using-data-containers.md#fields-container) | Yes |  |

## Configurations

| Name| Expected type(s) | Default value | Description |
|-----|------|----------|-------------|
| **Pin mutex** |[`bool`](../getting-started/using-data-containers.md#bool) | false | If this option is set to true, the shared memory is prevented from being simultaneously accessed by multiple threads. |

## Scripting

| Category| Plugin | Scripting name | Full name | Internal name | License |
|---------|--------|----------------|-----------|---------------|---------|
| **averaging** | core | elemental_mean_fc | averaging.elemental_mean_fc | entity_average_fc | None |
