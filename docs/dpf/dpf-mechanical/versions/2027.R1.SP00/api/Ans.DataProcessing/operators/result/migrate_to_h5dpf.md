---
uid: Ans.DataProcessing.operators.result.migrate_to_h5dpf
---

# *class* migrate_to_h5dpf(h5_chunk_size: object = None, dataset_size_compression_threshold: object = None, h5_native_compression: object = None, export_floats: object = None, filename: object = None, comma_separated_list_of_results: object = None, all_time_sets: object = None, streams_container: object = None, data_sources: object = None, filtering_workflow: object = None, config: OperatorConfig = None)

Read mesh properties from the results files contained in the streams or data sources and make those properties available through a mesh selection manager in output.User can input a GenericDataContainer that will map an item to a result name. Example of Map: {{ default: wf1}, {EUL: wf2}, {ENG_SE: wf3}}.

available inputs: `h5_chunk_size` (Int32, GenericDataContainer) (optional), `dataset_size_compression_threshold` (Int32, GenericDataContainer) (optional), `h5_native_compression` (Int32, DataTree, GenericDataContainer) (optional), `export_floats` (bool, GenericDataContainer) (optional), `filename` (string), `comma_separated_list_of_results` (string) (optional), `all_time_sets` (bool) (optional), `streams_container` (StreamsContainer) (optional), `data_sources` (DataSources) (optional), `compression_workflow` (Workflow, GenericDataContainer) (optional), `filtering_workflow` (Workflow, GenericDataContainer) (optional)

available outputs: `migrated_file` (DataSources)

**DPF Framework Reference:** [migrate_to_h5dpf operator specification](https://developer.ansys.com/docs/dpf-framework-2027-r1/operator-specifications/result/migrate_to_h5dpf.md)

**Parameters:**

* **h5_chunk_size**
* **dataset_size_compression_threshold**
* **h5_native_compression**
* **export_floats**
* **filename**
* **comma_separated_list_of_results**
* **all_time_sets**
* **streams_container**
* **data_sources**
* **filtering_workflow**
* **config**

**Example:**

```python
op = migrate_to_h5dpf()

op = migrate_to_h5dpf(h5_chunk_size=my_h5_chunk_size,dataset_size_compression_threshold=my_dataset_size_compression_threshold,h5_native_compression=my_h5_native_compression,export_floats=my_export_floats,filename=my_filename,comma_separated_list_of_results=my_comma_separated_list_of_results,all_time_sets=my_all_time_sets,streams_container=my_streams_container,data_sources=my_data_sources,filtering_workflow=my_filtering_workflow)
```

## Inputs

### h5_chunk_size

Size of each HDF5 chunk in kilobytes (KB). Default: 1 MB when compression is enabled; for uncompressed datasets, the default is the full dataset size x dimension.

**Type:** *LinkableInput*

### dataset_size_compression_threshold

Integer value that defines the minimum dataset size (in bytes) to use h5 native compression Applicable for arrays of floats, doubles and integers.

**Type:** *LinkableInput*

### h5_native_compression

Integer value / DataTree that defines the h5 native compression used For Integer Input {0: No Compression (default); 1-9: GZIP Compression : 9 provides maximum compression but at the slowest speed.}For DataTree Input {type: None / GZIP / ZSTD; level: GZIP (1-9) / ZSTD (1-20); num_threads: ZSTD (>0)}

**Type:** *LinkableInput*

### export_floats

Converts double to float to reduce file size (default is true).If False, nodal results are exported as double precision and elemental results as single precision.

**Type:** *LinkableInput*

### filename

filename of the migrated file

**Type:** *LinkableInput*

### comma_separated_list_of_results

list of results (source operator names) separated by semicolons that will be stored. (Example: U;S;EPEL). If empty, all available results will be converted.

**Type:** *LinkableInput*

### all_time_sets

Deprecated. Please use filtering workflows instead to select time scoping. Default is false.

**Type:** *LinkableInput*

### streams_container

streams (result file container) (optional)

**Type:** *LinkableInput*

### data_sources

if the stream is null then we need to get the file path from the data sources

**Type:** *LinkableInput*

### compression_workflow

BETA Option: Applies input compression workflow.

**Type:** *LinkableInput*

### filtering_workflow

Applies input filtering workflow.

**Type:** *LinkableInput*

## Outputs

### migrated_file

**Type:** *LinkableOutput*

## Methods

## Properties

#### *property* inputs: InputSpec

*get/set*

#### *property* outputs: OutputSpec

*get/set*

#### *property* defaultConfig: Config

*get*
