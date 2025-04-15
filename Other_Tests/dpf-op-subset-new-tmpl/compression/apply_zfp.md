# compression:apply zfp

## Description

Compressing input data using one of zfp compression algorithm modes.

## Inputs


| Input | Name| Expected type(s) | Required | Description |
|-------|-----|------|----------|-------------|
| **Pin 0** | dataIn |[`field`](../getting-started/using-data-containers.md#field), [`fields_container`](../getting-started/using-data-containers.md#fields-container) | Yes | field or fields container to be compressed |
| **Pin 1** | mode |[`string`](../getting-started/using-data-containers.md#string), [`char`](../getting-started/using-data-containers.md#char) | Yes | zfp mode: fixed-rate ('r'), fixed-precision ('p'), fixed-accuracy ('a') |
| **Pin 2** | mode_parameter |[`int32`](../getting-started/using-data-containers.md#int32), [`double`](../getting-started/using-data-containers.md#double) | Yes | mode-corresponding parameter: rate (double) / precision (int) / accuracy (double) |
| **Pin 3** | dim |[`int32`](../getting-started/using-data-containers.md#int32) | No | dimension (1D/2D/3D) for data organization before the compression (int; default: 2) |
| **Pin 4** | order |[`int32`](../getting-started/using-data-containers.md#int32) | No | xyz dimensions order, where x (row) corresponds to number of elementary data, y (col) - number of time steps, z - number of components (applicable only for 3d data) : 0=xyz, 1=yxz (int; default: 0) |
| **Pin 5** | double_absthreshold |[`double`](../getting-started/using-data-containers.md#double) | No | Double positive small value. All the values smaller than max(small value, max(vi) * relative threshold) are considered as zero values, (default value: 1.0e-18). |
| **Pin 6** | double_relthreshold |[`double`](../getting-started/using-data-containers.md#double) | No | Double relative threshold. Values smaller than (v1 - v2) < max(small value, v1 * relativeTol) are considered identical (default value: 1.0e-10). |

## Outputs

| Input | Name| Expected type(s) | Required | Description |
|-------|-----|------|----------|-------------|
| **Pin 0** | compress_speed |[`double`](../getting-started/using-data-containers.md#double) | Yes | the output entity is a double, containing compression speed of the input data: for ElementalNodal location - [elements/sec], for Nodal location - [nodes/sec] |
| **Pin 1** | compress_ratio |[`double`](../getting-started/using-data-containers.md#double) | Yes | the output entity is a double, containing compression rate = initial/compressed |
| **Pin 2** | dataOut |[`custom_type_fields_container`](../getting-started/using-data-containers.md#custom-type-fields-container) | Yes | the output entity is a 'custom type field container';                     each output field containing compressed results corresponding to one component data (ie. input vector field/fc contains 3 components will give 3 output fields), this is not the case when input pin3 is set to 3, all components will be compressed into one field. |

## Configurations

| Name| Expected type(s) | Default value | Description |
|-----|------|----------|-------------|
| **Pin mutex** |[`bool`](../getting-started/using-data-containers.md#bool) | false | If this option is set to true, the shared memory is prevented from being simultaneously accessed by multiple threads. |
| **Pin num_threads** |[`int32`](../getting-started/using-data-containers.md#int32) | 0 | Number of threads to use to run in parallel |
| **Pin run_in_parallel** |[`bool`](../getting-started/using-data-containers.md#bool) | true | Loops are allowed to run in parallel if the value of this config is set to true. |
| **Pin use_cuda** |[`bool`](../getting-started/using-data-containers.md#bool) | false | If this option is set to true, zfp fixed-rate parallel (de)compression will use CUDA.  |

## Scripting

| Category| Plugin | Scripting name | Full name | Internal name | License |
|---------|--------|----------------|-----------|---------------|---------|
| **compression** | core | apply_zfp | compression.apply_zfp | zfp | None |
