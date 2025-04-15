# geo:gauss to node (field)

## Description

Extrapolating results available at Gauss or quadrature points to nodal points for one field. The available elements are: Linear quadrangle, parabolic quadrangle, linear hexagonal, quadratic hexagonal, linear tetrahedral, and quadratic tetrahedral 

## Inputs


| Input | Name| Expected type(s) | Required | Description |
|-------|-----|------|----------|-------------|
| **Pin 0** | field |[`field`](../getting-started/using-data-containers.md#field) | Yes |  |
| **Pin 1** | scoping |[`scoping`](../getting-started/using-data-containers.md#scoping) | No | Scoping to integrate on, if not provided, the one from input field is provided. |
| **Pin 7** | mesh |[`abstract_meshed_region`](../getting-started/using-data-containers.md#abstract-meshed-region) | No | Mesh to integrate on. |

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
| **geo** | core | gauss_to_node | geo.gauss_to_node | gauss_to_node | any_dpf_supported_increments |
