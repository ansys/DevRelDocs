---
uid: Ans.DataProcessing.operators.metadata.mesh_property_provider
---

# *class* mesh_property_provider(mesh_scoping: object = None, streams_container: object = None, data_sources: object = None, property_name: object = None, property_identifier: object = None, config: OperatorConfig = None)

Reads a property related to the mesh, defined by its name, by calling the readers defined by the data sources. These properties can be used to fill in the mesh.

available inputs: `mesh_scoping` (Scoping) (optional), `streams_container` (StreamsContainer) (optional), `data_sources` (DataSources), `property_name` (string), `property_identifier` (Int32, string) (optional)

available outputs: `property` (Scoping ,PropertyField ,StringField)

**DPF Framework Reference:** [mesh_property_provider operator specification](https://developer.ansys.com/docs/dpf-framework-2027-r1/operator-specifications/metadata/mesh_property_provider.md)

**Parameters:**

* **mesh_scoping**
* **streams_container**
* **data_sources**
* **property_name**
* **property_identifier**
* **config**

**Example:**

```python
op = mesh_property_provider()

op = mesh_property_provider(mesh_scoping=my_mesh_scoping,streams_container=my_streams_container,data_sources=my_data_sources,property_name=my_property_name,property_identifier=my_property_identifier)
```

## Inputs

### mesh_scoping

Retrieves a property field on a subset of elements or nodes.

**Type:** *LinkableInput*

### streams_container

streams (result file container) (optional)

**Type:** *LinkableInput*

### data_sources

If the stream is null, retrieves the file path from the data sources.

**Type:** *LinkableInput*

### property_name

Supported property names are: "mat", "named_selection", "named_selection_names", "apdl_element_type", "section", "elprops", "keyopt_1" to "keyopt_18".

**Type:** *LinkableInput*

### property_identifier

Retrieves a property at a given index or by name. For example, a named selection's number or a named selection's name.

**Type:** *LinkableInput*

## Outputs

### property

Returns a property field for properties: "mat", "apdl_element_type", "section", "elprops", "keyopt_1" to "keyopt_18" (or any mesh's property field), a scoping for properties:"named_selection", a string field for properties: "named_selection_names".

**Type:** *LinkableOutput*

## Methods

## Properties

#### *property* inputs: InputSpec

*get/set*

#### *property* outputs: OutputSpec

*get/set*

#### *property* defaultConfig: Config

*get*
