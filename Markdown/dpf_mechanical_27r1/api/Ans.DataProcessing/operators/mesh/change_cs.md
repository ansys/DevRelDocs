---
uid: Ans.DataProcessing.operators.mesh.change_cs
---

# *class* change_cs(meshes: object = None, coordinate_system: object = None, config: OperatorConfig = None)

Applies a transformation (rotation and displacement) matrix on a mesh or meshes container.

available inputs: `meshes` (MeshedRegion, MeshesContainer), `coordinate_system` (Field)

available outputs: `meshed_region` (MeshedRegion ,MeshesContainer)

**DPF Framework Reference:** [change_cs operator specification](https://developer.ansys.com/docs/dpf-framework-2027-r1/operator-specifications/mesh/change_cs.md)

**Parameters:**

* **meshes**
* **coordinate_system**
* **config**

**Example:**

```python
op = change_cs()

op = change_cs(meshes=my_meshes,coordinate_system=my_coordinate_system)
```

## Inputs

### meshes

**Type:** *LinkableInput*

### coordinate_system

3-3 rotation matrix + 3 translations (X, Y, Z)

**Type:** *LinkableInput*

## Outputs

### meshed_region

**Type:** *LinkableOutput*

## Methods

## Properties

#### *property* inputs: InputSpec

*get/set*

#### *property* outputs: OutputSpec

*get/set*

#### *property* defaultConfig: Config

*get*
