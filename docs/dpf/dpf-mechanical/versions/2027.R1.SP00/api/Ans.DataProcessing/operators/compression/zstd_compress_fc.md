---
uid: Ans.DataProcessing.operators.compression.zstd_compress_fc
---

# *class* zstd_compress_fc(input_fc: object = None, zstd_level: object = None, num_threads: object = None, config: OperatorConfig = None)

Compresses a fields container with ZSTD compression algorithm.

available inputs: `input_fc` (FieldsContainer, CustomTypeFieldsContainer), `zstd_level` (Int32) (optional), `num_threads` (Int32) (optional)

available outputs: `compressed_fc` (AnyCollection), `output_bytes_size` (ulong)

**DPF Framework Reference:** [zstd_compress_fc operator specification](https://developer-a.synopsys.com/docs/dpf-framework-2027-r1/operator-specifications/compression/zstd_compress_fc.md)

**Parameters:**

* **input_fc**
* **zstd_level**
* **num_threads**
* **config**

**Example:**

```python
op = zstd_compress_fc()

op = zstd_compress_fc(input_fc=my_input_fc,zstd_level=my_zstd_level,num_threads=my_num_threads)
```

## Inputs

### input_fc

Fields container or custom type fields container of type "double" to compress.

**Type:** *LinkableInput*

### zstd_level

**Type:** *LinkableInput*

### num_threads

Number of threads for parallelization : from 0 to 20. Default = 4.

**Type:** *LinkableInput*

## Outputs

### compressed_fc

**Type:** *LinkableOutput*

### output_bytes_size

Total size of the compressed data in bytes (sum of the sizes in the vector of output pin 1).

**Type:** *LinkableOutput*

## Methods

## Properties

#### *property* inputs: InputSpec

*get/set*

#### *property* outputs: OutputSpec

*get/set*

#### *property* defaultConfig: Config

*get*
