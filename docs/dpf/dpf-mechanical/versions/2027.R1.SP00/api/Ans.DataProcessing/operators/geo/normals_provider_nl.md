---
uid: Ans.DataProcessing.operators.geo.normals_provider_nl
---

# *class* normals_provider_nl(mesh: object = None, mesh_scoping: object = None, requested_location: object = None, config: OperatorConfig = None)

Computes the normals on nodes/faces/elements based on integration points (more accurate for non-linear elements) on a skin mesh.

available inputs: `mesh` (MeshedRegion), `mesh_scoping` (Scoping) (optional), `requested_location` (string) (optional)

available outputs: `field` (Field)

**DPF Framework Reference:** [normals_provider_nl operator specification](https://developer.ansys.com/docs/dpf-framework-2027-r1/operator-specifications/geo/normals_provider_nl.md)

**Parameters:**

* **mesh**
* **mesh_scoping**
* **requested_location**
* **config**

**Example:**

```python
op = normals_provider_nl()

op = normals_provider_nl(mesh=my_mesh,mesh_scoping=my_mesh_scoping,requested_location=my_requested_location)
```

## Inputs

### mesh

Skin, face, or shell mesh region.

**Type:** *LinkableInput*

### mesh_scoping

Elemental, ElementalNodal, or Nodal scoping. Location derived from this.

**Type:** *LinkableInput*

### requested_location

If no scoping, specifies location. If scoping is Elemental or ElementalNodal this overrides scoping. Default is Elemental.

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
