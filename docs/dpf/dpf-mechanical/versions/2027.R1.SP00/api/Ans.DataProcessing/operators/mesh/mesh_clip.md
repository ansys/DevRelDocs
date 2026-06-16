---
uid: Ans.DataProcessing.operators.mesh.mesh_clip
---

# *class* mesh_clip(field: object = None, iso_value: object = None, closed_surface: object = None, mesh: object = None, slice_surfaces: object = None, config: OperatorConfig = None)

Clips a volume mesh along an iso value x, and construct the volume mesh defined by v < x.

available inputs: `field` (Field), `iso_value` (double), `closed_surface` (Int32), `mesh` (MeshedRegion) (optional), `slice_surfaces` (bool)

available outputs: `field` (Field), `mesh` (MeshedRegion)

**DPF Framework Reference:** [mesh_clip operator specification](https://developer.ansys.com/docs/dpf-framework-2027-r1/operator-specifications/mesh/mesh_clip.md)

**Parameters:**

* **field**
* **iso_value**
* **closed_surface**
* **mesh**
* **slice_surfaces**
* **config**

**Example:**

```python
op = mesh_clip()

op = mesh_clip(field=my_field,iso_value=my_iso_value,closed_surface=my_closed_surface,mesh=my_mesh,slice_surfaces=my_slice_surfaces)
```

## Inputs

### field

**Type:** *LinkableInput*

### iso_value

iso value

**Type:** *LinkableInput*

### closed_surface

1: closed surface, 0: iso surface.

**Type:** *LinkableInput*

### mesh

**Type:** *LinkableInput*

### slice_surfaces

True: slicing will also take into account shell and skin elements. False: slicing will ignore shell and skin elements. The default is true.

**Type:** *LinkableInput*

## Outputs

### field

**Type:** *LinkableOutput*

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
