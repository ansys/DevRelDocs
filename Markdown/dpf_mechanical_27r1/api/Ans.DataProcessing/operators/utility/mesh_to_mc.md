---
uid: Ans.DataProcessing.operators.utility.mesh_to_mc
---

# *class* mesh_to_mc(mesh: object = None, label: object = None, config: OperatorConfig = None)

Creates a meshes container containing the mesh provided on pin 0.

available inputs: `mesh` (MeshedRegion, MeshesContainer), `label` (LabelSpace)

available outputs: `meshes_container` (MeshesContainer)

**DPF Framework Reference:** [mesh_to_mc operator specification](https://developer.ansys.com/docs/dpf-framework-2027-r1/operator-specifications/utility/mesh_to_mc.md)

**Parameters:**

* **mesh**
* **label**
* **config**

**Example:**

```python
op = mesh_to_mc()

op = mesh_to_mc(mesh=my_mesh,label=my_label)
```

## Inputs

### mesh

If a meshes container is set in input, it is passed on as an output with the additional label space (if any).

**Type:** *LinkableInput*

### label

Sets a label space.

**Type:** *LinkableInput*

## Outputs

### meshes_container

**Type:** *LinkableOutput*

## Methods

## Properties

#### *property* inputs: InputSpec

*get/set*

#### *property* outputs: OutputSpec

*get/set*

#### *property* defaultConfig: Config

*get*
