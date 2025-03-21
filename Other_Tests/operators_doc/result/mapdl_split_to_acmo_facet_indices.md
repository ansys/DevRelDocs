---
category: result
plugin: mapdl
license: None
---

# result:split to acmo facet indices

## Description

This will retain the already existing labels from the input FC and will change the facet label to now mean ACMO facet indices.Each Field in the input will be split/merged into several Fields, redistributing the data to the appropriate entity.

## Inputs


- **Pin 0** fields_container (type: ['fields_container']) (optional: False): Fields container to split, with generic number of labels (e.g. time, zone, complex...), 'facet' label is compulsory.The Fields of the FieldsContainer will have location Elemental and the Scoping Ids will be the Element Ids on the skin mesh.

- **Pin 1** property_fields_container_element_types (type: ['property_fields_container']) (optional: False): It should only have the 'facet' label. For each facet, it stores a PropertyField with the element types of the corresponding elements.The scoping should be the same as the scoping of the corresponding Field in input 0.


## Outputs


- **Pin 0** fields_container (type: ['fields_container']): Output splitted fields containter


## Configurations


- **mutex** (type: ['bool']) (default: false): If this option is set to true, the shared memory is prevented from being simultaneously accessed by multiple threads.


## Scripting

- **category**: result
- **plugin**: mapdl
- **scripting name**: mapdl_split_to_acmo_facet_indices
- **full name**: result.mapdl_split_to_acmo_facet_indices
- **internal name**: mapdl::split_to_acmo_facet_indices
- **license**: None