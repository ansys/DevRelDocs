---
uid: Ans.DataProcessing.operators.mesh.mesh_get_attribute
---

# *class* mesh_get_attribute(meshed_region: object = None, property_name: object = None, property_identifier: object = None, config: OperatorConfig = None)

Uses the MeshedRegion APIs to return a given attribute of the mesh in input.

available inputs: `meshed_region` (MeshedRegion), `property_name` (string), `property_identifier` (Int32, string) (optional)

available outputs: `property` (Scoping ,Field ,PropertyField ,Int32 ,StringField)

**DPF Framework Reference:** [mesh_get_attribute operator specification](https://developer.ansys.com/docs/dpf-framework-2027-r1/operator-specifications/mesh/mesh_get_attribute.md)

**Parameters:**

* **meshed_region**
* **property_name**
* **property_identifier**
* **config**

**Example:**

```python
op = mesh_get_attribute()

op = mesh_get_attribute(meshed_region=my_meshed_region,property_name=my_property_name,property_identifier=my_property_identifier)
```

## Inputs

### meshed_region

**Type:** *LinkableInput*

### property_name

Supported property names are: "connectivity", "reverse_connectivity", "mat", "faces_nodes_connectivity", "elements_faces_connectivity" (or any mesh's property field), "coordinates", "named_selection", "num_named_selections", "named_selection_names", "named_selection_locations", "node_scoping", "element_scoping", "face_scoping"...

**Type:** *LinkableInput*

### property_identifier

Can be used to get a property at a given index, example: a named selection's number or by name, example: a named selection's name.

**Type:** *LinkableInput*

## Outputs

### property

Returns a property field for properties: "connectivity", "reverse_connectivity", "mat", "faces_nodes_connectivity", "elements_faces_connectivity" (or any mesh's property field), a field for property: "coordinates", a scoping for properties:"named_selection", "node_scoping", "element_scoping", "face_scoping", a string field for properties: "named_selection_names", "named_selection_locations" and an int for property: "num_named_selections".

**Type:** *LinkableOutput*

## Methods

## Properties

#### *property* inputs: InputSpec

*get/set*

#### *property* outputs: OutputSpec

*get/set*

#### *property* defaultConfig: Config

*get*
