---
uid: Ans.DataProcessing.operators.result.compute_stress_YZ
---

# *class* compute_stress_YZ(scoping: object = None, streams_container: object = None, data_sources: object = None, requested_location: object = None, strain: object = None, config: OperatorConfig = None)

Computes the stress from an elastic strain field. compute_total_strain limitations are applicable for stress computation Get the YZ shear component (12 component).

available inputs: `scoping` (Scoping) (optional), `streams_container` (StreamsContainer) (optional), `data_sources` (DataSources) (optional), `requested_location` (string) (optional), `strain` (FieldsContainer, Field)

available outputs: `fields_container` (FieldsContainer)

**DPF Framework Reference:** [compute_stress_YZ operator specification](https://developer.ansys.com/docs/dpf-framework-2027-r1/operator-specifications/result/compute_stress_YZ.md)

**Parameters:**

* **scoping**
* **streams_container**
* **data_sources**
* **requested_location**
* **strain**
* **config**

**Example:**

```python
op = compute_stress_YZ()

op = compute_stress_YZ(scoping=my_scoping,streams_container=my_streams_container,data_sources=my_data_sources,requested_location=my_requested_location,strain=my_strain)
```

## Inputs

### scoping

The element scoping on which the result is computed.

**Type:** *LinkableInput*

### streams_container

Needed to get mesh and material ids. Optional if a data_sources have been connected.

**Type:** *LinkableInput*

### data_sources

Needed to get mesh and material ids. Optional if a streams_container have been connected.

**Type:** *LinkableInput*

### requested_location

Average the Elemental Nodal result to the requested location.

**Type:** *LinkableInput*

### strain

Field/or fields container containing only the elastic strain field (element nodal).

**Type:** *LinkableInput*

## Outputs

### fields_container

The computed result fields container (elemental nodal).

**Type:** *LinkableOutput*

## Methods

## Properties

#### *property* inputs: InputSpec

*get/set*

#### *property* outputs: OutputSpec

*get/set*

#### *property* defaultConfig: Config

*get*
