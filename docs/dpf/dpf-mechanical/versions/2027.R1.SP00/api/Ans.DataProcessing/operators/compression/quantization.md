---
uid: Ans.DataProcessing.operators.compression.quantization
---

# *class* quantization(input_field: object = None, threshold: object = None, config: OperatorConfig = None)

Scales a field to a given precision threshold, then rounds all the values to the unit.

The output of the quantization operation is :

\\[ q(x) = \left\lfloor\frac{x}{2\varepsilon} + \frac{1}{2}\right\rfloor \\]

The truncated value in the original scale has to be computed by doing \\( 2\varepsilon q(x) \\).

To truncate a number to \\(n\\) decimal places, the threshold must be chosen as \\(10^{-n}\\).

available inputs: `input_field` (Field), `threshold` (double, Field)

available outputs: `output_field` (Field)

**DPF Framework Reference:** [quantization operator specification](https://developer.ansys.com/docs/dpf-framework-2027-r1/operator-specifications/compression/quantization.md)

**Parameters:**

* **input_field**
* **threshold**
* **config**

**Example:**

```python
op = quantization()

op = quantization(input_field=my_input_field,threshold=my_threshold)
```

## Inputs

### input_field

Field to quantize.

**Type:** *LinkableInput*

### threshold

**Type:** *LinkableInput*

## Outputs

### output_field

Quantized field.

**Type:** *LinkableOutput*

## Methods

## Properties

#### *property* inputs: InputSpec

*get/set*

#### *property* outputs: OutputSpec

*get/set*

#### *property* defaultConfig: Config

*get*
