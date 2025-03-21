# result:mapdl_section

## Description

Read the values of the section properties for a given section property field (property field that contains section information for each element of a mesh). The following keys can be used: Thickness, NumLayers. For layered elements, the following keys can be used: Thickness, MatID, Orientation, NumIntPoints.

## Inputs


- **Pin 0** properties_name (type: ['string', 'vector<string>']) (optional: False): 

- **Pin 1** section (type: ['property_field']) (optional: True): Property field that contains a section id per element.(optional)

- **Pin 3** streams_container (type: ['streams_container']) (optional: False): 

- **Pin 4** data_sources (type: ['data_sources']) (optional: False): 

- **Pin 5** layer_property (type: ['bool']) (optional: True): Property requested is layered. Default = False.

- **Pin 6** layers_requested (type: ['vector<int32>']) (optional: True): Array with layers requested for the section. Default = AllLayers.


## Outputs


- **Pin 0** properties_value (type: ['fields_container']): 

- **Pin 1** layers_per_section (type: ['property_field']): Only available if layer_property option is set to True.


## Configurations


- **mutex** (type: ['bool']) (default: false): If this option is set to true, the shared memory is prevented from being simultaneously accessed by multiple threads.


## Scripting

- **category**: result
- **plugin**: mapdl
- **scripting name**: mapdl_section
- **full name**: result.mapdl_section
- **internal name**: mapdl_section_properties
- **license**: None