# mapping:solid to skin (fields container)

## Description

Maps a field defined on solid elements to a field defined on skin elements. Three cases are possible, based on the solid field data location; (i) Elemental: The values associated with the solid elements are copied according to those underlying the skin, (ii) Nodal: The solid field is rescoped with respect to the nodes of the skin mesh, (iii) ElementalNodal: The values are copied from the solid mesh to the skin mesh for each element face and the nodes associated with it.

## Inputs


| Input | Name| Expected type(s) | Required | Description |
|-------|-----|------|----------|-------------|
| **Pin 0** | fields_container |[`fields_container`](../getting-started/using-data-containers.md#fields-container) | Yes | field or fields container with only one field is expected |
| **Pin 1** | mesh |[`abstract_meshed_region`](../getting-started/using-data-containers.md#abstract-meshed-region) | Yes | skin mesh region expected |
| **Pin 2** | solid_mesh |[`abstract_meshed_region`](../getting-started/using-data-containers.md#abstract-meshed-region) | No | Solid mesh support (optional). |

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
| **mapping** | core | solid_to_skin_fc | mapping.solid_to_skin_fc | solid_to_skin_fc | None |
