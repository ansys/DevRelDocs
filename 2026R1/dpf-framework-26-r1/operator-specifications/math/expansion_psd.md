---
category: math
plugin: core
license: any_dpf_supported_increments
---

# math:expansion psd

**Version: 0.0.0**

## Description

Computes the PSD response for one-sigma solution.

## Inputs

| Input | Name | Expected type(s) | Description |
|-------|-------|------------------|-------------|
| <strong>Pin 0</strong> <br><span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  mode_shapes |[`fields_container`](../../core-concepts/dpf-types.md#fields-container) | Fields container containing the mode shapes from modal analysis file: mode shapes for dynamic and pseudo-static displacements |
| <strong>Pin 1</strong>|  static_shapes |[`fields_container`](../../core-concepts/dpf-types.md#fields-container) | Fields container containing the static shapes (base excitations) from spectral analysis file |
| <strong>Pin 2</strong> <br><span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  rel_rel_covar_matrix |[`fields_container`](../../core-concepts/dpf-types.md#fields-container) | Fields container containing covariance matrices from a psd file: covariance matrix terms for displacement/velocity/acceleration mode-mode shapes  |
| <strong>Pin 3</strong>|  stat_stat_covar_matrix |[`fields_container`](../../core-concepts/dpf-types.md#fields-container) | Fields container containing covariance matrices from a psd file: covariance matrix terms for displacement/velocity/acceleration static-static shapes  |
| <strong>Pin 4</strong>|  rel_stat_covar_matrix |[`fields_container`](../../core-concepts/dpf-types.md#fields-container) | Fields container containing covariance matrices from a psd file: covariance matrix terms for displacement/velocity/acceleration mode-static shapes  |

## Outputs

| Output |  Name | Expected type(s) | Description |
|-------|------|------------------|-------------|
|  **Pin 0**| psd |[`fields_container`](../../core-concepts/dpf-types.md#fields-container) | PSD solution per label |

## Configurations

| Name| Expected type(s) | Default value | Description |
|-----|------|----------|-------------|
| **mutex** |[`bool`](../../core-concepts/dpf-types.md#standard-types) | false | If this option is set to true, the shared memory is prevented from being simultaneously accessed by multiple threads. |
| **num_threads** |[`int32`](../../core-concepts/dpf-types.md#standard-types) | 0 | Number of threads to use to run in parallel |
| **run_in_parallel** |[`bool`](../../core-concepts/dpf-types.md#standard-types) | true | Loops are allowed to run in parallel if the value of this config is set to true. |

## Scripting

 **Category**: math

 **Plugin**: core

 **Scripting name**: expansion_psd

 **Full name**: math.expansion_psd

 **Internal name**: expansion::psd

 **License**: any_dpf_supported_increments


## Changelog

- Version 0.0.0: Initial release.