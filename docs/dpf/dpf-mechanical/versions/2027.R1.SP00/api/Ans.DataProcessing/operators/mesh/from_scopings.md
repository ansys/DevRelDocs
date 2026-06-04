---
uid: Ans.DataProcessing.operators.mesh.from_scopings
---

# *class* from_scopings(scopings_container: object = None, inclusive: object = None, nodes_only: object = None, mesh: object = None, config: OperatorConfig = None)

Extracts multiple meshed region base on a scoping and saved in a MeshesContainer

available inputs: `scopings_container` (ScopingsContainer), `inclusive` (Int32) (optional), `nodes_only` (bool) (optional), `mesh` (MeshedRegion)

available outputs: `meshes` (MeshesContainer)

**DPF Framework Reference:** [from_scopings operator specification](https://developer.ansys.com/docs/dpf-framework-2027-r1/operator-specifications/mesh/from_scopings.md)

**Parameters:**

* **scopings_container**
* **inclusive**
* **nodes_only**
* **mesh**
* **config**

**Example:**

```python
op = from_scopings()

op = from_scopings(scopings_container=my_scopings_container,inclusive=my_inclusive,nodes_only=my_nodes_only,mesh=my_mesh)
```

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

## Methods

## Properties

#### *property* inputs: InputSpec

*get/set*

#### *property* outputs: OutputSpec

*get/set*

#### *property* defaultConfig: Config

*get*
