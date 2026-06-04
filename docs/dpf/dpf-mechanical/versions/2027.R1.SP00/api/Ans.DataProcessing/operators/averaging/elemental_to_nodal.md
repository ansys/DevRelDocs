---
uid: Ans.DataProcessing.operators.averaging.elemental_to_nodal
---

# *class* elemental_to_nodal(field: object = None, mesh_scoping: object = None, force_averaging: object = None, algorithm: object = None, config: OperatorConfig = None)

Transforms an Elemental field to a Nodal field. The result is computed on a given node's scoping.

1. For a finite element mesh, the value on a node is the average of the values of the neighbour elements.

2. For a volume finite volume mesh, the agorithm is :

   - For each node, compute interpolation weights for the cells connected to it based	on the Frink's Laplacian method.

	- If the determinant of the I matrix is zero, switch to an inverse distance weighted average.

	- If not, compute the Frink weights and apply the Holmes' weight clip.

	- If the clipping produces a large overshoot, inverse volume weighted average is used..

3. For a face finite volume mesh inverse distance weighted average is used.

available inputs: `field` (Field, FieldsContainer), `mesh_scoping` (Scoping) (optional), `force_averaging` (Int32) (optional), `algorithm` (Int32) (optional)

available outputs: `field` (Field)

**DPF Framework Reference:** [elemental_to_nodal operator specification](https://developer.ansys.com/docs/dpf-framework-2027-r1/operator-specifications/averaging/elemental_to_nodal.md)

**Parameters:**

* **field**
* **mesh_scoping**
* **force_averaging**
* **algorithm**
* **config**

**Example:**

```python
op = elemental_to_nodal()

op = elemental_to_nodal(field=my_field,mesh_scoping=my_mesh_scoping,force_averaging=my_force_averaging,algorithm=my_algorithm)
```

## Inputs

### field

field or fields container with only one field is expected

**Type:** *LinkableInput*

### mesh_scoping

**Type:** *LinkableInput*

### force_averaging

Averaging on nodes is used if this pin is set to 1 (default is 1 for integrated results and 0 for discrete ones).

**Type:** *LinkableInput*

### algorithm

Forces the usage of algorithm 1, 2 or 3 (default is chosen based on the type of mesh).

**Type:** *LinkableInput*

## Outputs

### field

**Type:** *LinkableOutput*

## Methods

## Properties

#### *property* inputs: InputSpec

*get/set*

#### *property* outputs: OutputSpec

*get/set*

#### *property* defaultConfig: Config

*get*
