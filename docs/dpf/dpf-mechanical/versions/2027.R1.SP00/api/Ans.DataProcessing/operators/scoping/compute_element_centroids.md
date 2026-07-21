---
uid: Ans.DataProcessing.operators.scoping.compute_element_centroids
---

# *class* compute_element_centroids(element_scoping: object = None, algorithm: object = None, compute_measure: object = None, mesh: object = None, config: OperatorConfig = None)

Computes the element centroids of the mesh and optionally the element measure.

available inputs: `element_scoping` (Scoping) (optional), `algorithm` (Int32) (optional), `compute_measure` (bool) (optional), `mesh` (MeshedRegion)

available outputs: `centroids` (Field), `measure` (Field)

**DPF Framework Reference:** [compute_element_centroids operator specification](https://developer-a.synopsys.com/docs/dpf-framework-2027-r1/operator-specifications/scoping/compute_element_centroids.md)

**Parameters:**

* **element_scoping**
* **algorithm**
* **compute_measure**
* **mesh**
* **config**

**Example:**

```python
op = compute_element_centroids()

op = compute_element_centroids(element_scoping=my_element_scoping,algorithm=my_algorithm,compute_measure=my_compute_measure,mesh=my_mesh)
```

## Inputs

### element_scoping

If provided, only the centroids of the elements in the scoping are computed.

**Type:** *LinkableInput*

### algorithm

Centroid algorithm: weighted_average = 1 (default), arithmetic_average = 2. Note: arithmetic_average only supports compute_measure = false.

**Type:** *LinkableInput*

### compute_measure

If true (default), computes and returns measure on pin 1. If false, only centroids are returned. Note: compute_measure = true is only supported with weighted_average algorithm.

**Type:** *LinkableInput*

### mesh

Mesh to compute centroids

**Type:** *LinkableInput*

## Outputs

### centroids

element centroids.

**Type:** *LinkableOutput*

### measure

element measure (length, surface or volume depending on the dimension of the element), returned only when compute_measure is true.

**Type:** *LinkableOutput*

## Methods

## Properties

#### *property* inputs: InputSpec

*get/set*

#### *property* outputs: OutputSpec

*get/set*

#### *property* defaultConfig: Config

*get*
