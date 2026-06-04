---
uid: Ans.DataProcessing.operators.scoping.extend_midside_nodal_scoping
---

# *class* extend_midside_nodal_scoping(nodal_mesh_scoping: object = None, mesh: object = None, add_new_properties_to_mesh: object = None, config: OperatorConfig = None)

Extends the input nodal scoping with the neighbor corner nodes of every midside node in the input. For each midside node in the scoping, the two corner nodes that bound it on the element edge are added to the output scoping.

available inputs: `nodal_mesh_scoping` (Scoping), `mesh` (MeshedRegion), `add_new_properties_to_mesh` (bool) (optional)

available outputs: `nodal_mesh_scoping` (Scoping)

**DPF Framework Reference:** [extend_midside_nodal_scoping operator specification](https://developer.ansys.com/docs/dpf-framework-2027-r1/operator-specifications/scoping/extend_midside_nodal_scoping.md)

**Parameters:**

* **nodal_mesh_scoping**
* **mesh**
* **add_new_properties_to_mesh**
* **config**

**Example:**

```python
op = extend_midside_nodal_scoping()

op = extend_midside_nodal_scoping(nodal_mesh_scoping=my_nodal_mesh_scoping,mesh=my_mesh,add_new_properties_to_mesh=my_add_new_properties_to_mesh)
```

## Inputs

### nodal_mesh_scoping

Nodal mesh scoping. Must have nodal location, otherwise an error is thrown.

**Type:** *LinkableInput*

### mesh

Mesh region used to determine element connectivity and identify midside nodes.

**Type:** *LinkableInput*

### add_new_properties_to_mesh

If true, the new mesh properties that are computed (like reversed connectivities) are kept in the mesh. Default is false.

**Type:** *LinkableInput*

## Outputs

### nodal_mesh_scoping

Extended nodal scoping containing all original nodes plus corner nodes neighboring any midside nodes.

**Type:** *LinkableOutput*

## Methods

## Properties

#### *property* inputs: InputSpec

*get/set*

#### *property* outputs: OutputSpec

*get/set*

#### *property* defaultConfig: Config

*get*
