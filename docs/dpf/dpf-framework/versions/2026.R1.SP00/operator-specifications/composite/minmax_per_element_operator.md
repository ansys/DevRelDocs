---
category: composite
plugin: composite
license: None
---

# composite:minmax_per_element_operator

**Version: 0.0.0**

## Description

Computes minmax Elemental data per element

## Inputs

| Input | Name | Expected type(s) | Description |
|-------|-------|------------------|-------------|
| <strong>Pin 0</strong> <br><span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  fields_container |[`fields_container`](../../core-concepts/dpf-types.md#fields-container) |  |
| <strong>Pin 7</strong> <br><span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  mesh |[`abstract_meshed_region`](../../core-concepts/dpf-types.md#meshed-region) |  |
| <strong>Pin 21</strong> <br><span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  material_support |`abstract_field_support` |  |

## Outputs

| Output |  Name | Expected type(s) | Description |
|-------|------|------------------|-------------|
|  **Pin 0**| field_min |[`fields_container`](../../core-concepts/dpf-types.md#fields-container) | A CFieldsContainer of CFields with the failure values under the label is_failure_value=1                     and failure modes under the label is_failure_value=0                     from a specific failure criterion operator.                     The container with the layer indices (1-based) is optional. Use 'layer index - 1' to retriev the                     layer results from the initial field (e.g. strains or stresses). |
|  **Pin 1**| field_max |[`fields_container`](../../core-concepts/dpf-types.md#fields-container) | A CFieldsContainer of CFields with the failure values under the label is_failure_value=1                     and failure modes under the label is_failure_value=0                     from a specific failure criterion operator.                     The container with the layer indices (1-based) is optional. Use 'layer index - 1' to access the                     layer results from the initial field (e.g. strains or stresses). |

## Configurations

| Name| Expected type(s) | Default value | Description |
|-----|------|----------|-------------|
| **mutex** |[`bool`](../../core-concepts/dpf-types.md#standard-types) | false | If this option is set to true, the shared memory is prevented from being simultaneously accessed by multiple threads. |

## Scripting

 **Category**: composite

 **Plugin**: composite

 **Scripting name**: minmax_per_element_operator

 **Full name**: composite.minmax_per_element_operator

 **Internal name**: composite::minmax_per_element_operator

 **License**: None


## Changelog

- Version 0.0.0: Initial release.