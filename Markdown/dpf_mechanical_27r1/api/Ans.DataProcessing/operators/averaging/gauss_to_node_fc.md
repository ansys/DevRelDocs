---
uid: Ans.DataProcessing.operators.averaging.gauss_to_node_fc
---

# *class* gauss_to_node_fc(fields_container: object = None, mesh: object = None, scoping: object = None, config: OperatorConfig = None)

Extrapolates results available at Gauss or quadrature points to nodal points for a field container. The available elements are: Linear quadrangle, parabolic quadrangle, linear hexagonal, quadratic hexagonal, linear tetrahedral, and quadratic tetrahedral.

available inputs: `fields_container` (FieldsContainer), `mesh` (MeshedRegion, MeshesContainer) (optional), `scoping` (Scoping) (optional)

available outputs: `fields_container` (FieldsContainer)

**DPF Framework Reference:** [gauss_to_node_fc operator specification](https://developer.ansys.com/docs/dpf-framework-2027-r1/operator-specifications/averaging/gauss_to_node_fc.md)

**Parameters:**

* **fields_container**
* **mesh**
* **scoping**
* **config**

**Example:**

```python
op = gauss_to_node_fc()

op = gauss_to_node_fc(fields_container=my_fields_container,mesh=my_mesh,scoping=my_scoping)
```

## Inputs

### fields_container

**Type:** *LinkableInput*

### mesh

The mesh region in this pin is used for extrapolating results available at Gauss or quadrature points to nodal points.

**Type:** *LinkableInput*

### scoping

Extrapolating results on the selected scoping. If it is a scoping container, the label must correspond to the one of the fields containers.

**Type:** *LinkableInput*

## Outputs

### fields_container

**Type:** *LinkableOutput*

## Methods

## Properties

#### *property* inputs: InputSpec

*get/set*

#### *property* outputs: OutputSpec

*get/set*

#### *property* defaultConfig: Config

*get*
