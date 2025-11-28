---
uid: Ans.DataProcessing.operators.geo.rotate
title: rotate
---

# rotate Class

**Namespace:** [Ans.DataProcessing.operators.geo](Ans_DataProcessing_operators_geo.md)

Applies a transformation (rotation) matrix on a field.   ///available inputs: field (Field, FieldsContainer), field_rotation_matrix (Field)
            available outputs: field (Field)

rotate()
rotate(field: object, field_rotation_matrix: object, config: OperatorConfig)
rotate(config: OperatorConfig)


## Class Information

| Property | Value |
|----------|-------|
| Namespace | `Ans.DataProcessing.operators.geo` |
| Assembly | `Ans_Dpf_FEMutils_dll_cs` |
| Base Class | `Ans.DataProcessing.internal_objects.BaseOperator` |

## Constructors

#### Constructor

```python
rotate()
```

#### Constructor

```python
rotate(field, field_rotation_matrix, config)
```

**Parameters:**

- `field` (*object*)
- `field_rotation_matrix` (*object*)
- `config` (*OperatorConfig*)

#### Constructor

```python
rotate(config)
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
