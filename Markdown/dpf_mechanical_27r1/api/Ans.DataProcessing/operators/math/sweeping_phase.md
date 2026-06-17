---
uid: Ans.DataProcessing.operators.math.sweeping_phase
---

# *class* sweeping_phase(real_field: object = None, imaginary_field: object = None, angle: object = None, unit_name: object = None, abs_value: object = None, imaginary_part_null: object = None, config: OperatorConfig = None)

Projects a [phasor](https://en.wikipedia.org/wiki/Phasor) field onto a given phase angle $\theta$:

$\mathrm{out}[i] = \mathrm{fieldReal}[i] \cdot \cos(\theta) - \mathrm{fieldImaginary}[i] \cdot \sin(\theta)$.

When pin 4 is true, the absolute value of the projection is returned instead.

If the imaginary field is absent and pin 5 is true, the imaginary part is treated as zero.

available inputs: `real_field` (Field, FieldsContainer), `imaginary_field` (Field, FieldsContainer), `angle` (double), `unit_name` (string) (optional), `abs_value` (bool), `imaginary_part_null` (bool)

available outputs: `field` (Field)

**DPF Framework Reference:** [sweeping_phase operator specification](https://developer.ansys.com/docs/dpf-framework-2027-r1/operator-specifications/math/sweeping_phase.md)

**Parameters:**

* **real_field**
* **imaginary_field**
* **angle**
* **unit_name**
* **abs_value**
* **imaginary_part_null**
* **config**

**Example:**

```python
op = sweeping_phase()

op = sweeping_phase(real_field=my_real_field,imaginary_field=my_imaginary_field,angle=my_angle,unit_name=my_unit_name,abs_value=my_abs_value,imaginary_part_null=my_imaginary_part_null)
```

## Inputs

### real_field

field or fields container with only one field is expected

**Type:** *LinkableInput*

### imaginary_field

field or fields container with only one field is expected

**Type:** *LinkableInput*

### angle

Phase angle $\theta$ to project onto, in the unit specified by pin 3 (default: radians).

**Type:** *LinkableInput*

### unit_name

String Unit. Supported values: "deg" or "rad". Default: "rad".

**Type:** *LinkableInput*

### abs_value

If true, the absolute value of the projection is returned (default: false).

**Type:** *LinkableInput*

### imaginary_part_null

If the imaginary part field is empty and this pin is true, then the imaginary part is supposed to be 0 (default is false).

**Type:** *LinkableInput*

## Outputs

### field

Projected field $\mathrm{fieldReal} \cdot \cos(\theta) - \mathrm{fieldImaginary} \cdot \sin(\theta)$, with the unit of pin 0.

**Type:** *LinkableOutput*

## Methods

## Properties

#### *property* inputs: InputSpec

*get/set*

#### *property* outputs: OutputSpec

*get/set*

#### *property* defaultConfig: Config

*get*
