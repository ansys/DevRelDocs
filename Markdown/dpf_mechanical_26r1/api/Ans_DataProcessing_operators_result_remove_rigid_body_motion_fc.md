---
uid: Ans.DataProcessing.operators.result.remove_rigid_body_motion_fc
title: remove_rigid_body_motion_fc
---

# remove_rigid_body_motion_fc Class

**Namespace:** [Ans.DataProcessing.operators.result](Ans_DataProcessing_operators_result.md)

Removes rigid body mode from a total displacement field by minimization. Use a reference point in order to subtract its displacement to the result displacement field.   ///available inputs: fields_container (FieldsContainer), reference_node_id (Int32) (optional), mesh (MeshedRegion) (optional)
            available outputs: fields_container (FieldsContainer), translation_field (Field), rotation_field (Field), center_field (Field)

remove_rigid_body_motion_fc()
remove_rigid_body_motion_fc(fields_container: object, reference_node_id: object, mesh: object, config: OperatorConfig)
remove_rigid_body_motion_fc(config: OperatorConfig)


## Class Information

| Property | Value |
|----------|-------|
| Namespace | `Ans.DataProcessing.operators.result` |
| Assembly | `mapdlOperatorsCore_dll_cs` |
| Base Class | `Ans.DataProcessing.internal_objects.BaseOperator` |

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
