---
category: utility
plugin: core
license: None
---

# utility:merge scopings containers

## Description

Assembles a set of scopings containers into a unique one.

### Plugin

core

## Inputs

| Input | Name | Expected type(s) | Description |
|-------|-------|------------------|-------------|
| <strong>Pin 0</strong> <br><span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  scopings_containers |[`vector<shared_ptr<scopings_container>>`](../../getting-started/using-data-containers.md#vector<shared-ptr<scopings-container>>), [`scopings_container`](../../getting-started/using-data-containers.md#scopings-container) | A vector of scopings containers to merge or scopings containers from pin 0 to ... |


## Outputs

| Output |  Name | Expected type(s) | Description |
|-------|------|------------------|-------------|
| <strong>Pin 0</strong> <br><span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span> | merged_scopings_container |[`scopings_container`](../../getting-started/using-data-containers.md#scopings-container) |  |

## Configurations

| Name| Expected type(s) | Default value | Description |
|-----|------|----------|-------------|
| **mutex** |[`bool`](../../getting-started/using-data-containers.md#bool) | false | If this option is set to true, the shared memory is prevented from being simultaneously accessed by multiple threads. |

## Scripting

- Category: utility
- Plugin: core
- Scripting name: merge_scopings_containers
- Full name: utility.merge_scopings_containers
- Internal name: merge::scopings_container
- License: None
  