---
uid: Ans.DataProcessing.operators.metadata.result_info_provider
---

# *class* result_info_provider(streams_container: object = None, data_sources: object = None, config: OperatorConfig = None)

Reads the result information, such as available results or unit systems from the results files contained in the streams or data sources.

available inputs: `streams_container` (StreamsContainer) (optional), `data_sources` (DataSources)

available outputs: `result_info` (ResultInfo)

**DPF Framework Reference:** [result_info_provider operator specification](https://developer.ansys.com/docs/dpf-framework-2027-r1/operator-specifications/metadata/result_info_provider.md)

**Parameters:**

* **streams_container**
* **data_sources**
* **config**

**Example:**

```python
op = result_info_provider()

op = result_info_provider(streams_container=my_streams_container,data_sources=my_data_sources)
```

## Inputs

### streams_container

streams (result file container) (optional)

**Type:** *LinkableInput*

### data_sources

If the stream is null, retrieves the file path from the data sources.

**Type:** *LinkableInput*

## Outputs

### result_info

**Type:** *LinkableOutput*

## Methods

## Properties

#### *property* inputs: InputSpec

*get/set*

#### *property* outputs: OutputSpec

*get/set*

#### *property* defaultConfig: Config

*get*
