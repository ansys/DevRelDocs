---
category: result
plugin: core
license: any_dpf_supported_increments
---

# result:members in linear compression bending not certified

**Version: 0.0.0**

## Description

This operator is a non-certified example of buckling resistance verification for the compression and bending members for Class I, 2 and 3 cross-sections. It is only provided as an example if you want to develop your own compute norm operator. This norm is linear summation of the utilization ratios of compression members and bending members. The results computed by this beta operator have not been certified by ANSYS. ANSYS declines all responsibility for the use of this operator.

## Inputs

| Input | Name | Expected type(s) | Description |
|-------|-------|------------------|-------------|
| <strong>Pin 0</strong>|  time_scoping |[`scoping`](../../core-concepts/dpf-types.md#scoping), [`vector<int32>`](../../core-concepts/dpf-types.md#standard-types), [`int32`](../../core-concepts/dpf-types.md#standard-types) |  |
| <strong>Pin 1</strong> <br><span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  field_yield_strength |[`field`](../../core-concepts/dpf-types.md#field) | This pin contains field of beam's Yield Strength defined by the user. |
| <strong>Pin 2</strong>|  field_end_condition |[`data_sources`](../../core-concepts/dpf-types.md#data-sources), [`field`](../../core-concepts/dpf-types.md#field) | This pin contains file csv or field of beam's end condition defined by the user. If no input at this pin found, it would take end conditions value of all beams as 1 |
| <strong>Pin 3</strong>|  streams |[`streams_container`](../../core-concepts/dpf-types.md#streams-container) |  result file container allowed to be kept open to cache data. |
| <strong>Pin 4</strong>|  data_sources |[`data_sources`](../../core-concepts/dpf-types.md#data-sources) | result file path container, used if no streams are set. |
| <strong>Pin 5</strong>|  manufacture |[`bool`](../../core-concepts/dpf-types.md#standard-types) | Manufacturing processus:hot finished if TRUE or cold formed if FALSE. Default value : hot finished. |
| <strong>Pin 6</strong>|  partial_factor |[`double`](../../core-concepts/dpf-types.md#standard-types) | partial factor for resistance of members to instability assessed by member checks. Default value: 1.0 |
| <strong>Pin 7</strong> <br><span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  mesh |[`abstract_meshed_region`](../../core-concepts/dpf-types.md#meshed-region) |  Mesh containing beam's properties defined by user |
| <strong>Pin 8</strong> <br><span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  bending_moment_y |[`fields_container`](../../core-concepts/dpf-types.md#fields-container) | Fields Container of bending moment on axis y defined by user |
| <strong>Pin 9</strong> <br><span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  bending_moment_z |[`fields_container`](../../core-concepts/dpf-types.md#fields-container) | Fields Container of bending moment on axis z defined by user |
| <strong>Pin 10</strong> <br><span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  axial_force |[`fields_container`](../../core-concepts/dpf-types.md#fields-container) | Fields Container of axial force defined by user |
| <strong>Pin 11</strong> <br><span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  class_cross_section |[`bool`](../../core-concepts/dpf-types.md#standard-types) | Selection for a cross-section. True: Class 1 or 2 cross-sections. False: Class 3 cross section. If the user defines the cross section as class 1 or 2, the section modulus would be plastic section modulus. If it's class 3- cross section,the section modulus would be elastic section modulus |
| <strong>Pin 12</strong>|  fabrication_type |[`bool`](../../core-concepts/dpf-types.md#standard-types) | Selection of fabrication's type if there are beams I in the structure. TRUE: Rolled Section, False: Welded Section. Default: Rolled Section. |

## Outputs

| Output |  Name | Expected type(s) | Description |
|-------|------|------------------|-------------|
|  **Pin 0**| buckling_resistance_linear_summation_utilization_ratios |[`fields_container`](../../core-concepts/dpf-types.md#fields-container) | Linear summation of the utilization ratios in all members submitted under a combination of both bending and compression. These factors should be less than 1 and positive. |

## Configurations

| Name| Expected type(s) | Default value | Description |
|-----|------|----------|-------------|
| **mutex** |[`bool`](../../core-concepts/dpf-types.md#standard-types) | false | If this option is set to true, the shared memory is prevented from being simultaneously accessed by multiple threads. |

## Scripting

 **Category**: result

 **Plugin**: core

 **Scripting name**: members_in_linear_compression_bending_not_certified

 **Full name**: result.members_in_linear_compression_bending_not_certified

 **Internal name**: members_in_linear_compression_bending_not_certified

 **License**: any_dpf_supported_increments


## Changelog

- Version 0.0.0: Initial release.