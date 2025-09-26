---
category: serialization
plugin: core
license: None
---

# serialization:serialize to hdf5

**Version: 0.0.0**

## Description

This operator is deprecated: use 'hdf5::h5dpf::make_result_file' instead. Serialize the inputs in an hdf5 format.

## Inputs

| Input | Name | Expected type(s) | Description |
|-------|-------|------------------|-------------|
| <strong>Pin 0</strong> <br><span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  file_path |[`string`](../../core-concepts/dpf-types.md#standard-types) | output file path with .h5 extension |
| <strong>Pin 1</strong>|  export_floats |[`bool`](../../core-concepts/dpf-types.md#standard-types) | converts double to float to reduce file size (default is true) |
| <strong>Pin 2</strong>|  export_flat_vectors |[`bool`](../../core-concepts/dpf-types.md#standard-types) | if true, vectors and matrices data are exported flat (x1,y1,z1,x2,y2,z2..) (default is false) |
| <strong>Pin 3</strong> <br><span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  data | | only the data set explicitly to export is exported |

## Outputs

| Output |  Name | Expected type(s) | Description |
|-------|------|------------------|-------------|

## Configurations

| Name| Expected type(s) | Default value | Description |
|-----|------|----------|-------------|
| **mutex** |[`bool`](../../core-concepts/dpf-types.md#standard-types) | false | If this option is set to true, the shared memory is prevented from being simultaneously accessed by multiple threads. |

## Scripting

 **Category**: serialization

 **Plugin**: core

 **Scripting name**: serialize_to_hdf5

 **Full name**: serialization.serialize_to_hdf5

 **Internal name**: serialize_to_hdf5

 **License**: None


## Changelog

- Version 0.0.0: Initial release.