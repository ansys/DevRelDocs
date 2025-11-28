---
uid: Ans.DataProcessing.operators.min_max.min_max_by_entity
title: min_max_by_entity
---

# min_max_by_entity Class

**Namespace:** [Ans.DataProcessing.operators.min_max](Ans_DataProcessing_operators_min_max.md)

Compute the entity-wise minimum (out 0) and maximum (out 1) through all fields of a fields container.   ///available inputs: fields_container (FieldsContainer)
            available outputs: field_min (Field), field_max (Field)

min_max_by_entity()
min_max_by_entity(fields_container: object, config: OperatorConfig)
min_max_by_entity(config: OperatorConfig)


## Class Information

| Property | Value |
|----------|-------|
| Namespace | `Ans.DataProcessing.operators.min_max` |
| Assembly | `Ans_Dpf_Native_dll_cs` |
| Base Class | `Ans.DataProcessing.internal_objects.BaseOperator` |

## Constructors

#### Constructor

```python
min_max_by_entity()
```

#### Constructor

```python
min_max_by_entity(fields_container, config)
```

**Parameters:**

- `fields_container` (*object*)
- `config` (*OperatorConfig*)

#### Constructor

```python
min_max_by_entity(config)
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
