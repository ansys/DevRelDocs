---
category: result
plugin: core
license: any_dpf_supported_increments
---

# result:euler load buckling

**Version: 0.0.0**

## Description

Computing Euler's Critical Load. Formula: Ncr = n*E*I*pi*pi /(L*L) 

## Inputs

| Input | Name | Expected type(s) | Description |
|-------|-------|------------------|-------------|
| <strong>Pin 5</strong> <br><span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  field_beam_end_condition |[`data_sources`](../../core-concepts/dpf-types.md#data-sources), [`field`](../../core-concepts/dpf-types.md#field) | This pin contains file csv or field of beam's end condition added by the user. If there's no file added, it would take value of all beam's end condition as 1. |
| <strong>Pin 6</strong> <br><span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  field_beam_moment_inertia |[`field`](../../core-concepts/dpf-types.md#field) | Field of beam's moment inertia |
| <strong>Pin 7</strong> <br><span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  field_beam_young_modulus |[`field`](../../core-concepts/dpf-types.md#field) | Field of beam's young modulus |
| <strong>Pin 8</strong> <br><span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  field_beam_length |[`field`](../../core-concepts/dpf-types.md#field) | Field of beam's length |

## Outputs

| Output |  Name | Expected type(s) | Description |
|-------|------|------------------|-------------|
|  **Pin 0**| field_euler_critical_load |[`field`](../../core-concepts/dpf-types.md#field) | This field contains Euler's Critical Load about the principle axis of the cross section having the least moment of inertia. |
|  **Pin 1**| field_euler_critical_load_yy |[`field`](../../core-concepts/dpf-types.md#field) | This field contains Euler's Critical Load on axis y. |
|  **Pin 2**| field_euler_critical_load_zz |[`field`](../../core-concepts/dpf-types.md#field) | This field contains Euler's Critical Load on axis z. |

## Configurations

| Name| Expected type(s) | Default value | Description |
|-----|------|----------|-------------|
| **mutex** |[`bool`](../../core-concepts/dpf-types.md#standard-types) | false | If this option is set to true, the shared memory is prevented from being simultaneously accessed by multiple threads. |

## Scripting

 **Category**: result

 **Plugin**: core

 **Scripting name**: euler_load_buckling

 **Full name**: result.euler_load_buckling

 **Internal name**: euler_load_buckling

 **License**: any_dpf_supported_increments


## Changelog

- Version 0.0.0: Initial release.