---
category: utility
plugin: core
license: None
---

# utility:convert to field

## Description

Create scalar or vector Field.


## Inputs

| Input | Name | Expected type(s) | Description |
|-------|-------|------------------|-------------|
| <strong>Pin 0</strong>|  double_or_vector_double |[`double`](../../getting-started/using-data-containers.md#double), [`vector<double>`](../../getting-started/using-data-containers.md#vector<double>) | Data of the field, default is 0-field. Specify a double to have a field of same value or specify directly the data vector. |
| <strong>Pin 1</strong>|  unit |[`string`](../../getting-started/using-data-containers.md#string) | Unit symbol (m, Hz, kg, ...) |
| <strong>Pin 2</strong>|  location |[`string`](../../getting-started/using-data-containers.md#string) | Location of the field ex 'Nodal', 'ElementalNodal', 'Elemental'... Default is 'numeric'.  |
| <strong>Pin 3</strong>|  num_entity |[`int32`](../../getting-started/using-data-containers.md#int32) | Number of field entities. Default is 1 or the size of the scoping in input if specified. |
| <strong>Pin 4</strong>|  num_comp |[`int32`](../../getting-started/using-data-containers.md#int32) | Number of field components. Default is 1. |
| <strong>Pin 5</strong>|  scoping |[`scoping`](../../getting-started/using-data-containers.md#scoping) | Scoping. |


## Outputs

| Output |  Name | Expected type(s) | Description |
|-------|------|------------------|-------------|
|  **Pin 0**| field |[`field`](../../getting-started/using-data-containers.md#field) |  |

## Configurations

| Name| Expected type(s) | Default value | Description |
|-----|------|----------|-------------|
| **mutex** |[`bool`](../../getting-started/using-data-containers.md#bool) | false | If this option is set to true, the shared memory is prevented from being simultaneously accessed by multiple threads. |

## Scripting

 **Category**: utility

 **Plugin**: core

 **Scripting name**: scalars_to_field

 **Full name**: utility.scalars_to_field

 **Internal name**: fieldify

 **License**: None
