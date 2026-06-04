---
uid: Ans.DataProcessing.operators.averaging.elemental_to_nodal_fc
---

# elemental_to_nodal_fc Class

**Namespace:** [Ans.DataProcessing.operators.averaging](Ans_DataProcessing_operators_averaging.md)

## Summary

Transforms Elemental Nodal fields to Nodal fields. The result is computed on a given node's scoping.1. For a finite element mesh, the value on a node is the average of the values of the neighbour elements.

2. For a finite volume mesh, the agorithm is :

   - For each node, compute interpolation weights for the cells connected to it based	on the Frink's Laplacian method.

	- If the determinant of the I matrix is zero, switch to an inverse distance weighted average.

	- If not, compute the Frink weights and apply the Holmes' weight clip.

	- If the clipping produces a large overshoot, inverse volume weighted average is used..

3. For a face finite volume mesh inverse distance weighted average is used.

available inputs: `fields_container` (FieldsContainer), `mesh` (MeshedRegion, MeshesContainer) (optional), `force_averaging` (Int32) (optional), `mesh_scoping` (Scoping, ScopingsContainer) (optional), `algorithm` (Int32) (optional)

available outputs: `fields_container` (FieldsContainer)

## Example

```python
op = elemental_to_nodal_fc()

op = elemental_to_nodal_fc(fields_container=my_fields_container,mesh=my_mesh,force_averaging=my_force_averaging,mesh_scoping=my_mesh_scoping,algorithm=my_algorithm)
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

### mesh

**Type:** *LinkableInput*

### force_averaging

Averaging on nodes is used if this pin is set to 1 (default is 1 for integrated results and 0 for discrete ones).

**Type:** *LinkableInput*

### mesh_scoping

**Type:** *LinkableInput*

### algorithm

Forces the usage of algorithm 1, 2 or 3 (default is chosen based on the type of mesh).

**Type:** *LinkableInput*

## Outputs

### fields_container

**Type:** *LinkableOutput*

## Constructors

#### Constructor

```python
elemental_to_nodal_fc()
```

#### Constructor

```python
elemental_to_nodal_fc(fields_container, mesh, force_averaging, mesh_scoping, algorithm, config)
```

**Parameters:**

- `fields_container` (*object*)
- `mesh` (*object*)
- `force_averaging` (*object*)
- `mesh_scoping` (*object*)
- `algorithm` (*object*)
- `config` (*OperatorConfig*)

#### Constructor

```python
elemental_to_nodal_fc(config)
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
