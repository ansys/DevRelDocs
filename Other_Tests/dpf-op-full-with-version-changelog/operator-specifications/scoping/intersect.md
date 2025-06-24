---
category: scoping
plugin: core
license: None
Version: 0.0.0
---

# scoping:intersect scopings

## Version

0.0.0

## Changelog

- Version 0.0.0: Initial release.

## Description

Intersect 2 scopings and return the intersection and the difference between the intersection and the first scoping.


## Inputs

| Input | Name | Expected type(s) | Description |
|-------|-------|------------------|-------------|
| <strong>Pin 0</strong> <br><span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  scopingA |[`scoping`](../../getting-started/using-data-containers.md#scoping) |  |
| <strong>Pin 1</strong> <br><span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  scopingB |[`scoping`](../../getting-started/using-data-containers.md#scoping) |  |


## Outputs

| Output |  Name | Expected type(s) | Description |
|-------|------|------------------|-------------|
|  **Pin 0**| intersection |[`scoping`](../../getting-started/using-data-containers.md#scoping) |  |
|  **Pin 1**| scopingA_min_intersection |[`scoping`](../../getting-started/using-data-containers.md#scoping) |  |

## Configurations

| Name| Expected type(s) | Default value | Description |
|-----|------|----------|-------------|
| **mutex** |[`bool`](../../getting-started/using-data-containers.md#bool) | false | If this option is set to true, the shared memory is prevented from being simultaneously accessed by multiple threads. |

## Scripting

 **Category**: scoping

 **Plugin**: core

 **Scripting name**: intersect

 **Full name**: scoping.intersect

 **Internal name**: scoping::intersect

 **License**: None
 
