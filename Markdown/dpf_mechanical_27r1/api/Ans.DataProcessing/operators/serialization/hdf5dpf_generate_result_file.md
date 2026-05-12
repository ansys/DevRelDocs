---
uid: Ans.DataProcessing.operators.serialization.hdf5dpf_generate_result_file
---

# *class* hdf5dpf_generate_result_file(h5_chunk_size: object = None, dataset_size_compression_threshold: object = None, h5_native_compression: object = None, export_floats: object = None, filename: object = None, mesh_provider_out: object = None, time_freq_support_out: object = None, ansys_unit_system_id: object = None, input_name1: object = None, input_name2: object = None, config: OperatorConfig = None)

Generate a dpf result file from provided information.

available inputs: `h5_chunk_size` (Int32) (optional), `append_mode` (bool) (optional), `dataset_size_compression_threshold` (Int32) (optional), `h5_native_compression` (Int32, DataTree) (optional), `export_floats` (bool) (optional), `filename` (string), `mesh_provider_out` (MeshedRegion) (optional), `time_freq_support_out` (TimeFreqSupport) (optional), `ansys_unit_system_id` (Int32, ResultInfo) (optional), `input_name1` (string, Any) (optional), `input_name2` (string, Any) (optional)

available outputs: `data_sources` (DataSources)

**DPF Framework Reference:** [hdf5dpf_generate_result_file operator specification](https://developer.ansys.com/docs/dpf-framework-2027-r1/operator-specifications/serialization/hdf5dpf_generate_result_file.md)

**Parameters:**

* **h5_chunk_size**
* **dataset_size_compression_threshold**
* **h5_native_compression**
* **export_floats**
* **filename**
* **mesh_provider_out**
* **time_freq_support_out**
* **ansys_unit_system_id**
* **input_name1**
* **input_name2**
* **config**

**Example:**

```python
op = hdf5dpf_generate_result_file()

op = hdf5dpf_generate_result_file(h5_chunk_size=my_h5_chunk_size,dataset_size_compression_threshold=my_dataset_size_compression_threshold,h5_native_compression=my_h5_native_compression,export_floats=my_export_floats,filename=my_filename,mesh_provider_out=my_mesh_provider_out,time_freq_support_out=my_time_freq_support_out,ansys_unit_system_id=my_ansys_unit_system_id,input_name1=my_input_name1,input_name2=my_input_name2)
```

## Inputs

### h5_chunk_size

Size of each HDF5 chunk in kilobytes (KB). Default: 1 MB when compression is enabled; for uncompressed datasets, the default is the full dataset size x dimension.

**Type:** *LinkableInput*

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

## Methods

## Properties

#### *property* inputs: InputSpec

*get/set*

#### *property* outputs: OutputSpec

*get/set*

#### *property* defaultConfig: Config

*get*
