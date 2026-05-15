---
uid: Ans.DataProcessing.operators.result.layer_orientation_provider
---

# *class* layer_orientation_provider(streams: object = None, data_sources: object = None, config: OperatorConfig = None)

Read the layer orientations.

available inputs: `streams` (StreamsContainer) (optional), `data_sources` (DataSources)

available outputs: `layer_orientation_data` (FieldsContainer)

**DPF Framework Reference:** [layer_orientation_provider operator specification](https://developer.ansys.com/docs/dpf-framework-2027-r1/operator-specifications/result/layer_orientation_provider.md)

**Parameters:**

* **streams**
* **data_sources**
* **config**

**Example:**

```python
op = layer_orientation_provider()

op = layer_orientation_provider(streams=my_streams,data_sources=my_data_sources)
```

## Inputs

### streams

Result file container allowed to be kept open to cache data.

**Type:** *LinkableInput*

### data_sources

Result file path container, used if no streams are set.

**Type:** *LinkableInput*

## Outputs

### layer_orientation_data

Requested data as FieldsContainer.

**Type:** *LinkableOutput*

## Methods

## Properties

#### *property* inputs: InputSpec

*get/set*

#### *property* outputs: OutputSpec

*get/set*

#### *property* defaultConfig: Config

*get*
