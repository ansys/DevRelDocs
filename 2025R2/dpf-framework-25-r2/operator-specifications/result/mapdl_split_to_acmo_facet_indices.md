---
category: result
plugin: mapdl
license: None
---

# result:split to acmo facet indices

**Version: 0.0.0**

## Description

This will retain the already existing labels from the input FC and will change the facet label to now mean ACMO facet indices.Each Field in the input will be split/merged into several Fields, redistributing the data to the appropriate entity.

## Inputs

| Input | Name | Expected type(s) | Description |
|-------|-------|------------------|-------------|
| <strong>Pin 0</strong> <br><span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  fields_container |[`fields_container`](../../core-concepts/dpf-types.md#fields-container) | Fields container to split, with generic number of labels (e.g. time, zone, complex...), 'facet' label is compulsory.The Fields of the FieldsContainer will have location Elemental and the Scoping Ids will be the Element Ids on the skin mesh. |
| <strong>Pin 1</strong> <br><span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  property_fields_container_element_types |[`property_fields_container`](../../core-concepts/dpf-types.md#property-fields-container) | It should only have the 'facet' label. For each facet, it stores a PropertyField with the element types of the corresponding elements.The scoping should be the same as the scoping of the corresponding Field in input 0. |

## Outputs

| Output |  Name | Expected type(s) | Description |
|-------|------|------------------|-------------|
|  **Pin 0**| fields_container |[`fields_container`](../../core-concepts/dpf-types.md#fields-container) | Output splitted fields containter |

## Configurations

| Name| Expected type(s) | Default value | Description |
|-----|------|----------|-------------|
| **mutex** |[`bool`](../../core-concepts/dpf-types.md#standard-types) | false | If this option is set to true, the shared memory is prevented from being simultaneously accessed by multiple threads. |

## Scripting

 **Category**: result

 **Plugin**: mapdl

 **Scripting name**: mapdl_split_to_acmo_facet_indices

 **Full name**: result.mapdl_split_to_acmo_facet_indices

 **Internal name**: mapdl::split_to_acmo_facet_indices

 **License**: None


## Changelog

- Version 0.0.0: Initial release.