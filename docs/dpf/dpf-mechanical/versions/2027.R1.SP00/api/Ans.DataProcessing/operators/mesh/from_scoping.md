---
uid: Ans.DataProcessing.operators.mesh.from_scoping
---

# *class* from_scoping(scoping: object = None, inclusive: object = None, nodes_only: object = None, mesh: object = None, config: OperatorConfig = None)

Extracts a meshed region from another meshed region based on a scoping. Regarding the property fields whose scoping location is 'Elemental', 'Faces', and 'Nodal', they are scoped to the elements, faces or nodes of the output mesh. The ones whose scoping location is 'Global' are transferred from the input mesh to the output mesh without changes, and the rest of the property fields are not present in the output mesh.

available inputs: `scoping` (Scoping), `inclusive` (Int32) (optional), `nodes_only` (bool) (optional), `mesh` (MeshedRegion)

available outputs: `mesh` (MeshedRegion)

**DPF Framework Reference:** [from_scoping operator specification](https://developer.ansys.com/docs/dpf-framework-2027-r1/operator-specifications/mesh/from_scoping.md)

**Parameters:**

* **scoping**
* **inclusive**
* **nodes_only**
* **mesh**
* **config**

**Example:**

```python
op = from_scoping()

op = from_scoping(scoping=my_scoping,inclusive=my_inclusive,nodes_only=my_nodes_only,mesh=my_mesh)
```

## Inputs

### scoping

if nodal/face scoping, then the scoping is transposed respecting the inclusive pin

**Type:** *LinkableInput*

### inclusive

if inclusive == 1 then all the elements/faces adjacent to the nodes/faces ids in input are added, if inclusive == 0, only the elements/faces which have all their nodes/faces in the scoping are included

**Type:** *LinkableInput*

### nodes_only

returns mesh with nodes only (without any elements or property fields). Default is false.

**Type:** *LinkableInput*

### mesh

**Type:** *LinkableInput*

## Outputs

### mesh

**Type:** *LinkableOutput*

## Methods

## Properties

#### *property* inputs: InputSpec

*get/set*

#### *property* outputs: OutputSpec

*get/set*

#### *property* defaultConfig: Config

*get*
