---
category: composite
plugin: composite
license: None
---

# composite:inistate_field_variable_operator

**Version: 0.0.0**

## Description

Extracts field variables from an APDL input file (dat)

## Inputs

| Input | Name | Expected type(s) | Description |
|-------|-------|------------------|-------------|
| <strong>Pin 0</strong> <br><span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  stress_field |[`field`](../../core-concepts/dpf-types.md#field) | An optional stress field to be specified when using the field variables for the evaluation of failure criteria. |
| <strong>Pin 4</strong> <br><span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  data_sources |[`data_sources`](../../core-concepts/dpf-types.md#data-sources) | An APDL input file written by Ansys Mechanical. |
| <strong>Pin 7</strong> <br><span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  mesh |[`abstract_meshed_region`](../../core-concepts/dpf-types.md#meshed-region) |  |

## Outputs

| Output |  Name | Expected type(s) | Description |
|-------|------|------------------|-------------|
|  **Pin 0**| fields_container |[`fields_container`](../../core-concepts/dpf-types.md#fields-container) | A CFieldContainer containing the field variables. |
|  **Pin 1**| property_fields_container |[`property_fields_container`](../../core-concepts/dpf-types.md#property-fields-container) | A CPropertyFieldsContainer containing the field variables mapping support. Only available when the optional stress field was specified. Check for nullptr! |

## Configurations

| Name| Expected type(s) | Default value | Description |
|-----|------|----------|-------------|
| **mutex** |[`bool`](../../core-concepts/dpf-types.md#standard-types) | false | If this option is set to true, the shared memory is prevented from being simultaneously accessed by multiple threads. |

## Scripting

 **Category**: composite

 **Plugin**: composite

 **Scripting name**: inistate_field_variable_operator

 **Full name**: composite.inistate_field_variable_operator

 **Internal name**: composite::inistate_field_variables_provider

 **License**: None


## Changelog

- Version 0.0.0: Initial release.