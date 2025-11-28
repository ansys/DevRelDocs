---
uid: Ans.DataProcessing.operators.result.add_rigid_body_motion
title: add_rigid_body_motion
---

# add_rigid_body_motion Class

**Namespace:** [Ans.DataProcessing.operators.result](Ans_DataProcessing_operators_result.md)

Adds a given rigid translation, center and rotation from a displacement field. The rotation is given in terms of rotations angles. Note that the displacement field has to be in the global coordinate system   ///available inputs: displacement_field (Field), translation_field (Field), rotation_field (Field), center_field (Field), mesh (MeshedRegion) (optional)
            available outputs: field (Field)

add_rigid_body_motion()
add_rigid_body_motion(displacement_field: object, translation_field: object, rotation_field: object, center_field: object, mesh: object, config: OperatorConfig)
add_rigid_body_motion(config: OperatorConfig)


## Class Information

| Property | Value |
|----------|-------|
| Namespace | `Ans.DataProcessing.operators.result` |
| Assembly | `mapdlOperatorsCore_dll_cs` |
| Base Class | `Ans.DataProcessing.internal_objects.BaseOperator` |

## Constructors

#### Constructor

```python
add_rigid_body_motion()
```

#### Constructor

```python
add_rigid_body_motion(displacement_field, translation_field, rotation_field, center_field, mesh, config)
```

**Parameters:**

- `displacement_field` (*object*)
- `translation_field` (*object*)
- `rotation_field` (*object*)
- `center_field` (*object*)
- `mesh` (*object*)
- `config` (*OperatorConfig*)

#### Constructor

```python
add_rigid_body_motion(config)
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
