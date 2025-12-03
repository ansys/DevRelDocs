---
category: composite
plugin: composite
license: None
---

# composite:scope_generator

**Version: 0.0.0**

## Description

Generator operator that returns an element chunk each time generator_counteris modified until all elements have been handled.

## Inputs

| Input | Name | Expected type(s) | Description |
|-------|-------|------------------|-------------|
| <strong>Pin 0</strong> <br><span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  generator_counter |[`int32`](../../core-concepts/dpf-types.md#standard-types) | Increment this input to get the next element scope for output element_scoping . |
| <strong>Pin 1</strong>|  element_scoping |[`scoping`](../../core-concepts/dpf-types.md#scoping) | Element scoping |
| <strong>Pin 3</strong>|  stream_provider |[`streams_container`](../../core-concepts/dpf-types.md#streams-container) | stream_provider of the result file. Required if no explicit element scope is providedor the result definition contains Named Selections. |
| <strong>Pin 4</strong>|  data_sources |[`data_sources`](../../core-concepts/dpf-types.md#data-sources) | Composite data sources |
| <strong>Pin 402</strong>|  data_tree |[`abstract_data_tree`](../../core-concepts/dpf-types.md#data-tree) | Configuration containing the following keys: max_chunk_size (int) and named_selections ([string])) |

## Outputs

| Output |  Name | Expected type(s) | Description |
|-------|------|------------------|-------------|
|  **Pin 0**| element_scoping |[`scoping`](../../core-concepts/dpf-types.md#scoping) | Element scoping for current chunk. |
|  **Pin 1**| is_finished |[`bool`](../../core-concepts/dpf-types.md#standard-types) | Returns true if generator has returned all the requested elements. In this case the output of pin element_scoping is empty. |

## Configurations

| Name| Expected type(s) | Default value | Description |
|-----|------|----------|-------------|
| **mutex** |[`bool`](../../core-concepts/dpf-types.md#standard-types) | false | If this option is set to true, the shared memory is prevented from being simultaneously accessed by multiple threads. |

## Scripting

 **Category**: composite

 **Plugin**: composite

 **Scripting name**: scope_generator

 **Full name**: composite.scope_generator

 **Internal name**: composite::scope_generator

 **License**: None


## Changelog

- Version 0.0.0: Initial release.