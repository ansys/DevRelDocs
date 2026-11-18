---
uid: Ans.DataProcessing.operators.scoping.intersect
---

# *class* intersect(scopingA: object = None, scopingB: object = None, output_selection: object = None, config: OperatorConfig = None)

Intersect 2 scopings and return the intersection and the difference between the intersection and the first scoping. If scopingB is a scopings container, each scoping of scopingA (a scoping or a scopings container) is intersected with each scoping of scopingB, and only the intersection can be computed.

available inputs: `scopingA` (Scoping, ScopingsContainer), `scopingB` (Scoping, ScopingsContainer), `output_selection` (Int32) (optional)

available outputs: `intersection` (Scoping ,ScopingsContainer), `scopingA_min_intersection` (Scoping), `scopingB_indices_without_intersection` (Scoping)

**DPF Framework Reference:** [intersect operator specification](https://developer-a.synopsys.com/docs/dpf-framework-2027-r2/operator-specifications/scoping/intersect.md)

**Parameters:**

* **scopingA**
* **scopingB**
* **output_selection**
* **config**

**Example:**

```python
op = intersect()

op = intersect(scopingA=my_scopingA,scopingB=my_scopingB,output_selection=my_output_selection)
```

## Inputs

### scopingA

A scopings container is only supported when scopingB is a scopings container.

**Type:** *LinkableInput*

### scopingB

A scopings container is supported only when output_selection is 1 (intersection only).

**Type:** *LinkableInput*

### output_selection

Selects the outputs to compute: 0 for both the intersection and the difference, 1 for the intersection only, 2 for the difference only. Outputs that are not computed are returned as empty scopings. Default is 0. Must be 1 if scopingB is a scopings container.

**Type:** *LinkableInput*

## Outputs

### intersection

If scopingB is a scopings container: scopings container with one scoping per non-empty intersection, ordered as scopingA then scopingB, whose label space is the one of the scopingB scoping completed with the one of the scopingA scoping (the labels of scopingA and scopingB must be different).

**Type:** *LinkableOutput*

### scopingA_min_intersection

Empty scoping if scopingB is a scopings container.

**Type:** *LinkableOutput*

### scopingB_indices_without_intersection

Only if scopingB is a scopings container: indices (starting at 0) of the scopings of scopingB intersecting no scoping of scopingA.

**Type:** *LinkableOutput*

## Methods

## Properties

#### *property* inputs: InputSpec

*get/set*

#### *property* outputs: OutputSpec

*get/set*

#### *property* defaultConfig: Config

*get*
