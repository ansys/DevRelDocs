---
uid: Ans.DataProcessing.operators.scoping.reduce_sampling
---

# *class* reduce_sampling(mesh_scoping: object = None, denominator: object = None, config: OperatorConfig = None)

Take a scoping and remove half of it's content.

available inputs: `mesh_scoping` (Scoping), `denominator` (Int32) (optional)

available outputs: `mesh_scoping` (Scoping)

**DPF Framework Reference:** [reduce_sampling operator specification](https://developer.ansys.com/docs/dpf-framework-2027-r1/operator-specifications/scoping/reduce_sampling.md)

**Parameters:**

* **mesh_scoping**
* **denominator**
* **config**

**Example:**

```python
op = reduce_sampling()

op = reduce_sampling(mesh_scoping=my_mesh_scoping,denominator=my_denominator)
```

## Inputs

### mesh_scoping

**Type:** *LinkableInput*

### denominator

Set the number of time the scoping is reduced (default is 2). Must be integer value above 1.

**Type:** *LinkableInput*

## Outputs

### mesh_scoping

**Type:** *LinkableOutput*

## Methods

## Properties

#### *property* inputs: InputSpec

*get/set*

#### *property* outputs: OutputSpec

*get/set*

#### *property* defaultConfig: Config

*get*
