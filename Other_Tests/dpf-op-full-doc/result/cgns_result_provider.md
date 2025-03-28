# result:cgns result provider

## Description

Read/compute names result from result streams.

## Inputs


- **Pin 0** time_scoping (type: ['scoping', 'vector<int32>']) (optional: True): time/freq (use doubles or field), time/freq set ids (use ints or scoping) or time/freq step ids (use scoping with TimeFreq_steps location) required in output

- **Pin 1** mesh_scoping (type: ['scoping', 'scopings_container']) (optional: True): nodes or elements scoping required in output. The scoping's location indicates whether nodes or elements are asked. Using scopings container enables to split the result fields container in domains

- **Pin 3** streams_container (type: ['streams_container']) (optional: True): result file container allowed to be kept open to cache data

- **Pin 4** data_sources (type: ['data_sources']) (optional: False): result file path container, used if no streams are set

- **Pin 17** result_name (type: ['string']) (optional: True): name of the result to read. By default the name of the operator is taken.

- **Pin 25** region_scoping (type: ['scoping', 'vector<int32>', 'int32']) (optional: True): Optional zone name/Id of the mesh.


## Outputs


- **Pin 0** fields (type: ['fields_container']): Results


## Configurations


- **mutex** (type: ['bool']) (default: false): If this option is set to true, the shared memory is prevented from being simultaneously accessed by multiple threads.


## Scripting

- **category**: result
- **plugin**: cgns
- **scripting name**: cgns_result_provider
- **full name**: result.cgns_result_provider
- **internal name**: cgns::cgns::result_provider
- **license**: None