---
uid: Ans.DataProcessing.operators.averaging.elemental_nodal_to_nodal_elemental_fc
---

# elemental_nodal_to_nodal_elemental_fc Class

**Namespace:** [Ans.DataProcessing.operators.averaging](Ans_DataProcessing_operators_averaging.md)

## Summary

Transforms Elemental Nodal fields to Nodal Elemental fields. The result is computed on a given node's scoping.

available inputs: `fields_container` (FieldsContainer), `mesh_scoping` (Scoping) (optional)

available outputs: `fields_container` (FieldsContainer)

## Example

```python
op = elemental_nodal_to_nodal_elemental_fc()

op = elemental_nodal_to_nodal_elemental_fc(fields_container=my_fields_container,mesh_scoping=my_mesh_scoping)
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

## Outputs

### fields_container

**Type:** *LinkableOutput*

## Constructors

#### Constructor

```python
elemental_nodal_to_nodal_elemental_fc()
```

#### Constructor

```python
elemental_nodal_to_nodal_elemental_fc(fields_container, mesh_scoping, config)
```

**Parameters:**

- `fields_container` (*object*)
- `mesh_scoping` (*object*)
- `config` (*OperatorConfig*)

#### Constructor

```python
elemental_nodal_to_nodal_elemental_fc(config)
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
