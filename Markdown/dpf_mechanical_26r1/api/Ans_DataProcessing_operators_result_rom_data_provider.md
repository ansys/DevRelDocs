---
uid: Ans.DataProcessing.operators.result.rom_data_provider
title: rom_data_provider
---

# rom_data_provider Class

**Namespace:** [Ans.DataProcessing.operators.result](Ans_DataProcessing_operators_result.md)

Set the required data for the invariant terms computation (reduced matrices, lumped mass matrix, modes ...)   ///available inputs: rom_type (bool), reduced_stiff_matrix (FieldsContainer), reduced_damping_matrix (FieldsContainer), reduced_mass_matrix (FieldsContainer), data_sources (DataSources), reduced_rhs_vector (FieldsContainer), lumped_mass_matrix (FieldsContainer), mode_shapes (FieldsContainer)
            available outputs: rom_matrices (FieldsContainer), mode_shapes (FieldsContainer), lumped_mass (FieldsContainer), model_data (PropertyField), center_of_mass (PropertyField), inertia_relief (Field), model_size (double), field_coordinates_and_euler_angles (double), nod (IList int  ,System.Collections.IEnumerable), meshed_region (MeshedRegion), phi_ortho (FieldsContainer)

rom_data_provider()
rom_data_provider(rom_type: object, reduced_stiff_matrix: object, reduced_damping_matrix: object, reduced_mass_matrix: object, data_sources: object, reduced_rhs_vector: object, lumped_mass_matrix: object, mode_shapes: object, config: OperatorConfig)
rom_data_provider(config: OperatorConfig)


## Class Information

| Property | Value |
|----------|-------|
| Namespace | `Ans.DataProcessing.operators.result` |
| Assembly | `mapdlOperatorsCore_dll_cs` |
| Base Class | `Ans.DataProcessing.internal_objects.BaseOperator` |

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
