---
category: result
plugin: core
license: None
---

# result:compute invariant terms rbd

## Description

Set the required data for the invariant terms computation (reduced matrices, lumped mass matrix, modes ...)

## Inputs


- **Pin 0** rom_matrices (type: ['fields_container']) (optional: False): FieldsContainers containing the reduced matrices

- **Pin 1** mode_shapes (type: ['fields_container']) (optional: False): FieldsContainers containing the mode shapes, which are CST and NOR for the cms method

- **Pin 2** lumped_mass (type: ['fields_container']) (optional: False): FieldsContainers containing the lumped mass

- **Pin 3** model_data (type: ['fields_container']) (optional: False): data describing the finite element model

- **Pin 4** center_of_mass (type: ['fields_container']) (optional: False): 

- **Pin 5** inertia_relief (type: ['fields_container']) (optional: False): inertia matrix

- **Pin 6** model_size (type: ['double']) (optional: False): model size

- **Pin 7** field_coordinates (type: ['field']) (optional: False): coordinates of all nodes

- **Pin 8** nod (type: ['vector<int32>']) (optional: False): 

- **Pin 9** constraint_mode_check (type: ['bool']) (optional: True): if true, the orthogonality of the constraint modes are checked. Default is false.


## Outputs


- **Pin 0** model_data (type: ['property_field']): data describing the finite element model

- **Pin 1** center_of_mass (type: ['field']): center of mass of the body

- **Pin 2** inertia_relief (type: ['field']): inertia matrix

- **Pin 3** model_size (type: ['property_field']): 

- **Pin 4** master_node_coordinates (type: ['vector<double>']): 

- **Pin 5** v_trsf (type: ['vector<double>']): translational and rotational shape functions

- **Pin 6** k_mat (type: ['field']): 

- **Pin 7** mass_mat (type: ['field']): 

- **Pin 8** c_mat (type: ['field']): 

- **Pin 9** rhs (type: ['field']): 

- **Pin 10** dn (type: ['vector<double>']): 

- **Pin 11** dr_cross_n (type: ['vector<double>']): 

- **Pin 12** drn (type: ['vector<double>']): 

- **Pin 13** dn_cross_n (type: ['vector<double>']): 

- **Pin 14** dnx_y (type: ['vector<double>']): 

- **Pin 15** dny_y (type: ['vector<double>']): 

- **Pin 16** dnz_y (type: ['vector<double>']): 

- **Pin 17** dyx_n (type: ['vector<double>']): 

- **Pin 18** dyy_n (type: ['vector<double>']): 

- **Pin 19** dyz_n (type: ['vector<double>']): 

- **Pin 20** dnxn (type: ['vector<double>']): 

- **Pin 21** dnyn (type: ['vector<double>']): 

- **Pin 22** dnzn (type: ['vector<double>']): 


## Configurations


- **mutex** (type: ['bool']) (default: false): If this option is set to true, the shared memory is prevented from being simultaneously accessed by multiple threads.


## Scripting

- **category**: result
- **plugin**: core
- **scripting name**: compute_invariant_terms_rbd
- **full name**: result.compute_invariant_terms_rbd
- **internal name**: compute_invariant_terms_rbd
- **license**: None