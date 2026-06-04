---
uid: Ans.DataProcessing.operators.geo.elements_volumes_over_time
---

# elements_volumes_over_time Class

**Namespace:** [Ans.DataProcessing.operators.geo](Ans_DataProcessing_operators_geo.md)

## Summary

Calculates for a mesh, the volume of each element over time for each specified time step.

available inputs: `scoping` (Scoping) (optional), `displacement` (FieldsContainer) (optional), `mesh` (MeshedRegion) (optional)

available outputs: `fields_container` (FieldsContainer)

## Example

```python
op = elements_volumes_over_time()

op = elements_volumes_over_time(scoping=my_scoping,displacement=my_displacement,mesh=my_mesh)
```

## Class Information

| Property | Value |
|----------|-------|
| Namespace | `Ans.DataProcessing.operators.geo` |
| Assembly | `Ans_Dpf_FEMutils_dll_cs` |
| Base Class | `Ans.DataProcessing.internal_objects.BaseOperator` |

## Inputs

### scoping

**Type:** *LinkableInput*

### displacement

Displacement field's container. Must contain the mesh if mesh not specified in input.

**Type:** *LinkableInput*

### mesh

Mesh must be defined if the displacement field's container does not contain it, or if there is no displacement.

**Type:** *LinkableInput*

## Outputs

### fields_container

**Type:** *LinkableOutput*

## Constructors

#### Constructor

```python
elements_volumes_over_time()
```

#### Constructor

```python
elements_volumes_over_time(scoping, displacement, mesh, config)
```

**Parameters:**

- `scoping` (*object*)
- `displacement` (*object*)
- `mesh` (*object*)
- `config` (*OperatorConfig*)

#### Constructor

```python
elements_volumes_over_time(config)
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
