---
uid: Ans.DataProcessing.operators.filter.field_low_pass_fc
---

# field_low_pass_fc Class

**Namespace:** [Ans.DataProcessing.operators.filter](Ans_DataProcessing_operators_filter.md)

## Summary

The low pass filter returns all the values below (but not equal to) the threshold value in input.

available inputs: `fields_container` (FieldsContainer), `threshold` (double, Field), `both` (bool) (optional)

available outputs: `fields_container` (FieldsContainer)

## Example

```python
op = field_low_pass_fc()

op = field_low_pass_fc(fields_container=my_fields_container,threshold=my_threshold,both=my_both)
```

## Class Information

| Property | Value |
|----------|-------|
| Namespace | `Ans.DataProcessing.operators.filter` |
| Assembly | `Ans_Dpf_Native_dll_cs` |
| Base Class | `Ans.DataProcessing.internal_objects.BaseOperator` |

## Inputs

### fields_container

field or fields container with only one field is expected

**Type:** *LinkableInput*

### threshold

a threshold scalar or a field containing one value is expected

**Type:** *LinkableInput*

### both

The default is false. If set to true, the complement of the filtered fields container is returned on output pin 1.

**Type:** *LinkableInput*

## Outputs

### fields_container

**Type:** *LinkableOutput*

## Constructors

#### Constructor

```python
field_low_pass_fc()
```

#### Constructor

```python
field_low_pass_fc(fields_container, threshold, both, config)
```

**Parameters:**

- `fields_container` (*object*)
- `threshold` (*object*)
- `both` (*object*)
- `config` (*OperatorConfig*)

#### Constructor

```python
field_low_pass_fc(config)
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
