# scoping:on named selection

## Description

provides a scoping at a given location based on a given named selection

## Inputs


| Input | Name| Expected type(s) | Required | Description |
|-------|-----|------|----------|-------------|
| **Pin 0** | requested_location |[`string`](../../getting-started/using-data-containers.md#string) | Yes |  |
| **Pin 1** | named_selection_name |[`string`](../../getting-started/using-data-containers.md#string) | Yes | the string is expected to be in upper case |
| **Pin 2** | int_inclusive |[`int32`](../../getting-started/using-data-containers.md#int32) | No | If element scoping is requested on a nodal named selection, if Inclusive == 1 then add all the elements adjacent to the nodes.If Inclusive == 0, only the elements which have all their nodes in the named selection are included |
| **Pin 3** | streams_container |[`streams_container`](../../getting-started/using-data-containers.md#streams-container) | No |  |
| **Pin 4** | data_sources |[`data_sources`](../../getting-started/using-data-containers.md#data-sources) | Yes |  |

## Outputs

| Input | Name| Expected type(s) | Required | Description |
|-------|-----|------|----------|-------------|
| **Pin 0** | mesh_scoping |[`scoping`](../../getting-started/using-data-containers.md#scoping) | Yes |  |

## Configurations

| Name| Expected type(s) | Default value | Description |
|-----|------|----------|-------------|
| **Pin mutex** |[`bool`](../../getting-started/using-data-containers.md#bool) | false | If this option is set to true, the shared memory is prevented from being simultaneously accessed by multiple threads. |

## Scripting

| Category| Plugin | Scripting name | Full name | Internal name | License |
|---------|--------|----------------|-----------|---------------|---------|
| **scoping** | core | on_named_selection | scoping.on_named_selection | scoping_provider_by_ns | None |
