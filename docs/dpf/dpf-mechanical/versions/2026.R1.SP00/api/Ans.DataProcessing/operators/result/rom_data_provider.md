---
uid: Ans.DataProcessing.operators.result.rom_data_provider
---

# rom_data_provider Class

**Namespace:** [Ans.DataProcessing.operators.result](Ans_DataProcessing_operators_result.md)

## Summary

Set the required data for the invariant terms computation (reduced matrices, lumped mass matrix, modes ...)

available inputs: `rom_type` (bool), `reduced_stiff_matrix` (FieldsContainer), `reduced_damping_matrix` (FieldsContainer), `reduced_mass_matrix` (FieldsContainer), `data_sources` (DataSources), `reduced_rhs_vector` (FieldsContainer), `lumped_mass_matrix` (FieldsContainer), `mode_shapes` (FieldsContainer)

available outputs: `rom_matrices` (FieldsContainer), `mode_shapes` (FieldsContainer), `lumped_mass` (FieldsContainer), `model_data` (PropertyField), `center_of_mass` (PropertyField), `inertia_relief` (Field), `model_size` (double), `field_coordinates_and_euler_angles` (double), `nod` (IList int  ,System.Collections.IEnumerable), `meshed_region` (MeshedRegion), `phi_ortho` (FieldsContainer)

## Example

```python
op = rom_data_provider()

op = rom_data_provider(rom_type=my_rom_type,reduced_stiff_matrix=my_reduced_stiff_matrix,reduced_damping_matrix=my_reduced_damping_matrix,reduced_mass_matrix=my_reduced_mass_matrix,data_sources=my_data_sources,reduced_rhs_vector=my_reduced_rhs_vector,lumped_mass_matrix=my_lumped_mass_matrix,mode_shapes=my_mode_shapes)
```

## Class Information

| Property | Value |
|----------|-------|
| Namespace | `Ans.DataProcessing.operators.result` |
| Assembly | `mapdlOperatorsCore_dll_cs` |
| Base Class | `Ans.DataProcessing.internal_objects.BaseOperator` |

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

## Constructors

#### Constructor

```python
rom_data_provider()
```

#### Constructor

```python
rom_data_provider(rom_type, reduced_stiff_matrix, reduced_damping_matrix, reduced_mass_matrix, data_sources, reduced_rhs_vector, lumped_mass_matrix, mode_shapes, config)
```

**Parameters:**

- `rom_type` (*object*)
- `reduced_stiff_matrix` (*object*)
- `reduced_damping_matrix` (*object*)
- `reduced_mass_matrix` (*object*)
- `data_sources` (*object*)
- `reduced_rhs_vector` (*object*)
- `lumped_mass_matrix` (*object*)
- `mode_shapes` (*object*)
- `config` (*OperatorConfig*)

#### Constructor

```python
rom_data_provider(config)
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
