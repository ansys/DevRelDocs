---
uid: Ans.DataProcessing.operators.result.global_time_step
title: global_time_step
---

# global_time_step Class

**Namespace:** [Ans.DataProcessing.operators.result](Ans_DataProcessing_operators_result.md)

Read Global Time Step (LSDyna) by calling the readers defined by the datasources.   ///available inputs: streams_container (StreamsContainer) (optional), data_sources (DataSources), unit_system (Int32, string) (optional)
            available outputs: fields_container (FieldsContainer)

global_time_step()
global_time_step(data_sources: object, unit_system: object, config: OperatorConfig)
global_time_step(config: OperatorConfig)


## Class Information

| Property | Value |
|----------|-------|
| Namespace | `Ans.DataProcessing.operators.result` |
| Assembly | `Ans_Dpf_Native_dll_cs` |
| Base Class | `Ans.DataProcessing.internal_objects.BaseOperator` |

## Constructors

#### Constructor

```python
global_time_step()
```

#### Constructor

```python
global_time_step(data_sources, unit_system, config)
```

**Parameters:**

- `data_sources` (*object*)
- `unit_system` (*object*)
- `config` (*OperatorConfig*)

#### Constructor

```python
global_time_step(config)
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
