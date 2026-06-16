---
uid: Ans.DataProcessing.operators.math.hdf5.topo.elemental_density
---

# *class* elemental_density(time_scoping: object = None, mesh_scoping: object = None, streams: object = None, data_sources: object = None, custom_ponderation_name: object = None, config: OperatorConfig = None)

Extract Elemental Topology Density result from topo solver output. Default behavior is to use graphical density.

available inputs: `time_scoping` (Scoping) (optional), `mesh_scoping` (Scoping) (optional), `streams` (StreamsContainer) (optional), `data_sources` (DataSources) (optional), `custom_ponderation_name` (string)

available outputs: `field` (Field)

**DPF Framework Reference:** [elemental_density operator specification](https://developer.ansys.com/docs/dpf-framework-2027-r1/operator-specifications/math/elemental_density.md)

**Parameters:**

* **time_scoping**
* **mesh_scoping**
* **streams**
* **data_sources**
* **custom_ponderation_name**
* **config**

**Example:**

```python
op = elemental_density()

op = elemental_density(time_scoping=my_time_scoping,mesh_scoping=my_mesh_scoping,streams=my_streams,data_sources=my_data_sources,custom_ponderation_name=my_custom_ponderation_name)
```

## Inputs

### time_scoping

**Type:** *LinkableInput*

### mesh_scoping

**Type:** *LinkableInput*

### streams

topo file stream.

**Type:** *LinkableInput*

### data_sources

topo file data source.

**Type:** *LinkableInput*

### custom_ponderation_name

take custom ponderation_field from the topo file by name

**Type:** *LinkableInput*

## Outputs

### field

**Type:** *LinkableOutput*

## Methods

## Properties

#### *property* inputs: InputSpec

*get/set*

#### *property* outputs: OutputSpec

*get/set*

#### *property* defaultConfig: Config

*get*
