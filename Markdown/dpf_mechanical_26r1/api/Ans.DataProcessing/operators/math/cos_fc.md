---
uid: Ans.DataProcessing.operators.math.cos_fc
---

# cos_fc Class

**Namespace:** [Ans.DataProcessing.operators.math](Ans_DataProcessing_operators_math.md)

## Summary

Computes element-wise cosine function on field data: cos(field[i]).

available inputs: `fields_container` (FieldsContainer)

available outputs: `fields_container` (FieldsContainer)

## Example

```python
op = cos_fc()

op = cos_fc(fields_container=my_fields_container)
```

## Class Information

| Property | Value |
|----------|-------|
| Namespace | `Ans.DataProcessing.operators.math` |
| Assembly | `Ans_Dpf_Native_dll_cs` |
| Base Class | `Ans.DataProcessing.internal_objects.BaseOperator` |

## Inputs

### fields_container

Field or fields container containing numeric data for cosine calculation

**Type:** *LinkableInput*

## Outputs

### fields_container

Field with cosine values applied element-wise to input data

**Type:** *LinkableOutput*

## Constructors

#### Constructor

```python
cos_fc()
```

#### Constructor

```python
cos_fc(fields_container, config)
```

**Parameters:**

- `fields_container` (*object*)
- `config` (*OperatorConfig*)

#### Constructor

```python
cos_fc(config)
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
