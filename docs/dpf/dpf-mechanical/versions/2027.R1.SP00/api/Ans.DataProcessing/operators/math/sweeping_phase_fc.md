---
uid: Ans.DataProcessing.operators.math.sweeping_phase_fc
---

# *class* sweeping_phase_fc(fields_container: object = None, angle: object = None, unit_name: object = None, abs_value: object = None, config: OperatorConfig = None)

Shifts the phase of all the corresponding real and imaginary fields of a fields container for a given angle (in 2) of a unit (in 4). An output field is computed for each pair of real and imaginary fields in the input fields_container as field_out = real_field`*`cos(angle) - imaginary_field`*`sin(angle).

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

**Type:** *LinkableInput*

### angle

**Type:** *LinkableInput*

### unit_name

String Unit. Supported values: "deg" or "rad". Default: "rad".

**Type:** *LinkableInput*

### abs_value

**Type:** *LinkableInput*

## Outputs

### fields_container

**Type:** *LinkableOutput*

## Methods

## Properties

#### *property* inputs: InputSpec

*get/set*

#### *property* outputs: OutputSpec

*get/set*

#### *property* defaultConfig: Config

*get*
