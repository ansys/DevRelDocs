---
uid: Ans.DataProcessing.operators.result.plastic_strain_rotation_by_euler_nodes
---

# *class* plastic_strain_rotation_by_euler_nodes(fields_container: object = None, streams_container: object = None, data_sources: object = None, config: OperatorConfig = None)

read Euler angles on elements from the result file and rotate the fields in the fieldsContainer.

available inputs: `fields_container` (FieldsContainer) (optional), `streams_container` (StreamsContainer, Stream) (optional), `data_sources` (DataSources)

available outputs: `fields_container` (FieldsContainer)

**DPF Framework Reference:** [plastic_strain_rotation_by_euler_nodes operator specification](https://developer.ansys.com/docs/dpf-framework-2027-r1/operator-specifications/result/plastic_strain_rotation_by_euler_nodes.md)

**Parameters:**

* **fields_container**
* **streams_container**
* **data_sources**
* **config**

**Example:**

```python
op = plastic_strain_rotation_by_euler_nodes()

op = plastic_strain_rotation_by_euler_nodes(fields_container=my_fields_container,streams_container=my_streams_container,data_sources=my_data_sources)
```

## Inputs

### fields_container

**Type:** *LinkableInput*

### streams_container

**Type:** *LinkableInput*

### data_sources

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
