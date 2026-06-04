---
uid: Ans.DataProcessing.operators.result.cyclic_expansion
---

# *class* cyclic_expansion(time_scoping: object = None, mesh_scoping: object = None, fields_container: object = None, harmonic_index: object = None, bool_rotate_to_global: object = None, normalization_factor: object = None, merge_stages: object = None, cyclic_support: object = None, sectors_to_expand: object = None, phi: object = None, config: OperatorConfig = None)

Expand cyclic results from a fieldsContainer for given sets, sectors and scoping (optionals).

available inputs: `time_scoping` (Scoping, IList int, System.Collections.IEnumerable) (optional), `mesh_scoping` (ScopingsContainer, Scoping, IList int, System.Collections.IEnumerable) (optional), `fields_container` (FieldsContainer), `harmonic_index` (Int32) (optional), `bool_rotate_to_global` (bool) (optional), `map_size_scoping_out` () (optional), `normalization_factor` (double) (optional), `merge_stages` (bool) (optional), `cyclic_support` (CyclicSupport), `sectors_to_expand` (IList int, Scoping, ScopingsContainer, System.Collections.IEnumerable) (optional), `phi` (double) (optional)

available outputs: `fields_container` (FieldsContainer)

**DPF Framework Reference:** [cyclic_expansion operator specification](https://developer.ansys.com/docs/dpf-framework-2027-r1/operator-specifications/result/cyclic_expansion.md)

**Parameters:**

* **time_scoping**
* **mesh_scoping**
* **fields_container**
* **harmonic_index**
* **bool_rotate_to_global**
* **normalization_factor**
* **merge_stages**
* **cyclic_support**
* **sectors_to_expand**
* **phi**
* **config**

**Example:**

```python
op = cyclic_expansion()

op = cyclic_expansion(time_scoping=my_time_scoping,mesh_scoping=my_mesh_scoping,fields_container=my_fields_container,harmonic_index=my_harmonic_index,bool_rotate_to_global=my_bool_rotate_to_global,normalization_factor=my_normalization_factor,merge_stages=my_merge_stages,cyclic_support=my_cyclic_support,sectors_to_expand=my_sectors_to_expand,phi=my_phi)
```

## Inputs

### time_scoping

**Type:** *LinkableInput*

### mesh_scoping

**Type:** *LinkableInput*

### fields_container

field container with the base and duplicate sectors

**Type:** *LinkableInput*

### harmonic_index

**Type:** *LinkableInput*

### bool_rotate_to_global

default is true

**Type:** *LinkableInput*

### normalization_factor

**Type:** *LinkableInput*

### merge_stages

**Type:** *LinkableInput*

### cyclic_support

**Type:** *LinkableInput*

### sectors_to_expand

sectors to expand (start at 0), for multistage: use scopings container with 'stage' label.

**Type:** *LinkableInput*

### phi

angle phi in degrees (default value 0.0)

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
