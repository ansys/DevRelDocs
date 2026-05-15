---
uid: Ans.DataProcessing.operators.result.compute_invariant_terms_rbd
---

# *class* compute_invariant_terms_rbd(rom_matrices: object = None, mode_shapes: object = None, lumped_mass: object = None, model_data: object = None, center_of_mass: object = None, inertia_relief: object = None, model_size: object = None, field_coordinates: object = None, nod: object = None, constraint_mode_check: object = None, config: OperatorConfig = None)

compute_invariant_terms_rbd()
compute_invariant_terms_rbd(rom_matrices: object, mode_shapes: object, lumped_mass: object, model_data: object, center_of_mass: object, inertia_relief: object, model_size: object, field_coordinates: object, nod: object, constraint_mode_check: object, config: OperatorConfig)
compute_invariant_terms_rbd(config: OperatorConfig)


**DPF Framework Reference:** [compute_invariant_terms_rbd operator specification](https://developer.ansys.com/docs/dpf-framework-2027-r1/operator-specifications/result/compute_invariant_terms_rbd.md)

**Parameters:**

* **rom_matrices**
* **mode_shapes**
* **lumped_mass**
* **model_data**
* **center_of_mass**
* **inertia_relief**
* **model_size**
* **field_coordinates**
* **nod**
* **constraint_mode_check**
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

### center_of_mass

**Type:** *LinkableInput*

### inertia_relief

inertia matrix

**Type:** *LinkableInput*

### model_size

model size

**Type:** *LinkableInput*

### field_coordinates

coordinates of all nodes

**Type:** *LinkableInput*

### nod

**Type:** *LinkableInput*

### constraint_mode_check

if true, the orthogonality of the constraint modes are checked. Default is false.

**Type:** *LinkableInput*

## Outputs

### model_data

data describing the finite element model

**Type:** *LinkableOutput*

### center_of_mass

center of mass of the body

**Type:** *LinkableOutput*

### inertia_relief

inertia matrix

**Type:** *LinkableOutput*

### model_size

**Type:** *LinkableOutput*

### master_node_coordinates

**Type:** *LinkableOutput*

### v_trsf

translational and rotational shape functions

**Type:** *LinkableOutput*

### k_mat

**Type:** *LinkableOutput*

### mass_mat

**Type:** *LinkableOutput*

### c_mat

**Type:** *LinkableOutput*

### rhs

**Type:** *LinkableOutput*

### dn

**Type:** *LinkableOutput*

### dr_cross_n

**Type:** *LinkableOutput*

### drn

**Type:** *LinkableOutput*

### dn_cross_n

**Type:** *LinkableOutput*

### dnx_y

**Type:** *LinkableOutput*

### dny_y

**Type:** *LinkableOutput*

### dnz_y

**Type:** *LinkableOutput*

### dyx_n

**Type:** *LinkableOutput*

### dyy_n

**Type:** *LinkableOutput*

### dyz_n

**Type:** *LinkableOutput*

### dnxn

**Type:** *LinkableOutput*

### dnyn

**Type:** *LinkableOutput*

### dnzn

**Type:** *LinkableOutput*

## Methods

## Properties

#### *property* inputs: InputSpec

*get/set*

#### *property* outputs: OutputSpec

*get/set*

#### *property* defaultConfig: Config

*get*
