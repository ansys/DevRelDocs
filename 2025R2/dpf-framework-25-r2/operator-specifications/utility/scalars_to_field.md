---
category: utility
plugin: core
license: None
---

# utility:convert to field

**Version: 0.0.0**

## Description

Create scalar or vector Field.

## Inputs

| Input | Name | Expected type(s) | Description |
|-------|-------|------------------|-------------|
| <strong>Pin 0</strong>|  double_or_vector_double |[`double`](../../core-concepts/dpf-types.md#standard-types), [`vector<double>`](../../core-concepts/dpf-types.md#standard-types) | Data of the field, default is 0-field. Specify a double to have a field of same value or specify directly the data vector. |
| <strong>Pin 1</strong>|  unit |[`string`](../../core-concepts/dpf-types.md#standard-types) | Unit symbol (m, Hz, kg, ...) |
| <strong>Pin 2</strong>|  location |[`string`](../../core-concepts/dpf-types.md#standard-types) | Location of the field ex 'Nodal', 'ElementalNodal', 'Elemental'... Default is 'numeric'.  |
| <strong>Pin 3</strong>|  num_entity |[`int32`](../../core-concepts/dpf-types.md#standard-types) | Number of field entities. Default is 1 or the size of the scoping in input if specified. |
| <strong>Pin 4</strong>|  num_comp |[`int32`](../../core-concepts/dpf-types.md#standard-types) | Number of field components. Default is 1. |
| <strong>Pin 5</strong>|  scoping |[`scoping`](../../core-concepts/dpf-types.md#scoping) | Scoping. |

## Outputs

| Output |  Name | Expected type(s) | Description |
|-------|------|------------------|-------------|
|  **Pin 0**| field |[`field`](../../core-concepts/dpf-types.md#field) |  |

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