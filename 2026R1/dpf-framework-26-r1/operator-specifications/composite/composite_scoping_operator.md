---
category: composite
plugin: composite
license: None
---

# composite:composite_scoping_operator

**Version: 0.0.0**

## Description

Computes scoping based on ply and element scope

## Inputs

| Input | Name | Expected type(s) | Description |
|-------|-------|------------------|-------------|
| <strong>Pin 1</strong> <br><span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  element_scope |[`scoping`](../../core-concepts/dpf-types.md#scoping) | Optional: CScoping with selected element ids. |
| <strong>Pin 7</strong> <br><span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  mesh |[`abstract_meshed_region`](../../core-concepts/dpf-types.md#meshed-region) |  |
| <strong>Pin 105</strong> <br><span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  ply_scope |[`vector<string>`](../../core-concepts/dpf-types.md#standard-types) | Optional: vector of selected ply ids. |

## Outputs

| Output |  Name | Expected type(s) | Description |
|-------|------|------------------|-------------|

## Configurations

| Name| Expected type(s) | Default value | Description |
|-----|------|----------|-------------|
| **mutex** |[`bool`](../../core-concepts/dpf-types.md#standard-types) | false | If this option is set to true, the shared memory is prevented from being simultaneously accessed by multiple threads. |

## Scripting

 **Category**: composite

 **Plugin**: composite

 **Scripting name**: composite_scoping_operator

 **Full name**: composite.composite_scoping_operator

 **Internal name**: composite::composite_scoping_operator

 **License**: None


## Changelog

- Version 0.0.0: Initial release.