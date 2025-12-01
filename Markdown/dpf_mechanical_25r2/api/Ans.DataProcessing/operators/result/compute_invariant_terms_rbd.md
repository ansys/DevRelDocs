---
uid: Ans.DataProcessing.operators.result.compute_invariant_terms_rbd
---

# compute_invariant_terms_rbd Class

**Namespace:** [Ans.DataProcessing.operators.result](Ans_DataProcessing_operators_result.md)

compute_invariant_terms_rbd()
compute_invariant_terms_rbd(rom_matrices: object, mode_shapes: object, lumped_mass: object, model_data: object, center_of_mass: object, inertia_relief: object, model_size: object, field_coordinates: object, nod: object, constraint_mode_check: object, config: OperatorConfig)
compute_invariant_terms_rbd(config: OperatorConfig)


## Class Information

| Property | Value |
|----------|-------|
| Namespace | `Ans.DataProcessing.operators.result` |
| Assembly | `mapdlOperatorsCore_dll_cs` |
| Base Class | `Ans.DataProcessing.internal_objects.BaseOperator` |

## Constructors

#### Constructor

```python
compute_invariant_terms_rbd()
```

#### Constructor

```python
compute_invariant_terms_rbd(rom_matrices, mode_shapes, lumped_mass, model_data, center_of_mass, inertia_relief, model_size, field_coordinates, nod, constraint_mode_check, config)
```

**Parameters:**

- `rom_matrices` (*object*)
- `mode_shapes` (*object*)
- `lumped_mass` (*object*)
- `model_data` (*object*)
- `center_of_mass` (*object*)
- `inertia_relief` (*object*)
- `model_size` (*object*)
- `field_coordinates` (*object*)
- `nod` (*object*)
- `constraint_mode_check` (*object*)
- `config` (*OperatorConfig*)

#### Constructor

```python
compute_invariant_terms_rbd(config)
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
