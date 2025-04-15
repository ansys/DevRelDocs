# geo:element nodal contribution

## Description

Compute the fraction of the element measure attributed to each node of each element (fraction of the volume for 3D elements, fraction of the area for 2D elements or fraction of the length for 1D elements). It is computed by taking the integral of the shape function associated to each node within each element.

## Inputs


| Input | Name| Expected type(s) | Required | Description |
|-------|-----|------|----------|-------------|
| **Pin 0** | mesh |[`abstract_meshed_region`](../getting-started/using-data-containers.md#abstract-meshed-region) | Yes |  |
| **Pin 1** | scoping |[`scoping`](../getting-started/using-data-containers.md#scoping) | No | Integrate the input field over a specific scoping. |
| **Pin 2** | volume_fraction |[`bool`](../getting-started/using-data-containers.md#bool) | No | If true, returns influence volume, area or length. If false, the values are normalized with the element volume, area or length. Default: true. |

## Outputs

| Input | Name| Expected type(s) | Required | Description |
|-------|-----|------|----------|-------------|
| **Pin 0** | field |[`field`](../getting-started/using-data-containers.md#field) | Yes |  |

## Configurations

| Name| Expected type(s) | Default value | Description |
|-----|------|----------|-------------|
| **Pin mutex** |[`bool`](../getting-started/using-data-containers.md#bool) | false | If this option is set to true, the shared memory is prevented from being simultaneously accessed by multiple threads. |

## Scripting

| Category| Plugin | Scripting name | Full name | Internal name | License |
|---------|--------|----------------|-----------|---------------|---------|
| **geo** | core | element_nodal_contribution | geo.element_nodal_contribution | element::nodal_contribution | any_dpf_supported_increments |
