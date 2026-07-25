---
uid: Ans.DataProcessing.operators.compression.zstd_decompress_fc
---

# *class* zstd_decompress_fc(compressed_input: object = None, config: OperatorConfig = None)

Decompresses a fields container compressed with ZSTD compression algorithm.

available inputs: `compressed_input` (AnyCollection)

available outputs: `decompressed_fc` (FieldsContainer ,CustomTypeFieldsContainer)

**DPF Framework Reference:** [zstd_decompress_fc operator specification](https://developer-a.synopsys.com/docs/dpf-framework-2027-r1/operator-specifications/compression/zstd_decompress_fc.md)

**Parameters:**

* **compressed_input**
* **config**

**Example:**

```python
op = zstd_decompress_fc()

op = zstd_decompress_fc(compressed_input=my_compressed_input)
```

## Inputs

### compressed_input

**Type:** *LinkableInput*

## Outputs

### decompressed_fc

Decompressed fields container or custom type fields container.

**Type:** *LinkableOutput*

## Methods

## Properties

#### *property* inputs: InputSpec

*get/set*

#### *property* outputs: OutputSpec

*get/set*

#### *property* defaultConfig: Config

*get*
