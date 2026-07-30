---
uid: Ans.DataProcessing.operators.scoping.on_property
---

# *class* on_property(requested_location: object = None, property_name: object = None, property_id: object = None, streams_container: object = None, data_sources: object = None, config: OperatorConfig = None)

on_property()

on_property(requested_location: object, property_name: object, property_id: object, streams_container: object, data_sources: object, config: OperatorConfig)

on_property(config: OperatorConfig)



**DPF Framework Reference:** [on_property operator specification](https://developer-a.synopsys.com/docs/dpf-framework-2027-r1/operator-specifications/scoping/on_property.md)

**Parameters:**

* **requested_location**
* **property_name**
* **property_id**
* **streams_container**
* **data_sources**
* **config**

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
