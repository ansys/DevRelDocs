# math:-

## Description

Computes the difference of two fields. If one field's scoping has an 'overall' location, then this field's values are applied on the other field entirely. When using a constant or 'work_by_index', you can use 'inplace' to reuse one of the fields.

## Inputs


| Input | Name| Expected type(s) | Required | Description |
|-------|-----|------|----------|-------------|
| **Pin 0** | fieldA |[`field`](../getting-started/using-data-containers.md#field), [`fields_container`](../getting-started/using-data-containers.md#fields-container), [`double`](../getting-started/using-data-containers.md#double), [`vector<double>`](../getting-started/using-data-containers.md#vector<double>) | Yes | field or fields container with only one field is expected |
| **Pin 1** | fieldB |[`field`](../getting-started/using-data-containers.md#field), [`fields_container`](../getting-started/using-data-containers.md#fields-container), [`double`](../getting-started/using-data-containers.md#double), [`vector<double>`](../getting-started/using-data-containers.md#vector<double>) | Yes | field or fields container with only one field is expected |

## Outputs

| Input | Name| Expected type(s) | Required | Description |
|-------|-----|------|----------|-------------|
| **Pin 0** | field |[`field`](../getting-started/using-data-containers.md#field) | Yes |  |

## Configurations

| Name| Expected type(s) | Default value | Description |
|-----|------|----------|-------------|
| **Pin binary_operation** |[`binary_operation_enum`](../getting-started/using-data-containers.md#binary-operation-enum), [`int32`](../getting-started/using-data-containers.md#int32) | 1 | This option allows to choose how two inputs will be treated together. eOnlyIntersection (0) means that the output will only contain the entities shared by all the inputs. eUnion (1) means that the output will contain all the entities contained in at least one of the inputs. |
| **Pin inplace** |[`bool`](../getting-started/using-data-containers.md#bool) | false | The output is written over the input to save memory if this config is set to true. |
| **Pin mutex** |[`bool`](../getting-started/using-data-containers.md#bool) | false | If this option is set to true, the shared memory is prevented from being simultaneously accessed by multiple threads. |
| **Pin num_threads** |[`int32`](../getting-started/using-data-containers.md#int32) | 0 | Number of threads to use to run in parallel |
| **Pin permissive** |[`bool`](../getting-started/using-data-containers.md#bool) | false | If this option is set to true, warning checks (like unit or data sizes) won't be done. |
| **Pin run_in_parallel** |[`bool`](../getting-started/using-data-containers.md#bool) | true | Loops are allowed to run in parallel if the value of this config is set to true. |
| **Pin use_cache** |[`bool`](../getting-started/using-data-containers.md#bool) | true | Some intermediate data is put in cache if this config is set to true. This option can reduce computation time after the first run. |
| **Pin work_by_index** |[`bool`](../getting-started/using-data-containers.md#bool) | false | If this option is set to true, loops and comparisons by entity will be done by index instead of ids. |

## Scripting

| Category| Plugin | Scripting name | Full name | Internal name | License |
|---------|--------|----------------|-----------|---------------|---------|
| **math** | core | None | None | minus | None |
