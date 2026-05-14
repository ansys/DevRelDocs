---
uid: Ans.DataProcessing.operators.mesh.decimate_mesh
---

# *class* decimate_mesh(mesh: object = None, preservation_ratio: object = None, aggressiveness: object = None, config: OperatorConfig = None)

Decimate a meshed region

available inputs: `mesh` (MeshedRegion), `preservation_ratio` (double) (optional), `aggressiveness` (Int32) (optional)

available outputs: `mesh` (MeshedRegion)

**DPF Framework Reference:** [decimate_mesh operator specification](https://developer.ansys.com/docs/dpf-framework-2027-r1/operator-specifications/mesh/decimate_mesh.md)

**Parameters:**

* **mesh**
* **preservation_ratio**
* **aggressiveness**
* **config**

**Example:**

```python
op = decimate_mesh()

op = decimate_mesh(mesh=my_mesh,preservation_ratio=my_preservation_ratio,aggressiveness=my_aggressiveness)
```

## Inputs

### mesh

Mesh to decimate

**Type:** *LinkableInput*

### preservation_ratio

Target ratio of elements to preserve, the actual number of elements preserved might differ. Default value is 0.5.

**Type:** *LinkableInput*

### aggressiveness

Quality measure for the resulting decimated mesh. Lower aggresiveness will provide a higher quality mesh with the tradeoff of higher execution time. Value range is 0 to 150, default is 0.

**Type:** *LinkableInput*

## Outputs

### mesh

Decimated mesh with triangle elements

**Type:** *LinkableOutput*

## Methods

## Properties

#### *property* inputs: InputSpec

*get/set*

#### *property* outputs: OutputSpec

*get/set*

#### *property* defaultConfig: Config

*get*
