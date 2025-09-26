---
category: averaging
plugin: core
license: any_dpf_supported_increments
---

# averaging:force_summation

**Version: 0.0.0**

## Description

Computes the sum of elemental forces contribution on a set of nodes in Global Coordinate System. Equivalent to MAPDL FSUM & NFORCE commands. Supports Static, Transient, Modal & Harmonic analysis for thermal and structural degrees of freedom.

## Inputs

| Input | Name | Expected type(s) | Description |
|-------|-------|------------------|-------------|
| <strong>Pin 0</strong>|  time_scoping |[`scoping`](../../core-concepts/dpf-types.md#scoping), [`vector<int32>`](../../core-concepts/dpf-types.md#standard-types) | default = all time steps |
| <strong>Pin 1</strong>|  nodal_scoping |[`scoping`](../../core-concepts/dpf-types.md#scoping) | Nodal Scoping. Set of nodes in which elemental contribution forces will be accumulated (default = all nodes) |
| <strong>Pin 2</strong>|  elemental_scoping |[`scoping`](../../core-concepts/dpf-types.md#scoping) | Elemental Scoping. Set of elements contributing to the force calcuation. (default = all elements) |
| <strong>Pin 3</strong>|  streams_container |[`streams_container`](../../core-concepts/dpf-types.md#streams-container) | Streams container. Optional if using data sources. |
| <strong>Pin 4</strong> <br><span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  data_sources |[`data_sources`](../../core-concepts/dpf-types.md#data-sources) | Data sources. Optional if using a streams container. |
| <strong>Pin 5</strong>|  force_type |[`int32`](../../core-concepts/dpf-types.md#standard-types) | Type of force to be processed (0 - default: Total forces (static, damping, and inertia)., 1: Static forces, 2: Damping forces, 3: Inertia forces) |
| <strong>Pin 6</strong>|  spoint |[`field`](../../core-concepts/dpf-types.md#field) | Coordinate field of a point for moment summations. Defaults to (0,0,0). |

## Outputs

| Output |  Name | Expected type(s) | Description |
|-------|------|------------------|-------------|
|  **Pin 0**| force_accumulation |[`fields_container`](../../core-concepts/dpf-types.md#fields-container) |  |
|  **Pin 1**| moment_accumulation |[`fields_container`](../../core-concepts/dpf-types.md#fields-container) |  |
|  **Pin 2**| heat_accumulation |[`fields_container`](../../core-concepts/dpf-types.md#fields-container) |  |
|  **Pin 10**| forces_on_nodes |[`fields_container`](../../core-concepts/dpf-types.md#fields-container) |  |
|  **Pin 11**| moments_on_nodes |[`fields_container`](../../core-concepts/dpf-types.md#fields-container) |  |
|  **Pin 12**| heats_on_nodes |[`fields_container`](../../core-concepts/dpf-types.md#fields-container) |  |

## Configurations

| Name| Expected type(s) | Default value | Description |
|-----|------|----------|-------------|
| **mutex** |[`bool`](../../core-concepts/dpf-types.md#standard-types) | false | If this option is set to true, the shared memory is prevented from being simultaneously accessed by multiple threads. |

## Scripting

 **Category**: averaging

 **Plugin**: core

 **Scripting name**: force_summation

 **Full name**: averaging.force_summation

 **Internal name**: force_summation

 **License**: any_dpf_supported_increments


## Changelog

- Version 0.0.0: Initial release.