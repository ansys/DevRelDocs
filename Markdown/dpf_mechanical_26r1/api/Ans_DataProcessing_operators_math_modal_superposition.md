---
uid: Ans.DataProcessing.operators.math.modal_superposition
---

# modal_superposition Class

**Namespace:** [Ans.DataProcessing.operators.math](Ans_DataProcessing_operators_math.md)

Computes the solution in the time/frequency space from a modal solution by multiplying a modal basis (in 0)by the solution in this modal space (coefficients for each mode for each time/frequency) (in 1).   ///available inputs: modal_basis (FieldsContainer), solution_in_modal_space (FieldsContainer), incremental_fc (FieldsContainer) (optional), time_scoping (Scoping, IList int, System.Collections.IEnumerable) (optional), mesh_scoping (Scoping, ScopingsContainer) (optional)
            available outputs: fields_container (FieldsContainer)

modal_superposition()
modal_superposition(modal_basis: object, solution_in_modal_space: object, incremental_fc: object, time_scoping: object, mesh_scoping: object, config: OperatorConfig)
modal_superposition(config: OperatorConfig)


## Class Information

| Property | Value |
|----------|-------|
| Namespace | `Ans.DataProcessing.operators.math` |
| Assembly | `Ans_Dpf_Math_dll_cs` |
| Base Class | `Ans.DataProcessing.internal_objects.BaseOperator` |

## Constructors

#### Constructor

```python
modal_superposition()
```

#### Constructor

```python
modal_superposition(modal_basis, solution_in_modal_space, incremental_fc, time_scoping, mesh_scoping, config)
```

**Parameters:**

- `modal_basis` (*object*)
- `solution_in_modal_space` (*object*)
- `incremental_fc` (*object*)
- `time_scoping` (*object*)
- `mesh_scoping` (*object*)
- `config` (*OperatorConfig*)

#### Constructor

```python
modal_superposition(config)
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
