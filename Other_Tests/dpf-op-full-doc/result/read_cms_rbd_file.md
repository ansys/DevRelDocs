# result:read cms_rbd file

## Description

Read the invariant terms and the model data from a cms_rbd file

## Inputs


- **Pin 0** in_cms_rbd_file_path (type: ['string']) (optional: False): file name with cms_rbd extension where to read the input cms_rbd file.


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
- **scripting name**: read_cms_rbd_file
- **full name**: result.read_cms_rbd_file
- **internal name**: read_cms_rbd_file
- **license**: None