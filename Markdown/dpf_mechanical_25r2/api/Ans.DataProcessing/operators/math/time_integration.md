---
uid: Ans.DataProcessing.operators.math.time_integration
---

# time_integration Class

**Namespace:** [Ans.DataProcessing.operators.math](Ans_DataProcessing_operators_math.md)

## Summary

Integrates a field of time varying quantities over time

available inputs: `field` (Field), `resample_output` (bool) (optional), `absolute_error` (double) (optional), `minimum_step_size` (double) (optional), `integration_constant` (double) (optional)

available outputs: `field` (Field)

## Example

```python
op = time_integration()

op = time_integration(field=my_field,resample_output=my_resample_output,absolute_error=my_absolute_error,minimum_step_size=my_minimum_step_size,integration_constant=my_integration_constant)
```

## Class Information

| Property | Value |
|----------|-------|
| Namespace | `Ans.DataProcessing.operators.math` |
| Assembly | `Ans_Dpf_Math_dll_cs` |
| Base Class | `Ans.DataProcessing.internal_objects.BaseOperator` |

## Inputs

### field

field

**Type:** *LinkableInput*

### resample_output

Resample the output

**Type:** *LinkableInput*

### absolute_error

Absolute error for the resampling

**Type:** *LinkableInput*

### minimum_step_size

Minimum time step size for the resamplig

**Type:** *LinkableInput*

### integration_constant

Constant to be added to the integrated field

**Type:** *LinkableInput*

## Outputs

### field

**Type:** *LinkableOutput*

## Constructors

#### Constructor

```python
time_integration()
```

#### Constructor

```python
time_integration(field, resample_output, absolute_error, minimum_step_size, integration_constant, config)
```

**Parameters:**

- `field` (*object*)
- `resample_output` (*object*)
- `absolute_error` (*object*)
- `minimum_step_size` (*object*)
- `integration_constant` (*object*)
- `config` (*OperatorConfig*)

#### Constructor

```python
time_integration(config)
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
