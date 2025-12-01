---
uid: Ans.DataProcessing.operators.geo.elements_facets_surfaces_over_time
---

# elements_facets_surfaces_over_time Class

**Namespace:** [Ans.DataProcessing.operators.geo](Ans_DataProcessing_operators_geo.md)

## Summary

Calculates for a mesh, the surface of each element's facet over time for each specified time step. The output is a new mesh made with only surface elements.

available inputs: `scoping` (Scoping) (optional), `displacement` (FieldsContainer) (optional), `mesh` (MeshedRegion) (optional)

available outputs: `fields_container` (FieldsContainer), `mesh` (MeshedRegion)

## Example

```python
op = elements_facets_surfaces_over_time()

op = elements_facets_surfaces_over_time(scoping=my_scoping,displacement=my_displacement,mesh=my_mesh)
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

Displacement field's container.

**Type:** *LinkableInput*

### mesh

Mesh must be defined if the displacement field's container does not contain it, or if there is no displacement.

**Type:** *LinkableInput*

## Outputs

### fields_container

Surfaces field.

**Type:** *LinkableOutput*

### mesh

Mesh made of surface elements only.

**Type:** *LinkableOutput*

## Constructors

#### Constructor

```python
elements_facets_surfaces_over_time()
```

#### Constructor

```python
elements_facets_surfaces_over_time(scoping, displacement, mesh, config)
```

**Parameters:**

- `scoping` (*object*)
- `displacement` (*object*)
- `mesh` (*object*)
- `config` (*OperatorConfig*)

#### Constructor

```python
elements_facets_surfaces_over_time(config)
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
