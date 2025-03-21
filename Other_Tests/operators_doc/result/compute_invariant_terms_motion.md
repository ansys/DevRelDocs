---
category: result
plugin: core
license: None
---

# result:compute invariant terms motion

## Description

Set the required data for the invariant terms computation (reduced matrices, lumped mass matrix, modes ...)

## Inputs


- **Pin 0** rom_matrices (type: ['fields_container']) (optional: False): FieldsContainers containing the reduced matrices

- **Pin 1** mode_shapes (type: ['fields_container']) (optional: False): FieldsContainers containing the mode shapes, which are CST and NOR for the cms method

- **Pin 2** lumped_mass (type: ['fields_container']) (optional: False): FieldsContainers containing the lumped mass

- **Pin 3** model_data (type: ['fields_container']) (optional: False): data describing the finite element model

- **Pin 4** field_coordinates (type: ['field']) (optional: False): coordinates of all nodes

- **Pin 5** nod (type: ['vector<int32>']) (optional: False): 


## Outputs


- **Pin 0** model_data (type: ['property_field']): data describing the finite element model

- **Pin 1** mode_shapes (type: ['fields_container']): FieldsContainers containing the mode shapes, which are CST and NOR for the cms method

- **Pin 2** lumped_mass (type: ['fields_container']): FieldsContainers containing the lumped mass

- **Pin 3** field_coordinates_and_euler_angles (type: ['fields_container']): coordinates and euler angles of all nodes

- **Pin 4** nod (type: ['vector<int32>']): 

- **Pin 5** used_node_index (type: ['vector<int32>']): 

- **Pin 6** eigenvalue (type: ['vector<double>']): 

- **Pin 7** translational_mode_shape (type: ['vector<double>']): 

- **Pin 8** rotational_mode_shape (type: ['vector<double>']): 

- **Pin 9** invrt_1 (type: ['double']): 

- **Pin 10** invrt_2 (type: ['vector<double>']): 

- **Pin 11** invrt_3 (type: ['vector<double>']): 

- **Pin 12** invrt_4 (type: ['vector<double>']): 

- **Pin 13** invrt_5 (type: ['vector<double>']): 

- **Pin 14** invrt_6 (type: ['vector<double>']): 

- **Pin 15** invrt_7 (type: ['vector<double>']): 

- **Pin 16** invrt_8 (type: ['vector<double>']): 


## Configurations


- **mutex** (type: ['bool']) (default: false): If this option is set to true, the shared memory is prevented from being simultaneously accessed by multiple threads.


## Scripting

- **category**: result
- **plugin**: core
- **scripting name**: compute_invariant_terms_motion
- **full name**: result.compute_invariant_terms_motion
- **internal name**: compute_invariant_terms_motion
- **license**: None