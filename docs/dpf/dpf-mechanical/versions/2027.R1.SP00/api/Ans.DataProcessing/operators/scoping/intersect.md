---
uid: Ans.DataProcessing.operators.scoping.intersect
---

# *class* intersect(scopingA: object = None, scopingB: object = None, config: OperatorConfig = None)

Intersect 2 scopings and return the intersection and the difference between the intersection and the first scoping.

available inputs: `scopingA` (Scoping), `scopingB` (Scoping)

available outputs: `intersection` (Scoping), `scopingA_min_intersection` (Scoping)

**DPF Framework Reference:** [intersect operator specification](https://developer.ansys.com/docs/dpf-framework-2027-r1/operator-specifications/scoping/intersect.md)

**Parameters:**

* **scopingA**
* **scopingB**
* **config**

**Example:**

```python
op = intersect()

op = intersect(scopingA=my_scopingA,scopingB=my_scopingB)
```

## Inputs

### scopingA

**Type:** *LinkableInput*

### scopingB

**Type:** *LinkableInput*

## Outputs

### intersection

**Type:** *LinkableOutput*

### scopingA_min_intersection

**Type:** *LinkableOutput*

## Methods

## Properties

#### *property* inputs: InputSpec

*get/set*

#### *property* outputs: OutputSpec

*get/set*

#### *property* defaultConfig: Config

*get*
