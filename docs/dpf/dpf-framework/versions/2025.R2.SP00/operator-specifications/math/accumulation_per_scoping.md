---
category: math
plugin: core
license: any_dpf_supported_increments
---

# math:accumulation per scoping

**Version: 0.0.0**

## Description

This operator calculates the sum and the percentage of total sum of the input fields container for each scoping of the scopings container.

## Inputs

| Input | Name | Expected type(s) | Description |
|-------|-------|------------------|-------------|
| <strong>Pin 0</strong> <br><span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  fields_container |[`fields_container`](../../core-concepts/dpf-types.md#fields-container) |  |
| <strong>Pin 1</strong>|  mesh_scoping |[`scoping`](../../core-concepts/dpf-types.md#scoping) | Master scoping. All scopings in the Scopings Container will be intersected with this scoping. |
| <strong>Pin 4</strong> <br><span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  data_sources |[`data_sources`](../../core-concepts/dpf-types.md#data-sources) |  |
| <strong>Pin 5</strong> <br><span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  scopings_container |[`scopings_container`](../../core-concepts/dpf-types.md#scopings-container) | The intersection between the of the first will be used. |

## Outputs

| Output |  Name | Expected type(s) | Description |
|-------|------|------------------|-------------|
|  **Pin 0**| accumulation_per_scoping |[`fields_container`](../../core-concepts/dpf-types.md#fields-container) |  |
|  **Pin 1**| accumulation_per_scoping_percentage |[`fields_container`](../../core-concepts/dpf-types.md#fields-container) |  |

## Configurations

| Name| Expected type(s) | Default value | Description |
|-----|------|----------|-------------|
| **mutex** |[`bool`](../../core-concepts/dpf-types.md#standard-types) | false | If this option is set to true, the shared memory is prevented from being simultaneously accessed by multiple threads. |

## Scripting

 **Category**: math

 **Plugin**: core

 **Scripting name**: accumulation_per_scoping

 **Full name**: math.accumulation_per_scoping

 **Internal name**: accumulation_per_scoping

 **License**: any_dpf_supported_increments


## Changelog

- Version 0.0.0: Initial release.