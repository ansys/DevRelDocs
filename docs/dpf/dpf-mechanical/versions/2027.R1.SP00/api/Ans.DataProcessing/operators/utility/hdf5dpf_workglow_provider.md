---
uid: Ans.DataProcessing.operators.utility.hdf5dpf_workglow_provider
---

# *class* hdf5dpf_workglow_provider(time_scoping: object = None, mesh_scoping: object = None, streams: object = None, data_sources: object = None, meta_data: object = None, result_name: object = None, config: OperatorConfig = None)

Extract a custom result from an hdf5dpf file as an executable workflow.

available inputs: `time_scoping` (Scoping) (optional), `mesh_scoping` (Scoping) (optional), `streams` (StreamsContainer) (optional), `data_sources` (DataSources) (optional), `meta_data` (DataTree) (optional), `result_name` (Any)

available outputs: `field_or_fields_container` (Workflow)

**DPF Framework Reference:** [hdf5dpf_workglow_provider operator specification](https://developer.ansys.com/docs/dpf-framework-2027-r1/operator-specifications/utility/hdf5dpf_workglow_provider.md)

**Parameters:**

* **time_scoping**
* **mesh_scoping**
* **streams**
* **data_sources**
* **meta_data**
* **result_name**
* **config**

**Example:**

```python
op = hdf5dpf_workglow_provider()

op = hdf5dpf_workglow_provider(time_scoping=my_time_scoping,mesh_scoping=my_mesh_scoping,streams=my_streams,data_sources=my_data_sources,meta_data=my_meta_data,result_name=my_result_name)
```

## Inputs

### time_scoping

**Type:** *LinkableInput*

### mesh_scoping

**Type:** *LinkableInput*

### streams

Hdf5df file stream.

**Type:** *LinkableInput*

### data_sources

Hdf5df file data source.

**Type:** *LinkableInput*

### meta_data

meta_data that may be used to evaluate results or extract workflows.

**Type:** *LinkableInput*

### result_name

Name of the result that must be extracted from the hdf5dpf file

**Type:** *LinkableInput*

## Outputs

### field_or_fields_container

**Type:** *LinkableOutput*

## Methods

## Properties

#### *property* inputs: InputSpec

*get/set*

#### *property* outputs: OutputSpec

*get/set*

#### *property* defaultConfig: Config

*get*
