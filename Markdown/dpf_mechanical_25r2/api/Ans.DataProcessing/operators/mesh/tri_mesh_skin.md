---
uid: Ans.DataProcessing.operators.mesh.tri_mesh_skin
---

# tri_mesh_skin Class

**Namespace:** [Ans.DataProcessing.operators.mesh](Ans_DataProcessing_operators_mesh.md)

## Summary

Extracts a skin of the mesh in triangles in a new meshed region.

available inputs: `mesh` (MeshedRegion), `include_surfaces` (bool) (optional), `mesh_scoping` (Scoping) (optional)

available outputs: `mesh` (MeshedRegion), `nodes_mesh_scoping` (Scoping)

## Example

```python
op = tri_mesh_skin()

op = tri_mesh_skin(mesh=my_mesh,include_surfaces=my_include_surfaces,mesh_scoping=my_mesh_scoping)
```

## Class Information

| Property | Value |
|----------|-------|
| Namespace | `Ans.DataProcessing.operators.mesh` |
| Assembly | `meshOperatorsCore_dll_cs` |
| Base Class | `Ans.DataProcessing.internal_objects.BaseOperator` |

## Inputs

### mesh

**Type:** *LinkableInput*

### include_surfaces

True: meshing will also take into account shell and skin elements. False: meshing will ignore shell and skin elements. The default is false.

**Type:** *LinkableInput*

### mesh_scoping

Nodal scoping to restrict the skin extraction to a set of nodes. If provided, a skin element is added to the skin mesh if all its nodes are in the scoping.

**Type:** *LinkableInput*

## Outputs

### mesh

**Type:** *LinkableOutput*

### nodes_mesh_scoping

**Type:** *LinkableOutput*

## Constructors

#### Constructor

```python
tri_mesh_skin()
```

#### Constructor

```python
tri_mesh_skin(mesh, include_surfaces, mesh_scoping, config)
```

**Parameters:**

- `mesh` (*object*)
- `include_surfaces` (*object*)
- `mesh_scoping` (*object*)
- `config` (*OperatorConfig*)

#### Constructor

```python
tri_mesh_skin(config)
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
