---
uid: Ans.DataProcessing.operators.mesh.mesh_get_attribute
---

# mesh_get_attribute Class

**Namespace:** [Ans.DataProcessing.operators.mesh](Ans_DataProcessing_operators_mesh.md)

## Summary

Uses the MeshedRegion APIs to return a given attribute of the mesh in input.

available inputs: `meshed_region` (MeshedRegion), `property_name` (string), `property_identifier` (Int32, string) (optional)

available outputs: `property` (Scoping ,Field ,PropertyField ,Int32 ,StringField)

## Example

```python
op = mesh_get_attribute()

op = mesh_get_attribute(meshed_region=my_meshed_region,property_name=my_property_name,property_identifier=my_property_identifier)
```

## Class Information

| Property | Value |
|----------|-------|
| Namespace | `Ans.DataProcessing.operators.mesh` |
| Assembly | `Ans_Dpf_Native_dll_cs` |
| Base Class | `Ans.DataProcessing.internal_objects.BaseOperator` |

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

## Constructors

#### Constructor

```python
mesh_get_attribute()
```

#### Constructor

```python
mesh_get_attribute(meshed_region, property_name, property_identifier, config)
```

**Parameters:**

- `meshed_region` (*object*)
- `property_name` (*object*)
- `property_identifier` (*object*)
- `config` (*OperatorConfig*)

#### Constructor

```python
mesh_get_attribute(config)
```

**Parameters:**

- `config` (*OperatorConfig*)

## Methods

## Properties

#### inputs

**Type:** *InputSpec*

```python
# Get or set the property
value = obj.inputs
obj.inputs = new_value
```

#### outputs

**Type:** *OutputSpec*

```python
# Get or set the property
value = obj.outputs
obj.outputs = new_value
```

#### defaultConfig

**Type:** *Config*

```python
# Get the property (read-only)
value = obj.defaultConfig
```
