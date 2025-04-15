# math:centroid

## Description

Computes centroid of field1 and field2, using fieldOut = field1*(1.-fact)+field2*(fact). Only works by index.

## Inputs


| Input | Name| Expected type(s) | Required | Description |
|-------|-----|------|----------|-------------|
| **Pin 0** | fieldA |[`field`](../../getting-started/using-data-containers.md#field), [`fields_container`](../../getting-started/using-data-containers.md#fields-container) | Yes | field or fields container with only one field is expected |
| **Pin 1** | fieldB |[`field`](../../getting-started/using-data-containers.md#field), [`fields_container`](../../getting-started/using-data-containers.md#fields-container) | Yes | field or fields container with only one field is expected |
| **Pin 2** | factor |[`double`](../../getting-started/using-data-containers.md#double) | Yes | Scalar |

## Outputs

| Input | Name| Expected type(s) | Required | Description |
|-------|-----|------|----------|-------------|
| **Pin 0** | field |[`field`](../../getting-started/using-data-containers.md#field) | Yes |  |

## Configurations

| Name| Expected type(s) | Default value | Description |
|-----|------|----------|-------------|
| **Pin mutex** |[`bool`](../../getting-started/using-data-containers.md#bool) | false | If this option is set to true, the shared memory is prevented from being simultaneously accessed by multiple threads. |
| **Pin num_threads** |[`int32`](../../getting-started/using-data-containers.md#int32) | 0 | Number of threads to use to run in parallel |
| **Pin run_in_parallel** |[`bool`](../../getting-started/using-data-containers.md#bool) | true | Loops are allowed to run in parallel if the value of this config is set to true. |
| **Pin work_by_index** |[`bool`](../../getting-started/using-data-containers.md#bool) | true | If this option is set to true, loops and comparisons by entity will be done by index instead of ids. |

## Scripting

| Category| Plugin | Scripting name | Full name | Internal name | License |
|---------|--------|----------------|-----------|---------------|---------|
| **math** | core | None | None | centroid | None |
