---
uid: Ans.DataProcessing.operators.metadata.is_cyclic
title: is_cyclic
---

# is_cyclic Class

**Namespace:** [Ans.DataProcessing.operators.metadata](Ans_DataProcessing_operators_metadata.md)

Reads if the model is cyclic from the result file.   ///available inputs: streams_container (StreamsContainer) (optional), data_sources (DataSources)
            available outputs: file_path (string)

is_cyclic()
is_cyclic(streams_container: object, data_sources: object, config: OperatorConfig)
is_cyclic(config: OperatorConfig)


## Class Information

| Property | Value |
|----------|-------|
| Namespace | `Ans.DataProcessing.operators.metadata` |
| Assembly | `Ans_Dpf_Native_dll_cs` |
| Base Class | `Ans.DataProcessing.internal_objects.BaseOperator` |

## Constructors

#### Constructor

```python
is_cyclic()
```

#### Constructor

```python
is_cyclic(streams_container, data_sources, config)
```

**Parameters:**

- `streams_container` (*object*)
- `data_sources` (*object*)
- `config` (*OperatorConfig*)

#### Constructor

```python
is_cyclic(config)
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
