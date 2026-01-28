---
category: result
plugin: mechanical_results
license: None
---

# result:von mises strains as mechanical workflow

**Version: 0.0.0**

## Description

Generates a workflow that computes the equivalent (Von Mises) elastic strains and averages it to the nodes (by default). For multibody simulations, averaging across bodies can either be activated or deactivated.

## Inputs

| Input | Name | Expected type(s) | Description |
|-------|-------|------------------|-------------|
| <strong>Pin 0</strong>|  time_scoping |[`scoping`](../../core-concepts/dpf-types.md#scoping), [`vector<int32>`](../../core-concepts/dpf-types.md#standard-types) | time/freq (use doubles or field), time/freq set ids (use ints or scoping) or time/freq step ids use scoping with TimeFreq_steps location) required in output. |
| <strong>Pin 1</strong>|  mesh_scoping |[`scoping`](../../core-concepts/dpf-types.md#scoping), [`scopings_container`](../../core-concepts/dpf-types.md#scopings-container) | nodes or elements scoping required in output. |
| <strong>Pin 3</strong>|  streams_container |[`streams_container`](../../core-concepts/dpf-types.md#streams-container) | result file container allowed to be kept open to cache data. |
| <strong>Pin 4</strong> <br><span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  data_sources |[`data_sources`](../../core-concepts/dpf-types.md#data-sources) | result file path container. |
| <strong>Pin 7</strong>|  mesh |[`abstract_meshed_region`](../../core-concepts/dpf-types.md#meshed-region), [`meshes_container`](../../core-concepts/dpf-types.md#meshes-container) | prevents from reading the mesh in the results file. |
| <strong>Pin 9</strong>|  requested_location |[`string`](../../core-concepts/dpf-types.md#standard-types) | average the elemental nodal result to the requested location (default is nodal). |
| <strong>Pin 14</strong>|  read_cyclic |[`bool`](../../core-concepts/dpf-types.md#standard-types) | if true, cyclic expansion is done. If false, it's ignored.. |
| <strong>Pin 200</strong>|  average_across_bodies |[`bool`](../../core-concepts/dpf-types.md#standard-types) | for multibody simulations, the stresses are averaged across bodies if true or not if false (default). |

## Outputs

| Output |  Name | Expected type(s) | Description |
|-------|------|------------------|-------------|
|  **Pin 0**| workflow |[`workflow`](../../core-concepts/dpf-types.md#workflow) |  |

## Configurations

| Name| Expected type(s) | Default value | Description |
|-----|------|----------|-------------|
| **mutex** |[`bool`](../../core-concepts/dpf-types.md#standard-types) | false | If this option is set to true, the shared memory is prevented from being simultaneously accessed by multiple threads. |

## Scripting

 **Category**: result

 **Plugin**: mechanical_results

 **Scripting name**: None

 **Full name**: None

 **Internal name**: strain_eqv_as_mechanical_workflow

 **License**: None


## Changelog

- Version 0.0.0: Initial release.