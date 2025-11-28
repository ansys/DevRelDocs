---
uid: Ans.DataProcessing.operators.result.migrate_to_h5dpf
---

# migrate_to_h5dpf Class

**Namespace:** [Ans.DataProcessing.operators.result](Ans_DataProcessing_operators_result.md)

Read mesh properties from the results files contained in the streams or data sources and make those properties available through a mesh selection manager in output.User can input a GenericDataContainer that will map an item to a result name. Example of Map: {{ default: wf1}, {EUL: wf2}, {ENG_SE: wf3}}.   ///available inputs: h5_chunk_size (Int32, GenericDataContainer) (optional), dataset_size_compression_threshold (Int32, GenericDataContainer) (optional), h5_native_compression (Int32, DataTree, GenericDataContainer) (optional), export_floats (bool, GenericDataContainer) (optional), filename (string), comma_separated_list_of_results (string) (optional), all_time_sets (bool) (optional), streams_container (StreamsContainer) (optional), data_sources (DataSources) (optional), compression_workflow (Workflow, GenericDataContainer) (optional), filtering_workflow (Workflow, GenericDataContainer) (optional)
            available outputs: migrated_file (DataSources)

migrate_to_h5dpf()
migrate_to_h5dpf(h5_chunk_size: object, dataset_size_compression_threshold: object, h5_native_compression: object, export_floats: object, filename: object, comma_separated_list_of_results: object, all_time_sets: object, streams_container: object, data_sources: object, filtering_workflow: object, config: OperatorConfig)
migrate_to_h5dpf(config: OperatorConfig)


## Class Information

| Property | Value |
|----------|-------|
| Namespace | `Ans.DataProcessing.operators.result` |
| Assembly | `Ans_Dpf_Hdf5_dll_cs` |
| Base Class | `Ans.DataProcessing.internal_objects.BaseOperator` |

## Constructors

#### Constructor

```python
migrate_to_h5dpf()
```

#### Constructor

```python
migrate_to_h5dpf(h5_chunk_size, dataset_size_compression_threshold, h5_native_compression, export_floats, filename, comma_separated_list_of_results, all_time_sets, streams_container, data_sources, filtering_workflow, config)
```

**Parameters:**

- `h5_chunk_size` (*object*)
- `dataset_size_compression_threshold` (*object*)
- `h5_native_compression` (*object*)
- `export_floats` (*object*)
- `filename` (*object*)
- `comma_separated_list_of_results` (*object*)
- `all_time_sets` (*object*)
- `streams_container` (*object*)
- `data_sources` (*object*)
- `filtering_workflow` (*object*)
- `config` (*OperatorConfig*)

#### Constructor

```python
migrate_to_h5dpf(config)
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
