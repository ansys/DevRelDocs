---
category: result
plugin: core
license: any_dpf_supported_increments
---

# result:euler load buckling

## Description

Computing Euler's Critical Load. Formula: Ncr = n*E*I*pi*pi /(L*L) 

### Plugin

core

## Inputs

| Input | Name | Expected type(s) | Description |
|-------|-------|------------------|-------------|
| <strong>Pin 5</strong> <span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  field_beam_end_condition |[`data_sources`](../../getting-started/using-data-containers.md#data-sources), [`field`](../../getting-started/using-data-containers.md#field) | This pin contains file csv or field of beam's end condition added by the user. If there's no file added, it would take value of all beam's end condition as 1. |
| <strong>Pin 6</strong> <span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  field_beam_moment_inertia |[`field`](../../getting-started/using-data-containers.md#field) | Field of beam's moment inertia |
| <strong>Pin 7</strong> <span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  field_beam_young_modulus |[`field`](../../getting-started/using-data-containers.md#field) | Field of beam's young modulus |
| <strong>Pin 8</strong> <span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  field_beam_length |[`field`](../../getting-started/using-data-containers.md#field) | Field of beam's length |


## Outputs

| Output |  Name | Expected type(s) | Description |
|-------|------|------------------|-------------|
| <strong>Pin 0</strong> <span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span> | field_euler_critical_load |[`field`](../../getting-started/using-data-containers.md#field) | This field contains Euler's Critical Load about the principle axis of the cross section having the least moment of inertia. |
| <strong>Pin 1</strong> <span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span> | field_euler_critical_load_yy |[`field`](../../getting-started/using-data-containers.md#field) | This field contains Euler's Critical Load on axis y. |
| <strong>Pin 2</strong> <span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span> | field_euler_critical_load_zz |[`field`](../../getting-started/using-data-containers.md#field) | This field contains Euler's Critical Load on axis z. |

## Configurations

| Name| Expected type(s) | Default value | Description |
|-----|------|----------|-------------|
| **mutex** |[`bool`](../../getting-started/using-data-containers.md#bool) | false | If this option is set to true, the shared memory is prevented from being simultaneously accessed by multiple threads. |

## Scripting

- Category: result
- Plugin: core
- Scripting name: euler_load_buckling
- Full name: result.euler_load_buckling
- Internal name: euler_load_buckling
- License: any_dpf_supported_increments
  