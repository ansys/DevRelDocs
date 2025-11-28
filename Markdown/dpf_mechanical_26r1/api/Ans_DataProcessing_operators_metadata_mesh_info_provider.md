---
uid: Ans.DataProcessing.operators.metadata.mesh_info_provider
title: mesh_info_provider
---

# mesh_info_provider Class

**Namespace:** [Ans.DataProcessing.operators.metadata](Ans_DataProcessing_operators_metadata.md)

Reads the mesh information, such as number of elements (common property), number of faces (Cff plugins) or scoping of parts (LSDYNA plugins) on files contained in the streams or data sources.   ///available inputs: time_scoping (Int32) (optional), streams_container (StreamsContainer) (optional), data_sources (DataSources)
            available outputs: mesh_info (GenericDataContainer)

mesh_info_provider()
mesh_info_provider(time_scoping: object, streams_container: object, data_sources: object, config: OperatorConfig)
mesh_info_provider(config: OperatorConfig)


## Class Information

| Property | Value |
|----------|-------|
| Namespace | `Ans.DataProcessing.operators.metadata` |
| Assembly | `Ans_Dpf_Native_dll_cs` |
| Base Class | `Ans.DataProcessing.internal_objects.BaseOperator` |

## Constructors

#### Constructor

```python
mesh_info_provider()
```

#### Constructor

```python
mesh_info_provider(time_scoping, streams_container, data_sources, config)
```

**Parameters:**

- `time_scoping` (*object*)
- `streams_container` (*object*)
- `data_sources` (*object*)
- `config` (*OperatorConfig*)

#### Constructor

```python
mesh_info_provider(config)
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
