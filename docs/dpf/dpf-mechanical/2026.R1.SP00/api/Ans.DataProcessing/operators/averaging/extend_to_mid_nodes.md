---
uid: Ans.DataProcessing.operators.averaging.extend_to_mid_nodes
---

# extend_to_mid_nodes Class

**Namespace:** [Ans.DataProcessing.operators.averaging](Ans_DataProcessing_operators_averaging.md)

## Summary

Extends an Elemental Nodal or Nodal field defined on corner nodes to a field defined also on the mid nodes.

available inputs: `field` (Field, FieldsContainer), `mesh` (MeshedRegion) (optional)

available outputs: `field` (Field)

## Example

```python
op = extend_to_mid_nodes()

op = extend_to_mid_nodes(field=my_field,mesh=my_mesh)
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

### mesh

**Type:** *LinkableInput*

## Outputs

### field

**Type:** *LinkableOutput*

## Constructors

#### Constructor

```python
extend_to_mid_nodes()
```

#### Constructor

```python
extend_to_mid_nodes(field, mesh, config)
```

**Parameters:**

- `field` (*object*)
- `mesh` (*object*)
- `config` (*OperatorConfig*)

#### Constructor

```python
extend_to_mid_nodes(config)
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
