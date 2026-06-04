---
uid: Ans.DataProcessing.operators.geo.gauss_to_node
---

# *class* gauss_to_node(field: object = None, scoping: object = None, mesh: object = None, config: OperatorConfig = None)

Extrapolating results available at Gauss or quadrature points to nodal points for one field. The available elements are: Linear quadrangle, parabolic quadrangle, linear hexagonal, quadratic hexagonal, linear tetrahedral, and quadratic tetrahedral

available inputs: `field` (Field), `scoping` (Scoping) (optional), `mesh` (MeshedRegion) (optional)

available outputs: `field` (Field)

**DPF Framework Reference:** [gauss_to_node operator specification](https://developer.ansys.com/docs/dpf-framework-2027-r1/operator-specifications/geo/gauss_to_node.md)

**Parameters:**

* **field**
* **scoping**
* **mesh**
* **config**

**Example:**

```python
op = gauss_to_node()

op = gauss_to_node(field=my_field,scoping=my_scoping,mesh=my_mesh)
```

## Inputs

### field

**Type:** *LinkableInput*

### scoping

Scoping to integrate on, if not provided, the one from input field is provided.

**Type:** *LinkableInput*

### mesh

Mesh to integrate on.

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
