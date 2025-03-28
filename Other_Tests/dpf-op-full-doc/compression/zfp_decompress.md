# compression:zfp decompression

## Description

zfp decompression using the information about compression written into the properties of the field(s)

## Inputs


- **Pin 0** dataIn (type: ['custom_type_fields_container']) (optional: False): custom type field container from zfp_compression operator to decompress


## Outputs


- **Pin 0** dataOut (type: ['field', 'fields_container']): the output entity is a field or a fields container; it contains decompressed data

- **Pin 1** decompress_speed (type: ['double']): the output entity is a double, containing decompression speed (mb/sec)


## Configurations


- **mutex** (type: ['bool']) (default: false): If this option is set to true, the shared memory is prevented from being simultaneously accessed by multiple threads.


## Scripting

- **category**: compression
- **plugin**: core
- **scripting name**: zfp_decompress
- **full name**: compression.zfp_decompress
- **internal name**: zfp_decompress
- **license**: None