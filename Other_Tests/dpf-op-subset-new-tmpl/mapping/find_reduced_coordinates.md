# mapping:find reduced coordinates

## Description

Finds the elements corresponding to the given coordinates in input and computes their reduced coordinates in those elements.

## Inputs


| Input | Name| Expected type(s) | Required | Description |
|-------|-----|------|----------|-------------|
| **Pin 1** | coordinates |[`field`](../getting-started/using-data-containers.md#field), [`fields_container`](../getting-started/using-data-containers.md#fields-container), [`abstract_meshed_region`](../getting-started/using-data-containers.md#abstract-meshed-region), [`meshes_container`](../getting-started/using-data-containers.md#meshes-container) | Yes |  |
| **Pin 7** | mesh |[`abstract_meshed_region`](../getting-started/using-data-containers.md#abstract-meshed-region), [`meshes_container`](../getting-started/using-data-containers.md#meshes-container) | No | If the first field in input has no mesh in support, then the mesh in this pin is expected (default is false). If a meshes container with several meshes is set, it should be on the same label spaces as the coordinates fields container. |
| **Pin 200** | use_quadratic_elements |[`bool`](../getting-started/using-data-containers.md#bool) | No | If this pin is set to true, reduced coordinates are computed on the quadratic element if the element is quadratic (more precise but less performant). Default is false. |

## Outputs

| Input | Name| Expected type(s) | Required | Description |
|-------|-----|------|----------|-------------|
| **Pin 0** | reduced_coordinates |[`fields_container`](../getting-started/using-data-containers.md#fields-container) | Yes | coordinates in the reference elements |
| **Pin 1** | element_ids |[`scopings_container`](../getting-started/using-data-containers.md#scopings-container) | Yes | Ids of the elements where each set of reduced coordinates is found |

## Configurations

| Name| Expected type(s) | Default value | Description |
|-----|------|----------|-------------|
| **Pin mutex** |[`bool`](../getting-started/using-data-containers.md#bool) | false | If this option is set to true, the shared memory is prevented from being simultaneously accessed by multiple threads. |

## Scripting

| Category| Plugin | Scripting name | Full name | Internal name | License |
|---------|--------|----------------|-----------|---------------|---------|
| **mapping** | core | find_reduced_coordinates | mapping.find_reduced_coordinates | find_reduced_coordinates | None |
