---
uid: Ans.DataProcessing.operators.scoping.on_property
---

# on_property Class

**Namespace:** [Ans.DataProcessing.operators.scoping](Ans_DataProcessing_operators_scoping.md)

## Summary

Provides a scoping at a given location based on a given property name and a property number.

available inputs: `requested_location` (string), `property_name` (string), `property_id` (Int32), `streams_container` (StreamsContainer) (optional), `data_sources` (DataSources), `inclusive` (Int32) (optional)

available outputs: `mesh_scoping` (Scoping)

## Example

```python
op = on_property()

op = on_property(requested_location=my_requested_location,property_name=my_property_name,property_id=my_property_id,streams_container=my_streams_container,data_sources=my_data_sources,inclusive=my_inclusive)
```

## Class Information

| Property | Value |
|----------|-------|
| Namespace | `Ans.DataProcessing.operators.scoping` |
| Assembly | `Ans_Dpf_Native_dll_cs` |
| Base Class | `Ans.DataProcessing.internal_objects.BaseOperator` |

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

### inclusive

If element scoping is requested on a nodal named selection, if inclusive == 1 then all the elements/faces adjacent to the nodes/faces ids in input are added, if inclusive == 0, only the elements/faces which have all their nodes/faces in the scoping are included

**Type:** *LinkableInput*

## Outputs

### mesh_scoping

Scoping

**Type:** *LinkableOutput*

## Constructors

#### Constructor

```python
on_property()
```

#### Constructor

```python
on_property(requested_location, property_name, property_id, streams_container, data_sources, inclusive, config)
```

**Parameters:**

- `requested_location` (*object*)
- `property_name` (*object*)
- `property_id` (*object*)
- `streams_container` (*object*)
- `data_sources` (*object*)
- `inclusive` (*object*)
- `config` (*OperatorConfig*)

#### Constructor

```python
on_property(config)
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
