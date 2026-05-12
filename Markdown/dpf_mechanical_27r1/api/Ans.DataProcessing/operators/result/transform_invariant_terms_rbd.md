---
uid: Ans.DataProcessing.operators.result.transform_invariant_terms_rbd
---

# *class* transform_invariant_terms_rbd(rotation_matrix: object = None, coordinate_system: object = None, model_data: object = None, center_of_mass: object = None, inertia_relief: object = None, model_size: object = None, master_node_coordinates: object = None, v_trsf: object = None, k_mat: object = None, mass_mat: object = None, c_mat: object = None, rhs: object = None, dn: object = None, dr_cross_n: object = None, drn: object = None, dn_cross_n: object = None, dnx_y: object = None, dny_y: object = None, dnz_y: object = None, dyx_n: object = None, dyy_n: object = None, dyz_n: object = None, dnxn: object = None, dnyn: object = None, dnzn: object = None, config: OperatorConfig = None)

transform_invariant_terms_rbd()
transform_invariant_terms_rbd(rotation_matrix: object, coordinate_system: object, model_data: object, center_of_mass: object, inertia_relief: object, model_size: object, master_node_coordinates: object, v_trsf: object, k_mat: object, mass_mat: object, c_mat: object, rhs: object, dn: object, dr_cross_n: object, drn: object, dn_cross_n: object, dnx_y: object, dny_y: object, dnz_y: object, dyx_n: object, dyy_n: object, dyz_n: object, dnxn: object, dnyn: object, dnzn: object, config: OperatorConfig)
transform_invariant_terms_rbd(config: OperatorConfig)


**DPF Framework Reference:** [transform_invariant_terms_rbd operator specification](https://developer.ansys.com/docs/dpf-framework-2027-r1/operator-specifications/result/transform_invariant_terms_rbd.md)

**Parameters:**

* **rotation_matrix**
* **coordinate_system**
* **model_data**
* **center_of_mass**
* **inertia_relief**
* **model_size**
* **master_node_coordinates**
* **v_trsf**
* **k_mat**
* **mass_mat**
* **c_mat**
* **rhs**
* **dn**
* **dr_cross_n**
* **drn**
* **dn_cross_n**
* **dnx_y**
* **dny_y**
* **dnz_y**
* **dyx_n**
* **dyy_n**
* **dyz_n**
* **dnxn**
* **dnyn**
* **dnzn**
* **config**

## Inputs

### rotation_matrix

3-3 rotation matrix.

**Type:** *LinkableInput*

### coordinate_system

origin of the new coordinate system.

**Type:** *LinkableInput*

### model_data

data describing the finite element model

**Type:** *LinkableInput*

### center_of_mass

center of mass of the body

**Type:** *LinkableInput*

### inertia_relief

inertia matrix

**Type:** *LinkableInput*

### model_size

size of the diagonal box containing the body

**Type:** *LinkableInput*

### master_node_coordinates

**Type:** *LinkableInput*

### v_trsf

translational and rotational shape functions

**Type:** *LinkableInput*

### k_mat

**Type:** *LinkableInput*

### mass_mat

**Type:** *LinkableInput*

### c_mat

**Type:** *LinkableInput*

### rhs

**Type:** *LinkableInput*

### dn

**Type:** *LinkableInput*

### dr_cross_n

**Type:** *LinkableInput*

### drn

**Type:** *LinkableInput*

### dn_cross_n

**Type:** *LinkableInput*

### dnx_y

**Type:** *LinkableInput*

### dny_y

**Type:** *LinkableInput*

### dnz_y

**Type:** *LinkableInput*

### dyx_n

**Type:** *LinkableInput*

### dyy_n

**Type:** *LinkableInput*

### dyz_n

**Type:** *LinkableInput*

### dnxn

**Type:** *LinkableInput*

### dnyn

**Type:** *LinkableInput*

### dnzn

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
