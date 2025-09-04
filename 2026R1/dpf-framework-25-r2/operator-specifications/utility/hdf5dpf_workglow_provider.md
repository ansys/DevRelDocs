---
category: utility
plugin: core
license: None
---

# utility:hdf5dpf workflow provider

**Version: 0.0.0**

## Description

Extract a custom result from an hdf5dpf file as an executable workflow.

## Inputs

| Input | Name | Expected type(s) | Description |
|-------|-------|------------------|-------------|
| <strong>Pin 0</strong>|  time_scoping |[`scoping`](../../core-concepts/dpf-types.md#scoping) |  |
| <strong>Pin 1</strong>|  mesh_scoping |[`scoping`](../../core-concepts/dpf-types.md#scoping) |  |
| <strong>Pin 3</strong>|  streams |[`streams_container`](../../core-concepts/dpf-types.md#streams-container) | Hdf5df file stream. |
| <strong>Pin 4</strong>|  data_sources |[`data_sources`](../../core-concepts/dpf-types.md#data-sources) | Hdf5df file data source. |
| <strong>Pin 24</strong>|  meta_data |[`abstract_data_tree`](../../core-concepts/dpf-types.md#data-tree) | meta_data that may be used to evaluate results or extract workflows. |
| <strong>Pin 60</strong> <br><span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  result_name | | Name of the result that must be extracted from the hdf5dpf file |

## Outputs

| Output |  Name | Expected type(s) | Description |
|-------|------|------------------|-------------|
|  **Pin 0**| field_or_fields_container |[`workflow`](../../core-concepts/dpf-types.md#workflow) |  |

## Configurations

| Name| Expected type(s) | Default value | Description |
|-----|------|----------|-------------|
| **mutex** |[`bool`](../../core-concepts/dpf-types.md#standard-types) | false | If this option is set to true, the shared memory is prevented from being simultaneously accessed by multiple threads. |

## Scripting

 **Category**: utility

 **Plugin**: core

 **Scripting name**: hdf5dpf_workglow_provider

 **Full name**: utility.hdf5dpf_workglow_provider

 **Internal name**: hdf5::h5dpf::workflow_provider

 **License**: None


## Changelog

- Version 0.0.0: Initial release.