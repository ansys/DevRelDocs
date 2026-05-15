---
uid: Ans.DataProcessing.operators.scoping.on_mesh_property
---

# on_mesh_property Class

**Namespace:** [Ans.DataProcessing.operators.scoping](Ans_DataProcessing_operators_scoping.md)

## Summary

Provides a scoping on a given property name and a property number.

available inputs: `requested_location` (string) (optional), `property_name` (string), `property_id` (IList int, Int32, System.Collections.IEnumerable) (optional), `inclusive` (Int32) (optional), `mesh` (MeshedRegion)

available outputs: `mesh_scoping` (Scoping)

## Example

```python
op = on_mesh_property()

op = on_mesh_property(requested_location=my_requested_location,property_name=my_property_name,property_id=my_property_id,inclusive=my_inclusive,mesh=my_mesh)
```

## Class Information

| Property | Value |
|----------|-------|
| Namespace | `Ans.DataProcessing.operators.scoping` |
| Assembly | `Ans_Dpf_FEMutils_dll_cs` |
| Base Class | `Ans.DataProcessing.internal_objects.BaseOperator` |

## Inputs

### requested_location

Nodal or Elemental location are expected

**Type:** *LinkableInput*

### property_name

ex "apdl_element_type", "elprops", "mat", "eltype", "connectivity", "shell_elements", "solid_elements", "skin_elements", "beam_elements", "point_elements"...

**Type:** *LinkableInput*

### property_id

**Type:** *LinkableInput*

### inclusive

Default is 1 (inclusive is true). Only used if 'shape_values' property is requested. If inclusive is set to 1 and 'elprops' property field is available, it will select all elements that are set on the corresponding property. If inclusive is set to 0 (exclusive) and 'elprops' property field is available, it will select the elements that are only set on this property.

**Type:** *LinkableInput*

### mesh

**Type:** *LinkableInput*

## Outputs

### mesh_scoping

Scoping

**Type:** *LinkableOutput*

## Constructors

#### Constructor

```python
on_mesh_property()
```

#### Constructor

```python
on_mesh_property(requested_location, property_name, property_id, inclusive, mesh, config)
```

**Parameters:**

- `requested_location` (*object*)
- `property_name` (*object*)
- `property_id` (*object*)
- `inclusive` (*object*)
- `mesh` (*object*)
- `config` (*OperatorConfig*)

#### Constructor

```python
on_mesh_property(config)
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
