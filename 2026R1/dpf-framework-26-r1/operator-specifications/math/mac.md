---
category: math
plugin: core
license: any_dpf_supported_increments
---

# math:mac

**Version: 0.0.0**

## Description

Computes MAC Matrix between two fields container, both for real and complex cases. For mixed cases (real-complex and complex) only the real part is considered. Providing inputs with the same component scoping is an user responsability.

## Inputs

| Input | Name | Expected type(s) | Description |
|-------|-------|------------------|-------------|
| <strong>Pin 0</strong> <br><span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  fields_containerA |[`fields_container`](./../../core-concepts/dpf-types.md#fields-container) | Fields Container A. |
| <strong>Pin 1</strong> <br><span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  fields_containerB |[`fields_container`](./../../core-concepts/dpf-types.md#fields-container) | Fields Container B. |
| <strong>Pin 2</strong> <br><span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  weights |[`field`](./../../core-concepts/dpf-types.md#field) | Field M, optional weighting for MAC Matrix computation. |

## Outputs

| Output |  Name | Expected type(s) | Description |
|-------|------|------------------|-------------|
|  **Pin 0**| field |[`field`](./../../core-concepts/dpf-types.md#field) | MAC Matrix for all the combinations between mode fields of Field Container A and Field Container B. Results listed row by row. |

## Configurations

| Name| Expected type(s) | Default value | Description |
|-----|------|----------|-------------|
| **mutex** |[`bool`](./../../core-concepts/dpf-types.md#standard-types) | false | If this option is set to true, the shared memory is prevented from being simultaneously accessed by multiple threads. |

## Scripting

 **Category**: math

 **Plugin**: core

 **Scripting name**: mac

 **Full name**: math.mac

 **Internal name**: mac

 **License**: any_dpf_supported_increments


## Changelog

- Version 0.0.0: Initial release.