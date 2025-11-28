---
uid: Ans.DataProcessing.operators.min_max.min_by_component
---

# min_by_component Class

**Namespace:** [Ans.DataProcessing.operators.min_max](Ans_DataProcessing_operators_min_max.md)

Give the minimum for each element rank by comparing several fields.   ///available inputs: use_absolute_value (bool), field1 (Field, FieldsContainer), field2 (Field, FieldsContainer)
            available outputs: field (Field)

min_by_component()
min_by_component(use_absolute_value: object, field1: object, field2: object, config: OperatorConfig)
min_by_component(config: OperatorConfig)


## Class Information

| Property | Value |
|----------|-------|
| Namespace | `Ans.DataProcessing.operators.min_max` |
| Assembly | `Ans_Dpf_Native_dll_cs` |
| Base Class | `Ans.DataProcessing.internal_objects.BaseOperator` |

## Constructors

#### Constructor

```python
min_by_component()
```

#### Constructor

```python
min_by_component(use_absolute_value, field1, field2, config)
```

**Parameters:**

- `use_absolute_value` (*object*)
- `field1` (*object*)
- `field2` (*object*)
- `config` (*OperatorConfig*)

#### Constructor

```python
min_by_component(config)
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
