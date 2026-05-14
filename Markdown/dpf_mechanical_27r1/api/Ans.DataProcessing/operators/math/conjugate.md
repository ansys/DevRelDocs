---
uid: Ans.DataProcessing.operators.math.conjugate
---

# *class* conjugate(fields_container: object = None, config: OperatorConfig = None)

Computes the [complex conjugate](https://en.wikipedia.org/wiki/Complex_conjugate)

$\bar{z}[i] = \mathrm{Re}[i] - j \cdot \mathrm{Im}[i]$ for each value in a complex-valued fields container

(the imaginary part is negated).

Input and output containers have the same structure.

available inputs: `fields_container` (FieldsContainer)

available outputs: `fields_container` (FieldsContainer)

**DPF Framework Reference:** [conjugate operator specification](https://developer.ansys.com/docs/dpf-framework-2027-r1/operator-specifications/math/conjugate.md)

**Parameters:**

* **fields_container**
* **config**

**Example:**

```python
op = conjugate()

op = conjugate(fields_container=my_fields_container)
```

## Inputs

### fields_container

Complex-valued fields container with real (complex label 0) and imaginary (complex label 1) part fields.

**Type:** *LinkableInput*

## Outputs

### fields_container

Fields container with conjugate values; the imaginary-part fields carry negated data.

**Type:** *LinkableOutput*

## Methods

## Properties

#### *property* inputs: InputSpec

*get/set*

#### *property* outputs: OutputSpec

*get/set*

#### *property* defaultConfig: Config

*get*
