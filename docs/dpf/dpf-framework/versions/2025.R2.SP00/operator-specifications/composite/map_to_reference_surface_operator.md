---
category: composite
plugin: composite
license: None
---

# composite:map_to_reference_surface_operator

**Version: 0.0.0**

## Description

Maps values from a min and max field container, according to a mapping defined in a Property field. The property field contains a list of ids for every entity. The operator then computes the minimum/maximum of all the linked entities in the list. The maximum is computed according to the 'value' label. An output container is generated that contains the value, mode, global_layer_in_stack, local_layer_in_element and solid_element_id. Example:   - Mapping field {1: {4,5}, 2: {8}}  - Max Container with the following fields:  -- value {4: 10, 5:20, 8: 30}  -- mode {4: 1, 5: 2, 8: 3}  -- layer_index {4: 3, 5: 5, 8: 7}  -- layers per element field: {4: 3, 5: 7, 8: 2}Will result in an Max Container with the following fields:  -- value {1: 20, 2: 30}  -- mode {1: 2, 2: 3}  -- global_layer_in_stack {1: 8, 2: 17}  -- local_layer_in_element {1: 5, 2: 7}  -- solid_element_id {1: 5, 2: 8} And similarly for the min container.

## Inputs

| Input | Name | Expected type(s) | Description |
|-------|-------|------------------|-------------|
| <strong>Pin 0</strong> <br><span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  mapping_field |[`property_field`](../../core-concepts/dpf-types.md#property-field) | Mapping property field. Contains a list of ids for every entity. |
| <strong>Pin 1</strong> <br><span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  min_container |[`fields_container`](../../core-concepts/dpf-types.md#fields-container) | Min fields container. Container that contains value, mode and layer index field with the minimum values. |
| <strong>Pin 2</strong> <br><span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  max_container |[`fields_container`](../../core-concepts/dpf-types.md#fields-container) | Max fields container. Container that contains value, mode and layer index field with the maximum values. |
| <strong>Pin 3</strong> <br><span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  layers_per_element |[`property_field`](../../core-concepts/dpf-types.md#property-field) | Property field that contains the number of layers for each element. |
| <strong>Pin 7</strong> <br><span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  mesh |[`abstract_meshed_region`](../../core-concepts/dpf-types.md#meshed-region) | Meshed region of reference surface. Used as the support for the output fields. |

## Outputs

| Output |  Name | Expected type(s) | Description |
|-------|------|------------------|-------------|
|  **Pin 0**| min_container |[`fields_container`](../../core-concepts/dpf-types.md#fields-container) | Min Container. Contains five fields with the values, modes, global_layer_in_stack, local_layer_in_element and solid_element_id |
|  **Pin 1**| max_container |[`fields_container`](../../core-concepts/dpf-types.md#fields-container) | Max Container. Contains five fields with the values, modes, global_layer_in_stack, local_layer_in_element and solid_element_id |

## Configurations

| Name| Expected type(s) | Default value | Description |
|-----|------|----------|-------------|
| **mutex** |[`bool`](../../core-concepts/dpf-types.md#standard-types) | false | If this option is set to true, the shared memory is prevented from being simultaneously accessed by multiple threads. |

## Scripting

 **Category**: composite

 **Plugin**: composite

 **Scripting name**: map_to_reference_surface_operator

 **Full name**: composite.map_to_reference_surface_operator

 **Internal name**: composite::map_to_reference_surface_operator

 **License**: None


## Changelog

- Version 0.0.0: Initial release.