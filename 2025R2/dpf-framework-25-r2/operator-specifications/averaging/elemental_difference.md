---
category: averaging
plugin: core
license: any_dpf_supported_increments
---

# averaging:elemental difference (field)

**Version: 0.0.0**

## Description

Transforms an Elemental Nodal or Nodal field into an Elemental field. Each elemental value is the maximum difference between the computed result for all nodes in this element. The result is computed on a given element scoping.

## Inputs

| Input | Name | Expected type(s) | Description |
|-------|-------|------------------|-------------|
| <strong>Pin 0</strong> <br><span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  field |[`field`](../../core-concepts/dpf-types.md#field), [`fields_container`](../../core-concepts/dpf-types.md#fields-container) | field or fields container with only one field is expected |
| <strong>Pin 1</strong>|  mesh_scoping |[`scoping`](../../core-concepts/dpf-types.md#scoping) | average only on these entities |
| <strong>Pin 7</strong>|  mesh |[`abstract_meshed_region`](../../core-concepts/dpf-types.md#meshed-region) |  |
| <strong>Pin 10</strong>|  through_layers |[`bool`](../../core-concepts/dpf-types.md#standard-types}}) | The maximum elemental difference is taken through the different shell layers if true (default is false). |

## Outputs

| Output |  Name | Expected type(s) | Description |
|-------|------|------------------|-------------|
|  **Pin 0**| field |[`field`](../../core-concepts/dpf-types.md#field) |  |

## Configurations

| Name| Expected type(s) | Default value | Description |
|-----|------|----------|-------------|
| **mutex** |[`bool`](../../core-concepts/dpf-types.md#standard-types}}) | false | If this option is set to true, the shared memory is prevented from being simultaneously accessed by multiple threads. |

## Scripting

 **Category**: averaging

 **Plugin**: core

 **Scripting name**: elemental_difference

 **Full name**: averaging.elemental_difference

 **Internal name**: elemental_difference

 **License**: any_dpf_supported_increments


## Changelog

- Version 0.0.0: Initial release.