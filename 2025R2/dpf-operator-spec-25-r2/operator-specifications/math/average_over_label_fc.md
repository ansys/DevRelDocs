---
category: math
plugin: core
license: None
Version: 0.0.0
---

# math:average over label

## Version

0.0.0

## Changelog

- Version 0.0.0: Initial release.

## Description

Compute the component-wise average over all the fields that have the same ID as the label set as input in the fields container. This computation can be incremental. If the input fields container is connected and the operator is run multiple times, the output field will be on all the connected inputs.


## Inputs

| Input | Name | Expected type(s) | Description |
|-------|-------|------------------|-------------|
| <strong>Pin 0</strong> <br><span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  fields_container |[`fields_container`](./../../getting-started/using-data-containers.md#fields-container) |  |
| <strong>Pin 1</strong>|  label |[`string`](./../../getting-started/using-data-containers.md#string) | Label of the fields container where it should operate. |


## Outputs

| Output |  Name | Expected type(s) | Description |
|-------|------|------------------|-------------|
|  **Pin 0**| field |[`field`](./../../getting-started/using-data-containers.md#field) |  |

## Configurations

| Name| Expected type(s) | Default value | Description |
|-----|------|----------|-------------|
| **incremental** |[`bool`](./../../getting-started/using-data-containers.md#bool) | true | This operator can be run several times with different inputs so that the output will take all the inputs of the different runs into account. It can be used to save memory. For example, a large time scoping can be split in smaller ranges of time to compute the result range by range. |
| **mutex** |[`bool`](./../../getting-started/using-data-containers.md#bool) | false | If this option is set to true, the shared memory is prevented from being simultaneously accessed by multiple threads. |

## Scripting

 **Category**: math

 **Plugin**: core

 **Scripting name**: None

 **Full name**: None

 **Internal name**: average_over_label_fc

 **License**: None
 
