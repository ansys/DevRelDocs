# averaging:elemental mean (field)

## Description

Computes the average of a multi-entity field, (ElementalNodal -> Elemental), (NodalElemental -> Nodal).

## Inputs


| Input | Name| Expected type(s) | Required | Description |
|-------|-----|------|----------|-------------|
| **Pin 0** | field |[`field`](../../getting-started/using-data-containers.md#field) | Yes |  |
| **Pin 1** | collapse_shell_layers |[`bool`](../../getting-started/using-data-containers.md#bool) | No | If true, shell layers are averaged as well (default is false). |
| **Pin 2** | force_averaging |[`bool`](../../getting-started/using-data-containers.md#bool) | No | If true you average, if false you just sum. |
| **Pin 3** | scoping |[`scoping`](../../getting-started/using-data-containers.md#scoping) | No | Average only on these elements. If it is a scoping container, the label must correspond to the one of the fields containers. |

## Outputs

| Input | Name| Expected type(s) | Required | Description |
|-------|-----|------|----------|-------------|
| **Pin 0** | field |[`field`](../../getting-started/using-data-containers.md#field) | Yes |  |

## Configurations

| Name| Expected type(s) | Default value | Description |
|-----|------|----------|-------------|
| **Pin mutex** |[`bool`](../../getting-started/using-data-containers.md#bool) | false | If this option is set to true, the shared memory is prevented from being simultaneously accessed by multiple threads. |

## Scripting

| Category| Plugin | Scripting name | Full name | Internal name | License |
|---------|--------|----------------|-----------|---------------|---------|
| **averaging** | core | elemental_mean | averaging.elemental_mean | entity_average | None |
