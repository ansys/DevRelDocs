---
uid: Ans.DataProcessing.operators.math.unit_convert_fc
---

# *class* unit_convert_fc(fields_container: object = None, unit_name: object = None, config: OperatorConfig = None)

Converts a fields container from one unit to another using the linear relation

$v_\mathrm{out}[i] = k \cdot v_\mathrm{in}[i] + \delta$,

where $k$ and $\delta$ are the unit conversion factor and shift.

All fields must be homogeneous with the target unit.

When the permissive option is enabled and units are not homogeneous,

the container is returned unchanged.

available inputs: `fields_container` (FieldsContainer), `unit_name` (string)

available outputs: `fields_container` (FieldsContainer)

**DPF Framework Reference:** [unit_convert_fc operator specification](https://developer.ansys.com/docs/dpf-framework-2027-r1/operator-specifications/math/unit_convert_fc.md)

**Parameters:**

* **fields_container**
* **unit_name**
* **config**

**Example:**

```python
op = unit_convert_fc()

op = unit_convert_fc(fields_container=my_fields_container,unit_name=my_unit_name)
```

## Inputs

### fields_container

Fields container to convert. All fields are converted in place.

**Type:** *LinkableInput*

### unit_name

unit as a string, ex 'm' for meter, 'Pa' for pascal,...

**Type:** *LinkableInput*

## Outputs

### fields_container

Fields container with all field data converted to the requested unit, modified in place.

**Type:** *LinkableOutput*

## Methods

## Properties

#### *property* inputs: InputSpec

*get/set*

#### *property* outputs: OutputSpec

*get/set*

#### *property* defaultConfig: Config

*get*
