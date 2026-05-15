---
uid: Ans.DataProcessing.operators.mesh.edge_decimation
---

# *class* edge_decimation(mesh: object = None, angular_limit_in_radian: object = None, config: OperatorConfig = None)

Takes a wireframe mesh (line elements) and reduces its node and edge count by collapsing interior nodes whose two incident edges deviate from straight by less than the given angular threshold. Branch nodes and sharp corners are preserved.

available inputs: `mesh` (MeshedRegion), `angular_limit_in_radian` (double)

available outputs: `wireframe` (MeshedRegion)

**DPF Framework Reference:** [edge_decimation operator specification](https://developer.ansys.com/docs/dpf-framework-2027-r1/operator-specifications/mesh/edge_decimation.md)

**Parameters:**

* **mesh**
* **angular_limit_in_radian**
* **config**

**Example:**

```python
op = edge_decimation()

op = edge_decimation(mesh=my_mesh,angular_limit_in_radian=my_angular_limit_in_radian)
```

## Inputs

### mesh

**Type:** *LinkableInput*

### angular_limit_in_radian

angle threshold in radian that will trigger an edge removal.

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
