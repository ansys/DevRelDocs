---
uid: Ans.DataProcessing.operators.result.cyclic_expansion
---

# cyclic_expansion Class

**Namespace:** [Ans.DataProcessing.operators.result](Ans_DataProcessing_operators_result.md)

## Summary

Expand cyclic results from a fieldsContainer for given sets, sectors and scoping (optionals).

available inputs: `time_scoping` (Scoping, IList int, System.Collections.IEnumerable) (optional), `mesh_scoping` (ScopingsContainer, Scoping, IList int, System.Collections.IEnumerable) (optional), `fields_container` (FieldsContainer), `harmonic_index` (Int32) (optional), `bool_rotate_to_global` (bool) (optional), `map_size_scoping_out` () (optional), `normalization_factor` (double) (optional), `merge_stages` (bool) (optional), `cyclic_support` (CyclicSupport), `sectors_to_expand` (IList int, Scoping, ScopingsContainer, System.Collections.IEnumerable) (optional), `phi` (double) (optional)

available outputs: `fields_container` (FieldsContainer)

## Example

```python
op = cyclic_expansion()

op = cyclic_expansion(time_scoping=my_time_scoping,mesh_scoping=my_mesh_scoping,fields_container=my_fields_container,harmonic_index=my_harmonic_index,bool_rotate_to_global=my_bool_rotate_to_global,normalization_factor=my_normalization_factor,merge_stages=my_merge_stages,cyclic_support=my_cyclic_support,sectors_to_expand=my_sectors_to_expand,phi=my_phi)
```

## Class Information

| Property | Value |
|----------|-------|
| Namespace | `Ans.DataProcessing.operators.result` |
| Assembly | `Ans_Dpf_FEMutils_dll_cs` |
| Base Class | `Ans.DataProcessing.internal_objects.BaseOperator` |

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

## Constructors

#### Constructor

```python
cyclic_expansion()
```

#### Constructor

```python
cyclic_expansion(time_scoping, mesh_scoping, fields_container, harmonic_index, bool_rotate_to_global, normalization_factor, merge_stages, cyclic_support, sectors_to_expand, phi, config)
```

**Parameters:**

- `time_scoping` (*object*)
- `mesh_scoping` (*object*)
- `fields_container` (*object*)
- `harmonic_index` (*object*)
- `bool_rotate_to_global` (*object*)
- `normalization_factor` (*object*)
- `merge_stages` (*object*)
- `cyclic_support` (*object*)
- `sectors_to_expand` (*object*)
- `phi` (*object*)
- `config` (*OperatorConfig*)

#### Constructor

```python
cyclic_expansion(config)
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
