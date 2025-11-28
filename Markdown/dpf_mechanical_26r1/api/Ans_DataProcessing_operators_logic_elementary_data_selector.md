---
uid: Ans.DataProcessing.operators.logic.elementary_data_selector
title: elementary_data_selector
---

# elementary_data_selector Class

**Namespace:** [Ans.DataProcessing.operators.logic](Ans_DataProcessing_operators_logic.md)

Creates a scalar/vector field based on the selected elementary data.   ///available inputs: field (Field, FieldsContainer), elementary_data_index (Int32, IList int, System.Collections.IEnumerable), default_value (double) (optional), elementary_data_index_2 (Int32, IList int, System.Collections.IEnumerable) (optional)
            available outputs: field (Field)

elementary_data_selector()
elementary_data_selector(field: object, elementary_data_index: object, default_value: object, elementary_data_index_2: object, config: OperatorConfig)
elementary_data_selector(config: OperatorConfig)


## Class Information

| Property | Value |
|----------|-------|
| Namespace | `Ans.DataProcessing.operators.logic` |
| Assembly | `Ans_Dpf_Native_dll_cs` |
| Base Class | `Ans.DataProcessing.internal_objects.BaseOperator` |

## Constructors

#### Constructor

```python
elementary_data_selector()
```

#### Constructor

```python
elementary_data_selector(field, elementary_data_index, default_value, elementary_data_index_2, config)
```

**Parameters:**

- `field` (*object*)
- `elementary_data_index` (*object*)
- `default_value` (*object*)
- `elementary_data_index_2` (*object*)
- `config` (*OperatorConfig*)

#### Constructor

```python
elementary_data_selector(config)
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
