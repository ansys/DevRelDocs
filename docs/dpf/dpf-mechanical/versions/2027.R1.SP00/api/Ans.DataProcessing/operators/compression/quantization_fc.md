---
uid: Ans.DataProcessing.operators.compression.quantization_fc
---

# *class* quantization_fc(input_fc: object = None, threshold: object = None, config: OperatorConfig = None)

Scales all the fields of a fields container to a given precision threshold, then rounds all the values to the unit.

The output of the quantization operation is :

\\[q(x) = \left\lfloor\frac{x}{2\varepsilon} + \frac{1}{2}\right\rfloor \\]

The truncated value in the original scale has to be computed by doing \\(2\varepsilon q(x) \\).

To truncate a number to \\(n\\) decimal places, the threshold must be chosen as \\(10^{-n}\\).

available inputs: `input_fc` (FieldsContainer), `threshold` (double, Field, FieldsContainer)

available outputs: `output_fc` (FieldsContainer)

**DPF Framework Reference:** [quantization_fc operator specification](https://developer.ansys.com/docs/dpf-framework-2027-r1/operator-specifications/compression/quantization_fc.md)

**Parameters:**

* **input_fc**
* **threshold**
* **config**

**Example:**

```python
op = quantization_fc()

op = quantization_fc(input_fc=my_input_fc,threshold=my_threshold)
```

## Inputs

### input_fc

Fields container to quantized.

**Type:** *LinkableInput*

### threshold

**Type:** *LinkableInput*

## Outputs

### output_fc

Quantized fields container.

**Type:** *LinkableOutput*

## Methods

## Properties

#### *property* inputs: InputSpec

*get/set*

#### *property* outputs: OutputSpec

*get/set*

#### *property* defaultConfig: Config

*get*
