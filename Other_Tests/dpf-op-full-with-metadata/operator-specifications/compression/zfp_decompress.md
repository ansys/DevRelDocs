---
category: compression
plugin: core
license: None
---

# compression:zfp decompression

## Description

zfp decompression using the information about compression written into the properties of the field(s)


## Inputs

| Input | Name | Expected type(s) | Description |
|-------|-------|------------------|-------------|
| <strong>Pin 0</strong> <br><span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  dataIn |[`custom_type_fields_container`](../../getting-started/using-data-containers.md#custom-type-fields-container) | custom type field container from zfp_compression operator to decompress |


## Outputs

| Output |  Name | Expected type(s) | Description |
|-------|------|------------------|-------------|
|  **Pin 0**| dataOut |[`field`](../../getting-started/using-data-containers.md#field), [`fields_container`](../../getting-started/using-data-containers.md#fields-container) | the output entity is a field or a fields container; it contains decompressed data |
|  **Pin 1**| decompress_speed |[`double`](../../getting-started/using-data-containers.md#double) | the output entity is a double, containing decompression speed (mb/sec) |

## Configurations

| Name| Expected type(s) | Default value | Description |
|-----|------|----------|-------------|
| **mutex** |[`bool`](../../getting-started/using-data-containers.md#bool) | false | If this option is set to true, the shared memory is prevented from being simultaneously accessed by multiple threads. |

## Scripting

 **Category**: compression

 **Plugin**: core

 **Scripting name**: zfp_decompress

 **Full name**: compression.zfp_decompress

 **Internal name**: zfp_decompress

 **License**: None
