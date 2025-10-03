---
category: utility
plugin: core
license: None
---

# utility:merge materials

**Version: 0.0.0**

## Description

Assembles a set of materials into a unique one.

## Inputs

| Input | Name | Expected type(s) | Description |
|-------|-------|------------------|-------------|
| <strong>Pin 0</strong> <br><span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  materials |`vector<shared_ptr<materials>>`, `materials` | A vector of materials to merge or materials from pin 0 to ... |

## Outputs

| Output |  Name | Expected type(s) | Description |
|-------|------|------------------|-------------|
|  **Pin 0**| merged_materials |`materials` |  |

## Configurations

| Name| Expected type(s) | Default value | Description |
|-----|------|----------|-------------|
| **mutex** |[`bool`](../../core-concepts/dpf-types.md#standard-types) | false | If this option is set to true, the shared memory is prevented from being simultaneously accessed by multiple threads. |

## Scripting

 **Category**: utility

 **Plugin**: core

 **Scripting name**: merge_materials

 **Full name**: utility.merge_materials

 **Internal name**: merge::materials

 **License**: None


## Changelog

- Version 0.0.0: Initial release.