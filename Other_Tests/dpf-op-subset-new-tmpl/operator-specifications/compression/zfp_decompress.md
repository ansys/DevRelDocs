# compression:zfp decompression

## Description

zfp decompression using the information about compression written into the properties of the field(s)

## Inputs


| Input | Name| Expected type(s) | Required | Description |
|-------|-----|------|----------|-------------|
| **Pin 0** | dataIn |[`custom_type_fields_container`](../../getting-started/using-data-containers.md#custom-type-fields-container) | Yes | custom type field container from zfp_compression operator to decompress |

## Outputs

| Input | Name| Expected type(s) | Required | Description |
|-------|-----|------|----------|-------------|
| **Pin 0** | dataOut |[`field`](../../getting-started/using-data-containers.md#field), [`fields_container`](../../getting-started/using-data-containers.md#fields-container) | Yes | the output entity is a field or a fields container; it contains decompressed data |
| **Pin 1** | decompress_speed |[`double`](../../getting-started/using-data-containers.md#double) | Yes | the output entity is a double, containing decompression speed (mb/sec) |

## Configurations

| Name| Expected type(s) | Default value | Description |
|-----|------|----------|-------------|
| **Pin mutex** |[`bool`](../../getting-started/using-data-containers.md#bool) | false | If this option is set to true, the shared memory is prevented from being simultaneously accessed by multiple threads. |

## Scripting

| Category| Plugin | Scripting name | Full name | Internal name | License |
|---------|--------|----------------|-----------|---------------|---------|
| **compression** | core | zfp_decompress | compression.zfp_decompress | zfp_decompress | None |
