---
category: math
plugin: core
license: any_dpf_supported_increments
---

# math:svd

## Description

Computes the matrix singular value decomposition (SVD) for each field in the given fields container.

### Plugin

core

## Inputs

| Input | Name | Expected type(s) | Description |
|-------|-------|------------------|-------------|
| <strong>Pin 0</strong> <br><span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  fields_container |[`fields_container`](../../getting-started/using-data-containers.md#fields-container) | fields_container |


## Outputs

| Output |  Name | Expected type(s) | Description |
|-------|------|------------------|-------------|
| <strong>Pin 0</strong> <br><span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span> | s_svd |[`fields_container`](../../getting-started/using-data-containers.md#fields-container) | Singular values of the input data, where A=U.S.Vt |
| <strong>Pin 1</strong> <br><span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span> | u_svd |[`fields_container`](../../getting-started/using-data-containers.md#fields-container) | U of the input data, where A=U.S.Vt |
| <strong>Pin 2</strong> <br><span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span> | vt_svd |[`fields_container`](../../getting-started/using-data-containers.md#fields-container) | Vt of the input data, where A=U.S.Vt |

## Configurations

| Name| Expected type(s) | Default value | Description |
|-----|------|----------|-------------|
| **mutex** |[`bool`](../../getting-started/using-data-containers.md#bool) | false | If this option is set to true, the shared memory is prevented from being simultaneously accessed by multiple threads. |

## Scripting

- Category: math
- Plugin: core
- Scripting name: svd
- Full name: math.svd
- Internal name: svdOp
- License: any_dpf_supported_increments
  