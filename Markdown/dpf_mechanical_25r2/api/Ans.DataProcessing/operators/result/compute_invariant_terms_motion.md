---
uid: Ans.DataProcessing.operators.result.compute_invariant_terms_motion
---

# compute_invariant_terms_motion Class

**Namespace:** [Ans.DataProcessing.operators.result](Ans_DataProcessing_operators_result.md)

compute_invariant_terms_motion()
compute_invariant_terms_motion(rom_matrices: object, mode_shapes: object, lumped_mass: object, model_data: object, field_coordinates: object, nod: object, config: OperatorConfig)
compute_invariant_terms_motion(config: OperatorConfig)


## Class Information

| Property | Value |
|----------|-------|
| Namespace | `Ans.DataProcessing.operators.result` |
| Assembly | `mapdlOperatorsCore_dll_cs` |
| Base Class | `Ans.DataProcessing.internal_objects.BaseOperator` |

## Inputs

### rom_matrices

FieldsContainers containing the reduced matrices

**Type:** *LinkableInput*

### mode_shapes

FieldsContainers containing the mode shapes, which are CST and NOR for the cms method

**Type:** *LinkableInput*

### lumped_mass

FieldsContainers containing the lumped mass

**Type:** *LinkableInput*

### model_data

data describing the finite element model

**Type:** *LinkableInput*

### field_coordinates

coordinates of all nodes

**Type:** *LinkableInput*

### nod

**Type:** *LinkableInput*

## Outputs

### model_data

data describing the finite element model

**Type:** *LinkableOutput*

### mode_shapes

FieldsContainers containing the mode shapes, which are CST and NOR for the cms method

**Type:** *LinkableOutput*

### lumped_mass

FieldsContainers containing the lumped mass

**Type:** *LinkableOutput*

### field_coordinates_and_euler_angles

coordinates and euler angles of all nodes

**Type:** *LinkableOutput*

### nod

**Type:** *LinkableOutput*

### used_node_index

**Type:** *LinkableOutput*

### eigenvalue

**Type:** *LinkableOutput*

### translational_mode_shape

**Type:** *LinkableOutput*

### rotational_mode_shape

**Type:** *LinkableOutput*

### invrt_1

**Type:** *LinkableOutput*

### invrt_2

**Type:** *LinkableOutput*

### invrt_3

**Type:** *LinkableOutput*

### invrt_4

**Type:** *LinkableOutput*

### invrt_5

**Type:** *LinkableOutput*

### invrt_6

**Type:** *LinkableOutput*

### invrt_7

**Type:** *LinkableOutput*

### invrt_8

**Type:** *LinkableOutput*

## Constructors

#### Constructor

```python
compute_invariant_terms_motion()
```

#### Constructor

```python
compute_invariant_terms_motion(rom_matrices, mode_shapes, lumped_mass, model_data, field_coordinates, nod, config)
```

**Parameters:**

- `rom_matrices` (*object*)
- `mode_shapes` (*object*)
- `lumped_mass` (*object*)
- `model_data` (*object*)
- `field_coordinates` (*object*)
- `nod` (*object*)
- `config` (*OperatorConfig*)

#### Constructor

```python
compute_invariant_terms_motion(config)
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
