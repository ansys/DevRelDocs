---
category: filter
plugin: core
license: any_dpf_supported_increments
---

# filter:high pass (scoping)

## Description

The high pass filter returns all the values above (but not equal to) the threshold value in input.

### Plugin

core

## Inputs

| Input | Name | Expected type(s) | Description |
|-------|-------|------------------|-------------|
| <strong>Pin 0</strong> <br><span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  field |[`field`](../../getting-started/using-data-containers.md#field), [`fields_container`](../../getting-started/using-data-containers.md#fields-container) | field or fields container with only one field is expected |
| <strong>Pin 1</strong> <br><span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  threshold |[`double`](../../getting-started/using-data-containers.md#double), [`field`](../../getting-started/using-data-containers.md#field) | A threshold scalar or a field containing one value is expected. |
| <strong>Pin 2</strong>|  both |[`bool`](../../getting-started/using-data-containers.md#bool) | The default is false. If set to true, the complement of the filtered fields container is returned on output pin 1. |


## Outputs

| Output |  Name | Expected type(s) | Description |
|-------|------|------------------|-------------|
| <strong>Pin 0</strong> <br><span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span> | scoping |[`scoping`](../../getting-started/using-data-containers.md#scoping) |  |

## Configurations

| Name| Expected type(s) | Default value | Description |
|-----|------|----------|-------------|
| **mutex** |[`bool`](../../getting-started/using-data-containers.md#bool) | false | If this option is set to true, the shared memory is prevented from being simultaneously accessed by multiple threads. |

## Scripting

- Category: filter
- Plugin: core
- Scripting name: scoping_high_pass
- Full name: filter.scoping_high_pass
- Internal name: core::scoping::high_pass
- License: any_dpf_supported_increments
  