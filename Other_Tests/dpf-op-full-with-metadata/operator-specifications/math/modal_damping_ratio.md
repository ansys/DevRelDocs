---
category: math
plugin: core
license: any_dpf_supported_increments
---

# math:modal damping ratio

## Description

Computes damping ratio for each mode shape as X_i = const + ratio_i + m_coefficient / (2*omega_i) + k_coefficient * omega_i/2.

### Plugin

core

## Inputs

| Input | Name | Expected type(s) | Description |
|-------|-------|------------------|-------------|
| <strong>Pin 0</strong> <span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  natural_freq |[`vector<double>`](../../getting-started/using-data-containers.md#vector<double>) | input vector expects natural frequencies. |
| <strong>Pin 1</strong>|  const_ratio |[`double`](../../getting-started/using-data-containers.md#double) | constant modal damping ratio |
| <strong>Pin 2</strong>|  ratio_by_modes |[`vector<double>`](../../getting-started/using-data-containers.md#vector<double>) | modal damping ratio for each mode shape |
| <strong>Pin 3</strong> <span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  m_coefficient |[`double`](../../getting-started/using-data-containers.md#double) | global mass matrix multiplier |
| <strong>Pin 4</strong> <span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  k_coefficient |[`double`](../../getting-started/using-data-containers.md#double) | global stiffness matrix multiplier |


## Outputs

| Output |  Name | Expected type(s) | Description |
|-------|------|------------------|-------------|
| <strong>Pin 0</strong> <span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span> | field |[`field`](../../getting-started/using-data-containers.md#field) | field of modal damping ratio. |

## Configurations

| Name| Expected type(s) | Default value | Description |
|-----|------|----------|-------------|
| **mutex** |[`bool`](../../getting-started/using-data-containers.md#bool) | false | If this option is set to true, the shared memory is prevented from being simultaneously accessed by multiple threads. |

## Scripting

- Category: math
- Plugin: core
- Scripting name: modal_damping_ratio
- Full name: math.modal_damping_ratio
- Internal name: modal_damping_ratio
- License: any_dpf_supported_increments
  