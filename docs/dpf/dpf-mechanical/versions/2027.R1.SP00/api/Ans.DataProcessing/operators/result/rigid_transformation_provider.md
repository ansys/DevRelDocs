---
uid: Ans.DataProcessing.operators.result.rigid_transformation_provider
---

# *class* rigid_transformation_provider(streams: object = None, data_sources: object = None, config: OperatorConfig = None)

Extracts rigid body transformation from dsub file.

available inputs: `streams` (Stream) (optional), `data_sources` (DataSources)

available outputs: `fields_container` (FieldsContainer)

**DPF Framework Reference:** [rigid_transformation_provider operator specification](https://developer.ansys.com/docs/dpf-framework-2027-r1/operator-specifications/result/rigid_transformation_provider.md)

**Parameters:**

* **streams**
* **data_sources**
* **config**

**Example:**

```python
op = rigid_transformation_provider()

op = rigid_transformation_provider(streams=my_streams,data_sources=my_data_sources)
```

## Inputs

### streams

streams (result file container) (optional)

**Type:** *LinkableInput*

### data_sources

data source of dsub file.

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
