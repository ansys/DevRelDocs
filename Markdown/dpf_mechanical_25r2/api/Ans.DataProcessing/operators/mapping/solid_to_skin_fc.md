---
uid: Ans.DataProcessing.operators.mapping.solid_to_skin_fc
---

# solid_to_skin_fc Class

**Namespace:** [Ans.DataProcessing.operators.mapping](Ans_DataProcessing_operators_mapping.md)

## Summary

Maps a field defined on solid elements to a field defined on skin elements. Three cases are possible, based on the solid field data location; (i) Elemental: The values associated with the solid elements are copied according to those underlying the skin, (ii) Nodal: The solid field is rescoped with respect to the nodes of the skin mesh, (iii) ElementalNodal: The values are copied from the solid mesh to the skin mesh for each element face and the nodes associated with it.

available inputs: `fields_container` (FieldsContainer), `mesh` (MeshedRegion), `solid_mesh` (MeshedRegion) (optional)

available outputs: `fields_container` (FieldsContainer)

## Example

```python
op = solid_to_skin_fc()

op = solid_to_skin_fc(fields_container=my_fields_container,mesh=my_mesh,solid_mesh=my_solid_mesh)
```

## Class Information

| Property | Value |
|----------|-------|
| Namespace | `Ans.DataProcessing.operators.mapping` |
| Assembly | `Ans_Dpf_FEMutils_dll_cs` |
| Base Class | `Ans.DataProcessing.internal_objects.BaseOperator` |

## Inputs

### fields_container

field or fields container with only one field is expected

**Type:** *LinkableInput*

### mesh

skin mesh region expected

**Type:** *LinkableInput*

### solid_mesh

Solid mesh support (optional).

**Type:** *LinkableInput*

## Outputs

### fields_container

**Type:** *LinkableOutput*

## Constructors

#### Constructor

```python
solid_to_skin_fc()
```

#### Constructor

```python
solid_to_skin_fc(fields_container, mesh, solid_mesh, config)
```

**Parameters:**

- `fields_container` (*object*)
- `mesh` (*object*)
- `solid_mesh` (*object*)
- `config` (*OperatorConfig*)

#### Constructor

```python
solid_to_skin_fc(config)
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
