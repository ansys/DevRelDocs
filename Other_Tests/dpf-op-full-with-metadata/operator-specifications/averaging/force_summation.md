---
category: averaging
plugin: core
license: any_dpf_supported_increments
---

# averaging:force_summation

## Description

Computes the sum of elemental forces contribution on a set of nodes in Global Coordinate System. Equivalent to MAPDL FSUM & NFORCE commands. Supports Static, Transient, Modal & Harmonic analysis for thermal and structural degrees of freedom.

### Plugin

core

## Inputs

| Input | Name | Expected type(s) | Description |
|-------|-------|------------------|-------------|
| <strong>Pin 0</strong>|  time_scoping |[`scoping`](../../getting-started/using-data-containers.md#scoping) | default = all time steps |
| <strong>Pin 1</strong>|  nodal_scoping |[`scoping`](../../getting-started/using-data-containers.md#scoping) | Nodal Scoping. Set of nodes in which elemental contribution forces will be accumulated (default = all nodes) |
| <strong>Pin 2</strong>|  elemental_scoping |[`scoping`](../../getting-started/using-data-containers.md#scoping) | Elemental Scoping. Set of elements contributing to the force calcuation. (default = all elements) |
| <strong>Pin 4</strong> <span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  data_sources |[`data_sources`](../../getting-started/using-data-containers.md#data-sources) |  |
| <strong>Pin 5</strong>|  force_type |[`int32`](../../getting-started/using-data-containers.md#int32) | Type of force to be processed (0 - default: Total forces (static, damping, and inertia)., 1: Static forces, 2: Damping forces, 3: Inertia forces) |
| <strong>Pin 6</strong>|  spoint |[`field`](../../getting-started/using-data-containers.md#field) | Coordinate field of a point for moment summations. Defaults to (0,0,0). |


## Outputs

| Output |  Name | Expected type(s) | Description |
|-------|------|------------------|-------------|
| <strong>Pin 0</strong> <span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span> | force_accumulation |[`fields_container`](../../getting-started/using-data-containers.md#fields-container) |  |
| <strong>Pin 1</strong> <span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span> | moment_accumulation |[`fields_container`](../../getting-started/using-data-containers.md#fields-container) |  |
| <strong>Pin 2</strong> <span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span> | heat_accumulation |[`fields_container`](../../getting-started/using-data-containers.md#fields-container) |  |
| <strong>Pin 10</strong> <span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span> | forces_on_nodes |[`fields_container`](../../getting-started/using-data-containers.md#fields-container) |  |
| <strong>Pin 11</strong> <span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span> | moments_on_nodes |[`fields_container`](../../getting-started/using-data-containers.md#fields-container) |  |
| <strong>Pin 12</strong> <span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span> | heats_on_nodes |[`fields_container`](../../getting-started/using-data-containers.md#fields-container) |  |

## Configurations

| Name| Expected type(s) | Default value | Description |
|-----|------|----------|-------------|
| **mutex** |[`bool`](../../getting-started/using-data-containers.md#bool) | false | If this option is set to true, the shared memory is prevented from being simultaneously accessed by multiple threads. |

## Scripting

- Category: averaging
- Plugin: core
- Scripting name: force_summation
- Full name: averaging.force_summation
- Internal name: force_summation
- License: any_dpf_supported_increments
  