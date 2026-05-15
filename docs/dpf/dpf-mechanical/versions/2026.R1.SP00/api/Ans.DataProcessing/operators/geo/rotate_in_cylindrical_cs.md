---
uid: Ans.DataProcessing.operators.geo.rotate_in_cylindrical_cs
---

# rotate_in_cylindrical_cs Class

**Namespace:** [Ans.DataProcessing.operators.geo](Ans_DataProcessing_operators_geo.md)

## Summary

Rotates a field to its corresponding values into the specified cylindrical coordinate system (corresponding to the field position). If a coordinate system is not set in the coordinate_system pin, the field is rotated on each node following the local polar coordinate system.

available inputs: `field` (Field, FieldsContainer), `coordinate_system` (Field) (optional), `mesh` (MeshedRegion) (optional)

available outputs: `field` (Field)

## Example

```python
op = rotate_in_cylindrical_cs()

op = rotate_in_cylindrical_cs(field=my_field,coordinate_system=my_coordinate_system,mesh=my_mesh)
```

## Class Information

| Property | Value |
|----------|-------|
| Namespace | `Ans.DataProcessing.operators.geo` |
| Assembly | `Ans_Dpf_FEMutils_dll_cs` |
| Base Class | `Ans.DataProcessing.internal_objects.BaseOperator` |

## Inputs

### field

field or fields container with only one field is expected

**Type:** *LinkableInput*

### coordinate_system

3-3 rotation matrix and origin coordinates must be set here to define a coordinate system.

**Type:** *LinkableInput*

### mesh

Mesh support of the input field.

**Type:** *LinkableInput*

## Outputs

### field

**Type:** *LinkableOutput*

## Constructors

#### Constructor

```python
rotate_in_cylindrical_cs()
```

#### Constructor

```python
rotate_in_cylindrical_cs(field, coordinate_system, mesh, config)
```

**Parameters:**

- `field` (*object*)
- `coordinate_system` (*object*)
- `mesh` (*object*)
- `config` (*OperatorConfig*)

#### Constructor

```python
rotate_in_cylindrical_cs(config)
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
