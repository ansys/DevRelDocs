---
uid: Ans.DataProcessing.operators.compression.zstd_decompress
---

# *class* zstd_decompress(compressed_input: object = None, config: OperatorConfig = None)

Decompresses a field compressed with ZSTD compression algorithm.

available inputs: `compressed_input` (GenericDataContainer)

available outputs: `decompressed_field` (Field ,CustomTypeField)

**DPF Framework Reference:** [zstd_decompress operator specification](https://developer-a.synopsys.com/docs/dpf-framework-2027-r1/operator-specifications/compression/zstd_decompress.md)

**Parameters:**

* **compressed_input**
* **config**

**Example:**

```python
op = zstd_decompress()

op = zstd_decompress(compressed_input=my_compressed_input)
```

## Inputs

### compressed_input

**Type:** *LinkableInput*

## Outputs

### decompressed_field

Decompressed field or custom type field.

**Type:** *LinkableOutput*

## Methods

## Properties

#### *property* inputs: InputSpec

*get/set*

#### *property* outputs: OutputSpec

*get/set*

#### *property* defaultConfig: Config

*get*
