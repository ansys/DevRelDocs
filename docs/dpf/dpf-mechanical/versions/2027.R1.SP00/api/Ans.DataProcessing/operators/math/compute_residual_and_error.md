---
uid: Ans.DataProcessing.operators.math.compute_residual_and_error
---

# *class* compute_residual_and_error(field_or_fields_container1: object = None, normalization_type: object = None, norm_calculation_type: object = None, field_reference: object = None, field_or_fields_container2: object = None, config: OperatorConfig = None)

Computes the \\(L_p\\) norm of a normalized field or a field container.

When a second entry is provided, the calculation is done on the residual (the difference between the first and second entry).

When a second entry is not provided, the calculation is only completed for the first entry.

available inputs: `field_or_fields_container1` (Field, FieldsContainer), `normalization_type` (Int32) (optional), `norm_calculation_type` (Int32) (optional), `field_reference` (Int32) (optional), `field_or_fields_container2` (Field, FieldsContainer) (optional)

available outputs: `residual` (Field ,FieldsContainer), `error` (Field ,FieldsContainer), `residual_normalization_factor` (Field ,FieldsContainer), `error_normalization_factor` (Field ,FieldsContainer)

**DPF Framework Reference:** [compute_residual_and_error operator specification](https://developer.ansys.com/docs/dpf-framework-2027-r1/operator-specifications/math/compute_residual_and_error.md)

**Parameters:**

* **field_or_fields_container1**
* **normalization_type**
* **norm_calculation_type**
* **field_reference**
* **field_or_fields_container2**
* **config**

**Example:**

```python
op = compute_residual_and_error()

op = compute_residual_and_error(field_or_fields_container1=my_field_or_fields_container1,normalization_type=my_normalization_type,norm_calculation_type=my_norm_calculation_type,field_reference=my_field_reference,field_or_fields_container2=my_field_or_fields_container2)
```

## Inputs

### field_or_fields_container1

Field or fields container to be normalized (\\(FC_1\\))

**Type:** *LinkableInput*

### normalization_type

**Type:** *LinkableInput*

### norm_calculation_type

**Type:** *LinkableInput*

### field_reference

**Type:** *LinkableInput*

### field_or_fields_container2

**Type:** *LinkableInput*

## Outputs

### residual

**Type:** *LinkableOutput*

### error

**Type:** *LinkableOutput*

### residual_normalization_factor

**Type:** *LinkableOutput*

### error_normalization_factor

**Type:** *LinkableOutput*

## Methods

## Properties

#### *property* inputs: InputSpec

*get/set*

#### *property* outputs: OutputSpec

*get/set*

#### *property* defaultConfig: Config

*get*
