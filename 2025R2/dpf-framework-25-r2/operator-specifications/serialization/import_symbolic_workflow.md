---
category: serialization
plugin: core
license: any_dpf_supported_increments
---

# serialization:import symbolic workflow

**Version: 0.0.0**

## Description

Reads a file or string holding a Symbolic Workflow and instantiate a WorkFlow with its data.

## Inputs

| Input | Name | Expected type(s) | Description |
|-------|-------|------------------|-------------|
| <strong>Pin 0</strong> <br><span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  string_or_path |[`string`](../../core-concepts/dpf-types.md#standard-types), [`data_sources`](../../core-concepts/dpf-types.md#data-sources) |  |
| <strong>Pin 2</strong>|  format |[`int32`](../../core-concepts/dpf-types.md#standard-types) | -1 is auto-detection, 0 is ASCII format, 1 is binary, 2 is json, default is -1 (auto-detection). |

## Outputs

| Output |  Name | Expected type(s) | Description |
|-------|------|------------------|-------------|
|  **Pin 0**| workflow |[`workflow`](../../core-concepts/dpf-types.md#workflow) |  |

## Configurations

| Name| Expected type(s) | Default value | Description |
|-----|------|----------|-------------|
| **mutex** |[`bool`](../../core-concepts/dpf-types.md#standard-types) | false | If this option is set to true, the shared memory is prevented from being simultaneously accessed by multiple threads. |

## Scripting

 **Category**: serialization

 **Plugin**: core

 **Scripting name**: None

 **Full name**: None

 **Internal name**: import_symbolic_workflow

 **License**: any_dpf_supported_increments


## Changelog

- Version 0.0.0: Initial release.