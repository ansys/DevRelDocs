---
category: utility
plugin: core
license: None
---

# utility:extract field

**Version: 0.0.0**

## Description

Extracts the fields at the indices defined in the vector (in 1) from the fields container (in 0). If a single index is provided, returns a field; if multiple indices are provided, returns a fields container.

## Inputs

| Input | Name | Expected type(s) | Description |
|-------|-------|------------------|-------------|
| <strong>Pin 0</strong> <br><span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  fields_container |[`field`](../../core-concepts/dpf-types.md#field), [`fields_container`](../../core-concepts/dpf-types.md#fields-container) | Fields container or single field. If a field is provided, it is passed through as output |
| <strong>Pin 1</strong>|  indices |[`vector<int32>`](../../core-concepts/dpf-types.md#standard-types) | Indices of fields to extract. Default is [0] (first field). Single index returns a field, multiple indices return a fields container |

## Outputs

| Output |  Name | Expected type(s) | Description |
|-------|------|------------------|-------------|
|  **Pin 0**| extracted |[`field`](../../core-concepts/dpf-types.md#field), [`fields_container`](../../core-concepts/dpf-types.md#fields-container) | Extracted field(s). Single index produces a field, multiple indices produce a fields container |

## Configurations

| Name| Expected type(s) | Default value | Description |
|-----|------|----------|-------------|
| **mutex** |[`bool`](../../core-concepts/dpf-types.md#standard-types) | false | If this option is set to true, the shared memory is prevented from being simultaneously accessed by multiple threads. |

## Scripting

 **Category**: utility

 **Plugin**: core

 **Scripting name**: extract_field

 **Full name**: utility.extract_field

 **Internal name**: ExtractFromFC

 **License**: None


## Changelog

- Version 0.0.0: Initial release.