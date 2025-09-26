---
category: averaging
plugin: core
license: any_dpf_supported_increments
---

# averaging:nodal fraction (fields container)

**Version: 0.0.0**

## Description

Transforms Elemental Nodal fields into Nodal fields. Each nodal value is the fraction between the nodal difference and the nodal average. The result is computed on a given node's scoping.

## Inputs

| Input | Name | Expected type(s) | Description |
|-------|-------|------------------|-------------|
| <strong>Pin 0</strong> <br><span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  fields_container |[`fields_container`](../../core-concepts/dpf-types.md#fields-container) |  |
| <strong>Pin 1</strong>|  mesh |[`abstract_meshed_region`](../../core-concepts/dpf-types.md#meshed-region) | The mesh region in this pin is used to perform the averaging. It is used if there is no fields support. |
| <strong>Pin 3</strong>|  scoping |[`scoping`](../../core-concepts/dpf-types.md#scoping) | Average only on these nodes. If it is a scoping container, the label must correspond to the one of the fields containers. |
| <strong>Pin 6</strong>|  denominator |[`fields_container`](../../core-concepts/dpf-types.md#fields-container) | If a fields container is set in this pin, it is used as the denominator of the fraction instead of elemental_nodal_To_nodal_fc. |

## Outputs

| Output |  Name | Expected type(s) | Description |
|-------|------|------------------|-------------|
|  **Pin 0**| fields_container |[`fields_container`](../../core-concepts/dpf-types.md#fields-container) |  |

## Configurations

| Name| Expected type(s) | Default value | Description |
|-----|------|----------|-------------|
| **mutex** |[`bool`](../../core-concepts/dpf-types.md#standard-types) | false | If this option is set to true, the shared memory is prevented from being simultaneously accessed by multiple threads. |
| **num_threads** |[`int32`](../../core-concepts/dpf-types.md#standard-types) | 0 | Number of threads to use to run in parallel |
| **run_in_parallel** |[`bool`](../../core-concepts/dpf-types.md#standard-types) | true | Loops are allowed to run in parallel if the value of this config is set to true. |

## Scripting

 **Category**: averaging

 **Plugin**: core

 **Scripting name**: nodal_fraction_fc

 **Full name**: averaging.nodal_fraction_fc

 **Internal name**: nodal_fraction_fc

 **License**: any_dpf_supported_increments


## Changelog

- Version 0.0.0: Initial release.