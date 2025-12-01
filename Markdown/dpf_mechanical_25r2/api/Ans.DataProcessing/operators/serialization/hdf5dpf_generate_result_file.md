---
uid: Ans.DataProcessing.operators.serialization.hdf5dpf_generate_result_file
---

# hdf5dpf_generate_result_file Class

**Namespace:** [Ans.DataProcessing.operators.serialization](Ans_DataProcessing_operators_serialization.md)

## Summary

Generate a dpf result file from provided information.

available inputs: `append_mode` (bool) (optional), `dataset_size_compression_threshold` (Int32) (optional), `h5_native_compression` (Int32, DataTree) (optional), `export_floats` (bool) (optional), `filename` (string), `mesh_provider_out` (MeshedRegion) (optional), `time_freq_support_out` (TimeFreqSupport) (optional), `ansys_unit_system_id` (Int32, ResultInfo) (optional), `input_name1` (string, object) (optional), `input_name2` (string, object) (optional)

available outputs: `data_sources` (DataSources)

## Example

```python
op = hdf5dpf_generate_result_file()

op = hdf5dpf_generate_result_file(dataset_size_compression_threshold=my_dataset_size_compression_threshold,h5_native_compression=my_h5_native_compression,export_floats=my_export_floats,filename=my_filename,mesh_provider_out=my_mesh_provider_out,time_freq_support_out=my_time_freq_support_out,ansys_unit_system_id=my_ansys_unit_system_id,input_name1=my_input_name1,input_name2=my_input_name2)
```

## Class Information

| Property | Value |
|----------|-------|
| Namespace | `Ans.DataProcessing.operators.serialization` |
| Assembly | `Ans_Dpf_Hdf5_dll_cs` |
| Base Class | `Ans.DataProcessing.internal_objects.BaseOperator` |

## Inputs

### append_mode

Experimental: Allow appending chunked data to the file. This disables fields container content deduplication.

**Type:** *LinkableInput*

### dataset_size_compression_threshold

Integer value that defines the minimum dataset size (in bytes) to use h5 native compression Applicable for arrays of floats, doubles and integers.

**Type:** *LinkableInput*

### h5_native_compression

Integer value / DataTree that defines the h5 native compression used For Integer Input {0: No Compression (default); 1-9: GZIP Compression : 9 provides maximum compression but at the slowest speed.}For DataTree Input {type: None / GZIP / ZSTD; level: GZIP (1-9) / ZSTD (1-20); num_threads: ZSTD (>0)}

**Type:** *LinkableInput*

### export_floats

converts double to float to reduce file size (default is true)

**Type:** *LinkableInput*

### filename

name of the output file that will be generated (utf8).

**Type:** *LinkableInput*

### mesh_provider_out

defines the MeshedRegion that is exported and provided by MeshProvider.

**Type:** *LinkableInput*

### time_freq_support_out

defines the TimeFreqSupport that is exported and provided by TimeFreqSupportProvider.

**Type:** *LinkableInput*

### ansys_unit_system_id

defines the unit system the results are exported with. A Result info can be input to also export Physics Type and Analysis Type.

**Type:** *LinkableInput*

### input_name1

Set of even and odd pins to serialize results. Odd pins (4, 6, 8...) are strings, and they represent the names of the results to be serialized. Even pins (5, 7, 9...) are DPF types, and they represent the results to be serialized. They should go in pairs (for each result name, there should be a result) and connected sequentially.

**Type:** *LinkableInput*

### input_name2

Set of even and odd pins to serialize results. Odd pins (4, 6, 8...) are strings, and they represent the names of the results to be serialized. Even pins (5, 7, 9...) are DPF types, and they represent the results to be serialized. They should go in pairs (for each result name, there should be a result) and connected sequentially.

**Type:** *LinkableInput*

## Outputs

### data_sources

data_sources filled with the H5 generated file path.

**Type:** *LinkableOutput*

## Constructors

#### Constructor

```python
hdf5dpf_generate_result_file()
```

#### Constructor

```python
hdf5dpf_generate_result_file(dataset_size_compression_threshold, h5_native_compression, export_floats, filename, mesh_provider_out, time_freq_support_out, ansys_unit_system_id, input_name1, input_name2, config)
```

**Parameters:**

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
