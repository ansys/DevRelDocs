# scoping:on property

## Description

Provides a scoping at a given location based on a given property name and a property number.

## Inputs


| Input | Name| Expected type(s) | Required | Description |
|-------|-----|------|----------|-------------|
| **Pin 0** | requested_location |[`string`](../../getting-started/using-data-containers.md#string) | Yes | Nodal or Elemental location are expected |
| **Pin 1** | property_name |[`string`](../../getting-started/using-data-containers.md#string) | Yes | ex "mapdl_element_type", "mapdl_element_type_id", "apdl_type_index", "mapdl_type_id", "material", "apdl_section_id", "apdl_real_id", "apdl_esys_id", "shell_axi", "volume_axi"... |
| **Pin 2** | property_id |[`int32`](../../getting-started/using-data-containers.md#int32) | Yes |  |
| **Pin 3** | streams_container |[`streams_container`](../../getting-started/using-data-containers.md#streams-container) | No |  |
| **Pin 4** | data_sources |[`data_sources`](../../getting-started/using-data-containers.md#data-sources) | Yes |  |
| **Pin 5** | inclusive |[`int32`](../../getting-started/using-data-containers.md#int32) | No | If element scoping is requested on a nodal named selection, if inclusive == 1 then all the elements/faces adjacent to the nodes ids in input are added, if inclusive == 0, only the elements/faces which have all their nodes in the scoping are included |

## Outputs

| Input | Name| Expected type(s) | Required | Description |
|-------|-----|------|----------|-------------|
| **Pin 0** | mesh_scoping |[`scoping`](../../getting-started/using-data-containers.md#scoping) | Yes | Scoping |

## Configurations

| Name| Expected type(s) | Default value | Description |
|-----|------|----------|-------------|
| **Pin mutex** |[`bool`](../../getting-started/using-data-containers.md#bool) | false | If this option is set to true, the shared memory is prevented from being simultaneously accessed by multiple threads. |

## Scripting

| Category| Plugin | Scripting name | Full name | Internal name | License |
|---------|--------|----------------|-----------|---------------|---------|
| **scoping** | core | on_property | scoping.on_property | scoping_provider_by_prop | None |
