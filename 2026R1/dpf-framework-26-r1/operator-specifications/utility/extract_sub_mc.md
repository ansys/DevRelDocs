---
category: utility
plugin: core
license: None
---

# utility:extract sub meshes container

**Version: 0.0.0**

## Description

Creates a new meshes container with all the meshed regions corresponding to the label space in input 1. If pin 1 is not defined, pin 0 input will be copied to the output.

## Inputs

| Input | Name | Expected type(s) | Description |
|-------|-------|------------------|-------------|
| <strong>Pin 0</strong> <br><span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  meshes |[`meshes_container`](../../core-concepts/dpf-types.md#meshes-container) | meshes |
| <strong>Pin 1</strong>|  label_space |[`label_space`](../../core-concepts/dpf-types.md#label-space), [`scoping`](../../core-concepts/dpf-types.md#scoping) | Label space, or scoping defining the label space (scoping location), values to keep (scoping IDs) |
| <strong>Pin 2</strong>|  collapse_labels |[`bool`](../../core-concepts/dpf-types.md#standard-types) | If set to true (default) the input label space (scoping location) is suppressed from the output meshes container, otherwise, label space is kept. |

## Outputs

| Output |  Name | Expected type(s) | Description |
|-------|------|------------------|-------------|
|  **Pin 0**| meshes_container |[`meshes_container`](../../core-concepts/dpf-types.md#meshes-container) | meshes |

## Configurations

| Name| Expected type(s) | Default value | Description |
|-----|------|----------|-------------|
| **mutex** |[`bool`](../../core-concepts/dpf-types.md#standard-types) | false | If this option is set to true, the shared memory is prevented from being simultaneously accessed by multiple threads. |

## Scripting

 **Category**: utility

 **Plugin**: core

 **Scripting name**: extract_sub_mc

 **Full name**: utility.extract_sub_mc

 **Internal name**: extract_sub_mc

 **License**: None


## Changelog

- Version 0.0.0: Initial release.