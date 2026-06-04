---
uid: Ans.DataProcessing.operators.mesh.node_coordinates
---

# *class* node_coordinates(mesh: object = None, config: OperatorConfig = None)

Returns the node coordinates of the mesh(es) in input.

available inputs: `mesh` (MeshedRegion, MeshesContainer)

available outputs: `coordinates` (Field ,FieldsContainer)

**DPF Framework Reference:** [node_coordinates operator specification](https://developer.ansys.com/docs/dpf-framework-2027-r1/operator-specifications/mesh/node_coordinates.md)

**Parameters:**

* **mesh**
* **config**

**Example:**

```python
op = node_coordinates()

op = node_coordinates(mesh=my_mesh)
```

## Inputs

### mesh

**Type:** *LinkableInput*

## Outputs

### coordinates

if the input is a meshed region, a field of coordinates is the output, else if the input is a  meshes container, a fields container (one field by mesh) is the output

**Type:** *LinkableOutput*

## Methods

## Properties

#### *property* inputs: InputSpec

*get/set*

#### *property* outputs: OutputSpec

*get/set*

#### *property* defaultConfig: Config

*get*
