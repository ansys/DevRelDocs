---
uid: Ans.DataProcessing.operators.utility.merge_meshes_containers
---

# *class* merge_meshes_containers(meshes_containers1: object = None, meshes_containers2: object = None, config: OperatorConfig = None)

Assembles a set of meshes containers into a unique one.

available inputs: `meshes_containers1` (MeshesContainer), `meshes_containers2` (MeshesContainer)

available outputs: `merged_meshes_container` (MeshesContainer)

**DPF Framework Reference:** [merge_meshes_containers operator specification](https://developer.ansys.com/docs/dpf-framework-2027-r1/operator-specifications/utility/merge_meshes_containers.md)

**Parameters:**

* **meshes_containers1**
* **meshes_containers2**
* **config**

**Example:**

```python
op = merge_meshes_containers()

op = merge_meshes_containers(meshes_containers1=my_meshes_containers1,meshes_containers2=my_meshes_containers2)
```

## Inputs

### meshes_containers1

a vector of meshes containers to merge or meshes containers from pin 0 to ...

**Type:** *LinkableInput*

### meshes_containers2

a vector of meshes containers to merge or meshes containers from pin 0 to ...

**Type:** *LinkableInput*

## Outputs

### merged_meshes_container

**Type:** *LinkableOutput*

## Methods

## Properties

#### *property* inputs: InputSpec

*get/set*

#### *property* outputs: OutputSpec

*get/set*

#### *property* defaultConfig: Config

*get*
