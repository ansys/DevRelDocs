---
category: result
plugin: mapdl
license: None
---

# result:spectrum data

**Version: 0.0.0**

## Description

Read spectral data from the result files contained in the streams or data sources.

## Supported file types

This operator supports the following keys ([file formats](../../index.md#overview-of-dpf)) for each listed namespace (plugin/solver):

- mapdl: mode, prs 

## Inputs

| Input | Name | Expected type(s) | Description |
|-------|-------|------------------|-------------|
| <strong>Pin 3</strong>|  streams |[`streams_container`](../../core-concepts/dpf-types.md#streams-container) | Result file container allowed to be kept open to cache data. |
| <strong>Pin 4</strong> <br><span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  data_sources |[`data_sources`](../../core-concepts/dpf-types.md#data-sources) | Result file path container, used if no streams are set. |

## Outputs

| Output |  Name | Expected type(s) | Description |
|-------|------|------------------|-------------|
|  **Pin 0**| participation_factors |[`fields_container`](../../core-concepts/dpf-types.md#fields-container) | Fields container holding participation factors. |
|  **Pin 1**| mode_coefficients |[`fields_container`](../../core-concepts/dpf-types.md#fields-container) | Fields container holding mode coefficients (PRS File). |
|  **Pin 2**| damping_ratios |[`fields_container`](../../core-concepts/dpf-types.md#fields-container) | Fields container holding damping ratios (PRS File). |
|  **Pin 3**| global_damping |[`fields_container`](../../core-concepts/dpf-types.md#fields-container) | Fields container holding for each spectrum: Global Damping Ratio, Damping Stiffness Coefficient & Damping Mass Coefficient (PRS File). |
|  **Pin 4**| missing_mass |[`fields_container`](../../core-concepts/dpf-types.md#fields-container) | Fields container holding for each spectrum: Missing Mass Mode (0: None, 1: Active), Missing Mass Effect ZPA (PRS File). |
|  **Pin 5**| rigid_response |[`fields_container`](../../core-concepts/dpf-types.md#fields-container) | Fields container holding for each spectrum: Rigid Response Mode (0: None, 1: Gupta, 2: Lindley), Freq Begin (Gupta) / ZPA (Lindley), Freq End (Gupta) (PRS File). |

## Configurations

| Name| Expected type(s) | Default value | Description |
|-----|------|----------|-------------|
| **mutex** |[`bool`](../../core-concepts/dpf-types.md#standard-types) | false | If this option is set to true, the shared memory is prevented from being simultaneously accessed by multiple threads. |
| **num_threads** |[`int32`](../../core-concepts/dpf-types.md#standard-types) | 0 | Number of threads to use to run in parallel |
| **run_in_parallel** |[`bool`](../../core-concepts/dpf-types.md#standard-types) | true | Loops are allowed to run in parallel if the value of this config is set to true. |

## Scripting

 **Category**: result

 **Plugin**: mapdl

 **Scripting name**: spectrum_data

 **Full name**: result.spectrum_data

 **Internal name**: spectrum_data

 **License**: None


## Changelog

- Version 0.0.0: Initial release.