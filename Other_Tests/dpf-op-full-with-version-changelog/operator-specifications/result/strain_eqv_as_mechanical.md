---
category: result
plugin: mechanical_results
license: None
Version: 0.0.0
---

# result:von mises strains as mechanical

## Version

0.0.0

## Changelog

- Version 0.0.0: Initial release.

## Description

Computes the equivalent (Von Mises) elastic strains and averages it to the nodes (by default). For multibody simulations, averaging across bodies can either be activated or deactivated.


## Inputs

| Input | Name | Expected type(s) | Description |
|-------|-------|------------------|-------------|
| <strong>Pin 0</strong>|  time_scoping |[`scoping`](../../getting-started/using-data-containers.md#scoping), [`vector<int32>`](../../getting-started/using-data-containers.md#vector<int32>) | time/freq (use doubles or field), time/freq set ids (use ints or scoping) or time/freq step ids use scoping with TimeFreq_steps location) required in output. |
| <strong>Pin 1</strong>|  mesh_scoping |[`scoping`](../../getting-started/using-data-containers.md#scoping), [`scopings_container`](../../getting-started/using-data-containers.md#scopings-container) | nodes or elements scoping required in output. |
| <strong>Pin 3</strong>|  streams_container |[`streams_container`](../../getting-started/using-data-containers.md#streams-container) | result file container allowed to be kept open to cache data. |
| <strong>Pin 4</strong> <br><span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  data_sources |[`data_sources`](../../getting-started/using-data-containers.md#data-sources) | result file path container. |
| <strong>Pin 7</strong>|  mesh |[`abstract_meshed_region`](../../getting-started/using-data-containers.md#abstract-meshed-region), [`meshes_container`](../../getting-started/using-data-containers.md#meshes-container) | prevents from reading the mesh in the results file. |
| <strong>Pin 9</strong>|  requested_location |[`string`](../../getting-started/using-data-containers.md#string) | average the elemental nodal result to the requested location (default is nodal). |
| <strong>Pin 13</strong>|  poisson_ratio |[`int32`](../../getting-started/using-data-containers.md#int32), [`double`](../../getting-started/using-data-containers.md#double) | Poisson ratio to be used in equivalent strain calculation. |
| <strong>Pin 14</strong>|  read_cyclic |[`bool`](../../getting-started/using-data-containers.md#bool) | if true, cyclic expansion is done. If false, it's ignored. |
| <strong>Pin 200</strong>|  average_across_bodies |[`bool`](../../getting-started/using-data-containers.md#bool) | for multibody simulations, the stresses are averaged across bodies if true or not if false (default). |


## Outputs

| Output |  Name | Expected type(s) | Description |
|-------|------|------------------|-------------|
|  **Pin 0**| fields_container |[`fields_container`](../../getting-started/using-data-containers.md#fields-container) |  |
|  **Pin 1**| meshes_container |[`meshes_container`](../../getting-started/using-data-containers.md#meshes-container) |  |

## Configurations

| Name| Expected type(s) | Default value | Description |
|-----|------|----------|-------------|
| **mutex** |[`bool`](../../getting-started/using-data-containers.md#bool) | false | If this option is set to true, the shared memory is prevented from being simultaneously accessed by multiple threads. |

## Scripting

 **Category**: result

 **Plugin**: mechanical_results

 **Scripting name**: None

 **Full name**: None

 **Internal name**: strain_eqv_as_mechanical

 **License**: None
 
