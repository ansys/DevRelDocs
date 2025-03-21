# result:erp radiation efficiency

## Description

Compute the radiation efficiency (enhanced erp divided by classical erp)

## Inputs


- **Pin 0** fields_container (type: ['fields_container']) (optional: False): the input field container expects displacements fields

- **Pin 1** mesh (type: ['abstract_meshed_region', 'meshes_container']) (optional: False): the meshes region in this pin has to be boundary or skin mesh

- **Pin 2** time_scoping (type: ['int32', 'vector<int32>', 'scoping']) (optional: False): load step number (if it's specified, the ERP is computed only on the substeps of this step) or time scoping

- **Pin 3** mass_density (type: ['double']) (optional: False): mass density (if it's not specified, default value of the air is applied).

- **Pin 4** speed_of_sound (type: ['double']) (optional: False): speed of sound (if it's not specified, default value of the speed of sound in the air is applied).


## Outputs


- **Pin 0** fields_container (type: ['fields_container']): 


## Configurations


- **mutex** (type: ['bool']) (default: false): If this option is set to true, the shared memory is prevented from being simultaneously accessed by multiple threads.


## Scripting

- **category**: result
- **plugin**: core
- **scripting name**: erp_radiation_efficiency
- **full name**: result.erp_radiation_efficiency
- **internal name**: erp_radiation_efficiency
- **license**: any_dpf_supported_increments