---
category: utility
plugin: core
license: None
---

# utility:clone field to shell layer

**Version: 0.0.0**

## Description

Generates a Field from the Field in input 0 that has the same FieldDefinition with the exception of the shellLayers enum that is specified in input 1. The DataPointer is recomputed to the appropriate value. The Data of the output Field is 0.0 for all entities. Scoping can be shared or not based on the optional pin 2.

## Inputs

| Input | Name | Expected type(s) | Description |
|-------|-------|------------------|-------------|
| <strong>Pin 0</strong> <br><span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  field |[`field`](../../core-concepts/dpf-types.md#field) |  |
| <strong>Pin 1</strong> <br><span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  shell_layer |[`int32`](../../core-concepts/dpf-types.md#standard-types), `enum dataProcessing::EShellLayers` | 0: Top, 1: Bottom, 2: BottomTop, 3: Mid, 4: BottomTopMid. |
| <strong>Pin 2</strong>|  duplicate_scoping |[`bool`](../../core-concepts/dpf-types.md#standard-types) | If true, a new scoping is computed for the output Field. If false, the input Field scoping is used. Default is false. |

## Outputs

| Output |  Name | Expected type(s) | Description |
|-------|------|------------------|-------------|
|  **Pin 0**| field |[`field`](../../core-concepts/dpf-types.md#field) |  |

## Configurations

| Name| Expected type(s) | Default value | Description |
|-----|------|----------|-------------|
| **mutex** |[`bool`](../../core-concepts/dpf-types.md#standard-types) | false | If this option is set to true, the shared memory is prevented from being simultaneously accessed by multiple threads. |

## Scripting

 **Category**: utility

 **Plugin**: core

 **Scripting name**: field_clone_to_shell_layer

 **Full name**: utility.field_clone_to_shell_layer

 **Internal name**: field::clone_to_shell_layer

 **License**: None


## Changelog

- Version 0.0.0: Initial release.