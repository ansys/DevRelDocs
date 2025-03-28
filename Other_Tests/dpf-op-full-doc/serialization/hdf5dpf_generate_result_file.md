# serialization:hdf5dpf generate result file

## Description

Generate a dpf result file from provided information.

## Inputs


- **Pin -5** dataset_size_compression_threshold (type: ['int32']) (optional: True): Integer value that defines the minimum dataset size (in bytes) to use h5 native compression Applicable for arrays of floats, doubles and integers.

- **Pin -2** h5_native_compression (type: ['int32']) (optional: True): Integer value that defines the h5 native compression used 0: No Compression (default)1-9: GZIP Level Compression : 9 gives us maximum compression but at the slowest speed. 

- **Pin -1** export_floats (type: ['bool']) (optional: True): converts double to float to reduce file size (default is true)

- **Pin 0** filename (type: ['string']) (optional: False): name of the output file that will be generated (utf8).

- **Pin 1** mesh_provider_out (type: ['abstract_meshed_region']) (optional: True): defines the MeshedRegion that is exported and provided by MeshProvider.

- **Pin 2** time_freq_support_out (type: ['time_freq_support']) (optional: True): defines the TimeFreqSupport that is exported and provided by TimeFreqSupportProvider.

- **Pin 3** ansys_unit_system_id (type: ['int32', 'result_info']) (optional: True): defines the unit system the results are exported with. A Result info can be input to also export Physics Type and Analysis Type.

- **Pin 4** input_name (type: ['string', 'any']) (optional: True): Set of even and odd pins to serialize results. Odd pins (4, 6, 8...) are strings, and they represent the names of the results to be serialized. Even pins (5, 7, 9...) are DPF types, and they represent the results to be serialized. They should go in pairs (for each result name, there should be a result) and connected sequentially.


## Outputs


- **Pin 0** data_sources (type: ['data_sources']): data_sources filed with the H5 generated file path.


## Configurations


- **mutex** (type: ['bool']) (default: false): If this option is set to true, the shared memory is prevented from being simultaneously accessed by multiple threads.


## Scripting

- **category**: serialization
- **plugin**: core
- **scripting name**: hdf5dpf_generate_result_file
- **full name**: serialization.hdf5dpf_generate_result_file
- **internal name**: hdf5::h5dpf::make_result_file
- **license**: None