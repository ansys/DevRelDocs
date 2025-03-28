# result:rom data provider

## Description

Set the required data for the invariant terms computation (reduced matrices, lumped mass matrix, modes ...)

## Inputs


- **Pin 0** rom_type (type: ['bool']) (optional: False): If this pin is set to true, customized rom data must be given

- **Pin 1** reduced_stiff_matrix (type: ['fields_container']) (optional: False): FieldsContainers containing the reduced Stiffness matrix

- **Pin 2** reduced_damping_matrix (type: ['fields_container']) (optional: False): FieldsContainers containing the reduced Mass matrix

- **Pin 3** reduced_mass_matrix (type: ['fields_container']) (optional: False): FieldsContainers containing the reduced Damp matrix

- **Pin 4** data_sources (type: ['data_sources']) (optional: False): 

- **Pin 5** reduced_rhs_vector (type: ['fields_container']) (optional: False): FieldsContainers containing the reduced RHS vector

- **Pin 6** lumped_mass_matrix (type: ['fields_container']) (optional: False): FieldsContainers containing the lumped Mass matrix

- **Pin 7** mode_shapes (type: ['fields_container']) (optional: False): FieldsContainers containing the customized mode shapes


## Outputs


- **Pin 0** rom_matrices (type: ['fields_container']): FieldsContainers containing the reduced matrices

- **Pin 1** mode_shapes (type: ['fields_container']): FieldsContainers containing the mode shapes, which are CST and NOR for the cms method

- **Pin 2** lumped_mass (type: ['fields_container']): FieldsContainers containing the lumped mass

- **Pin 3** model_data (type: ['property_field']): data describing the finite element model

- **Pin 4** center_of_mass (type: ['property_field']): 

- **Pin 5** inertia_relief (type: ['field']): inertia matrix

- **Pin 6** model_size (type: ['double']): size of the model

- **Pin 7** field_coordinates_and_euler_angles (type: ['double']): coordinates and euler angles of all nodes

- **Pin 8** nod (type: ['vector<int32>']): ids of master nodes

- **Pin 9** meshed_region (type: ['abstract_meshed_region']): expanded meshed region.


## Configurations


- **mutex** (type: ['bool']) (default: false): If this option is set to true, the shared memory is prevented from being simultaneously accessed by multiple threads.


## Scripting

- **category**: result
- **plugin**: core
- **scripting name**: rom_data_provider
- **full name**: result.rom_data_provider
- **internal name**: rom_data_provider
- **license**: None