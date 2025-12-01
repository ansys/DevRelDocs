---
uid: Ans.DataProcessing.operators.mapping.scoping_on_coordinates
---

# scoping_on_coordinates Class

**Namespace:** [Ans.DataProcessing.operators.mapping](Ans_DataProcessing_operators_mapping.md)

## Summary

Finds the Elemental scoping of a set of coordinates.

available inputs: `coordinates` (Field), `mesh` (MeshedRegion)

available outputs: `scoping` (Scoping)

## Example

```python
op = scoping_on_coordinates()

op = scoping_on_coordinates(coordinates=my_coordinates,mesh=my_mesh)
```

## Class Information

| Property | Value |
|----------|-------|
| Namespace | `Ans.DataProcessing.operators.mapping` |
| Assembly | `Ans_Dpf_FEMutils_dll_cs` |
| Base Class | `Ans.DataProcessing.internal_objects.BaseOperator` |

## Inputs

### coordinates

**Type:** *LinkableInput*

### mesh

**Type:** *LinkableInput*

## Outputs

### scoping

**Type:** *LinkableOutput*

## Constructors

#### Constructor

```python
scoping_on_coordinates()
```

#### Constructor

```python
scoping_on_coordinates(coordinates, mesh, config)
```

**Parameters:**

- `coordinates` (*object*)
- `mesh` (*object*)
- `config` (*OperatorConfig*)

#### Constructor

```python
scoping_on_coordinates(config)
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
