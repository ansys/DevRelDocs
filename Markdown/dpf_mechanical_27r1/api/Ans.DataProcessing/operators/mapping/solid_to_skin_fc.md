---
uid: Ans.DataProcessing.operators.mapping.solid_to_skin_fc
---

# *class* solid_to_skin_fc(fields_container: object = None, mesh: object = None, solid_mesh: object = None, config: OperatorConfig = None)

Projects field values from a 3D solid (volume) mesh onto its 2D surface (skin) mesh for all fields in a FieldsContainer. This operator handles the geometric and topological mapping between solid elements and their boundary faces, preserving field data during the transition from volume to surface representation.

## Use cases

This operator is essential for:

- **Data reduction**: Extracting surface results from 3D solid simulations for efficient visualization and post-processing

- **Boundary analysis**: Analyzing field distributions on the outer surface of solid bodies

- **Interface coupling**: Preparing surface fields for multiphysics coupling or boundary condition application

## Mapping methodology

The mapping strategy depends on the input field's location type:

### 1. Elemental location

**Source**: Field values defined at solid element centers

**Target**: Field values at skin element centers

**Method**: Direct value copying from solid elements to their corresponding boundary faces

For each skin element (face), the operator identifies the underlying solid element and copies its field value. The correspondence is established through the mesh topology relationship stored in the skin mesh properties.

### 2. Nodal location

**Source**: Field values defined at solid mesh nodes

**Target**: Field values at skin mesh nodes

**Method**: Scoping restriction to skin surface nodes

The solid field is rescoped to include only nodes present on the skin surface. Since solid and skin meshes share the same nodes on the boundary, this is a direct node-to-node value transfer.

### 3. Elemental nodal location

**Source**: Field values defined per element at element nodes

**Target**: Field values per skin element at corner face nodes

**Method**: Face-specific node value extraction

Only corner nodes are populated; mid-side node positions are not extracted from the solid element data. This preserves the elemental nodal structure where each element has its own set of nodal values (e.g., integration point results).

## Geometric relationship

The skin mesh must be derived from the solid mesh with proper topology information:

- **facets**: Property field defining the flat face ID for each skin element

- **facets_to_ele**: Property field defining the parent solid element for each face

These properties establish the solid-to-skin connectivity required for accurate field mapping.

## Performance considerations

The operator automatically selects an optimal iteration strategy based on the relative sizes of the skin mesh and the input field's scoping, minimising the number of look-up operations at runtime.

available inputs: `fields_container` (FieldsContainer), `mesh` (MeshedRegion), `solid_mesh` (MeshedRegion) (optional)

available outputs: `fields_container` (FieldsContainer)

**DPF Framework Reference:** [solid_to_skin_fc operator specification](https://developer.ansys.com/docs/dpf-framework-2027-r1/operator-specifications/mapping/solid_to_skin_fc.md)

**Parameters:**

* **fields_container**
* **mesh**
* **solid_mesh**
* **config**

**Example:**

```python
op = solid_to_skin_fc()

op = solid_to_skin_fc(fields_container=my_fields_container,mesh=my_mesh,solid_mesh=my_solid_mesh)
```

## Inputs

### fields_container

**Type:** *LinkableInput*

### mesh

**Type:** *LinkableInput*

### solid_mesh

**Type:** *LinkableInput*

## Outputs

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
