---
category: result
plugin: core
license: None
---

# result:write cms rbd file

## Description

Write the invariant terms and the model data in a cms_rbd file

## Inputs


- **Pin 0** model_data (type: ['property_field']) (optional: False): data describing the finite element model

- **Pin 1** center_of_mass (type: ['field']) (optional: False): center of mass of the body

- **Pin 2** inertia_relief (type: ['field']) (optional: False): inertia matrix

- **Pin 3** model_size (type: ['double']) (optional: False): size of the diagonal box containing the body

- **Pin 4** master_node_coordinates (type: ['vector<double>']) (optional: False): 

- **Pin 5** v_trsf (type: ['vector<double>']) (optional: False): translational and rotational shape functions

- **Pin 6** k_mat (type: ['field']) (optional: False): 

- **Pin 7** mass_mat (type: ['field']) (optional: False): 

- **Pin 8** c_mat (type: ['field']) (optional: False): 

- **Pin 9** rhs (type: ['field']) (optional: False): 

- **Pin 10** dn (type: ['vector<double>']) (optional: False): 

- **Pin 11** dr_cross_n (type: ['vector<double>']) (optional: False): 

- **Pin 12** drn (type: ['vector<double>']) (optional: False): 

- **Pin 13** dn_cross_n (type: ['vector<double>']) (optional: False): 

- **Pin 14** dnx_y (type: ['vector<double>']) (optional: False): 

- **Pin 15** dny_y (type: ['vector<double>']) (optional: False): 

- **Pin 16** dnz_y (type: ['vector<double>']) (optional: False): 

- **Pin 17** dyx_n (type: ['vector<double>']) (optional: False): 

- **Pin 18** dyy_n (type: ['vector<double>']) (optional: False): 

- **Pin 19** dyz_n (type: ['vector<double>']) (optional: False): 

- **Pin 20** dnxn (type: ['vector<double>']) (optional: False): 

- **Pin 21** dnyn (type: ['vector<double>']) (optional: False): 

- **Pin 22** dnzn (type: ['vector<double>']) (optional: False): 

- **Pin 23** file_path (type: ['string']) (optional: False): path with cms_rbd extension where the export occurs


## Outputs


- **Pin 0** data_sources (type: ['data_sources']): Data Source containing the cms_rbd file generated.


## Configurations


- **mutex** (type: ['bool']) (default: false): If this option is set to true, the shared memory is prevented from being simultaneously accessed by multiple threads.


## Scripting

- **category**: result
- **plugin**: core
- **scripting name**: write_cms_rbd_file
- **full name**: result.write_cms_rbd_file
- **internal name**: write_cms_rbd_file
- **license**: None