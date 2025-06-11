---
category: logic
plugin: core
license: None
Version: 0.0.0
---

# logic:same meshes?

## Version

0.0.0

## Changelog

- Version 0.0.0: Initial release.

## Description

Takes two meshes and compares them. Note: When comparing mesh properties, the current behaviour is to verify that the properties in the first mesh (pin 0) are included in the second mesh (pin 1).


## Inputs

| Input | Name | Expected type(s) | Description |
|-------|-------|------------------|-------------|
| <strong>Pin 0</strong> <br><span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  meshA |[`abstract_meshed_region`](../../getting-started/using-data-containers.md#abstract-meshed-region) |  |
| <strong>Pin 1</strong> <br><span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  meshB |[`abstract_meshed_region`](../../getting-started/using-data-containers.md#abstract-meshed-region) |  |
| <strong>Pin 2</strong> <br><span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  small_value |[`double`](../../getting-started/using-data-containers.md#double) | define what is a small value for numeric comparison. |
| <strong>Pin 3</strong> <br><span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  tolerance |[`double`](../../getting-started/using-data-containers.md#double) | define the relative tolerance ceil for numeric comparison. |
| <strong>Pin 4</strong> <br><span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  compare_auxiliary |[`bool`](../../getting-started/using-data-containers.md#bool) | compare auxiliary data (i.e property fields, scopings...). Default value is 'false'. |


## Outputs

| Output |  Name | Expected type(s) | Description |
|-------|------|------------------|-------------|
|  **Pin 0**| are_identical |[`bool`](../../getting-started/using-data-containers.md#bool) |  |

## Configurations

| Name| Expected type(s) | Default value | Description |
|-----|------|----------|-------------|
| **mutex** |[`bool`](../../getting-started/using-data-containers.md#bool) | false | If this option is set to true, the shared memory is prevented from being simultaneously accessed by multiple threads. |

## Scripting

 **Category**: logic

 **Plugin**: core

 **Scripting name**: identical_meshes

 **Full name**: logic.identical_meshes

 **Internal name**: compare::mesh

 **License**: None
 
