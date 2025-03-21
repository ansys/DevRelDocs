# result:transform invariant terms rbd

## Description

Transform invariant terms rbd based on a coordinate system (translation + rotation).

## Inputs


- **Pin 0** rotation_matrix (type: ['field']) (optional: False): 3-3 rotation matrix.

- **Pin 1** coordinate_system (type: ['field']) (optional: False): origin of the new coordinate system.

- **Pin 2** model_data (type: ['property_field']) (optional: False): data describing the finite element model

- **Pin 3** center_of_mass (type: ['field']) (optional: False): center of mass of the body

- **Pin 4** inertia_relief (type: ['field']) (optional: False): inertia matrix

- **Pin 5** model_size (type: ['double']) (optional: False): size of the diagonal box containing the body

- **Pin 6** master_node_coordinates (type: ['vector<double>']) (optional: False): 

- **Pin 7** v_trsf (type: ['vector<double>']) (optional: False): translational and rotational shape functions

- **Pin 8** k_mat (type: ['field']) (optional: False): 

- **Pin 9** mass_mat (type: ['field']) (optional: False): 

- **Pin 10** c_mat (type: ['field']) (optional: False): 

- **Pin 11** rhs (type: ['field']) (optional: False): 

- **Pin 12** dn (type: ['vector<double>']) (optional: False): 

- **Pin 13** dr_cross_n (type: ['vector<double>']) (optional: False): 

- **Pin 14** drn (type: ['vector<double>']) (optional: False): 

- **Pin 15** dn_cross_n (type: ['vector<double>']) (optional: False): 

- **Pin 16** dnx_y (type: ['vector<double>']) (optional: False): 

- **Pin 17** dny_y (type: ['vector<double>']) (optional: False): 

- **Pin 18** dnz_y (type: ['vector<double>']) (optional: False): 

- **Pin 19** dyx_n (type: ['vector<double>']) (optional: False): 

- **Pin 20** dyy_n (type: ['vector<double>']) (optional: False): 

- **Pin 21** dyz_n (type: ['vector<double>']) (optional: False): 

- **Pin 22** dnxn (type: ['vector<double>']) (optional: False): 

- **Pin 23** dnyn (type: ['vector<double>']) (optional: False): 

- **Pin 24** dnzn (type: ['vector<double>']) (optional: False): 


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


- **inplace** (type: ['bool']) (default: false): The output is written over the input to save memory if this config is set to true.

- **mutex** (type: ['bool']) (default: false): If this option is set to true, the shared memory is prevented from being simultaneously accessed by multiple threads.


## Scripting

- **category**: result
- **plugin**: core
- **scripting name**: transform_invariant_terms_rbd
- **full name**: result.transform_invariant_terms_rbd
- **internal name**: transform_invariant_terms_rbd
- **license**: None