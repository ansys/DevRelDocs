# averaging:elemental difference (field)

## Description

Transforms an Elemental Nodal or Nodal field into an Elemental field. Each elemental value is the maximum difference between the computed result for all nodes in this element. The result is computed on a given element scoping.

## Inputs


| Input | Name| Expected type(s) | Required | Description |
|-------|-----|------|----------|-------------|
| **Pin 0** | field |[`field`](../../getting-started/using-data-containers.md#field), [`fields_container`](../../getting-started/using-data-containers.md#fields-container) | Yes | field or fields container with only one field is expected |
| **Pin 1** | mesh_scoping |[`scoping`](../../getting-started/using-data-containers.md#scoping) | No | average only on these entities |
| **Pin 7** | mesh |[`abstract_meshed_region`](../../getting-started/using-data-containers.md#abstract-meshed-region) | No |  |
| **Pin 10** | through_layers |[`bool`](../../getting-started/using-data-containers.md#bool) | No | The maximum elemental difference is taken through the different shell layers if true (default is false). |

## Outputs

| Input | Name| Expected type(s) | Required | Description |
|-------|-----|------|----------|-------------|
| **Pin 0** | field |[`field`](../../getting-started/using-data-containers.md#field) | Yes |  |

## Configurations

| Name| Expected type(s) | Default value | Description |
|-----|------|----------|-------------|
| **Pin mutex** |[`bool`](../../getting-started/using-data-containers.md#bool) | false | If this option is set to true, the shared memory is prevented from being simultaneously accessed by multiple threads. |

## Scripting

| Category| Plugin | Scripting name | Full name | Internal name | License |
|---------|--------|----------------|-----------|---------------|---------|
| **averaging** | core | elemental_difference | averaging.elemental_difference | elemental_difference | any_dpf_supported_increments |
