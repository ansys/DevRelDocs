---
uid: Ans.DataProcessing.operators.mesh.mesh_cut
---

# *class* mesh_cut(field: object = None, iso_value: object = None, closed_surface: object = None, mesh: object = None, slice_surfaces: object = None, config: OperatorConfig = None)

Extracts a skin of the mesh in triangles in a new meshed region.

available inputs: `field` (Field), `iso_value` (double), `closed_surface` (Int32), `mesh` (MeshedRegion) (optional), `slice_surfaces` (bool)

available outputs: `mesh` (MeshedRegion)

**DPF Framework Reference:** [mesh_cut operator specification](https://developer.ansys.com/docs/dpf-framework-2027-r1/operator-specifications/mesh/mesh_cut.md)

**Parameters:**

* **field**
* **iso_value**
* **closed_surface**
* **mesh**
* **slice_surfaces**
* **config**

**Example:**

```python
op = mesh_cut()

op = mesh_cut(field=my_field,iso_value=my_iso_value,closed_surface=my_closed_surface,mesh=my_mesh,slice_surfaces=my_slice_surfaces)
```

## Inputs

### field

Field containing the values for the iso-surface computation. The mesh can be retrieved from this field's support or through pin 2.

**Type:** *LinkableInput*

### iso_value

iso value

**Type:** *LinkableInput*

### closed_surface

1: closed surface, 0: iso surface.

**Type:** *LinkableInput*

### mesh

Mesh to compute the iso-surface from. Used when not given through the support of the field in pin 0.

**Type:** *LinkableInput*

### slice_surfaces

True: slicing will also take into account shell and skin elements. False: slicing will ignore shell and skin elements. The default is true.

**Type:** *LinkableInput*

## Outputs

### mesh

**Type:** *LinkableOutput*

## Methods

## Properties

#### *property* inputs: InputSpec

*get/set*

#### *property* outputs: OutputSpec

*get/set*

#### *property* defaultConfig: Config

*get*
