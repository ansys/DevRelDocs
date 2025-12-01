---
uid: Ans.DataProcessing.operators.math.modal_superposition
---

# modal_superposition Class

**Namespace:** [Ans.DataProcessing.operators.math](Ans_DataProcessing_operators_math.md)

## Summary

Computes the solution in the time/frequency space from a modal solution by multiplying a modal basis (in 0) by the solution in this modal space (coefficients for each mode for each time/frequency) (in 1).

available inputs: `modal_basis` (FieldsContainer), `solution_in_modal_space` (FieldsContainer), `time_scoping` (Scoping, IList int, System.Collections.IEnumerable) (optional), `mesh_scoping` (Scoping, ScopingsContainer) (optional)

available outputs: `fields_container` (FieldsContainer)

## Example

```python
op = modal_superposition()

op = modal_superposition(modal_basis=my_modal_basis,solution_in_modal_space=my_solution_in_modal_space,time_scoping=my_time_scoping,mesh_scoping=my_mesh_scoping)
```

## Class Information

| Property | Value |
|----------|-------|
| Namespace | `Ans.DataProcessing.operators.math` |
| Assembly | `Ans_Dpf_Math_dll_cs` |
| Base Class | `Ans.DataProcessing.internal_objects.BaseOperator` |

## Inputs

### modal_basis

One field by mode with each field representing a mode shape on nodes or elements.

**Type:** *LinkableInput*

### solution_in_modal_space

One field by time/frequency with each field having a ponderating coefficient for each mode of the modal_basis pin.

**Type:** *LinkableInput*

### time_scoping

Compute the result on a subset of the time frequency domain defined in the solution_in_modal_space fields container.

**Type:** *LinkableInput*

### mesh_scoping

Compute the result on a subset of the space domain defined in the modal_basis fields container.

**Type:** *LinkableInput*

## Outputs

### fields_container

**Type:** *LinkableOutput*

## Constructors

#### Constructor

```python
modal_superposition()
```

#### Constructor

```python
modal_superposition(modal_basis, solution_in_modal_space, time_scoping, mesh_scoping, config)
```

**Parameters:**

- `modal_basis` (*object*)
- `solution_in_modal_space` (*object*)
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
