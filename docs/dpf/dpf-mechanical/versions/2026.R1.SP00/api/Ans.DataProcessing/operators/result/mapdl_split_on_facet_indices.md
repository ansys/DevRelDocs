---
uid: Ans.DataProcessing.operators.result.mapdl_split_on_facet_indices
---

# mapdl_split_on_facet_indices Class

**Namespace:** [Ans.DataProcessing.operators.result](Ans_DataProcessing_operators_result.md)

## Summary

Splits each Field in a FieldsContainer defined on the skin elements of a mesh according to the local facets indices of its corresponding solid element. The output FieldsContainer retains the original labels and adds a 'facet' label, which indicates at which facet of the solid mesh was the original skin element located. The facet ids are according to MAPDL convention. The scoping of the output Fields reflects the element indices in the solid mesh.

available inputs: `fields_container` (FieldsContainer), `property_field_new_elements_to_old` (PropertyField), `facet_indices` (PropertyField), `volume_mesh` (MeshedRegion), `degenerated_tets` (Scoping) (optional), `non_degenerated_tets` (Scoping) (optional)

available outputs: `fields_container` (FieldsContainer)

## Example

```python
op = mapdl_split_on_facet_indices()

op = mapdl_split_on_facet_indices(fields_container=my_fields_container,property_field_new_elements_to_old=my_property_field_new_elements_to_old,facet_indices=my_facet_indices,volume_mesh=my_volume_mesh,degenerated_tets=my_degenerated_tets,non_degenerated_tets=my_non_degenerated_tets)
```

## Class Information

| Property | Value |
|----------|-------|
| Namespace | `Ans.DataProcessing.operators.result` |
| Assembly | `mapdlOperatorsCore_dll_cs` |
| Base Class | `Ans.DataProcessing.internal_objects.BaseOperator` |

## Inputs

### fields_container

Fields container to split, with generic number of labels (e.g. time, zone, complex...), and the Fields of the FieldsContainer will have location Elemental and the Scoping Ids will be the Element Ids on the skin mesh.

**Type:** *LinkableInput*

### property_field_new_elements_to_old

This property field provides, for each new face element ID (in the scoping), the corresponding 3D volume element index (in the data) it has been extracted from. The 3D volume element ID can be found with the element scoping of the input mesh.

**Type:** *LinkableInput*

### facet_indices

This property field gives, for each new face element ID (in the scoping), the corresponding face index on the source 3D volume element. The 3D volume element can be extracted from the previous output.

**Type:** *LinkableInput*

### volume_mesh

The solid support.

**Type:** *LinkableInput*

### degenerated_tets

Elemental scoping of tet elements. If connected, the tets in the scoping are treated as degenerated tets (SOLID185), and the rest as non-degenerated tets (SOLID285). Pins 185 and 285 are mutually exclusionary (they cannot be connected at the same time), and if none of them is connected, all tets are treated as non-degenerated (SOLID285).

**Type:** *LinkableInput*

### non_degenerated_tets

Elemental scoping of tet elements. If connected, the tets in the scoping are treated as non-degenerated tets (SOLID285), and the rest as degenerated tets (SOLID185). Pins 185 and 285 are mutually exclusionary (they cannot be connected at the same time), and if none of them is connected, all tets are treated as non-degenerated (SOLID285).

**Type:** *LinkableInput*

## Outputs

### fields_container

Output splitted fields containter

**Type:** *LinkableOutput*

## Constructors

#### Constructor

```python
mapdl_split_on_facet_indices()
```

#### Constructor

```python
mapdl_split_on_facet_indices(fields_container, property_field_new_elements_to_old, facet_indices, volume_mesh, degenerated_tets, non_degenerated_tets, config)
```

**Parameters:**

- `fields_container` (*object*)
- `property_field_new_elements_to_old` (*object*)
- `facet_indices` (*object*)
- `volume_mesh` (*object*)
- `degenerated_tets` (*object*)
- `non_degenerated_tets` (*object*)
- `config` (*OperatorConfig*)

#### Constructor

```python
mapdl_split_on_facet_indices(config)
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
