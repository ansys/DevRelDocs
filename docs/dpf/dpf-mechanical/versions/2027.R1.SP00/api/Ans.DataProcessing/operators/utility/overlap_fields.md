---
uid: Ans.DataProcessing.operators.utility.overlap_fields
---

# *class* overlap_fields(base_field: object = None, overlapping_field: object = None, config: OperatorConfig = None)

Take two fields and superpose them, the overlapping field will override values of base_field.

available inputs: `base_field` (Field) (optional), `overlapping_field` (Field) (optional)

available outputs: `field` (Field)

**DPF Framework Reference:** [overlap_fields operator specification](https://developer.ansys.com/docs/dpf-framework-2027-r1/operator-specifications/utility/overlap_fields.md)

**Parameters:**

* **base_field**
* **overlapping_field**
* **config**

**Example:**

```python
op = overlap_fields()

op = overlap_fields(base_field=my_base_field,overlapping_field=my_overlapping_field)
```

## Inputs

### base_field

**Type:** *LinkableInput*

### overlapping_field

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
