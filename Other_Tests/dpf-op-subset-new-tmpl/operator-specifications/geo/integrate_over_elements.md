# geo:integrate over elements

## Description

Integration of an input field over mesh.

## Inputs


| Input | Name| Expected type(s) | Required | Description |
|-------|-----|------|----------|-------------|
| **Pin 0** | field |[`field`](../../getting-started/using-data-containers.md#field) | Yes |  |
| **Pin 1** | scoping |[`scoping`](../../getting-started/using-data-containers.md#scoping) | No | Integrate the input field over a specific scoping. |
| **Pin 2** | mesh |[`abstract_meshed_region`](../../getting-started/using-data-containers.md#abstract-meshed-region) | No | Mesh to integrate on. If not provided, the one from input field is employed. |

## Outputs

| Input | Name| Expected type(s) | Required | Description |
|-------|-----|------|----------|-------------|
| **Pin 0** | field |[`field`](../../getting-started/using-data-containers.md#field) | Yes |  |

## Configurations

| Name| Expected type(s) | Default value | Description |
|-----|------|----------|-------------|
| **Pin mutex** |[`bool`](../../getting-started/using-data-containers.md#bool) | false | If this option is set to true, the shared memory is prevented from being simultaneously accessed by multiple threads. |
| **Pin num_threads** |[`int32`](../../getting-started/using-data-containers.md#int32) | 0 | Number of threads to use to run in parallel |
| **Pin run_in_parallel** |[`bool`](../../getting-started/using-data-containers.md#bool) | true | Loops are allowed to run in parallel if the value of this config is set to true. |

## Scripting

| Category| Plugin | Scripting name | Full name | Internal name | License |
|---------|--------|----------------|-----------|---------------|---------|
| **geo** | core | integrate_over_elements | geo.integrate_over_elements | element::integrate | any_dpf_supported_increments |
