---
uid: Ans.DataProcessing.operators.result.compute_invariant_terms_motion
---

# *class* compute_invariant_terms_motion(rom_matrices: object = None, mode_shapes: object = None, lumped_mass: object = None, model_data: object = None, field_coordinates: object = None, nod: object = None, phi_ortho: object = None, config: OperatorConfig = None)

compute_invariant_terms_motion()
compute_invariant_terms_motion(rom_matrices: object, mode_shapes: object, lumped_mass: object, model_data: object, field_coordinates: object, nod: object, phi_ortho: object, config: OperatorConfig)
compute_invariant_terms_motion(config: OperatorConfig)


**DPF Framework Reference:** [compute_invariant_terms_motion operator specification](https://developer.ansys.com/docs/dpf-framework-2027-r1/operator-specifications/result/compute_invariant_terms_motion.md)

**Parameters:**

* **rom_matrices**
* **mode_shapes**
* **lumped_mass**
* **model_data**
* **field_coordinates**
* **nod**
* **phi_ortho**
* **config**

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

### phi_ortho

Orthonormalizated modes transformation

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

## Methods

## Properties

#### *property* inputs: InputSpec

*get/set*

#### *property* outputs: OutputSpec

*get/set*

#### *property* defaultConfig: Config

*get*
