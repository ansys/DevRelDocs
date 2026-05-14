---
uid: Ans.DataProcessing.operators.scoping.compute_element_centroids
---

# *class* compute_element_centroids(element_scoping: object = None, mesh: object = None, config: OperatorConfig = None)

Computes the element centroids of the mesh. It also outputs the element measure.

available inputs: `element_scoping` (Scoping) (optional), `mesh` (MeshedRegion)

available outputs: `centroids` (Field), `measure` (Field)

**DPF Framework Reference:** [compute_element_centroids operator specification](https://developer.ansys.com/docs/dpf-framework-2027-r1/operator-specifications/scoping/compute_element_centroids.md)

**Parameters:**

* **element_scoping**
* **mesh**
* **config**

**Example:**

```python
op = compute_element_centroids()

op = compute_element_centroids(element_scoping=my_element_scoping,mesh=my_mesh)
```

## Inputs

### element_scoping

If provided, only the centroids of the elements in the scoping are computed.

**Type:** *LinkableInput*

### mesh

Mesh to compute centroids

**Type:** *LinkableInput*

## Outputs

### centroids

element centroids.

**Type:** *LinkableOutput*

### measure

element measure (length, surface or volume depending on the dimension of the element).

**Type:** *LinkableOutput*

## Methods

## Properties

#### *property* inputs: InputSpec

*get/set*

#### *property* outputs: OutputSpec

*get/set*

#### *property* defaultConfig: Config

*get*
