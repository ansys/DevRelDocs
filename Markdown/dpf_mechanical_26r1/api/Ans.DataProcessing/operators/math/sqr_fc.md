---
uid: Ans.DataProcessing.operators.math.sqr_fc
---

# sqr_fc Class

**Namespace:** [Ans.DataProcessing.operators.math](Ans_DataProcessing_operators_math.md)

## Summary

Computes element-wise field[i]^2.

available inputs: `fields_container` (FieldsContainer)

available outputs: `fields_container` (FieldsContainer)

## Example

```python
op = sqr_fc()

op = sqr_fc(fields_container=my_fields_container)
```

## Class Information

| Property | Value |
|----------|-------|
| Namespace | `Ans.DataProcessing.operators.math` |
| Assembly | `Ans_Dpf_Native_dll_cs` |
| Base Class | `Ans.DataProcessing.internal_objects.BaseOperator` |

## Inputs

### fields_container

field or fields container with only one field is expected

**Type:** *LinkableInput*

## Outputs

### fields_container

Field with squared values applied element-wise to input data

**Type:** *LinkableOutput*

## Constructors

#### Constructor

```python
sqr_fc()
```

#### Constructor

```python
sqr_fc(fields_container, config)
```

**Parameters:**

- `fields_container` (*object*)
- `config` (*OperatorConfig*)

#### Constructor

```python
sqr_fc(config)
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
