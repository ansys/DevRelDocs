---
uid: Ans.DataProcessing.operators.math.compute_residual_and_error
---

# compute_residual_and_error Class

**Namespace:** [Ans.DataProcessing.operators.math](Ans_DataProcessing_operators_math.md)

Computes the Lp-norm of a field or a field container.
            													When a second entry is provided, the residual (the difference between the first and second entry) is calculated along with the error as the Lp-norm of the difference. 
            													When a second input is not provided, the calculation is only completed for the first entry.
            													The type of calculation performed is based on the specifications provided for pin 1, pin 2 defines the type of error norm (L1 vs L2), and
            													pin 3 which entity to use as a reference   ///available inputs: field_or_fields_container1 (Field, FieldsContainer), normalization_type (Int32) (optional), norm_calculation_type (Int32) (optional), field_reference (Int32) (optional), field_or_fields_container2 (Field, FieldsContainer) (optional)
            available outputs: residuals (Field ,FieldsContainer), error (Field ,FieldsContainer), residuals_normalization_factor (Field ,FieldsContainer), error_normalization_factor (Field ,FieldsContainer)

compute_residual_and_error()
compute_residual_and_error(field_or_fields_container1: object, normalization_type: object, norm_calculation_type: object, field_reference: object, field_or_fields_container2: object, config: OperatorConfig)
compute_residual_and_error(config: OperatorConfig)


## Class Information

| Property | Value |
|----------|-------|
| Namespace | `Ans.DataProcessing.operators.math` |
| Assembly | `Ans_Dpf_Native_dll_cs` |
| Base Class | `Ans.DataProcessing.internal_objects.BaseOperator` |

## Constructors

#### Constructor

```python
compute_residual_and_error()
```

#### Constructor

```python
compute_residual_and_error(field_or_fields_container1, normalization_type, norm_calculation_type, field_reference, field_or_fields_container2, config)
```

**Parameters:**

- `field_or_fields_container1` (*object*)
- `normalization_type` (*object*)
- `norm_calculation_type` (*object*)
- `field_reference` (*object*)
- `field_or_fields_container2` (*object*)
- `config` (*OperatorConfig*)

#### Constructor

```python
compute_residual_and_error(config)
```

**Parameters:**

- `config` (*OperatorConfig*)

## Methods

## Properties

#### inputs

**Type:** *InputSpec*

```python
# Get or set the property
value = obj.inputs
obj.inputs = new_value
```

#### outputs

**Type:** *OutputSpec*

```python
# Get or set the property
value = obj.outputs
obj.outputs = new_value
```

#### defaultConfig

**Type:** *Config*

```python
# Get the property (read-only)
value = obj.defaultConfig
```
