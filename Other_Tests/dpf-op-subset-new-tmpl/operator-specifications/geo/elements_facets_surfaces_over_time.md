# geo:elements facets surfaces over time

## Description

Calculates for a mesh, the surface of each element's facet over time for each specified time step. The output is a new mesh made with only surface elements.

## Inputs


| Input | Name| Expected type(s) | Required | Description |
|-------|-----|------|----------|-------------|
| **Pin 1** | scoping |[`scoping`](../../getting-started/using-data-containers.md#scoping) | No |  |
| **Pin 2** | displacement |[`fields_container`](../../getting-started/using-data-containers.md#fields-container) | No | Displacement field's container. |
| **Pin 7** | mesh |[`abstract_meshed_region`](../../getting-started/using-data-containers.md#abstract-meshed-region) | No | Mesh must be defined if the displacement field's container does not contain it, or if there is no displacement. |

## Outputs

| Input | Name| Expected type(s) | Required | Description |
|-------|-----|------|----------|-------------|
| **Pin 0** | fields_container |[`fields_container`](../../getting-started/using-data-containers.md#fields-container) | Yes | Surfaces field. |
| **Pin 1** | mesh |[`abstract_meshed_region`](../../getting-started/using-data-containers.md#abstract-meshed-region) | Yes | Mesh made of surface elements only. |

## Configurations

| Name| Expected type(s) | Default value | Description |
|-----|------|----------|-------------|
| **Pin mutex** |[`bool`](../../getting-started/using-data-containers.md#bool) | false | If this option is set to true, the shared memory is prevented from being simultaneously accessed by multiple threads. |

## Scripting

| Category| Plugin | Scripting name | Full name | Internal name | License |
|---------|--------|----------------|-----------|---------------|---------|
| **geo** | core | elements_facets_surfaces_over_time | geo.elements_facets_surfaces_over_time | surfaces_provider | any_dpf_supported_increments |
