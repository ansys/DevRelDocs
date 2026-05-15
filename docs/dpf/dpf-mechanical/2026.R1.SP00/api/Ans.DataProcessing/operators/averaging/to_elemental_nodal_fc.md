---
uid: Ans.DataProcessing.operators.averaging.to_elemental_nodal_fc
---

# to_elemental_nodal_fc Class

**Namespace:** [Ans.DataProcessing.operators.averaging](Ans_DataProcessing_operators_averaging.md)

## Summary

Transforms fields into Elemental Nodal fields using an averaging process. The result is computed on a given element's scoping.

available inputs: `fields_container` (FieldsContainer), `mesh_scoping` (Scoping) (optional), `mesh` (MeshedRegion) (optional)

available outputs: `fields_container` (FieldsContainer)

## Example

```python
op = to_elemental_nodal_fc()

op = to_elemental_nodal_fc(fields_container=my_fields_container,mesh_scoping=my_mesh_scoping,mesh=my_mesh)
```

## Class Information

| Property | Value |
|----------|-------|
| Namespace | `Ans.DataProcessing.operators.averaging` |
| Assembly | `Ans_Dpf_FEMutils_dll_cs` |
| Base Class | `Ans.DataProcessing.internal_objects.BaseOperator` |

## Inputs

### fields_container

**Type:** *LinkableInput*

### mesh_scoping

**Type:** *LinkableInput*

### mesh

**Type:** *LinkableInput*

## Outputs

### fields_container

**Type:** *LinkableOutput*

## Constructors

#### Constructor

```python
to_elemental_nodal_fc()
```

#### Constructor

```python
to_elemental_nodal_fc(fields_container, mesh_scoping, mesh, config)
```

**Parameters:**

- `fields_container` (*object*)
- `mesh_scoping` (*object*)
- `mesh` (*object*)
- `config` (*OperatorConfig*)

#### Constructor

```python
to_elemental_nodal_fc(config)
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
