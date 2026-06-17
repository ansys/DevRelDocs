---
uid: Ans.DataProcessing.operators.utility.forward_meshes_container
---

# *class* forward_meshes_container(meshes: object = None, default_label: object = None, config: OperatorConfig = None)

Returns the input mesh or meshes container into a meshes container.

available inputs: `meshes` (MeshesContainer, MeshedRegion), `default_label` (string) (optional)

available outputs: `meshes_container` (MeshesContainer)

**DPF Framework Reference:** [forward_meshes_container operator specification](https://developer.ansys.com/docs/dpf-framework-2027-r1/operator-specifications/utility/forward_meshes_container.md)

**Parameters:**

* **meshes**
* **default_label**
* **config**

**Example:**

```python
op = forward_meshes_container()

op = forward_meshes_container(meshes=my_meshes,default_label=my_default_label)
```

## Inputs

### meshes

**Type:** *LinkableInput*

### default_label

this default label is used if a new meshes container needs to be created (default is unknown)

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
