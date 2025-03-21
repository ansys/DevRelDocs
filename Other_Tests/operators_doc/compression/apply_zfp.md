---
category: compression
plugin: core
license: None
---

# compression:apply zfp

## Description

Compressing input data using one of zfp compression algorithm modes.

## Inputs


- **Pin 0** dataIn (type: ['field', 'fields_container']) (optional: False): field or fields container to be compressed

- **Pin 1** mode (type: ['string', 'char']) (optional: False): zfp mode: fixed-rate ('r'), fixed-precision ('p'), fixed-accuracy ('a')

- **Pin 2** mode_parameter (type: ['int32', 'double']) (optional: False): mode-corresponding parameter: rate (double) / precision (int) / accuracy (double)

- **Pin 3** dim (type: ['int32']) (optional: True): dimension (1D/2D/3D) for data organization before the compression (int; default: 2)

- **Pin 4** order (type: ['int32']) (optional: True): xyz dimensions order, where x (row) corresponds to number of elementary data, y (col) - number of time steps, z - number of components (applicable only for 3d data) : 0=xyz, 1=yxz (int; default: 0)

- **Pin 5** double_absthreshold (type: ['double']) (optional: True): Double positive small value. All the values smaller than max(small value, max(vi) * relative threshold) are considered as zero values, (default value: 1.0e-18).

- **Pin 6** double_relthreshold (type: ['double']) (optional: True): Double relative threshold. Values smaller than (v1 - v2) < max(small value, v1 * relativeTol) are considered identical (default value: 1.0e-10).


## Outputs


- **Pin 0** compress_speed (type: ['double']): the output entity is a double, containing compression speed of the input data: for ElementalNodal location - [elements/sec], for Nodal location - [nodes/sec]

- **Pin 1** compress_ratio (type: ['double']): the output entity is a double, containing compression rate = initial/compressed

- **Pin 2** dataOut (type: ['custom_type_fields_container']): the output entity is a 'custom type field container';                     each output field containing compressed results corresponding to one component data (ie. input vector field/fc contains 3 components will give 3 output fields), this is not the case when input pin3 is set to 3, all components will be compressed into one field.


## Configurations


- **mutex** (type: ['bool']) (default: false): If this option is set to true, the shared memory is prevented from being simultaneously accessed by multiple threads.

- **num_threads** (type: ['int32']) (default: 0): Number of threads to use to run in parallel

- **run_in_parallel** (type: ['bool']) (default: true): Loops are allowed to run in parallel if the value of this config is set to true.

- **use_cuda** (type: ['bool']) (default: false): If this option is set to true, zfp fixed-rate parallel (de)compression will use CUDA. 


## Scripting

- **category**: compression
- **plugin**: core
- **scripting name**: apply_zfp
- **full name**: compression.apply_zfp
- **internal name**: zfp
- **license**: None