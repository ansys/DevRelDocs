---
category: utility
plugin: core
license: None
Version: 0.0.0
---

# utility:extract time freq

## Version

0.0.0

## Changelog

- Version 0.0.0: Initial release.

## Description

Extract timefreqs with sets scoping from a time freq support


## Inputs

| Input | Name | Expected type(s) | Description |
|-------|-------|------------------|-------------|
| <strong>Pin 0</strong> <br><span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  time_freq_support |[`time_freq_support`](../../getting-started/using-data-containers.md#time-freq-support) |  |
| <strong>Pin 1</strong>|  time_scoping |[`scoping`](../../getting-started/using-data-containers.md#scoping) |  |
| <strong>Pin 2</strong>|  real_or_complex |[`bool`](../../getting-started/using-data-containers.md#bool) | False for real only (default). True for complex output. |


## Outputs

| Output |  Name | Expected type(s) | Description |
|-------|------|------------------|-------------|
|  **Pin 0**| field |[`field`](../../getting-started/using-data-containers.md#field), [`fields_container`](../../getting-started/using-data-containers.md#fields-container) |  |

## Configurations

| Name| Expected type(s) | Default value | Description |
|-----|------|----------|-------------|
| **mutex** |[`bool`](../../getting-started/using-data-containers.md#bool) | false | If this option is set to true, the shared memory is prevented from being simultaneously accessed by multiple threads. |

## Scripting

 **Category**: utility

 **Plugin**: core

 **Scripting name**: extract_time_freq

 **Full name**: utility.extract_time_freq

 **Internal name**: extract_time_freq

 **License**: None
 
