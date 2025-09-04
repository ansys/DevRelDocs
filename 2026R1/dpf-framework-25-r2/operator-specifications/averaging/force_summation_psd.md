---
category: averaging
plugin: core
license: any_dpf_supported_increments
---

# averaging:force_summation_psd

**Version: 0.0.0**

## Description

Computes the sum of elemental forces contribution on a set of nodes in Global Coordinate System for a PSD analysis. Equivalent to MAPDL FSUM/NFORCE.

## Inputs

| Input | Name | Expected type(s) | Description |
|-------|-------|------------------|-------------|
| <strong>Pin 1</strong>|  nodal_scoping |[`scoping`](../../core-concepts/dpf-types.md#scoping) | Nodal Scoping. Set of nodes in which elemental contribution forces will be accumulated. Defaults to all nodes. |
| <strong>Pin 2</strong>|  elemental_scoping |[`scoping`](../../core-concepts/dpf-types.md#scoping) | Elemental Scoping. Set of elements contributing to the force calculation. Defaults to all elements. |
| <strong>Pin 3</strong>|  streams |[`streams_container`](../../core-concepts/dpf-types.md#streams-container) | Streams container for RST and PSD files (optional if using data sources). The operator supports both a single RST file and two separate RST files. See data sources pin specifications for details on how to define the streams for both cases. |
| <strong>Pin 4</strong> <br><span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  data_sources |[`data_sources`](../../core-concepts/dpf-types.md#data-sources) | Data sources containing RST and PSD files (optional if using a streams container). The operator supports both a single RST file (containing both modal and PSD results) and two separate RST files (one for modal and one for PSD analyses).The data source containing modal results must be defined as an upstream data source.If using a single RST file for PSD and modal analysis, the RST file must be in an upstream data source.If using two separate RST files, only the modal RST must be in an upstream data source. |
| <strong>Pin 6</strong>|  spoint |[`field`](../../core-concepts/dpf-types.md#field) | Coordinate field of a point for moment summations. Defaults to (0,0,0). |
| <strong>Pin 7</strong>|  abs_rel_key |[`field`](../../core-concepts/dpf-types.md#field) | Key to select the type of response: 0 for relative response (default) or 1 for absolute response. |
| <strong>Pin 8</strong>|  signif |[`double`](../../core-concepts/dpf-types.md#standard-types) | Significance threshold, defaults to 0.0001. Any mode with a significance level above this value will be included in the combination.The significance level is defined as the modal covariance matrix term, divided by the maximum modal covariance matrix term. |

## Outputs

| Output |  Name | Expected type(s) | Description |
|-------|------|------------------|-------------|
|  **Pin 0**| force_accumulation |[`fields_container`](../../core-concepts/dpf-types.md#fields-container) | Returns the sum of forces for the 1-sigma displacement solution on the scoped nodes/elements. |
|  **Pin 1**| moment_accumulation |[`fields_container`](../../core-concepts/dpf-types.md#fields-container) | Returns the sum of moments for the 1-sigma displacement solution on the scoped nodes/elements. |
|  **Pin 10**| forces_on_nodes |[`fields_container`](../../core-concepts/dpf-types.md#fields-container) | Returns the nodal forces for the 1-sigma displacement solution on the scoped nodes/elements. |
|  **Pin 11**| moments_on_nodes |[`fields_container`](../../core-concepts/dpf-types.md#fields-container) | Returns the nodal moments for the 1-sigma displacement solution on the scoped nodes/elements. |

## Configurations

| Name| Expected type(s) | Default value | Description |
|-----|------|----------|-------------|
| **mutex** |[`bool`](../../core-concepts/dpf-types.md#standard-types) | false | If this option is set to true, the shared memory is prevented from being simultaneously accessed by multiple threads. |

## Scripting

 **Category**: averaging

 **Plugin**: core

 **Scripting name**: force_summation_psd

 **Full name**: averaging.force_summation_psd

 **Internal name**: force_summation_psd

 **License**: any_dpf_supported_increments


## Changelog

- Version 0.0.0: Initial release.