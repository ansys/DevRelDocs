---
uid: Ans.DataProcessing.operators.result.rigid_transformation
---

# *class* rigid_transformation(streams_container: object = None, data_sources: object = None, config: OperatorConfig = None)

Extracts rigid body motions from a displacement in input.

available inputs: `streams_container` (StreamsContainer) (optional), `data_sources` (DataSources)

available outputs: `fields_container` (FieldsContainer)

**DPF Framework Reference:** [rigid_transformation operator specification](https://developer.ansys.com/docs/dpf-framework-2027-r1/operator-specifications/result/rigid_transformation.md)

**Parameters:**

* **streams_container**
* **data_sources**
* **config**

**Example:**

```python
op = rigid_transformation()

op = rigid_transformation(streams_container=my_streams_container,data_sources=my_data_sources)
```

## Inputs

### streams_container

streams (result file container) (optional)

**Type:** *LinkableInput*

### data_sources

If the stream is null, retrieves the file path from the data sources.

**Type:** *LinkableInput*

## Outputs

### fields_container

**Type:** *LinkableOutput*

## Methods

## Properties

#### *property* inputs: InputSpec

*get/set*

#### *property* outputs: OutputSpec

*get/set*

#### *property* defaultConfig: Config

*get*
