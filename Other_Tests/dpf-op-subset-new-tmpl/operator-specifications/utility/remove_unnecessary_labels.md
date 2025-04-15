# utility:remove unnecessary labels

## Description

Removes the selected label from a fields container.

## Inputs


| Input | Name| Expected type(s) | Required | Description |
|-------|-----|------|----------|-------------|
| **Pin -1** | permissive |[`bool`](../../getting-started/using-data-containers.md#bool) | No | If true, the operator does not throw an error if the label to be removed has more than one entry. |
| **Pin 0** | fields_container |[`fields_container`](../../getting-started/using-data-containers.md#fields-container) | Yes | Fields Container with the label to be removed. |
| **Pin 1** | label_to_remove |[`string`](../../getting-started/using-data-containers.md#string) | Yes | Label to be removed from the fields container. |

## Outputs

| Input | Name| Expected type(s) | Required | Description |
|-------|-----|------|----------|-------------|
| **Pin 0** | fields_container |[`fields_container`](../../getting-started/using-data-containers.md#fields-container) | Yes |  |

## Configurations

| Name| Expected type(s) | Default value | Description |
|-----|------|----------|-------------|
| **Pin mutex** |[`bool`](../../getting-started/using-data-containers.md#bool) | false | If this option is set to true, the shared memory is prevented from being simultaneously accessed by multiple threads. |
| **Pin read_inputs_in_parallel** |[`bool`](../../getting-started/using-data-containers.md#bool) | false | If this option is set to true, the operator's inputs will be evaluated in parallel. |

## Scripting

| Category| Plugin | Scripting name | Full name | Internal name | License |
|---------|--------|----------------|-----------|---------------|---------|
| **utility** | core | remove_unnecessary_labels | utility.remove_unnecessary_labels | remove_unnecessary_label | None |
