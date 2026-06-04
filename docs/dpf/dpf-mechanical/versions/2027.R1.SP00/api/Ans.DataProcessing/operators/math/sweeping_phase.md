---
uid: Ans.DataProcessing.operators.math.sweeping_phase
---

# *class* sweeping_phase(real_field: object = None, imaginary_field: object = None, angle: object = None, unit_name: object = None, abs_value: object = None, imaginary_part_null: object = None, config: OperatorConfig = None)

Shifts the phase of a real and an imaginary field (in 0 and 1) of a given angle (in 3) of a unit (in 4). The resulting field is computed as field_out = real_field`*`cos(angle) - imaginary_field`*`sin(angle).

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

**Type:** *LinkableInput*

### unit_name

String Unit. Supported values: "deg" or "rad". Default: "rad".

**Type:** *LinkableInput*

### abs_value

**Type:** *LinkableInput*

### imaginary_part_null

If the imaginary part field is empty and this pin is true, then the imaginary part is supposed to be 0 (default is false).

**Type:** *LinkableInput*

## Outputs

### field

**Type:** *LinkableOutput*

## Methods

## Properties

#### *property* inputs: InputSpec

*get/set*

#### *property* outputs: OutputSpec

*get/set*

#### *property* defaultConfig: Config

*get*
