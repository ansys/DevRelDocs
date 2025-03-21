---
category: result
plugin: mapdl
license: None
---

# result:cms dst table provider

## Description

Read CST table from a subfile.

## Inputs


- **Pin 4** data_sources (type: ['data_sources']) (optional: False): Data_sources (must contain at least one subfile).


## Outputs


- **Pin 0** dst_table (type: ['property_field']): returns integer values of the dst table


## Configurations


- **mutex** (type: ['bool']) (default: false): If this option is set to true, the shared memory is prevented from being simultaneously accessed by multiple threads.


## Scripting

- **category**: result
- **plugin**: mapdl
- **scripting name**: cms_dst_table_provider
- **full name**: result.cms_dst_table_provider
- **internal name**: cms_dst_table_provider
- **license**: None