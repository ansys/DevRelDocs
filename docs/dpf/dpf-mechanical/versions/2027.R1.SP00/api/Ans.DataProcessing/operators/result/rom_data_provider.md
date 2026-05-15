---
uid: Ans.DataProcessing.operators.result.rom_data_provider
---

# *class* rom_data_provider(rom_type: object = None, reduced_stiff_matrix: object = None, reduced_damping_matrix: object = None, reduced_mass_matrix: object = None, data_sources: object = None, reduced_rhs_vector: object = None, lumped_mass_matrix: object = None, mode_shapes: object = None, config: OperatorConfig = None)

Set the required data for the invariant terms computation (reduced matrices, lumped mass matrix, modes ...)

available inputs: `rom_type` (bool), `reduced_stiff_matrix` (FieldsContainer), `reduced_damping_matrix` (FieldsContainer), `reduced_mass_matrix` (FieldsContainer), `data_sources` (DataSources), `reduced_rhs_vector` (FieldsContainer), `lumped_mass_matrix` (FieldsContainer), `mode_shapes` (FieldsContainer)

available outputs: `rom_matrices` (FieldsContainer), `mode_shapes` (FieldsContainer), `lumped_mass` (FieldsContainer), `model_data` (PropertyField), `center_of_mass` (PropertyField), `inertia_relief` (Field), `model_size` (double), `field_coordinates_and_euler_angles` (double), `nod` (IList int  ,System.Collections.IEnumerable), `meshed_region` (MeshedRegion), `phi_ortho` (FieldsContainer)

**DPF Framework Reference:** [rom_data_provider operator specification](https://developer.ansys.com/docs/dpf-framework-2027-r1/operator-specifications/result/rom_data_provider.md)

**Parameters:**

* **rom_type**
* **reduced_stiff_matrix**
* **reduced_damping_matrix**
* **reduced_mass_matrix**
* **data_sources**
* **reduced_rhs_vector**
* **lumped_mass_matrix**
* **mode_shapes**
* **config**

**Example:**

```python
op = rom_data_provider()

op = rom_data_provider(rom_type=my_rom_type,reduced_stiff_matrix=my_reduced_stiff_matrix,reduced_damping_matrix=my_reduced_damping_matrix,reduced_mass_matrix=my_reduced_mass_matrix,data_sources=my_data_sources,reduced_rhs_vector=my_reduced_rhs_vector,lumped_mass_matrix=my_lumped_mass_matrix,mode_shapes=my_mode_shapes)
```

## Inputs

### rom_type

If this pin is set to true, customized rom data must be given

**Type:** *LinkableInput*

### reduced_stiff_matrix

FieldsContainers containing the reduced Stiffness matrix

**Type:** *LinkableInput*

### reduced_damping_matrix

FieldsContainers containing the reduced Mass matrix

**Type:** *LinkableInput*

### reduced_mass_matrix

FieldsContainers containing the reduced Damp matrix

**Type:** *LinkableInput*

### data_sources

**Type:** *LinkableInput*

### reduced_rhs_vector

FieldsContainers containing the reduced RHS vector

**Type:** *LinkableInput*

### lumped_mass_matrix

FieldsContainers containing the lumped Mass matrix

**Type:** *LinkableInput*

### mode_shapes

FieldsContainers containing the customized mode shapes

**Type:** *LinkableInput*

## Outputs

### rom_matrices

FieldsContainers containing the reduced matrices

**Type:** *LinkableOutput*

### mode_shapes

FieldsContainers containing the mode shapes, which are CST and NOR for the cms method

**Type:** *LinkableOutput*

### lumped_mass

FieldsContainers containing the lumped mass

**Type:** *LinkableOutput*

### model_data

data describing the finite element model

**Type:** *LinkableOutput*

### center_of_mass

**Type:** *LinkableOutput*

### inertia_relief

inertia matrix

**Type:** *LinkableOutput*

### model_size

size of the model

**Type:** *LinkableOutput*

### field_coordinates_and_euler_angles

coordinates and euler angles of all nodes

**Type:** *LinkableOutput*

### nod

ids of master nodes

**Type:** *LinkableOutput*

### meshed_region

expanded meshed region.

**Type:** *LinkableOutput*

### phi_ortho

Orthonormalized mode shape transformation

**Type:** *LinkableOutput*

## Methods

## Properties

#### *property* inputs: InputSpec

*get/set*

#### *property* outputs: OutputSpec

*get/set*

#### *property* defaultConfig: Config

*get*
