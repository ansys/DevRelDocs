---
uid: Ans.DataProcessing.operators.result.write_motion_dfmf_file
---

# write_motion_dfmf_file Class

**Namespace:** [Ans.DataProcessing.operators.result](Ans_DataProcessing_operators_result.md)

write_motion_dfmf_file()
write_motion_dfmf_file(model_data: object, mode_shapes: object, lumped_mass: object, field_coordinates: object, nod: object, used_node_index: object, eigenvalue: object, translational_mode_shape: object, rotational_mode_shape: object, invrt_1: object, invrt_2: object, invrt_3: object, invrt_4: object, invrt_5: object, invrt_6: object, invrt_7: object, invrt_8: object, dfmffile_path: object, rstfile_path: object, config: OperatorConfig)
write_motion_dfmf_file(config: OperatorConfig)


## Class Information

| Property | Value |
|----------|-------|
| Namespace | `Ans.DataProcessing.operators.result` |
| Assembly | `mapdlOperatorsCore_dll_cs` |
| Base Class | `Ans.DataProcessing.internal_objects.BaseOperator` |

## Inputs

### model_data

data describing the finite element model

**Type:** *LinkableInput*

### mode_shapes

FieldsContainers containing the mode shapes, which are CST and NOR for the cms method

**Type:** *LinkableInput*

### lumped_mass

FieldsContainers containing the lumped mass

**Type:** *LinkableInput*

### field_coordinates

coordinates of all nodes

**Type:** *LinkableInput*

### nod

**Type:** *LinkableInput*

### used_node_index

**Type:** *LinkableInput*

### eigenvalue

**Type:** *LinkableInput*

### translational_mode_shape

**Type:** *LinkableInput*

### rotational_mode_shape

**Type:** *LinkableInput*

### invrt_1

**Type:** *LinkableInput*

### invrt_2

**Type:** *LinkableInput*

### invrt_3

**Type:** *LinkableInput*

### invrt_4

**Type:** *LinkableInput*

### invrt_5

**Type:** *LinkableInput*

### invrt_6

**Type:** *LinkableInput*

### invrt_7

**Type:** *LinkableInput*

### invrt_8

**Type:** *LinkableInput*

### dfmffile_path

path with motion dfmf extension where the export occurs

**Type:** *LinkableInput*

### rstfile_path

**Type:** *LinkableInput*

## Outputs

### dfmf_data_source

Data Source containing the dfmf file generated.

**Type:** *LinkableOutput*

## Constructors

#### Constructor

```python
write_motion_dfmf_file()
```

#### Constructor

```python
write_motion_dfmf_file(model_data, mode_shapes, lumped_mass, field_coordinates, nod, used_node_index, eigenvalue, translational_mode_shape, rotational_mode_shape, invrt_1, invrt_2, invrt_3, invrt_4, invrt_5, invrt_6, invrt_7, invrt_8, dfmffile_path, rstfile_path, config)
```

**Parameters:**

- `model_data` (*object*)
- `mode_shapes` (*object*)
- `lumped_mass` (*object*)
- `field_coordinates` (*object*)
- `nod` (*object*)
- `used_node_index` (*object*)
- `eigenvalue` (*object*)
- `translational_mode_shape` (*object*)
- `rotational_mode_shape` (*object*)
- `invrt_1` (*object*)
- `invrt_2` (*object*)
- `invrt_3` (*object*)
- `invrt_4` (*object*)
- `invrt_5` (*object*)
- `invrt_6` (*object*)
- `invrt_7` (*object*)
- `invrt_8` (*object*)
- `dfmffile_path` (*object*)
- `rstfile_path` (*object*)
- `config` (*OperatorConfig*)

#### Constructor

```python
write_motion_dfmf_file(config)
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
