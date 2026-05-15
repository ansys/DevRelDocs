---
uid: Ans.DataProcessing.operators.min_max.max_by_component
---

# max_by_component Class

**Namespace:** [Ans.DataProcessing.operators.min_max](Ans_DataProcessing_operators_min_max.md)

## Summary

Give the maximum for each element rank by comparing several fields.

available inputs: `use_absolute_value` (bool), `field1` (Field, FieldsContainer), `field2` (Field, FieldsContainer)

available outputs: `field` (Field)

## Example

```python
op = max_by_component()

op = max_by_component(use_absolute_value=my_use_absolute_value,field1=my_field1,field2=my_field2)
```

## Class Information

| Property | Value |
|----------|-------|
| Namespace | `Ans.DataProcessing.operators.min_max` |
| Assembly | `Ans_Dpf_Native_dll_cs` |
| Base Class | `Ans.DataProcessing.internal_objects.BaseOperator` |

## Inputs

### use_absolute_value

use_absolute_value

**Type:** *LinkableInput*

### field1

field or fields container with only one field is expected

**Type:** *LinkableInput*

### field2

field or fields container with only one field is expected

**Type:** *LinkableInput*

## Outputs

### field

**Type:** *LinkableOutput*

## Constructors

#### Constructor

```python
max_by_component()
```

#### Constructor

```python
max_by_component(use_absolute_value, field1, field2, config)
```

**Parameters:**

- `use_absolute_value` (*object*)
- `field1` (*object*)
- `field2` (*object*)
- `config` (*OperatorConfig*)

#### Constructor

```python
max_by_component(config)
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
