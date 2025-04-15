# mapping:prepare mapping workflow

## Description

Generates a workflow that can map results from a support to another one.

## Inputs


| Input | Name| Expected type(s) | Required | Description |
|-------|-----|------|----------|-------------|
| **Pin 0** | input_support |[`field`](../../getting-started/using-data-containers.md#field), [`abstract_meshed_region`](../../getting-started/using-data-containers.md#abstract-meshed-region) | Yes |  |
| **Pin 1** | output_support |[`field`](../../getting-started/using-data-containers.md#field), [`abstract_meshed_region`](../../getting-started/using-data-containers.md#abstract-meshed-region) | Yes |  |
| **Pin 2** | filter_radius |[`double`](../../getting-started/using-data-containers.md#double) | Yes | Radius size for the RBF filter |
| **Pin 3** | influence_box |[`double`](../../getting-started/using-data-containers.md#double) | No |  |

## Outputs

| Input | Name| Expected type(s) | Required | Description |
|-------|-----|------|----------|-------------|
| **Pin 0** | mapping_workflow |[`workflow`](../../getting-started/using-data-containers.md#workflow) | Yes |  |

## Configurations

| Name| Expected type(s) | Default value | Description |
|-----|------|----------|-------------|
| **Pin mutex** |[`bool`](../../getting-started/using-data-containers.md#bool) | false | If this option is set to true, the shared memory is prevented from being simultaneously accessed by multiple threads. |

## Scripting

| Category| Plugin | Scripting name | Full name | Internal name | License |
|---------|--------|----------------|-----------|---------------|---------|
| **mapping** | core | prepare_mapping_workflow | mapping.prepare_mapping_workflow | prepare_mapping_workflow | None |
