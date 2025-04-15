# scoping:transpose

## Description

Transposes the input scoping or scopings container (Elemental/Faces --> Nodal, or Nodal ---> Elemental/Faces), based on the input mesh region.

## Inputs


| Input | Name| Expected type(s) | Required | Description |
|-------|-----|------|----------|-------------|
| **Pin 0** | mesh_scoping |[`scoping`](../getting-started/using-data-containers.md#scoping), [`scopings_container`](../getting-started/using-data-containers.md#scopings-container) | Yes | Scoping or scopings container (the input type is the output type) |
| **Pin 1** | meshed_region |[`meshed_region`](../getting-started/using-data-containers.md#meshed-region), [`meshes_container`](../getting-started/using-data-containers.md#meshes-container) | Yes |  |
| **Pin 2** | inclusive |[`int32`](../getting-started/using-data-containers.md#int32) | No | if inclusive == 1 then all the elements/faces adjacent to the nodes ids in input are added, if inclusive == 0, only the elements/faces which have all their nodes in the scoping are included |
| **Pin 9** | requested_location |[`string`](../getting-started/using-data-containers.md#string) | No | Output scoping location for meshes with nodes, faces and elements. By default, elemental and faces scopings transpose to nodal, and nodal scopings transpose to elemental. |

## Outputs

| Input | Name| Expected type(s) | Required | Description |
|-------|-----|------|----------|-------------|
| **Pin 0** | mesh_scoping |[`scoping`](../getting-started/using-data-containers.md#scoping), [`scopings_container`](../getting-started/using-data-containers.md#scopings-container) | Yes | Scoping or scopings container (the input type is the output type) |

## Configurations

| Name| Expected type(s) | Default value | Description |
|-----|------|----------|-------------|
| **Pin mutex** |[`bool`](../getting-started/using-data-containers.md#bool) | false | If this option is set to true, the shared memory is prevented from being simultaneously accessed by multiple threads. |

## Scripting

| Category| Plugin | Scripting name | Full name | Internal name | License |
|---------|--------|----------------|-----------|---------------|---------|
| **scoping** | core | transpose | scoping.transpose | transpose_scoping | None |
