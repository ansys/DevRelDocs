---
category: composite
plugin: composite
license: None
---

# composite:short_fiber_failure_criterion_evaluator

**Version: 0.0.0**

## Description

Evaluates failure criteria for short fiber composites.

## Inputs

| Input | Name | Expected type(s) | Description |
|-------|-------|------------------|-------------|
| <strong>Pin 0</strong>|  time_scoping |[`scoping`](../../core-concepts/dpf-types.md#scoping), [`vector<int32>`](../../core-concepts/dpf-types.md#standard-types) | Time Scoping |
| <strong>Pin 1</strong>|  mesh_scoping |[`scoping`](../../core-concepts/dpf-types.md#scoping) | Mesh Scoping |
| <strong>Pin 2</strong>|  stress_limit_type |[`string`](../../core-concepts/dpf-types.md#standard-types) | Whether to use 'ultimate' or 'yield' strengths. Default is 'ultimate'. |
| <strong>Pin 3</strong>|  streams_container |[`streams_container`](../../core-concepts/dpf-types.md#streams-container) | Optional: RST File stream. |
| <strong>Pin 4</strong> <br><span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  data_sources |[`data_sources`](../../core-concepts/dpf-types.md#data-sources) | Input files: APDL ds.dat, APDL RST file, Engineering Data MatML file. |

## Outputs

| Output |  Name | Expected type(s) | Description |
|-------|------|------------------|-------------|
|  **Pin 0**| fields_container |[`fields_container`](../../core-concepts/dpf-types.md#fields-container) | A CFieldsContainer of CFields with the failure value results under the label is_failure_value = 1 						and failure modes under the label is_failure_value = 0 						from a specific failure criterion operator. |
|  **Pin 1**| materials_container |`materials_container` | Materials container enriched with field variables and temperature. |

## Configurations

| Name| Expected type(s) | Default value | Description |
|-----|------|----------|-------------|
| **mutex** |[`bool`](../../core-concepts/dpf-types.md#standard-types) | false | If this option is set to true, the shared memory is prevented from being simultaneously accessed by multiple threads. |

## Scripting

 **Category**: composite

 **Plugin**: composite

 **Scripting name**: short_fiber_failure_criterion_evaluator

 **Full name**: composite.short_fiber_failure_criterion_evaluator

 **Internal name**: composite::short_fiber_failure_criterion_evaluator

 **License**: None


## Changelog

- Version 0.0.0: Initial release.