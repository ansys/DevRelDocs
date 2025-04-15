# utility:merge generic data container

## Description

Merges a list of generic data container. For each data entry, the merge operation is forwarded to the correct merge Operator. Primitive types cannot be merged, first instance found will be maintained in the result.

## Inputs


| Input | Name| Expected type(s) | Required | Description |
|-------|-----|------|----------|-------------|
| **Pin 0** | generic_data_container |[`generic_data_container`](../getting-started/using-data-containers.md#generic-data-container), [`vector<shared_ptr<generic_data_container>>`](../getting-started/using-data-containers.md#vector<shared-ptr<generic-data-container>>) | Yes | Either a vector of generic data containers (sharing the same data types) or generic data containers from pin 0 to ... to merge. Supported types rely on existing type specific merge operators. |

## Outputs

| Input | Name| Expected type(s) | Required | Description |
|-------|-----|------|----------|-------------|
| **Pin 0** | generic_data_container |[`generic_data_container`](../getting-started/using-data-containers.md#generic-data-container) | Yes |  |

## Configurations

| Name| Expected type(s) | Default value | Description |
|-----|------|----------|-------------|
| **Pin mutex** |[`bool`](../getting-started/using-data-containers.md#bool) | false | If this option is set to true, the shared memory is prevented from being simultaneously accessed by multiple threads. |

## Scripting

| Category| Plugin | Scripting name | Full name | Internal name | License |
|---------|--------|----------------|-----------|---------------|---------|
| **utility** | core | merge_generic_data_container | utility.merge_generic_data_container | merge::generic_data_container | None |
