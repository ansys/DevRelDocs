---
uid: Ans.DataProcessing.operators.result.euler_nodes
---

# *class* euler_nodes(streams_container: object = None, data_sources: object = None, filter_zeros: object = None, coord_and_euler: object = None, mesh: object = None, config: OperatorConfig = None)

Reads a field made of 3 coordinates and 3 Euler angles (6 dofs) by node from the result file.

available inputs: `streams_container` (StreamsContainer, Stream) (optional), `data_sources` (DataSources), `filter_zeros` (bool), `coord_and_euler` (bool), `mesh` (MeshedRegion) (optional)

available outputs: `fields_container` (FieldsContainer)

**DPF Framework Reference:** [euler_nodes operator specification](https://developer.ansys.com/docs/dpf-framework-2027-r1/operator-specifications/result/euler_nodes.md)

**Parameters:**

* **streams_container**
* **data_sources**
* **filter_zeros**
* **coord_and_euler**
* **mesh**
* **config**

**Example:**

```python
op = euler_nodes()

op = euler_nodes(streams_container=my_streams_container,data_sources=my_data_sources,filter_zeros=my_filter_zeros,coord_and_euler=my_coord_and_euler,mesh=my_mesh)
```

## Inputs

### streams_container

**Type:** *LinkableInput*

### data_sources

**Type:** *LinkableInput*

### filter_zeros

if true, then the field will only contain the scoping if any rotation is not zero. (default is false).

**Type:** *LinkableInput*

### coord_and_euler

if true, then the field has ncomp=6 with 3 coordinates and 3 Euler angles, else there is only the Euler angles (default is true).

**Type:** *LinkableInput*

### mesh

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
