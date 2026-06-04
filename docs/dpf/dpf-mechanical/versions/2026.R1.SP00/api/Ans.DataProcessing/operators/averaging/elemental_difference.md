---
uid: Ans.DataProcessing.operators.averaging.elemental_difference
---

# elemental_difference Class

**Namespace:** [Ans.DataProcessing.operators.averaging](Ans_DataProcessing_operators_averaging.md)

## Summary

Transforms an Elemental Nodal or Nodal field into an Elemental field. Each elemental value is the maximum difference between the computed result for all nodes in this element. The result is computed on a given element scoping.

available inputs: `field` (Field, FieldsContainer), `mesh_scoping` (Scoping) (optional), `mesh` (MeshedRegion) (optional), `through_layers` (bool) (optional)

available outputs: `field` (Field)

## Example

```python
op = elemental_difference()

op = elemental_difference(field=my_field,mesh_scoping=my_mesh_scoping,mesh=my_mesh,through_layers=my_through_layers)
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

### through_layers

The maximum elemental difference is taken through the different shell layers if true (default is false).

**Type:** *LinkableInput*

## Outputs

### field

**Type:** *LinkableOutput*

## Constructors

#### Constructor

```python
elemental_difference()
```

#### Constructor

```python
elemental_difference(field, mesh_scoping, mesh, through_layers, config)
```

**Parameters:**

- `field` (*object*)
- `mesh_scoping` (*object*)
- `mesh` (*object*)
- `through_layers` (*object*)
- `config` (*OperatorConfig*)

#### Constructor

```python
elemental_difference(config)
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
