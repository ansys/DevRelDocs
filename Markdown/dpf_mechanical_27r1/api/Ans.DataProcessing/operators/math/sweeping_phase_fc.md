---
uid: Ans.DataProcessing.operators.math.sweeping_phase_fc
---

# *class* sweeping_phase_fc(fields_container: object = None, angle: object = None, unit_name: object = None, abs_value: object = None, config: OperatorConfig = None)

Projects every [phasor](https://en.wikipedia.org/wiki/Phasor) field pair in the input fields container

onto a given phase angle $\theta$:

$\mathrm{out}[i] = \mathrm{fieldReal}[i] \cdot \cos(\theta) - \mathrm{fieldImaginary}[i] \cdot \sin(\theta)$.

Pairs are matched by complex label.

When pin 4 is true, the absolute value of each projection is returned.

available inputs: `fields_container` (FieldsContainer), `angle` (double), `unit_name` (string) (optional), `abs_value` (bool)

available outputs: `fields_container` (FieldsContainer)

**DPF Framework Reference:** [sweeping_phase_fc operator specification](https://developer.ansys.com/docs/dpf-framework-2027-r1/operator-specifications/math/sweeping_phase_fc.md)

**Parameters:**

* **fields_container**
* **angle**
* **unit_name**
* **abs_value**
* **config**

**Example:**

```python
op = sweeping_phase_fc()

op = sweeping_phase_fc(fields_container=my_fields_container,angle=my_angle,unit_name=my_unit_name,abs_value=my_abs_value)
```

## Inputs

### fields_container

Complex-valued fields container with paired real and imaginary part fields.

**Type:** *LinkableInput*

### angle

Phase angle $\theta$ to project onto, in the unit specified by pin 3 (default: radians).

**Type:** *LinkableInput*

### unit_name

String Unit. Supported values: "deg" or "rad". Default: "rad".

**Type:** *LinkableInput*

### abs_value

If true, the absolute value of each projection is returned (default: false).

**Type:** *LinkableInput*

## Outputs

### fields_container

Fields container with the projected fields $\mathrm{fieldReal} \cdot \cos(\theta) - \mathrm{fieldImaginary} \cdot \sin(\theta)$, without the complex label.

**Type:** *LinkableOutput*

## Methods

## Properties

#### *property* inputs: InputSpec

*get/set*

#### *property* outputs: OutputSpec

*get/set*

#### *property* defaultConfig: Config

*get*
