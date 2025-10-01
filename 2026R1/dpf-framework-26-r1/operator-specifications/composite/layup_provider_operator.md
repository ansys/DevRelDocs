---
category: composite
plugin: composite
license: None
---

# composite:layup_provider_operator

**Version: 0.0.0**

## Description

Import section data from ACP's composite definition files and/or                    from RST files. This operator is required to run the composite failure operators for layered                    elements. The following operators are not or only partially supported if the section data was loaded                    from the RST: composite::interlaminar_normal_stress_operator, composite::face_sheet_wrinkling_operator,                    composite::shear_crimping_operator. Refore to their description.                    Variable material data except temperature is only supported in combination with ACP's composite definition files.

## Inputs

| Input | Name | Expected type(s) | Description |
|-------|-------|------------------|-------------|
| <strong>Pin 3</strong> <br><span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  rst_stream |[`streams_container`](../../core-concepts/dpf-types.md#streams-container) | Stream of the RST file(s). Set this input to import section data from this source.                         Elements with section data from data_sources are skipped. |
| <strong>Pin 4</strong> <br><span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  data_sources |[`data_sources`](../../core-concepts/dpf-types.md#data-sources) | DataSource of composite definitions (h5) files with mapping files to import lay-up information with additional ACP specific information. Use the sResultKey to name the parts. |
| <strong>Pin 7</strong> <br><span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  mesh |[`abstract_meshed_region`](../../core-concepts/dpf-types.md#meshed-region) |  |
| <strong>Pin 21</strong> <br><span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  abstract_field_support |`abstract_field_support` | The material support originating from an RST file. |
| <strong>Pin 310</strong> <br><span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  unit_system |`class dataProcessing::unit::CUnitSystem`, [`result_info`](../../core-concepts/dpf-types.md#result-info), [`int32`](../../core-concepts/dpf-types.md#standard-types), [`string`](../../core-concepts/dpf-types.md#standard-types) | Layup quantities are converted into this unit system. Can be unit system object, result_info object int or string. In case of int it is one of the predefined Ansys unit system ids, in case of string it should be a semicolon separated list of units. |
| <strong>Pin 500</strong> <br><span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  skip_reinforcing_plies |[`bool`](../../core-concepts/dpf-types.md#standard-types) | The post-processing of reinforcing plies is not supported and so an error is thrown by default if such entities are found. Set 'skip_reinforcing_plies' to true to ignore them and to process the layered elements. Note that it is planned to support reinforcing elements and then this input will be removed again. |

## Outputs

| Output |  Name | Expected type(s) | Description |
|-------|------|------------------|-------------|
|  **Pin 0**| update |[`bool`](../../core-concepts/dpf-types.md#standard-types) | Request this output to run the operator. Returns always true. Only useful in a workflow context whereexplicit runs are not possible. |
|  **Pin 22**| material_fields |`umap<string,struct dataProcessing::composite::ImportedMaterialField>` | A unordered map with key the variable material field name and value the corresponding                         ImportedMaterialField struct. |
|  **Pin 24**| section_data_container |[`fields_container`](../../core-concepts/dpf-types.md#fields-container) | A CFieldContainer containing the angles, the thicknesses and the laminate offset of each layer. |
|  **Pin 25**| mesh_properties_container |[`fields_container`](../../core-concepts/dpf-types.md#fields-container) | A CFieldContainer containing mesh properties (curvature, element edge length etc.).                                Only available if composite definitions are passed to the input. |
|  **Pin 218**| layup_model_context_type |[`int32`](../../core-concepts/dpf-types.md#standard-types) | Returns the type of lay-up model. 0=Not available, 1=ACP, 2=RST, 3=Mixed.                              Mixed means that section data from ACP and the RST file were imported. |

## Configurations

| Name| Expected type(s) | Default value | Description |
|-----|------|----------|-------------|
| **mutex** |[`bool`](../../core-concepts/dpf-types.md#standard-types) | false | If this option is set to true, the shared memory is prevented from being simultaneously accessed by multiple threads. |

## Scripting

 **Category**: composite

 **Plugin**: composite

 **Scripting name**: layup_provider_operator

 **Full name**: composite.layup_provider_operator

 **Internal name**: composite::layup_provider_operator

 **License**: None


## Changelog

- Version 0.0.0: Initial release.