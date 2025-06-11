---
category: utility
plugin: core
license: None
Version: 0.0.0
---

# utility:field get attribute

## Version

0.0.0

## Changelog

- Version 0.0.0: Initial release.

## Description

A Field in pin 0 and a property name (string) in pin 1 are expected in input.


## Inputs

| Input | Name | Expected type(s) | Description |
|-------|-------|------------------|-------------|
| <strong>Pin 0</strong> <br><span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  field |[`field`](../../getting-started/using-data-containers.md#field) |  |
| <strong>Pin 1</strong> <br><span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  property_name |[`string`](../../getting-started/using-data-containers.md#string) | Accepted inputs are: 'time_freq_support' and 'scoping'. |


## Outputs

| Output |  Name | Expected type(s) | Description |
|-------|------|------------------|-------------|
|  **Pin 0**| property |[`time_freq_support`](../../getting-started/using-data-containers.md#time-freq-support), [`scoping`](../../getting-started/using-data-containers.md#scoping) | Property value. |

## Configurations

| Name| Expected type(s) | Default value | Description |
|-----|------|----------|-------------|
| **mutex** |[`bool`](../../getting-started/using-data-containers.md#bool) | false | If this option is set to true, the shared memory is prevented from being simultaneously accessed by multiple threads. |

## Scripting

 **Category**: utility

 **Plugin**: core

 **Scripting name**: field_get_attribute

 **Full name**: utility.field_get_attribute

 **Internal name**: field::get_attribute

 **License**: None
 
