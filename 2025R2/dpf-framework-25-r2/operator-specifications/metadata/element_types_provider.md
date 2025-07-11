---
category: metadata
plugin: core
license: None
---

# metadata:element types provider

**Version: 0.0.0**

## Description

Reads element types data from the result files contained in the streams or data sources.

## Supported file types

This operator supports the following file types (result keys), listed by namespace:
- <strong>mapdl</strong>: rst, rth

## Inputs

| Input | Name | Expected type(s) | Description |
|-------|-------|------------------|-------------|
| <strong>Pin 1</strong>|  solver_element_types_ids |[`int32`](../../core-concepts/dpf-types.md#standard-types}}), [`vector<int32>`](../../core-concepts/dpf-types.md#standard-types}}) | Element Type ids to recover used by the solver. If not set, all available element types to be recovered. |
| <strong>Pin 3</strong>|  streams |[`streams_container`](../../core-concepts/dpf-types.md#streams-container) | Result file container allowed to be kept open to cache data. |
| <strong>Pin 4</strong> <br><span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  data_sources |[`data_sources`](../../core-concepts/dpf-types.md#data-sources) | Result file path container, used if no streams are set. |

## Outputs

| Output |  Name | Expected type(s) | Description |
|-------|------|------------------|-------------|
|  **Pin 0**| element_types_data |[`generic_data_container`](../../core-concepts/dpf-types.md#generic-data-container) | The generic_data_container has a class_name: ElementTypesProperties. It contains the following property fields: element_routine_number: Element routine number. E.g 186 for SOLID186, keyopts: Element type option keys, kdofs: DOF/node for this element type.This is a bit mapping, nodelm: Number of nodes for this element type, nodfor: Number of nodes per element having nodal forces, nodstr: Number of nodes per element having nodal stresses, new_gen_element: Element of new generation. |

## Configurations

| Name| Expected type(s) | Default value | Description |
|-----|------|----------|-------------|
| **mutex** |[`bool`](../../core-concepts/dpf-types.md#standard-types}}) | false | If this option is set to true, the shared memory is prevented from being simultaneously accessed by multiple threads. |
| **num_threads** |[`int32`](../../core-concepts/dpf-types.md#standard-types}}) | 0 | Number of threads to use to run in parallel |
| **run_in_parallel** |[`bool`](../../core-concepts/dpf-types.md#standard-types}}) | true | Loops are allowed to run in parallel if the value of this config is set to true. |

## Scripting

 **Category**: metadata

 **Plugin**: core

 **Scripting name**: element_types_provider

 **Full name**: metadata.element_types_provider

 **Internal name**: element_types_provider

 **License**: None


## Changelog

- Version 0.0.0: Initial release.