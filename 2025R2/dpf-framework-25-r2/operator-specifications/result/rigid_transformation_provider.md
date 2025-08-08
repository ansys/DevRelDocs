---
category: result
plugin: mapdl
license: None
---

# result:rigid transformation provider

**Version: 0.0.0**

## Description

Extracts rigid body transformation from dsub file.

## Inputs

| Input | Name | Expected type(s) | Description |
|-------|-------|------------------|-------------|
| <strong>Pin 3</strong>|  streams |`stream` | streams (result file container) (optional) |
| <strong>Pin 4</strong> <br><span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  data_sources |[`data_sources`](../../core-concepts/dpf-types.md#data-sources) | data source of dsub file. |

## Outputs

| Output |  Name | Expected type(s) | Description |
|-------|------|------------------|-------------|
|  **Pin 0**| fields_container |[`fields_container`](../../core-concepts/dpf-types.md#fields-container) |  |

## Configurations

| Name| Expected type(s) | Default value | Description |
|-----|------|----------|-------------|
| **mutex** |[`bool`](../../core-concepts/dpf-types.md#standard-types) | false | If this option is set to true, the shared memory is prevented from being simultaneously accessed by multiple threads. |

## Scripting

 **Category**: result

 **Plugin**: mapdl

 **Scripting name**: rigid_transformation_provider

 **Full name**: result.rigid_transformation_provider

 **Internal name**: mapdl::dsub::rigid_transformation_provider

 **License**: None


## Changelog

- Version 0.0.0: Initial release.