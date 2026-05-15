---
uid: Ans.DataProcessing.operators.mesh.from_scopings
---

# from_scopings Class

**Namespace:** [Ans.DataProcessing.operators.mesh](Ans_DataProcessing_operators_mesh.md)

## Summary

Extracts multiple meshed region base on a scoping and saved in a MeshesContainer

available inputs: `scopings_container` (ScopingsContainer), `inclusive` (Int32) (optional), `nodes_only` (bool) (optional), `mesh` (MeshedRegion)

available outputs: `meshes` (MeshesContainer)

## Example

```python
op = from_scopings()

op = from_scopings(scopings_container=my_scopings_container,inclusive=my_inclusive,nodes_only=my_nodes_only,mesh=my_mesh)
```

## Class Information

| Property | Value |
|----------|-------|
| Namespace | `Ans.DataProcessing.operators.mesh` |
| Assembly | `Ans_Dpf_FEMutils_dll_cs` |
| Base Class | `Ans.DataProcessing.internal_objects.BaseOperator` |

## Inputs

### scopings_container

if nodal scoping, then the scoping is transposed respecting the inclusive pin

**Type:** *LinkableInput*

### inclusive

if inclusive == 1 then all the elements/faces adjacent to the nodes/faces ids in input are added, if inclusive == 0, only the elements/faces which have all their nodes/faces in the scoping are included

**Type:** *LinkableInput*

### nodes_only

returns mesh with nodes only (without any elements). Default is false.

**Type:** *LinkableInput*

### mesh

**Type:** *LinkableInput*

## Outputs

### meshes

**Type:** *LinkableOutput*

## Constructors

#### Constructor

```python
from_scopings()
```

#### Constructor

```python
from_scopings(scopings_container, inclusive, nodes_only, mesh, config)
```

**Parameters:**

- `scopings_container` (*object*)
- `inclusive` (*object*)
- `nodes_only` (*object*)
- `mesh` (*object*)
- `config` (*OperatorConfig*)

#### Constructor

```python
from_scopings(config)
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
