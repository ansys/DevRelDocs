# mapping:on reduced coordinates

## Description

Evaluates a result on specified reduced coordinates of given elements (interpolates results inside elements with shape functions).

## Inputs


| Input | Name| Expected type(s) | Required | Description |
|-------|-----|------|----------|-------------|
| **Pin 0** | fields_container |[`fields_container`](../getting-started/using-data-containers.md#fields-container) | Yes |  |
| **Pin 1** | reduced_coordinates |[`field`](../getting-started/using-data-containers.md#field), [`fields_container`](../getting-started/using-data-containers.md#fields-container) | Yes | coordinates in the reference elements to find (found with the operator "find_reduced_coordinates") |
| **Pin 2** | element_ids |[`scopings_container`](../getting-started/using-data-containers.md#scopings-container) | Yes | Ids of the elements where each set of reduced coordinates is found (found with the operator "find_reduced_coordinates") |
| **Pin 7** | mesh |[`abstract_meshed_region`](../getting-started/using-data-containers.md#abstract-meshed-region), [`meshes_container`](../getting-started/using-data-containers.md#meshes-container) | No | if the first field in input has no mesh in support, then the mesh in this pin is expected (default is false), if a meshes container with several meshes is set, it should be on the same label spaces as the coordinates fields container |
| **Pin 200** | use_quadratic_elements |[`bool`](../getting-started/using-data-containers.md#bool) | No | If this pin is set to true, the interpolation is computed on the quadratic element if the element is quadratic (more precise but less performant). Default is false. To use only when results have mid side nodes values. |

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
| **mapping** | core | on_reduced_coordinates | mapping.on_reduced_coordinates | interpolation_operator | None |
