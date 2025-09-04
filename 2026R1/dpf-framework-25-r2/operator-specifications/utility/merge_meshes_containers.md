---
category: utility
plugin: core
license: None
---

# utility:merge meshes containers

**Version: 0.0.0**

## Description

Assembles a set of meshes containers into a unique one.

## Inputs

| Input | Name | Expected type(s) | Description |
|-------|-------|------------------|-------------|
| <strong>Pin 0</strong> <br><span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  meshes_containers |`vector<shared_ptr<meshes_container>>`, [`meshes_container`](../../core-concepts/dpf-types.md#meshes-container) | a vector of meshes containers to merge or meshes containers from pin 0 to ... |

## Outputs

| Output |  Name | Expected type(s) | Description |
|-------|------|------------------|-------------|
|  **Pin 0**| merged_meshes_container |[`meshes_container`](../../core-concepts/dpf-types.md#meshes-container) |  |

## Configurations

| Name| Expected type(s) | Default value | Description |
|-----|------|----------|-------------|
| **mutex** |[`bool`](../../core-concepts/dpf-types.md#standard-types) | false | If this option is set to true, the shared memory is prevented from being simultaneously accessed by multiple threads. |
| **read_inputs_in_parallel** |[`bool`](../../core-concepts/dpf-types.md#standard-types) | false | If this option is set to true, the operator's inputs will be evaluated in parallel. |

## Scripting

 **Category**: utility

 **Plugin**: core

 **Scripting name**: merge_meshes_containers

 **Full name**: utility.merge_meshes_containers

 **Internal name**: merge::meshes_container

 **License**: None


## Changelog

- Version 0.0.0: Initial release.