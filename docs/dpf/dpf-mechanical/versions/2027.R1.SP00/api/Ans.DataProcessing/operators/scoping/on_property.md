---
uid: Ans.DataProcessing.operators.scoping.on_property
---

# *class* on_property(requested_location: object = None, property_name: object = None, property_id: object = None, streams_container: object = None, data_sources: object = None, config: OperatorConfig = None)

Provides a scoping at a given location based on a given property name and a property number.

available inputs: `requested_location` (string), `property_name` (string), `property_id` (Int32), `streams_container` (StreamsContainer) (optional), `data_sources` (DataSources)

available outputs: `mesh_scoping` (Scoping)

**DPF Framework Reference:** [on_property operator specification](https://developer.ansys.com/docs/dpf-framework-2027-r1/operator-specifications/scoping/on_property.md)

**Parameters:**

* **requested_location**
* **property_name**
* **property_id**
* **streams_container**
* **data_sources**
* **config**

**Example:**

```python
op = on_property()

op = on_property(requested_location=my_requested_location,property_name=my_property_name,property_id=my_property_id,streams_container=my_streams_container,data_sources=my_data_sources)
```

## Inputs

### requested_location

Nodal or Elemental location are expected

**Type:** *LinkableInput*

### property_name

ex "mapdl_element_type", "mapdl_element_type_id", "apdl_type_index", "mapdl_type_id", "material", "apdl_section_id", "apdl_real_id", "apdl_esys_id", "apdl_tshape", "shell_axi", "volume_axi"...

**Type:** *LinkableInput*

### property_id

property_id or vector of property ids

**Type:** *LinkableInput*

### streams_container

**Type:** *LinkableInput*

### data_sources

**Type:** *LinkableInput*

## Outputs

### mesh_scoping

Scoping

**Type:** *LinkableOutput*

## Methods

## Properties

#### *property* inputs: InputSpec

*get/set*

#### *property* outputs: OutputSpec

*get/set*

#### *property* defaultConfig: Config

*get*
