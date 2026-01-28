---
category: scoping
plugin: core
license: None
---

# scoping:intersect scopings

**Version: 0.0.0**

## Description

Intersect 2 scopings and return the intersection and the difference between the intersection and the first scoping.

## Inputs

| Input | Name | Expected type(s) | Description |
|-------|-------|------------------|-------------|
| <strong>Pin 0</strong> <br><span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  scopingA |[`scoping`](../../core-concepts/dpf-types.md#scoping) |  |
| <strong>Pin 1</strong> <br><span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  scopingB |[`scoping`](../../core-concepts/dpf-types.md#scoping) |  |

## Outputs

| Output |  Name | Expected type(s) | Description |
|-------|------|------------------|-------------|
|  **Pin 0**| intersection |[`scoping`](../../core-concepts/dpf-types.md#scoping) |  |
|  **Pin 1**| scopingA_min_intersection |[`scoping`](../../core-concepts/dpf-types.md#scoping) |  |

## Configurations

| Name| Expected type(s) | Default value | Description |
|-----|------|----------|-------------|
| **mutex** |[`bool`](../../core-concepts/dpf-types.md#standard-types) | false | If this option is set to true, the shared memory is prevented from being simultaneously accessed by multiple threads. |

## Scripting

 **Category**: scoping

 **Plugin**: core

 **Scripting name**: intersect

 **Full name**: scoping.intersect

 **Internal name**: scoping::intersect

 **License**: None


## Changelog

- Version 0.0.0: Initial release.