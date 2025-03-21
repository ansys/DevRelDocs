---
category: serialization
plugin: vtk
license: None
---

# serialization:migrate to vtk

## Description

Take an input data sources or streams and convert as much data as possible to vtk.

## Inputs


- **Pin 0** output_filename (type: ['string']) (optional: True): 

- **Pin 3** streams_container (type: ['streams_container']) (optional: True): 

- **Pin 4** data_sources (type: ['data_sources']) (optional: True): 


## Outputs


- **Pin 0** data_sources (type: ['data_sources']): Generated output vtk file


## Configurations


- **mutex** (type: ['bool']) (default: false): If this option is set to true, the shared memory is prevented from being simultaneously accessed by multiple threads.


## Scripting

- **category**: serialization
- **plugin**: vtk
- **scripting name**: migrate_file_to_vtk
- **full name**: serialization.migrate_file_to_vtk
- **internal name**: vtk::migrate_file
- **license**: None