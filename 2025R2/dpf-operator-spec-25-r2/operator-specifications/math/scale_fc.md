---
category: math
plugin: core
license: None
Version: 0.0.0
---

# math:scale (fields container)

## Version

0.0.0

## Changelog

- Version 0.0.0: Initial release.

## Description

Scales a field by a constant factor.


## Inputs

| Input | Name | Expected type(s) | Description |
|-------|-------|------------------|-------------|
| <strong>Pin 0</strong> <br><span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  fields_container |[`fields_container`](./../../core-concepts/dpf-types#fields-container) | field or fields container with only one field is expected |
| <strong>Pin 1</strong> <br><span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  ponderation |[`double`](./../../core-concepts/dpf-types#standard-types), [`field`](./../../core-concepts/dpf-types#field) | Double/Field scoped on overall |
| <strong>Pin 2</strong>|  boolean |[`bool`](./../../core-concepts/dpf-types#standard-types) | Default is false. If set to true, output of scale is made dimensionless |


## Outputs

| Output |  Name | Expected type(s) | Description |
|-------|------|------------------|-------------|
|  **Pin 0**| fields_container |[`fields_container`](./../../core-concepts/dpf-types#fields-container) |  |

## Configurations

| Name| Expected type(s) | Default value | Description |
|-----|------|----------|-------------|
| **mutex** |[`bool`](./../../core-concepts/dpf-types#standard-types) | false | If this option is set to true, the shared memory is prevented from being simultaneously accessed by multiple threads. |

## Scripting

 **Category**: math

 **Plugin**: core

 **Scripting name**: None

 **Full name**: None

 **Internal name**: scale_fc

 **License**: None
 
