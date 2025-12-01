---
uid: Ans.DataProcessing.operators.result.remove_rigid_body_motion_fc
---

# remove_rigid_body_motion_fc Class

**Namespace:** [Ans.DataProcessing.operators.result](Ans_DataProcessing_operators_result.md)

## Summary

Removes rigid body mode from a total displacement field by minimization. Use a reference point in order to subtract its displacement to the result displacement field.

available inputs: `fields_container` (FieldsContainer), `reference_node_id` (Int32) (optional), `mesh` (MeshedRegion) (optional)

available outputs: `fields_container` (FieldsContainer), `translation_field` (Field), `rotation_field` (Field), `center_field` (Field)

## Example

```python
op = remove_rigid_body_motion_fc()

op = remove_rigid_body_motion_fc(fields_container=my_fields_container,reference_node_id=my_reference_node_id,mesh=my_mesh)
```

## Class Information

| Property | Value |
|----------|-------|
| Namespace | `Ans.DataProcessing.operators.result` |
| Assembly | `mapdlOperatorsCore_dll_cs` |
| Base Class | `Ans.DataProcessing.internal_objects.BaseOperator` |

## Inputs

### fields_container

field or fields container with only one field is expected

**Type:** *LinkableInput*

### reference_node_id

Id of the reference entity (node).

**Type:** *LinkableInput*

### mesh

default is the mesh in the support

**Type:** *LinkableInput*

## Outputs

### fields_container

**Type:** *LinkableOutput*

### translation_field

Global rigid translation vector

**Type:** *LinkableOutput*

### rotation_field

Global rigid rotation angles

**Type:** *LinkableOutput*

### center_field

Center of the rigid rotation

**Type:** *LinkableOutput*

## Constructors

#### Constructor

```python
remove_rigid_body_motion_fc()
```

#### Constructor

```python
remove_rigid_body_motion_fc(fields_container, reference_node_id, mesh, config)
```

**Parameters:**

- `fields_container` (*object*)
- `reference_node_id` (*object*)
- `mesh` (*object*)
- `config` (*OperatorConfig*)

#### Constructor

```python
remove_rigid_body_motion_fc(config)
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
