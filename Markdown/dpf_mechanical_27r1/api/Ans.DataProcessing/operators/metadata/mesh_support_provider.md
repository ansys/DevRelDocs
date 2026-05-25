---
uid: Ans.DataProcessing.operators.metadata.mesh_support_provider
---

# *class* mesh_support_provider(streams_container: object = None, data_sources: object = None, config: OperatorConfig = None)

Reads the mesh support.

available inputs: `streams_container` (StreamsContainer) (optional), `data_sources` (DataSources)

available outputs: `abstract_field_support` (AbstractFieldSupport)

**DPF Framework Reference:** [mesh_support_provider operator specification](https://developer.ansys.com/docs/dpf-framework-2027-r1/operator-specifications/metadata/mesh_support_provider.md)

**Parameters:**

* **streams_container**
* **data_sources**
* **config**

**Example:**

```python
op = mesh_support_provider()

op = mesh_support_provider(streams_container=my_streams_container,data_sources=my_data_sources)
```

## Inputs

### streams_container

Streams (result file container) (optional).

**Type:** *LinkableInput*

### data_sources

If the stream is null, retrieves the file path from the data sources.

**Type:** *LinkableInput*

## Outputs

### abstract_field_support

**Type:** *LinkableOutput*

## Methods

## Properties

#### *property* inputs: InputSpec

*get/set*

#### *property* outputs: OutputSpec

*get/set*

#### *property* defaultConfig: Config

*get*
