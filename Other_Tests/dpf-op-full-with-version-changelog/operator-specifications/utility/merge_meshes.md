---
category: utility
plugin: core
license: None
Version: 0.0.0
---

# utility:merge meshes

## Version

0.0.0

## Changelog

- Version 0.0.0: Initial release.

## Description

Take a set of mesh and assemble them in a unique one


## Inputs

| Input | Name | Expected type(s) | Description |
|-------|-------|------------------|-------------|
| <strong>Pin -200</strong>|  should_merge_named_selections |[`bool`](../../getting-started/using-data-containers.md#bool) | For certain types of files (such as RST), scoping from names selection does not need to be merged.If this pin is true, the merge occurs. If this pin is false, the merge does not occur. Default is true. |
| <strong>Pin 0</strong> <br><span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  meshes |[`vector<shared_ptr<abstract_meshed_region>>`](../../getting-started/using-data-containers.md#vector<shared-ptr<abstract-meshed-region>>), [`abstract_meshed_region`](../../getting-started/using-data-containers.md#abstract-meshed-region) | A vector of meshed region to merge or meshed region from pin 0 to ... |
| <strong>Pin 101</strong>|  merge_method |[`int32`](../../getting-started/using-data-containers.md#int32) | 0: merge by distance, 1: merge by node id (default) |
| <strong>Pin 102</strong>|  box_size |[`double`](../../getting-started/using-data-containers.md#double) | Box size used when merging by distance. Default value is 1e-10. |
| <strong>Pin 103</strong>|  remove_duplicate_elements |[`int32`](../../getting-started/using-data-containers.md#int32) | 0: keep duplicate elements (default), 1: remove duplicate elements |


## Outputs

| Output |  Name | Expected type(s) | Description |
|-------|------|------------------|-------------|
|  **Pin 0**| merges_mesh |[`abstract_meshed_region`](../../getting-started/using-data-containers.md#abstract-meshed-region) |  |

## Configurations

| Name| Expected type(s) | Default value | Description |
|-----|------|----------|-------------|
| **mutex** |[`bool`](../../getting-started/using-data-containers.md#bool) | false | If this option is set to true, the shared memory is prevented from being simultaneously accessed by multiple threads. |
| **read_inputs_in_parallel** |[`bool`](../../getting-started/using-data-containers.md#bool) | false | If this option is set to true, the operator's inputs will be evaluated in parallel. |

## Scripting

 **Category**: utility

 **Plugin**: core

 **Scripting name**: merge_meshes

 **Full name**: utility.merge_meshes

 **Internal name**: merge::mesh

 **License**: None
 
