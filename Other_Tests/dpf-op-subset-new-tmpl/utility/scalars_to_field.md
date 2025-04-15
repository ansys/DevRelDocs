# utility:convert to field

## Description

Create scalar or vector Field.

## Inputs


| Input | Name| Expected type(s) | Required | Description |
|-------|-----|------|----------|-------------|
| **Pin 0** | double_or_vector_double |[`double`](../getting-started/using-data-containers.md#double), [`vector<double>`](../getting-started/using-data-containers.md#vector<double>) | No | Data of the field, default is 0-field. Specify a double to have a field of same value or specify directly the data vector. |
| **Pin 1** | unit |[`string`](../getting-started/using-data-containers.md#string) | No | Unit symbol (m, Hz, kg, ...) |
| **Pin 2** | location |[`string`](../getting-started/using-data-containers.md#string) | No | Location of the field ex 'Nodal', 'ElementalNodal', 'Elemental'... Default is 'numeric'.  |
| **Pin 3** | num_entity |[`int32`](../getting-started/using-data-containers.md#int32) | No | Number of field entities. Default is 1 or the size of the scoping in input if specified. |
| **Pin 4** | num_comp |[`int32`](../getting-started/using-data-containers.md#int32) | No | Number of field components. Default is 1. |
| **Pin 5** | scoping |[`scoping`](../getting-started/using-data-containers.md#scoping) | No | Scoping. |

## Outputs

| Input | Name| Expected type(s) | Required | Description |
|-------|-----|------|----------|-------------|
| **Pin 0** | field |[`field`](../getting-started/using-data-containers.md#field) | Yes |  |

## Configurations

| Name| Expected type(s) | Default value | Description |
|-----|------|----------|-------------|
| **Pin mutex** |[`bool`](../getting-started/using-data-containers.md#bool) | false | If this option is set to true, the shared memory is prevented from being simultaneously accessed by multiple threads. |

## Scripting

| Category| Plugin | Scripting name | Full name | Internal name | License |
|---------|--------|----------------|-----------|---------------|---------|
| **utility** | core | scalars_to_field | utility.scalars_to_field | fieldify | None |
