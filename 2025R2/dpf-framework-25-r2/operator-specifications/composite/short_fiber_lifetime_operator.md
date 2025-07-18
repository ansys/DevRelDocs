---
category: composite
plugin: composite
license: None
---

# composite:short_fiber_lifetime_operator

**Version: 0.0.0**

## Description

Lifetime evaluation for short fiber composites.

## Inputs

| Input | Name | Expected type(s) | Description |
|-------|-------|------------------|-------------|
| <strong>Pin 0</strong>|  time_scoping |[`scoping`](../../core-concepts/dpf-types.md#scoping), [`vector<int32>`](../../core-concepts/dpf-types.md#standard-types) | Time Scoping |
| <strong>Pin 1</strong>|  mesh_scoping |[`scoping`](../../core-concepts/dpf-types.md#scoping) | Mesh Scoping |
| <strong>Pin 3</strong>|  streams_container |[`streams_container`](../../core-concepts/dpf-types.md#streams-container) | Optional: RST File stream. |
| <strong>Pin 4</strong> <br><span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  data_sources |[`data_sources`](../../core-concepts/dpf-types.md#data-sources) | Input files: APDL ds.dat, APDL RST file, Engineering Data MatML file. |
| <strong>Pin 5</strong> <br><span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  rainflow_matrix |[`field`](../../core-concepts/dpf-types.md#field) | Rainflow matrix |

## Outputs

| Output |  Name | Expected type(s) | Description |
|-------|------|------------------|-------------|
|  **Pin 0**| fields_container |[`fields_container`](../../core-concepts/dpf-types.md#fields-container) | A CFieldsContainer of CFields with the lifetime under the label is_life=1                     and damage under the label is_life=0. |

## Configurations

| Name| Expected type(s) | Default value | Description |
|-----|------|----------|-------------|
| **mutex** |[`bool`](../../core-concepts/dpf-types.md#standard-types) | false | If this option is set to true, the shared memory is prevented from being simultaneously accessed by multiple threads. |

## Scripting

 **Category**: composite

 **Plugin**: composite

 **Scripting name**: short_fiber_lifetime_operator

 **Full name**: composite.short_fiber_lifetime_operator

 **Internal name**: composite::short_fiber_fatigue_evaluator

 **License**: None


## Changelog

- Version 0.0.0: Initial release.