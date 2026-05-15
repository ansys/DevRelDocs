---
uid: Ans.DataProcessing.operators.math.time_derivation
---

# time_derivation Class

**Namespace:** [Ans.DataProcessing.operators.math](Ans_DataProcessing_operators_math.md)

## Summary

Derives a field of time varying quantities with respect to time

available inputs: `field` (Field), `spline_fitting` (bool) (optional)

available outputs: `field` (Field)

## Example

```python
op = time_derivation()

op = time_derivation(field=my_field,spline_fitting=my_spline_fitting)
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

### spline_fitting

Uses spline fitting on the input field to compute smooth derivatives

**Type:** *LinkableInput*

## Outputs

### field

**Type:** *LinkableOutput*

## Constructors

#### Constructor

```python
time_derivation()
```

#### Constructor

```python
time_derivation(field, spline_fitting, config)
```

**Parameters:**

- `field` (*object*)
- `spline_fitting` (*object*)
- `config` (*OperatorConfig*)

#### Constructor

```python
time_derivation(config)
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
