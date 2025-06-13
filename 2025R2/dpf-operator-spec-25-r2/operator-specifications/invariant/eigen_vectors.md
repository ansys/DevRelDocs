---
category: invariant
plugin: mapdl
license: None
Version: 0.0.0
---

# invariant:eigen vectors (on field)

## Version

0.0.0

## Changelog

- Version 0.0.0: Initial release.

## Description

Computes the element-wise Eigen vectors for each tensor in the field.


## Inputs

| Input | Name | Expected type(s) | Description |
|-------|-------|------------------|-------------|
| <strong>Pin 0</strong> <br><span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  field |[`fields_container`](./../../getting-started/using-data-containers.md#fields-container), [`field`](./../../getting-started/using-data-containers.md#field) | field or fields container with only one field is expected |


## Outputs

| Output |  Name | Expected type(s) | Description |
|-------|------|------------------|-------------|
|  **Pin 0**| field |[`field`](./../../getting-started/using-data-containers.md#field) |  |

## Configurations

| Name| Expected type(s) | Default value | Description |
|-----|------|----------|-------------|
| **mutex** |[`bool`](./../../getting-started/using-data-containers.md#bool) | false | If this option is set to true, the shared memory is prevented from being simultaneously accessed by multiple threads. |

## Scripting

 **Category**: invariant

 **Plugin**: mapdl

 **Scripting name**: eigen_vectors

 **Full name**: invariant.eigen_vectors

 **Internal name**: eig_vectors

 **License**: None
 
