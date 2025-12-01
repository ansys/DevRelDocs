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
