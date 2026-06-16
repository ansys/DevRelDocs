---
uid: Ans.DataProcessing.operators.mesh.skin
---

# *class* skin(mesh: object = None, mesh_scoping: object = None, duplicate_shell: object = None, add_beam_point: object = None, config: OperatorConfig = None)

Extracts a skin of the mesh in a new meshed region. The material ID of initial elements are propagated to their facets.

available inputs: `mesh` (MeshedRegion), `mesh_scoping` (Scoping) (optional), `duplicate_shell` (bool) (optional), `add_beam_point` (bool) (optional)

available outputs: `mesh` (MeshedRegion), `nodes_mesh_scoping` (Scoping), `map_new_elements_to_old` (), `property_field_new_elements_to_old` (PropertyField), `facet_indices` (PropertyField)

**DPF Framework Reference:** [skin operator specification](https://developer.ansys.com/docs/dpf-framework-2027-r1/operator-specifications/mesh/skin.md)

**Parameters:**

* **mesh**
* **mesh_scoping**
* **duplicate_shell**
* **add_beam_point**
* **config**

**Example:**

```python
op = skin()

op = skin(mesh=my_mesh,mesh_scoping=my_mesh_scoping,duplicate_shell=my_duplicate_shell,add_beam_point=my_add_beam_point)
```

## Inputs

### mesh

**Type:** *LinkableInput*

### mesh_scoping

Nodal scoping to restrict the skin extraction to a set of nodes. If provided, a skin element is added to the skin mesh if all its nodes are in the scoping.

**Type:** *LinkableInput*

### duplicate_shell

If input mesh contains shell elements, output mesh shell elements (boolean = 1) are duplicated, one per each orientation, or (boolean = 0) remain unchanged.

**Type:** *LinkableInput*

### add_beam_point

If input mesh contains beam or point elements, output mesh beam point elements (boolean = 1) are added or (boolean = 0) are ignored. Default: False

**Type:** *LinkableInput*

### add_beam

Deprecated alias of: add_beam_point

**Type:** *LinkableInput*

## Outputs

### mesh

Skin meshed region with facets and facets_to_ele property fields.

**Type:** *LinkableOutput*

### nodes_mesh_scoping

**Type:** *LinkableOutput*

### property_field_new_elements_to_old

This property field provides, for each new face element ID (in the scoping), the corresponding 3D volume element index (in the data) it has been extracted from. The 3D volume element ID can be found with the element scoping of the input mesh.

**Type:** *LinkableOutput*

### facet_indices

This property field gives, for each new face element ID (in the scoping), the corresponding face index on the source 3D volume element. The 3D volume element can be extracted from the previous output.

**Type:** *LinkableOutput*

## Methods

## Properties

#### *property* inputs: InputSpec

*get/set*

#### *property* outputs: OutputSpec

*get/set*

#### *property* defaultConfig: Config

*get*
