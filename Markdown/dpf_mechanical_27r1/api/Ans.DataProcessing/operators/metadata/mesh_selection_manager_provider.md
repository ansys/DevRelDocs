---
uid: Ans.DataProcessing.operators.metadata.mesh_selection_manager_provider
---

# *class* mesh_selection_manager_provider(streams_container: object = None, data_sources: object = None, config: OperatorConfig = None)

Reads mesh properties from the results files contained in the streams or data sources, and makes those properties available through a mesh selection manager in output.

available inputs: `streams_container` (StreamsContainer) (optional), `data_sources` (DataSources)

available outputs: `mesh_selection_manager` (MeshSelectionManager)

**DPF Framework Reference:** [mesh_selection_manager_provider operator specification](https://developer.ansys.com/docs/dpf-framework-2027-r1/operator-specifications/metadata/mesh_selection_manager_provider.md)

**Parameters:**

* **streams_container**
* **data_sources**
* **config**

**Example:**

```python
op = mesh_selection_manager_provider()

op = mesh_selection_manager_provider(streams_container=my_streams_container,data_sources=my_data_sources)
```

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

## Methods

## Properties

#### *property* inputs: InputSpec

*get/set*

#### *property* outputs: OutputSpec

*get/set*

#### *property* defaultConfig: Config

*get*
