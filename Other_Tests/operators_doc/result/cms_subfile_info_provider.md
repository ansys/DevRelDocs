---
category: result
plugin: mapdl
license: None
---

# result:cms subfile info provider

## Description

Read required information from a subfile.

## Inputs


- **Pin 4** data_sources (type: ['data_sources']) (optional: False): Data_sources (must contain at least one subfile).

- **Pin 200** cms_subfile_data (type: ['bool']) (optional: False): If this pin i set to true, data are return in a field.


## Outputs


- **Pin 0** int32 (type: ['int32']): returns integer values in the order : unit system used, stiffness matrix present key, damping matrix present key, mass matrix present key, number of master nodes, number of virtual nodes

- **Pin 1** field (type: ['property_field']): returns integer values in the order : number of load vectors (nvects), number of nodes (nnod), number of virtual nodes (nvnodes), number of modes (nvmodes)


## Configurations


- **mutex** (type: ['bool']) (default: false): If this option is set to true, the shared memory is prevented from being simultaneously accessed by multiple threads.


## Scripting

- **category**: result
- **plugin**: mapdl
- **scripting name**: cms_subfile_info_provider
- **full name**: result.cms_subfile_info_provider
- **internal name**: cms_subfile_info_provider
- **license**: None