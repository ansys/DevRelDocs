---
uid: Ans.DataProcessing.operators.compression
---

# Ans.DataProcessing.operators.compression Namespace

## Classes

| Class | Description |
|-------|-------------|
| [apply_svd](Ans_DataProcessing_operators_compression_apply_svd.md) | Computes the coefficients (=U*Sigma) and VT components from SVD.   ///available inputs: field_contaner_to_compress (FieldsContainer), scalar_int (Int32) (optional), scalar_double (double) (optional), boolean (bool) (optional) |
| [apply_zfp](Ans_DataProcessing_operators_compression_apply_zfp.md) | Compressing input data using one of zfp compression algorithm modes.   ///available inputs: dataIn (Field, FieldsContainer), mode (string, Char), mode_parameter (Int32, double), dim (Int32) (optional), order (Int32) (optional), double_absthreshold (double) (optional), double_relthreshold (double) (optional) |
| [kmeans_clustering](Ans_DataProcessing_operators_compression_kmeans_clustering.md) | Apply kMeans clustering to group data depending on the data's non-linearity.   ///available inputs: clusters_number (Int32) (optional), formula (string) (optional), fields_container (FieldsContainer), component_number (Int32) (optional) |
| [quantization](Ans_DataProcessing_operators_compression_quantization.md) | Scales a field to a given precision threshold, then rounds all the values to the unit. |
| [quantization_fc](Ans_DataProcessing_operators_compression_quantization_fc.md) | Scales all the fields of a fields container to a given precision threshold, then rounds all the values to the unit. |
| [zfp_decompress](Ans_DataProcessing_operators_compression_zfp_decompress.md) | zfp decompression using the information about compression written into the properties of the field(s)   ///available inputs: dataIn (CustomTypeFieldsContainer) |
| [zstd_compress](Ans_DataProcessing_operators_compression_zstd_compress.md) | Compresses the data of a field with ZSTD compression algorithm.   ///available inputs: input_field (Field, CustomTypeField), zstd_level (Int32) (optional), num_threads (Int32) (optional) |
| [zstd_compress_fc](Ans_DataProcessing_operators_compression_zstd_compress_fc.md) | Compresses a fields container with ZSTD compression algorithm.   ///available inputs: input_fc (FieldsContainer, CustomTypeFieldsContainer), zstd_level (Int32) (optional), num_threads (Int32) (optional) |
| [zstd_decompress](Ans_DataProcessing_operators_compression_zstd_decompress.md) | Decompresses a field compressed with ZSTD compression algorithm.   ///available inputs: compressed_input (GenericDataContainer) |
| [zstd_decompress_fc](Ans_DataProcessing_operators_compression_zstd_decompress_fc.md) | Decompresses a fields container compressed with ZSTD compression algorithm.   ///available inputs: compressed_input (AnyCollection) |
