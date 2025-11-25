---
category: utility
plugin: core
license: None
---

# utility:extract scoping

**Version: 0.0.0**

## Description

Takes a field type object, mesh or a collection of them and extracts its scoping or scopings container.

## Inputs

| Input | Name | Expected type(s) | Description |
|-------|-------|------------------|-------------|
| <strong>Pin 0</strong>|  field_or_fields_container |[`field`](../../core-concepts/dpf-types.md#field), [`fields_container`](../../core-concepts/dpf-types.md#fields-container), [`property_field`](../../core-concepts/dpf-types.md#property-field), [`property_fields_container`](../../core-concepts/dpf-types.md#property-fields-container), [`custom_type_field`](../../core-concepts/dpf-types.md#custom-type-field), [`custom_type_fields_container`](../../core-concepts/dpf-types.md#custom-type-fields-container), [`string_field`](../../core-concepts/dpf-types.md#string-field), [`scoping`](../../core-concepts/dpf-types.md#scoping), [`scopings_container`](../../core-concepts/dpf-types.md#scopings-container), [`meshed_region`](../../core-concepts/dpf-types.md#meshed-region), [`meshes_container`](../../core-concepts/dpf-types.md#meshes-container) |  |
| <strong>Pin 1</strong>|  requested_location |[`int32`](../../core-concepts/dpf-types.md#standard-types) | If input 0 is a mesh or a meshes_container, the operator returns the nodes scoping, possible locations are: Nodal(default) or Elemental |

## Outputs

| Output |  Name | Expected type(s) | Description |
|-------|------|------------------|-------------|
|  **Pin 0**| mesh_scoping |[`scoping`](../../core-concepts/dpf-types.md#scoping), [`scopings_container`](../../core-concepts/dpf-types.md#scopings-container) |  |

## Configurations

| Name| Expected type(s) | Default value | Description |
|-----|------|----------|-------------|
| **mutex** |[`bool`](../../core-concepts/dpf-types.md#standard-types) | false | If this option is set to true, the shared memory is prevented from being simultaneously accessed by multiple threads. |

## Scripting

 **Category**: utility

 **Plugin**: core

 **Scripting name**: None

 **Full name**: None

 **Internal name**: extract_scoping

 **License**: None


## Changelog

- Version 0.0.0: Initial release.