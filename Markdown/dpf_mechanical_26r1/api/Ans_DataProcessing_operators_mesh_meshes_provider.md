---
uid: Ans.DataProcessing.operators.mesh.meshes_provider
title: meshes_provider
---

# meshes_provider Class

**Namespace:** [Ans.DataProcessing.operators.mesh](Ans_DataProcessing_operators_mesh.md)

Reads meshes from result files. Meshes can be spatially or temporally varying.   ///available inputs: time_scoping (Scoping, IList int, Int32, System.Collections.IEnumerable) (optional), streams_container (StreamsContainer) (optional), data_sources (DataSources), read_cyclic (Int32) (optional), region_scoping (Scoping, Int32, IList int, System.Collections.IEnumerable) (optional)
            available outputs: meshes (MeshesContainer)

meshes_provider()
meshes_provider(time_scoping: object, streams_container: object, data_sources: object, config: OperatorConfig)
meshes_provider(config: OperatorConfig)


## Class Information

| Property | Value |
|----------|-------|
| Namespace | `Ans.DataProcessing.operators.mesh` |
| Assembly | `Ans_Dpf_Native_dll_cs` |
| Base Class | `Ans.DataProcessing.internal_objects.BaseOperator` |

## Constructors

#### Constructor

```python
meshes_provider()
```

#### Constructor

```python
meshes_provider(time_scoping, streams_container, data_sources, config)
```

**Parameters:**

- `time_scoping` (*object*)
- `streams_container` (*object*)
- `data_sources` (*object*)
- `config` (*OperatorConfig*)

#### Constructor

```python
meshes_provider(config)
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
