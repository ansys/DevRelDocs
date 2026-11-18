---
uid: Ans.DataProcessing.operators.mesh.wireframe
---

# *class* wireframe(mesh: object = None, threshold: object = None, element_restriction: object = None, config: OperatorConfig = None)

Extracts a wireframe mesh containing sharp edges from an input mesh.

An edge between adjacent surface facets is included when its

[dihedral angle](https://en.wikipedia.org/wiki/Dihedral_angle) is greater than the threshold in radians.

Shell-element border edges and beam-element edges are also included, regardless of the threshold.

When element_restriction is provided, it limits the surface facets considered for dihedral and shell-border

extraction. Beam elements are included regardless of this scoping.

available inputs: `mesh` (MeshedRegion), `threshold` (double), `element_restriction` (Scoping) (optional)

available outputs: `wireframe` (MeshedRegion)

**DPF Framework Reference:** [wireframe operator specification](https://developer-a.synopsys.com/docs/dpf-framework-2027-r2/operator-specifications/mesh/wireframe.md)

**Parameters:**

* **mesh**
* **threshold**
* **element_restriction**
* **config**

**Example:**

```python
op = wireframe()

op = wireframe(mesh=my_mesh,threshold=my_threshold,element_restriction=my_element_restriction)
```

## Inputs

### mesh

Input mesh from which surface, shell-border, and beam edges are extracted.

**Type:** *LinkableInput*

### threshold

Dihedral-angle threshold in radians. A surface edge is included when the angle between adjacent surface normals is greater than this value. Shell-border and beam edges are included regardless of this threshold.

**Type:** *LinkableInput*

### element_restriction

Optional elemental scoping that limits surface facets used for dihedral and shell-border edge extraction. If omitted, all eligible surface facets are considered. Beam elements are included regardless of this scoping.

**Type:** *LinkableInput*

## Outputs

### wireframe

New wireframe mesh containing line elements for extracted edges and only nodes used by those edges. It can be empty when no edges are selected. Node coordinates and original node identifiers are retained.

**Type:** *LinkableOutput*

## Methods

## Properties

#### *property* inputs: InputSpec

*get/set*

#### *property* outputs: OutputSpec

*get/set*

#### *property* defaultConfig: Config

*get*
