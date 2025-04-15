# serialization:serialize to hdf5

## Description

This operator is deprecated: use 'hdf5::h5dpf::make_result_file' instead. Serialize the inputs in an hdf5 format.

## Inputs


| Input | Name| Expected type(s) | Required | Description |
|-------|-----|------|----------|-------------|
| **Pin 0** | file_path |[`string`](../getting-started/using-data-containers.md#string) | Yes | output file path with .h5 extension |
| **Pin 1** | export_floats |[`bool`](../getting-started/using-data-containers.md#bool) | No | converts double to float to reduce file size (default is true) |
| **Pin 2** | export_flat_vectors |[`bool`](../getting-started/using-data-containers.md#bool) | No | if true, vectors and matrices data are exported flat (x1,y1,z1,x2,y2,z2..) (default is false) |
| **Pin 3** | data | | Yes | only the data set explicitly to export is exported |

## Outputs

| Input | Name| Expected type(s) | Required | Description |
|-------|-----|------|----------|-------------|

## Configurations

| Name| Expected type(s) | Default value | Description |
|-----|------|----------|-------------|
| **Pin mutex** |[`bool`](../getting-started/using-data-containers.md#bool) | false | If this option is set to true, the shared memory is prevented from being simultaneously accessed by multiple threads. |

## Scripting

| Category| Plugin | Scripting name | Full name | Internal name | License |
|---------|--------|----------------|-----------|---------------|---------|
| **serialization** | core | serialize_to_hdf5 | serialization.serialize_to_hdf5 | serialize_to_hdf5 | None |
