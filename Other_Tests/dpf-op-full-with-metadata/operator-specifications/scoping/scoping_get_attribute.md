---
category: scoping
plugin: core
license: None
---

# scoping:scoping get attribute

## Description

Uses the Scoping APIs to return a given attribute of the scoping in input.

### Plugin

core

## Inputs

| Input | Name | Expected type(s) | Description |
|-------|-------|------------------|-------------|
| <strong>Pin 0</strong> <span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  scoping |[`scoping`](../../getting-started/using-data-containers.md#scoping) |  |
| <strong>Pin 1</strong> <span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  property_name |[`string`](../../getting-started/using-data-containers.md#string) | Supported property names are: "ids", "location". |


## Outputs

| Output |  Name | Expected type(s) | Description |
|-------|------|------------------|-------------|
| <strong>Pin 0</strong> <span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span> | property |[`vector<int32>`](../../getting-started/using-data-containers.md#vector<int32>), [`string`](../../getting-started/using-data-containers.md#string) | Returns a vector of int for property: "ids" and a string for property: "location". |

## Configurations

| Name| Expected type(s) | Default value | Description |
|-----|------|----------|-------------|
| **mutex** |[`bool`](../../getting-started/using-data-containers.md#bool) | false | If this option is set to true, the shared memory is prevented from being simultaneously accessed by multiple threads. |

## Scripting

- Category: scoping
- Plugin: core
- Scripting name: scoping_get_attribute
- Full name: scoping.scoping_get_attribute
- Internal name: scoping::get_attribute
- License: None
  