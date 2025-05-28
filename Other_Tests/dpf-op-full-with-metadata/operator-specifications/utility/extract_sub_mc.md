---
category: utility
plugin: core
license: None
---

# utility:extract sub meshes container

## Description

Creates a new meshes container with all the meshed regions corresponding to the label space in input 1. If pin 1 is not defined, pin 0 input will be copied to the output.

### Plugin

core

## Inputs

| Input | Name | Expected type(s) | Description |
|-------|-------|------------------|-------------|
| <strong>Pin 0</strong> <span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  meshes |[`meshes_container`](../../getting-started/using-data-containers.md#meshes-container) | meshes |
| <strong>Pin 1</strong>|  label_space |[`label_space`](../../getting-started/using-data-containers.md#label-space), [`scoping`](../../getting-started/using-data-containers.md#scoping) | Label space, or scoping defining the label space (scoping location), values to keep (scoping IDs) |
| <strong>Pin 2</strong>|  collapse_labels |[`bool`](../../getting-started/using-data-containers.md#bool) | If set to true (default) the input label space (scoping location) is suppressed from the output meshes container, otherwise, label space is kept. |


## Outputs

| Output |  Name | Expected type(s) | Description |
|-------|------|------------------|-------------|
| <strong>Pin 0</strong> <span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span> | meshes_container |[`meshes_container`](../../getting-started/using-data-containers.md#meshes-container) | meshes |

## Configurations

| Name| Expected type(s) | Default value | Description |
|-----|------|----------|-------------|
| **mutex** |[`bool`](../../getting-started/using-data-containers.md#bool) | false | If this option is set to true, the shared memory is prevented from being simultaneously accessed by multiple threads. |

## Scripting

- Category: utility
- Plugin: core
- Scripting name: extract_sub_mc
- Full name: utility.extract_sub_mc
- Internal name: extract_sub_mc
- License: None
  