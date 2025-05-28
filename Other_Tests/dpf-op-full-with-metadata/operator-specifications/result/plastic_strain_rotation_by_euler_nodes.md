---
category: result
plugin: mapdl
license: None
---

# result:plastic strain to global cs

## Description

read Euler angles on elements from the rst file and rotate the fields in the fieldsContainer.

### Plugin

mapdl

## Inputs

| Input | Name | Expected type(s) | Description |
|-------|-------|------------------|-------------|
| <strong>Pin 2</strong>|  fields_container |[`fields_container`](../../getting-started/using-data-containers.md#fields-container) |  |
| <strong>Pin 3</strong>|  streams_container |[`streams_container`](../../getting-started/using-data-containers.md#streams-container), [`stream`](../../getting-started/using-data-containers.md#stream), [`class dataProcessing::CRstFileWrapper`](../../getting-started/using-data-containers.md#class-dataprocessing::crstfilewrapper) |  |
| <strong>Pin 4</strong> <br><span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  data_sources |[`data_sources`](../../getting-started/using-data-containers.md#data-sources) |  |


## Outputs

| Output |  Name | Expected type(s) | Description |
|-------|------|------------------|-------------|
| <strong>Pin 0</strong> <br><span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span> | fields_container |[`fields_container`](../../getting-started/using-data-containers.md#fields-container) |  |

## Configurations

| Name| Expected type(s) | Default value | Description |
|-----|------|----------|-------------|
| **mutex** |[`bool`](../../getting-started/using-data-containers.md#bool) | false | If this option is set to true, the shared memory is prevented from being simultaneously accessed by multiple threads. |

## Scripting

- Category: result
- Plugin: mapdl
- Scripting name: plastic_strain_rotation_by_euler_nodes
- Full name: result.plastic_strain_rotation_by_euler_nodes
- Internal name: mapdl::rst::EPPL_rotation_by_euler_nodes
- License: None
  