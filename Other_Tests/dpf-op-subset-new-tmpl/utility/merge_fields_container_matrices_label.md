# utility:merge fc to fc field matrices

## Description

Merge fields of fields container into field matrices. The output is a fields container of field matrices.

## Inputs


| Input | Name| Expected type(s) | Required | Description |
|-------|-----|------|----------|-------------|
| **Pin 0** | fields_container |[`fields_container`](../getting-started/using-data-containers.md#fields-container) | Yes | fields container to be merged |
| **Pin 1** | label |[`string`](../getting-started/using-data-containers.md#string) | Yes | Label where the merge is required |
| **Pin 2** | time_scoping |[`int32`](../getting-started/using-data-containers.md#int32), [`vector<int32>`](../getting-started/using-data-containers.md#vector<int32>), [`scoping`](../getting-started/using-data-containers.md#scoping) | No | if it's specified, fields container of field matrices is constructed only on the specified time scoping |

## Outputs

| Input | Name| Expected type(s) | Required | Description |
|-------|-----|------|----------|-------------|
| **Pin 0** | fields_container |[`fields_container`](../getting-started/using-data-containers.md#fields-container) | Yes | fields container of field matrices obtained after merging. |

## Configurations

| Name| Expected type(s) | Default value | Description |
|-----|------|----------|-------------|
| **Pin mutex** |[`bool`](../getting-started/using-data-containers.md#bool) | false | If this option is set to true, the shared memory is prevented from being simultaneously accessed by multiple threads. |

## Scripting

| Category| Plugin | Scripting name | Full name | Internal name | License |
|---------|--------|----------------|-----------|---------------|---------|
| **utility** | core | merge::fields_container_matrices_label | utility.merge::fields_container_matrices_label | merge::fields_container_matrices_label | None |
