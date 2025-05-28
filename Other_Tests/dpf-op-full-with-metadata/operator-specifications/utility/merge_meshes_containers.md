---
category: utility
plugin: core
license: None
---

# utility:merge meshes containers

## Description

Assembles a set of meshes containers into a unique one.

### Plugin

core

## Inputs

| Input | Name | Expected type(s) | Description |
|-------|-------|------------------|-------------|
| <strong>Pin 0</strong> <span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  meshes_containers |[`vector<shared_ptr<meshes_container>>`](../../getting-started/using-data-containers.md#vector<shared-ptr<meshes-container>>), [`meshes_container`](../../getting-started/using-data-containers.md#meshes-container) | a vector of meshes containers to merge or meshes containers from pin 0 to ... |


## Outputs

| Output |  Name | Expected type(s) | Description |
|-------|------|------------------|-------------|
| <strong>Pin 0</strong> <span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span> | merged_meshes_container |[`meshes_container`](../../getting-started/using-data-containers.md#meshes-container) |  |

## Configurations

| Name| Expected type(s) | Default value | Description |
|-----|------|----------|-------------|
| **mutex** |[`bool`](../../getting-started/using-data-containers.md#bool) | false | If this option is set to true, the shared memory is prevented from being simultaneously accessed by multiple threads. |
| **read_inputs_in_parallel** |[`bool`](../../getting-started/using-data-containers.md#bool) | false | If this option is set to true, the operator's inputs will be evaluated in parallel. |

## Scripting

- Category: utility
- Plugin: core
- Scripting name: merge_meshes_containers
- Full name: utility.merge_meshes_containers
- Internal name: merge::meshes_container
- License: None
  