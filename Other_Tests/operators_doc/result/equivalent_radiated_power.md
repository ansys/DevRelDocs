# result:equivalent radiated power

## Description

Compute the Equivalent Radiated Power (ERP)

## Inputs


- **Pin 0** fields_container (type: ['fields_container']) (optional: False): the input field container expects displacements fields

- **Pin 1** mesh (type: ['abstract_meshed_region', 'meshes_container']) (optional: False): the mesh region in this pin has to be boundary or skin mesh

- **Pin 2** time_scoping (type: ['int32', 'vector<int32>', 'scoping']) (optional: False): load step number (if it's specified, the ERP is computed only on the substeps of this step) or time scoping

- **Pin 3** mass_density (type: ['double']) (optional: False): mass density (if it's not specified, default value of the air is applied).

- **Pin 4** speed_of_sound (type: ['double']) (optional: False): speed of sound (if it's not specified, default value of the speed of sound in the air is applied).

- **Pin 5** erp_type (type: ['int32']) (optional: False): if this pin is set to 0, the classical ERP is computed, 1 the corrected ERP is computed (a mesh of one face has to be given in the pin 1) and 2 the enhanced ERP is computed. Default is 0.

- **Pin 6** boolean (type: ['bool']) (optional: False): if this pin is set to true, the ERP level in dB is computed

- **Pin 7** factor (type: ['double']) (optional: False): erp reference value. Default is 1E-12


## Outputs


- **Pin 0** fields_container (type: ['fields_container']): 


## Configurations


- **mutex** (type: ['bool']) (default: false): If this option is set to true, the shared memory is prevented from being simultaneously accessed by multiple threads.


## Scripting

- **category**: result
- **plugin**: core
- **scripting name**: equivalent_radiated_power
- **full name**: result.equivalent_radiated_power
- **internal name**: ERP
- **license**: any_dpf_supported_increments