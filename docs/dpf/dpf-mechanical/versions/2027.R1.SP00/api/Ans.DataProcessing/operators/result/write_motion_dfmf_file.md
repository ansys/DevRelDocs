---
uid: Ans.DataProcessing.operators.result.write_motion_dfmf_file
---

# *class* write_motion_dfmf_file(model_data: object = None, mode_shapes: object = None, lumped_mass: object = None, field_coordinates: object = None, nod: object = None, used_node_index: object = None, eigenvalue: object = None, translational_mode_shape: object = None, rotational_mode_shape: object = None, invrt_1: object = None, invrt_2: object = None, invrt_3: object = None, invrt_4: object = None, invrt_5: object = None, invrt_6: object = None, invrt_7: object = None, invrt_8: object = None, dfmffile_path: object = None, rstfile_path: object = None, config: OperatorConfig = None)

write_motion_dfmf_file()
write_motion_dfmf_file(model_data: object, mode_shapes: object, lumped_mass: object, field_coordinates: object, nod: object, used_node_index: object, eigenvalue: object, translational_mode_shape: object, rotational_mode_shape: object, invrt_1: object, invrt_2: object, invrt_3: object, invrt_4: object, invrt_5: object, invrt_6: object, invrt_7: object, invrt_8: object, dfmffile_path: object, rstfile_path: object, config: OperatorConfig)
write_motion_dfmf_file(config: OperatorConfig)


**DPF Framework Reference:** [write_motion_dfmf_file operator specification](https://developer.ansys.com/docs/dpf-framework-2027-r1/operator-specifications/result/write_motion_dfmf_file.md)

**Parameters:**

* **model_data**
* **mode_shapes**
* **lumped_mass**
* **field_coordinates**
* **nod**
* **used_node_index**
* **eigenvalue**
* **translational_mode_shape**
* **rotational_mode_shape**
* **invrt_1**
* **invrt_2**
* **invrt_3**
* **invrt_4**
* **invrt_5**
* **invrt_6**
* **invrt_7**
* **invrt_8**
* **dfmffile_path**
* **rstfile_path**
* **config**

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

## Methods

## Properties

#### *property* inputs: InputSpec

*get/set*

#### *property* outputs: OutputSpec

*get/set*

#### *property* defaultConfig: Config

*get*
