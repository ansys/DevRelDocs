---
uid: Ans.DataProcessing.operators.serialization.hdf5dpf_generate_result_file
---

# hdf5dpf_generate_result_file Class

**Namespace:** [Ans.DataProcessing.operators.serialization](Ans_DataProcessing_operators_serialization.md)

Generate a dpf result file from provided information.   ///available inputs: h5_chunk_size (Int32) (optional), append_mode (bool) (optional), dataset_size_compression_threshold (Int32) (optional), h5_native_compression (Int32, DataTree) (optional), export_floats (bool) (optional), filename (string), mesh_provider_out (MeshedRegion) (optional), time_freq_support_out (TimeFreqSupport) (optional), ansys_unit_system_id (Int32, ResultInfo) (optional), input_name1 (string, object) (optional), input_name2 (string, object) (optional)
            available outputs: data_sources (DataSources)

hdf5dpf_generate_result_file()
hdf5dpf_generate_result_file(h5_chunk_size: object, dataset_size_compression_threshold: object, h5_native_compression: object, export_floats: object, filename: object, mesh_provider_out: object, time_freq_support_out: object, ansys_unit_system_id: object, input_name1: object, input_name2: object, config: OperatorConfig)
hdf5dpf_generate_result_file(config: OperatorConfig)


## Class Information

| Property | Value |
|----------|-------|
| Namespace | `Ans.DataProcessing.operators.serialization` |
| Assembly | `Ans_Dpf_Hdf5_dll_cs` |
| Base Class | `Ans.DataProcessing.internal_objects.BaseOperator` |

## Constructors

#### Constructor

```python
hdf5dpf_generate_result_file()
```

#### Constructor

```python
hdf5dpf_generate_result_file(h5_chunk_size, dataset_size_compression_threshold, h5_native_compression, export_floats, filename, mesh_provider_out, time_freq_support_out, ansys_unit_system_id, input_name1, input_name2, config)
```

**Parameters:**

- `h5_chunk_size` (*object*)
- `dataset_size_compression_threshold` (*object*)
- `h5_native_compression` (*object*)
- `export_floats` (*object*)
- `filename` (*object*)
- `mesh_provider_out` (*object*)
- `time_freq_support_out` (*object*)
- `ansys_unit_system_id` (*object*)
- `input_name1` (*object*)
- `input_name2` (*object*)
- `config` (*OperatorConfig*)

#### Constructor

```python
hdf5dpf_generate_result_file(config)
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
