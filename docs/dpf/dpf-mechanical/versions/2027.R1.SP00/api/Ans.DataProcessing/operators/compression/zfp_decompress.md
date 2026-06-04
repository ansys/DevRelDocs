---
uid: Ans.DataProcessing.operators.compression.zfp_decompress
---

# *class* zfp_decompress(dataIn: object = None, config: OperatorConfig = None)

zfp decompression using the information about compression written into the properties of the field(s)

available inputs: `dataIn` (CustomTypeFieldsContainer)

available outputs: `dataOut` (Field ,FieldsContainer), `decompress_speed` (double)

**DPF Framework Reference:** [zfp_decompress operator specification](https://developer.ansys.com/docs/dpf-framework-2027-r1/operator-specifications/compression/zfp_decompress.md)

**Parameters:**

* **dataIn**
* **config**

**Example:**

```python
op = zfp_decompress()

op = zfp_decompress(dataIn=my_dataIn)
```

## Inputs

### dataIn

custom type field container from zfp_compression operator to decompress

**Type:** *LinkableInput*

## Outputs

### dataOut

the output entity is a field or a fields container; it contains decompressed data

**Type:** *LinkableOutput*

### decompress_speed

the output entity is a double, containing decompression speed (mb/sec)

**Type:** *LinkableOutput*

## Methods

## Properties

#### *property* inputs: InputSpec

*get/set*

#### *property* outputs: OutputSpec

*get/set*

#### *property* defaultConfig: Config

*get*
