---
uid: Ans.DataProcessing.operators.mesh.wireframe
---

# *class* wireframe(mesh: object = None, threshold: object = None, element_restriction: object = None, config: OperatorConfig = None)

Take a mesh and extracts its sharp edges, using pin 1 value as a threshold angle.

available inputs: `mesh` (MeshedRegion), `threshold` (double), `element_restriction` (Scoping) (optional)

available outputs: `wireframe` (MeshedRegion)

**DPF Framework Reference:** [wireframe operator specification](https://developer.ansys.com/docs/dpf-framework-2027-r1/operator-specifications/mesh/wireframe.md)

**Parameters:**

* **mesh**
* **threshold**
* **element_restriction**
* **config**

**Example:**

```python
op = wireframe()

op = wireframe(mesh=my_mesh,threshold=my_threshold,element_restriction=my_element_restriction)
```

## Inputs

### mesh

**Type:** *LinkableInput*

### threshold

angle threshold in radian that will trigger an edge detection.

**Type:** *LinkableInput*

### element_restriction

Restrict the list of elements that must be treated when extractiong edges. Can be used to exclude unwanted bodies or unwanted elements like contact or surface load elements.

**Type:** *LinkableInput*

## Outputs

### wireframe

**Type:** *LinkableOutput*

## Methods

## Properties

#### *property* inputs: InputSpec

*get/set*

#### *property* outputs: OutputSpec

*get/set*

#### *property* defaultConfig: Config

*get*
