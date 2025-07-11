---
category: averaging
plugin: core
license: None
---

# averaging:elemental to nodal (fields container)

**Version: 0.0.0**

## Description

Transforms Elemental Nodal fields to Nodal fields. The result is computed on a given node's scoping.1. For a finite element mesh, the value on a node is the average of the values of the neighbour elements.

2. For a finite volume mesh, the agorithm is :
   - For each node, compute interpolation weights for the cells connected to it based	on the Frink's Laplacian method.
	- If the determinant of the I matrix is zero, switch to an inverse distance weighted average.
	- If not, compute the Frink weights and apply the Holmes' weight clip.
	- If the clipping produces a large overshoot, inverse volume weighted average is used..
3. For a face finite volume mesh inverse distance weighted average is used.

## Inputs

| Input | Name | Expected type(s) | Description |
|-------|-------|------------------|-------------|
| <strong>Pin 0</strong> <br><span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  fields_container |[`fields_container`](../../core-concepts/dpf-types.md#fields-container) |  |
| <strong>Pin 1</strong>|  mesh |[`abstract_meshed_region`](../../core-concepts/dpf-types.md#meshed-region), [`meshes_container`](../../core-concepts/dpf-types.md#meshes-container) |  |
| <strong>Pin 2</strong>|  force_averaging |[`int32`](../../core-concepts/dpf-types.md#standard-types}}) | Averaging on nodes is used if this pin is set to 1 (default is 1 for integrated results and 0 for discrete ones). |
| <strong>Pin 3</strong>|  mesh_scoping |[`scoping`](../../core-concepts/dpf-types.md#scoping), [`scopings_container`](../../core-concepts/dpf-types.md#scopings-container) |  |
| <strong>Pin 200</strong>|  algorithm |[`int32`](../../core-concepts/dpf-types.md#standard-types}}) | Forces the usage of algorithm 1, 2 or 3 (default is chosen based on the type of mesh). |

## Outputs

| Output |  Name | Expected type(s) | Description |
|-------|------|------------------|-------------|
|  **Pin 0**| fields_container |[`fields_container`](../../core-concepts/dpf-types.md#fields-container) |  |

## Configurations

| Name| Expected type(s) | Default value | Description |
|-----|------|----------|-------------|
| **mutex** |[`bool`](../../core-concepts/dpf-types.md#standard-types}}) | false | If this option is set to true, the shared memory is prevented from being simultaneously accessed by multiple threads. |
| **num_threads** |[`int32`](../../core-concepts/dpf-types.md#standard-types}}) | 0 | Number of threads to use to run in parallel |
| **run_in_parallel** |[`bool`](../../core-concepts/dpf-types.md#standard-types}}) | true | Loops are allowed to run in parallel if the value of this config is set to true. |

## Scripting

 **Category**: averaging

 **Plugin**: core

 **Scripting name**: None

 **Full name**: None

 **Internal name**: elemental_to_nodal_fc

 **License**: None


## Changelog

- Version 0.0.0: Initial release.