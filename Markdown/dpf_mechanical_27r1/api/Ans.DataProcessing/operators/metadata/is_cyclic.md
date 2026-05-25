---
uid: Ans.DataProcessing.operators.metadata.is_cyclic
---

# *class* is_cyclic(streams_container: object = None, data_sources: object = None, config: OperatorConfig = None)

Reads if the model is cyclic from the result file.

available inputs: `streams_container` (StreamsContainer) (optional), `data_sources` (DataSources)

available outputs: `file_path` (string)

**DPF Framework Reference:** [is_cyclic operator specification](https://developer.ansys.com/docs/dpf-framework-2027-r1/operator-specifications/metadata/is_cyclic.md)

**Parameters:**

* **streams_container**
* **data_sources**
* **config**

**Example:**

```python
op = is_cyclic()

op = is_cyclic(streams_container=my_streams_container,data_sources=my_data_sources)
```

## Inputs

### streams_container

streams (result file container) (optional)

**Type:** *LinkableInput*

### data_sources

If the stream is null, retrieves the file path from the data sources.

**Type:** *LinkableInput*

## Outputs

### file_path

returns 'single_stage' or 'multi_stage' or an empty string for non cyclic model

**Type:** *LinkableOutput*

## Methods

## Properties

#### *property* inputs: InputSpec

*get/set*

#### *property* outputs: OutputSpec

*get/set*

#### *property* defaultConfig: Config

*get*
