---
uid: Ans.DataProcessing.operators.math.phase_fc
---

# *class* phase_fc(fields_container: object = None, config: OperatorConfig = None)

Computes the [argument](https://en.wikipedia.org/wiki/Argument_(complex_analysis)) (phase angle)

$\mathrm{atan2}(\mathrm{Im}[i],\, \mathrm{Re}[i])$ in radians for each complex-valued field pair

in the input fields container, where pairs are matched by complex label.

If no imaginary part is found for a real field, a zero-valued field is produced.

available inputs: `fields_container` (FieldsContainer)

available outputs: `fields_container` (FieldsContainer)

**DPF Framework Reference:** [phase_fc operator specification](https://developer.ansys.com/docs/dpf-framework-2027-r1/operator-specifications/math/phase_fc.md)

**Parameters:**

* **fields_container**
* **config**

**Example:**

```python
op = phase_fc()

op = phase_fc(fields_container=my_fields_container)
```

## Inputs

### fields_container

Complex-valued fields container with paired real (complex label 0) and imaginary (complex label 1) fields.

**Type:** *LinkableInput*

## Outputs

### fields_container

Fields container with phase angle fields $\mathrm{atan2}(\mathrm{Im}[i],\, \mathrm{Re}[i])$ in radians; zero-valued fields are produced where no imaginary part is found.

**Type:** *LinkableOutput*

## Methods

## Properties

#### *property* inputs: InputSpec

*get/set*

#### *property* outputs: OutputSpec

*get/set*

#### *property* defaultConfig: Config

*get*
