---
uid: Ans.DataProcessing.operators.math.dot
title: dot
---

# dot Class

**Namespace:** [Ans.DataProcessing.operators.math](Ans_DataProcessing_operators_math.md)

DEPRECATED, PLEASE USE GENERALIZED INNER PRODUCT. Computes element - wise dot product between two vector fields. If one field's scoping has an 'overall' location, then this field's values are applied on the other field entirely.When using a constant or 'work_by_index', you can use 'inplace' to reuse one of the fields, but only in the case where both fields are scalar.   ///available inputs: fieldA (Field, FieldsContainer), fieldB (Field, FieldsContainer)
            available outputs: field (Field)

dot()
dot(fieldA: object, fieldB: object, config: OperatorConfig)
dot(config: OperatorConfig)


## Class Information

| Property | Value |
|----------|-------|
| Namespace | `Ans.DataProcessing.operators.math` |
| Assembly | `Ans_Dpf_Native_dll_cs` |
| Base Class | `Ans.DataProcessing.internal_objects.BaseOperator` |

## Constructors

#### Constructor

```python
dot()
```

#### Constructor

```python
dot(fieldA, fieldB, config)
```

**Parameters:**

- `fieldA` (*object*)
- `fieldB` (*object*)
- `config` (*OperatorConfig*)

#### Constructor

```python
dot(config)
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
