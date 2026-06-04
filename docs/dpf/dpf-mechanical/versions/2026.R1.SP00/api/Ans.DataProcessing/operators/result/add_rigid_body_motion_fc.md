---
uid: Ans.DataProcessing.operators.result.add_rigid_body_motion_fc
---

# add_rigid_body_motion_fc Class

**Namespace:** [Ans.DataProcessing.operators.result](Ans_DataProcessing_operators_result.md)

## Summary

Adds a given rigid translation, center and rotation from a displacement field. The rotation is given in terms of rotations angles. Note that the displacement field has to be in the global coordinate system

available inputs: `fields_container` (FieldsContainer), `translation_field` (Field), `rotation_field` (Field), `center_field` (Field), `mesh` (MeshedRegion) (optional)

available outputs: `fields_container` (FieldsContainer)

## Example

```python
op = add_rigid_body_motion_fc()

op = add_rigid_body_motion_fc(fields_container=my_fields_container,translation_field=my_translation_field,rotation_field=my_rotation_field,center_field=my_center_field,mesh=my_mesh)
```

## Class Information

| Property | Value |
|----------|-------|
| Namespace | `Ans.DataProcessing.operators.result` |
| Assembly | `mapdlOperatorsCore_dll_cs` |
| Base Class | `Ans.DataProcessing.internal_objects.BaseOperator` |

## Inputs

### fields_container

**Type:** *LinkableInput*

### translation_field

**Type:** *LinkableInput*

### rotation_field

**Type:** *LinkableInput*

### center_field

**Type:** *LinkableInput*

### mesh

default is the mesh in the support

**Type:** *LinkableInput*

## Outputs

### fields_container

**Type:** *LinkableOutput*

## Constructors

#### Constructor

```python
add_rigid_body_motion_fc()
```

#### Constructor

```python
add_rigid_body_motion_fc(fields_container, translation_field, rotation_field, center_field, mesh, config)
```

**Parameters:**

- `fields_container` (*object*)
- `translation_field` (*object*)
- `rotation_field` (*object*)
- `center_field` (*object*)
- `mesh` (*object*)
- `config` (*OperatorConfig*)

#### Constructor

```python
add_rigid_body_motion_fc(config)
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
