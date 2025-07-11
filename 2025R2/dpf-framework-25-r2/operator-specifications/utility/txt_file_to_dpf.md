---
category: utility
plugin: core
license: None
---

# utility:txt file to dpf

**Version: 0.0.0**

## Description

Take an input string and parse it into dataProcessing type

## Inputs

| Input | Name | Expected type(s) | Description |
|-------|-------|------------------|-------------|
| <strong>Pin 0</strong> <br><span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  input_string |[`string`](../../core-concepts/dpf-types.md#standard-types}}) | ex: 'double:1.0', 'int:1', 'vector<double>:1.0;1.0' |

## Outputs

| Output |  Name | Expected type(s) | Description |
|-------|------|------------------|-------------|
|  **Pin 0**| any_output | | any output |

## Configurations

| Name| Expected type(s) | Default value | Description |
|-----|------|----------|-------------|
| **mutex** |[`bool`](../../core-concepts/dpf-types.md#standard-types}}) | false | If this option is set to true, the shared memory is prevented from being simultaneously accessed by multiple threads. |

## Scripting

 **Category**: utility

 **Plugin**: core

 **Scripting name**: txt_file_to_dpf

 **Full name**: utility.txt_file_to_dpf

 **Internal name**: text_parser

 **License**: None


## Changelog

- Version 0.0.0: Initial release.