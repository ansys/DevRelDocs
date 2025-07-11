---
category: averaging
plugin: core
license: None
Version: 0.0.0
---

# averaging:to nodal (field)

**Version: 0.0.0**


## Description

Transforms a field into a Nodal field using an averaging process. The result is computed on a given node's scoping.


## Inputs


| Input | Name | Expected type(s) | Description |
|-------|-------|------------------|-------------|
| <strong>Pin 0</strong> <br><span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span> | field |[`field`](../../core-concepts/dpf-types.md#field), [`fields_container`](../../core-concepts/dpf-types.md#fields-container) | field or fields container with only one field is expected |
| <strong>Pin 1</strong> | mesh_scoping |[`scoping`](../../core-concepts/dpf-types.md#scoping) |  |
| <strong>Pin 26</strong> | merge_solid_shell |[`bool`](../../core-concepts/dpf-types.md#standard-types) | For shell/solid mixed field, gather in one field all solids and shells (only on one layer, false by default). |
| <strong>Pin 27</strong> | shell_layer |[`int32`](../../core-concepts/dpf-types.md#standard-types) | If merge_solid_shell pin set to true, user have to choose a shell layer. For shell/solid mixed field, gather in one field all solids and shells (only on one layer). |

## Outputs


| Output | Name | Expected type(s) | Description |
|-------|------|------------------|-------------|
| **Pin 0** | field |[`field`](../../core-concepts/dpf-types.md#field) |  |

## Configurations

| Name| Expected type(s) | Default value | Description |
|-----|------|----------|-------------|
| **mutex** |[`bool`](../../core-concepts/dpf-types.md#standard-types) | false | If this option is set to true, the shared memory is prevented from being simultaneously accessed by multiple threads. |


## Scripting

 **Category**: averaging

 **Plugin**: core

 **Scripting name**: to_nodal

 **Full name**: averaging.to_nodal

 **Internal name**: to_nodal

 **License**: None
 

## Changelog

- Version 0.0.0: Initial release.