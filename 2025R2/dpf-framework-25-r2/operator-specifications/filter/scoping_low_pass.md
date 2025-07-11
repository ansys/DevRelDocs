---
category: filter
plugin: core
license: any_dpf_supported_increments
---

# filter:low pass (scoping)

**Version: 0.0.0**

## Description

The low pass filter returns all the values below (but not equal to) the threshold value in input.

## Inputs

| Input | Name | Expected type(s) | Description |
|-------|-------|------------------|-------------|
| <strong>Pin 0</strong> <br><span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  field |[`field`](../../core-concepts/dpf-types.md#field), [`fields_container`](../../core-concepts/dpf-types.md#fields-container) | field or fields container with only one field is expected |
| <strong>Pin 1</strong> <br><span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  threshold |[`double`](../../core-concepts/dpf-types.md#standard-types}}), [`field`](../../core-concepts/dpf-types.md#field) | a threshold scalar or a field containing one value is expected |
| <strong>Pin 2</strong>|  both |[`bool`](../../core-concepts/dpf-types.md#standard-types}}) | The default is false. If set to true, the complement of the filtered fields container is returned on output pin 1. |

## Outputs

| Output |  Name | Expected type(s) | Description |
|-------|------|------------------|-------------|
|  **Pin 0**| scoping |[`scoping`](../../core-concepts/dpf-types.md#scoping) |  |

## Configurations

| Name| Expected type(s) | Default value | Description |
|-----|------|----------|-------------|
| **mutex** |[`bool`](../../core-concepts/dpf-types.md#standard-types}}) | false | If this option is set to true, the shared memory is prevented from being simultaneously accessed by multiple threads. |

## Scripting

 **Category**: filter

 **Plugin**: core

 **Scripting name**: scoping_low_pass

 **Full name**: filter.scoping_low_pass

 **Internal name**: core::scoping::low_pass

 **License**: any_dpf_supported_increments


## Changelog

- Version 0.0.0: Initial release.