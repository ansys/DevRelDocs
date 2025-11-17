---
category: utility
plugin: core
license: None
---

# utility:convert to field

**Version: 0.0.0**

## Description

Creates a scalar or vector field from numeric data. Converts scalar values or vectors into a DPF field with specified properties.

## Inputs

| Input | Name | Expected type(s) | Description |
|-------|-------|------------------|-------------|
| <strong>Pin 0</strong>|  double_or_vector_double |[`double`](../../core-concepts/dpf-types.md#standard-types), [`vector<double>`](../../core-concepts/dpf-types.md#standard-types) | Data of the field. Default is 0-field. Specify a double to create a field with uniform values, or a vector for explicit data per entity |
| <strong>Pin 1</strong>|  unit |[`string`](../../core-concepts/dpf-types.md#standard-types) | Unit symbol (m, Hz, kg, ...). Default is dimensionless |
| <strong>Pin 2</strong>|  location |[`string`](../../core-concepts/dpf-types.md#standard-types) | Location of the field: 'Nodal', 'ElementalNodal', 'Elemental', etc. Default is 'numeric' |
| <strong>Pin 3</strong>|  num_entities |[`int32`](../../core-concepts/dpf-types.md#standard-types) | Number of field entities. Default is 1, or the size of the scoping if provided |
| <strong>Pin 4</strong>|  num_components |[`int32`](../../core-concepts/dpf-types.md#standard-types) | Number of field components per entity. Default is 1 for scalar, >1 for vector |
| <strong>Pin 5</strong>|  scoping |[`scoping`](../../core-concepts/dpf-types.md#scoping) | Scoping defining entity IDs and locations. If provided, overrides num_entities |

## Outputs

| Output |  Name | Expected type(s) | Description |
|-------|------|------------------|-------------|
|  **Pin 0**| field |[`field`](../../core-concepts/dpf-types.md#field) | Generated field with specified data and properties |

## Configurations

| Name| Expected type(s) | Default value | Description |
|-----|------|----------|-------------|
| **mutex** |[`bool`](../../core-concepts/dpf-types.md#standard-types) | false | If this option is set to true, the shared memory is prevented from being simultaneously accessed by multiple threads. |

## Scripting

 **Category**: utility

 **Plugin**: core

 **Scripting name**: scalars_to_field

 **Full name**: utility.scalars_to_field

 **Internal name**: fieldify

 **License**: None


## Changelog

- Version 0.0.0: Initial release.