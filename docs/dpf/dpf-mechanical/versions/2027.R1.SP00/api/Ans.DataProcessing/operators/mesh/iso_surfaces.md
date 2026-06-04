---
uid: Ans.DataProcessing.operators.mesh.iso_surfaces
---

# *class* iso_surfaces(field: object = None, num_surfaces: object = None, mesh: object = None, slice_surfaces: object = None, vector_iso_values: object = None, config: OperatorConfig = None)

iso_surfaces()
iso_surfaces(field: object, num_surfaces: object, mesh: object, slice_surfaces: object, vector_iso_values: object, config: OperatorConfig)
iso_surfaces(config: OperatorConfig)


**DPF Framework Reference:** [iso_surfaces operator specification](https://developer.ansys.com/docs/dpf-framework-2027-r1/operator-specifications/mesh/iso_surfaces.md)

**Parameters:**

* **field**
* **num_surfaces**
* **mesh**
* **slice_surfaces**
* **vector_iso_values**
* **config**

## Inputs

### field

Field containing the values for the iso-surface computation. The mesh can be retrieved from this field's support or through pin 2.

**Type:** *LinkableInput*

### num_surfaces

If provided, iso_values are linearly computed between the min and the max of the field of results. If not, iso_values must be provided by the user through pin 4

**Type:** *LinkableInput*

### mesh

Mesh to compute the iso-surface from. Used when not given through the support of the field in pin 0.

**Type:** *LinkableInput*

### slice_surfaces

True: slicing will also take into account shell and skin elements. False: slicing will ignore shell and skin elements. The default is true.

**Type:** *LinkableInput*

### vector_iso_values

If provided, user defined iso_values to compute. If not provided, iso_values are linearly compute between the min and the max of the field of results.

**Type:** *LinkableInput*

## Outputs

### meshes

**Type:** *LinkableOutput*

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
