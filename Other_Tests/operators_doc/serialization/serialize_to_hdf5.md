---
category: serialization
plugin: core
license: None
---

# serialization:serialize to hdf5

## Description

This operator is deprecated: use 'hdf5::h5dpf::make_result_file' instead. Serialize the inputs in an hdf5 format.

## Inputs


- **Pin 0** file_path (type: ['string']) (optional: False): output file path with .h5 extension

- **Pin 1** export_floats (type: ['bool']) (optional: True): converts double to float to reduce file size (default is true)

- **Pin 2** export_flat_vectors (type: ['bool']) (optional: True): if true, vectors and matrices data are exported flat (x1,y1,z1,x2,y2,z2..) (default is false)

- **Pin 3** data (type: []) (optional: False): only the data set explicitly to export is exported


## Outputs



## Configurations


- **mutex** (type: ['bool']) (default: false): If this option is set to true, the shared memory is prevented from being simultaneously accessed by multiple threads.


## Scripting

- **category**: serialization
- **plugin**: core
- **scripting name**: serialize_to_hdf5
- **full name**: serialization.serialize_to_hdf5
- **internal name**: serialize_to_hdf5
- **license**: None