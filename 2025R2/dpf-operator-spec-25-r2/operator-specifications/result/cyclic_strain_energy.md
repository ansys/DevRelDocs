---
category: result
plugin: mapdl
license: None
Version: 0.0.0
---

# result:cyclic strain energy

## Version

0.0.0

## Changelog

- Version 0.0.0: Initial release.

## Description

Computes mapdl::rst::ENG_SE from an rst file.


## Inputs

| Input | Name | Expected type(s) | Description |
|-------|-------|------------------|-------------|
| <strong>Pin 0</strong>|  time_scoping |[`scoping`](../../core-concepts/dpf-types#scoping), [`vector<int32>`](../../core-concepts/dpf-types#standard-types) |  |
| <strong>Pin 1</strong>|  mesh_scoping |[`scopings_container`](../../core-concepts/dpf-types#scopings-container), [`scoping`](../../core-concepts/dpf-types#scoping), [`vector<int32>`](../../core-concepts/dpf-types#standard-types) |  |
| <strong>Pin 2</strong>|  fields_container |[`fields_container`](../../core-concepts/dpf-types#fields-container) | FieldsContainer already allocated modified inplace |
| <strong>Pin 3</strong>|  streams_container |[`streams_container`](../../core-concepts/dpf-types#streams-container), [`stream`](../../core-concepts/dpf-types#stream) | Streams containing the result file. |
| <strong>Pin 4</strong> <br><span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  data_sources |[`data_sources`](../../core-concepts/dpf-types#data-sources) | data sources containing the result file. |
| <strong>Pin 5</strong>|  bool_rotate_to_global |[`bool`](../../core-concepts/dpf-types#standard-types) | if true the field is rotated to global coordinate system (default true) |
| <strong>Pin 6</strong>|  all_dofs |[`bool`](../../core-concepts/dpf-types#standard-types) | if this pin is set to true, all the dofs are retrieved. By default this pin is set to false and only the translational dofs are retrieved. |
| <strong>Pin 7</strong>|  sector_mesh |[`abstract_meshed_region`](../../core-concepts/dpf-types#abstract-meshed-region), [`meshes_container`](../../core-concepts/dpf-types#meshes-container) | mesh of the base sector (can be a skin). |
| <strong>Pin 14</strong>|  read_cyclic |[`enum dataProcessing::ECyclicReading`](../../core-concepts/dpf-types#enum-dataprocessing::ecyclicreading), [`int32`](../../core-concepts/dpf-types#standard-types) | if 0 cyclic symmetry is ignored, if 1 cyclic sector is read, if 2 cyclic expansion is done, if 3 cyclic expansion is done and stages are merged (default is 1) |
| <strong>Pin 15</strong>|  expanded_meshed_region |[`abstract_meshed_region`](../../core-concepts/dpf-types#abstract-meshed-region), [`meshes_container`](../../core-concepts/dpf-types#meshes-container) | mesh expanded. |
| <strong>Pin 16</strong>|  cyclic_support |[`cyclic_support`](../../core-concepts/dpf-types#cyclic-support) |  |


## Outputs

| Output |  Name | Expected type(s) | Description |
|-------|------|------------------|-------------|
|  **Pin 0**| fields_container |[`fields_container`](../../core-concepts/dpf-types#fields-container) | FieldsContainer filled in |
|  **Pin 1**| expanded_meshes |[`meshes_container`](../../core-concepts/dpf-types#meshes-container) |  |

## Configurations

| Name| Expected type(s) | Default value | Description |
|-----|------|----------|-------------|
| **mutex** |[`bool`](../../core-concepts/dpf-types#standard-types) | false | If this option is set to true, the shared memory is prevented from being simultaneously accessed by multiple threads. |

## Scripting

 **Category**: result

 **Plugin**: mapdl

 **Scripting name**: cyclic_strain_energy

 **Full name**: result.cyclic_strain_energy

 **Internal name**: mapdl::rst::ENG_SE_cyclic

 **License**: None
 
