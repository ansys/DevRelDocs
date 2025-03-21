---
category: result
plugin: mapdl
license: None
---

# result:mapdl run

## Description

Solve in mapdl a dat/inp file and returns a datasources with the rst file.

## Inputs


- **Pin 0** mapdl_exe_path (type: ['string']) (optional: True): 

- **Pin 1** working_dir (type: ['string']) (optional: True): 

- **Pin 2** number_of_processes (type: ['int32']) (optional: True): Set the number of MPI processes used for resolution (default is 2)

- **Pin 4** data_sources (type: ['data_sources']) (optional: False): data sources containing the input file.

- **Pin 5** server_mode (type: ['bool']) (optional: True): used when a user includes commands in the input file allowing to launch DPF server inside MAPDL to interact with MAPDL using DPF client API


## Outputs


- **Pin 0** data_sources (type: ['data_sources']): returns the data source if the server_mode pin is not set to yes

- **Pin 1** ip (type: ['string']): returns the Ip if the server_mode pin is set to yes

- **Pin 2** port (type: ['string']): returns a port when the server mode pin is set to yes


## Configurations


- **mutex** (type: ['bool']) (default: false): If this option is set to true, the shared memory is prevented from being simultaneously accessed by multiple threads.


## Scripting

- **category**: result
- **plugin**: mapdl
- **scripting name**: mapdl.run
- **full name**: result.mapdl.run
- **internal name**: mapdl::run
- **license**: None