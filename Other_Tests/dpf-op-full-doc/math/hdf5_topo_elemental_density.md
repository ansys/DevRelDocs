# math:dot (by scalar field)

## Description

Extract Elemental Topology Density result from topo solver output. Default behavior is to use graphical density.

## Inputs


- **Pin 0** time_scoping (type: ['scoping']) (optional: True): 

- **Pin 1** mesh_scoping (type: ['scoping']) (optional: True): 

- **Pin 3** streams (type: ['streams_container']) (optional: True): topo file stream.

- **Pin 4** data_sources (type: ['data_sources']) (optional: True): topo file data source.

- **Pin 200** custom_ponderation_name (type: ['string']) (optional: False): take custom ponderation_field from the topo file by name


## Outputs


- **Pin 0** field (type: ['field']): 


## Configurations


- **mutex** (type: ['bool']) (default: false): If this option is set to true, the shared memory is prevented from being simultaneously accessed by multiple threads.


## Scripting

- **category**: math
- **plugin**: core
- **scripting name**: None
- **full name**: None
- **internal name**: hdf5::topo::elemental_density
- **license**: None