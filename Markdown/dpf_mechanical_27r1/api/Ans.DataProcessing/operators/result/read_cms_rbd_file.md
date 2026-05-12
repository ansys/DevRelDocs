---
uid: Ans.DataProcessing.operators.result.read_cms_rbd_file
---

# *class* read_cms_rbd_file(in_cms_rbd_file_path: object = None, config: OperatorConfig = None)

read_cms_rbd_file()
read_cms_rbd_file(in_cms_rbd_file_path: object, config: OperatorConfig)
read_cms_rbd_file(config: OperatorConfig)


**DPF Framework Reference:** [read_cms_rbd_file operator specification](https://developer.ansys.com/docs/dpf-framework-2027-r1/operator-specifications/result/read_cms_rbd_file.md)

**Parameters:**

* **in_cms_rbd_file_path**
* **config**

## Inputs

### in_cms_rbd_file_path

file name with cms_rbd extension where to read the input cms_rbd file.

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
