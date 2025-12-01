---
uid: Ans.DataProcessing.operators.averaging.nodal_difference
---

# nodal_difference Class

**Namespace:** [Ans.DataProcessing.operators.averaging](Ans_DataProcessing_operators_averaging.md)

## Summary

Transforms an Elemental Nodal field into a Nodal field. Each nodal value is the maximum difference between the unaveraged computed result for all elements that share this particular node. The result is computed on a given node's scoping.

available inputs: `field` (Field, FieldsContainer), `mesh_scoping` (Scoping) (optional), `mesh` (MeshedRegion) (optional)

available outputs: `field` (Field)

## Example

```python
op = nodal_difference()

op = nodal_difference(field=my_field,mesh_scoping=my_mesh_scoping,mesh=my_mesh)
```

## Class Information

| Property | Value |
|----------|-------|
| Namespace | `Ans.DataProcessing.operators.averaging` |
| Assembly | `Ans_Dpf_FEMutils_dll_cs` |
| Base Class | `Ans.DataProcessing.internal_objects.BaseOperator` |

## Inputs

### field

field or fields container with only one field is expected

**Type:** *LinkableInput*

### mesh_scoping

average only on these entities

**Type:** *LinkableInput*

### mesh

**Type:** *LinkableInput*

## Outputs

### field

**Type:** *LinkableOutput*

## Constructors

#### Constructor

```python
nodal_difference()
```

#### Constructor

```python
nodal_difference(field, mesh_scoping, mesh, config)
```

**Parameters:**

- `field` (*object*)
- `mesh_scoping` (*object*)
- `mesh` (*object*)
- `config` (*OperatorConfig*)

#### Constructor

```python
nodal_difference(config)
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
