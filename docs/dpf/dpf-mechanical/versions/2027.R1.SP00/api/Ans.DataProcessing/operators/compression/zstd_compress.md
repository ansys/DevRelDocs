---
uid: Ans.DataProcessing.operators.compression.zstd_compress
---

# *class* zstd_compress(input_field: object = None, zstd_level: object = None, num_threads: object = None, config: OperatorConfig = None)

Compresses the data of a field with ZSTD compression algorithm.

available inputs: `input_field` (Field, CustomTypeField), `zstd_level` (Int32) (optional), `num_threads` (Int32) (optional)

available outputs: `compressed_output` (GenericDataContainer), `output_bytes_size` (ulong)

**DPF Framework Reference:** [zstd_compress operator specification](https://developer-a.synopsys.com/docs/dpf-framework-2027-r1/operator-specifications/compression/zstd_compress.md)

**Parameters:**

* **input_field**
* **zstd_level**
* **num_threads**
* **config**

**Example:**

```python
op = zstd_compress()

op = zstd_compress(input_field=my_input_field,zstd_level=my_zstd_level,num_threads=my_num_threads)
```

## Inputs

### input_field

Field or custom type field of type "double" to compress.

**Type:** *LinkableInput*

### zstd_level

**Type:** *LinkableInput*

### num_threads

Number of threads for parallelization : from 0 to 20. Default = 4.

**Type:** *LinkableInput*

## Outputs

### compressed_output

**Type:** *LinkableOutput*

### output_bytes_size

Total size of compressed data in bytes.

**Type:** *LinkableOutput*

## Methods

## Properties

#### *property* inputs: InputSpec

*get/set*

#### *property* outputs: OutputSpec

*get/set*

#### *property* defaultConfig: Config

*get*
