---
uid: Ans.DataProcessing.operators.metadata.mesh_selection_manager_provider
---

# mesh_selection_manager_provider Class

**Namespace:** [Ans.DataProcessing.operators.metadata](Ans_DataProcessing_operators_metadata.md)

## Summary

Reads mesh properties from the results files contained in the streams or data sources, and makes those properties available through a mesh selection manager in output.

available inputs: `streams_container` (StreamsContainer) (optional), `data_sources` (DataSources)

available outputs: `mesh_selection_manager` (MeshSelectionManager)

## Example

```python
op = mesh_selection_manager_provider()

op = mesh_selection_manager_provider(streams_container=my_streams_container,data_sources=my_data_sources)
```

## Class Information

| Property | Value |
|----------|-------|
| Namespace | `Ans.DataProcessing.operators.metadata` |
| Assembly | `Ans_Dpf_Native_dll_cs` |
| Base Class | `Ans.DataProcessing.internal_objects.BaseOperator` |

## Inputs

### streams_container

streams (result file container) (optional)

**Type:** *LinkableInput*

### data_sources

If the stream is null, retrieves the file path from the data sources.

**Type:** *LinkableInput*

## Outputs

### mesh_selection_manager

**Type:** *LinkableOutput*

## Constructors

#### Constructor

```python
mesh_selection_manager_provider()
```

#### Constructor

```python
mesh_selection_manager_provider(streams_container, data_sources, config)
```

**Parameters:**

- `streams_container` (*object*)
- `data_sources` (*object*)
- `config` (*OperatorConfig*)

#### Constructor

```python
mesh_selection_manager_provider(config)
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
