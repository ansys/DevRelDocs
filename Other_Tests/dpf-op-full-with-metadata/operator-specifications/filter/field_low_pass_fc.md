---
category: filter
plugin: core
license: any_dpf_supported_increments
---

# filter:low pass (fields container)

## Description

The low pass filter returns all the values below (but not equal to) the threshold value in input.

### Plugin

core

## Inputs

| Input | Name | Expected type(s) | Description |
|-------|-------|------------------|-------------|
| <strong>Pin 0</strong> <br><span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  fields_container |[`fields_container`](../../getting-started/using-data-containers.md#fields-container) | field or fields container with only one field is expected |
| <strong>Pin 1</strong> <br><span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  threshold |[`double`](../../getting-started/using-data-containers.md#double), [`field`](../../getting-started/using-data-containers.md#field) | a threshold scalar or a field containing one value is expected |
| <strong>Pin 2</strong>|  both |[`bool`](../../getting-started/using-data-containers.md#bool) | The default is false. If set to true, the complement of the filtered fields container is returned on output pin 1. |


## Outputs

| Output |  Name | Expected type(s) | Description |
|-------|------|------------------|-------------|
| <strong>Pin 0</strong> <br><span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span> | fields_container |[`fields_container`](../../getting-started/using-data-containers.md#fields-container) |  |

## Configurations

| Name| Expected type(s) | Default value | Description |
|-----|------|----------|-------------|
| **mutex** |[`bool`](../../getting-started/using-data-containers.md#bool) | false | If this option is set to true, the shared memory is prevented from being simultaneously accessed by multiple threads. |

## Scripting

- Category: filter
- Plugin: core
- Scripting name: field_low_pass_fc
- Full name: filter.field_low_pass_fc
- Internal name: core::field::low_pass_fc
- License: any_dpf_supported_increments
  