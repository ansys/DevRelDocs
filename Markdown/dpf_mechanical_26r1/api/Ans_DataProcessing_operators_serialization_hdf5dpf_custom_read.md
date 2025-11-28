---
uid: Ans.DataProcessing.operators.serialization.hdf5dpf_custom_read
---

# hdf5dpf_custom_read Class

**Namespace:** [Ans.DataProcessing.operators.serialization](Ans_DataProcessing_operators_serialization.md)

Extract a custom result from an hdf5dpf file. This operator is deprecated, please use the 'custom' operator instead.   ///available inputs: time_scoping (Scoping) (optional), mesh_scoping (Scoping) (optional), streams (StreamsContainer) (optional), data_sources (DataSources) (optional), meta_data (DataTree) (optional), result_name (object)
            available outputs: field_or_fields_container (FieldsContainer ,Field)

hdf5dpf_custom_read()
hdf5dpf_custom_read(time_scoping: object, mesh_scoping: object, streams: object, data_sources: object, meta_data: object, result_name: object, config: OperatorConfig)
hdf5dpf_custom_read(config: OperatorConfig)


## Class Information

| Property | Value |
|----------|-------|
| Namespace | `Ans.DataProcessing.operators.serialization` |
| Assembly | `Ans_Dpf_Hdf5_dll_cs` |
| Base Class | `Ans.DataProcessing.internal_objects.BaseOperator` |

## Constructors

#### Constructor

```python
hdf5dpf_custom_read()
```

#### Constructor

```python
hdf5dpf_custom_read(time_scoping, mesh_scoping, streams, data_sources, meta_data, result_name, config)
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
hdf5dpf_custom_read(config)
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
