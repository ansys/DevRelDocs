---
uid: Ans.DataProcessing.operators.result.cyclic_analytic_seqv_max
---

# *class* cyclic_analytic_seqv_max(time_scoping: object = None, mesh_scoping: object = None, fields_container: object = None, bool_rotate_to_global: object = None, cyclic_support: object = None, config: OperatorConfig = None)

Compute the maximum of the Von Mises equivalent stress that can be expected on 360 degrees

available inputs: `time_scoping` (Scoping, IList int, System.Collections.IEnumerable) (optional), `mesh_scoping` (ScopingsContainer, Scoping, IList int, System.Collections.IEnumerable) (optional), `fields_container` (FieldsContainer), `bool_rotate_to_global` (bool) (optional), `cyclic_support` (CyclicSupport)

available outputs: `fields_container` (FieldsContainer)

**DPF Framework Reference:** [cyclic_analytic_seqv_max operator specification](https://developer.ansys.com/docs/dpf-framework-2027-r1/operator-specifications/result/cyclic_analytic_seqv_max.md)

**Parameters:**

* **time_scoping**
* **mesh_scoping**
* **fields_container**
* **bool_rotate_to_global**
* **cyclic_support**
* **config**

**Example:**

```python
op = cyclic_analytic_seqv_max()

op = cyclic_analytic_seqv_max(time_scoping=my_time_scoping,mesh_scoping=my_mesh_scoping,fields_container=my_fields_container,bool_rotate_to_global=my_bool_rotate_to_global,cyclic_support=my_cyclic_support)
```

## Inputs

### time_scoping

**Type:** *LinkableInput*

### mesh_scoping

**Type:** *LinkableInput*

### fields_container

field container with the base and duplicate sectors

**Type:** *LinkableInput*

### bool_rotate_to_global

default is true

**Type:** *LinkableInput*

### cyclic_support

**Type:** *LinkableInput*

## Outputs

### fields_container

FieldsContainer filled in

**Type:** *LinkableOutput*

## Methods

## Properties

#### *property* inputs: InputSpec

*get/set*

#### *property* outputs: OutputSpec

*get/set*

#### *property* defaultConfig: Config

*get*
