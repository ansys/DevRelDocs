---
uid: Ans.DataProcessing.operators.math.fft_gradient_eval
---

# fft_gradient_eval Class

**Namespace:** [Ans.DataProcessing.operators.math](Ans_DataProcessing_operators_math.md)

## Summary

Evaluate min max based on the fast fourier transform at a given field, using gradient method for adaptative time step.

available inputs: `fields_container` (FieldsContainer), `time_scoping` (Scoping) (optional), `fs_ratio` (Int32) (optional)

available outputs: `coefficients` (FieldsContainer)

## Example

```python
op = fft_gradient_eval()

op = fft_gradient_eval(fields_container=my_fields_container,time_scoping=my_time_scoping,fs_ratio=my_fs_ratio)
```

## Class Information

| Property | Value |
|----------|-------|
| Namespace | `Ans.DataProcessing.operators.math` |
| Assembly | `Ans_Dpf_Math_dll_cs` |
| Base Class | `Ans.DataProcessing.internal_objects.BaseOperator` |

## Inputs

### fields_container

**Type:** *LinkableInput*

### time_scoping

if specified only the results at these set ids are used

**Type:** *LinkableInput*

### fs_ratio

default value = 20

**Type:** *LinkableInput*

## Outputs

### coefficients

**Type:** *LinkableOutput*

## Constructors

#### Constructor

```python
fft_gradient_eval()
```

#### Constructor

```python
fft_gradient_eval(fields_container, time_scoping, fs_ratio, config)
```

**Parameters:**

- `fields_container` (*object*)
- `time_scoping` (*object*)
- `fs_ratio` (*object*)
- `config` (*OperatorConfig*)

#### Constructor

```python
fft_gradient_eval(config)
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
