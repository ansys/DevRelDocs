---
category: math
plugin: core
license: None
---

# math:scale fields container

**Version: 0.0.0**

## Description

Scales a fields container by a constant factor. This factor can be a scalar, a vector a field, a fields container, where each value of the vector represents a scaler per component. Number of the components are corresponding to the input field dimensionality

## Inputs

| Input | Name | Expected type(s) | Description |
|-------|-------|------------------|-------------|
| <strong>Pin 0</strong> <br><span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  fields_container |[`fields_container`](../../core-concepts/dpf-types.md#fields-container) | fields container to be scaled |
| <strong>Pin 1</strong> <br><span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  weights |[`double`](../../core-concepts/dpf-types.md#standard-types), [`field`](../../core-concepts/dpf-types.md#field), [`vector<double>`](../../core-concepts/dpf-types.md#standard-types), [`fields_container`](../../core-concepts/dpf-types.md#fields-container) | Double/Vector of doubles/Field/FieldsContainer. When scoped on overall, same value(s) applied on all the data, when scoped elsewhere, corresponding values will be multiplied due to the scoping |
| <strong>Pin 2</strong>|  boolean |[`bool`](../../core-concepts/dpf-types.md#standard-types) | Default is false. If set to true, output of scale is made dimensionless |
| <strong>Pin 3</strong>|  algorithm |[`int32`](../../core-concepts/dpf-types.md#standard-types) | Default is 0 use mkl. If set to 1, don't |

## Outputs

| Output |  Name | Expected type(s) | Description |
|-------|------|------------------|-------------|
|  **Pin 0**| fields_container |[`fields_container`](../../core-concepts/dpf-types.md#fields-container) |  |

## Configurations

| Name| Expected type(s) | Default value | Description |
|-----|------|----------|-------------|
| **mutex** |[`bool`](../../core-concepts/dpf-types.md#standard-types) | false | If this option is set to true, the shared memory is prevented from being simultaneously accessed by multiple threads. |
| **num_threads** |[`int32`](../../core-concepts/dpf-types.md#standard-types) | 0 | Number of threads to use to run in parallel |
| **permissive** |[`bool`](../../core-concepts/dpf-types.md#standard-types) | false | If this option is set to true, warning checks (like unit or data sizes) won't be done. |
| **run_in_parallel** |[`bool`](../../core-concepts/dpf-types.md#standard-types) | true | Loops are allowed to run in parallel if the value of this config is set to true. |

## Scripting

 **Category**: math

 **Plugin**: core

 **Scripting name**: None

 **Full name**: None

 **Internal name**: scale_fc

 **License**: None


## Changelog

- Version 0.0.0: Initial release.