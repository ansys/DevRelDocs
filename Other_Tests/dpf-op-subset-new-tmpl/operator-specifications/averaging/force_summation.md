# averaging:force_summation

## Description

Computes the sum of elemental forces contribution on a set of nodes in Global Coordinate System. Equivalent to MAPDL FSUM & NFORCE commands. Supports Static, Transient, Modal & Harmonic analysis for thermal and structural degrees of freedom.

## Inputs


| Input | Name| Expected type(s) | Required | Description |
|-------|-----|------|----------|-------------|
| **Pin 0** | time_scoping |[`scoping`](../../getting-started/using-data-containers.md#scoping) | No | default = all time steps |
| **Pin 1** | nodal_scoping |[`scoping`](../../getting-started/using-data-containers.md#scoping) | No | Nodal Scoping. Set of nodes in which elemental contribution forces will be accumulated (default = all nodes) |
| **Pin 2** | elemental_scoping |[`scoping`](../../getting-started/using-data-containers.md#scoping) | No | Elemental Scoping. Set of elements contributing to the force calcuation. (default = all elements) |
| **Pin 4** | data_sources |[`data_sources`](../../getting-started/using-data-containers.md#data-sources) | Yes |  |
| **Pin 5** | force_type |[`int32`](../../getting-started/using-data-containers.md#int32) | No | Type of force to be processed (0 - default: Total forces (static, damping, and inertia)., 1: Static forces, 2: Damping forces, 3: Inertia forces) |
| **Pin 6** | spoint |[`field`](../../getting-started/using-data-containers.md#field) | No | Coordinate field of a point for moment summations. Defaults to (0,0,0). |

## Outputs

| Input | Name| Expected type(s) | Required | Description |
|-------|-----|------|----------|-------------|
| **Pin 0** | force_accumulation |[`fields_container`](../../getting-started/using-data-containers.md#fields-container) | Yes |  |
| **Pin 1** | moment_accumulation |[`fields_container`](../../getting-started/using-data-containers.md#fields-container) | Yes |  |
| **Pin 2** | heat_accumulation |[`fields_container`](../../getting-started/using-data-containers.md#fields-container) | Yes |  |
| **Pin 10** | forces_on_nodes |[`fields_container`](../../getting-started/using-data-containers.md#fields-container) | Yes |  |
| **Pin 11** | moments_on_nodes |[`fields_container`](../../getting-started/using-data-containers.md#fields-container) | Yes |  |
| **Pin 12** | heats_on_nodes |[`fields_container`](../../getting-started/using-data-containers.md#fields-container) | Yes |  |

## Configurations

| Name| Expected type(s) | Default value | Description |
|-----|------|----------|-------------|
| **Pin mutex** |[`bool`](../../getting-started/using-data-containers.md#bool) | false | If this option is set to true, the shared memory is prevented from being simultaneously accessed by multiple threads. |

## Scripting

| Category| Plugin | Scripting name | Full name | Internal name | License |
|---------|--------|----------------|-----------|---------------|---------|
| **averaging** | core | force_summation | averaging.force_summation | force_summation | any_dpf_supported_increments |
