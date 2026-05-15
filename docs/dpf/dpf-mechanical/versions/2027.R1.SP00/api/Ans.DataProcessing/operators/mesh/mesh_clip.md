---
uid: Ans.DataProcessing.operators.mesh.mesh_clip
---

# *class* mesh_clip(field: object = None, iso_value: object = None, closed_surface: object = None, mesh: object = None, slice_surfaces: object = None, config: OperatorConfig = None)

mesh_clip()
mesh_clip(field: object, iso_value: object, closed_surface: object, mesh: object, slice_surfaces: object, config: OperatorConfig)
mesh_clip(config: OperatorConfig)


**DPF Framework Reference:** [mesh_clip operator specification](https://developer.ansys.com/docs/dpf-framework-2027-r1/operator-specifications/mesh/mesh_clip.md)

**Parameters:**

* **field**
* **iso_value**
* **closed_surface**
* **mesh**
* **slice_surfaces**
* **config**

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
