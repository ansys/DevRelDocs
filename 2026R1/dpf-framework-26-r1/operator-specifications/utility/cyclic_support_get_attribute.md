---
category: utility
plugin: core
license: None
---

# utility:cyclic support get attribute

**Version: 0.0.0**

## Description

A CyclicSupport in pin 0 and a property name (string) in pin 1 are expected in input.

## Inputs

| Input | Name | Expected type(s) | Description |
|-------|-------|------------------|-------------|
| <strong>Pin 0</strong> <br><span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  cyclic_support |[`cyclic_support`](../../core-concepts/dpf-types.md#cyclic-support) |  |
| <strong>Pin 1</strong> <br><span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  property_name |[`string`](../../core-concepts/dpf-types.md#standard-types) | Accepted inputs are: 'element_duplicate_offset' and 'node_duplicate_offset' (returns int). |

## Outputs

| Output |  Name | Expected type(s) | Description |
|-------|------|------------------|-------------|
|  **Pin 0**| property |[`string`](../../core-concepts/dpf-types.md#standard-types), [`int32`](../../core-concepts/dpf-types.md#standard-types) | Property value. |

## Configurations

| Name| Expected type(s) | Default value | Description |
|-----|------|----------|-------------|
| **mutex** |[`bool`](../../core-concepts/dpf-types.md#standard-types) | false | If this option is set to true, the shared memory is prevented from being simultaneously accessed by multiple threads. |

## Scripting

 **Category**: utility

 **Plugin**: core

 **Scripting name**: cyclic_support_get_attribute

 **Full name**: utility.cyclic_support_get_attribute

 **Internal name**: cyclic_support::get_attribute

 **License**: None


## Changelog

- Version 0.0.0: Initial release.