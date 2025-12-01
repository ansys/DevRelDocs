---
uid: Ans.DataProcessing.operators.math.fft_eval
---

# fft_eval Class

**Namespace:** [Ans.DataProcessing.operators.math](Ans_DataProcessing_operators_math.md)

## Summary

Evaluate the fast fourier transforms at a given set of fields.

available inputs: `field_t` (Field), `time_scoping` (Scoping) (optional)

available outputs: `field` (Field), `offset` (Field)

## Example

```python
op = fft_eval()

op = fft_eval(field_t=my_field_t,time_scoping=my_time_scoping)
```

## Class Information

| Property | Value |
|----------|-------|
| Namespace | `Ans.DataProcessing.operators.math` |
| Assembly | `Ans_Dpf_Math_dll_cs` |
| Base Class | `Ans.DataProcessing.internal_objects.BaseOperator` |

## Inputs

### field_t

field of values to evaluate

**Type:** *LinkableInput*

### time_scoping

if specified only the results at these set ids are used

**Type:** *LinkableInput*

## Outputs

### field

**Type:** *LinkableOutput*

### offset

**Type:** *LinkableOutput*

## Constructors

#### Constructor

```python
fft_eval()
```

#### Constructor

```python
fft_eval(field_t, time_scoping, config)
```

**Parameters:**

- `field_t` (*object*)
- `time_scoping` (*object*)
- `config` (*OperatorConfig*)

#### Constructor

```python
fft_eval(config)
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
