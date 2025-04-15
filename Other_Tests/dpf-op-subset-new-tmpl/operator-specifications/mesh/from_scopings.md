# mesh:from scopings

## Description

Extracts multiple meshed region base on a scoping and saved in a MeshesContainer

## Inputs


| Input | Name| Expected type(s) | Required | Description |
|-------|-----|------|----------|-------------|
| **Pin 1** | scopings_container |[`scopings_container`](../../getting-started/using-data-containers.md#scopings-container) | Yes | if nodal scoping, then the scoping is transposed respecting the inclusive pin |
| **Pin 2** | inclusive |[`int32`](../../getting-started/using-data-containers.md#int32) | No | if inclusive == 1 then all the elements/faces adjacent to the nodes ids in input are added, if inclusive == 0, only the elements/faces which have all their nodes in the scoping are included |
| **Pin 3** | nodes_only |[`bool`](../../getting-started/using-data-containers.md#bool) | No | returns mesh with nodes only (without any elements). Default is false. |
| **Pin 7** | mesh |[`abstract_meshed_region`](../../getting-started/using-data-containers.md#abstract-meshed-region) | Yes |  |

## Outputs

| Input | Name| Expected type(s) | Required | Description |
|-------|-----|------|----------|-------------|
| **Pin 0** | meshes |[`meshes_container`](../../getting-started/using-data-containers.md#meshes-container) | Yes |  |

## Configurations

| Name| Expected type(s) | Default value | Description |
|-----|------|----------|-------------|
| **Pin mutex** |[`bool`](../../getting-started/using-data-containers.md#bool) | false | If this option is set to true, the shared memory is prevented from being simultaneously accessed by multiple threads. |

## Scripting

| Category| Plugin | Scripting name | Full name | Internal name | License |
|---------|--------|----------------|-----------|---------------|---------|
| **mesh** | core | from_scopings | mesh.from_scopings | meshes::by_scopings | any_dpf_supported_increments |
