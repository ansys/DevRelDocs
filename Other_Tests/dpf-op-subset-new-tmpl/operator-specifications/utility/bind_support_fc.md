# utility:bind support (fields container)

## Description

Ties a support to a fields container.

## Inputs


| Input | Name| Expected type(s) | Required | Description |
|-------|-----|------|----------|-------------|
| **Pin 0** | fields_container |[`fields_container`](../../getting-started/using-data-containers.md#fields-container) | Yes |  |
| **Pin 1** | support |[`abstract_meshed_region`](../../getting-started/using-data-containers.md#abstract-meshed-region), [`abstract_field_support`](../../getting-started/using-data-containers.md#abstract-field-support), [`time_freq_support`](../../getting-started/using-data-containers.md#time-freq-support) | Yes | Meshed region or a support of the field. |

## Outputs

| Input | Name| Expected type(s) | Required | Description |
|-------|-----|------|----------|-------------|
| **Pin 0** | fields_container |[`fields_container`](../../getting-started/using-data-containers.md#fields-container) | Yes |  |

## Configurations

| Name| Expected type(s) | Default value | Description |
|-----|------|----------|-------------|
| **Pin mutex** |[`bool`](../../getting-started/using-data-containers.md#bool) | false | If this option is set to true, the shared memory is prevented from being simultaneously accessed by multiple threads. |

## Scripting

| Category| Plugin | Scripting name | Full name | Internal name | License |
|---------|--------|----------------|-----------|---------------|---------|
| **utility** | core | bind_support_fc | utility.bind_support_fc | BindSupportFC | None |
