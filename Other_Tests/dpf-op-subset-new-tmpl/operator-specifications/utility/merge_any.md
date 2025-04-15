# utility:merge any objects

## Description

Merges a list of objects having the same data types. Once the data type is found, the merge operation is forwarded to the correct merge Operator.

## Inputs


| Input | Name| Expected type(s) | Required | Description |
|-------|-----|------|----------|-------------|
| **Pin 0** | any |[`any`](../../getting-started/using-data-containers.md#any) | Yes | Either a vector of objects (sharing the same data types) or objects from pin 0 to ... to merge. Supported types rely on existing type specific merge operators. |

## Outputs

| Input | Name| Expected type(s) | Required | Description |
|-------|-----|------|----------|-------------|
| **Pin 0** | any |[`any`](../../getting-started/using-data-containers.md#any) | Yes |  |

## Configurations

| Name| Expected type(s) | Default value | Description |
|-----|------|----------|-------------|
| **Pin mutex** |[`bool`](../../getting-started/using-data-containers.md#bool) | false | If this option is set to true, the shared memory is prevented from being simultaneously accessed by multiple threads. |
| **Pin read_inputs_in_parallel** |[`bool`](../../getting-started/using-data-containers.md#bool) | false | If this option is set to true, the operator's inputs will be evaluated in parallel. |

## Scripting

| Category| Plugin | Scripting name | Full name | Internal name | License |
|---------|--------|----------------|-----------|---------------|---------|
| **utility** | core | merge_any | utility.merge_any | merge::any | None |
