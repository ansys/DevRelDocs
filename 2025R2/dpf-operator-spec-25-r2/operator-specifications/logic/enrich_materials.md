---
category: logic
plugin: core
license: any_dpf_supported_increments
Version: 0.0.0
---

# logic:enrich materials

## Version

0.0.0

## Changelog

- Version 0.0.0: Initial release.

## Description

Takes a MaterialContainer and a stream and enriches the MaterialContainer using stream data.


## Inputs

| Input | Name | Expected type(s) | Description |
|-------|-------|------------------|-------------|
| <strong>Pin 0</strong> <br><span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  MaterialContainer | |  |
| <strong>Pin 1</strong> <br><span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  streams |[`streams_container`](../../core-concepts/dpf-types#streams-container), [`fields_container`](../../core-concepts/dpf-types#fields-container) |  |
| <strong>Pin 2</strong> <br><span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  streams_mapping |[`property_fields_container`](../../core-concepts/dpf-types#property-fields-container) |  |


## Outputs

| Output |  Name | Expected type(s) | Description |
|-------|------|------------------|-------------|
|  **Pin 0**| MaterialContainer |[`bool`](../../core-concepts/dpf-types#standard-types) |  |

## Configurations

| Name| Expected type(s) | Default value | Description |
|-----|------|----------|-------------|
| **mutex** |[`bool`](../../core-concepts/dpf-types#standard-types) | false | If this option is set to true, the shared memory is prevented from being simultaneously accessed by multiple threads. |

## Scripting

 **Category**: logic

 **Plugin**: core

 **Scripting name**: enrich_materials

 **Full name**: logic.enrich_materials

 **Internal name**: enrich_materials

 **License**: any_dpf_supported_increments
 
