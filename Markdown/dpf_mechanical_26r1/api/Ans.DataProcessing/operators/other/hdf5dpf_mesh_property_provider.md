---
uid: Ans.DataProcessing.operators.other.hdf5dpf_mesh_property_provider
---

# hdf5dpf_mesh_property_provider Class

**Namespace:** [Ans.DataProcessing.operators.other](Ans_DataProcessing_operators_other.md)

## Summary

Reads a property related to the mesh, defined by its name, by calling the readers defined by the data sources. These properties can be used to fill in the mesh.

available inputs: `mesh_scoping` (Scoping) (optional), `streams_container` (StreamsContainer) (optional), `data_sources` (DataSources), `property_name` (string), `property_identifier` (Int32, string) (optional)

available outputs: `property` (Scoping ,PropertyField ,StringField)

## Example

```python
op = hdf5dpf_mesh_property_provider()

op = hdf5dpf_mesh_property_provider(mesh_scoping=my_mesh_scoping,streams_container=my_streams_container,data_sources=my_data_sources,property_name=my_property_name,property_identifier=my_property_identifier)
```

## Class Information

| Property | Value |
|----------|-------|
| Namespace | `Ans.DataProcessing.operators.other` |
| Assembly | `Ans_Dpf_Hdf5_dll_cs` |
| Base Class | `Ans.DataProcessing.internal_objects.BaseOperator` |

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

## Constructors

#### Constructor

```python
hdf5dpf_mesh_property_provider()
```

#### Constructor

```python
hdf5dpf_mesh_property_provider(mesh_scoping, streams_container, data_sources, property_name, property_identifier, config)
```

**Parameters:**

- `mesh_scoping` (*object*)
- `streams_container` (*object*)
- `data_sources` (*object*)
- `property_name` (*object*)
- `property_identifier` (*object*)
- `config` (*OperatorConfig*)

#### Constructor

```python
hdf5dpf_mesh_property_provider(config)
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
