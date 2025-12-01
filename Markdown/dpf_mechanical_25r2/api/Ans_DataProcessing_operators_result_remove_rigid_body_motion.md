---
uid: Ans.DataProcessing.operators.result.remove_rigid_body_motion
---

# remove_rigid_body_motion Class

**Namespace:** [Ans.DataProcessing.operators.result](Ans_DataProcessing_operators_result.md)

Removes rigid body mode from a total displacement field by minimization. Use a reference point in order to subtract its displacement to the result displacement field.   ///available inputs: field (Field, FieldsContainer), reference_node_id (Int32) (optional), mesh (MeshedRegion) (optional)
            available outputs: field (Field), translation_field (Field), rotation_field (Field), center_field (Field)

remove_rigid_body_motion()
remove_rigid_body_motion(field: object, reference_node_id: object, mesh: object, config: OperatorConfig)
remove_rigid_body_motion(config: OperatorConfig)


## Class Information

| Property | Value |
|----------|-------|
| Namespace | `Ans.DataProcessing.operators.result` |
| Assembly | `mapdlOperatorsCore_dll_cs` |
| Base Class | `Ans.DataProcessing.internal_objects.BaseOperator` |

## Constructors

#### Constructor

```python
remove_rigid_body_motion()
```

#### Constructor

```python
remove_rigid_body_motion(field, reference_node_id, mesh, config)
```

**Parameters:**

- `field` (*object*)
- `reference_node_id` (*object*)
- `mesh` (*object*)
- `config` (*OperatorConfig*)

#### Constructor

```python
remove_rigid_body_motion(config)
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
