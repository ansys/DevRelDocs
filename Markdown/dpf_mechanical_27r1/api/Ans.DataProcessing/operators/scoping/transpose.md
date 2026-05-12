---
uid: Ans.DataProcessing.operators.scoping.transpose
---

# *class* transpose(mesh_scoping: object = None, meshed_region: object = None, inclusive: object = None, extend_midside_nodes: object = None, requested_location: object = None, config: OperatorConfig = None)

Transposes the input scoping or scopings container (Elemental/Faces --> Nodal, or Nodal ---> Elemental/Faces), based on the input mesh region.

available inputs: `mesh_scoping` (Scoping, ScopingsContainer), `meshed_region` (MeshedRegion, MeshesContainer), `inclusive` (Int32) (optional), `extend_midside_nodes` (bool) (optional), `requested_location` (string) (optional)

available outputs: `mesh_scoping` (Scoping ,ScopingsContainer)

**DPF Framework Reference:** [transpose operator specification](https://developer.ansys.com/docs/dpf-framework-2027-r1/operator-specifications/scoping/transpose.md)

**Parameters:**

* **mesh_scoping**
* **meshed_region**
* **inclusive**
* **extend_midside_nodes**
* **requested_location**
* **config**

**Example:**

```python
op = transpose()

op = transpose(mesh_scoping=my_mesh_scoping,meshed_region=my_meshed_region,inclusive=my_inclusive,extend_midside_nodes=my_extend_midside_nodes,requested_location=my_requested_location)
```

## Inputs

### mesh_scoping

Scoping or scopings container (the input type is the output type)

**Type:** *LinkableInput*

### meshed_region

**Type:** *LinkableInput*

### inclusive

if inclusive == 1 then all the elements/faces adjacent to the nodes/faces ids in input are added, if inclusive == 0, only the elements/faces which have all their nodes/faces in the scoping are included

**Type:** *LinkableInput*

### extend_midside_nodes

This pin only affects nodal to elemental transposition. If true, the neighbour corner nodes of every input midside node are also considered in the input scoping. As a result, the output scoping also contains the elements connected to corner nodes that may not be in the input scoping. It is false by default.

**Type:** *LinkableInput*

### requested_location

Output scoping location for meshes with nodes, faces and elements. By default, elemental and faces scopings transpose to nodal, and nodal scopings transpose to elemental.

**Type:** *LinkableInput*

## Outputs

### mesh_scoping

Scoping or scopings container (the input type is the output type)

**Type:** *LinkableOutput*

## Methods

## Properties

#### *property* inputs: InputSpec

*get/set*

#### *property* outputs: OutputSpec

*get/set*

#### *property* defaultConfig: Config

*get*
