---
category: composite
plugin: composite
license: None
---

# composite:failure_measure_converter

**Version: 0.0.0**

## Description

Conversion from one failure measure to another. Supported are inverse_reserve_factor, safety_factor and safety_margin.0:Fieldscontainer#0:Fieldscontainer (converted input field)

## Inputs

| Input | Name | Expected type(s) | Description |
|-------|-------|------------------|-------------|
| <strong>Pin 0</strong> <br><span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  fields_container |[`fields_container`](../../core-concepts/dpf-types.md#fields-container) |  |
| <strong>Pin 1</strong> <br><span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  measure_type |[`string`](../../core-concepts/dpf-types.md#standard-types) | measure type: can be `inverse_reserve_factor` (default), `safety_factor` or `safety_margin`. |

## Outputs

| Output |  Name | Expected type(s) | Description |
|-------|------|------------------|-------------|
|  **Pin 0**| fields_container |[`fields_container`](../../core-concepts/dpf-types.md#fields-container) | The converted input FieldsContainer. It is the same instance/pointer. |

## Configurations

| Name| Expected type(s) | Default value | Description |
|-----|------|----------|-------------|
| **mutex** |[`bool`](../../core-concepts/dpf-types.md#standard-types) | false | If this option is set to true, the shared memory is prevented from being simultaneously accessed by multiple threads. |

## Scripting

 **Category**: composite

 **Plugin**: composite

 **Scripting name**: failure_measure_converter

 **Full name**: composite.failure_measure_converter

 **Internal name**: composite::failure_measure_converter

 **License**: None


## Changelog

- Version 0.0.0: Initial release.