---
uid: Ans.DataProcessing.operators.geo.element_nodal_contribution
---

# element_nodal_contribution Class

**Namespace:** [Ans.DataProcessing.operators.geo](Ans_DataProcessing_operators_geo.md)

## Summary

Compute the fraction of the element measure attributed to each node of each element (fraction of the volume for 3D elements, fraction of the area for 2D elements or fraction of the length for 1D elements). It is computed by taking the integral of the shape function associated to each node within each element.

available inputs: `mesh` (MeshedRegion), `scoping` (Scoping) (optional), `volume_fraction` (bool) (optional)

available outputs: `field` (Field)

## Example

```python
op = element_nodal_contribution()

op = element_nodal_contribution(mesh=my_mesh,scoping=my_scoping,volume_fraction=my_volume_fraction)
```

## Class Information

| Property | Value |
|----------|-------|
| Namespace | `Ans.DataProcessing.operators.geo` |
| Assembly | `Ans_Dpf_FEMutils_dll_cs` |
| Base Class | `Ans.DataProcessing.internal_objects.BaseOperator` |

## Inputs

### mesh

**Type:** *LinkableInput*

### scoping

Integrate the input field over a specific scoping.

**Type:** *LinkableInput*

### volume_fraction

If true, returns influence volume, area or length. If false, the values are normalized with the element volume, area or length. Default: true.

**Type:** *LinkableInput*

## Outputs

### field

**Type:** *LinkableOutput*

## Constructors

#### Constructor

```python
element_nodal_contribution()
```

#### Constructor

```python
element_nodal_contribution(mesh, scoping, volume_fraction, config)
```

**Parameters:**

- `mesh` (*object*)
- `scoping` (*object*)
- `volume_fraction` (*object*)
- `config` (*OperatorConfig*)

#### Constructor

```python
element_nodal_contribution(config)
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
