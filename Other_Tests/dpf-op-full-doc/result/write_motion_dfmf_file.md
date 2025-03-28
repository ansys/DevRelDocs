# result:write motion dfmf file

## Description

Write the invariant terms and the model data in a motion dfmf file

## Inputs


- **Pin 0** model_data (type: ['property_field']) (optional: False): data describing the finite element model

- **Pin 1** mode_shapes (type: ['fields_container']) (optional: False): FieldsContainers containing the mode shapes, which are CST and NOR for the cms method

- **Pin 2** lumped_mass (type: ['fields_container']) (optional: False): FieldsContainers containing the lumped mass

- **Pin 3** field_coordinates (type: ['field']) (optional: False): coordinates of all nodes

- **Pin 4** nod (type: ['vector<int32>']) (optional: False): 

- **Pin 5** used_node_index (type: ['vector<int32>']) (optional: False): 

- **Pin 6** eigenvalue (type: ['vector<double>']) (optional: False): 

- **Pin 7** translational_mode_shape (type: ['vector<double>']) (optional: False): 

- **Pin 8** rotational_mode_shape (type: ['vector<double>']) (optional: False): 

- **Pin 9** invrt_1 (type: ['double']) (optional: False): 

- **Pin 10** invrt_2 (type: ['vector<double>']) (optional: False): 

- **Pin 11** invrt_3 (type: ['vector<double>']) (optional: False): 

- **Pin 12** invrt_4 (type: ['vector<double>']) (optional: False): 

- **Pin 13** invrt_5 (type: ['vector<double>']) (optional: False): 

- **Pin 14** invrt_6 (type: ['vector<double>']) (optional: False): 

- **Pin 15** invrt_7 (type: ['vector<double>']) (optional: False): 

- **Pin 16** invrt_8 (type: ['vector<double>']) (optional: False): 

- **Pin 17** dfmffile_path (type: ['string']) (optional: False): path with motion dfmf extension where the export occurs

- **Pin 18** rstfile_path (type: ['string']) (optional: False): 


## Outputs


- **Pin 0** dfmf_data_source (type: ['data_sources']): Data Source containing the dfmf file generated.


## Configurations


- **mutex** (type: ['bool']) (default: false): If this option is set to true, the shared memory is prevented from being simultaneously accessed by multiple threads.


## Scripting

- **category**: result
- **plugin**: core
- **scripting name**: write_motion_dfmf_file
- **full name**: result.write_motion_dfmf_file
- **internal name**: write_motion_dfmf_file
- **license**: None