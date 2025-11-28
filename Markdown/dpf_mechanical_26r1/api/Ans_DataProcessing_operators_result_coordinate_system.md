---
uid: Ans.DataProcessing.operators.result.coordinate_system
title: coordinate_system
---

# coordinate_system Class

**Namespace:** [Ans.DataProcessing.operators.result](Ans_DataProcessing_operators_result.md)

Extracts the Rotation Matrix and Origin of a specific coordinate system.   ///available inputs: cs_id (Int32), streams_container (StreamsContainer) (optional), data_sources (DataSources)
            available outputs: field (Field)

coordinate_system()
coordinate_system(cs_id: object, streams_container: object, data_sources: object, config: OperatorConfig)
coordinate_system(config: OperatorConfig)


## Class Information

| Property | Value |
|----------|-------|
| Namespace | `Ans.DataProcessing.operators.result` |
| Assembly | `Ans_Dpf_Native_dll_cs` |
| Base Class | `Ans.DataProcessing.internal_objects.BaseOperator` |

## Constructors

#### Constructor

```python
coordinate_system()
```

#### Constructor

```python
coordinate_system(cs_id, streams_container, data_sources, config)
```

**Parameters:**

- `cs_id` (*object*)
- `streams_container` (*object*)
- `data_sources` (*object*)
- `config` (*OperatorConfig*)

#### Constructor

```python
coordinate_system(config)
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
