---
category: utility
plugin: core
license: None
Version: 0.0.0
---

# utility:html doc

## Version

0.0.0

## Changelog

- Version 0.0.0: Initial release.

## Description

Create dpf's html documentation. Only on Windows.


## Inputs

| Input | Name | Expected type(s) | Description |
|-------|-------|------------------|-------------|
| <strong>Pin 0</strong>|  output_path |[`string`](../../getting-started/using-data-containers.md#string) | default is {working directory}/dataProcessingDoc.html |
| <strong>Pin 1</strong>|  exposure_level |[`int32`](../../getting-started/using-data-containers.md#int32) | Generate the documentation depending on exposure level : 0 (default) for public operators, 1 includes hidden operator, 2 includes private operator, 3 includes operator without specifications. |


## Outputs

| Output |  Name | Expected type(s) | Description |
|-------|------|------------------|-------------|

## Configurations

| Name| Expected type(s) | Default value | Description |
|-----|------|----------|-------------|
| **mutex** |[`bool`](../../getting-started/using-data-containers.md#bool) | false | If this option is set to true, the shared memory is prevented from being simultaneously accessed by multiple threads. |

## Scripting

 **Category**: utility

 **Plugin**: core

 **Scripting name**: html_doc

 **Full name**: utility.html_doc

 **Internal name**: html_doc

 **License**: None
 
