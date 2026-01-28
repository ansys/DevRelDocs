---
category: composite
plugin: composite
license: None
---

# composite:reference_surface_operator

**Version: 0.0.0**

## Description

Reads the reference surface from solid composite definition file(s) and generates a meshed region. Computes the mapping of solid elements to reference surface elements. In case of an imported solid model where the reference surface is missing, the skin is computed and used as reference surface. The mapping is then based on nearest neighbor.

## Inputs

| Input | Name | Expected type(s) | Description |
|-------|-------|------------------|-------------|
| <strong>Pin 4</strong> <br><span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  data_sources |[`data_sources`](../../core-concepts/dpf-types.md#data-sources) | List of composite definitions (h5) files with mapping files. Use the sResultKey to name the parts. |
| <strong>Pin 310</strong> <br><span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  unit_system |`class dataProcessing::unit::CUnitSystem`, [`result_info`](../../core-concepts/dpf-types.md#result-info), [`int32`](../../core-concepts/dpf-types.md#standard-types), [`string`](../../core-concepts/dpf-types.md#standard-types) | Unit system. The output (mesh) will be converted into this unit system. |

## Outputs

| Output |  Name | Expected type(s) | Description |
|-------|------|------------------|-------------|
|  **Pin 0**| mapping_field |[`property_field`](../../core-concepts/dpf-types.md#property-field) | Property field that contains a map from the reference_surface element id to the solid element ids. |
|  **Pin 7**| mesh |[`abstract_meshed_region`](../../core-concepts/dpf-types.md#meshed-region) | Meshed region containing the reference surface. |

## Configurations

| Name| Expected type(s) | Default value | Description |
|-----|------|----------|-------------|
| **mutex** |[`bool`](../../core-concepts/dpf-types.md#standard-types) | false | If this option is set to true, the shared memory is prevented from being simultaneously accessed by multiple threads. |

## Scripting

 **Category**: composite

 **Plugin**: composite

 **Scripting name**: reference_surface_operator

 **Full name**: composite.reference_surface_operator

 **Internal name**: composite::reference_surface_operator

 **License**: None


## Changelog

- Version 0.0.0: Initial release.