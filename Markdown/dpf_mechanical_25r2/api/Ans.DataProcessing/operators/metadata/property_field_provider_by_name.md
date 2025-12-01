---
uid: Ans.DataProcessing.operators.metadata.property_field_provider_by_name
---

# property_field_provider_by_name Class

**Namespace:** [Ans.DataProcessing.operators.metadata](Ans_DataProcessing_operators_metadata.md)

## Summary

Provides the property values for a set of elements for a defined property name.

available inputs: `mesh_scoping` (Scoping) (optional), `streams_container` (StreamsContainer) (optional), `data_sources` (DataSources), `property_name` (string)

available outputs: `property_field` (PropertyField)

## Example

```python
op = property_field_provider_by_name()

op = property_field_provider_by_name(mesh_scoping=my_mesh_scoping,streams_container=my_streams_container,data_sources=my_data_sources,property_name=my_property_name)
```

## Class Information

| Property | Value |
|----------|-------|
| Namespace | `Ans.DataProcessing.operators.metadata` |
| Assembly | `Ans_Dpf_Native_dll_cs` |
| Base Class | `Ans.DataProcessing.internal_objects.BaseOperator` |

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

property to read, that can be the following: elements_connectivity, nodes_connectivity, material, element_type, apdl_section_id, apdl_real_id, apdl_esys_id, mapdl_element_type, mapdl_element_type_id, harmonic_index, step, substep, keyopt_i (i = 1 -> 18).

**Type:** *LinkableInput*

## Outputs

### property_field

property field

**Type:** *LinkableOutput*

## Constructors

#### Constructor

```python
property_field_provider_by_name()
```

#### Constructor

```python
property_field_provider_by_name(mesh_scoping, streams_container, data_sources, property_name, config)
```

**Parameters:**

- `mesh_scoping` (*object*)
- `streams_container` (*object*)
- `data_sources` (*object*)
- `property_name` (*object*)
- `config` (*OperatorConfig*)

#### Constructor

```python
property_field_provider_by_name(config)
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
