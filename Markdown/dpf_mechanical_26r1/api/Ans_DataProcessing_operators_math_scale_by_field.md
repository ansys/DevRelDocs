---
uid: Ans.DataProcessing.operators.math.scale_by_field
title: scale_by_field
---

# scale_by_field Class

**Namespace:** [Ans.DataProcessing.operators.math](Ans_DataProcessing_operators_math.md)

DEPRECATED, PLEASE USE SCALE. Scales a field (in 0) by a scalar field (in 1). If one field's scoping has an 'overall' location, then this field's values are applied on the other field entirely.   ///available inputs: fieldA (Field, FieldsContainer), fieldB (Field, FieldsContainer)
            available outputs: field (Field)

scale_by_field()
scale_by_field(fieldA: object, fieldB: object, config: OperatorConfig)
scale_by_field(config: OperatorConfig)


## Class Information

| Property | Value |
|----------|-------|
| Namespace | `Ans.DataProcessing.operators.math` |
| Assembly | `Ans_Dpf_Native_dll_cs` |
| Base Class | `Ans.DataProcessing.internal_objects.BaseOperator` |

## Constructors

#### Constructor

```python
scale_by_field()
```

#### Constructor

```python
scale_by_field(fieldA, fieldB, config)
```

**Parameters:**

- `fieldA` (*object*)
- `fieldB` (*object*)
- `config` (*OperatorConfig*)

#### Constructor

```python
scale_by_field(config)
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
