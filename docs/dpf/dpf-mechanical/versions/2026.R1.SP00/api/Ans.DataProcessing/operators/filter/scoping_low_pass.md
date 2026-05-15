---
uid: Ans.DataProcessing.operators.filter.scoping_low_pass
---

# scoping_low_pass Class

**Namespace:** [Ans.DataProcessing.operators.filter](Ans_DataProcessing_operators_filter.md)

## Summary

The low pass filter returns all the values below (but not equal to) the threshold value in input.

available inputs: `field` (Field, FieldsContainer), `threshold` (double, Field), `both` (bool) (optional)

available outputs: `scoping` (Scoping)

## Example

```python
op = scoping_low_pass()

op = scoping_low_pass(field=my_field,threshold=my_threshold,both=my_both)
```

## Class Information

| Property | Value |
|----------|-------|
| Namespace | `Ans.DataProcessing.operators.filter` |
| Assembly | `Ans_Dpf_Native_dll_cs` |
| Base Class | `Ans.DataProcessing.internal_objects.BaseOperator` |

## Inputs

### field

field or fields container with only one field is expected

**Type:** *LinkableInput*

### threshold

a threshold scalar or a field containing one value is expected

**Type:** *LinkableInput*

### both

The default is false. If set to true, the complement of the filtered fields container is returned on output pin 1.

**Type:** *LinkableInput*

## Outputs

### scoping

**Type:** *LinkableOutput*

## Constructors

#### Constructor

```python
scoping_low_pass()
```

#### Constructor

```python
scoping_low_pass(field, threshold, both, config)
```

**Parameters:**

- `field` (*object*)
- `threshold` (*object*)
- `both` (*object*)
- `config` (*OperatorConfig*)

#### Constructor

```python
scoping_low_pass(config)
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
