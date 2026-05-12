---
uid: Ans.DataProcessing.operators.metadata.mesh_info_provider
---

# *class* mesh_info_provider(time_scoping: object = None, streams_container: object = None, data_sources: object = None, config: OperatorConfig = None)

Reads the mesh information, such as number of elements (common property), number of faces (Cff plugins) or scoping of parts (LSDYNA plugins) on files contained in the streams or data sources.

available inputs: `time_scoping` (Int32) (optional), `streams_container` (StreamsContainer) (optional), `data_sources` (DataSources)

available outputs: `mesh_info` (GenericDataContainer)

**DPF Framework Reference:** [mesh_info_provider operator specification](https://developer.ansys.com/docs/dpf-framework-2027-r1/operator-specifications/metadata/mesh_info_provider.md)

**Parameters:**

* **time_scoping**
* **streams_container**
* **data_sources**
* **config**

**Example:**

```python
op = mesh_info_provider()

op = mesh_info_provider(time_scoping=my_time_scoping,streams_container=my_streams_container,data_sources=my_data_sources)
```

## Inputs

### time_scoping

Optional time/frequency set ID of the mesh.

**Type:** *LinkableInput*

### streams_container

streams (mesh file container) (optional)

**Type:** *LinkableInput*

### data_sources

If the stream is null, retrieves the file path from the data sources.

**Type:** *LinkableInput*

## Outputs

### mesh_info

**Type:** *LinkableOutput*

## Methods

## Properties

#### *property* inputs: InputSpec

*get/set*

#### *property* outputs: OutputSpec

*get/set*

#### *property* defaultConfig: Config

*get*
