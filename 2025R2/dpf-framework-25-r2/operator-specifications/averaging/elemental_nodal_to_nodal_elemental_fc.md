---
category: averaging
plugin: core
license: None
Version: 0.0.0
---

# averaging:elemental nodal to nodal elemental (fields container)

Version: 0.0.0


## Description

Transforms Elemental Nodal fields to Nodal Elemental fields. The result is computed on a given node's scoping.


## Inputs


| Input | Name | Expected type(s) | Description |
|-------|-------|------------------|-------------|
| <strong>Pin 0</strong> <br><span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span> | fields_container |[`fields_container`](../../core-concepts/dpf-types.md#fields-container) |  |
| <strong>Pin 1</strong> | mesh_scoping |[`scoping`](../../core-concepts/dpf-types.md#scoping) |  |

## Outputs


| Output | Name | Expected type(s) | Description |
|-------|------|------------------|-------------|
| **Pin 0** | fields_container |[`fields_container`](../../core-concepts/dpf-types.md#fields-container) |  |

## Configurations

| Name| Expected type(s) | Default value | Description |
|-----|------|----------|-------------|
| **mutex** |[`bool`](../../core-concepts/dpf-types.md#standard-types) | false | If this option is set to true, the shared memory is prevented from being simultaneously accessed by multiple threads. |
| **num_threads** |[`int32`](../../core-concepts/dpf-types.md#standard-types) | 0 | Number of threads to use to run in parallel |
| **run_in_parallel** |[`bool`](../../core-concepts/dpf-types.md#standard-types) | true | Loops are allowed to run in parallel if the value of this config is set to true. |


## Scripting

 **Category**: averaging

 **Plugin**: core

 **Scripting name**: elemental_nodal_to_nodal_elemental_fc

 **Full name**: averaging.elemental_nodal_to_nodal_elemental_fc

 **Internal name**: ElementalNodal_To_NodalElemental_fc

 **License**: None
 

## Changelog

- Version 0.0.0: Initial release.