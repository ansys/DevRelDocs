---
category: math
plugin: core
license: None
Version: 0.0.0
---

# math:total sum

## Version

0.0.0

## Changelog

- Version 0.0.0: Initial release.

## Description

Sums all the elementary data of a field to produce one elementary data point.


## Inputs

| Input | Name | Expected type(s) | Description |
|-------|-------|------------------|-------------|
| <strong>Pin 0</strong> <br><span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  fieldA |[`field`](../../core-concepts/dpf-types.md#field), [`fields_container`](../../core-concepts/dpf-types.md#fields-container) | field or fields container with only one field is expected |
| <strong>Pin 1</strong>|  ponderation |[`field`](../../core-concepts/dpf-types.md#field) | Field containing weights, one weight per entity |
| <strong>Pin 2</strong>|  time_scoping |[`scoping`](../../core-concepts/dpf-types.md#scoping) | time_scoping |


## Outputs

| Output |  Name | Expected type(s) | Description |
|-------|------|------------------|-------------|
|  **Pin 0**| field |[`field`](../../core-concepts/dpf-types.md#field) | Field containing the (weighted) sum for each component in an elementary data |

## Configurations

| Name| Expected type(s) | Default value | Description |
|-----|------|----------|-------------|
| **mutex** |[`bool`](../../core-concepts/dpf-types.md#standard-types) | false | If this option is set to true, the shared memory is prevented from being simultaneously accessed by multiple threads. |

## Scripting

 **Category**: math

 **Plugin**: core

 **Scripting name**: None

 **Full name**: None

 **Internal name**: accumulate

 **License**: None
 
