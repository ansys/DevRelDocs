---
uid: Ans.DataProcessing.operators.filter.scoping_signed_high_pass
title: scoping_signed_high_pass
---

# scoping_signed_high_pass Class

**Namespace:** [Ans.DataProcessing.operators.filter](Ans_DataProcessing_operators_filter.md)

The high pass filter returns all the values above, or equal, in absolute value to the threshold value in input.   ///available inputs: field (Field, FieldsContainer), threshold (double, Field), both (bool) (optional)
            available outputs: scoping (Scoping)

scoping_signed_high_pass()
scoping_signed_high_pass(field: object, threshold: object, both: object, config: OperatorConfig)
scoping_signed_high_pass(config: OperatorConfig)


## Class Information

| Property | Value |
|----------|-------|
| Namespace | `Ans.DataProcessing.operators.filter` |
| Assembly | `Ans_Dpf_Native_dll_cs` |
| Base Class | `Ans.DataProcessing.internal_objects.BaseOperator` |

## Constructors

#### Constructor

```python
scoping_signed_high_pass()
```

#### Constructor

```python
scoping_signed_high_pass(field, threshold, both, config)
```

**Parameters:**

- `field` (*object*)
- `threshold` (*object*)
- `both` (*object*)
- `config` (*OperatorConfig*)

#### Constructor

```python
scoping_signed_high_pass(config)
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
