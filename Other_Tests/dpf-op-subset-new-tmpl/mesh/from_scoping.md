# mesh:from scoping

## Description

Extracts a meshed region from another meshed region based on a scoping. Regarding the property fields of the meshed region: the 'Elemental', 'Face', and 'Nodal' property fields are scoped to the elements or nodes of the output mesh, the 'Global' property fields are transferred from the input mesh to the output mesh without changes, and the rest of the property fields are not present in the output mesh.

## Inputs


| Input | Name| Expected type(s) | Required | Description |
|-------|-----|------|----------|-------------|
| **Pin 1** | scoping |[`scoping`](../getting-started/using-data-containers.md#scoping) | Yes | if nodal scoping, then the scoping is transposed respecting the inclusive pin |
| **Pin 2** | inclusive |[`int32`](../getting-started/using-data-containers.md#int32) | No | if inclusive == 1 then all the elements/faces adjacent to the nodes ids in input are added, if inclusive == 0, only the elements/faces which have all their nodes in the scoping are included |
| **Pin 3** | nodes_only |[`bool`](../getting-started/using-data-containers.md#bool) | No | returns mesh with nodes only (without any elements or property fields). Default is false. |
| **Pin 7** | mesh |[`abstract_meshed_region`](../getting-started/using-data-containers.md#abstract-meshed-region) | Yes |  |

## Outputs

| Input | Name| Expected type(s) | Required | Description |
|-------|-----|------|----------|-------------|
| **Pin 0** | mesh |[`abstract_meshed_region`](../getting-started/using-data-containers.md#abstract-meshed-region) | Yes |  |

## Configurations

| Name| Expected type(s) | Default value | Description |
|-----|------|----------|-------------|
| **Pin mutex** |[`bool`](../getting-started/using-data-containers.md#bool) | false | If this option is set to true, the shared memory is prevented from being simultaneously accessed by multiple threads. |

## Scripting

| Category| Plugin | Scripting name | Full name | Internal name | License |
|---------|--------|----------------|-----------|---------------|---------|
| **mesh** | core | from_scoping | mesh.from_scoping | mesh::by_scoping | any_dpf_supported_increments |
