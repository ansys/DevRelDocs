---
uid: Ans.DataProcessing.operators.math.scale_by_field_fc
title: scale_by_field_fc
---

# scale_by_field_fc Class

**Namespace:** [Ans.DataProcessing.operators.math](Ans_DataProcessing_operators_math.md)

DEPRECATED, PLEASE USE SCALE. Scales a field (in 0) by a scalar field (in 1). If one field's scoping has an 'overall' location, then this field's values are applied on the other field entirely.   ///available inputs: field_or_fields_container_A (Field, FieldsContainer), field_or_fields_container_B (Field, FieldsContainer)
            available outputs: fields_container (FieldsContainer)

scale_by_field_fc()
scale_by_field_fc(field_or_fields_container_A: object, field_or_fields_container_B: object, config: OperatorConfig)
scale_by_field_fc(config: OperatorConfig)


## Class Information

| Property | Value |
|----------|-------|
| Namespace | `Ans.DataProcessing.operators.math` |
| Assembly | `Ans_Dpf_Native_dll_cs` |
| Base Class | `Ans.DataProcessing.internal_objects.BaseOperator` |

## Constructors

#### Constructor

```python
scale_by_field_fc()
```

#### Constructor

```python
scale_by_field_fc(field_or_fields_container_A, field_or_fields_container_B, config)
```

**Parameters:**

- `field_or_fields_container_A` (*object*)
- `field_or_fields_container_B` (*object*)
- `config` (*OperatorConfig*)

#### Constructor

```python
scale_by_field_fc(config)
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
