---
category: utility
plugin: core
license: None
---

# utility:merge scopings containers

**Version: 0.0.0**

## Description

Assembles a set of scopings containers into a unique one.

## Inputs

| Input | Name | Expected type(s) | Description |
|-------|-------|------------------|-------------|
| <strong>Pin 0</strong> <br><span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  scopings_containers |`vector<shared_ptr<scopings_container>>`, [`scopings_container`](../../core-concepts/dpf-types.md#scopings-container) | A vector of scopings containers to merge or scopings containers from pin 0 to ... |

## Outputs

| Output |  Name | Expected type(s) | Description |
|-------|------|------------------|-------------|
|  **Pin 0**| merged_scopings_container |[`scopings_container`](../../core-concepts/dpf-types.md#scopings-container) |  |

## Configurations

| Name| Expected type(s) | Default value | Description |
|-----|------|----------|-------------|
| **mutex** |[`bool`](../../core-concepts/dpf-types.md#standard-types) | false | If this option is set to true, the shared memory is prevented from being simultaneously accessed by multiple threads. |

## Scripting

 **Category**: utility

 **Plugin**: core

 **Scripting name**: merge_scopings_containers

 **Full name**: utility.merge_scopings_containers

 **Internal name**: merge::scopings_container

 **License**: None


## Changelog

- Version 0.0.0: Initial release.