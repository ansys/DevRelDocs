---
category: composite
plugin: composite
license: None
---

# composite:string_container

**Version: 0.0.0**

## Description

Operator which stores a string at each input pin. It supports unlimited number of inputs. The purpose of this operator is to pass list of strings between operators.

## Inputs

| Input | Name | Expected type(s) | Description |
|-------|-------|------------------|-------------|
| <strong>Pin 0</strong>|  string |[`string`](../../core-concepts/dpf-types.md#standard-types) | First value. |

## Outputs

| Output |  Name | Expected type(s) | Description |
|-------|------|------------------|-------------|
|  **Pin 0**| strings |[`vector<string>`](../../core-concepts/dpf-types.md#standard-types) | List of input strings |

## Configurations

| Name| Expected type(s) | Default value | Description |
|-----|------|----------|-------------|
| **mutex** |[`bool`](../../core-concepts/dpf-types.md#standard-types) | false | If this option is set to true, the shared memory is prevented from being simultaneously accessed by multiple threads. |

## Scripting

 **Category**: composite

 **Plugin**: composite

 **Scripting name**: string_container

 **Full name**: composite.string_container

 **Internal name**: composite::string_container

 **License**: None


## Changelog

- Version 0.0.0: Initial release.