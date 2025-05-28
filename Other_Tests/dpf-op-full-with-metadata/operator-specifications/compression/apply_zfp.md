---
category: compression
plugin: core
license: None
---

# compression:apply zfp

## Description

Compressing input data using one of zfp compression algorithm modes.

### Plugin

core

## Inputs

| Input | Name | Expected type(s) | Description |
|-------|-------|------------------|-------------|
| <strong>Pin 0</strong> <span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  dataIn |[`field`](../../getting-started/using-data-containers.md#field), [`fields_container`](../../getting-started/using-data-containers.md#fields-container) | field or fields container to be compressed |
| <strong>Pin 1</strong> <span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  mode |[`string`](../../getting-started/using-data-containers.md#string), [`char`](../../getting-started/using-data-containers.md#char) | zfp mode: fixed-rate ('r'), fixed-precision ('p'), fixed-accuracy ('a') |
| <strong>Pin 2</strong> <span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  mode_parameter |[`int32`](../../getting-started/using-data-containers.md#int32), [`double`](../../getting-started/using-data-containers.md#double) | mode-corresponding parameter: rate (double) / precision (int) / accuracy (double) |
| <strong>Pin 3</strong>|  dim |[`int32`](../../getting-started/using-data-containers.md#int32) | dimension (1D/2D/3D) for data organization before the compression (int; default: 2) |
| <strong>Pin 4</strong>|  order |[`int32`](../../getting-started/using-data-containers.md#int32) | xyz dimensions order, where x (row) corresponds to number of elementary data, y (col) - number of time steps, z - number of components (applicable only for 3d data) : 0=xyz, 1=yxz (int; default: 0) |
| <strong>Pin 5</strong>|  double_absthreshold |[`double`](../../getting-started/using-data-containers.md#double) | Double positive small value. All the values smaller than max(small value, max(vi) * relative threshold) are considered as zero values, (default value: 1.0e-18). |
| <strong>Pin 6</strong>|  double_relthreshold |[`double`](../../getting-started/using-data-containers.md#double) | Double relative threshold. Values smaller than (v1 - v2) < max(small value, v1 * relativeTol) are considered identical (default value: 1.0e-10). |


## Outputs

| Output |  Name | Expected type(s) | Description |
|-------|------|------------------|-------------|
| <strong>Pin 0</strong> <span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span> | compress_speed |[`double`](../../getting-started/using-data-containers.md#double) | the output entity is a double, containing compression speed of the input data: for ElementalNodal location - [elements/sec], for Nodal location - [nodes/sec] |
| <strong>Pin 1</strong> <span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span> | compress_ratio |[`double`](../../getting-started/using-data-containers.md#double) | the output entity is a double, containing compression rate = initial/compressed |
| <strong>Pin 2</strong> <span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span> | dataOut |[`custom_type_fields_container`](../../getting-started/using-data-containers.md#custom-type-fields-container) | the output entity is a 'custom type field container';                     each output field containing compressed results corresponding to one component data (ie. input vector field/fc contains 3 components will give 3 output fields), this is not the case when input pin3 is set to 3, all components will be compressed into one field. |

## Configurations

| Name| Expected type(s) | Default value | Description |
|-----|------|----------|-------------|
| **mutex** |[`bool`](../../getting-started/using-data-containers.md#bool) | false | If this option is set to true, the shared memory is prevented from being simultaneously accessed by multiple threads. |
| **num_threads** |[`int32`](../../getting-started/using-data-containers.md#int32) | 0 | Number of threads to use to run in parallel |
| **run_in_parallel** |[`bool`](../../getting-started/using-data-containers.md#bool) | true | Loops are allowed to run in parallel if the value of this config is set to true. |
| **use_cuda** |[`bool`](../../getting-started/using-data-containers.md#bool) | false | If this option is set to true, zfp fixed-rate parallel (de)compression will use CUDA.  |

## Scripting

- Category: compression
- Plugin: core
- Scripting name: apply_zfp
- Full name: compression.apply_zfp
- Internal name: zfp
- License: None
  