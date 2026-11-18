---
uid: Ans.DataProcessing.operators.mesh.edge_decimation
---

# *class* edge_decimation(mesh: object = None, angular_limit_in_radian: object = None, config: OperatorConfig = None)

Reduces a wireframe mesh by removing interior nodes whose two incident edges are nearly collinear.

A node is removed only when it has two incident edges with non-zero lengths and their deviation from a straight

line is strictly less than the angular threshold.

Nodes with more than two incident mesh connections, endpoints, and corners at or above the threshold are not

candidates for removal.

Only supported line and edge elements are converted to output edges; other element types do not produce output

elements.

available inputs: `mesh` (MeshedRegion), `angular_limit_in_radian` (double)

available outputs: `wireframe` (MeshedRegion)

**DPF Framework Reference:** [edge_decimation operator specification](https://developer-a.synopsys.com/docs/dpf-framework-2027-r2/operator-specifications/mesh/edge_decimation.md)

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

Input mesh containing line or edge elements to decimate. Supported line and edge element variants are converted to edge connections; other element types do not produce output elements.

**Type:** *LinkableInput*

### angular_limit_in_radian

Required angular threshold in radians. An interior node is removed when the deviation from straightness between its two incident edges is strictly less than this value. Non-positive values disable decimation.

**Type:** *LinkableInput*

## Outputs

### wireframe

Decimated wireframe mesh containing retained connectivity as 2-node line elements. Unsupported input elements and nodes not used by retained edges are omitted. Node coordinates, original node identifiers, and the mesh unit are retained; the output can be empty.

**Type:** *LinkableOutput*

## Methods

## Properties

#### *property* inputs: InputSpec

*get/set*

#### *property* outputs: OutputSpec

*get/set*

#### *property* defaultConfig: Config

*get*
