# averaging:elemental fraction (fields container)

## Description

Transforms Elemental Nodal fields into Elemental fields. Each elemental value is the fraction between the elemental difference and the entity average. The result is computed on a given element's scoping.

## Inputs


| Input | Name| Expected type(s) | Required | Description |
|-------|-----|------|----------|-------------|
| **Pin 0** | fields_container |[`fields_container`](../getting-started/using-data-containers.md#fields-container) | Yes |  |
| **Pin 1** | mesh |[`abstract_meshed_region`](../getting-started/using-data-containers.md#abstract-meshed-region) | No | The mesh region in this pin is used to perform the averaging. It is used if there is no fields support. |
| **Pin 3** | scoping |[`scoping`](../getting-started/using-data-containers.md#scoping) | No | Average only on these elements. If it is a scoping container, the label must correspond to the one of the fields containers. |
| **Pin 6** | denominator |[`fields_container`](../getting-started/using-data-containers.md#fields-container) | No | If a fields container is set in this pin, it is used as the denominator of the fraction instead of entity_average_fc. |
| **Pin 10** | collapse_shell_layers |[`bool`](../getting-started/using-data-containers.md#bool) | No | The elemental difference and the entity average are taken through the different shell layers if true (default is false). |

## Outputs

| Input | Name| Expected type(s) | Required | Description |
|-------|-----|------|----------|-------------|
| **Pin 0** | fields_container |[`fields_container`](../getting-started/using-data-containers.md#fields-container) | Yes |  |

## Configurations

| Name| Expected type(s) | Default value | Description |
|-----|------|----------|-------------|
| **Pin mutex** |[`bool`](../getting-started/using-data-containers.md#bool) | false | If this option is set to true, the shared memory is prevented from being simultaneously accessed by multiple threads. |
| **Pin num_threads** |[`int32`](../getting-started/using-data-containers.md#int32) | 0 | Number of threads to use to run in parallel |
| **Pin run_in_parallel** |[`bool`](../getting-started/using-data-containers.md#bool) | true | Loops are allowed to run in parallel if the value of this config is set to true. |

## Scripting

| Category| Plugin | Scripting name | Full name | Internal name | License |
|---------|--------|----------------|-----------|---------------|---------|
| **averaging** | core | elemental_fraction_fc | averaging.elemental_fraction_fc | elemental_fraction_fc | any_dpf_supported_increments |
