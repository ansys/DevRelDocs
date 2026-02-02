---
category: math
plugin: core
license: any_dpf_supported_increments
---

# math:svd

**Version: 0.0.0**

## Description

Computes the matrix singular value decomposition (SVD) for each field in the given fields container.

## Inputs

| Input | Name | Expected type(s) | Description |
|-------|-------|------------------|-------------|
| <strong>Pin 0</strong> <br><span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  fields_container |[`fields_container`](../../core-concepts/dpf-types.md#fields-container) | fields_container |

## Outputs

| Output |  Name | Expected type(s) | Description |
|-------|------|------------------|-------------|
|  **Pin 0**| s_svd |[`fields_container`](../../core-concepts/dpf-types.md#fields-container) | Singular values of the input data, where A=U.S.Vt |
|  **Pin 1**| u_svd |[`fields_container`](../../core-concepts/dpf-types.md#fields-container) | U of the input data, where A=U.S.Vt |
|  **Pin 2**| vt_svd |[`fields_container`](../../core-concepts/dpf-types.md#fields-container) | Vt of the input data, where A=U.S.Vt |

## Configurations

| Name| Expected type(s) | Default value | Description |
|-----|------|----------|-------------|
| **mutex** |[`bool`](../../core-concepts/dpf-types.md#standard-types) | false | If this option is set to true, the shared memory is prevented from being simultaneously accessed by multiple threads. |

## Scripting

 **Category**: math

 **Plugin**: core

 **Scripting name**: svd

 **Full name**: math.svd

 **Internal name**: svdOp

 **License**: any_dpf_supported_increments


## Changelog

- Version 0.0.0: Initial release.