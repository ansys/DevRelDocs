---
category: math
plugin: core
license: any_dpf_supported_increments
Version: 0.0.0
---

# math:correlation

Version: 0.0.0


## Description

Takes two fields and a weighting and computes their correlation: aMb/(||aMa||.||bMb||). If several b fields are provided (via a fields container), correlation is computed for each of them.


## Inputs


| Input | Name | Expected type(s) | Description |
|-------|-------|------------------|-------------|
| <strong>Pin 0</strong> <br><span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span> | fieldA |[`field`](../../core-concepts/dpf-types.md#field), [`double`](../../core-concepts/dpf-types.md#double), [`vector<double>`](../../core-concepts/dpf-types.md#standard-types) | Field a. The reference field. |
| <strong>Pin 1</strong> <br><span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span> | fieldB |[`field`](../../core-concepts/dpf-types.md#field), [`fields_container`](../../core-concepts/dpf-types.md#fields-container) | Field b. If a fields container is provided, correlation is computed for each field. |
| <strong>Pin 2</strong> <br><span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span> | ponderation |[`field`](../../core-concepts/dpf-types.md#field), [`fields_container`](../../core-concepts/dpf-types.md#fields-container) | Field M, optional weighting for correclation computation. |

## Outputs


| Output | Name | Expected type(s) | Description |
|-------|------|------------------|-------------|
| **Pin 0** | field |[`field`](../../core-concepts/dpf-types.md#field) | Correlation factor for each input field b. |
| **Pin 1** | index |[`int32`](../../core-concepts/dpf-types.md#standard-types) | If several b are provided, this output contains the index of the highest correlation factor. |

## Configurations

| Name| Expected type(s) | Default value | Description |
|-----|------|----------|-------------|
| **mutex** |[`bool`](../../core-concepts/dpf-types.md#standard-types) | false | If this option is set to true, the shared memory is prevented from being simultaneously accessed by multiple threads. |


## Scripting

 **Category**: math

 **Plugin**: core

 **Scripting name**: correlation

 **Full name**: math.correlation

 **Internal name**: correlation

 **License**: any_dpf_supported_increments
 

## Changelog

- Version 0.0.0: Initial release.