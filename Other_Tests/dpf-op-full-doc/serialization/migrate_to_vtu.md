# serialization:migrate to vtu

## Description

Extract all results from a datasources and exports them into vtu format. All the connected inputs are forwarded to the result providers operators.

## Inputs


- **Pin 0** time_scoping (type: ['scoping', 'vector<int32>']) (optional: True): time sets to export, default is all

- **Pin 3** streams_container (type: ['streams_container']) (optional: True): result file container allowed to be kept open to cache data

- **Pin 4** data_sources (type: ['data_sources']) (optional: False): result file path container, used if no streams are set

- **Pin 20** directory (type: ['string']) (optional: False): directory path

- **Pin 21** base_name (type: ['string']) (optional: True): vtu base file name, (default is file)

- **Pin 30** result (type: ['string']) (optional: True): if Operator's names are connected to this Pin, only these results are exported (else all available results are exported)

- **Pin 100** write_mode (type: ['string']) (optional: True): Available are rawbinarycompressed, rawbinary, base64appended, base64inline, ascii, default is (rawbinarycompressed)


## Outputs


- **Pin 0** path (type: ['data_sources']): list of output vtu file path


## Configurations


- **mutex** (type: ['bool']) (default: false): If this option is set to true, the shared memory is prevented from being simultaneously accessed by multiple threads.

- **permissive** (type: ['bool']) (default: true): If this option is set to true, warning checks (like unit or data sizes) won't be done.


## Scripting

- **category**: serialization
- **plugin**: vtk
- **scripting name**: None
- **full name**: None
- **internal name**: migrate_to_vtu
- **license**: None