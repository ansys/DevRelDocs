# result:migrate to h5dpf

## Description

Read mesh properties from the results files contained in the streams or data sources and make those properties available through a mesh selection manager in output.

## Inputs


- **Pin -5** dataset_size_compression_threshold (type: ['int32']) (optional: True): Integer value that defines the minimum dataset size (in bytes) to use h5 native compression Applicable for arrays of floats, doubles and integers.

- **Pin -2** h5_native_compression (type: ['int32']) (optional: True): Integer value that defines the h5 native compression used 0: No Compression (default)1-9: GZIP Level Compression : 9 gives us maximum compression but at the slowest speed. 

- **Pin -1** export_floats (type: ['bool']) (optional: True): converts double to float to reduce file size (default is true)

- **Pin 0** filename (type: ['string']) (optional: False): filename of the migrated file

- **Pin 1** comma_separated_list_of_results (type: ['string']) (optional: True): list of results (source operator names) separated by semicolons that will be stored. (Example: U;S;EPEL). If empty, all available results will be converted.  

- **Pin 2** all_time_sets (type: ['bool']) (optional: True): default is false

- **Pin 3** streams_container (type: ['streams_container']) (optional: True): streams (result file container) (optional)

- **Pin 4** data_sources (type: ['data_sources']) (optional: True): if the stream is null then we need to get the file path from the data sources

- **Pin 6** compression_workflow (type: ['workflow', 'generic_data_container']) (optional: True): BETA Option: Applies input compression workflow. User can input a GenericDataContainer that will map a compression workflow to a result name. Example of Map: {{ default: wf1}, {EUL: wf2}, {ENG_SE: wf3}}

- **Pin 7** filtering_workflow (type: ['workflow', 'generic_data_container']) (optional: True): Applies input filtering workflow. User can input a GenericDataContainer of the format described for Pin(6) that will map a filtering workflow to a result name.


## Outputs


- **Pin 0** migrated_file (type: ['data_sources']): 


## Configurations


- **mutex** (type: ['bool']) (default: false): If this option is set to true, the shared memory is prevented from being simultaneously accessed by multiple threads.


## Scripting

- **category**: result
- **plugin**: core
- **scripting name**: migrate_to_h5dpf
- **full name**: result.migrate_to_h5dpf
- **internal name**: hdf5::h5dpf::migrate_file
- **license**: None