---
uid: Ans.DataProcessing.operators.serialization.vtk_to_fields
---

# *class* vtk_to_fields(field_name: object = None, streams: object = None, data_sources: object = None, config: OperatorConfig = None)

Write a field based on a vtk file.

available inputs: `field_name` (string) (optional), `streams` (StreamsContainer) (optional), `data_sources` (DataSources)

available outputs: `fields_container` (FieldsContainer)

**DPF Framework Reference:** [vtk_to_fields operator specification](https://developer.ansys.com/docs/dpf-framework-2027-r1/operator-specifications/serialization/vtk_to_fields.md)

**Parameters:**

* **field_name**
* **streams**
* **data_sources**
* **config**

**Example:**

```python
op = vtk_to_fields()

op = vtk_to_fields(field_name=my_field_name,streams=my_streams,data_sources=my_data_sources)
```

## Inputs

### field_name

name of the field in the vtk file

**Type:** *LinkableInput*

### streams

**Type:** *LinkableInput*

### data_sources

**Type:** *LinkableInput*

## Outputs

### fields_container

fields_container

**Type:** *LinkableOutput*

## Methods

## Properties

#### *property* inputs: InputSpec

*get/set*

#### *property* outputs: OutputSpec

*get/set*

#### *property* defaultConfig: Config

*get*
