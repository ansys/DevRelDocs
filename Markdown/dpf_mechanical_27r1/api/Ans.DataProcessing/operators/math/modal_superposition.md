---
uid: Ans.DataProcessing.operators.math.modal_superposition
---

# *class* modal_superposition(modal_basis: object = None, solution_in_modal_space: object = None, incremental_fc: object = None, time_scoping: object = None, mesh_scoping: object = None, config: OperatorConfig = None)

Computes the solution in the time/frequency space from a modal solution by multiplying a modal basis (in 0)by the solution in this modal space (coefficients for each mode for each time/frequency) (in 1).

available inputs: `modal_basis` (FieldsContainer), `solution_in_modal_space` (FieldsContainer), `incremental_fc` (FieldsContainer) (optional), `time_scoping` (Scoping, IList int, System.Collections.IEnumerable) (optional), `mesh_scoping` (Scoping, ScopingsContainer) (optional)

available outputs: `fields_container` (FieldsContainer)

**DPF Framework Reference:** [modal_superposition operator specification](https://developer.ansys.com/docs/dpf-framework-2027-r1/operator-specifications/math/modal_superposition.md)

**Parameters:**

* **modal_basis**
* **solution_in_modal_space**
* **incremental_fc**
* **time_scoping**
* **mesh_scoping**
* **config**

**Example:**

```python
op = modal_superposition()

op = modal_superposition(modal_basis=my_modal_basis,solution_in_modal_space=my_solution_in_modal_space,incremental_fc=my_incremental_fc,time_scoping=my_time_scoping,mesh_scoping=my_mesh_scoping)
```

## Inputs

### modal_basis

One field by mode with each field representing a mode shape on nodes or elements.

**Type:** *LinkableInput*

### solution_in_modal_space

One field by time/frequency with each field having a ponderating coefficient for each mode of the modal_basis pin.

**Type:** *LinkableInput*

### incremental_fc

If a non-empty fields container is introduced, it is modified, and sent to the output, to add the contribution of the requested expansion. The label spaces produced from the multiplication must be the same as the incremental ones.

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

## Methods

## Properties

#### *property* inputs: InputSpec

*get/set*

#### *property* outputs: OutputSpec

*get/set*

#### *property* defaultConfig: Config

*get*
