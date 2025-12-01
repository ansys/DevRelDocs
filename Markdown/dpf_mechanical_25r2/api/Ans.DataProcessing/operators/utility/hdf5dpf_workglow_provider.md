---
uid: Ans.DataProcessing.operators.utility.hdf5dpf_workglow_provider
---

# hdf5dpf_workglow_provider Class

**Namespace:** [Ans.DataProcessing.operators.utility](Ans_DataProcessing_operators_utility.md)

Extract a custom result from an hdf5dpf file as an executable workflow.   ///available inputs: time_scoping (Scoping) (optional), mesh_scoping (Scoping) (optional), streams (StreamsContainer) (optional), data_sources (DataSources) (optional), meta_data (DataTree) (optional), result_name (object)
            available outputs: field_or_fields_container (Workflow)

hdf5dpf_workglow_provider()
hdf5dpf_workglow_provider(time_scoping: object, mesh_scoping: object, streams: object, data_sources: object, meta_data: object, result_name: object, config: OperatorConfig)
hdf5dpf_workglow_provider(config: OperatorConfig)


## Class Information

| Property | Value |
|----------|-------|
| Namespace | `Ans.DataProcessing.operators.utility` |
| Assembly | `Ans_Dpf_Hdf5_dll_cs` |
| Base Class | `Ans.DataProcessing.internal_objects.BaseOperator` |

## Constructors

#### Constructor

```python
hdf5dpf_workglow_provider()
```

#### Constructor

```python
hdf5dpf_workglow_provider(time_scoping, mesh_scoping, streams, data_sources, meta_data, result_name, config)
```

**Parameters:**

- `time_scoping` (*object*)
- `mesh_scoping` (*object*)
- `streams` (*object*)
- `data_sources` (*object*)
- `meta_data` (*object*)
- `result_name` (*object*)
- `config` (*OperatorConfig*)

#### Constructor

```python
hdf5dpf_workglow_provider(config)
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
