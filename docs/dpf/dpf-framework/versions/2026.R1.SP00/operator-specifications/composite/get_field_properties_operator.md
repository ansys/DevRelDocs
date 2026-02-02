---
category: composite
plugin: composite
license: None
---

# composite:get_field_properties_operator

**Version: 0.0.0**

## Description

Deprecated since 2026 R1! Use 'field::get_attribute' or 'propertyfield::get_attribute' with pin 1 equals 'header' instead. Operator which returns all int, double and string properties as a data tree. Input can be a CField or CPropertyField. The purpose of this operator is to expose the properties in python. So the operator will be removed once this is available natively or it has been replicated in DPF Core.

## Inputs

| Input | Name | Expected type(s) | Description |
|-------|-------|------------------|-------------|
| <strong>Pin 0</strong>|  field |[`field`](../../core-concepts/dpf-types.md#field), [`property_field`](../../core-concepts/dpf-types.md#property-field) | C(Property)Field. |

## Outputs

| Output |  Name | Expected type(s) | Description |
|-------|------|------------------|-------------|
|  **Pin 0**| properties |[`abstract_data_tree`](../../core-concepts/dpf-types.md#data-tree) | DataTree with all properties |

## Configurations

| Name| Expected type(s) | Default value | Description |
|-----|------|----------|-------------|
| **mutex** |[`bool`](../../core-concepts/dpf-types.md#standard-types) | false | If this option is set to true, the shared memory is prevented from being simultaneously accessed by multiple threads. |

## Scripting

 **Category**: composite

 **Plugin**: composite

 **Scripting name**: get_field_properties_operator

 **Full name**: composite.get_field_properties_operator

 **Internal name**: composite::get_field_properties_operator

 **License**: None


## Changelog

- Version 0.0.0: Initial release.