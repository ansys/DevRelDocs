# result:poynting vector

## Description

Compute the Poynting Vector

## Inputs


| Input | Name| Expected type(s) | Required | Description |
|-------|-----|------|----------|-------------|
| **Pin 0** | fields_containerA |[`fields_container`](../getting-started/using-data-containers.md#fields-container) | Yes |  |
| **Pin 1** | fields_containerB |[`fields_container`](../getting-started/using-data-containers.md#fields-container) | Yes |  |
| **Pin 2** | fields_containerC |[`fields_container`](../getting-started/using-data-containers.md#fields-container) | Yes |  |
| **Pin 3** | fields_containerD |[`fields_container`](../getting-started/using-data-containers.md#fields-container) | Yes |  |
| **Pin 4** | abstract_meshed_region |[`abstract_meshed_region`](../getting-started/using-data-containers.md#abstract-meshed-region) | No | the mesh region in this pin have to be boundary or skin mesh |
| **Pin 5** | int32 |[`int32`](../getting-started/using-data-containers.md#int32) | No | load step number, if it's specified, the Poynting Vector is computed only on the substeps of this step |

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
| **result** | core | poynting_vector | result.poynting_vector | PoyntingVector | any_dpf_supported_increments |
