---
uid: Ans.DataProcessing.operators.metadata.property_field_provider_by_name
---

# *class* property_field_provider_by_name(mesh_scoping: object = None, streams_container: object = None, data_sources: object = None, property_name: object = None, config: OperatorConfig = None)

Provides the property values for a set of elements for a defined property name.

available inputs: `mesh_scoping` (Scoping) (optional), `streams_container` (StreamsContainer) (optional), `data_sources` (DataSources), `property_name` (string)

available outputs: `property_field` (PropertyField)

**DPF Framework Reference:** [property_field_provider_by_name operator specification](https://developer.ansys.com/docs/dpf-framework-2027-r1/operator-specifications/metadata/property_field_provider_by_name.md)

**Parameters:**

* **mesh_scoping**
* **streams_container**
* **data_sources**
* **property_name**
* **config**

**Example:**

```python
op = property_field_provider_by_name()

op = property_field_provider_by_name(mesh_scoping=my_mesh_scoping,streams_container=my_streams_container,data_sources=my_data_sources,property_name=my_property_name)
```

## Inputs

### mesh_scoping

scoping that defines the set of elements to fetch the property values for. If not specified, applied on all the elements of the mesh.

**Type:** *LinkableInput*

### streams_container

optional if using a dataSources

**Type:** *LinkableInput*

### data_sources

optional if using a streamsContainer

**Type:** *LinkableInput*

### property_name

property to read, that can be the following: elements_connectivity, nodes_connectivity, material, element_type, apdl_section_id, apdl_real_id, apdl_esys_id, apdl_tshape, mapdl_element_type, mapdl_element_type_id, harmonic_index, step, substep, keyopt_i (i = 1 -> 18).

**Type:** *LinkableInput*

## Outputs

### property_field

property field

**Type:** *LinkableOutput*

## Methods

## Properties

#### *property* inputs: InputSpec

*get/set*

#### *property* outputs: OutputSpec

*get/set*

#### *property* defaultConfig: Config

*get*
