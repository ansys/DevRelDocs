---
uid: Ans.DataProcessing.operators.math.accumulation_per_scoping
---

# *class* accumulation_per_scoping(fields_container: object = None, mesh_scoping: object = None, streams_container: object = None, data_sources: object = None, scopings_container: object = None, config: OperatorConfig = None)

This operator calculates the sum and the percentage of total sum of the input fields container for each scoping of the scopings container.

available inputs: `fields_container` (FieldsContainer), `mesh_scoping` (Scoping) (optional), `streams_container` (StreamsContainer), `data_sources` (DataSources), `scopings_container` (ScopingsContainer)

available outputs: `accumulation_per_scoping` (FieldsContainer), `accumulation_per_scoping_percentage` (FieldsContainer)

**DPF Framework Reference:** [accumulation_per_scoping operator specification](https://developer.ansys.com/docs/dpf-framework-2027-r1/operator-specifications/math/accumulation_per_scoping.md)

**Parameters:**

* **fields_container**
* **mesh_scoping**
* **streams_container**
* **data_sources**
* **scopings_container**
* **config**

**Example:**

```python
op = accumulation_per_scoping()

op = accumulation_per_scoping(fields_container=my_fields_container,mesh_scoping=my_mesh_scoping,streams_container=my_streams_container,data_sources=my_data_sources,scopings_container=my_scopings_container)
```

## Inputs

### fields_container

**Type:** *LinkableInput*

### mesh_scoping

Master scoping. All scopings in the Scopings Container will be intersected with this scoping.

**Type:** *LinkableInput*

### streams_container

**Type:** *LinkableInput*

### data_sources

**Type:** *LinkableInput*

### scopings_container

The intersection between the of the first will be used.

**Type:** *LinkableInput*

## Outputs

### accumulation_per_scoping

**Type:** *LinkableOutput*

### accumulation_per_scoping_percentage

**Type:** *LinkableOutput*

## Methods

## Properties

#### *property* inputs: InputSpec

*get/set*

#### *property* outputs: OutputSpec

*get/set*

#### *property* defaultConfig: Config

*get*
