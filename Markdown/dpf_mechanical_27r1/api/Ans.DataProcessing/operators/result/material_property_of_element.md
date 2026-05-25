---
uid: Ans.DataProcessing.operators.result.material_property_of_element
---

# *class* material_property_of_element(streams_container: object = None, data_sources: object = None, config: OperatorConfig = None)

Loads the appropriate operator based on the data sources and retrieves material properties.

available inputs: `streams_container` (StreamsContainer) (optional), `data_sources` (DataSources)

available outputs: `material_properties` (Field)

**DPF Framework Reference:** [material_property_of_element operator specification](https://developer.ansys.com/docs/dpf-framework-2027-r1/operator-specifications/result/material_property_of_element.md)

**Parameters:**

* **streams_container**
* **data_sources**
* **config**

**Example:**

```python
op = material_property_of_element()

op = material_property_of_element(streams_container=my_streams_container,data_sources=my_data_sources)
```

## Inputs

### streams_container

**Type:** *LinkableInput*

### data_sources

**Type:** *LinkableInput*

## Outputs

### material_properties

material properties

**Type:** *LinkableOutput*

## Methods

## Properties

#### *property* inputs: InputSpec

*get/set*

#### *property* outputs: OutputSpec

*get/set*

#### *property* defaultConfig: Config

*get*
