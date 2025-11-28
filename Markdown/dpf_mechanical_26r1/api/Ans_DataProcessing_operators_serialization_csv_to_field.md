---
uid: Ans.DataProcessing.operators.serialization.csv_to_field
title: csv_to_field
---

# csv_to_field Class

**Namespace:** [Ans.DataProcessing.operators.serialization](Ans_DataProcessing_operators_serialization.md)

transform csv file to a field or fields container   ///available inputs: time_scoping (Scoping) (optional), data_sources (DataSources)
            available outputs: fields_container (FieldsContainer)

csv_to_field()
csv_to_field(time_scoping: object, data_sources: object, config: OperatorConfig)
csv_to_field(config: OperatorConfig)


## Class Information

| Property | Value |
|----------|-------|
| Namespace | `Ans.DataProcessing.operators.serialization` |
| Assembly | `Ans_Dpf_Native_dll_cs` |
| Base Class | `Ans.DataProcessing.internal_objects.BaseOperator` |

## Constructors

#### Constructor

```python
csv_to_field()
```

#### Constructor

```python
csv_to_field(time_scoping, data_sources, config)
```

**Parameters:**

- `time_scoping` (*object*)
- `data_sources` (*object*)
- `config` (*OperatorConfig*)

#### Constructor

```python
csv_to_field(config)
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
