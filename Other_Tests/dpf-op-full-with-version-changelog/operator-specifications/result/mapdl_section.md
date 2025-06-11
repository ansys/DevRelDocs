---
category: result
plugin: mapdl
license: None
Version: 0.0.0
---

# result:mapdl_section

## Version

0.0.0

## Changelog

- Version 0.0.0: Initial release.

## Description

Read the values of the section properties for a given section property field (property field that contains section information for each element of a mesh). The following keys can be used: Thickness, NumLayers. For layered elements, the following keys can be used: Thickness, MatID, Orientation, NumIntPoints.


## Inputs

| Input | Name | Expected type(s) | Description |
|-------|-------|------------------|-------------|
| <strong>Pin 0</strong> <br><span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  properties_name |[`string`](../../getting-started/using-data-containers.md#string), [`vector<string>`](../../getting-started/using-data-containers.md#vector<string>) |  |
| <strong>Pin 1</strong>|  section |[`property_field`](../../getting-started/using-data-containers.md#property-field) | Property field that contains a section id per element.(optional) |
| <strong>Pin 3</strong> <br><span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  streams_container |[`streams_container`](../../getting-started/using-data-containers.md#streams-container) |  |
| <strong>Pin 4</strong> <br><span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  data_sources |[`data_sources`](../../getting-started/using-data-containers.md#data-sources) |  |
| <strong>Pin 5</strong>|  layer_property |[`bool`](../../getting-started/using-data-containers.md#bool) | Property requested is layered. Default = False. |
| <strong>Pin 6</strong>|  layers_requested |[`vector<int32>`](../../getting-started/using-data-containers.md#vector<int32>) | Array with layers requested for the section. Default = AllLayers. |


## Outputs

| Output |  Name | Expected type(s) | Description |
|-------|------|------------------|-------------|
|  **Pin 0**| properties_value |[`fields_container`](../../getting-started/using-data-containers.md#fields-container) |  |
|  **Pin 1**| layers_per_section |[`property_field`](../../getting-started/using-data-containers.md#property-field) | Only available if layer_property option is set to True. |

## Configurations

| Name| Expected type(s) | Default value | Description |
|-----|------|----------|-------------|
| **mutex** |[`bool`](../../getting-started/using-data-containers.md#bool) | false | If this option is set to true, the shared memory is prevented from being simultaneously accessed by multiple threads. |

## Scripting

 **Category**: result

 **Plugin**: mapdl

 **Scripting name**: mapdl_section

 **Full name**: result.mapdl_section

 **Internal name**: mapdl_section_properties

 **License**: None
 
