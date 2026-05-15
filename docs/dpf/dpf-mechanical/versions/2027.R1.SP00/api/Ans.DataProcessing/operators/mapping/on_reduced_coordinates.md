---
uid: Ans.DataProcessing.operators.mapping.on_reduced_coordinates
---

# *class* on_reduced_coordinates(fields_container: object = None, reduced_coordinates: object = None, element_ids: object = None, mesh: object = None, use_quadratic_elements: object = None, config: OperatorConfig = None)

Evaluates field data at specified reduced coordinates within given elements using finite element shape function interpolation.

**Reduced coordinates**: Also known as natural or parametric coordinates, these are coordinates in the reference element space (typically ranging from -1 to 1 for most element types). For example, in a quadrilateral element, reduced coordinates $(\xi, \eta)$ map to physical coordinates $(x, y)$ through the element's shape functions.

**Mathematical formulation**: For a field $u$ evaluated at reduced coordinates $\boldsymbol{\xi} = (\xi_1, \xi_2, \xi_3)$ within element $e$, the interpolated value is computed as:

$$u(\boldsymbol{\xi}) = \sum_{i=1}^{N_{nodes}} N_i(\boldsymbol{\xi}) \cdot u_i$$

where $N_i(\boldsymbol{\xi})$ are the element shape functions evaluated at the reduced coordinates, $u_i$ are the field values at the element nodes, and $N_{nodes}$ is the number of nodes in the element.

**Workflow**: This operator is typically used in conjunction with the 'find_reduced_coordinates' operator:

1. **find_reduced_coordinates** - Converts physical coordinates to reduced coordinates and identifies containing elements

2. **on_reduced_coordinates** (this operator) - Interpolates field values at those reduced coordinates

**Shape functions**: The interpolation uses finite element shape functions appropriate for each element type (linear or quadratic triangles, quadrilaterals, tetrahedra, hexahedra, etc.). When `use_quadratic_elements` is enabled, mid-side node shape functions are included for higher accuracy.

**Field location handling**:

- **Nodal fields**: Interpolates using node values and shape functions

- **Elemental nodal fields**: Interpolates using values already defined at element nodes (per element)

- **Shell layers**: For shell elements with multiple layers, interpolation is performed separately for each layer

available inputs: `fields_container` (FieldsContainer), `reduced_coordinates` (Field, FieldsContainer), `element_ids` (ScopingsContainer), `mesh` (MeshedRegion, MeshesContainer) (optional), `use_quadratic_elements` (bool) (optional)

available outputs: `fields_container` (FieldsContainer)

**DPF Framework Reference:** [on_reduced_coordinates operator specification](https://developer.ansys.com/docs/dpf-framework-2027-r1/operator-specifications/mapping/on_reduced_coordinates.md)

**Parameters:**

* **fields_container**
* **reduced_coordinates**
* **element_ids**
* **mesh**
* **use_quadratic_elements**
* **config**

**Example:**

```python
op = on_reduced_coordinates()

op = on_reduced_coordinates(fields_container=my_fields_container,reduced_coordinates=my_reduced_coordinates,element_ids=my_element_ids,mesh=my_mesh,use_quadratic_elements=my_use_quadratic_elements)
```

## Inputs

### fields_container

Fields container with field results to interpolate. Can contain nodal or elemental nodal fields. If fields have mesh support attached, it will be used; otherwise, the `mesh` pin must be connected.

**Type:** *LinkableInput*

### reduced_coordinates

Reduced (natural/parametric) coordinates in reference element space where interpolation will be performed. Typically obtained from the 'find_reduced_coordinates' operator. For a 3D element, this is a 3-component vector field $(\xi, \eta, \zeta)$. Each coordinate set corresponds to a point inside an element.

**Type:** *LinkableInput*

### element_ids

Element IDs specifying which element contains each set of reduced coordinates. Typically obtained from the 'find_reduced_coordinates' operator output (pin 1). Must correspond one-to-one with the reduced coordinates in pin 1.

**Type:** *LinkableInput*

### mesh

Mesh region or meshes container defining the finite element mesh. Required if input fields (pin 0) have no mesh in their support. If a meshes container with multiple meshes is provided, it should have the same label space as the reduced coordinates fields container.

**Type:** *LinkableInput*

### use_quadratic_elements

If true, uses quadratic shape functions (including mid-side nodes) for quadratic elements, providing higher accuracy but lower performance. Default is false (uses linear shape functions). Only enable when field results include values at mid-side nodes.

**Type:** *LinkableInput*

## Outputs

### fields_container

Fields container with interpolated field values at the specified reduced coordinates. Output fields have nodal location and preserve the component structure of input fields. Shell layer data (if present) is interpolated separately for each layer. The number of entities in each output field may be less than the number of input reduced coordinates: a coordinate is omitted if its element ID is not found in the mesh or, for nodal fields, if any of the element's nodes has no data in the field.

**Type:** *LinkableOutput*

## Methods

## Properties

#### *property* inputs: InputSpec

*get/set*

#### *property* outputs: OutputSpec

*get/set*

#### *property* defaultConfig: Config

*get*
